import React from 'react'
import FormRegisterLogin from './FormRegisterLogin'


const Login = ()=>{
    return (
        <div className="card mycard card-center">
            <h2>Login</h2>
            <FormRegisterLogin/>
            <button className='btn btn-primary'>Login</button>
        </div>
    )
}

export default Login