import { render } from '@testing-library/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { API } from '../../API';
import Error from '../erro/Error';


const SearchNaver = () =>{

    const [navers, setNavers] = React.useState([]);
    const [search, setSearch] = React.useState([]);
    const [error, setError] = React.useState('');

    const jwt = localStorage.getItem('token')

    async function handleSearch(e){
        e.preventDefault();
        
        try{
            const response = await API.get(`navers`, {
                params:{
                    name: search
                },
                headers:{
                    'Authorization': `Bearer ${jwt}`
                }
            })
            setNavers(response.data)
            console.log(response.data)

        }catch(err){

        }
    }
  
    return(
        <section>
           <div className="columns">
            <div className="column  mt-2">
                <form onSubmit={handleSearch}>
                    <div className="field has-addons">
                        <div className="control">
                            <input
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                type="text"
                                className="input" />
                        </div>
                        <div className="control">
                            <button className="button is-info">PESQUISAR</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        {error && <Error error={error} />}

        <div className="flex-box">
            {navers.map(naver => (
                <div key={naver.id} className="content anime-left">
                    <span className="is-size-4"> {naver.name} </span>
                    <Link to={`/naver/${naver.id}`} >ver detalhes</Link>
                </div>
            ))}
        </div>
    </section>
    )
}

export default SearchNaver