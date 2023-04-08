import React from "react";
import controller from '../../../controllers/listController/listController'
import './index.css'
function List({ list, setListId }) {
    return (
        <li className="list" >
            <h2 onClick={() => { (setListId(list.listid)) }}>{list.list_title}</h2>
            <button className="buttonRemove" onClick={() => { controller.remove(list.listid, setListId) }}>X</button>
        </li>
    )
}
export default List
