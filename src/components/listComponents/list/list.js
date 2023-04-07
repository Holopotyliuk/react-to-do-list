import React from "react";
import './index.css'
function List({ list, setListId }) {
    return (
        <li onClick={() => { (setListId(list.listid))}} className="list" >
            <h2>{list.list_title}</h2>
        </li>
    )
}
export default List
