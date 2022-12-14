import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux"

function FormThree() {
    const [priAdd,setPriAdd]=useState("");
    const [secAdd,setSecAdd]=useState("");
    const [city,setCity]=useState("");
    const [state,setState]=useState("");
    const formThreeDisptach=useDispatch();
    const navigate=useNavigate();

    const handleDispatchThree=(e)=>{
        e.preventDefault();
        formThreeDisptach({
            type:"FORM_THREE_DATA",
            payload:{priAdd,secAdd,city,state}
        });
        navigate("/summary")
    }


  return (
    <Form>
    
        <Form.Label>Primary Address</Form.Label>
        <Form.Control type="text" placeholder="Primary Address" onChange={(e)=>setPriAdd(e.target.value)}/>
        <Form.Label>Secondary Address</Form.Label>
        <Form.Control type="text" placeholder="Secondary Address" onChange={(e)=>setSecAdd(e.target.value)}/>
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="City" onChange={(e)=>setCity(e.target.value)}/>
        <Form.Label>State</Form.Label>
        <Form.Control type="text" placeholder="State" onChange={(e)=>setState(e.target.value)}/>
        <Button variant="primary" type="submit" onClick={handleDispatchThree}>
        Next
      </Button>
    </Form>
  );
}

export default FormThree;