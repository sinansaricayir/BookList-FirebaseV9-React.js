import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

const Login = () => {

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const{login,error} = useLogin();


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email,password)
        login(email,password)
    }

  return (
    <div>
        <h2>Giriş Yap</h2>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Email Adresi : </span>
                <input
                    required
                    type='email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                 />
            </label>
            <label>
                <span>Parola : </span>
                <input
                    required
                    type='password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                 />
            </label>
            <button>Giriş</button>
            {error && <p>{error.message}</p>}
        </form>
    </div>
  )
}

export default Login