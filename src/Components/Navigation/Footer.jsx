import React from 'react';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';

const Footer = () => {
    const selector=useSelector((state)=>state.FooterReducer)
    return (
        <div >
            <h1>Footer Component</h1>
            {selector.map((elem,index)=>{
                return(

                    <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={elem.footImage} width='16rem' height="600rem"  />
                    <Card.Body>
                      <Card.Title> <h1> {elem.footTitle}</h1></Card.Title>
                      <Card.Text> <h3>
                      {elem.footDesc}</h3>
                      </Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
                )
            })}
            
        </div>
    );
};

export default Footer;