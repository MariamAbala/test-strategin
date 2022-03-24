import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'


const Users = () => {
    const [data, setData] = useState([])
    const [msg, setMsg] = useState("")
    const [islogged,setLogged]=useState(false)
    const navigate = useNavigate()
    const setLoggedIn= () => {
        setLogged(true)
    }
    useEffect(() => {
        fetch('http://localhost:4000/users', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('jwt')
            }
        }).then(res => res.json())
            .then(result => {
                console.log(result)
                if (!result.error) {
                    setData(result.users)
                    setLoggedIn()
                    
                } else {
                    setMsg(result)
                    console.log('error' + msg.error)
                }
                

            })
    }, [])
    return (
        <div>
            { islogged && (
                <div className='card-center table-pos'>
                    <h2>Liste des utilisateurs</h2>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(item => {
                                    return (
    
                                        <tr>
                                            <td>{item.email}</td>
                                        </tr>
    
                                    )
                                })
                            }             
                        </tbody>
                    </table>
                    <button className='btn btn-dark' onClick={()=>{localStorage.clear(); navigate('/login')}}>Logout</button>
                </div>
            )}
            {
                !islogged && (
                    <h2 className='label-color'>{msg.error}</h2>

                )
            }
           
        </div>
    )
}

export default Users