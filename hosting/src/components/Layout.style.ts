import styled from "styled-components";

export const StyledComponent = styled.div`
  #root {
    height: -webkit-fill-available;
  }
  .header {
    background: rgb(255, 255, 255) !important;
    // position: relative;
    padding: 0 18px !important;
    .logo {
      display: inline;
    }

    .menu {
      display: inline;
      float: right;
      width: 600px;
      .ant-menu-horizontal {
        border-bottom: none;
        display: flex;
        justify-content: end;
      }
    }
    .advise {
      display: inline;
      float: right;
      button {
        border-color: #f4600c;
        color: #f4600c;
      }
    }
  }
  .ant-layout-has-sider {
    height: -webkit-fill-available !important;
  }

  .profile {
    float: right;
    .ant-popover-title {
      padding-top: 8px;
    }
  }
  .ant-popover .ant-popover-inner {
    padding: 0;
  }

  .ant-menu .ant-menu-item .anticon + span {
    margin-inline-start: 0px;
  }
  .ant-menu-submenu {
    .ant-menu-submenu-title {
      span:nth-child(2) {
        margin-left: 25px;
      }
    }
  }

  .ant-breadcrumb {
    .ant-breadcrumb-link {
      a:hover {
        color: #557a95 !important;
      }
      .anticon-home {
        svg {
          margin-top: -9px;
        }
      }
    }
  }
`;
