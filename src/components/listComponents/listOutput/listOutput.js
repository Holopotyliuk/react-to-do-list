import React from "react";
import List from "../list/list"
function ListOutput({ lists }) {
    return (
        <div>
            {
                lists.map(list => (
                    <List list={list} />
                ))
            }
        </div>
    )
}
export default ListOutput