import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";

const AppointmentList = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patientName: "John Doe",
      doctorName: "Dr. Sarah Johnson",
      date: "2025-04-26",
      time: "10:00 AM",
      status: "Confirmed",
      department: "Cardiology",
    },
    {
      id: 2,
      patientName: "Jane Smith",
      doctorName: "Dr. Michael Chen",
      date: "2025-04-26",
      time: "11:30 AM",
      status: "Completed",
      department: "Dermatology",
    },
    {
      id: 3,
      patientName: "Robert Johnson",
      doctorName: "Dr. Emily Wilson",
      date: "2025-04-27",
      time: "9:15 AM",
      status: "Pending",
      department: "Neurology",
    },
    {
      id: 4,
      patientName: "Emily Davis",
      doctorName: "Dr. James Brown",
      date: "2025-04-27",
      time: "2:00 PM",
      status: "Confirmed",
      department: "Orthopedics",
    },
    {
      id: 5,
      patientName: "Michael Wilson",
      doctorName: "Dr. Lisa Garcia",
      date: "2025-04-28",
      time: "3:30 PM",
      status: "Cancelled",
      department: "Pediatrics",
    },
    {
      id: 6,
      patientName: "Sarah Thompson",
      doctorName: "Dr. William Taylor",
      date: "2025-04-29",
      time: "1:45 PM",
      status: "Confirmed",
      department: "Ophthalmology",
    },
    {
      id: 7,
      patientName: "David Martinez",
      doctorName: "Dr. Elizabeth Lee",
      date: "2025-04-30",
      time: "11:00 AM",
      status: "Pending",
      department: "Cardiology",
    },
  ]);

  // Filter appointments based on selected filter
  const filteredAppointments = appointments.filter((appointment) => {
    const matchesFilter =
      filter === "all" ||
      appointment.status.toLowerCase() === filter.toLowerCase();
    const matchesSearch =
      appointment.patientName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      appointment.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.department.toLowerCase().includes(searchTerm.toLowerCase());

    const appointmentDate = new Date(appointment.date);
    const startDate = dateRange.start ? new Date(dateRange.start) : null;
    const endDate = dateRange.end ? new Date(dateRange.end) : null;

    const matchesDateRange =
      (!startDate || appointmentDate >= startDate) &&
      (!endDate || appointmentDate <= endDate);

    return matchesFilter && matchesSearch && matchesDateRange;
  });

  const handleStatusChange = (appointmentId, newStatus) => {
    setAppointments(
      appointments.map((appointment) =>
        appointment.id === appointmentId
          ? { ...appointment, status: newStatus }
          : appointment
      )
    );
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">
              Appointments
            </h1>
            <button
              onClick={() => navigate("/appointments/new")}
              className="px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
            >
              New Appointment
            </button>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow mb-6">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-700">Filters</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Status Filter */}
                <div>
                  <label
                    htmlFor="status-filter"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Status
                  </label>
                  <select
                    id="status-filter"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="all">All</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>

                {/* Date Range Filter */}
                <div>
                  <label
                    htmlFor="date-start"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Date Range
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="date"
                      id="date-start"
                      value={dateRange.start}
                      onChange={(e) =>
                        setDateRange({ ...dateRange, start: e.target.value })
                      }
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="date"
                      id="date-end"
                      value={dateRange.end}
                      onChange={(e) =>
                        setDateRange({ ...dateRange, end: e.target.value })
                      }
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Search */}
                <div>
                  <label
                    htmlFor="search"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Search
                  </label>
                  <input
                    type="text"
                    id="search"
                    placeholder="Search by patient, doctor, or department"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => {
                    setFilter("all");
                    setSearchTerm("");
                    setDateRange({ start: "", end: "" });
                  }}
                  className="px-4 py-2 text-sm text-gray-600 font-medium hover:text-gray-900 transition"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>

          {/* Appointments Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Patient
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Doctor
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Department
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
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredAppointments.length > 0 ? (
                    filteredAppointments.map((appointment) => (
                      <tr key={appointment.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {appointment.patientName}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {appointment.doctorName}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {appointment.department}
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
                                : appointment.status === "Pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
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
                            className="text-indigo-600 hover:text-indigo-900 mr-3"
                          >
                            Edit
                          </button>
                          <div className="relative inline-block text-left">
                            <select
                              onChange={(e) =>
                                handleStatusChange(
                                  appointment.id,
                                  e.target.value
                                )
                              }
                              className="text-sm text-gray-600 border border-gray-300 rounded px-2 py-1"
                              value={appointment.status}
                            >
                              <option value="Confirmed">Confirm</option>
                              <option value="Completed">Complete</option>
                              <option value="Pending">Pending</option>
                              <option value="Cancelled">Cancel</option>
                            </select>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="7"
                        className="px-6 py-4 text-center text-gray-500"
                      >
                        No appointments found matching your criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 bg-white border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-700">
                  Showing{" "}
                  <span className="font-medium">
                    {filteredAppointments.length}
                  </span>{" "}
                  of <span className="font-medium">{appointments.length}</span>{" "}
                  appointments
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-blue-700 bg-blue-50 hover:bg-blue-100">
                    1
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppointmentList;
