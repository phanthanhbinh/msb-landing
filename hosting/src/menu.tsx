import {
  UserOutlined,
  TeamOutlined,
  GiftOutlined,
  HomeOutlined,
  BranchesOutlined,
  DeploymentUnitOutlined,
  // ShoppingOutlined,
  SafetyOutlined,
  UnorderedListOutlined,
  ReconciliationOutlined,
  SmileOutlined,
  SettingOutlined,
  HeartOutlined,
  // BellOutlined,
  // OrderedListOutlined,
} from "@ant-design/icons";
<UnorderedListOutlined />;
export const menu = [
  {
    key: "1",
    name: "Sản phẩm",
    icon: "",
    subMenu: [
      {
        key: "11",
        name: "Thẻ tín dụng",
        icon: "",
        path: "/products/card",
        subMenu: [
          {
            key: "111",
            name: "Thẻ tín dụng 1",
            icon: "",
            path: "/products/card/1",
          },
          {
            key: "112",
            name: "Thẻ tín dụng 2",
            icon: "",
            path: "/products/card/2",
          },
        ]
      },
      {
        key: "12",
        name: "Vay",
        icon: "",
        path: "/loan",
        subMenu: [
          {
            key: "121",
            name: "MSB Mastercard mDigi",
            icon: "",
            path: "/loan/master-card-mdigi",
          },
          {
            key: "122",
            name: "MSB Mastercard Super Free",
            icon: "",
            path: "/loan/master-super-free",
          },
          {
            key: "123",
            name: "MSB Visa Online",
            icon: "",
            path: "/loan/master-visa-online",
          },
          {
            key: "124",
            name: "MSB Visa Travel",
            icon: "",
            path: "/loan/master-visa-travel",
          },
          {
            key: "125",
            name: "MSB Visa Signature",
            icon: "",
            path: "/loan/master-visa-signature",
          },
        ]
      },
      {
        key: "13",
        name: "Bảo hiểm",
        icon: "",
        path: "/insurance",
      },

    ],
  },

  {
    key: "2",
    name: "So sánh",
    icon: "",
    subMenu: [
      {
        key: "21",
        name: "So sánh 1",
        icon: "",
        path: "/compare/1",
      },

      {
        key: "22",
        name: "So sánh 2",
        icon: "",
        path: "/compare/2",
      },
    ],
  },
  {
    key: "3",
    name: "Câu hỏi thường gặp",
    icon: "",
    path: "/questions",
    subMenu: [],
  },
  {
    key: "4",
    name: "Đăng nhập",
    icon: <UserOutlined className="menu-icon" />,
    path: "/my-account",
    permissions: [],
    subMenu: [],
  },
];
