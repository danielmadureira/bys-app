import React from 'react';
import {
  View
} from 'react-native';
import * as Yup from 'yup'
import { Field, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { actions } from '../../../store/forum';

import ButtonBase from '../../../components/base/ButtonBase';

import { styles } from './styles'
import InputBase from '../../../components/base/InputBase';

const DiarySchema = Yup.object().shape({
  text: Yup
    .string()
    .max(3000, ({ max }) => 'Máximo de 3000 dígitos')
    .required('Este campo é obrigatório'),
})

const BodyForumComment = (props) => {
  const dispatch = useDispatch()

  return (
    <View style={props.containerStyle}>
      <Formik
        initialValues={{
          text: ''
        }}
        validationSchema={DiarySchema}
        onSubmit={(form) => {
          dispatch(actions.addComment({
            text: form.text,
            forum_room_id: props.room_id
          }))
        }}
      >
        {({ handleSubmit }) => (<>
          <View style={styles.message}>
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
              title="Comentar"
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

export default BodyForumComment;