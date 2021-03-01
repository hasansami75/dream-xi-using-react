import React from 'react';
import '../Player-details/Playerinfo'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEuroSign } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const cart = props.cart;
    console.log(props.cart);
    const totalSalary = cart.reduce((sum, item) => sum + parseFloat(item.salary),0);
    
    return (
        <div className="table-dark" style={{marginLeft:'200px'}}>
            <h3 className="text-uppercase" style={{borderBottom:'1px solid red'}}>Playing XI: {cart.length}</h3>
            
            {
                cart.map(newTeam => <tr className="text">{newTeam.name}: <FontAwesomeIcon icon={faEuroSign}/>{newTeam.salary}</tr>)
            }
                <h5 style={{borderTop:'1px solid yellow'}}>Total Salary(Monthly): <FontAwesomeIcon className="" icon={faEuroSign}/> {totalSalary.toFixed(2)}</h5>         
        </div>
        
    );
};

export default Cart;