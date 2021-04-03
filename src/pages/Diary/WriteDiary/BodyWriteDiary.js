import React from 'react';
import {
  View
} from 'react-native';
import * as Yup from 'yup'
import { Field, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { actions } from '../../../store/diary';

import { styles } from './styles'
import { DateHelpers } from '../../../helpers/dateHelpers';
import { ButtonBase, InputBase } from '../../../components';

const DiarySchema = Yup.object().shape({
  title: Yup
    .string()
    .max(60, ({ max }) => 'Máximo de 60 dígitos'),
  text: Yup
    .string()
    .max(3000, ({ max }) => 'Máximo de 3000 dígitos')
    .required('Este campo é obrigatório'),
})

const BodyWriteDiary = (props) => {
  const dispatch = useDispatch()
  const titleDefault = `Meu diário hoje, ${DateHelpers.getBrazilianLongDate(new Date())}`

  return (
    <View style={props.containerStyle}>
      <Formik
        initialValues={{
          title: '',
          text: ''
        }}
        validationSchema={DiarySchema}
        onSubmit={(form, { resetForm }) => {
          if (form.title === '') {
            form.title = titleDefault
          }
          dispatch(actions.writeDiary(form))
          resetForm({
            title: '',
            text: ''
          })
        }}
      >
        {({ handleSubmit, isValid }) => (<>
          <View style={styles.message}>
            <Field
              name="title"
              component={InputBase}
              placeholder={titleDefault}
            />
            <Field
              name="text"
              component={InputBase}
              placeholder="Você pode digitar qualquer coisa aqui."
              style={styles.input_area}
              multiline={true}
              numberOfLines={props.numberOfLines}
            />
          </View>

          <View style={props.btnStyle}>
            <ButtonBase
              title="Publicar no diário"
              background="#EAEBCF"
              color="#000"
              radius={15}
              onPress={() => {
                handleSubmit()
              }}
              disabled={!isValid}
            />
          </View>
        </>)}
      </Formik>
    </View>
  );
};

export default BodyWriteDiary;