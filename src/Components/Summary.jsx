import React from 'react';
// import { useSelector } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Summary = () => {
    const selector=useSelector((state)=> state);
    // console.log(selector)
    const navigate=useNavigate();
    const handleClick=(e)=>{
        e.preventDefault();
        navigate("/")
    }
    return (
        <div>
            {selector.FormOneReducer.map((elem)=>{
                return(
                    <div>
                        <h5>First Name:{elem.fname}</h5>
                        <h5>Middle Name:{elem.mname}</h5>
                        <h5>Last Name{elem.lname}</h5>
                        <h5>Full Name{elem.fullName}</h5>
                        </div>
                )
            })}
            {selector.FormTwoReducer.map((elem)=>{
                return(
                    <div>
                        <h5>Height:{elem.height}</h5>
                        <h5>Weight:{elem.weight}</h5>
                        <h5>Chest:{elem.chest}</h5>
                        <h5>Age:{elem.age}</h5>
                    </div>
                )
            })}
            {selector.FormThreeReducer.map((elem)=>{
                return(
                    <div>
                        <h5>Primary Address:{elem.priAdd}</h5>
                        <h5>Secondary Address:{elem.secAdd}</h5>
                        <h5>City:{elem.city}</h5>
                        <h5>State:{elem.state}</h5>
                    </div>
                )
            })}
            <button onClick={handleClick}>Go To First Form</button>
        </div>
    );
};

export default Summary;