import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";

const CartWidget = () => {
  const { iconCart, cartList } = useCartContext();

  return (
    <>
      {cartList < 1 ? (
        <div className="flex justify-center md:block">
          <div className="relative text-gray-300 dark:text-gray-200 ">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill-opacity="0.5"
                value="3"
              ></path>
            </svg>
            <span className="absolute bottom-3 right-3 p-1 px-2 text-xs text-white bg-white bg-opacity-0  rounded-full">
              <span className="bg-opacity-0 p-1 px-2"></span>
            </span>
          </div>
        </div>
      ) : (
        <Link to="/cart">
          <div className="flex justify-center md:block">
            <button className="relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  value="3"
                ></path>
              </svg>
              <span className="absolute bottom-3 right-3 p-1 px-2 text-xs text-white bg-green-500 bg-opacity-75 hover:bg-opacity-75 hover:bg-yellow-500 rounded-full">
                <span className="bg-opacity-100">{iconCart()}</span>
              </span>
            </button>
          </div>
        </Link>
      )}
    </>
  );
};

export default CartWidget;
