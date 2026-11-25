<div align="center">

# 🩻 Radiology Department Management System

**A React app for managing a radiology department's appointments, with separate dashboards for admins, staff and patients.**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

---

## 📖 Overview

A front-office system for a hospital radiology department. Patients book imaging appointments, staff manage the daily schedule, and administrators oversee the whole department. Every user gets a dashboard that matches their role.

## ✨ Features

- 🔐 **Authentication** (login and register) with a global `AuthContext`
- 🧭 **Role-based dashboards**: Admin, Staff and Patient
- 📅 **Appointments**: list view, **calendar view**, and create/edit forms
- 🧑‍⚕️ Doctor selection with department and weekly availability
- 🛡️ **Private routes** that redirect unauthenticated users
- 🧱 Shared layout with a responsive **Navbar** and **Sidebar**

## 🗂️ Structure

```
src/
├── components/
│   ├── auth/            # Login, Register
│   ├── dashboard/       # AdminDashboard, StaffDashboard, PatientDashboard
│   ├── appointments/    # AppointmentList, AppointmentForm, AppointmentCalendar
│   └── layout/          # Navbar, Sidebar
├── context/AuthContext.jsx
├── routes/              # AppRoutes, PrivateRoute
└── utils/helpers.js
```

## 🚀 Getting Started

```bash
git clone https://github.com/Mohamedd-Ayyman/Radiology-department.git
cd Radiology-department
npm install
npm start       # http://localhost:3000
```

## 👤 Author

**Mohamed Ayman**, Frontend / Full-Stack Developer · [GitHub](https://github.com/Mohamedd-Ayyman) · [LinkedIn](https://linkedin.com/in/mohamed-ayman-8787b0269)
