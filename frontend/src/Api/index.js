import axios from 'axios';

function getProducts(){
    axios.get('http://localhost:5000/api/products')
    .then(response => console.log(response.data))
  }

  function setToken(token){
    axios.defaults.headers.common["Authorization"] = 'Bearer ' + token
  }

  export {setToken, getProducts}
  