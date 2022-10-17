import React from 'react'
import { useState } from 'react';
import { useSingup } from '../hooks/useSignup';

const Signup = () => {

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const {error,signup} = useSingup();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email,password)
        signup(email,password);
    }
    
    return (
    <div>
        <h2>Üye Ol</h2>
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
            <button>Üye Ol</button>
            {error && <p>{error}</p>}
        </form>
    </div>
  )
}

export default Signup