import React from 'react';
import { useHistory, useParams } from 'react-router';
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
        } catch (err) {
            console.log(err)
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
                <span className="is-size-3"> {project.name} </span>
                <span className="is-size-3"> {navers.name} </span>
                        
                    <button onClick={handleDelete} className="button mt-3 is-danger">Deletar</button>
                </div>
            </div>
        </section>
    )
}

export default Project;