import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import Loader from "../../components/Loader";
import { useAuthContext } from "../../context/AuthContext";

const authenticate = (username: string, password: string) => {
    return axios.post(
        "http://localhost:8000/auth/login",
        new URLSearchParams({
            username: username,
            password: password,
        }),
        {
            withCredentials: true,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }
    );
};

function Login() {
    const { updateIsAuthenticated } = useAuthContext();

    const [formData, setFormData] = useState({
        username: "king.arthur@camelot.bt",
        password: "guinevere",
        rememberMe: false,
    });

    const { isLoading, isFetching, refetch } = useQuery(
        "login",
        () => authenticate(formData.username, formData.password),
        {
            enabled: false,
            retry: false,
            onSuccess: () => {
                updateIsAuthenticated(true);
            },
        }
    );

    if (isFetching || isLoading) {
        return <Loader />;
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value, type, checked } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value,
        }));
    }

    return (
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
                <Heading fontSize={"4xl"}>Sign in to your account</Heading>
                <Text fontSize={"lg"} color={"gray.600"}>
                    to enjoy all of our cool{" "}
                    <Link color={"blue.400"}>features</Link> ✌️
                </Text>
            </Stack>
            <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={8}
            >
                <Stack spacing={4}>
                    <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <Input
                            type="email"
                            name="username"
                            onChange={handleChange}
                            value={formData.username}
                        />
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            value={formData.password}
                        />
                    </FormControl>
                    <Stack spacing={10}>
                        <Stack
                            direction={{ base: "column", sm: "row" }}
                            align={"start"}
                            justify={"space-between"}
                        >
                            <Checkbox>Remember me</Checkbox>
                            <Link color={"blue.400"}>Forgot password?</Link>
                        </Stack>
                        <Button
                            bg={"blue.400"}
                            color={"white"}
                            _hover={{
                                bg: "blue.500",
                            }}
                            onClick={refetch}
                        >
                            Sign in
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    );
}

export default Login;
