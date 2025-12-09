📦 StyleDecor – Smart Home & Ceremony Decoration Booking System

A full-stack decoration service booking platform with smart scheduling, service management, real-time project tracking, role-based dashboards, and secure online payments.

🚀 Live Links

Client Live URL: <your-client-live-url>

Server Live URL: <your-server-live-url>

Admin Email: admin@example.com

Admin Password: your-password

🎯 Project Purpose

StyleDecor aims to solve the common issues faced by local home & ceremony decoration services such as long walk-in queues, no online appointment system, manual decorator assignment, and poor tracking.
This system provides:

Online booking

Decorator assignment

Real-time service status

Secure payments

Role-based management dashboards

🛠 Key Features
🌎 Public Features

View all decoration services

Search by service name

Filter by category & budget range

Dynamic service details page

Animated hero section (Framer Motion)

Interactive coverage map (React Leaflet)

🔐 Authentication

Email/password registration

Image upload via ImageBB/Cloudinary

Social login (Google)

JWT-based authentication

Role-based routing (Admin / User / Decorator)

🛒 User Dashboard

View/update/cancel bookings

Pay via Stripe

View transaction history

Track on-site service progress

Edit profile

🧑‍💼 Admin Dashboard

Manage Services (CRUD)

Manage Decorators (CRUD + Approve/Disable)

Manage Bookings

Assign decorators after payment

Revenue monitoring

Analytics charts:

Service demand

Bookings count

Revenue trends

🧑‍🎨 Decorator Dashboard

View assigned projects

Update project status step-by-step

Assigned

Planning Phase

Materials Prepared

On the Way to Venue

Setup in Progress

Completed

Daily schedule

Earnings summary

💳 Payment System

Secure Stripe payment

Store transactions in database

Payment receipt in dashboard

🎛 Additional Functionalities

Global loading state

Global 404 page

Toast notifications

Responsive on all devices

Pagination (Bookings / Decorator list)

Sorting bookings by date & delivery status

Search decorators & services

🧱 Tech Stack
Frontend

React

React Router

TanStack Query

Axios

TailwindCSS

DaisyUI

Framer Motion

React Icons

Stripe

React Leaflet

SweetAlert2

Backend

Node.js

Express.js

MongoDB

JWT

Stripe

CORS

Dotenv

Cloud Services

Firebase Auth

Cloudinary / ImageBB

Vercel / Netlify

MongoDB Atlas

📁 Project Structure
Client
src/
├── components/
├── pages/
├── dashboard/
├── hooks/
├── context/
├── layouts/
├── routes/
├── utils/

Server
root/
├── index.js
├── routes/
├── controllers/
├── middleware/
├── config/
├── utils/
📦 NPM Packages Used
Frontend

react

react-router-dom

@tanstack/react-query

axios

firebase

sweetalert2

framer-motion

react-leaflet

leaflets

stripe/react

react-icons

tailwindcss

daisyui

Backend

express

mongodb

cors

dotenv

stripe

jsonwebtoken

cookie-parser

bcrypt

📌 How to Run Locally
Client
npm install
npm run dev

Server
npm install
nodemon index.js

🧪 Core Functional Flow
Booking Flow

User → Select Service → Choose Date & Location → Submit Booking → Pay → Admin Assigns Decorator → Decorator Updates Status → Completed

Admin Flow

Login → Manage Services/Decorators → Check Payments → Assign Decorators → View Analytics

Decorator Flow

Login → See Assigned Projects → Update Status Step-by-Step → Track Earnings
