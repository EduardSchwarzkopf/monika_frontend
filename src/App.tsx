import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import AppRouter from "./AppRouter";
import { AuthProvider } from "./context/AuthContext";
import { UserProvider } from "./context/UserContext";

const queryClient = new QueryClient();

export default function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    <UserProvider>
                        <AppRouter />
                    </UserProvider>
                </AuthProvider>
                <ReactQueryDevtools
                    initialIsOpen={false}
                    position="bottom-right"
                />
            </QueryClientProvider>
        </>
    );
}
