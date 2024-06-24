import {useState} from "react";
import {loginToBackend, saveBasicAuth, storeCurrentUser} from "../services/RegistrierungsService.jsx";
import {useNavigate} from "react-router-dom";

const LoginComponent = () => {

    const navigate = useNavigate();


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function login(event){
        event.preventDefault();

        const loginObject = {
            username,
            password
        }

        await loginToBackend(loginObject).then((resp) => {
            //alert(resp.data);

            const basicAuthentication = "Basic " + window.btoa(username + ":" + password);
            storeCurrentUser(username);
            saveBasicAuth(basicAuthentication);

            navigate("/guitar-types");
            window.location.reload(true);
        }).catch(err => {
            alert(err);
        });
    }

    return (
        <>
            <br/>
            <div>Login Component</div>
            <div>
                <div className="text-bg-info">
                    <h1>Login</h1>
                    <div>
                        <form>
                            <div>
                                <label>User: </label>
                                <br/>
                                <input
                                    type='text'
                                    name='user'
                                    onChange={(event) => setUsername(event.target.value)}
                                    value={username}
                                >
                                </input>
                            </div>
                            <div>
                                <label>Password: </label>
                                <br/>
                                <input
                                    type='password'
                                    name='password'
                                    onChange={(event) => setPassword(event.target.value)}
                                    value={password}
                                >
                                </input>
                            </div>
                            <br/>
                            <button className='btn' onClick={login}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginComponent;