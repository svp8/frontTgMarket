import axios from "axios";
let token;
if (localStorage.getItem('token') != null) {
    token = localStorage.getItem('token') || '';
}
const baseUrl="http://localhost:8080"
export const url = axios.create({
    baseURL: `${baseUrl}`,
    headers: { 'Authorization': `Bearer ${token}` }
})

export const getInitData = ()=>{
   let {initData,initDataUnsafe} = window.Telegram.WebApp;
    initDataUnsafe.raw=initData;
    console.log(window.Telegram.WebApp);
    return initDataUnsafe;
}
export const setToken = (token)=>{
    localStorage.setItem("token",token)
}