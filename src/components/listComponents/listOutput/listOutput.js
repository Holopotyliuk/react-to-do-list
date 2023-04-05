import React from "react";
import List from "../list/list"
import './index.css'
function ListOutput({ lists, setListId }) {
    return (
        <div className="list_form">
            {
                lists.map(list => (
                    <List list={list} setListId={setListId} />

                ))
            }
        </div>
    )
}
export default ListOutput