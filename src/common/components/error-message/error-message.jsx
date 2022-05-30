import React from 'react'

const ErrorMessage = ({message, touched }) => {

  return (
    message && touched && <div className='error'>
        {
            message
        }
    </div>
  )
}

export default ErrorMessage