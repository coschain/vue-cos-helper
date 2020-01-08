<template>
  <button @click="vote_to_bp">{{ text }}</button>
</template>

<script>
  import {apply_operation} from "../common/common";

  export default {
    name: "VoteToBp",
    props: {
      text: {
        type: String,
        required: true
      },
      bp: {
        type: String,
        required: true
      },
      cancel: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      async vote_to_bp() {
        if (typeof ContentosWallet === 'undefined') {
          alert('Wallet not installed！');
          return;
        }
        try {
          let result = await apply_operation(ContentosWallet.voteToBlockProducer, [this.bp, this.cancel]);
          this.$emit('result', result)
        } catch (ex) {
          this.$emit('error', ex)
        }
      }
    }
  }
</script>

