import React from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { API } from '../../API';
import Naver from '../navers/Naver';


const Project = () => {

    const [project, setProject] = React.useState([])
    const [navers, setNavers] = React.useState([])


    let { id } = useParams();
    const jwt = localStorage.getItem('token')
    const history = useHistory();

    React.useEffect(() => {
        async function getProject() {
            const response = await API.get(`projects/${id}`, {
                headers: {
                    'Authorization': `Bearer ${jwt}`
                }
            })
            
            response.data.navers.map(e =>{
                setNavers(e)
            })
            console.log(response.data)
            setProject(response.data.project)
            
        }

        getProject();
    }, [id, jwt])


    async function handleDelete(e) {
        e.preventDefault();

        try {
            const response = await API.delete(`projects/${id}`, {
                headers: {
                    'Authorization': `Bearer ${jwt}`
                }
            })
            console.log(response)
            alert(response.data.message)
        } catch (err) {
            alert('Esse projeto não te percente, logo não pode ser excluído')
        }finally{
            history.push('/projects')
        }
    }

    return (
        <section>

            <div className="columns">
                <div className="column">
                    <h2 className="is-size-2 has-text-info has-text-weight-bold">PROJETOS</h2>
                </div>
            </div>

            <div className="flex-box">

                <div className="content-naver anime-left">
               <p className="is-size-4">Nome projeto:  <span className="is-size-3 has-text-weight-bold"> {project.name} </span></p>
                    
                    <Link to={`/project-update/${project.id}`} className="button mt-3 is-primary">ALTERAR</Link>
                    <button onClick={handleDelete} className="button mt-3 is-danger">DELETAR</button>
                </div>
            </div>
        </section>
    )
}

export default Project;