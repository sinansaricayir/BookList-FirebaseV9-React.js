import React, { useState } from 'react'

const Login = () => {

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email,password)
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
        </form>
    </div>
  )
}

export default Login