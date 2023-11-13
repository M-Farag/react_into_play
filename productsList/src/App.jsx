import  ReactDOM  from "react-dom/client";
import StoreCategory from "./StoreCategory";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const myQueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
      },
    },
  });

const App = () => {
    return (
        <QueryClientProvider client={myQueryClient}>
            <div>
                <StoreCategory />
            </div>
        </QueryClientProvider>
    );
}


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);

