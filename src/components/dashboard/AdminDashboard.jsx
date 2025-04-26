import React, { useState, useEffect } from "react";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalPatients: 245,
    totalAppointments: 152,
    pendingAppointments: 32,
    todayAppointments: 18,
  });

  // Mock data for recent patients
  const recentPatients = [
    {
      id: 1,
      name: "John Smith",
      email: "john@example.com",
      date: "2025-04-25",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      date: "2025-04-24",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael@example.com",
      date: "2025-04-23",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@example.com",
      date: "2025-04-22",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
          <div className="container mx-auto px-6 py-8">
            <h3 className="text-2xl font-medium text-gray-700">
              Admin Dashboard
            </h3>

            {/* Stats Cards */}
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Total Patients
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-blue-600">
                      {stats.totalPatients}
                    </dd>
                  </dl>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Total Appointments
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-blue-600">
                      {stats.totalAppointments}
                    </dd>
                  </dl>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Pending Appointments
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-blue-600">
                      {stats.pendingAppointments}
                    </dd>
                  </dl>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Today's Appointments
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-blue-600">
                      {stats.todayAppointments}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>

            {/* Recent Patients */}
            <div className="mt-8">
              <div className="bg-white shadow rounded-lg">
                <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Recent Patients
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Registration Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentPatients.map((patient) => (
                        <tr key={patient.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                              {patient.name}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">
                              {patient.email}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {patient.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-blue-600 hover:text-blue-900 mr-3">
                              View
                            </button>
                            <button className="text-blue-600 hover:text-blue-900">
                              Edit
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-700">
                Quick Actions
              </h3>
              <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <button className="bg-white overflow-hidden shadow rounded-lg p-4 hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Add New Patient
                      </h3>
                      <p className="text-sm text-gray-500">
                        Register a new patient to the system
                      </p>
                    </div>
                  </div>
                </button>

                <button className="bg-white overflow-hidden shadow rounded-lg p-4 hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
                      <svg
                        className="h-6 w-6 text-blue-600"
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
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        New Appointment
                      </h3>
                      <p className="text-sm text-gray-500">
                        Schedule a new appointment
                      </p>
                    </div>
                  </div>
                </button>

                <button className="bg-white overflow-hidden shadow rounded-lg p-4 hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Generate Reports
                      </h3>
                      <p className="text-sm text-gray-500">
                        Create system reports
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
