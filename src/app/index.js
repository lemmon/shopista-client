import cart from './cart'
import Main from './components/Main'

if (window.cart) {
  console.warn('cart already defined')
} else {
  customElements.define('cart-main', Main)

  window.cart = cart

  window.addEventListener('click', (e) => {
    if (!e.target || !e.target.dataset.cartAction) return
    e.preventDefault()
    switch (e.target.dataset.cartAction) {
      case 'show':
        cart[e.target.dataset.cartAction]()
        return
    }
  })

  window.addEventListener('submit', (e) => {
    if (!e.target || e.target.dataset.cartAction !== 'addtocart') return
    e.preventDefault()
    const formData = new FormData(e.target)
    cart.addProduct({
      name: formData.get('name'),
      price: formData.get('price'),
    })
    cart.show()
  })

  document.addEventListener(
    'DOMContentLoaded',
    () => {
      cart.init()
    },
    false
  )
}
