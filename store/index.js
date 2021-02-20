export const state = () => ({
  page: '',
  title: '',
  win95: false,
})

export const mutations = {
  updatePage(state, page) {
    state.page = page
  },
  updateTitle(state, title) {
    state.title = title
  },
  updateTheme(state, bool) {
    state.win95 = bool
  },
}
