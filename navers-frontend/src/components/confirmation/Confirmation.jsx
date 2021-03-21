import React from 'react';

import './styles.css';


const Confirmation = ({data}) =>{

    const content = React.useRef(null)

    function handleClose(){
        const event = content.current;
        event.classList.toggle('is-hidden')
    }

    return(
        <div ref={content} class="notification is-primary anime-left">
            <button class="delete" onClick={handleClose}></button>
            <span>{data}</span>
        </div>

    )
}

export default Confirmation;