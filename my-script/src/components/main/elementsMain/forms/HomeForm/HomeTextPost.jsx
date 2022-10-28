import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import './HomeForm.css';
import * as yup from 'yup'


const HomeTextPost = (props) => {
    const validationSchema = yup.object().shape({
    name: yup.string().typeError('Не строка').min( 2, "Must be longer than 2 characters" )
    .max( 55, "Must be shorter than 5 characters" ).required('Поле не заполнено')
  })
    return (
      <div>
        <Formik
            initialValues = {{
              name:'',
              
            }}
          onSubmit = {(values) => {props.NewPost(values)}}
          validationSchema = {validationSchema}
        >
          {({touched, isValid, errors, values, handleChange, handleBlur, handleSubmit, dirty}) => (
            <Form>
              <Field className='textarea' type={'text'} name={'name'} component='textarea' onChange={handleChange} onBlur={handleBlur}/>
              <ErrorMessage className="error" name='name' component='div' />
              <div><button disabled={!isValid && !dirty} className="btn" type="submit" onClick={handleSubmit}>Добавить</button></div>
            </Form>
          )}
  
  
        </Formik>
      </div>
    )
  }

  export default HomeTextPost;