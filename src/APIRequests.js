import axios from "axios";

export function getExchangeRates() {
    return axios.get("https://cdn.cur.su/api/latest.json")
        .then(responce => responce.data.rates);
}