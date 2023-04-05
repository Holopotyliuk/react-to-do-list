import React from "react";
import './index.css'
function List({ list, setListId }) {
    return (
        <li className="list">
            <h2 onClick={() => (setListId(list.listId))}>{list.title}</h2>
        </li>
    )
}
export default List
