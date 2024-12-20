import { useEffect, useState } from 'react';
import axios from 'axios';
import MessagesList from '../MessagesList/MessagesList';
import NewMessage from '../NewMessage/NewMessage';
import useStore from '../Store/store';

function App () {
  useEffect( ()=>{
    fetchMessages();
  }, [] );
  
  const [ messages, setMessages ] = useState( [] );
  // connect to the store for faves
  const favorites = useStore( ( state )=> state.favorites );

  function fetchMessages(){
    axios.get( '/api/messages' ).then( function( response ){
      console.log( 'back from GET:', response.data );
      setMessages( response.data );
    }).catch( function ( err ){
      console.log( err );
      alert( 'error getting messages' );
    })
  }

  return (
    <div>
      <h1>North Cascades Messages</h1>
      <h1>Favorites:</h1>
      <p>{ JSON.stringify( favorites ) }</p>
      <NewMessage fetchMessages={ fetchMessages }/>
      <MessagesList messages={ messages }/>

    </div>
  );

}

export default App
