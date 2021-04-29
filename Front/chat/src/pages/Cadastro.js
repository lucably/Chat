import '../App.css';
import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

function Cadastro() {

  const history = useHistory();

  const createUser = () => {
    
  }

  const goBack = () => {
    history.push('/');
  }

  return (
    <div className="App">
      
      <h1 style={{textAlign:"center"}}>Cadastro</h1>
      <div className="containerSquareCreateAccont">
        <div className="InputLoginContent">
          <input className="InputLogin" type="text" placeholder="Digite seu usuário" />
          <input className="InputLogin" type="password" placeholder="Digite sua senha" />
          <div className="ButtonLoginContentCreate" >
            <button style={{background: "green",color:"white",borderColor:"black"}} className="ButtonLoginCreate" type="submit" onClick={() => createUser()} >Cadastrar</button>
            <button style={{background: "blue",color:"white",borderColor:"black"}} className="ButtonLoginCreate" type="submit" onClick={() => goBack()} >Voltar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
