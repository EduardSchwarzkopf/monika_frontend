import { Flex, Spinner, useColorModeValue } from "@chakra-ui/react";

export default function Loader() {
    return (
        <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            <Spinner />
        </Flex>
    );
}
