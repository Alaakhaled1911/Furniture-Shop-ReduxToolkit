import "./best.css";
import { MdAddCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtoCart } from "../store/ProductSlice";
const BestSales = ({ bestproducts }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const bestproduct = bestproducts?.map((item) => {
    const _id = item.title;

    function idString(_id) {
      return String(_id).toLowerCase().split(" ").join("");
    }

    const rootId = idString(_id);

    const handleClick = (clickedItem) => {
      navigate(`/Cart/${rootId}`, {
        state: {
          item: clickedItem,
        },
      });
    };
    return (
      <div>
        <div key={item.id} className="smallcard">
          <img src={item.image} />

          <div className="title">{item.title}</div>
          <p className="price">{item.price}$</p>

          <div class="overlay" onClick={() => handleClick(item)}>
            <MdAddCircle
              style={{
                height: "33px",
                width: "44px",
                color: "rgb(108 51 77)",
              }}
              onClick={() =>
                dispatch(
                  addtoCart({
                    id: item.id,
                    title: item.title,
                    image: item.image,
                    price: item.price,
                    oldprice: item.oldprice,
                    category: item.category,
                    quantity: 1,
                  })
                )
              }
            />
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="dflex">{bestproduct}</div>
    </>
  );
};

export default BestSales;
