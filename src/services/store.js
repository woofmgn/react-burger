import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { constructorReducer } from "./reducers/constructorReducer";
import { detailsReducer } from "./reducers/detailsReduser";
import { ingredientsReducer } from "./reducers/ingredientsReducer";
import { orderReducer } from "./reducers/orderReducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const rootReducer = combineReducers({
  ingredientsReducer,
  detailsReducer,
  constructorReducer,
  orderReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
