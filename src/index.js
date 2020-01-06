import Transfer from './components/transfer.vue'
import CosToVest from './components/cos_to_vest.vue'
import VestToCos from './components/vest_to_cos.vue'
import CosToChicken from './components/cos_to_chicken.vue'
import ChickenToCos from './components/chicken_to_cos.vue'
import ContractCall from './components/cos_contract.vue'
import VoteToBp  from './components/vote_to_bp.vue'

export default {
  install (Vue) {
    Vue.component('cos-transfer', Transfer)
    Vue.component('cos-vest', CosToVest)
    Vue.component('cos-unvest', VestToCos)
    Vue.component('cos-chicken', CosToChicken)
    Vue.component('cos-unchicken', ChickenToCos)
    Vue.component('cos-votebp', VoteToBp)
    Vue.component('cos-contractcall', ContractCall)
  }
}

export {Transfer, CosToVest, VestToCos, CosToChicken, ChickenToCos, ContractCall, VoteToBp}
