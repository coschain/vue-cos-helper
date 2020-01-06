<template>
  <button @click="vest_to_cos">{{ text }}</button>
</template>

<script>
  import {apply_operation} from "../common/common";

  export default {
    name: 'VestToCos',
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
      async vest_to_cos() {
        if (typeof ContentosWallet === 'undefined') {
          alert('Wallet not installed！');
          return;
        }
        try {
          let result = await apply_operation(ContentosWallet.vestToCos, [this.amount])
          this.$emit('result', result)
        } catch (e) {
          this.$emit('error', e)
        }
      }
    }
  }
</script>

