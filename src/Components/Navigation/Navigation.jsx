import React from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';

const Navigation = () => {
    const navSelector=useSelector((store)=>store.ReducerNavigation);
    console.log(navSelector);
    return (
        <div>
            
            {navSelector.map((elem,index)=>{
                
                return <Button variant="light"><a href={elem.link} target={elem.target} key={index}>{elem.name}</a></Button>
            })}
        </div>
    );
};

export default Navigation;