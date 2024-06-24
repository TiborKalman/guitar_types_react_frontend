import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { newGuitarType, readGuitarType, updateGuitarType } from '../services/GuitarTypeService'

const GuitarTypeComponent = () => {

    const navigate = useNavigate();

    const {id} = useParams();

    const [name, setName] = useState('?');
    const [description, setDescription] = useState('?');

    const [errName, setErrName] = useState('')

    useEffect(() => {
        if(id){
            //alert("x " + id);
            readGuitarType(id).then((resp) => {
                //alert(resp.data.name);
                setName(resp.data.name);
                setDescription(resp.data.description);
            }).catch(err => {
                alert(err);
            })
        }

    }, [id])

    function createNewOrUpdateGuitarType(event){
        event.preventDefault();

        if(validateAll()){

            const guitarType =
                { name, description}

            if(id != null){
                updateGuitarType(guitarType,id).then(() => {
                    navigate('/guitar-types');
                }).catch(err => {
                    alert(err);
                })
            } else {
                newGuitarType(guitarType).then(() => {
                    navigate('/guitar-types')
                }).catch(err => {
                    alert(err);
                })
            }
        }
    }

    function validateAll(){
        let isValid = false;

        if(name.trim()){
            setErrName('');
            isValid = true;
        } else {
            setErrName('Name muss eingegeben werden');
            isValid = false;
        }

        return isValid;
    }

    return (
        <>
            <br/>
            <div>
                <div className="text-bg-info">
                    {
                        id ? <h1>Update Guitar Type</h1> : <h1>Create Guitar Type</h1>

                    }
                    <div>
                    <form>
                            <div>
                                <label >Name </label>

                                <input
                                    type='text'
                                    name='name'
                                    className={`form-control ${ errName ? 'is-invalid': '' }`}
                                    onChange={(event) => setName(event.target.value)}
                                    value={name}
                                >
                                </input>
                                { errName && <div className='invalid-feedback'> { errName } </div> }
                            </div>

                            <div>
                                <label>Description:</label>
                                <input
                                    type='text'
                                    onChange={(event) => setDescription(event.target.value)}
                                    className={`form-control }`}
                                    name='description'
                                    value={description}
                                >
                                </input>
                            </div>

                            <button className='btn' onClick={createNewOrUpdateGuitarType}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GuitarTypeComponent

