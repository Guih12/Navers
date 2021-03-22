import React from 'react';
import { useHistory, useParams } from 'react-router';
import { API } from '../../API';
import Confirmation from '../confirmation/Confirmation';
import Error from '../erro/Error';



const UpdateProject = () => {

    const { id } = useParams();

    const [name, setName] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const jwt = localStorage.getItem('token');
    const [navers, setNavers] = React.useState([])
    const [selectNaverOptions, setSelectNaverOptions] = React.useState([])
    const [error, setError] = React.useState('');
    const history = useHistory();
    
    React.useEffect(() =>{
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
    }, [jwt])


    async function handleUpdate(e){
        e.preventDefault();
        const body = {
            name: name,
            navers: [selectNaverOptions]
        }
        try{
            const response = await API.put(`projects/${id}`, body, {
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json",
                    'Authorization': `Bearer ${jwt}`
                }
            })

            console.log(response);
            setMessage('Alterado com sucesso')
            setName('')
        }catch(err){
            setError('Você não pode alterar esse projeto')
        }
    }

    return (
        <div>
            <div className="columns">
                <div className="column is-4">
                    {message && <Confirmation data={message} />}
                    {error && <Error error={error} />}
                </div>
            </div>

            <div className="columns anime-left is-justify-content-center">
                <div className="column is-12 box mt-5">
                    <form onSubmit={handleUpdate}>
                        <div className="columns m-2">
                            <div className="column is-4">
                                <h1 className="has-text-info is-size-3">Alterar Project</h1>
                            </div>
                        </div>

                        <div className="columns m-2">
                            <div className="column">
                                <label htmlFor="" className="label">Nome</label>
                                <input type="text"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    className="input" />
                            </div>
                            <div className="column">
                                <label htmlFor="" className="label">Navers</label>
                                <div className="select">

                                    <select onChange={e => setSelectNaverOptions(e.target.value)}>
                                        {navers.map(naver => (
                                            <option value={naver.id} key={naver.id}> {naver.name} </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="columns m-2">
                            <div className="column is-4">
                                <button className="button has-text-weight-bold is-link">ENVIAR</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default UpdateProject