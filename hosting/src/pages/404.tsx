import { Breadcrumb, Card } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Page404 = () => {
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
        <h1>404</h1>
        <h4>Not Found</h4>
      </Card>
    </div>
  );
};

export default Page404;
