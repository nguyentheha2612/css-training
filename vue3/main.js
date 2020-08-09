const app = Vue.createApp({
  data() {
    return {
      product: 'Shocks',
      categories: ['Socks', 'Boots', 'Underware', 'Hat', 'Standans', 'Bikini', 'Gen', 'Ship', 'Tooks']
    }
  }
})

const appChild = Vue.createApp({
  computed: {
    newProduct () {
      return 'Awesome'
    }
  }
})