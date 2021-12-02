import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext';
import { Redirect } from 'react-router-dom'



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store,actions } = useContext(Context);

  function handleSubmit(e) {
    e.preventDefault();
    actions.login(email,password);
  }


  return (
    <> <div className="container-fluid kenburns-top">
            
   
      
    {store.auth ? <Redirect to="/home"/>:
    <form className='box login p-5' onSubmit={handleSubmit}>
      
      
      
      <div className='field py-3'>
        <p className='control'>
          <input
            className='input'
            type='email'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </p>
      </div>
      <div className='field py-3'>
        <p className='control'>
          <input
            className='input'
            type='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </p>
      </div>
      <div className='field py-3'>
        <p className='control'>
          <button type='submit' className='button is-link is-fullwidth'>
            Login
          </button>
        </p>
      </div>
    </form>}
    </div>
    </>
  );
}
export default Login;