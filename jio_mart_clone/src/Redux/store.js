// import {
//   applyMiddleware,
//   combineReducers,
//   legacy_createStore as createStore,
//   compose,
// } from "redux";
// import thunk from "redux-thunk";
// import { AuthReducer } from "./Login/loginReducer";
// import { singleProductReducer } from "./SingleProduct/singleReducer";
// import productReducer from "./Products/productReducer"

// export const rootReducer = combineReducers({
//   Auth: AuthReducer,
//   // cart: cartReducer,
//   singleProduct: singleProductReducer,
//   products: productReducer,
// });

// const composeEnhancers =
//   (typeof window !== "undefined" &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const enhancer = composeEnhancers(applyMiddleware(thunk));

// export const store = createStore(rootReducer, enhancer);



import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./Login/loginReducer";
import { singleProductReducer } from "./SingleProduct/singleReducer";
import productReducer from "./Products/productReducer";

const functionOrObject = (store) => (next) => (action) => {
    if (typeof action === "function") {
      console.log(1);
      return action(store.dispatch);
    }
    return next(action);
  };

  export const rootReducer = combineReducers({
    // auth: AuthReducer,
    // cart: cartReducer,
    singleProduct: singleProductReducer,
    products: productReducer,
  });


const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      })
    : compose;

const middlewares = applyMiddleware(thunk);
const enhancer = composeEnhancers(middlewares);

export const store = createStore(rootReducer, enhancer);

// store.subscribe(() => {
//   console.log("store got updated", store.getState().products);
// });
