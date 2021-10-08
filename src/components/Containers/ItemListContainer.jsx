import { useState, useEffect } from "react";
import ItemList from "../Item/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../service/getFirebase";

const ItemListContainer = ({ greeting }) => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      setTimeout(() => {
        const dbList = getFirestore();
        dbList
          .collection("items")
          .where("category", "==", categoryId)
          .get()
          .then((data) => {
            setItem(
              data.docs.map((items) => ({ id: items.id, ...items.data() }))
            );
          })
          .catch((error) => console.log(error))
          .finally(() => setLoading(false));
      }, 500);
    } else {
      setTimeout(() => {
        const dbList = getFirestore();
        dbList
          .collection("items")
          .get()
          .then((firebaseData) => {
            setItem(
              firebaseData.docs.map((items) => ({
                id: items.id,
                ...items.data(),
              }))
            );
          })
          .catch((error) => console.log(error))
          .finally(() => setLoading(false));
      }, 500);
    }
  }, [categoryId]);

  return (
    <>
      <h2>{greeting}</h2>
      <h3 className="text-3xl font-bold text-yellow-600 uppercase">
        {categoryId}
      </h3>

      {loading ? (
        <div className="loading-wrap">
          <div className="loading"></div>
        </div>
      ) : (
        <div className="mt-6 px-10 grid grid-cols-3 gap-4">
          <ItemList item={item} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
