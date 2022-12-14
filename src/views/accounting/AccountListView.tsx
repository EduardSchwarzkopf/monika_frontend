import {
    Stack,
    Spinner,
    Card,
    CardBody,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AccountCard, AccountCardProps } from "../../components/AccountCard";
import { useAccountList } from "../../hooks/useAccounts";

export default function Accounts() {
    const { isLoading, data } = useAccountList();
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        let totalAmount = 0;

        data?.data.forEach((element: AccountCardProps) => {
            totalAmount += element.balance;
        });

        setTotal(totalAmount);
    }, [data]);

    if (isLoading) {
        return <Spinner />;
    }
    return (
        <Stack spacing="4">
            <Card bg={useColorModeValue("white", "gray.800")}>
                <CardBody>
                    <Text>Total: {total}€</Text>
                </CardBody>
            </Card>

            {data?.data.map((item: AccountCardProps) => (
                <AccountCard
                    key={item.id}
                    id={item.id}
                    label={item.label}
                    description={item.description}
                    balance={item.balance}
                    styles={{
                        _hover: { bg: "gray.100" },
                    }}
                    onClick={() => navigate(`/accounts/${item.id}`)}
                />
            ))}
        </Stack>
    );
}
