import {
    Card,
    CardHeader,
    CardBody,
    Heading,
    Text,
    useColorModeValue,
    Flex,
    Spacer,
    Box,
    HStack,
    Center,
    Tag,
    TagLeftIcon,
} from "@chakra-ui/react";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { useTransactions } from "../hooks/useTransactions";

export type AccountCardProps = {
    id: number;
    label: string;
    description: string;
    balance: number;
    onClick?: () => void | Function;
    styles?: {};
};

export const AccountCard = (props: AccountCardProps) => {
    const [income, setIncome] = useState(0);
    const [expenses, setExpenses] = useState(0);
    const { transactionList } = useTransactions(props.id);

    // calculate income and expenses
    useEffect(() => {
        let income = 0;
        let expenses = 0;

        transactionList.map((transaction) => {
            const amount = transaction.information.amount;

            if (amount > 0) {
                income += amount;
            } else {
                expenses += amount;
            }
        });

        setIncome(income);
        setExpenses(expenses);
    }, [transactionList]);

    return (
        <Card
            key={props.id}
            bg={useColorModeValue("white", "gray.800")}
            onClick={props.onClick}
            {...props.styles}
        >
            <CardHeader>
                <Flex>
                    <Box>
                        <Heading size="md">{props.label}</Heading>
                    </Box>
                </Flex>
                <Text>{props.description}</Text>
            </CardHeader>
            <CardBody textAlign="center">
                <Heading size="md">{props.balance}€</Heading>
                <Center mt={8}>
                    <Box>
                        <HStack spacing={12}>
                            <Tag
                                variant="subtle"
                                bg="red.100"
                                textColor="red.700"
                                size="lg"
                            >
                                <TagLeftIcon boxSize="12px" as={ArrowUpIcon} />
                                {expenses}€
                            </Tag>
                            <Spacer />
                            <Tag
                                bg="green.100"
                                textColor="green.700"
                                variant="subtle"
                                size="lg"
                            >
                                <TagLeftIcon
                                    boxSize="12px"
                                    as={ArrowDownIcon}
                                />
                                {income}€
                            </Tag>
                        </HStack>
                    </Box>
                </Center>
            </CardBody>
        </Card>
    );
};
