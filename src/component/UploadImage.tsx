import React, { useState, memo } from "react";

import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import type { GetProp, UploadProps } from "antd";
import { Card } from "../interface/card";
type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

type Props = {
  index: number;
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
const App: React.FC<Props> = ({ index, data, EditCart }) => {
  const [loading, setLoading] = useState(false);

  const handleChange: UploadProps["onChange"] = (info) => {
    getBase64(info.file.originFileObj as FileType, (url) => {
      setLoading(false);

      EditCart({ index, card: data, dataUpdate: { img: url } });
    });
    // }
  };

  const uploadButton = (
    <button
      style={{ border: 0, background: "none", color: "#ffff" }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8, fontWeight: 600 }}>Hình Ảnh</div>
    </button>
  );

  return (
    <>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {data.img ? (
          <div
            className="h-[511px] w-full   "
            style={{
              backgroundImage: `url('${data.img}')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "10px",
              width: "100%",
              height: "100%",
            }}
          ></div>
        ) : (
          uploadButton
        )}
      </Upload>
    </>
  );
};

export default memo(App);
