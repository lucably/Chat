import './App.css';
import React, {useState} from 'react';
function App() {

  const [text, setText] = useState(null);
  const [msg, setMsg] = useState([]);

  function Item(props) {
    return <p style={{wordBreak: "break-word"}} className="text">{props.value}</p>;
 }

  const buttonClicked = () => {
    var arrayText = [];
    if(text?.length > 0) {
      arrayText.push(...msg,text);
      setMsg(arrayText)
      setText(null);
    }
  }

  return (
    <div className="App">
      
      <h1 style={{textAlign:"center"}}>Chat</h1>

      <div className="containerSquare">
          <p>
          {msg.map((item) => <Item key={item.key} value={item} />)}
          </p>
      </div>

      <div className="InputAndButtonContext">
        <input value={text?.length > 0 ? text : ""} type="text" onChange={(event) => setText(event.target.value)} placeholder="Digite sua mensagem..." style={{borderRadius:7, height: window.screen.height * 0.05, width:window.screen.width * 0.5}}/>
        <button className="button" onClick={() => buttonClicked()}></button>
      </div>
      
    </div>
  );
}

export default App;
