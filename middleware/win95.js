export default function (ctx) {
    ctx.layout = ctx.store.state.win95 ? 'win95' : 'default'
    console.log('layout', ctx.layout)
}