"use client";

import BookingForm from "@/components/BookingForm";
import PrivateRoute from "@/hooks/PrivateRoute";

export default function BookingPage() {
  return (
    <PrivateRoute>
      <BookingForm />
    </PrivateRoute>
  );
}
