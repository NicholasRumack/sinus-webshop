import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {setToken} from '@/Api/index.js'
//import {getProducts} from '@/Api/index.js'
//import { get } from '../../../backend/models/Product'


Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    cartCount: 0,
    user: null
  },
  mutations: {
    setProducts(state, products){
      state.products = products
    },
   user(state, user){
     state.user = user; 
   }
  },
  actions: {
    loadProducts({commit}){
      axios .get('http://localhost:5000/api/products')
            .then(data => {
              console.log(data.data)
              let products = data.data
              commit('setProducts', products)
            })
            .catch(error => {
              console.log(error)
            })
    },
    
/*     addProductToCard (context, product) {
      if (!cartItem) {
        context.commit ('pushProducttoCart', product.id)
      } else {
        context.commit('increaseItemQuantity', cartItem)
      }
    }, */

    user(context, user) {
      context.commit('user', user)
    }, 
    
    async logIn({dispatch, commit}, user){
      const response = await axios.post('http://localhost:5000/api/auth/', user);
      setToken(response.data.token)
      commit('user', response.data.user)
      localStorage.setItem('token', response.data.token)
      dispatch('user', response.data.user)
      
    },
    
    },
    getters: {
      user: (state) => {return state.user},
      getProductById: state => (id) => state.products.find(prod => prod._id == id)
      
    }
    
  },
  
)
