import React from 'react'

const Users = () => {
    return (
        <div className='card-center table-pos'>
            <h2>Liste des utilisateurs</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>mariamabala@gmail.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Users