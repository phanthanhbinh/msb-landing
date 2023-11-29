import { useCallback, useEffect, useMemo, useState } from "react";

import { Layout, Menu, MenuProps, Button, Modal, Form, Input, Drawer, Row, Col, Radio } from "antd";
import Icon from "@ant-design/icons";
import { Link, Outlet, useNavigate } from "react-router-dom";
const { Header, Content, Footer } = Layout;
import { menu } from "menu";
import { newMenu } from "utils/menu";
import { StyledComponent } from "./Layout.style";
import LogoMSB from "assets/logo-msb.png";
import DownIcon from "assets/Icons/down";
import { auth, logInWithEmailAndPassword, logout } from "utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { request } from "utils/api";
import CustomSelect from "./select.custom";
import DrawerLayout from "./Drawer";
// import { getUserDetails } from "services/user";

const token = localStorage.getItem("accessToken");
const email = localStorage.getItem("email");
const username = email?.slice(0, email?.indexOf("@"))

const AppLayout = () => {
  const [form] = Form.useForm();
  const [formAdvise] = Form.useForm();
  const navigate = useNavigate();

  const [openDialog, setOpenDialog] = useState(false);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [values, setValues] = useState({
    username: "",
    password: ""
  });
  const [user, loading, error] = useAuthState(auth);
  const login = useCallback(() => {
    form.validateFields().then((values) => {
      logInWithEmailAndPassword(values.username, values.password)
    });
  }, []);

  const [userLogged, setUserLogged] = useState(token && email ? true : false);

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) {
      const userLogged: any = user?.toJSON();
      console.log("userLogged", userLogged)
      localStorage.setItem(
        "accessToken",
        userLogged.stsTokenManager.accessToken
      );
      localStorage.setItem(
        "email",
        userLogged.email
      );
      setOpenDialog(false);
      setUserLogged(true)
      // getUserInfor();
    }
  }, [loading, user]);

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

  const items: MenuProps['items'] = useMemo(() => {
    return [
      {
        label: <span>Sản phẩm <Icon component={DownIcon} /></span>,
        key: 'products',
        icon: "",
        children: [
          {
            label: 'Thẻ tín dụng',
            key: "card",
            children: [
              {
                label: (
                  <a href="#" target="s" rel="noopener noreferrer">
                    MSB Mastercard mDigi
                  </a>
                ),
                key: 'card:1',
              },
              {
                label: (
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    MSB Mastercard Super Free
                  </a>
                ),
                key: 'card:2',
              },
              {
                label: (
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    MSB Visa Online
                  </a>
                ),
                key: 'card:3',
              },
              {
                label: (
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    MSB Visa Travel
                  </a>
                ),
                key: 'card:4',
              },
              {
                label: (
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    MSB Visa Signature
                  </a>
                ),
                key: 'card:5',
              },
            ],
          },
          {
            label: 'Vay',
            key: "loan",
            children: [
              {
                label: (
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Vay 1
                  </a>
                ),
                key: 'loan:1',
              },
              {
                label: (
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Vay 2
                  </a>
                ),
                key: 'loan:2',
              },
            ],
          },
          {
            label: 'Bảo hiểm',
            key: 'insurance'
          }
        ],
      },
      {
        label: <span>So sánh <Icon component={DownIcon} /></span>,
        key: 'compare',
        icon: "",
      },
      {
        label: 'Câu hỏi thường gặp',
        key: 'questions',
        icon: "",

      },
      {
        label: userLogged ? username : (
          <Button type="link" onClick={() => setOpenDialog(true)} style={{ color: "#000" }}>
            Đăng nhập
          </Button>
        ),
        children: userLogged ? [
          {
            label: (
              <a onClick={() => window.location.replace("my-account")}>
                Quản lý tài khoản
              </a>
            ),
            key: 'account',
          },
          {
            label: (
              <a
                onClick={() => {
                  logout();
                  setUserLogged(false);
                  navigate("/");
                }}
              >
                Đăng xuất
              </a>
            ),
            key: 'logout',
          },
        ] : [],
        key: 'alipay',
      },
    ]
  }, [userLogged]);

  return (
    <StyledComponent>
      <Layout>
        <Header className="header">

          <div className="logo">
            <a href="/">
              <img src={LogoMSB} alt="" style={{ width: "100px", marginLeft: 10 }} />

            </a>
          </div>
          <div className="advise"><Button onClick={showDrawer}>Yêu cầu tư vấn</Button></div>

          <div className="menu">
            <Menu onClick={() => { }} selectedKeys={[]} mode="horizontal" items={items} />

          </div>
        </Header>
        <Content
          style={{
            background: "#f9fafb",
          }}
        >
          <Outlet />
        </Content>
        <Footer style={{ display: "flex", justifyContent: "space-between", paddingLeft: "200px", paddingRight: "200px" }}>
          <div>Bản quyền © 2021 thuộc về Ngân hàng TMCP Hàng Hải Việt Nam MSB</div>
          <div>
            <span style={{ paddingRight: 30 }}>Điều khoản dịch vụ</span>
            <span>Ngân hàng điện tử</span>
          </div>

        </Footer>
        <Modal
          title="Đăng nhập"
          open={openDialog}
          onOk={() => login()}
          onCancel={() => {
            setValues({
              username: "",
              password: ""
            })
            setOpenDialog(false);
          }}
          okText="Đăng nhập"
          cancelText="Đóng"
          okButtonProps={{
            style: {
              paddingLeft: 40,
              paddingRight: 40,
              marginLeft: 12,
              color: "#fff",
              backgroundColor: "#F4600C",
              borderColor: "#F4600C"
            }
          }}
          cancelButtonProps={{
            style: {
              paddingLeft: 40,
              paddingRight: 40,
              marginRight: 12,
              color: "#F4600C",
              borderColor: "#F4600C"
            }
          }}
          width={343}
        >
          <Form form={form} name="nest-messages" layout="vertical" scrollToFirstError initialValues={values}>
            <Form.Item name="username" label="Tên tài khoản" rules={[{ required: true, message: "Nhập tên tài khoản" }]}>
              <Input placeholder="Nhập tên tài khoản" />
            </Form.Item>
            <Form.Item name="password" label="Mật khẩu" rules={[{ required: true, message: "Nhập mật khẩu" }]}>
              <Input placeholder="Nhập mật khẩu" type="password" />
            </Form.Item>
          </Form>
        </Modal>
        <DrawerLayout
          open={open}
          setOpen={setOpen}
        />
      </Layout>
    </StyledComponent>
  );
};

export default AppLayout;
