"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const BookingForm = () => {
  const searchParams = useSearchParams();
  const adults = parseInt(searchParams.get("adults") || "1");
  const children = parseInt(searchParams.get("children") || "0");

  const [passengers, setPassengers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  console.log("Adults:", adults, "Children:", children);

  useEffect(() => {
    const newPassengers = [];

    for (let i = 0; i < adults; i++) {
      newPassengers.push({ type: "adult", name: "", age: "", passport: "" });
    }

    for (let i = 0; i < children; i++) {
      newPassengers.push({ type: "child", name: "", age: "", passport: "" });
    }

    setPassengers(newPassengers);
  }, [adults, children]);

  const handleChange = (index, field, value) => {
    const updated = [...passengers];
    updated[index][field] = value;
    setPassengers(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", passengers);
    setShowModal(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 mt-16 antialiased text-black">
      <h1 className="text-2xl font-semibold mb-10 mt-8">Booking Page</h1>

      <form onSubmit={handleSubmit} className="space-y-10">
        {passengers.map((passenger, idx) => (
          <div
            key={idx}
            className="border border-gray-300 rounded-xl p-6 shadow-sm space-y-4"
          >
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold text-gray-900">
                Passenger Info
              </h2>
              <h2 className="text-sm bg-rose-500 text-white px-2 py-1 rounded-full font-medium">
                {passenger.type === "adult"
                  ? `Adult ${idx + 1}`
                  : `Child ${idx + 1 - adults}`}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-4 py-2 text-sm"
                  value={passenger.name}
                  onChange={(e) => handleChange(idx, "name", e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Age
                </label>
                <input
                  type="number"
                  className="w-full border rounded-lg px-4 py-2 text-sm"
                  value={passenger.age}
                  onChange={(e) => handleChange(idx, "age", e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Passport Number{" "}
                  {passenger.type === "child" && (
                    <span className="text-gray-400">(optional)</span>
                  )}
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-4 py-2 text-sm"
                  value={passenger.passport}
                  onChange={(e) =>
                    handleChange(idx, "passport", e.target.value)
                  }
                  required={passenger.type === "adult"}
                />
              </div>
            </div>
          </div>
        ))}

        <button
          type="submit"
          className="mt-6 px-8 py-3 bg-rose-500 text-white font-semibold rounded-full hover:bg-rose-600 transition"
        >
          Submit Booking
        </button>
      </form>

      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-lg w-full">
            <h2 className="text-xl font-semibold mb-4">Confirm Your Booking</h2>

            <div className="max-h-60 overflow-y-auto mb-6">
              {passengers.map((p, i) => (
                <div key={i} className="mb-2">
                  <strong>
                    {p.type === "adult"
                      ? `Adult ${i + 1}`
                      : `Child ${i + 1 - adults}`}
                  </strong>{" "}
                  - {p.name}, Age: {p.age}, Passport: {p.passport || "N/A"}
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-full bg-gray-300"
              >
                Edit
              </button>
              <button
                onClick={() => {
                 
                  toast.success("Booking confirmed!", {
                    duration: 2000,
                    position: "top-center",
                  });
                  setShowModal(false);
                }}
                className="px-4 py-2 rounded-full bg-rose-500 text-white"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
