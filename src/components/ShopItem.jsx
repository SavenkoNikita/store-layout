const ShopItem = ({ product }) => {
  return (
    <div className="shop-item">
      <img src={product.img} alt={product.name} className="item-img" />
      <h3 className="item-name">{product.name}</h3>
      <p className="item-color">{product.color}</p>
      <span className="item-price">${product.price}</span>
      <button className="item-btn">Add to cart</button>
    </div>
  );
};

export default ShopItem;