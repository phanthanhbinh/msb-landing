import { ReactElement, useEffect, useState } from "react";
import { StyledComponent } from "./index.style";
import { Button, Card, Carousel, Col, Row } from "antd";
import Icon from "@ant-design/icons";
import Icon1 from "assets/Icons/icon_1";
import Icon2 from "assets/Icons/icon_2";
import Icon3 from "assets/Icons/icon_3";
import IconRightArrow from "assets/Icons/right-arrow";
import Image1 from "assets/image_1.png";
import Image2 from "assets/image_2.png";
import Image3 from "assets/image_3.png";
import Image4 from "assets/image_4.png";
import Image5 from "assets/image_5.png";
import Image6 from "assets/image_6.png";
import Frame1 from "assets/frame_1.png";

const user = localStorage.getItem("userInfo");
function Home(props: any): ReactElement {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <StyledComponent>
      <div>
        <div className="banner">
          <Carousel afterChange={onChange}>
            <div className="item">
              <Row>
                <Col span={10} className="left-content">
                  <div>
                    <div className="text-1">Trải nghiệm sống cực <br />chất cho <br />dân văn phòng</div>
                    <div className="text-2">Lương từ 8 triệu/tháng, nhận ngay tới <br />200 triệu VND</div>
                    <div>
                      <Button className="btn-explore">Khám phá ngay</Button>
                    </div>
                  </div>
                </Col>
                <Col span={14}>
                  <div className="frame_1">
                    <img alt="" src={Frame1} style={{ float: "right" }} />
                  </div>
                </Col>
              </Row>
            </div>
            <div className="item">
              <Row>
                <Col span={10} className="left-content">
                  <div>
                    <div className="text-1">Trải nghiệm sống cực <br />chất cho <br />dân văn phòng</div>
                    <div className="text-2">Lương từ 8 triệu/tháng, nhận ngay tới <br />200 triệu VND</div>
                    <div>
                      <Button className="btn-explore">Khám phá ngay</Button>
                    </div>
                  </div>
                </Col>
                <Col span={14}>
                  <div className="frame_1"></div>
                </Col>
              </Row>
            </div>
            <div className="item">
              <Row>
                <Col span={10} className="left-content">
                  <div>
                    <div className="text-1">Trải nghiệm sống cực <br />chất cho <br />dân văn phòng</div>
                    <div className="text-2">Lương từ 8 triệu/tháng, nhận ngay tới <br />200 triệu VND</div>
                    <div>
                      <Button className="btn-explore">Khám phá ngay</Button>
                    </div>
                  </div>
                </Col>
                <Col span={14}>
                  <div className="frame_1"></div>
                </Col>
              </Row>
            </div>
            <div className="item">
              <Row>
                <Col span={10} className="left-content">
                  <div>
                    <div className="text-1">Trải nghiệm sống cực <br />chất cho <br />dân văn phòng</div>
                    <div className="text-2">Lương từ 8 triệu/tháng, nhận ngay tới <br />200 triệu VND</div>
                    <div>
                      <Button className="btn-explore">Khám phá ngay</Button>
                    </div>
                  </div>
                </Col>
                <Col span={14}>
                  <div className="frame_1"></div>
                </Col>
              </Row>
            </div>
            <div className="item">
              <Row>
                <Col span={10} className="left-content">
                  <div>
                    <div className="text-1">Trải nghiệm sống cực <br />chất cho <br />dân văn phòng</div>
                    <div className="text-2">Lương từ 8 triệu/tháng, nhận ngay tới <br />200 triệu VND</div>
                    <div>
                      <Button className="btn-explore">Khám phá ngay</Button>
                    </div>
                  </div>
                </Col>
                <Col span={14}>
                  <div className="frame_1"></div>
                </Col>
              </Row>
            </div>
          </Carousel>
        </div>
        <div className="reason">
          <Card style={{
            marginTop: "-114px", boxShadow: "0px 20px 24px -4px #10182814"
          }}>
            <Row>
              <Col span={6} style={{ padding: 20 }}>
                <p className="text-5">Vì sao nên <br /> chọn chúng tôi</p>
              </Col>
              <Col span={6} style={{ padding: 20 }}>
                <div className="icon"> <Icon component={Icon1} /></div>
                <div className="text-3">100% online</div>
                <div className="text-4">Đăng ký và nộp hồ sơ trực tuyến</div>
              </Col>
              <Col span={6} style={{ padding: 20 }}>
                <div className="icon"><Icon component={Icon2} /></div>
                <div className="text-3">Phê duyệt siêu tốc</div>
                <div className="text-4">Duyệt hồ sơ siêu tốc trong 5 phút</div>
              </Col>
              <Col span={6} style={{ padding: 20 }}>
                <div className="icon"><Icon component={Icon3} /></div>
                <div className="text-3">Sử dụng linh hoạt</div>
                <div className="text-4">Dễ dàng chuyển đổi linh hoạt giữa các sản phẩm</div>
              </Col>
            </Row>
          </Card>
        </div>
        <div className="content">

          <div className="products">
            <div>
              <p className="text-6">Danh sách sản phẩm</p>
            </div>
            <Row gutter={24}>
              <Col span={8}>
                <Card className="product-card">
                  <div><img alt="" src={Image1} /></div>
                  <div className="text-7">Thẻ tín dụng</div>
                  <div className="text-8">Đa dạng lựa chọn theo phong cách chi tiêu</div>
                  <div className="text-9">
                    <Button type="link">Khám phá ngay <Icon component={IconRightArrow} /></Button>
                  </div>
                </Card>
              </Col>
              <Col span={8}>
                <Card className="product-card">
                  <div><img alt="" src={Image2} /></div>
                  <div className="text-7">Vay linh hoạt</div>
                  <div className="text-8">Giải ngân tức thì, tiêu dùng linh hoạt</div>
                  <div className="text-9">
                    <Button type="link">Khám phá ngay <Icon component={IconRightArrow} /></Button>
                  </div>
                </Card>
              </Col>
              <Col span={8}>
                <Card className="product-card">
                  <div><img alt="" src={Image3} /></div>
                  <div className="text-7">Mua trước trả sau</div>
                  <div className="text-8">Chuyển đổi trả góp, nhẹ ví chi tiêu</div>
                  <div className="text-9">
                    <Button type="link">Khám phá ngay <Icon component={IconRightArrow} /></Button>
                  </div>
                </Card>
              </Col>
              <Col span={8}>
                <Card className="product-card">
                  <div><img alt="" src={Image4} /></div>
                  <div className="text-7">Tiền nhanh</div>
                  <div className="text-8">Nhận khoản vay dự phòng, chủ động và nhanh chóng</div>
                  <div className="text-9">
                    <Button type="link">Khám phá ngay <Icon component={IconRightArrow} /></Button>
                  </div>
                </Card>
              </Col>
              <Col span={8}>
                <Card className="product-card">
                  <div><img alt="" src={Image5} /></div>
                  <div className="text-7">Tài khoản thanh toán M-Pro</div>
                  <div className="text-8">Siêu miễn phí, hoàn tiền tới 3,6 triệu đồng</div>
                  <div className="text-9">
                    <Button type="link">Khám phá ngay <Icon component={IconRightArrow} /> </Button>
                  </div>
                </Card>
              </Col>
              <Col span={8}>
                <Card className="product-card">
                  <div><img alt="" src={Image6} /></div>
                  <div className="text-7">Bảo hiểm</div>
                  <div className="text-8">Mua bảo hiểm trực tuyến dễ dàng chỉ với vài thao tác</div>
                  <div className="text-9">
                    <Button type="link">Khám phá ngay <Icon component={IconRightArrow} /></Button>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </StyledComponent>
  );
}

export default Home;
