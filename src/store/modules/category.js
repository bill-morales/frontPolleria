import axios from 'axios'
export default {
    namespaced: true,
    state() {
      return {
        categories: []
      }
    },
    mutations: {
      SET_CATEGORIES(state, categories) {
        state.categories = categories
      },
      ADD_CATEGORY(state, category) {
        state.categories.push(category)
      },
      UPDATE_CATEGORY(state, updatedCategory) {
        const index = state.categories.findIndex(category => category.id === updatedCategory.id)
        if (index !== -1) {
          state.categories.splice(index, 1, updatedCategory)
        }
      },
      DELETE_CATEGORY(state, categoryId) {
        const index = state.categories.findIndex(category => category.id === categoryId)
        if (index !== -1) {
          state.categories.splice(index, 1)
        }
      }
    },
    actions: {
      async getCategories({ commit }) {
        try{

          const response = await axios.get('http://127.0.0.1:8000/api/categories', {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
          console.log(response.data);
          commit('SET_CATEGORIES', response.data)
        }catch(error){
          console.log(error);
        }
      },
      async createCategory({ commit }, category) {
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/categories', category,{
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('authToken')
            }
            
          })
          commit('ADD_CATEGORY', response.data)
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      },
      async updateCategory({ commit }, {id,name}) {
        try {
          const response = await axios.put(`http://127.0.0.1:8000/api/categories/${id}`, {name},{
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('authToken')
            }
          })
          commit('UPDATE_CATEGORY', response.data)
          console.log(response.data);
          return null;
        } catch (error) {
          console.log(error);
          return error.response.data.errors;
        }
      },
      async deleteCategory({ commit }, categoryId) {
        try {
          const response = await axios.delete(`http://127.0.0.1:8000/api/categories/${categoryId}`,{
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('authToken')
            }
          })
          console.log(response.data);
          commit('DELETE_CATEGORY', categoryId)
        } catch (error) {
          console.log(error,categoryId);
        }
      }
    },
    getters: {
      categories: state => state.categories
    }
  }