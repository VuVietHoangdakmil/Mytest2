import react, { useCallback, useContext } from "react";
import { Card } from "../interface/card";
import UiCart from "./Card";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/cssBtnAddCard.css";
import { contextGlobal } from "../component/context/context";
const FormCard: react.FC = () => {
  //   const [Cards, setCards] = useState<Card[]>([
  //     { define: "", img: "", terms: "" },
  //     { define: "", img: "", terms: "" },
  //     { define: "", img: "", terms: "" },
  //   ]);
  const { Cards, setCards } = useContext(contextGlobal);
  const AddCard = () => {
    setCards((item) => [...item, { define: "", img: "", terms: "" }]);
  };
  const RemoveCard = useCallback((index: number) => {
    setCards((item) => {
      console.log("index", index);

      return item.filter((item, indexm) => indexm !== index);
    });
  }, []);
  const EditCart = useCallback(
    ({
      index,
      card,
      dataUpdate,
    }: {
      index: number;
      card: Card;
      dataUpdate: Card;
    }) => {
      setCards((item) => {
        console.log("dataUpdate", dataUpdate);
        item.splice(index, 1, { ...card, ...dataUpdate });

        return [...item];
      });
    },
    []
  );

  return (
    <div>
      {Cards.map((card, index) => (
        <UiCart
          RemoveCard={RemoveCard}
          index={index}
          data={card}
          EditCart={EditCart}
        />
      ))}
      <div
        style={{
          borderRadius: " 10px",
          backgroundColor: "#2e3856",
          margin: "15px 0",
          height: "100px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "30px", fontWeight: 600, marginLeft: "20px" }}>
          {Cards.length + 1}
        </div>
        <div
          onClick={AddCard}
          className="HoverActive"
          style={{
            margin: "0 auto",
            display: "flex",
            color: "#ffff",
            fontSize: "20px",
            fontWeight: 600,
            alignItems: "center",
            justifyContent: "center",
            borderBottom: "4px solid #3ccfcf",
            width: "150px",
            height: "50px",
          }}
        >
          <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faPlus} />
          Thêm thẻ
        </div>
      </div>
    </div>
  );
};
export default FormCard;
