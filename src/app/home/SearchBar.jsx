"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  MapPin,
  PlaneTakeoff,
  CalendarDays,
  Users,
  Search,
} from "lucide-react";

const SearchBar = () => {
  const router = useRouter();
  const departureRef = useRef(null);
  const returnRef = useRef(null);

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState(() => {
    return new Date().toISOString().split("T")[0];
  });

  const [returnDate, setReturnDate] = useState(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split("T")[0];
  });

  const [guests, setGuests] = useState(1);

  const handleSearch = () => {
    const params = new URLSearchParams({
      origin,
      destination,
      departureDate,
      returnDate,
      guests,
    });
    router.push(`/search?${params.toString()}`);
  };

  return (
    <div className="bg-white shadow rounded-3xl p-10 w-full max-w-6xl mx-auto mt-16 border border-rose-200">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Origin */}
        <div className="relative">
          <label className="text-sm text-gray-700 font-semibold mb-1 block">
            From (Origin)
          </label>
          <div className="relative">
            <MapPin
              className="absolute left-3 top-1/2 -translate-y-1/2 text-rose-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Dhaka"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="w-full pl-10 border border-rose-300 rounded-full px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>
        </div>

        {/* Destination */}
        <div className="relative">
          <label className="text-sm text-gray-700 font-semibold mb-1 block">
            To (Destination)
          </label>
          <div className="relative">
            <PlaneTakeoff
              className="absolute left-3 top-1/2 -translate-y-1/2 text-rose-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Singapore"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full pl-10 border border-rose-300 rounded-full px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>
        </div>

        {/* Departure Date */}
        <div className="relative">
          <label className="text-sm text-gray-700 font-semibold mb-1 block">
            Departure Date
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => departureRef.current.showPicker()}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-rose-400"
            >
              <CalendarDays size={18} />
            </button>
            <input
              ref={departureRef}
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="w-full pl-10 border border-rose-300 rounded-full px-3 py-2 text-sm text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>
        </div>

        {/* Return Date */}
        <div className="relative">
          <label className="text-sm text-gray-700 font-semibold mb-1 block">
            Return Date (optional)
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => returnRef.current.showPicker()}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-rose-400"
            >
              <CalendarDays size={18} />
            </button>
            <input
              ref={returnRef}
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-full pl-10 border border-rose-300 rounded-full px-3 py-2 text-sm text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>
        </div>

        {/* Guests */}
        <div className="relative">
          <label className="text-sm text-gray-700 font-semibold mb-1 block">
            Number of Passengers
          </label>
          <div className="relative">
            <Users
              className="absolute left-3 top-1/2 -translate-y-1/2 text-rose-400"
              size={18}
            />
            <input
              type="number"
              min={1}
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full pl-10 border border-rose-300 rounded-full px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Static professional content */}
        <div className="text-sm text-gray-600 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-rose-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z"
            />
          </svg>
          <span>
            <strong className="text-gray-800">Tip:</strong> Book early to get
            the best deals & avoid last-minute price hikes.
          </span>
        </div>

        {/* Search button */}
        <button
          onClick={handleSearch}
          className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-semibold text-sm transition-all "
        >
          Search
          <Search size={18} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
