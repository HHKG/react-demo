import React from 'react';
import './Person.css';

const Person = (props) => {
    // Math.round==>四舍五入，Math.random==>0（包括零）到一（不包括一）的随机数，Math.floor==>向下取整
    return (
        <div className="Person">
            <p onClick={props.myClick}>大家好，我是{props.name},我有{props.count}个作品</p>
            <input type="text" onChange={props.changed} defaultValue={props.name}></input>
            <p>{props.children}</p>
        </div>
    );
}

export default Person;