import bridge from "@vkontakte/vk-bridge";
import axios from "../api/api";

export const TYPES = {
  GET_VK_USER: "GET_VK_USER",
  GET_PRODUCTS: "GET_PRODUCTS",
  GET_POPULAR_PRODUCTS: "GET_POPULAR_PRODUCTS",
  GET_STOCKS: "GET_STOCKS",
};

export const getVkUserData = () => (dispatch) => {
  bridge.send("VKWebAppGetUserInfo", {}).then((res) => {    
    dispatch({
      type: TYPES.GET_VK_USER,
      payload: res,
    });
  });
};


export const getProducts = () => (dispatch) => {
  axios({
    method: 'GET',
    url: 'product/',
    headers: {
      'Content-Type': 'application/json'
  }
  }).then( res => {
    dispatch({
      type: TYPES.GET_PRODUCTS,
      payload: res.data
    })
  })
}