import { Box, Flex, Stack } from "@chakra-ui/react";
import { Input, Button } from "antd";
import { useFormik } from "formik";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  KeyOutlined,
  UserOutlined,
} from "@ant-design/icons";

export const LoginInputForm = () => {
  const invalid = false;
  const { values, errors, setErrors, setValues, setTouched } = useFormik({
    initialValues: {
      id: "",
      pw: "",
    },
    onSubmit: () => {
      console.log(values.id, values.pw);
    },
  });

  return (
    <Box
      color="gray.500"
      fontWeight="semibold"
      letterSpacing="wide"
      fontSize="xs"
      textTransform="uppercase"
      ml="2"
      width={500}
    >
      <Flex direction="column">
        <Stack alignItems={"center"}>
          <Input
            placeholder="Enter Id"
            size="large"
            status={invalid ? "error" : ""}
            style={{ width: "400px" }}
            prefix={<UserOutlined />}
            onChange={(e) => setValues({ ...values, id: e.target.value })}
          />
          <Input.Password
            placeholder="Enter Password"
            size={"large"}
            status={invalid ? "error" : ""}
            style={{ width: "400px" }}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            prefix={<KeyOutlined />}
            onChange={(e) => {
              setValues({ ...values, pw: e.target.value });
            }}
          />
        </Stack>
        <Stack alignItems={"center"} marginTop={"20px"}>
          <Button
            size={"large"}
            style={{
              width: "50%",
              color: "white",
            }}
            type={"primary"}
            onClick={() => console.log(values)}
          >
            Login
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};
