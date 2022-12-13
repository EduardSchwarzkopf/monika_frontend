import {
    Box,
    Card,
    CardBody,
    Flex,
    Heading,
    Spacer,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import GreenArrowDownTag from "./GreenArrowDownTag";
import RedArrowUpTag from "./RedArrowUpTag";

type TransactionType = {
    id: number;
    label: string;
    description: string;
    balance: number;
    information: {
        reference: string;
        amount: Number;
        date: Date;
        subcategory: {
            id: number;
            label: string;
        };
    };
};
export const TransactionCard = (props: TransactionType) => {
    const isPositive = props.information.amount > 0;
    const bg = useColorModeValue("white", "gray.800");

    return (
        <Card key={props.id} bg={bg}>
            <CardBody>
                <Box>
                    <Flex alignItems="center">
                        <Box mr="8">
                            {isPositive ? (
                                <GreenArrowDownTag />
                            ) : (
                                <RedArrowUpTag />
                            )}
                        </Box>
                        <Box maxW={"50%"}>
                            <Heading fontSize={"lg"} fontFamily={"body"}>
                                {props.information.reference}
                            </Heading>
                            <Text fontWeight={600} color={"gray.400"} mb={4}>
                                {props.information.subcategory.label}
                            </Text>
                        </Box>
                        <Spacer />
                        <Box>
                            <Heading
                                as="h4"
                                size="md"
                                textColor={isPositive ? "green.400" : "red.400"}
                            >
                                <>{props.information.amount}€</>
                            </Heading>
                            <Text fontWeight={600} color={"gray.400"} mb={4}>
                                {new Date(
                                    props.information.date
                                ).toLocaleDateString(undefined, {
                                    month: "short",
                                    day: "numeric",
                                })}
                            </Text>
                        </Box>
                    </Flex>
                </Box>
            </CardBody>
        </Card>
    );
};
