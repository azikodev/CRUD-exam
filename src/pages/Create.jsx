import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [inputData, setInputData] = useState({
        name: '',
        email: ''
    });
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/users', inputData)
        .then(res=>{
            alert("Data Posted Succesfully!")
            navigate('/');
        })
    }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name='name' className='form-control'
                        onChange={e=>setInputData({...inputData, name:e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="name">Email:</label>
                        <input type="email" name='email' className='form-control'
                        onChange={e=>setInputData({...inputData, email:e.target.value})}/>
                    </div> <br />
                    <button className='btn btn-info'>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Create;  