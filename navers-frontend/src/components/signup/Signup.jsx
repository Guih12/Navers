import React from 'react';
import { Link } from 'react-router-dom';
import { API } from '../../API';
import Confirmation from '../confirmation/Confirmation';
import Error from '../erro/Error';

const Signup = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState();

    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');
    const [confirmed, setConfirmed] = React.useState('');


    async function handleSignup(e) {
        e.preventDefault();

        try {

            setLoading(true)
            const response = await API.post(`signup`, {
                user: {
                    email: email,
                    password: password
                }
            })
            setConfirmed(`Usuario(a) ${email} criado com sucesso`)
            console.log(response)

        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (

        <div>
            
                <div className="column is-4">
                    {error && <Error error={error} />}
                </div>
                <div className="column is-4">
                    {confirmed && <Confirmation data={confirmed} />}
                </div>
            <div className="container-login">
                <div className="column anime-left is-4 box mt-4">
                    <h1 className="is-size-2 has-text-centered mb-5 has-text-info">Signup | Naver's</h1>
                    <form onSubmit={handleSignup}>
                        <div className="field">
                            <input className="input is-medium"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                type="email" placeholder="Email" />
                        </div>

                        <div className="field">
                            <input className="input is-medium"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                                placeholder="Senha" />
                        </div>

                        <div className="field">
                            <span>Volte ao login <a href="/" className="has-text-info">clicando aqui</a></span>
                        </div>

                        <div className="field mt-5">
                            {loading ?
                                (<button disabled className="button complete is-link">Carregando...</button>)
                                : (<button className="button complete is-link">CRIAR CONTA</button>)}
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;