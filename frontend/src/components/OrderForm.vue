<template>
  <form id="order-form">
    <div><h3>Harry Potter Book Order</h3></div>
    <div class="row">
      <div>
        <label>Book 1</label>
        <input type="text" v-model="b1" v-on:change="computeTotal"/>
      </div>
    </div>
    <div class="row">
      <div>
        <label>Book 2</label>
        <input type="text" v-model="b2" v-on:change="computeTotal"/>
      </div>
    </div>
    <div class="row">
      <div>
        <label>Book 3</label>
        <input type="text" v-model="b3" v-on:change="computeTotal"/>
      </div>
    </div>
    <div class="row">
      <div>
        <label>Book 4</label>
        <input type="text" v-model="b4" v-on:change="computeTotal"/>
      </div>
    </div>
    <div class="row">
      <div>
        <label>Book 5</label>
        <input type="text" v-model="b5" v-on:change="computeTotal"/>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  name: "OrderForm",
  data: function() {
    return {
      b1: 0,
      b2: 0,
      b3: 0,
      b4: 0,
      b5: 0
    }
  },
  methods: {
    async computeTotal() {
      try {
        const result = await fetch("http://localhost:3300/calculate/books",
          {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                b1: parseInt(this.b1),
                b2: parseInt(this.b2),
                b3: parseInt(this.b3),
                b4: parseInt(this.b4),
                b5: parseInt(this.b5),
              })
          })
        const total = await result.json();
        this.$store.commit('setTotal', total);
        console.log(`RESULT ${JSON.stringify(total)}`);
      } catch (err) {
        alert(err)
      }
    }
  }
}
</script>
<style scoped>
  input {
    text-align: center;
  }
</style>