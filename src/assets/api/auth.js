import { url,getInitData,setToken } from "./url"
import axios from "axios";
const baseUrl="http://localhost:8080"
export const signIn=()=>{
    
    let body= {
        "query_id": "AAGu0-sxAAAAAK7T6zFal1lX",
        "raw":"query_id=AAGu0-sxAAAAAK7T6zFal1lX&user=%7B%22id%22%3A837538734%2C%22first_name%22%3A%22Vlad%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22vladpvs%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1721306241&hash=f179d7a2e74279e405e8c092bf0b3ef81eb0143d78977d974d420471293157d6",
        "user": {
            "id": 837538734,
            "first_name": "Vlad",
            "last_name": "",
            "username": "vladpvs",
            "language_code": "ru",
            "allows_write_to_pm": true
        },
        "auth_date": "1721306241",
        "hash": "f179d7a2e74279e405e8c092bf0b3ef81eb0143d78977d974d420471293157d6"
    }
    let i=getInitData();
    return axios.create({
        baseURL: `${baseUrl}`
    }).post('/auth/signIn',i).then((data)=>setToken(data.data.token))
}
export const signUp=(data)=>{
    let initData=getInitData();
    let body={
        initData:initData,
        market:data
    }
    return axios.create({
        baseURL: `${baseUrl}`
    }).post('/auth/signUp',body)
    .then((data)=>setToken(data.data.token))
}