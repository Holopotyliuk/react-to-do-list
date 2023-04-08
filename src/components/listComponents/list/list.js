import React from "react";
import './index.css'
function List({ list, setListId }) {
    return (
        <li className="list" >
            <h2 onClick={() => { (setListId(list.listid)) }}>{list.list_title}</h2>
            <button className="buttonRemove" onClick={() => { console.log('remove list') }}>X</button>
        </li>
    )
}
export default List
