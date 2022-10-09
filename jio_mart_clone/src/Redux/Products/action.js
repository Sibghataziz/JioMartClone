import { useParams } from "react-router-dom";
import useAPICall from "../../CustomHooks/useAPICall";
import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING
} from "./actionTypes";


export const getProductsSuccess = (data) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: data
});

export const getProductError = () => ({
  type: GET_PRODUCTS_ERROR
});

export const getProductLoading = () => ({
  type: GET_PRODUCTS_LOADING
});

export const getProducts =async ()=> async(dispatch) =>{
  const {baseUrl, getData} = useAPICall()
  const {item_category} = useParams()

  dispatch(getProductLoading())
  const data =await getData(`${baseUrl}/products?item_category=${item_category}`)
  data ? getProductsSuccess(data) : getProductError()
}

