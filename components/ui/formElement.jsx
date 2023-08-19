import React from 'react'

const FormElement = ({
    type,
    label,
    placeholder,
    fieldRef,
    hasError
}) => {
    const classes = "form-control w-full px-3 py-1.5 text-gray-700 rounded border border-[#eaeaea] cursor-pointer min-h-[40px] focus:border-primary-green focus:outline-none"
  return (
    <div className='form-group mb-6'>
        <label className='block text-gray-700 text-small mb-2'>
            {label}
        </label>
        {type === 'textarea' ? (
            <textarea className={classes} rows="3" placeholder={placeholder} {...fieldRef} />
        ) : (
            <input className={classes} type={type} placeholder={placeholder} {...fieldRef} />
        )}

        {hasError && <p className="text-red-500 text-xs italic">
            {`${label} is required!`}</p>}
    </div>
  )
}

export default FormElement