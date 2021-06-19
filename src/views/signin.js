import axios from 'axios'
import { useState } from 'react'

export const Login =()=>{

    const [user, setUser]=useState('');
    const [userPassword, setPassword]=useState('');

    const updateUsername = e => setUser(e.target.value);
    const updatePassword = e => setPassword(e.target.value);
    
    const searchUser =()=>{
        axios.get('http://localhost:5500/users',{params:{username:user, password:userPassword}})
        .then(Response=>{
            console.log(Response.data)
	        alert('usuario encontrado')		
        })
    }

    
return(
       <div className="my-1">
            <label htmlFor="form-control">username</label>
            <input type="text" className="form-control" onChange={updateUsername} />
            <label htmlFor="exampleFormControlTextarea1">password</label>
            <input type="text" className="form-control" onChange={updatePassword} />
            <button className="btn btn-primary mt-1" onClick={searchUser}>
                login
            </button>

        </div>
    )

}