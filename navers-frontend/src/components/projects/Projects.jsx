import React from 'react';
import { Link } from 'react-router-dom';
import { API } from '../../API';


const Projects = () => {

    const [projects, setProjects] = React.useState([])
    const jwt = localStorage.getItem('token')

    React.useEffect(() => {

        async function loadingProjects() {
            const response = await API.get(`projects`, {
                headers: {
                    'Authorization': `Bearer ${jwt}`
                }
            })

            console.log(response.data)
            setProjects(response.data)
        }

        loadingProjects();
    },[jwt])

    return (
        <section> 

        <div className="columns">
          <div className="column">
              <h2 className="is-size-2 has-text-info has-text-weight-bold">PROJETOS</h2>
          </div>
        </div>

        <div className="flex-box">
        {projects.map(project =>(
            <div key={project.id} className="content anime-left">
                <span className="is-size-4"> {project.name} </span>
                <Link to={`/project/${project.id}`}> ver detalhes</Link>
            </div> 
        ))}
        </div>    
    </section> 
    )
}

export default Projects