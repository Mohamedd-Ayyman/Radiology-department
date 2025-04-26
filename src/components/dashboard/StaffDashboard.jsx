import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";

const StaffDashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalAppointments: 45,
    pendingAppointments: 12,
    completedAppointments: 28,
    todayAppointments: 5,
  });

  const [recentAppointments, setRecentAppointments] = useState([
    {
      id: 1,
      patientName: "John Doe",
      date: "2025-04-26",
      time: "10:00 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      patientName: "Jane Smith",
      date: "2025-04-26",
      time: "11:30 AM",
      status: "Completed",
    },
    {
      id: 3,
      patientName: "Robert Johnson",
      date: "2025-04-27",
      time: "9:15 AM",
      status: "Pending",
    },
    {
      id: 4,
      patientName: "Emily Davis",
      date: "2025-04-27",
      time: "2:00 PM",
      status: "Confirmed",
    },
  ]);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">
            Staff Dashboard
          </h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-5">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500 font-medium">
                    Total Appointments
                  </p>
                  <p className="text-2xl font-semibold text-gray-700">
                    {stats.totalAppointments}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-5">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500 font-medium">Pending</p>
                  <p className="text-2xl font-semibold text-gray-700">
                    {stats.pendingAppointments}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-5">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-green-100 text-green-600">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500 font-medium">Completed</p>
                  <p className="text-2xl font-semibold text-gray-700">
                    {stats.completedAppointments}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-5">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500 font-medium">Today</p>
                  <p className="text-2xl font-semibold text-gray-700">
                    {stats.todayAppointments}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-700">
                Quick Actions
              </h2>
            </div>
            <div className="p-6 flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/appointments/new")}
                className="px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
              >
                New Appointment
              </button>
              <button
                onClick={() => navigate("/appointments")}
                className="px-4 py-2 bg-gray-600 text-white font-medium rounded hover:bg-gray-700 transition"
              >
                View All Appointments
              </button>
              <button
                onClick={() => navigate("/patients")}
                className="px-4 py-2 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition"
              >
                Patient Records
              </button>
            </div>
          </div>

          {/* Recent Appointments */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-700">
                Recent Appointments
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Patient
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentAppointments.map((appointment) => (
                    <tr key={appointment.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {appointment.patientName}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {appointment.date}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {appointment.time}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${
                            appointment.status === "Confirmed"
                              ? "bg-blue-100 text-blue-800"
                              : appointment.status === "Completed"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {appointment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() =>
                            navigate(`/appointments/${appointment.id}`)
                          }
                          className="text-blue-600 hover:text-blue-900 mr-3"
                        >
                          View
                        </button>
                        <button
                          onClick={() =>
                            navigate(`/appointments/${appointment.id}/edit`)
                          }
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StaffDashboard;
