import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore
} from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import { WS_BASE_URL } from '../utils/constants';
import { TConstructorActions } from './actions/constructor';
import { TDetailsAction } from './actions/details';
import { IGetIngredientsActions } from './actions/getIngredients';
import { ISetOrderActions } from './actions/order';
import { IUserActions } from './actions/user';
import { socketMiddleware } from './middleware/socketMiddleware';
import { constructorReducer } from "./reducers/constructorReducer";
import { detailsReducer } from "./reducers/detailsReduser";
import { ingredientsReducer } from "./reducers/ingredientsReducer";
import { orderReducer } from "./reducers/orderReducer";
import { userReducer } from "./reducers/userReducer";
import { TWSActions, wsReducer } from './reducers/wsReducer';

const composeEnhancers =
  // @ts-ignore
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  // @ts-ignore
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const rootReducer = combineReducers({
  ingredientsReducer,
  detailsReducer,
  constructorReducer,
  orderReducer,
  userReducer,
  wsReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(
    thunk, 
    socketMiddleware(`${WS_BASE_URL}/all`)
  ))
);

export default store;

export type TAppActions = 
  | TConstructorActions
  | TDetailsAction
  | IGetIngredientsActions
  | ISetOrderActions
  | IUserActions
  | TWSActions;

export type AppDispatch = ThunkDispatch<RootState, never, TAppActions>;
export type RootState = ReturnType<typeof store.getState>