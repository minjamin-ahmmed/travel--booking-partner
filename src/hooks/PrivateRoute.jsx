"use client";

import { useRouter } from "next/navigation";

import { AuthContext } from "@/context/AuthContext";
import { useContext, useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      // <--- ADD return here
      <div className="flex justify-center items-center py-20">
        <svg
          className="animate-spin h-12 w-12 text-rose-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
      </div>
    );
  }

  return <>{children}</>;
};

export default PrivateRoute;
