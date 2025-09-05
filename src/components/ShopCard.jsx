const ShopCard = ({ product }) => {
  return (
    <div className="shop-card">
      <h3 className="card-name">{product.name}</h3>
      <p className="card-color">{product.color}</p>
      <img src={product.img} alt={product.name} className="card-img" />
      <div className="card-footer">
        <span className="card-price">${product.price}</span>
        <button className="card-btn">Add to cart</button>
      </div>
    </div>
  );
};

export default ShopCard;