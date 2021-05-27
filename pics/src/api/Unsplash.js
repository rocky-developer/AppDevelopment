import axios from 'axios';

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization: "Client-ID 8v9Vi28BGVZxipsqcThtc8cx0zelaS9EyAn_KeujYAA"
    }
});