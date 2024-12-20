import {useState} from 'react';
import useStore from '../Store/store';   /// IMPORT

function Message ( message ) {
  const [ showing, setShowing ] = useState( true );

  const addToFavorites = useStore( (state)=> state.addToFavorites );  /// CONNECT TO STORE LOGIC

  function addMeToFavorites(){
    console.log( 'in addMeToFavorites:', message.message );
    addToFavorites( message.message ); // ADD THIS MESSAGE TO FAVORITES
  }

  return (
    <div>
      <strong onClick={ ()=>{ setShowing( !showing ) } }>{ message.message.name }</strong>: 
      { showing ? message.message.text : '' } 
      <button onClick={ addMeToFavorites }> Add To Faves</button>
      
    </div>
  );

}

export default Message