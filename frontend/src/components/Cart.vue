<template>
  <div>
    <div class="total"><label>Total: </label>{{ getTotal.total }} EUR</div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: "Cart",
  computed: mapGetters(['getTotal'])
}
</script>
<style scoped>
  .total {
    padding: 100px 100px;
    font-weight: bold;
  }
</style>