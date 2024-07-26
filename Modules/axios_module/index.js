import axios from 'axios'

axios.get('https://api.github.com/users/Amit0094').then((res)=>{
   console.log(res.data);
   console.log(res.status);
}).catch((err)=>{
    console.log(err);
})



// axios is a popular promise-based HTTP client for JavaScript, often used for making asynchronous HTTP requests from both the browser and Node.js. It simplifies the process of making network requests and handling responses.