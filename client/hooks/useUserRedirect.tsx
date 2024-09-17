"use client";
import { useUserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useRedirect = (redirect: string) => {
  const { user, loading } = useUserContext(); // Get user and loading state
  const router = useRouter();

  useEffect(() => {
    // Only attempt to redirect if not loading
    if (!loading && (!user || !user.email)) {
      router.push(redirect);
    }

    // watch for changes to user, loading, redirect, router
  }, [user, loading, redirect, router]);
};

export default useRedirect;
