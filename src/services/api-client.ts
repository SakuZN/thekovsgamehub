import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '5b1f357001dd42c0881db489ffd55d7a'
    }
})