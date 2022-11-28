import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from "react";
import './App.css';

import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";

const queryClient = new QueryClient();

function App() {
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

export default App;
