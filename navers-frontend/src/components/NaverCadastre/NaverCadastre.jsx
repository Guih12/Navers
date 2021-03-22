import React from 'react';
import { API } from '../../API';
import Confirmation from '../confirmation/Confirmation';


const NaverCadastre = () =>{

    const [name, setName] = React.useState('');
    const [birthdate, setBirthdate] = React.useState('');
    const [jobRole, setJobRole] = React.useState('');
    const [admissionDate, setAdmissionDate] = React.useState('');
    const [res, setRes] = React.useState('');
    const jwt = localStorage.getItem('token')
    const [loading, setLoading] = React.useState(false);

    const [projects, setProjects] = React.useState([])
    const [selectProjectOptions, setSelectProjectOptions] = React.useState([])

    function clearInput(){
        setName('');
        setBirthdate('');
        setJobRole('');
        setAdmissionDate('');
    }

    async function handleCadastreNaver(e){
        e.preventDefault();
        const body={
            name: name,
            birthdate: birthdate,
            admission_date: admissionDate,
            job_role: jobRole,
            projects: [selectProjectOptions]
        }
        setLoading(true)
        try{
            const response = await API.post(`navers`, body, {
                headers: {
                    'Authorization': `Bearer ${jwt}`
                }
            })
        }catch(err){
            
        }finally{
            setLoading(false)
            setRes('Naver criado com sucesso')
            clearInput();            
        }
    }



    React.useEffect(() =>{
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
    }, [jwt])

    return(
    <div>
        <div className="columns">
            <div className="column is-4">
                {res && <Confirmation data={res}/>}
            </div>
        </div>
        <div className="columns anime-left is-justify-content-center">
            <div className="column is-12 box mt-5">
                <form onSubmit={handleCadastreNaver}>

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
                        <label htmlFor="" className="label">Data nascimento</label>
                         <input type="date"
                         value={birthdate}
                         onChange={e => setBirthdate(e.target.value)} 
                         className="input"/>
                        </div>
                    </div>
                    <div className="columns m-2 mt-5">
                        <div className="column">
                        <label htmlFor="" className="label">Cargo</label>
                         <input type="text"
                         value={jobRole}
                         onChange={e => setJobRole(e.target.value)} 
                         className="input"/>
                        </div>
                        <div className="column">
                        <label htmlFor="" className="label">Data de admissão</label>
                         <input type="date"
                         value={admissionDate}
                         onChange={e => setAdmissionDate(e.target.value)}
                         className="input"/>
                        </div>
                        <div className="column">
                                <label htmlFor="" className="label">Projetos id</label>
                                <div className="select">
                                    
                                     <select onChange={e => setSelectProjectOptions(e.target.value)}>
                                        {projects.map(project =>(
                                            <option key={project.id}> {project.id} </option>
                                        ))}
                                     </select>
                                </div>
                            </div>
                    </div>
                    <div className="columns m-2">
                        <div className="column">
                       {loading ? ( <button className="button has-text-weight-bold is-link">ENVIANDO...</button>)
                       : ( <button className="button has-text-weight-bold is-link">ENVIAR</button>)}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default NaverCadastre