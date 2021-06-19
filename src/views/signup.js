import axios from 'axios'
import { useState } from 'react'

export const Signup =()=>{

    const [user, setUser]=useState('');
    const [userPassword, setPassword]=useState('');

    const updateUsername = e => setUser(e.target.value);
    const updatePassword = e => setPassword(e.target.value);
    
    const searchUser =async()=>{
        await axios.post('http://localhost:5500/users',{username:user, password:userPassword})
        .then(Response=>{
            console.log(Response.data)
            alert('te has registrado')		
        })
    }

    
return(
       <div className="my-1">
            <label htmlFor="form-control">username</label>
            <input type="text" className="form-control" onChange={updateUsername} />
            <label htmlFor="exampleFormControlTextarea1">password</label>
            <input type="text" className="form-control" onChange={updatePassword} />
            <button className="btn btn-primary mt-1" onClick={searchUser}>
                register
            </button>

        </div>
    )

}