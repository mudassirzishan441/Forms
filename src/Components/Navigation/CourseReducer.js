export const CourseReducer = (
  state = [
    {
      cardImage:
        "https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw",
      cardTitle: "HTML",
      cardDesc: "Hyper Text Markup Language",
    },
    {
      cardImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
      cardTitle: "CSS",
      cardDesc: "Cascading Style Sheet",
    },
    {
      cardImage:"https://lh3.googleusercontent.com/TzsxB3RFCBKOObTn0sw9jMHx3jwwULx9_1ig1kVDdOCUcuYFJFY3Eqzm8y7IjdhXr9I",
      cardTitle: "JS",
      cardDesc: "JavaScript",
    },
  ],
  action
) => {
  if (action.type === "ADD_COURSES") {
    return [...state, action.payload];
  } else return state;
};
