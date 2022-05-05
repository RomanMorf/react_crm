import React from 'react';
import './style.scss';

import { useFormik } from 'formik';
import { validate } from 'src/helpers/validate';

import InputField from 'src/components/elements/InputField';
import Button from 'src/components/elements/Button';

function FormEditUser({
  children,
  title,
  style,
  handleSubmit,
  handleCancel,
  formData,
  btnReset,
  btnCancel = true,
  btnSubmit = true,
  btnSubmitName,
  btnCancelName
  }) {

  const formik = useFormik({
    initialValues: {...formData || {}},
    validate,
    onSubmit: values => handleSubmit(values),
  });

  return (
    <form className='form' onSubmit={ formik.handleSubmit } style={style}>
      <div className="form_slot">
        {title && <h2>{title}</h2>}
        {children}
        <InputField 
          id='name'
          name='name'
          type='name'
          value={ formik.values.name }
          onChange={ formik.handleChange }
          placeholder='Enter your name'
        />
        {formik.errors.name ? <span className='form_helper'>{ formik.errors.name }</span> : null}
      </div>
      <div className="form_slot">
        <InputField 
          id='surname'
          name='surname'
          type='surname'
          value={ formik.values.surname }
          onChange={ formik.handleChange }
          placeholder='Enter your surname'
        />
        {formik.errors.surname ? <span className='form_helper'>{ formik.errors.surname }</span> : null}
      </div>
      <div className="form_slot">
        <InputField 
          id='nickName'
          name='nickName'
          type='nickName'
          value={ formik.values.nickName }
          onChange={ formik.handleChange }
          placeholder='Enter your nickname'
        />
        {formik.errors.nickName ? <span className='form_helper'>{ formik.errors.nickName }</span> : null}
      </div>
      <div className="form_slot">
        <InputField 
          id='tel'
          name='tel'
          type='tel'
          value={ formik.values.tel }
          onChange={ formik.handleChange }
          placeholder='Enter your telephone number'
        />
        {formik.errors.tel ? <span className='form_helper'>{ formik.errors.tel }</span> : null}
      </div>
      <div className="form_bottom">
        {btnSubmit && <Button type='submit' name={ btnSubmitName ? btnSubmitName : 'Submit' }/>}
        {btnReset && <Button onClick={ formik.resetForm() } name='Reset'/>}
        {btnCancel && <Button onClick={ handleCancel } name={btnCancelName ? btnCancelName : 'Cancel'}/>}
      </div>
    </form>
  )
}

export default FormEditUser;