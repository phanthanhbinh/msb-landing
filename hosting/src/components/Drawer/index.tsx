import { ReactElement, useCallback, useEffect, useState } from "react";
import { StyledComponent } from "./index.style";
import { Button, Card, Carousel, Checkbox, Col, Drawer, Form, Input, Radio, RadioChangeEvent, Row } from "antd";
import CustomSelect from "components/select.custom";
import { CheckboxValueType } from "antd/es/checkbox/Group";

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
}

function DrawerLayout(props: Props): ReactElement {
  const [formAdvise] = Form.useForm();
  const { open, setOpen } = props;
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const onChangeCheckBox = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
  };

  const onFinish = useCallback(() => {
    formAdvise.validateFields().then((values) => {
      console.log("values", values);
      formAdvise.resetFields()
    });
  }, []);


  return (
    <StyledComponent>
      <Drawer title="Yêu cầu tư vấn" placement="right" onClose={() => setOpen(false)} open={open} closable={false}>
        <p className="title" >Thông tin khách hàng</p>
        <Form form={formAdvise} onFinish={onFinish} name="nest-messages" layout="vertical" scrollToFirstError>
          <Form.Item name="name" rules={[{ required: true, message: "This is a hint text to help user." }]}>
            <Input placeholder="Nhập họ và tên" />
          </Form.Item>
          <Form.Item name="phone" rules={[{ required: true, message: "This is a hint text to help user." }]}>
            <Input placeholder="Nhập số điện thoại" />
          </Form.Item>
          <Row gutter={20}>
            <Col span={12}>
              <Form.Item name="city" rules={[{ required: true, message: "This is a hint text to help user." }]}>
                <CustomSelect
                  placeholder="Chọn thành phố"
                >
                  <CustomSelect.Option value="1">Hà Nội</CustomSelect.Option>
                </CustomSelect>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="district" rules={[{ required: true, message: "This is a hint text to help user." }]}>
                <CustomSelect
                  placeholder="Chọn quận huyện"
                >
                  <CustomSelect.Option value="2">Thanh Xuân</CustomSelect.Option>
                </CustomSelect>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Form.Item name="gender" label="Giới tính" rules={[{ required: true, message: "Vui lòng chọn đầy đủ thông tin" }]}>
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>Nam</Radio>
                <Radio value={2}>Nữ</Radio>
              </Radio.Group>
            </Form.Item>
          </Row>
          <Row>
            <Form.Item name="products" label="Sản phẩm cần tư vấn" rules={[{ required: true, message: "Vui lòng chọn đầy đủ thông tin" }]}>
              <Checkbox.Group style={{ width: '100%' }} onChange={onChangeCheckBox}>
                <Row>
                  <Col span={12}>
                    <Checkbox value="A">Thẻ tín dụng</Checkbox>
                  </Col>
                  <Col span={12}>
                    <Checkbox value="B">Mua trước trả sau</Checkbox>
                  </Col>
                  <Col span={12}>
                    <Checkbox value="C">Vay linh hoạt</Checkbox>
                  </Col>
                  <Col span={12}>
                    <Checkbox value="D">Tài khoản M-Pro</Checkbox>
                  </Col>
                  <Col span={12}>
                    <Checkbox value="E">Tiền nhanh</Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
            </Form.Item>
          </Row>
          <Form.Item name="text" rules={[{ required: true, message: "This is a hint text to help user." }]}>
            <Input.TextArea rows={3} placeholder="Nhập thông tin" style={{ width: "100%" }} />
          </Form.Item>
          <Button htmlType="submit" className="btnSubmit">Xác nhận</Button>
        </Form>
      </Drawer>
    </StyledComponent>
  );
}

export default DrawerLayout;
