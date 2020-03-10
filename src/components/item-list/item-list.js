import React, { Component } from 'react';
import './item-list.css';



const ItemList = (props)=>{
    const { data, setItem } = props;
    const renderItems = (arr) => {
        return arr.map(({id, ...item}) => {
            const label = props.children(item);
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={()=>setItem(id)}
                >
                    {label}
                </li>
            )
        })
    }

    const items = renderItems(data);

    return(
        <div className="col-md">
            <ul className="item-list list-group">
                {items}
            </ul>
        </div>
    )
};


export default ItemList;