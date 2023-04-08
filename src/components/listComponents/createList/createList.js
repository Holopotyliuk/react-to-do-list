import React, { useState } from "react";
import controller from '../../../controllers/listController/listController'
import './index.css'
function CreateList({ setUpdate, update }) {
    const [values, setValue] = useState('title')
    return (
        <form className="formCreateList">
            <input type="text" value={values} onChange={event => { setValue(event.target.value) }} />
            <button type="button" className="okListButton" onClick={() => { controller.create(values, setUpdate, update) }}>OK</button>
        </form>
    )
}

export default CreateList