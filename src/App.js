import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useEffect, useState } from "react";
import { useUser } from './lib/wundergraph';
import "bootstrap/dist/css/bootstrap.min.css"

import './App.css';
import Home from "./Home";
import LoginButton from './auth0_components/LoginButton';

const queryClient = new QueryClient();

function App() {
  const { user, isLoading, error } = useUser();
  console.log(user);
  console.log(isLoading);
  console.log(error);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <div>
          {!user && <Home />}
        </div>
        <div>
          {user && <LoginButton />}
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
