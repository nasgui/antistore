const cartTotal = (cart) => {
  return cart.reduce((total, cartItem) => {
    if (!cartItem.product) return total;
    return total + cartItem.quantity * cartItem.product.price;
  }, 0);
};

export default cartTotal;
