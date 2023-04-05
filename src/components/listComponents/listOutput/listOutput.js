import React from "react";
import List from "../list/list"
import './index.css'
function ListOutput({ lists }) {
    return (
        <div className="list_form">
            {
                lists.map(list => (
                    <List list={list} />
                ))
            }
        </div>
    )
}
export default ListOutput