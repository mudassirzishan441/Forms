export const CarouselReducer = (
  state = [
    {
      CarouselImage: "https://c2.staticflickr.com/4/3760/13698769893_8e9be65e3e_o.jpg",
      CarouselTitle: "First Slide",
      CarouselDesc: "Tuppa",
    },
    {
      CarouselImage: "https://w0.peakpx.com/wallpaper/407/806/HD-wallpaper-tasman-glacier-lake-on-south-island-new-zealand-nature-lake-mountains-forest-cool-fun.jpg",
      CarouselTitle: "Second Slide",
      CarouselDesc: "Kashmir,India",
    },
    {
      CarouselImage: "https://www.freewalldownload.com/new-york-city/free-mind-blowing-usa-new-york-city-freedom-tower-wallpapers-for-tablet.jpg",
      CarouselTitle: "Third Slide",
      CarouselDesc: "USA",
    },
  ],
  action
) => {
  if(action.type === "ADD_CAROUSEL"){
    return [...state,action.payload]
  }else
  return state;
};
