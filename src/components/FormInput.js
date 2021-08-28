import React from 'react';
import '../styles/formInput.scss'


const FormInput = ({ onChange, label, ...otherProps}) => {
    console.log('otherProps: ', otherProps.value )
    return (
    <div className='group'>
       <input className='form-input' onChange={onChange} {...otherProps}/>  
       {label ? (
            <label 
                className={`${otherProps.value && otherProps.value.length ? 'shrink' : ''} form-input-label`}>
            {label}
            </label>
        ) : null}
    </div>
)}

export default FormInput;



