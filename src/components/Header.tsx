import { Divider, Layout, Space, Typography } from "antd";
import { CSSProperties } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
const { Header } = Layout;
const { Text } = Typography;

export const LoginHeader = () => {
  const headerStyle: CSSProperties = {
    color: "white",
    height: 80,
    paddingInline: 50,
    lineHeight: "64px",
    // backgroundColor: "#7dbcea",
    display: "flex",
    alignItems: "center",
  };

  return (
    <Layout>
      <Header style={headerStyle}>
        <Grid gridTemplateColumns={"50px 3fr 30px"}>
          <GridItem colSpan={2}>
            <Text style={{ color: "white", fontSize: "20px" }}>
              wanted-onboarding
            </Text>
          </GridItem>
          <GridItem colStart={4} colEnd={8}>
            <Space split={<Divider type="vertical" />}>
              {/*<Typography.Link>Login</Typography.Link>*/}
              <Typography.Link>Used Technique</Typography.Link>
              <Typography.Link>What I am going to learn</Typography.Link>
            </Space>
          </GridItem>
        </Grid>
      </Header>
    </Layout>
  );
};
