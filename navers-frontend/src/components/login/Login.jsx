import React from 'react';
import { API } from '../../API';
import './styles.css';

import {useHistory} from 'react-router-dom';

import Error from '../erro/Error';

const Login = () =>{

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');

    const history = useHistory();

   async function handleLogin(e){
        e.preventDefault()
        try{
            setLoading(true)
            const response = await API.post(`login`, {
                user:{
                    email: email,
                    password: password
                }
            })
            const emailUser = response.data.email
            const jwt = response.headers.authorization.split('Bearer ')[1]
            localStorage.setItem('token', jwt);
            localStorage.setItem('email', emailUser);
            history.push('/dashboard')
        }catch(err){
            setError('Usuário ou senha inválidos')
        }finally{
            setLoading(false)
        }
    }


    return(
        <div className="container-login">
                {error && <Error error={error}/>}
                <div className="column anime-left is-4 box mt-4">
                    <h1 className="is-size-2 has-text-centered mb-5 has-text-info">Naver's</h1>
                    <form onSubmit={handleLogin}>
                        <div className="field">
                              <input className="input is-medium" 
                              value={email}
                              onChange={e => setEmail(e.target.value)} 
                              type="email" placeholder="Email"/>
                        </div>

                        <div className="field">
                              <input className="input is-medium" 
                              value={password}
                              onChange={e => setPassword(e.target.value)}
                              type="password" 
                              placeholder="Senha"/>
                        </div>

                        <div className="field">
                            <span>Não tem uma conta? <a href="/signup" className="has-text-info">cadastra-se</a></span>
                        </div>

                        <div className="field mt-5">
                            {loading ? 
                            (<button disabled className="button complete is-link">Carregando...</button>)
                            : (<button className="button complete is-link">LOGAR</button>)}
                        </div>

                    </form>
                </div>
        </div>
    )
}

export default Login