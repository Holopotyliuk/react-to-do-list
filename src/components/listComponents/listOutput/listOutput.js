import React, { useState } from "react";
import List from "../list/list"
import './index.css'
import CreateList from "../createList/createList";
function ListOutput({ lists, setListId }) {
    const [showform, setShowForm] = useState(false);
    return (
        <div className="list_form">
            <button className="buttonCreatelist" onClick={() => { setShowForm(!showform) }}>CREATE LIST</button>
            {showform ? <CreateList /> : ''}
            {
                lists.map(list => (
                    <List list={list} setListId={setListId} />
                ))
            }
        </div>
    )
}
export default ListOutput