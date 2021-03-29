import React from 'react';
import {
  View
} from 'react-native';
import * as Yup from 'yup'
import { Field, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { actions } from '../../../store/diary';

import ButtonBase from '../../../components/base/ButtonBase';

import { styles } from './styles'
import InputBase from '../../../components/base/InputBase';

const DiarySchema = Yup.object().shape({
  title: Yup
    .string()
    .max(60, ({ max }) => 'Máximo de 60 dígitos')
    .required('Este campo é obrigatório'),
  text: Yup
    .string()
    .max(3000, ({ max }) => 'Máximo de 3000 dígitos')
    .required('Este campo é obrigatório'),
})

const BodyWriteDiary = (props) => {
  const dispatch = useDispatch()

  return (
    <View style={props.containerStyle}>
      <Formik
        initialValues={{
          title: '',
          text: ''
        }}
        validationSchema={DiarySchema}
        onSubmit={(form, { resetForm }) => {
          dispatch(actions.writeDiary(form))
          resetForm()
        }}
      >
        {({ handleSubmit }) => (<>
          <View style={styles.message}>
            <Field
              name="title"
              component={InputBase}
              placeholder="Meu diário hoje, 27 de julho"
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
              onPress={handleSubmit}
            />
          </View>
        </>)}
      </Formik>
    </View>
  );
};

export default BodyWriteDiary;