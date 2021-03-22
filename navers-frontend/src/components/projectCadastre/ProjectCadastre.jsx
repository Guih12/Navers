import React from 'react';
import { API } from '../../API';
import Confirmation from '../confirmation/Confirmation';


const ProjectCadastre = () => {

    const [name, setName] = React.useState('');
    const [res, setRes] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const jwt = localStorage.getItem('token');
    const [navers, setNavers] = React.useState([])
    const [selectNaverOptions, setSelectNaverOptions] = React.useState([])

    async function handleCadastre(e){
        e.preventDefault();

        console.log(selectNaverOptions)
        const body = {
            name: name,
            navers: [selectNaverOptions]
        }
        console.log(body)
        setLoading(true)
        
        
        try{
            const response = await API.post(`projects`, body, {
                headers: {
                    'Authorization': `Bearer ${jwt}`
                }
            })
            console.log(response.data)

        }catch(err){

        }finally{
            setName('');
            setRes('Projeto cadastrado com sucesso')
        }
    }

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

    return (

        <div>
            <div className="columns">
                <div className="column is-4">
                  {res && <Confirmation data={res}/>}
                </div>
            </div>

            <div className="columns anime-left is-justify-content-center">
                <div className="column is-12 box mt-5">
                    <form onSubmit={handleCadastre}>
                        <div className="columns m-2">
                            <div className="column is-4">
                                <h1 className="has-text-info is-size-3">Cadastrar Naver</h1>
                            </div>
                        </div>

                        <div className="columns m-2">
                            <div className="column">
                                <label htmlFor="" className="label">Nome</label>
                                <input type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                 className="input"/>
                            </div>
                            <div className="column">
                                <label htmlFor="" className="label">Navers id</label>
                                <div className="select">
                                    
                                     <select onChange={e => setSelectNaverOptions(e.target.value)}>
                                        {navers.map(naver =>(
                                            <option key={naver.id}> {naver.id} </option>
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

export default ProjectCadastre