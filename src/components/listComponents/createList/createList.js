import React, { useState } from "react";
//import controller from '../../../controllers/taskController/taskController'
import './index.css'
function CreateList({ id, setUpdate, update }) {
    const [values, setValue] = useState('title')
    return (
        <form className="formCreateList">
            <input type="text" value={values} onChange={event => { setValue(event) }} />
            <button type="button" className="okListButton" onClick={() => {console.log('create list')}}>OK</button>
        </form>
    )
}

export default CreateList