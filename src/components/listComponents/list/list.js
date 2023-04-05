import React from "react";
import './index.css'
function List({ list, setListId }) {
    return (
        <li onClick={() => { (setListId(list.listId))}} className="list" >
            <h2>{list.title}</h2>
        </li>
    )
}
export default List
