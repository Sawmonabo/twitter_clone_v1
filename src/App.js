import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useEffect, useState } from "react";
import './App.css';

import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import Login from "./Login";

const queryClient = new QueryClient();

function App() {
  // TODO: change this to isLoggedIn in future
  if (true)
  {
    return (
      <QueryClientProvider client={queryClient}>
        <div className="app">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      </QueryClientProvider>
    );
  }
  else
  {
    return (
      <Login />
    )
  }
}

export default App;
