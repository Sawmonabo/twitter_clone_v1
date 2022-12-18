import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useUser } from './lib/wundergraph';
import React from 'react';
import Home from "./Home";
import {userContext} from './user';
import Auth  from './auth0_components/Auth';
import './App.css';

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
        <Auth />
    </QueryClientProvider>
    );
  }
}

export default App;
