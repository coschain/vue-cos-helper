<template>
  <button class="vue-cos-btn" @click="transfer">{{ text }}</button>
</template>

<script>
  export default {
    name: 'Transfer',
    props: {
      text: {
        type: String,
        required: true
      },
      receiver: {
        type: String,
        required: true
      },
      amount: {
        type: String,
        require: true
      },
      memo: {
        type: String,
        require: false
      }
    },
    methods: {
      async transfer () {
        if (typeof ContentosWallet === 'undefined') {
          alert('Wallet not installed！');
          return;
        }
        try {
          const currentAccount = await ContentosWallet.getDefaultAccount();
          const result = await ContentosWallet.transfer(currentAccount.account, this.receiver, this.amount, this.memo);
          console.info(result);
        } catch (ex) {
          console.error(ex);
        }
      }
    }
  }
</script>

<style scoped>
  button {
    background: #3674FF;
    border-radius: 28px;
    color: white;
    letter-spacing: 0;
    outline: none;
    font-size: 16px;
    font-weight: 600;
    width: 120px;
    height: 40px;
  }
  button:hover {
    background: #3674FF;
    color: white;
    cursor: pointer;
    border-radius: 28px;
    box-shadow: 0 6px 12px 0 rgba(54,116,255,0.50);
  }
</style>
