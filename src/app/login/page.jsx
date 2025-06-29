// app/login/page.jsx
import { Suspense } from "react";
import LoginClient from "./LoginClient";

export default function Login() {
  return (
    <Suspense
      fallback={<div className="text-center py-12">Loading login...</div>}
    >
      <LoginClient />
    </Suspense>
  );
}
