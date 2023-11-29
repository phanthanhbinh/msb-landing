import { Breadcrumb, Card } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Page403 = () => {
  return (
    <div>
      <Breadcrumb
        items={[
          {
            title: (
              <Link to="/">
                <HomeOutlined />
              </Link>
            ),
          },
        ]}
      />

      <Card bordered={false}>
        <h1>403</h1>
        <h4>Access Denied</h4>
      </Card>
    </div>
  );
};

export default Page403;
