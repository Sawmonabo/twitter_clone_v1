import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useEffect, useState } from "react";
import { useUser } from './lib/wundergraph';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import './App.css';
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import LoginButton from './auth0_components/LoginButton';

const queryClient = new QueryClient();

function App() {
  const { user } = useUser();
  // TODO: change this to isLoggedIn in future
  if (user)
  {
    console.log(user);
    return (
      <BrowserRouter>
        <Routes>
          <QueryClientProvider client={queryClient}>
            <div className="app">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          </QueryClientProvider>
        </Routes>
      </BrowserRouter>
    );
  }
  else
  {
    // return (
    //   <LoginButton />
    // )
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginButton />} />
        </Routes>
      </BrowserRouter>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!user && <LoginButton />} />
        <Route path="/loggedIn" element={user &&
              <QueryClientProvider client={queryClient}>
                <div className="app">
                  <Sidebar />
                  <Feed />
                  <Widgets />
                </div>
              </QueryClientProvider>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
