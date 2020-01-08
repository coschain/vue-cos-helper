<template>
  <button @click="call_contract">{{ text }}</button>
</template>

<script>
  import {apply_operation} from "../common/common";

  export default {
    name: "ContractCall",
    props: {
      text: {
        type: String,
        required: true
      },
      contract: {
        type: String,
        require: true
      },
      owner: {
        type: String,
        require: true
      },
      method: {
        type: String,
        require: true
      },
      argument: {
        type: String,
        require: true
      },
      payment: {
        type: String,
        require: true
      }
    },
    methods: {
      async call_contract() {
        if (typeof ContentosWallet === 'undefined') {
          alert('Wallet not installed！');
          return;
        }
        try {
          let result = await apply_operation(ContentosWallet.contractCall, [this.owner, this.contract, this.method, this.argument, this.payment]);
          this.$emit('result', result)
        } catch (ex) {
          this.$emit('error', ex)
        }
      }
    }
  }
</script>

