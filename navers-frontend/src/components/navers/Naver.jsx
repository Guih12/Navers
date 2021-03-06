import React from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { API } from '../../API';
import Error from '../erro/Error';


const Naver = () => {

    const [navers, setNavers] = React.useState([])
    const [error, setError] = React.useState('');


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
            alert('Naver deletado com sucesso')
            history.push('/navers')

        } catch (err) {
            setError('Esse Naver não te percente, logo não pode ser excluído')
        }
    }


    return (
        <section>

            <div className="columns">
                <div className="column">
                    <h2 className="is-size-2 has-text-info has-text-weight-bold">NAVERS</h2>
                </div>
            </div>
            <div className="columns">
                <div className="column is-4">
                    {error && <Error error={error} />}
                </div>
            </div>

            <div className="flex-box">

                <div className="content-naver anime-left">
                   <p className="is-size-4"> nome:  <span className="is-size-3 has-text-weight-bold"> {navers.name} </span></p>
                   <p className="is-size-4"> Data de nascimento:  <span className="is-size-3 has-text-weight-bold">  {navers.birthdate} </span> </p>
                   <p className="is-size-4"> Cargo:  <span className="is-size-3 has-text-weight-bold"> {navers.job_role} </span> </p>

                    <Link to={`/naver-update/${navers.id}`} className="button mt-3 is-primary">ALTERAR</Link>
                    <button onClick={handleDelete} className="button mt-3 is-danger">DELETAR</button>
                </div>
            </div>
        </section>
    )
}

export default Naver;