import React from 'react'
import '../App.css'

const FormRegisterLogin = ()=>{
    return (
        <div className="mycard">
             <div className="form-group ">
                <label for="inputEmail4">Email</label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
            </div>
            <div class="form-group ">
                <label for="inputPassword4">Password</label>
                <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
            </div>
        </div> 

    )
}

export default FormRegisterLogin