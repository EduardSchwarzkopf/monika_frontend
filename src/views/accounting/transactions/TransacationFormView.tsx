import {
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useTransaction } from "../../../hooks/useTransactions";
import { useNavigate, useParams } from "react-router-dom";
import { useAccountList } from "../../../hooks/useAccounts";
import { useCategoryList } from "../../../hooks/useCategories";

export default function TransactionFormView() {
    const [showPassword, setShowPassword] = useState(false);
    const { accountId, transactionId } = useParams();

    const navigate = useNavigate();
    if (accountId === undefined || transactionId === undefined) {
        navigate("/");
        return <></>;
    }

    const { data: accountListData } = useAccountList();
    const { data: transactionData } = useTransaction({
        transactionId: transactionId,
    });
    const { data: categoryData } = useCategoryList();

    // AccountList -> Select Field
    // Offset Account -> Select Field
    // CategoryList -> Select Field
    // Reference -> Text
    // Amount -> Number
    // Date -> Datefield

    return (
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={8}
            >
                <Stack spacing={4}>
                    <HStack>
                        <Box>
                            <FormControl id="firstName" isRequired>
                                <FormLabel>First Name</FormLabel>
                                <Input type="text" />
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl id="lastName">
                                <FormLabel>Last Name</FormLabel>
                                <Input type="text" />
                            </FormControl>
                        </Box>
                    </HStack>
                    <FormControl id="email" isRequired>
                        <FormLabel>Email address</FormLabel>
                        <Input type="email" />
                    </FormControl>
                    <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                            <Input type={showPassword ? "text" : "password"} />
                            <InputRightElement h={"full"}>
                                <Button
                                    variant={"ghost"}
                                    onClick={() =>
                                        setShowPassword(
                                            (showPassword) => !showPassword
                                        )
                                    }
                                >
                                    {showPassword ? (
                                        <ViewIcon />
                                    ) : (
                                        <ViewOffIcon />
                                    )}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <Stack spacing={10} pt={2}>
                        <Button
                            loadingText="Submitting"
                            size="lg"
                            bg={"blue.400"}
                            color={"white"}
                            _hover={{
                                bg: "blue.500",
                            }}
                        >
                            Sign up
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    );
}
