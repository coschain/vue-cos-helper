<template>
  <button @click="cos_to_vest">{{ text }}</button>
</template>

<script>
  import {apply_operation} from "../common/common";

  export default {
    name: 'CosToVest',
    props: {
      text: {
        type: String,
        required: true
      },
      amount: {
        type: String,
        require: true
      },
    },
    methods: {
      async cos_to_vest() {
        if (typeof ContentosWallet === 'undefined') {
          alert('Wallet not installed！');
          return;
        }
        try {
          let result = await apply_operation(ContentosWallet.cosToVest, [this.amount]);
          this.$emit('result', result)
        } catch (ex) {
          this.$emit('error', ex)
        }
      }
    }
  }
</script>

