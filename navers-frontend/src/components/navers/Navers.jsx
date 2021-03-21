
import React from 'react';
import { Link } from 'react-router-dom';
import { API } from '../../API';


const Navers = () =>{

    const [navers, setNavers] = React.useState([])

    React.useEffect(() =>{

        const jwt = localStorage.getItem('token')

        async function loadingNavers(){
            const response = await API.get(`navers`, {
                headers: {
                    'Authorization': `Bearer ${jwt}`
                }
            })

            console.log(response.data)
            setNavers(response.data)
        }

        loadingNavers();
    },[])

    return(

        <section> 
            <div className="columns">
                
            </div>    
        </section>                            
    )
}

export default Navers;