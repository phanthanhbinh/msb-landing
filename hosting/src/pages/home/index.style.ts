import styled from "styled-components";

export const StyledComponent = styled.div`
  .banner {
    width: 100%;
    height: 653px;
    background-image: linear-gradient(#f5f6e8, #f3fbfd);
    .ant-carousel {
      height: 540px;
      .slick-slider {
        height: 100%;
        .slick-dots {
          li {
            button {
              background: #eaecf0;
            }
          }
          .slick-active {
            button {
              background: #f4600c;
            }
          }
        }
      }
      .item {
        height: 540px;
        padding: 0 200px;
        .left-content {
          display: flex;
          align-items: center;
        }
        .text-1 {
          font-family: Inter;
          font-size: 40px;
          font-weight: 700;
          line-height: 48px;
          letter-spacing: -0.005em;
          text-align: left;
        }
        .text-2 {
          font-family: Inter;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: -0.005em;
          text-align: left;
          margin-top: 20px;
        }
        .btn-explore {
          margin-top: 20px;
          padding: 0 36px;
          background-color: #f4600c;
          color: #ffffff;
        }
        .frame_1 {
          height: 540px;
          // background-image: url(src/assets/frame_1.png);
          // background-repeat: no-repeat;
          // background-position: right;
        }
      }
    }
  }
  .reason {
    padding: 0 200px;
    .text-3 {
      font-family: Inter;
      font-size: 18px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: -0.005em;
      text-align: left;
    }
    .text-5 {
      //styleName: Desktop/H4-[Bold];
      font-family: Inter;
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
      letter-spacing: -0.005em;
      text-align: left;
    }
  }
  .content {
    width: 100%;
    background-color: #f9fafb;
    margin-top: -90px;
    .products {
      padding: 170px 200px 50px 200px;
      .text-6 {
        //styleName: Desktop/H4-[Bold];
        font-family: Inter;
        font-size: 24px;
        font-weight: 700;
        line-height: 32px;
        letter-spacing: -0.005em;
        text-align: center;
      }
      .product-card {
        margin-bottom: 40px;
        border: none;
        border-radius: 16px;
        .ant-card-body {
          padding: 0;
          img {
            width: 100%;
            border-top-left-radius: 16px;
            border-top-right-radius: 16px;
          }
        }
        .text-7 {
          padding: 5px 20px;
          //styleName: General/Tittle-[Bold];
          font-family: Inter;
          font-size: 18px;
          font-weight: 700;
          line-height: 24px;
          letter-spacing: -0.005em;
          text-align: left;
        }
        .text-8 {
          padding: 5px 20px;
          height: 48px;
          //styleName: General/Base-[Regular];
          font-family: Inter;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: -0.005em;
          text-align: left;
        }
        .text-9 {
          padding: 10px 10px;
          button {
            color: #f4600c;
          }
        }
      }
    }
  }
`;
