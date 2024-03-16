import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import '../index.css';
import { NavLink } from 'react-router-dom';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/users')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, []); 

    return (
        <div className='container mt-5'>
            <h2>Crud App with JSON Server</h2>
            <NavLink to="/create" className='btn btn-success my-3'>Create +</NavLink>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, i) => (
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.email}</td>
                            <td>
                              <button>Update</button>
                              <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
