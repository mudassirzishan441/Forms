export const FooterReducer = (
  state = [
    {
      footImage:
        "https://studywebdevelopment.com/images/courses-fb-share-img.jpg",
      footTitle: "ExalTech Institute",
      footDesc: "Peer Burhan Lane No.1,Nanded , Maharashtra",
    },
    {
      footImage:
        "https://pickupbiz.com/static/media/pickupbizzlogo.fbf33cad.jpg",
      footTitle: "Any Graduate can Become Software Engineer in 20 Days ",
      footDesc: "Peer Burhan ,Nanded , Maharashtra",
    },
  ],
  action
) => {
  if (action.type === "ADD_FOOTER") {
    return [...state, action.payload];
  } else return state;
};
