import { url, getInitData, setToken } from "./url"
import axios from "axios";
export const getMarketById = () => {
    return url.get("/user")
}