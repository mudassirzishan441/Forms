import React from 'react';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';

const Courses = () => {
    const selector=useSelector((state)=>state.CourseReducer)
    return (
        <div>
            <h1>Courses Component</h1>
            {selector.map((elem,index)=>{
                return(
                    <Card style={{width:"18rem",display:"inline-block"}}>
                    <Card.Img variant="top" src={elem.cardImage} height="300rem"  width="16rem"/>
                    <Card.Title>{elem.cardTitle}</Card.Title>
                    <Card.Text>{elem.cardDesc}</Card.Text>
                    </Card>
                )
            })}
            
        </div>
    );
};

export default Courses;