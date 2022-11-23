import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    Text,
    useColorModeValue,
    Stack,
    Box,
} from "@chakra-ui/react";

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
                <Heading size="md">{props.label}</Heading>
            </CardHeader>
            <CardBody>
                <Text>{props.description}</Text>
            </CardBody>
            <CardFooter>
                <Text>Balance: {props.balance}€</Text>
            </CardFooter>
        </Card>
    );
};
