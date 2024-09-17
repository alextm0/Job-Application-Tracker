// app/page.tsx
"use client";

import React, { useEffect } from 'react';
import { useApplications } from "../context/applicationContext"; 
import { useUserContext } from "../context/userContext"; 
import useRedirect from '@/hooks/useUserRedirect';
import Dashboard from './Components/Dashboard';

function Page() {
  const { user, loading: userLoading } = useUserContext();
  const { applications, loading: applicationsLoading } = useApplications();

  useRedirect('/login');

  return (
    <div className='px-4 sm:px-8 md:px-16 lg:px-32 bg-gradient-to-br from-gray-100 to-gray-200'>
      <Dashboard initialData={applications} />
    </div>
  );
}

export default Page;
