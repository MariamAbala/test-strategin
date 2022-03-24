import React from 'react'
import FormRegisterLogin from './FormRegisterLogin'
 

const Register = ()=>{
    return (
        <div className="card mycard card-center">
            <h2>Register</h2>
            <FormRegisterLogin/>
            <button className='btn btn-primary'>Register</button>
        </div>
    )
}

export default Register