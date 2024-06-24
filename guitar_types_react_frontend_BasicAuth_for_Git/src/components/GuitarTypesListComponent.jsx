import  { useNavigate } from 'react-router-dom';
import  { useState, useEffect } from 'react';
import {allGuitarTypes, deleteGuitarType} from "../services/GuitarTypeService.jsx";


const GuitarTypesListComponent = () => {

    const navigate = useNavigate();

    const [guitarTypes, setGuitarTypes] = useState([]);


    useEffect(() => {
        // read all at the beginning from GuitarTypeService
        allGuitarTypes().then((resp) => {
            setGuitarTypes(resp.data);
        }).catch(err => {
            alert(err);
        })
    }, []);

    function createGuitarType(){
        navigate('/create-guitar-type')
    }

    function updateGuitarType(id) {
        //alert(id);
        navigate(`/edit-guitar-type/${id}`); // attention: must be backticks
    }

    function deleteGuitarTypeFn(id) {
        //alert(id);
        deleteGuitarType(id).then(() => {
            allGuitarTypes().then((resp2) => {
                setGuitarTypes(resp2.data);
            }).catch(err => {
                alert(err);
            })
        }
        ).catch(err => { alert(err)}) ;
    }

    return (
        <>


            <br/>
            <div>
                <table className='table table-bordered'>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        guitarTypes.map(guitarType =>
                            <tr key={guitarType.uuid}>
                                <td>{guitarType.name}</td>
                                <td>{guitarType.description}</td>
                                <td>
                                    <button className='btn btn-dark'
                                            onClick={() => updateGuitarType(guitarType.id)}>Update
                                    </button>
                                </td>
                                <td>
                                    <button className='btn btn-warning' onClick={() => deleteGuitarTypeFn(guitarType.id)}
                                    >Delete
                                    </button>
                                </td>
                            </tr>)
                    }
                    </tbody>
                </table>
            </div>

            <button className='btn btn-danger' onClick={createGuitarType}>Create A New Guitar Type</button>
        </>
    )
}

export default GuitarTypesListComponent