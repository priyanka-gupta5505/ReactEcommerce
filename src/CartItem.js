import React from "react";
import "./index.css";
function CartItem(props) {
  const { title, price, qty, url } = props.values;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img src={url} alt="img" style={styles.images} />
      </div>
      <div className="right-block">
        <div style={styles.title}>{title}</div>
        <div style={styles.details}>Rs {price}</div>
        <div style={styles.details}>Qty:{qty}</div>
        <div className="cart-item-actions">
          <button onClick={() => props.handlePlusClick(props.values)}>
            <i class="fas fa-plus-circle"></i>
          </button>
          <button onClick={() => props.handleMinusClick(props.values)}>
            <i class="fas fa-minus-circle"></i>
          </button>
          <button onClick={() => props.handleDelete(props.values)}>
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
const styles = {
  images: {
    height: 110,
    width: 110,
    borderRadius: 4,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  details: {
    fontSize: 15,
    color: "grey",
  },
};

export default CartItem;
