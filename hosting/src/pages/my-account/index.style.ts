import styled from "styled-components";

export const StyledComponent = styled.div`
  background-color: #f9fafb;
  padding: 0 200px;
  .ant-breadcrumb {
    padding: 20px 0;
    .ant-breadcrumb-link {
      color: #f4600c;
    }
  }
  .ant-card {
    .ant-card-body {
      padding: 0px;
      margin-top: 1px;
    }
    .detail {
      padding: 10px 24px;
      .right {
        font-weight: 500;
      }
    }
  }
  .ant-menu {
    border: none;
    .ant-menu-item {
      .ant-menu-item-icon {
        padding-right: 20px;
        svg path {
          fill: #98a2b3 !important;
        }
      }
    }
    .ant-menu-item-active {
      color: #f4600c !important;
      background: #fde7db !important;
      .ant-menu-item-icon {
        svg path {
          fill: #f4600c !important;
        }
      }
    }
  }
`;
