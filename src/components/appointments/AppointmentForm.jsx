import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";

const AppointmentForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = !!id;

  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      department: "Cardiology",
      availability: ["Monday", "Wednesday", "Friday"],
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      department: "Dermatology",
      availability: ["Tuesday", "Thursday"],
    },
    {
      id: 3,
      name: "Dr. Emily Wilson",
      department: "Neurology",
      availability: ["Monday", "Tuesday", "Thursday"],
    },
    {
      id: 4,
      name: "Dr. James Brown",
      department: "Orthopedics",
      availability: ["Wednesday", "Friday"],
    },
    {
      id: 5,
      name: "Dr. Lisa Garcia",
      department: "Pediatrics",
      availability: ["Monday", "Wednesday", "Friday"],
    },
  ]);

  const [departments, setDepartments] = useState([
    "Cardiology",
    "Dermatology",
    "Neurology",
    "Orthopedics",
    "Pediatrics",
    "Ophthalmology",
    "General Medicine",
  ]);

  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "555-123-4567",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "555-987-6543",
    },
    {
      id: 3,
      name: "Robert Johnson",
      email: "robert.johnson@example.com",
      phone: "555-456-7890",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@example.com",
      phone: "555-789-0123",
    },
    {
      id: 5,
      name: "Michael Wilson",
      email: "michael.wilson@example.com",
      phone: "555-321-6547",
    },
  ]);

  const [formData, setFormData] = useState({
    patientId: "",
    doctorId: "",
    department: "",
    date: "",
    time: "",
    reason: "",
    notes: "",
    status: "Pending",
  });

  const [availableTimes, setAvailableTimes] = useState([]);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // If in edit mode, fetch appointment data
    if (isEditMode) {
      setIsLoading(true);
      // Simulating API call to get appointment details
      setTimeout(() => {
        const appointmentData = {
          patientId: "2",
          doctorId: "1",
          department: "Cardiology",
          date: "2025-04-30",
          time: "10:00",
          reason: "Follow-up appointment",
          notes: "Patient has been improving",
          status: "Confirmed",
        };
        setFormData(appointmentData);

        // Update available times based on selected doctor and date
        if (appointmentData.doctorId && appointmentData.date) {
          updateAvailableTimes(appointmentData.doctorId, appointmentData.date);
        }

        setIsLoading(false);
      }, 500);
    }
  }, [isEditMode, id]);

  const updateAvailableTimes = (doctorId, date) => {
    // In a real application, this would be an API call to get the doctor's available times for the selected date
    const mockAvailableTimes = [
      "09:00",
      "10:00",
      "11:00",
      "14:00",
      "15:00",
      "16:00",
    ];
    setAvailableTimes(mockAvailableTimes);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear related errors
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }

    // Handle special cases
    if (name === "department") {
      // Filter doctors by selected department
      setFormData({
        ...formData,
        department: value,
        doctorId: "", // Reset doctor when department changes
      });
    }

    if (name === "doctorId" || name === "date") {
      if (formData.doctorId && formData.date) {
        updateAvailableTimes(
          name === "doctorId" ? value : formData.doctorId,
          name === "date" ? value : formData.date
        );
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.patientId) newErrors.patientId = "Patient is required";
    if (!formData.department) newErrors.department = "Department is required";
    if (!formData.doctorId) newErrors.doctorId = "Doctor is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    if (!formData.reason) newErrors.reason = "Reason is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // Simulating API call to create/update appointment
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);

      // Navigate after a brief delay to show success message
      setTimeout(() => {
        navigate("/appointments");
      }, 1000);
    }, 1000);
  };

  if (isLoading && isEditMode) {
    return (
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
            <div className="flex justify-center items-center h-full">
              <div className="text-center">
                <div className="spinner-border text-blue-600" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <p className="mt-2 text-gray-600">
                  Loading appointment details...
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-semibold text-gray-800">
                {isEditMode ? "Edit Appointment" : "New Appointment"}
              </h1>
              <button
                onClick={() => navigate("/appointments")}
                className="px-4 py-2 bg-gray-600 text-white font-medium rounded hover:bg-gray-700 transition"
              >
                Back to Appointments
              </button>
            </div>

            {success && (
              <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                <p>
                  Appointment successfully {isEditMode ? "updated" : "created"}!
                </p>
              </div>
            )}

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <form onSubmit={handleSubmit} className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Patient Selection */}
                  <div>
                    <label
                      htmlFor="patientId"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Patient
                    </label>
                    <select
                      id="patientId"
                      name="patientId"
                      value={formData.patientId}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                        errors.patientId ? "border-red-500" : "border-gray-300"
                      }`}
                    >
                      <option value="">Select a patient</option>
                      {patients.map((patient) => (
                        <option key={patient.id} value={patient.id}>
                          {patient.name} - {patient.phone}
                        </option>
                      ))}
                    </select>
                    {errors.patientId && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.patientId}
                      </p>
                    )}
                  </div>

                  {/* Department Selection */}
                  <div>
                    <label
                      htmlFor="department"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Department
                    </label>
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                        errors.department ? "border-red-500" : "border-gray-300"
                      }`}
                    >
                      <option value="">Select a department</option>
                      {departments.map((dept) => (
                        <option key={dept} value={dept}>
                          {dept}
                        </option>
                      ))}
                    </select>
                    {errors.department && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.department}
                      </p>
                    )}
                  </div>

                  {/* Doctor Selection */}
                  <div>
                    <label
                      htmlFor="doctorId"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Doctor
                    </label>
                    <select
                      id="doctorId"
                      name="doctorId"
                      value={formData.doctorId}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                        errors.doctorId ? "border-red-500" : "border-gray-300"
                      }`}
                      disabled={!formData.department}
                    >
                      <option value="">Select a doctor</option>
                      {doctors
                        .filter(
                          (doctor) =>
                            !formData.department ||
                            doctor.department === formData.department
                        )
                        .map((doctor) => (
                          <option key={doctor.id} value={doctor.id}>
                            {doctor.name} - {doctor.department}
                          </option>
                        ))}
                    </select>
                    {errors.doctorId && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.doctorId}
                      </p>
                    )}
                  </div>

                  {/* Date Selection */}
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split("T")[0]}
                      className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                        errors.date ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.date && (
                      <p className="mt-1 text-sm text-red-600">{errors.date}</p>
                    )}
                  </div>

                  {/* Time Selection */}
                  <div>
                    <label
                      htmlFor="time"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Time
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                        errors.time ? "border-red-500" : "border-gray-300"
                      }`}
                      disabled={!formData.doctorId || !formData.date}
                    >
                      <option value="">Select a time</option>
                      {availableTimes.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                    {errors.time && (
                      <p className="mt-1 text-sm text-red-600">{errors.time}</p>
                    )}
                  </div>

                  {/* Status Selection (for edit mode) */}
                  {isEditMode && (
                    <div>
                      <label
                        htmlFor="status"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Status
                      </label>
                      <select
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </div>
                  )}

                  {/* Reason for Visit */}
                  <div className="md:col-span-2">
                    <label
                      htmlFor="reason"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Reason for Visit
                    </label>
                    <input
                      type="text"
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleInputChange}
                      placeholder="Brief description of the reason for the appointment"
                      className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                        errors.reason ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.reason && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.reason}
                      </p>
                    )}
                  </div>

                  {/* Additional Notes */}
                  <div className="md:col-span-2">
                    <label
                      htmlFor="notes"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Additional Notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows="4"
                      placeholder="Any additional information or special requirements"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>
                </div>

                <div className="mt-8 flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => navigate("/appointments")}
                    className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded hover:bg-gray-300 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span>Processing...</span>
                    ) : (
                      <span>
                        {isEditMode
                          ? "Update Appointment"
                          : "Create Appointment"}
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppointmentForm;
