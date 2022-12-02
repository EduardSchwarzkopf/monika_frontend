import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import AppRouter from "./AppRouter";

const queryClient = new QueryClient();

export default function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <AppRouter />
                <ReactQueryDevtools
                    initialIsOpen={false}
                    position="bottom-right"
                />
            </QueryClientProvider>
        </>
    );
}
