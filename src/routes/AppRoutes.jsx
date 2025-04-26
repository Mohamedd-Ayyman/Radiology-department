import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import AdminDashboard from "../components/dashboard/AdminDashboard";
import StaffDashboard from "../components/dashboard/StaffDashboard";
import PatientDashboard from "../components/dashboard/PatientDashboard";
import AppointmentList from "../components/appointments/AppointmentList";
import AppointmentForm from "../components/appointments/AppointmentForm";
import AppointmentCalendar from "../components/appointments/AppointmentCalendar";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  const { currentUser } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Private routes */}
      <Route element={<PrivateRoute role="admin" />}>
        <Route path="/admin" element={<AdminDashboard />} />
      </Route>

      <Route element={<PrivateRoute role="staff" />}>
        <Route path="/staff" element={<StaffDashboard />} />
      </Route>

      <Route element={<PrivateRoute role="patient" />}>
        <Route path="/patient" element={<PatientDashboard />} />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route path="/appointments" element={<AppointmentList />} />
        <Route path="/appointments/new" element={<AppointmentForm />} />
        <Route
          path="/appointments/calendar"
          element={<AppointmentCalendar />}
        />
      </Route>

      <Route
        path="/"
        element={
          currentUser ? (
            currentUser.role === "admin" ? (
              <Navigate to="/admin" />
            ) : currentUser.role === "staff" ? (
              <Navigate to="/staff" />
            ) : (
              <Navigate to="/patient" />
            )
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
};

export default AppRoutes;
