import { Box, Flex, Stack } from "@chakra-ui/react";
import { Input, Button } from "antd";
import { Password } from "./Input/Password";

export const LoginInputForm = () => {
  const invalid = false;
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
          />
          <Password invalid={invalid} width={"400px"} />
        </Stack>
        <Stack alignItems={"center"} marginTop={"20px"}>
          <Button size={"large"} type={"primary"} style={{ width: "50%" }}>
            Login
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};
