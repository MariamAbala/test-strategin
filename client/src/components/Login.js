import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'





const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [mdp, setMdp] = useState("")
    const [msg, setMsg] = useState("")

    const postData = () => {
        fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                mdp
            }),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if(data.error){
                    setMsg(data)
                }else{
                    localStorage.setItem('jwt',data.token)
                    localStorage.setItem('user',JSON.stringify(data.user))
                   navigate('/users')
                }
                
            })
           .catch(error => {
                console.error('Error:', error);
            });
    }
    return (
        <div className="card mycard card-center">
            <h2>Login</h2>
            <div className="mycard">
                <div className="form-group ">
                    <label for="inputEmail">Email</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div class="form-group ">
                    <label for="inputPassword">Password</label>
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" value={mdp} onChange={(e) => setMdp(e.target.value)} />
                </div>
            </div>
            <button className='btn btn-primary' onClick={() => postData()}>Login</button>
            <label className='label-color'>{msg.error}</label>
        </div>
        )
}

export default Login