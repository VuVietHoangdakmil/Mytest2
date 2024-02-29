import React from "react";

import { Button, Form, Input, Row, Col } from "antd";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  title?: string;
  description?: string;
  nameSchool?: string;
  course?: string;
};

const FormCreate: React.FC = () => (
  <Form
    name="basic"
    // labelCol={{ span: 8 }}
    // wrapperCol={{ span: 16 }}
    // style={{ width: "100%" }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ fontWeight: 600, fontSize: "40px", color: "#ffff" }}>
        Tạo học phần mới
      </div>
      <Button type="primary" htmlType="submit">
        Tạo
      </Button>
    </div>
    <Form.Item<FieldType>
      name="title"
      rules={[{ required: true, message: "Vui lòng nhập tiêu đề!" }]}
    >
      <Input
        placeholder="Nhập tiêu đề"
        style={{ border: "none", height: "48px", fontWeight: 600 }}
      />
    </Form.Item>

    <Row gutter={16}>
      <Col span={12}>
        <Form.Item<FieldType> name="description">
          <Input.TextArea
            placeholder="Mô tả"
            style={{ height: "121px", border: "none", fontWeight: 600 }}
          />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item<FieldType> name="nameSchool">
          <Input
            placeholder="Tên Trường"
            style={{ border: "none", height: "48px", fontWeight: 600 }}
          />
        </Form.Item>
        <Form.Item<FieldType> name="course">
          <Input
            placeholder="Khóa học"
            style={{ border: "none", height: "48px", fontWeight: 600 }}
          />
        </Form.Item>
      </Col>
    </Row>
  </Form>
);

export default FormCreate;
