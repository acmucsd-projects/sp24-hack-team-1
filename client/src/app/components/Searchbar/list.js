import { React, useState } from 'react';
import data from "./ListData.json";
import './list.css';

function List(props) {
    return (
        <ul>
            {data.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

export default List