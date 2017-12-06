const state = () => ({
  count: 0,
  list: [
    // {
    //   user: 1,
    //   name: 'el guevo',
    //   test: false
    // },
    // {
    //   user: 2,
    //   name: 'la cuca',
    //   test: false
    // },
    // {
    //   user: 3,
    //   name: 'el Sobaco',
    //   test: false
    // }
  ]
})

const mutations = {
  initial (state, data) {
    state.list = data
  },
  increment (state) {
    state.count++
  },
  reset (state) {
    state.count = 0
  }
}

export { state, mutations }
