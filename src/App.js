import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useUser } from './lib/wundergraph';

import './App.css';
import Home from "./Home";
import LoginButton from './auth0_components/LoginButton';

const queryClient = new QueryClient();

function App() {
  const user  = useUser();
  console.log(user.data);

  if (user.data) {
    return (
      <QueryClientProvider client={queryClient}>
        <Home/>
      </QueryClientProvider>
    );
  }
  else{
    return (
      <QueryClientProvider client={queryClient}>
        <LoginButton />
    </QueryClientProvider>
    );
  }
}

export default App;
