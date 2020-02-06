import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer nn-VkCRERlHOGhya8adc7xi_E7cX1rRT_J4Z_YlfpdPN_iGAOzpn05VmSSSZ65u9dNYbnaoISxv6AO8RYaC0PUoFK_EBY8GFMC8iyZIhQfn2DE61iibnUTf080E6XnYx',

    }
})
