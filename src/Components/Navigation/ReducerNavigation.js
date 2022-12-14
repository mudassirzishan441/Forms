export const ReducerNavigation = (
  state = [
    { name: "Google", link: "https://www.google.com", target: "_blank" },
    { name: "YouTube", link: "https://www.youtube.com/", target: "_blank" },
    { name: "BootStrap", link: "https://react-bootstrap.github.io/", target: "_blank" },
  ],
  action
) => {
  if (action.type === "ADD_LINKS") {
    return [...state, action.data];
  } else return state;
};
