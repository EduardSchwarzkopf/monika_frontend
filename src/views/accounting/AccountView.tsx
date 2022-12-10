import { AccountCard } from "../../components/AccountCard";
import transactionData from "../../data/transactions";
import {
    Card,
    CardBody,
    Heading,
    useColorModeValue,
    Flex,
    Spacer,
    Box,
    Text,
    Stack,
} from "@chakra-ui/react";
import GreenArrowUpTag from "../../components/GreenArrowDownTag";
import RedArrowDownTag from "../../components/RedArrowUpTag";
import { useBackendApi } from "../../hooks/useBackendApi";
import { AccountingService } from "../../service/accounting/AccountingService";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader";

export default function AccountView() {
    const { accountId } = useParams();
    const navigate = useNavigate();

    const bg = useColorModeValue("white", "gray.800");

    const navigateToOverview = () => navigate("/accounts");

    if (accountId === undefined) {
        // TODO: handle wrong or no accountId provided
        return navigateToOverview();
    }

    const { isLoading, data } = useBackendApi(
        "account",
        () => {
            return AccountingService.get(parseInt(accountId));
        },
        undefined,
        navigateToOverview
    );

    if (isLoading) {
        return <Loader />;
    }

    const transactionCardList = transactionData.map((transaction) => {
        const isPositive = transaction.information.amount > 0;
        return (
            <Card key={transaction.id} bg={bg}>
                <CardBody>
                    <Box>
                        <Flex alignItems="center">
                            <Box mr="8">
                                {isPositive ? (
                                    <GreenArrowUpTag />
                                ) : (
                                    <RedArrowDownTag />
                                )}
                            </Box>
                            <Box maxW={"50%"}>
                                <Heading fontSize={"lg"} fontFamily={"body"}>
                                    {transaction.information.reference}
                                </Heading>
                                <Text
                                    fontWeight={600}
                                    color={"gray.400"}
                                    mb={4}
                                >
                                    {transaction.information.subcategory.label}
                                </Text>
                            </Box>
                            <Spacer />
                            <Box>
                                <Heading
                                    as="h4"
                                    size="md"
                                    textColor={
                                        isPositive ? "green.400" : "red.400"
                                    }
                                >
                                    {transaction.information.amount}€
                                </Heading>
                                <Text
                                    fontWeight={600}
                                    color={"gray.400"}
                                    mb={4}
                                >
                                    {new Date(
                                        transaction.information.date
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
    });

    return (
        <>
            <Stack spacing="12">
                <AccountCard
                    id={data?.data.id}
                    label={data?.data.label}
                    description={data?.data.description}
                    balance={data?.data.balance}
                />
                <Box>
                    <Heading>Transactions</Heading>
                    Dateplaceholer
                    <Stack spacing="4">{transactionCardList}</Stack>
                </Box>
            </Stack>
        </>
    );
}
