import react, { memo } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip, Input, Row, Col } from "antd";
import { Card } from "../interface/card";
import UploadImage from "./UploadImage";
const styleInput: any = {
  fontWeight: 600,
  color: "white",
  height: "50px",
  borderBottom: "2px solid white",
  borderLeft: "none",
  borderRight: "none",
  borderTop: "none",
  outlineColor: "transparent !important",
  borderRadius: "0",
};
type PropsCard = {
  index: number;
  RemoveCard: (index: number) => void;
  data: Card;
  EditCart: ({
    index,
    card,
    dataUpdate,
  }: {
    index: number;
    card: Card;
    dataUpdate: Card;
  }) => void;
};
const Card1: react.FC<PropsCard> = ({ index, RemoveCard, data, EditCart }) => {
  return (
    <div
      style={{
        borderRadius: " 10px",
        backgroundColor: "#2e3856",
        margin: "15px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 20px",
          alignItems: "center",
        }}
      >
        <div style={{ color: "#ffff", fontWeight: 600, fontSize: "30px" }}>
          {index + 1}
        </div>
        <div style={{ cursor: "pointer" }} onClick={() => RemoveCard(index)}>
          <Tooltip placement="bottom" title="Xóa thẻ này">
            <FontAwesomeIcon color="#ffff" icon={faTrash} />
          </Tooltip>
        </div>
      </div>
      <div style={{ backgroundColor: "#0a092d", height: "2px" }} />
      <Row
        align={"middle"}
        gutter={20}
        style={{ height: "150px", padding: "0px 20px" }}
      >
        <Col span={10}>
          <Input
            style={styleInput}
            value={data.define}
            onChange={(e) => {
              EditCart({
                index,
                card: data,
                dataUpdate: { define: e.target.value },
              });
            }}
          />
          <div style={{ color: "#fff", fontSize: "18px", marginTop: "10px" }}>
            Thuật ngữ
          </div>
        </Col>
        <Col span={10}>
          <Input
            style={styleInput}
            value={data.terms}
            onChange={(e) => {
              EditCart({
                index,
                card: data,
                dataUpdate: { terms: e.target.value },
              });
            }}
          />
          <div style={{ color: "#fff", fontSize: "18px", marginTop: "10px" }}>
            Định nghĩa
          </div>
        </Col>
        <Col span={4}>
          <UploadImage index={index} data={data} EditCart={EditCart} />
        </Col>
      </Row>
    </div>
  );
};
export default memo(Card1);
