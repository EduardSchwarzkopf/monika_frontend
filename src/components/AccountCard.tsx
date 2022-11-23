import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    Text,
    useColorModeValue,
    Stack,
    Button,
    Flex,
    Spacer,
    Box,
    HStack,
    Center,
} from "@chakra-ui/react";
import {
    EmailIcon,
    ArrowForwardIcon,
    ArrowDownIcon,
    ArrowUpIcon,
} from "@chakra-ui/icons";

type AccountCardProps = {
    id: number;
    label: string;
    description: string;
    balance: number;
};

export const AccountCard = (props: AccountCardProps) => {
    return (
        <Card key={props.id} bg={useColorModeValue("white", "gray.800")}>
            <CardHeader>
                <Flex>
                    <Box>
                        <Heading size="md">{props.label}</Heading>
                    </Box>
                    <Spacer />

                    <Stack direction="row" spacing={4}>
                        <Button colorScheme="teal" variant="outline" size="sm">
                            details
                        </Button>
                        <Button colorScheme="teal" variant="solid" size="sm">
                            book
                        </Button>
                    </Stack>
                </Flex>
                <Text>{props.description}</Text>
            </CardHeader>
            <CardBody textAlign="center">
                <Heading size="md">{props.balance}€</Heading>
                <Center mt={8}>
                    <Box>
                        <HStack spacing={12}>
                            <Button
                                leftIcon={<ArrowDownIcon />}
                                variant="outline"
                                bg="red.100"
                                textColor="red.700"
                                border="0"
                            >
                                0€
                            </Button>
                            <Spacer />
                            <Button
                                leftIcon={<ArrowUpIcon />}
                                bg="green.100"
                                textColor="green.700"
                                border="0"
                                variant="outline"
                            >
                                0€
                            </Button>
                        </HStack>
                    </Box>
                </Center>
            </CardBody>
        </Card>
    );
};
