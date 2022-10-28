import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import * as yup from "yup";
import { loginThunk, logoutThunk} from "../../../../redux/reducers/authReducer";
import './login.css'





const Login = (props) => {
    if(props.isAuth) {
        return <Navigate to='/home' />
     }

     let onSubmit = (values, onSubmitProps) => {
        props.loginThunk(values.email, values.password, values.rememberMe, onSubmitProps.setStatus, onSubmitProps.setSubmitting);
        onSubmitProps.setSubmitting(true);
      };

    const validationSchema = yup.object().shape({
        name: yup.string().typeError('Введите строку').min( 2, "Must be longer than 2 characters" )
        .max( 5, "Must be shorter than 5 characters" ),
        secondname: yup.string().typeError('Введите строку').min( 2, "Must be longer than 2 characters" )
        .max( 5, "Must be shorter than 5 characters" ),
        email: yup.string().email('Введите верный email').required('Поле не заполнено'),
        confirmEmail: yup.string().email('Введите верный email').oneOf([yup.ref('email')], 'Email не совпадают').required('Поле не заполнено'),
        password: yup.string().typeError('Недопустимый пароль').min( 6, "Must be longer than 2 characters" )
        .max( 15, "Must be shorter than 5 characters" ).required('Пароль не введен'),
        confirmPassword: yup.string().typeError('Недопустимый пароль').oneOf([yup.ref('password')], 'Пароли не совпадают').min( 6, "Must be longer than 2 characters" )
        .max( 15, "Must be shorter than 5 characters" ).required('Пароль не введен')
       
    })
      
    return (
      

            <div>
                <Formik
                    initialValues={{
                        name: '',
                        secondname: '',
                        email: '',
                        confirmEmail: '',
                        password: '',
                        confirmPassword: '',
                        rememberMe: '',
                        submit: ''
                    }}                  
                    validateOnBlur
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    {({values, errors, touched, handleChange, isSubmitting,
                     handleBlur, isValid, handleSubmit, dirty, status}) => (
                        <Form >
                            
                            <div className="form">
                            <label htmlFor={'name'} className='label'>Имя</label><br />
                            <Field className='input' type={'text'} name={'name'} onChange={handleChange} onBlur={handleBlur} value={values.name}/>
                            <ErrorMessage name="name" component="div" className="error"/>
                            </div>
                            <div className="form">
                            <label htmlFor={'secondname'} className='label'>Фамилия</label><br />
                            <Field className='input' type={'text'} name={'secondname'} onChange={handleChange} onBlur={handleBlur} value={values.secondname}/>
                            <ErrorMessage name="secondname" component="div" className="error"/>
                            </div>
                            <div className="form">
                            <label htmlFor={'name'} className='label'>Email</label><br />
                            <Field className='input' type={'email'} name={'email'} onChange={handleChange} onBlur={handleBlur} value={values.email}/>
                            <ErrorMessage name="email" component="div" className="error"/>
                            </div>
                            <div className="form">
                            <label htmlFor={'email'} className='label'>Подтвердите Email</label><br />
                            <Field className='input' type={'email'} name={'confirmEmail'} onChange={handleChange} onBlur={handleBlur} value={values.confirmEmail}/>
                            <ErrorMessage name="confirmEmail" component="div" className="error"/>
                            </div>
                            <div className="form">
                            <label htmlFor={'password'} className='label'>Пароль</label><br />
                            <Field className='input' type={'password'} name={'password'} onChange={handleChange} onBlur={handleBlur} value={values.password}/>
                            <ErrorMessage name="password" component="div" className="error"/>
                            </div>
                            <div className="form">
                            <label htmlFor={'confirmPassword'} className='label'>Подтвердите пароль</label><br />
                            <Field className='input' type={'password'} name={'confirmPassword'} onChange={handleChange} onBlur={handleBlur} value={values.confirmPassword}/>
                            <ErrorMessage name="confirmPassword" component="div" className="error"/>
                            </div>

                            <div className="form">
                            
                            <Field className='checkbox' type={'checkbox'} name={'rememberMe'}/>
                            <ErrorMessage name="rememberMe" component="checkbox" className="error"/>
                            <label htmlFor={'checkbox'} className='label'>Запомнить</label>
                            </div>

                            <div className='error'>{status}</div> 

                            <div className="form">
                            <button type="submit" disabled={isSubmitting}>Login</button>
                                    {status && <div>{status}</div>}
                            </div>


                        </Form>
                     )
                     }
                </Formik>
            </div>
    )
}



let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
    
}


export default connect(mapStateToProps ,{loginThunk, logoutThunk})(Login)