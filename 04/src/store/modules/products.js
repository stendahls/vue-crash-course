
const namespaced = true;

const state = {
  items: []
};

const mutations = {
  setProducts(state, products) {
    state.items = products;
  },

  addProduct(state, product) {
    product.id = Math.random();
    state.items.push(product);
  }
};

const actions = {
  loadProducts({commit}) {
    return fetch('/products.json')
      .then(response => response.json())
      .then(json => {
        commit('setProducts', json);
      });
  }
};

export default {
  namespaced,
  state,
  mutations,
  actions
};
