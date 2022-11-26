import { Flex, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";

function Auth({ children }: { children: ReactNode }) {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      {children}
    </Flex>
  );
}

export default Auth;
