"use client";
import React from "react";
import { UserContextProvider } from "../context/userContext";
import { ApplicationsProvider } from "../context/applicationContext";

interface Props {
  children: React.ReactNode;
}

function UserProvider({ children }: Props) {
  return (
    <UserContextProvider>
      <ApplicationsProvider>{children}</ApplicationsProvider>
    </UserContextProvider>
  );
}

export default UserProvider;
