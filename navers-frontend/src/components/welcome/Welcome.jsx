import React from 'react';

import './styles.css';


const Welcome = () =>{
    const [email, setEmail] = React.useState('');
    
    React.useEffect(()=>{
        const user = localStorage.getItem('email');
        setEmail(user)
        console.log(email)
      },[email])

    const content = React.useRef(null);

    function handleClose(){
        const event = content.current;
        event.classList.add('is-hidden')
    }

    return(
        <div ref={content} class="notification is-primary anime-left">
            <button class="delete" onClick={handleClose}></button>
            <span>Seja bem vindo(a) : {email} </span>
        </div>
    )
}

export default Welcome