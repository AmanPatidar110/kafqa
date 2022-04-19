import React, { useState } from 'react'
import { Formik } from 'formik'

import personImage from '../../Assets/user.png'
import classes from './Form.module.css'
import Page from '../Page/Page'
import { useHistory } from 'react-router-dom'

function Form () {
  const [message, setMessage] = useState('')
  const linkStack = useHistory()
  const data = {
    name: 'rohit',
    email: 'rroo@gmail.com',
    password: '1234567890',
    phoneNo: '9876543210'
  }

  return (
    <Formik
      initialValues={{ email: '', password: '', name: '', phone: '' }}
      validate={values => {
        const errors = {}

        if (!values.email) {
          errors.email = 'Required!'
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address'
        }

        if (!values.password) {
          errors.password = 'Required!'
        }

        if (!values.phone) {
          errors.phone = 'Required!'
        }

        if (!values.name) {
          errors.name = 'Required!'
        }

        return errors
      }}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        console.log('HIT')
        if (
          values.email === data.email &&
          values.password === data.password &&
          values.phone === data.phoneNo &&
          values.name === data.name
        ) {
          setMessage('You are valid user')
          setSubmitting(false)
          // resetForm()
          linkStack.push('/home')
        } else {
          setMessage('YOU ARE NOT A VALID USER')
          setSubmitting(false)
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        resetForm
        /* and other goodies */
      }) => (
        <Page>
          <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.topImage}>
              <img src={personImage} className={classes.personImage} alt='' />
            </div>

            <div className={classes.inputs}>
              <input
                type='text'
                name='name'
                placeholder='Your Name'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <div className={classes.error}>
                {errors.name && touched.name && errors.name}
              </div>

              <input
                placeholder='Email'
                type='email'
                name='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <div className={classes.error}>
                {errors.email && touched.email && errors.email}
              </div>

              <input
                placeholder='Password'
                type='password'
                name='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <div className={classes.error}>
                {errors.password && touched.password && errors.password}
              </div>

              <input
                placeholder='Phone'
                type='tel'
                name='phone'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
              <div className={classes.error}>
                {errors.phone && touched.phone && errors.phone}
              </div>

              <div className={classes.buttons}>
                <button
                  className={classes.reset}
                  type=''
                  disabled={isSubmitting}
                  onClick={resetForm}
                >
                  Reset
                </button>
                <button
                  className={classes.submit}
                  type='submit'
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </div>
              <p style={{ color: '#E3006B' }}>{message && message}</p>
            </div>
          </form>
        </Page>
      )}
    </Formik>
  )
}

export default Form
