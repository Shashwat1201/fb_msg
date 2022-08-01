import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import './App.css'
import { FormControl, Input, InputLabel } from '@mui/material';
import  Message from './Message';
import db from './Firebase'
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';

function App() {
  const [input, setInput]=useState('');
  const [messages,setMessages]=useState([{userName : 'Shashwat' , message:'HI'},{userName : 'Siddhartha' , message:'HI'}]);
  const [userName, setUserName]= useState('');



  useEffect(()=>{
      db.collection('messages').
      orderBy('timestamp', 'desc').onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({id:doc.id , message:doc.data()})))
      });
  }, [])

  useEffect(()=>{
      setUserName(prompt("Please enter your name"));
 }, [])

  console.log(input);
  console.log(messages);
  
  const sendMessages= (event) =>{
      event.preventDefault();

      db.collection('messages').add({
      
        message: input,
        userName: userName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      
      
      setInput('');
  }

  return (
    <div className="App">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/768px-Facebook_Messenger_logo_2020.svg.png?20220118041828" className='img'/>
      <h1> Messenger</h1>
      <h2> Welcome {userName}</h2>
    
    <form className='app__form'>
    <FormControl className='app__formControl'>
    <InputLabel>Enter a message</InputLabel>
    <Input className="app__Input" placeholder='Enter a message..' value={input} onChange={event => setInput(event.target.value)}/>

    <IconButton  className="app__iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessages}> 
    <SendIcon/>
    </IconButton>
    
    </FormControl>
    </form>

    <FlipMove>
    {
        messages.map(({id , message})=> (
          
          <Message key={id} userName={userName} message={message}/>
    
        ))
      }
    </FlipMove>
      
      </div>
  );
}

export default App;
