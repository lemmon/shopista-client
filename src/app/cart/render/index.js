const html = require('nanohtml')
const css = require('../../utils/css')
const {
  hasProducts,
} = require('../products')
const state = require('../state')
const renderEmpty = require('./empty')
const renderProducts = require('./products')

module.exports = () => html`
  <div class=${css(true, state.open && `open`)}>
    <div class=${css('overlay')} onclick=${cart.hide}></div>
    <div class=${css('container', 'col')}>${hasProducts() && html`
      <form
        method=post
        class=${css('slider', 'step0')}
        onsubmit=${e => {
          e.preventDefault()
          alert('(o)_(o)')
          cart.render()
        }}
      >
        ${renderProducts()}
      </form>
    ` || renderEmpty()}</div>
  </div>
`
