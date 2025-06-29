"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PlaneTakeoff, Clock, PlaneLanding, MapPin } from "lucide-react";

const SearchPage = () => {
  const searchParams = useSearchParams();

  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  const origin = searchParams.get("origin");
  const destination = searchParams.get("destination");
  const departureDate = searchParams.get("departureDate");
  const returnDate = searchParams.get("returnDate");
  const guests = searchParams.get("guests");

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        setLoading(true);
        const payload = {
          origin,
          destination,
          departureDate,
          returnDate,
          passenger: {
            adult: parseInt(guests || "1"),
            children: 0,
            infant: 0,
          },
        };

        const response = await fetch("https://api.tbp.travel/flights", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const data = await response.json();
        setFlights(data?.data || []);
      } catch (err) {
        console.error("Error fetching flights:", err);
        setFlights([]);
      } finally {
        setLoading(false);
      }
    };

    if (origin && destination && departureDate) {
      fetchFlights();
    }
  }, [origin, destination, departureDate, returnDate, guests]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 mt-16 font-sans antialiased text-black">
      <h1 className="text-2xl font-semibold mb-10">Search Results</h1>

      {loading ? (
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
      ) : flights.length === 0 ? (
        <p className="text-center text-gray-500 text-lg font-medium">
          No flights found.
        </p>
      ) : (
        <div className="space-y-8">
          {flights.map((flight, index) => {
            const leg = flight.itin_details[0]?.flight_data[0];
            const airlineName = leg?.airline_name || "Unknown Airline";
            const stops = leg?.stop_count || 0;
            const duration = leg?.duration || 0;
            const travelType = flight.travel_type;
            const price = flight?.price_info?.total || "N/A";
            const currency = flight?.salecurrencycode || "";
            const airLogo = flight?.air_logo;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-md hover:shadow-lg transition p-8 flex flex-col sm:flex-row justify-between items-center gap-8 border border-gray-200"
              >
                {/* Left: Airline */}
                <div className="flex items-center gap-6 flex-1 min-w-[180px]">
                  <div className="bg-gray-100 rounded-xl p-3 w-20 h-20 flex items-center justify-center">
                    <img
                      src={airLogo}
                      alt={airlineName}
                      className="object-contain w-full h-full rounded-lg"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-rose-500">
                      {airlineName}
                    </h2>
                    <p className="uppercase text-xs tracking-widest text-gray-500">
                      {travelType} flight
                    </p>
                  </div>
                </div>

                {/* Middle: Details */}
                <div className="flex flex-1 flex-col gap-6 text-sm sm:text-base">
                  <div className="flex justify-between sm:justify-start sm:gap-12 items-center">
                    <div className="flex items-center gap-3">
                      <PlaneTakeoff className="w-5 h-5 text-black" />
                      <div>
                        <p className="uppercase text-xs text-gray-500 font-medium">
                          Origin
                        </p>
                        <p>{origin}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-black" />
                      <div>
                        <p className="uppercase text-xs text-gray-500 font-medium">
                          Duration
                        </p>
                        <p>
                          {Math.floor(duration / 60)}h {duration % 60}m
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between sm:justify-start sm:gap-12 items-center">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-black" />
                      <div>
                        <p className="uppercase text-xs text-gray-500 font-medium">
                          Stops
                        </p>
                        <p>
                          {stops === 0
                            ? "Non-stop"
                            : `${stops} stop${stops > 1 ? "s" : ""}`}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <PlaneLanding className="w-5 h-5 text-black" />
                      <div>
                        <p className="uppercase text-xs text-gray-500 font-medium">
                          Destination
                        </p>
                        <p>{destination}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Price + Button */}
                <div className="flex flex-col items-center sm:items-end gap-6 flex-1 min-w-[160px]">
                  <p className="text-2xl font-medium">
                    {currency} {price}
                  </p>
                  <button
                    className="w-full sm:w-auto px-8 py-3 bg-rose-500 text-white rounded-3xl font-semibold hover:bg-rose-600 transition"
                    aria-label={`Book flight with ${airlineName}`}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
