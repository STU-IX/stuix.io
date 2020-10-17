export const state = () => ({
  page: '',
  title: '',
})

export const mutations = {
  updatePage(state, page) {
    state.page = page
  },
  updateTitle(state, title) {
    state.title = title
  },
}
