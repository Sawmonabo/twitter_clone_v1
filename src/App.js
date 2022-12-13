import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import './App.css';
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import Auth from './Auth';

const queryClient = new QueryClient();

function App() {
  // TODO: change this to isLoggedIn in future
  if (false)
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
    // return (
    //   <Auth />
    // )
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
      </Routes>
    </BrowserRouter>
    )
  }
}

export default App;
