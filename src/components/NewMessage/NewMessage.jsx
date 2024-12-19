import {useState} from 'react';
import axios from 'axios';
import { TextField, Button, Select, MenuItem } from '@material-ui/core';

function NewMessage ( fetchMessages ) {

  const [ currentMessage, setCurrentMessage ] = useState( { name: '', text: '' } );

  function sendMessage(){
    axios.post( '/api/messages', currentMessage ).then( function( response ){
      console.log( 'back from POST:', response.data );
      fetchMessages.fetchMessages();
    }).catch( function ( err ){
      console.log( err );
      alert( 'error posting message' );
    })
  }

  return (
    <div>
      <h1>New Message</h1>
      <p>
        <TextField placeholder='Name' onChange={ (e)=>{ setCurrentMessage( {...currentMessage, name: e.target.value } ) } } />
        <TextField placeholder='Message' onChange={ (e)=>{ setCurrentMessage( {...currentMessage, text: e.target.value } ) } } />
        {
          currentMessage.name === '' || currentMessage.text === '' ?
          <Button disabled variant="outlined" onClick={ sendMessage }>Send</Button> :
          <Button variant="outlined" onClick={ sendMessage }>Send</Button>
        }
      </p>
      <Select defaultValue='2' onChange={ (e)=>{ alert( e.target.value ) } }>
        <MenuItem value="0">Text 0</MenuItem>
        <MenuItem value="1">Text 1</MenuItem>
        <MenuItem value="2">Text 2</MenuItem>
        <MenuItem value="3">Text 3</MenuItem> 
      </Select>
    </div>
  );

}

export default NewMessage
