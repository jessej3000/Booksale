<template>
  <div class="container">
    <OrderForm />
    <Cart />
  </div>
</template>

<script>
import OrderForm from "../components/OrderForm"
import Cart from "../components/Cart"

export default {
  name: "BookSale",
  components: {
    OrderForm,
    Cart
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
</style>