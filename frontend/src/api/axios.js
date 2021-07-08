import axios from 'axios';

export default axios.create({
    baseURL: `http://localhost:8080`
});

// export default axios.create({
//     baseURL: `http://34.231.255.94`
// });