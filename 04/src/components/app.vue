<template>
  <div id="app">
    <h1>Products</h1>
    <transition-group class="products" tag="ul" name="list">
      <product-item
        class="product-item"
        :product="product"
        :key="product.id"
        @product-removed="productRemoved"
        v-for="product in products">
    </product-item>
    </transition-group>
    <form @submit.prevent="addNew">
      <input type="text" v-model="newProduct" />
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
  import productItem from './product-item.vue';

  export default {
    name: 'app',
    components: { productItem },

    data() {
      return {
        newProduct: null
      }
    },

    mounted() {
      this.$store.dispatch('products/loadProducts');
    },

    computed: {
      products() {
        return this.$store.state.products.items;
      }
    },

    methods: {
      addNew() {
        let product = { name: this.newProduct, count: 4 };
        this.$store.commit('products/addProduct', product);
        this.newProduct = null;
      },

      productRemoved(id) {
        var index = this.products.findIndex(p => p.id === id);
        this.products.splice(index, 1);
      }
    }
  };
</script>

<style>
  .products {
    list-style: none;
    padding: 0;
    position: relative;
    width: 420px;
  }

  .list-enter-active,
  .list-leave-active,
  .list-move {
    transition: 500ms cubic-bezier(0.59, 0.12, 0.34, 0.95);
    transition-property: opacity, transform;
  }

  .list-enter {
    opacity: 0;
    transform: translateX(50px) scaleY(0.5);
  }

  .list-enter-to {
    opacity: 1;
    transform: translateX(0) scaleY(1);
  }

  .list-leave-active {
    position: absolute;
  }

  .list-leave-to {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: center top;
  }
</style>
