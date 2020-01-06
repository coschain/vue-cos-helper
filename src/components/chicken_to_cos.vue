<template>
  <button @click="chicken_to_cos">{{ text }}</button>
</template>

<script>
  import {apply_operation} from "../common/common";

  export default {
    name: 'ChickenToCos',
    props: {
      text: {
        type: String,
        required: true
      },
      amount: {
        type: String,
        require: true
      },
      receiver: {
        type: String,
        require: true
      }
    },
    methods: {
      async chicken_to_cos() {
        if (typeof ContentosWallet === 'undefined') {
          alert('Wallet not installed！');
          return;
        }
        try {
          let result = await apply_operation(ContentosWallet.stakeToCos, [this.amount, this.receiver]);
          this.$emit('result', result)
        } catch (ex) {
          this.$emit('error', ex)
        }
      }
    }
  }
</script>

