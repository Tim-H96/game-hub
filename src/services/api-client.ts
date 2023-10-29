import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "0993597ea33342c4900fc164df926fb8"
    }
})