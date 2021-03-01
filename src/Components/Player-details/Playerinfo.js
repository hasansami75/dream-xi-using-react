import React from 'react';
import './Playerinfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlusCircle } from '@fortawesome/free-solid-svg-icons'


const Playerinfo = (props) => {
    const {name, image, club, salary, country, age, position} = props.player;
    const handleAddTeam = props.handleAddTeam;
    
    return (
    <div className="card mb-3 mr-3 d-inline-block image overflow-hidden"  style={{width: '18rem'}}>
            <img src={image} className="card-img-top" alt="..."></img>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Club: <b>{club}</b> </li>
            <li className="list-group-item">Salary(Monthly): <b>{salary}</b></li>
            <li className="list-group-item">Country: <b>{country}</b></li>
            <li className="list-group-item">Age: <b>{age}</b></li>
            <li className="list-group-item">Position: <b>{position}</b></li>
        </ul>
        <button onClick={() => handleAddTeam(props.player)} className="btn btn-success"><FontAwesomeIcon className="mr-2" icon={faPlusCircle}/>Add to team</button>
    </div>
    );
};

export default Playerinfo;