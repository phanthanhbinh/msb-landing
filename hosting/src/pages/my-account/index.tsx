import { Breadcrumb, Card, Col, Menu, MenuProps, Row } from "antd";
import Icon from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { StyledComponent } from "./index.style";
import { useCallback, useEffect } from "react";
import { request } from "utils/api";
import UserIcon from "assets/Icons/user";
import ProductIcon from "assets/Icons/product";
import LogoutIcon from "assets/Icons/log-out";

const token = localStorage.getItem("accessToken");
const email = localStorage.getItem("email");
const username = email?.slice(0, email?.indexOf("@"))

const MyAccount = () => {
  const navigate = useNavigate();

  const items: MenuProps['items'] = [
    {
      label: "Thông tin tài khoản",
      key: 'infor',
      icon: <Icon component={UserIcon} style={{ color: "#fff" }} />
    },
    {
      label: "Thông tin sản phẩm",
      key: 'product',
      icon: <Icon component={ProductIcon} />
    },
    {
      label: "Đăng xuất",
      key: 'logout',
      icon: <Icon component={LogoutIcon} style={{ verticalAlign: "-0.525em" }} />
    }
  ];

  const getUserInfor = useCallback(async () => {
    const option = {
      method: "get",
      url: `${process.env.REACT_APP_SERVER_URL}/users/my-account`,
    };
    try {
      const res = await request(option);
      if (!res.error) {
        // setUserInfor and check permission
      }
    } catch {
      console.log("something error");
    }
  }, []);
  let firstLoad = true;

  useEffect(() => {
    if (token) {
      if (firstLoad) {
        getUserInfor();
      }
      firstLoad = false;
    } else {
      navigate("/");
    }
  }, [token]);

  return (
    <StyledComponent>
      <Breadcrumb
        separator=">"

        items={[
          {
            title: (
              <Link to="/">
                Trang chủ
              </Link>
            ),
          },
          {
            title: "Quản lý tài khoản",
          },
        ]}
      />
      <Row gutter={32}>
        <Col span={8} >
          <Card title={username}>
            <Menu onClick={() => { }} selectedKeys={[]} mode="vertical" items={items} />
          </Card>
        </Col>
        <Col span={16}>
          <Card title="Thông tin chung">
            <Row className="detail">
              <Col span={6}>Họ và tên</Col>
              <Col span={18} className="right">Phan Thanh Bình</Col>
            </Row>
            <Row className="detail">
              <Col span={6}>Số CMND/CCCD</Col>
              <Col span={18} className="right">123456789</Col>
            </Row>
            <Row className="detail">
              <Col span={6}>Số điện thoại</Col>
              <Col span={18} className="right">0981787987</Col>
            </Row>
          </Card>
        </Col>
      </Row>


    </StyledComponent>
  );
};

export default MyAccount;
