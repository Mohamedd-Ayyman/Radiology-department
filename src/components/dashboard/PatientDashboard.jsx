import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";

const PatientDashboard = () => {
  const navigate = useNavigate();

  const [upcomingAppointments, setUpcomingAppointments] = useState([
    {
      id: 1,
      doctorName: "Dr. Sarah Johnson",
      speciality: "Cardiology",
      date: "2025-04-30",
      time: "10:00 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      doctorName: "Dr. Michael Chen",
      speciality: "Dermatology",
      date: "2025-05-05",
      time: "2:30 PM",
      status: "Pending",
    },
  ]);

  const [medications, setMedications] = useState([
    {
      id: 1,
      name: "Lisinopril",
      dosage: "10mg",
      frequency: "Once daily",
      startDate: "2025-03-15",
      endDate: "2025-06-15",
    },
    {
      id: 2,
      name: "Metformin",
      dosage: "500mg",
      frequency: "Twice daily",
      startDate: "2025-02-10",
      endDate: "2025-05-10",
    },
  ]);

  const [recentTests, setRecentTests] = useState([
    {
      id: 1,
      name: "Blood Pressure",
      date: "2025-04-15",
      result: "120/80 mmHg",
      status: "Normal",
    },
    {
      id: 2,
      name: "Blood Glucose",
      date: "2025-04-15",
      result: "95 mg/dL",
      status: "Normal",
    },
    {
      id: 3,
      name: "Cholesterol Panel",
      date: "2025-04-01",
      result: "TC: 185, HDL: 55, LDL: 110",
      status: "Normal",
    },
  ]);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">
            Patient Dashboard
          </h1>

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
                Book Appointment
              </button>
              <button
                onClick={() => navigate("/medical-records")}
                className="px-4 py-2 bg-gray-600 text-white font-medium rounded hover:bg-gray-700 transition"
              >
                View Medical Records
              </button>
              <button
                onClick={() => navigate("/messages")}
                className="px-4 py-2 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition"
              >
                Message Clinic
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upcoming Appointments */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-700">
                  Upcoming Appointments
                </h2>
              </div>
              {upcomingAppointments.length > 0 ? (
                <div className="p-6">
                  {upcomingAppointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="mb-4 last:mb-0 p-4 border border-gray-200 rounded-lg"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-gray-800">
                            {appointment.doctorName}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {appointment.speciality}
                          </p>
                          <div className="mt-2">
                            <p className="text-sm text-gray-600">
                              <span className="font-medium">Date:</span>{" "}
                              {appointment.date}
                            </p>
                            <p className="text-sm text-gray-600">
                              <span className="font-medium">Time:</span>{" "}
                              {appointment.time}
                            </p>
                          </div>
                        </div>
                        <span
                          className={`px-2 py-1 text-xs font-semibold rounded-full 
                          ${
                            appointment.status === "Confirmed"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {appointment.status}
                        </span>
                      </div>
                      <div className="mt-4 flex space-x-2">
                        <button
                          onClick={() =>
                            navigate(`/appointments/${appointment.id}`)
                          }
                          className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                        >
                          View Details
                        </button>
                        {appointment.status !== "Completed" && (
                          <button
                            onClick={() => {
                              /* Reschedule logic */
                            }}
                            className="px-3 py-1 text-sm bg-gray-600 text-white rounded hover:bg-gray-700 transition"
                          >
                            Reschedule
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                  <div className="mt-4 text-center">
                    <button
                      onClick={() => navigate("/appointments")}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      View All Appointments
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-6 text-center">
                  <p className="text-gray-500">No upcoming appointments.</p>
                  <button
                    onClick={() => navigate("/appointments/new")}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
                  >
                    Book an Appointment
                  </button>
                </div>
              )}
            </div>

            {/* Current Medications */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-700">
                  Current Medications
                </h2>
              </div>
              {medications.length > 0 ? (
                <div className="p-6">
                  {medications.map((medication) => (
                    <div
                      key={medication.id}
                      className="mb-4 last:mb-0 p-4 border border-gray-200 rounded-lg"
                    >
                      <h3 className="font-medium text-gray-800">
                        {medication.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {medication.dosage} - {medication.frequency}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        From {medication.startDate} to {medication.endDate}
                      </p>
                    </div>
                  ))}
                  <div className="mt-4 text-center">
                    <button
                      onClick={() => navigate("/medications")}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      View All Medications
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-6 text-center">
                  <p className="text-gray-500">No current medications.</p>
                </div>
              )}
            </div>

            {/* Recent Test Results */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-700">
                  Recent Test Results
                </h2>
              </div>
              {recentTests.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full table-auto">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Test
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Result
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentTests.map((test) => (
                        <tr key={test.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                              {test.name}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">
                              {test.date}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">
                              {test.result}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                              ${
                                test.status === "Normal"
                                  ? "bg-green-100 text-green-800"
                                  : test.status === "Abnormal"
                                  ? "bg-red-100 text-red-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {test.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="p-6 text-center">
                  <p className="text-gray-500">No recent test results.</p>
                </div>
              )}
            </div>

            {/* Health Metrics */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-700">
                  Health Reminders
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 className="font-medium text-blue-800">
                      Annual Physical
                    </h3>
                    <p className="text-sm text-blue-600 mt-1">
                      Due in 3 months (July 2025)
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h3 className="font-medium text-green-800">
                      Flu Vaccination
                    </h3>
                    <p className="text-sm text-green-600 mt-1">
                      Due in 6 months (October 2025)
                    </p>
                  </div>
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h3 className="font-medium text-yellow-800">Blood Work</h3>
                    <p className="text-sm text-yellow-600 mt-1">
                      Due in 2 weeks (May 10, 2025)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PatientDashboard;
