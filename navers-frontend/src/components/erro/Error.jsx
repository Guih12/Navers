import React from 'react';

import './styles.css';

const Error = ({error}) =>{

    const content = React.useRef(null);

    function handleHidden(){
        const click = content.current;
        click.classList.toggle('is-hidden')
    }
    

    return(
        <div ref={content} class="notification is-danger anime-left">
        <button class="delete" onClick={handleHidden}></button>
            {error}
        </div>
    )
}

export default Error