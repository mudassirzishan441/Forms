import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";


const Dashboard = () => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [target, setTarget] = useState("");

  const [carImage, setCarImage] = useState("");
  const [carTitle, setCarTitle] = useState("");
  const [carDesc, setCarDesc] = useState("");

  const [cardImage, setCardImage] = useState("");
  const [cardTitle, setCardTitle] = useState("");
  const [cardDesc, setCardDesc] = useState("");

  const [footImage, setFootImage] = useState("");
  const [footTitle, setFootTitle] = useState("");
  const [footDesc, setFootDesc] = useState("");

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: "ADD_LINKS", data: { name, link, target } });
  };
  const handleDispatch = () => {
    dispatch({
      type: "ADD_CAROUSEL",
      payload: {
        CarouselImage: carImage,
        CarouselTitle: carTitle,
        CarouselDesc: carDesc,
      },
    });
  };

  const handleCourses = () => {
    dispatch({
      type: "ADD_COURSES",
      payload: { cardImage, cardTitle, cardDesc },
    });
  };

  const handleFooter = () => {
    dispatch({
      type: "ADD_FOOTER",
      payload: { footImage, footTitle, footDesc },
    });
  };
  return (
    <div>
      
      <input
        type="text"
        placeholder="link Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="link Address"
        onChange={(e) => setLink(e.target.value)}
      />
      <input
        type="text"
        placeholder="link Target"
        onChange={(e) => setTarget(e.target.value)}
      />
      <Button variant="primary" onClick={handleClick}>
        Submit
      </Button>{" "}
      <br />
      <br />
      <hr />
      <input
        type="text"
        placeholder="carousel Image"
        onChange={(e) => setCarImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="carousel Title"
        onChange={(event) => setCarTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="carousel Description"
        onChange={(e) => setCarDesc(e.target.value)}
      />
      <Button variant="primary" onClick={handleDispatch}>
        Dispatch Carousel
      </Button>{" "}
      <br />
      <br />
      <hr />
      <input
        type="text"
        placeholder="Course Image"
        onChange={(e) => setCardImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Course Title"
        onChange={(e) => setCardTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Course Description"
        onChange={(e) => setCardDesc(e.target.value)}
      />
      <Button variant="primary" onClick={handleCourses}>
        Dispatch Courses
      </Button>{" "}
      <br />
      <br />
      <hr />
      <input
        type="text"
        placeholder="Footer Image"
        onChange={(e) => setFootImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Footer Title"
        onChange={(e) => setFootTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Footer Description"
        onChange={(e) => setFootDesc(e.target.value)}
      />
      <Button variant="primary" onClick={handleFooter}>
        Dispatch Footer
      </Button>{" "}
    </div>
  );
};

export default Dashboard;
