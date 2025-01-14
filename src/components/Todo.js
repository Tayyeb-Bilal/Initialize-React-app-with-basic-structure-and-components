import {useState} from 'react';

import Modal from './modal';
import Backdrop from './backdrop';

function Todo(props){
 const [modelIsOpen, setModelIsOpen ] = useState(false);
  function deleteHandler(){
    setModelIsOpen(true);
  }

  function closeModalHandler(){
    setModelIsOpen(false);
  }

    return(
<div className='card'>
        <h2>{props.text}</h2>
        <div className='actions'>
        <button className='btn' onClick={deleteHandler}>Delete</button>
        </div>
        {modelIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
        {modelIsOpen && <Backdrop onCancel={closeModalHandler}/>}      
      </div>
    );
}

export default Todo;