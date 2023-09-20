import { LoginInputForm } from "../components/LoginInputForm";
import { Center, Container, Flex } from "@chakra-ui/react";

export const Login = () => {
  return (
    <Container marginTop={"30px"}>
      <Center>
        <Flex
          direction={"column"}
          alignContent={"center"}
          alignItems={"center"}
        >
          <h2>Login</h2>
          <LoginInputForm />
        </Flex>
      </Center>
    </Container>
  );
};
