import { legacy_createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { FormOneReducer } from "./Reducers/FormOneReducer";
import { FormTwoReducer } from "./Reducers/FormTwoReducer";
import { FormThreeReducer } from "./Reducers/FormThreeReducer";
import { ReducerNavigation } from "./Navigation/ReducerNavigation";
import { CarouselReducer } from "./Navigation/CarouselReducer";
import { CourseReducer } from "./Navigation/CourseReducer";
import { FooterReducer } from "./Navigation/FooterReducer";
export const myStore = () => {
  return legacy_createStore(
    combineReducers({
      FormOneReducer,
      FormTwoReducer,
      FormThreeReducer,
      ReducerNavigation,
      CarouselReducer,
      CourseReducer,
      FooterReducer
    }),
    composeWithDevTools()
  );
};
