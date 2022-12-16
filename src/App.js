import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useUser } from './lib/wundergraph';
import React from 'react';
import './App.css';
import Home from "./Home";
import LoginButton from './auth0_components/LoginButton';
import {userContext} from './user';

const queryClient = new QueryClient();

function App() {
  const user  = useUser();
  console.log(user.data);

  if (user.data) {
    return (
      <QueryClientProvider client={queryClient}>
        <userContext.Provider value={user.data}>
          <Home user={user.data}/>
        </userContext.Provider>
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
