export const addItemToCart = (cartItems, product) => {
    const productInCart = cartItems.find(item => item.id === product.id); /* buscamos si el producto que le pasamos ya esta en el carrito */
  
    if (productInCart) {
      return cartItems.map(item => /* mapeamos todos los items del carrito y buscamos el que coincida con el que pasaron como parametro */
        item.id === productInCart.id
          ? { ...item, quantity: item.quantity + 1 } /* si el item de la iteracion del map coincide con el producto pasado como parametre, devuelve todas las propiedades del item y a la propiedad quatity le suma uno */
          : item /* y los items que no coincidan los devuelve como estaba */
      );
    }
  
    return [...cartItems, { ...product, quantity: 1 }]; /* si el producto pasado como parametro no estaba en el carrito, retornamos todos los items anteriores y le agregamos el producto pasado */
  };
  
  export const removeItemFromCart = (cartItems, id) => {

    const productToRemove = cartItems.find(item => item.id === id); /* buscamos el producto pasado como parametro */

    if (productToRemove?.quantity > 1) { /* si el producto pasado como parametro tiene mas de una unidad, le restamos una unidad */
      return cartItems.map(item =>
        item.id === productToRemove.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    }
  
    return cartItems.filter(item => item.id !== productToRemove?.id);/* si tiene una sola unidad lo eliminamos haciendo un filter que deje solo los items cuyo id no coincidan con el pasado */
  };
  
  export const resetShippingCost = (cartItems, shippingCost) => {
    if (cartItems.length === 1 && cartItems[0].quantity === 1) {
      return 0;
    }
    return shippingCost;
  };