import { useState, useEffect } from 'react'
import { newUserAuth }  from "../services/RegistrierungsService.jsx";

const AnmeldungComponent = () => {


    const [username, setUsername] = useState('');
    const [emailAccount, setEmailAccount] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');


    function createNewUser(event){
        event.preventDefault();

        const newUserObject = {
            name,
            emailAccount,
            username,
            password
        }

        newUserAuth(newUserObject).then((resp) => {
           alert(resp.data);
        }).catch(err => {
            alert(err);
        });
    }

    return (
        <>
            <br/>
            <div>Anmeldung Component</div>
            <div>
                <div className="text-bg-info">
                    <h1>Systemregistrierung</h1>
                    <div>
                        <form>
                            <div>
                                <label>Name: </label>
                                <br/>
                                <input
                                    type='text'
                                    name='name'
                                    onChange={(event) => setName(event.target.value)}
                                    value={name}
                                >
                                </input>
                            </div>
                            <div>
                                <label>Email Account: </label>
                                <br/>
                                <input
                                    type='text'
                                    name='emailAccount'
                                    onChange={(event) => setEmailAccount(event.target.value)}
                                    value={emailAccount}
                                >
                                </input>
                            </div>
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
                                    placeholder={'Password'}
                                >
                                </input>
                            </div>
                            <br/>
                            <button className='btn' onClick={createNewUser}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AnmeldungComponent;