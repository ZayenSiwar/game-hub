import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
params:{
    key:'53085444edd045cb8abd21c9422662dd'
}
})