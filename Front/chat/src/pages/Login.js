import '../App.css';
import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

function Login() {

  const history = useHistory();

  const login = () => {
    history.push('/chat');
  }

  const goToCreate = () => {
    history.push('/create');
  }

  return (
    <div className="App">
      
      <h1 style={{textAlign:"center"}}>Login</h1>
      <div className="containerSquareLogin">
        <div className="InputLoginContent">
          <input className="InputLogin" type="text" placeholder="Digite seu usuário" />
          <input className="InputLogin" type="password" placeholder="Digite sua senha" />
          <div className="ButtonLoginContent" >
            <button className="ButtonLogin" type="submit" onClick={() => login()} >Login</button>
            <button className="ButtonLogin" onClick={() => goToCreate()} >Create</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
