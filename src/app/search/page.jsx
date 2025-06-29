// app/login/page.jsx
import { Suspense } from "react";
import SearchClient from "./SearchClient"; // adjust path if you renamed it

export default function Search() {
  return (
    <Suspense
      fallback={<div className="text-center py-12">Loading login...</div>}
    >
      <SearchClient />
    </Suspense>
  );
}
