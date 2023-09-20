import { Button, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Input } from "antd";
import { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

export const Password = (props: { invalid: boolean; width: string }) => {
  const { invalid, width } = props;
  return (
    <Input.Password
      placeholder="Enter Password"
      size={"large"}
      status={invalid ? "error" : ""}
      style={{ width: width }}
      iconRender={(visible) =>
        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
      }
    />
  );
};
