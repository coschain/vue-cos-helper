import Transfer from './components/transfer.vue'
import CosToVest from './components/cos_to_vest'
import VestToCos from './components/vest_to_cos'
import CosToChicken from './components/cos_to_chicken'
import ChickenToCos from './components/chicken_to_cos'

export default {
  install (Vue) {
    Vue.component('cos-transfer', Transfer)
    Vue.component('cos-vest', CosToVest)
    Vue.component('cos-unvest', VestToCos)
    Vue.component('cos-chicken', CosToChicken)
    Vue.component('cos-unchicken', ChickenToCos)
  }
}

export {Transfer, CosToVest, VestToCos, CosToChicken, ChickenToCos}
