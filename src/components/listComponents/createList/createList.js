import React, { useState } from "react";
import controller from '../../../controllers/listController/listController'
import './index.css'
function CreateList({ setUpdate, update, setShowForm, showform }) {
    const [values, setValue] = useState('title')
    return (
        <form className="formCreateList">
            <input type="text" value={values} onChange={event => { setValue(event.target.value) }} />
            <button type="button" className="okListButton" onClick={() => {
                controller.create(values, setUpdate, update)
                setShowForm(!showform)
            }}>OK</button>
        </form>
    )
}

export default CreateList