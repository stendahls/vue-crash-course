<docs>
  Product Item
  ============
  bla bla bla!
</docs>

<template>
  <li :class="{ 'product-item--out-of-stock': isOutOfStock }">
    <strong>{{product.name}}</strong>
    <span> - {{$t('inStock')}}: {{product.count}}</span>
    <button :disabled="isOutOfStock" @click="buy">Buy</button>
    <button @click="remove">Remove</button>
  </li>
</template>

<script>
  export default {
    name: 'product-item',
    props: {
      product: { type: Object, required: true }
    },

    computed: {
      isOutOfStock() {
        return this.product.count <= 0;
      }
    },

    methods: {
      buy() {
        this.product.count--;
      },

      remove() {
        this.$emit('product-removed', this.product.id);
      }
    }
  };
</script>

<style lang="scss">
  .product-item {
    display: block;
    margin-top: 8px;
    padding: 8px 12px;
    width: 100%;
    background-color: #e5e5e5;

    &--out-of-stock {
      background-color: pink;
    }
  }
</style>

<i18n>
  {
    "en": {
      "inStock": "In Stock"
    },

    "sv": {
      "inStock": "Antal på lager"
    }
  }
</i18n>
