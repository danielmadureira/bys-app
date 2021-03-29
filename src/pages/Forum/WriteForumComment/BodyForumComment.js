import React, { useEffect } from 'react';
import {
  View
} from 'react-native';
import * as Yup from 'yup'
import { Field, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../store/forum';

import ButtonBase from '../../../components/base/ButtonBase';

import { styles } from './styles'
import InputBase from '../../../components/base/InputBase';
import { AlertBase } from '../../../components';

const DiarySchema = Yup.object().shape({
  text: Yup
    .string()
    .max(3000, ({ max }) => 'Máximo de 3000 dígitos')
    .required('Este campo é obrigatório'),
})

const BodyForumComment = (props) => {
  const dispatch = useDispatch()
  const { isSend } = useSelector(state => state.forum)

  useEffect(() => {
    if (isSend) {
      setTimeout(() => {
        dispatch(actions.isSend(false))
      }, 2000);
    }
  }, [isSend])

  return (
    <View style={props.containerStyle}>
      <Formik
        initialValues={{
          text: ''
        }}
        validationSchema={DiarySchema}
        onSubmit={(form, { resetForm }) => {
          dispatch(actions.addComment({
            text: form.text,
            forum_room_id: props.room_id
          }))

          resetForm()
        }}
      >
        {({ handleSubmit }) => (<>
          {isSend &&
            <AlertBase type="success">
              Seu comentário foi enviado.
            </AlertBase>
          }

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