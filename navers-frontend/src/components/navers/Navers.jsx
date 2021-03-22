
import React from 'react';
import { Link } from 'react-router-dom';
import { API } from '../../API';

import './styles.css';


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

            <div className="columns is-justify-content-space-between">
                <div className="column">
                    <h2 className="is-size-2 has-text-info has-text-weight-bold">NAVERS</h2>

                    <span>Não achou um naver?  <Link to="/naver-search">clique aqui e pesquise</Link> </span>
                </div>
            </div>
            

            <div className="flex-box">
            { navers.map(naver =>(
                <div key={naver.id} className="content anime-left">
                    <span className="is-size-4"> {naver.name} </span>
                    <Link to={`/naver/${naver.id}`} >ver detalhes</Link>
                </div> 
            ))}
            </div>    
        </section>                            
    )
}

export default Navers;