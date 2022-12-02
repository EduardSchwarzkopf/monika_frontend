import { Flex, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

function Auth() {
    return (
        <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            <Outlet />
        </Flex>
    );
}

export default Auth;
