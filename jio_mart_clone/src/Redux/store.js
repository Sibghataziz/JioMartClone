import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "./Login/loginReducer";
import { singleProductReducer } from "./SingleProduct/singleReducer";
import { cartReducer } from "./Cart/cartReducer";
import productReducer from "./Products/productReducer";

import { cartReducer } from "./Cart/cartReducer";

  export const rootReducer = combineReducers({
    auth: loginReducer,
    cart: cartReducer,
    singleProduct: singleProductReducer,
    products: productReducer,
  });

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);

// store.subscribe(() => {
//   console.log("store got updated", store.getState().products);
// });
