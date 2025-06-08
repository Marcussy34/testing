import { useState } from "react";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen p-8 pb-20 bg-gray-100">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4 animate-bounce">
          Discover and Book Tickets Effortlessly
        </h1>
        <p className="text-lg text-gray-700">
          Find concerts, sports, theatre, and local events with ease.
        </p>
      </header>

      <div className="flex justify-center mb-12">
        <input
          type="text"
          className="border rounded-l px-4 py-2 w-1/3"
          placeholder="Search by city"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <input type="date" className="border px-4 py-2 w-1/3" />
        <select className="border px-4 py-2 w-1/3">
          <option>Genre</option>
          <option>Concert</option>
          <option>Sports</option>
          <option>Theatre</option>
          <option>Local</option>
        </select>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-r">
          Search
        </button>
      </div>

      <main className="grid gap-8">
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">Trending Events</h2>
          <p className="text-gray-600">
            Catch the latest and most popular events happening now.
          </p>
        </section>

        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">
            Personalized Recommendations
          </h2>
          <p className="text-gray-600">
            Events tailored just for you based on your interests.
          </p>
        </section>

        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">Limited-Time Offers</h2>
          <p className="text-gray-600">
            Don't miss out on exclusive deals and discounts.
          </p>
        </section>
      </main>

      <footer className="text-center mt-12">
        <p className="text-gray-600">
          <span className="inline-block mr-2">🔒</span> Secure checkout and
          verified reviews to ensure a safe experience.
        </p>
        <div className="mt-4">
          <button className="bg-green-600 text-white px-6 py-2 rounded mr-4">
            Browse Events
          </button>
          <button className="bg-gray-600 text-white px-6 py-2 rounded">
            My Account
          </button>
        </div>
      </footer>
    </div>
  );
}
