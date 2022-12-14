import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"

function FormTwo() {

    const [height,setHeight]=useState("")
    const [weight,setWeight]=useState("")
    const [chest,setChest]=useState("")
    const [age,setAge]=useState("")
    
    const formTwoDispatch=useDispatch();
    const navigate=useNavigate();
    const handleDispatchTwo=(e)=>{
        e.preventDefault();
        formTwoDispatch({
            type:"FORM_TWO_DATA",
            payload:{height,weight,chest,age}
        })
        navigate("/formthree")
    }

  return (
    <Form>
    
        <Form.Label>Height: cm</Form.Label>
        <Form.Control type="text" placeholder="Height" onChange={(e)=>setHeight(e.target.value)} />
        <Form.Label>Weight</Form.Label>
        <Form.Control type="text" placeholder="Weight" onChange={(e)=>setWeight(e.target.value)}/>
        <Form.Label>Chest</Form.Label>
        <Form.Control type="text" placeholder="Chest"  onChange={(e)=>setChest(e.target.value)}/>
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" placeholder="Age" onChange={(e)=>setAge(e.target.value)}/>
        <Button variant="primary" type="submit" onClick={handleDispatchTwo}>
        Next
      </Button>
    </Form>
  );
}

export default FormTwo;