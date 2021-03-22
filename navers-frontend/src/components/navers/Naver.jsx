import React from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { API } from '../../API';


const Naver = () => {

    const [navers, setNavers] = React.useState([])
    const [erros, setError] = React.useState([]);


    let { id } = useParams();
    const jwt = localStorage.getItem('token')
    const history = useHistory();

    React.useEffect(() => {
        async function getNaver() {
            const response = await API.get(`navers/${id}`, {
                headers: {
                    'Authorization': `Bearer ${jwt}`
                }
            })
            setNavers(response.data.naver)
        }

        getNaver();
    }, [id, jwt])


    async function handleDelete(e) {
        e.preventDefault();

        try {
            const response = await API.delete(`navers/${id}`, {
                headers: {
                    'Authorization': `Bearer ${jwt}`
                }
            })
            console.log(response)
            setError(response)
        } catch (err) {
           
        }finally{
            history.push('/navers')
        }
    }


    return (
        <section>

            <div className="columns">
                <div className="column">
                    <h2 className="is-size-2 has-text-info has-text-weight-bold">NAVERS</h2>
                </div>
            </div>
            

            <div className="flex-box">

                <div className="content-naver anime-left">
                    <span className="is-size-3"> {navers.name} </span>
                    <span className="is-size-5"> Data de nascimento  {navers.birthdate} </span>
                    <span className="is-size-5"> Cargo  {navers.job_role} </span>
                    <button onClick={handleDelete} className="button mt-3 is-danger">Deletar</button>
                </div>
            </div>
        </section>
    )
}

export default Naver;