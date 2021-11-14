function Cart(props) {
  const { quantity, handleBasketShow = Function.prototype } = props;
  return (
    <div
      className="cart light-blue accent-3 white-text"
      onClick={handleBasketShow}
    >
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}

export { Cart };
