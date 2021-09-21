import { Link } from "react-router-dom";
import ItemCount from "../Item/ItemCount";

const Item = ({ item }) => {
  // const { item } = props;
  return (
    <div
      key={item.id}
      className="col-span-3 sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-1 flex flex-cols items-center"
    >
      <div className="container flex justify-center ">
        <div className="max-w-sm py-24">
          <div className="h-auto bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
            <img
              className="object-contain max-h-64 w-full rounded-t-lg"
              src={item.img}
              alt={item.name}
            />
            <div className="py-6 px-8 rounded-lg bg-white">
              <Link to="/detail">
                <h1 className="text-gray-700 font-bold text-2xl mb-3 h-16	flex place-items-center hover:text-gray-900 hover:cursor-pointer">
                  {item.name}
                </h1>
              </Link>
              <p className="text-xs text-gray-400">Stock: {item.stock}</p>
              <p className="text-gray-700 tracking-wide line-clamp-3">
                {item.cap}
              </p>
              <Link to={`/detail/${item.id}`}>
                <p className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900">
                  MORE
                </p>
              </Link>
              <ItemCount />
            </div>
            <div className="absolute top-2 right-2 py-2 px-4 bg-black text-white rounded-lg shadow-2xl">
              <span className="text-md">$ {item.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
