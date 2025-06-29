# 🌍 Travel Booking Portal

A modern and responsive travel booking platform built using **Next.js App Router**, **Tailwind CSS**, and **Firebase Authentication**. This project allows users to register, log in, search for flights, fill in passenger information, and confirm bookings — all with an intuitive UI and clean UX flow.

---

## 📸 Preview

![Login Preview](public/images/login-preview.png)

<!-- Replace with actual screenshot path or comment out if not available -->

---

## 🧭 Features

- 🔐 Firebase Authentication (Email & Password)
- 🛫 Flight booking with dynamic query params (`adults`, `children`)
- 👤 Passenger form (auto-generated based on selected passengers)
- 🧾 Booking confirmation with modal preview
- 📱 Fully responsive and accessible UI
- ⚡ Fast and optimized using Next.js App Router
- 🔔 Toast notifications with `sonner`

---

## 🛠️ Tech Stack

| Technology        | Description                       |
| ----------------- | --------------------------------- |
| **Next.js 14**    | App Router (File-based routing)   |
| **React 18**      | Component-based UI framework      |
| **Tailwind CSS**  | Utility-first styling framework   |
| **Firebase Auth** | User authentication (client-side) |
| **Sonner**        | Toast notifications               |
| **Lucide Icons**  | Icon set for consistent visuals   |

---

## 📁 Project Structure (App Router)
travel-booking-portal/
├── app/
│ ├── layout.jsx
│ ├── page.jsx
│ ├── login/
│ │ └── page.jsx
│ ├── register/
│ │ └── page.jsx
│ ├── booking/
│ │ └── page.jsx
│ └── components/
├── context/
│ └── AuthContext.js
├── firebase/
│ └── config.js
├── public/
│ └── images/
├── styles/
│ └── globals.css
├── .env.local
├── next.config.js
└── README.md

---

## 🧪 Local Development

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/travel-booking-portal.git
cd travel-booking-portal
