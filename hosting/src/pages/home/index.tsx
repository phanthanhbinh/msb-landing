import { ReactElement, useCallback, useEffect, useState } from "react";
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
import { request } from "utils/api";

const user = localStorage.getItem("userInfo");
function Home(props: any): ReactElement {
  const [products, setProducts] = useState<any[]>([]);
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  const getProducts = useCallback(async () => {
    const option = {
      method: "get",
      url: `${process.env.REACT_APP_SERVER_URL}/products`,
    };
    try {
      const res = await request(option);
      if (!res.error) {
        const data = res.data.items.sort((a: any, b: any) => a.index - b.index);
        const productsData = data.map((product: any, index: number) => {
          let image = null
          switch (index) {
            case 0: image = Image1
              break;
            case 1: image = Image2
              break;
            case 2: image = Image3
              break;
            case 3: image = Image4
              break;
            case 4: image = Image5
              break;
            case 5: image = Image6
              break;
            default: break;
          }
          return {
            ...product,
            image
          }
        });
        setProducts(productsData);
      }
    } catch {
      console.log("something error");
    }
  }, []);
  let firsLoad = true
  useEffect(() => {
    if (firsLoad) {
      getProducts()
      firsLoad = false
    }
  }, [])

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
              {products.map((product: any) => {
                return (<Col span={8}>
                  <Card className="product-card">
                    <div><img alt="" src={product.image} /></div>
                    <div className="text-7">{product.name}</div>
                    <div className="text-8">{product.description}</div>
                    <div className="text-9">
                      <Button type="link">Khám phá ngay <Icon component={IconRightArrow} /></Button>
                    </div>
                  </Card>
                </Col>)
              })}
            </Row>
          </div>
        </div>
      </div>
    </StyledComponent>
  );
}

export default Home;
