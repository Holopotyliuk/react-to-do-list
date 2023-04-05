import React from "react";
import  './index.css'
function List({ list }) {
    return (
        <li className="list">
            <h2 onClick={() => console.log('clisk in the list')}>{list.title}</h2>
        </li>
    )
}
export default List
