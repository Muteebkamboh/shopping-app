import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../features/cart/CartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="p-6">
      <h1 className="text-center text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
         My Cart
      </h1>

      {items.length === 0 ? (
        <h2 className="p-6 max-w-md mx-auto mt-10 border rounded-lg shadow-md">
          Cart is empty 🛒
        </h2>
      ) : (
        <div>
          {items.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 mb-4 shadow-md flex justify-between items-center"
            >
              <div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-green-600">${item.price}</p>
                <img src={item.image} alt={item.title} width="100px" />
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={() => dispatch(clearCart())}
            className="bg-red-700 text-white px-6 py-2 rounded-lg mt-4"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
