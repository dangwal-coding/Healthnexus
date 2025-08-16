import React, { useState } from "react";

const PrescriptionForm = ({ onClose }) => {
  const [form, setForm] = useState({
    patientName: "",
    age: "",
    gender: "",
    contact: "",
    doctorName: "",
    date: new Date().toISOString().slice(0, 10),
    symptoms: "",
    diagnosis: "",
    medicines: [{ name: "", dosage: "", frequency: "", duration: "" }],
    notes: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleMedicineChange = (idx, e) => {
    const newMeds = [...form.medicines];
    newMeds[idx][e.target.name] = e.target.value;
    setForm({ ...form, medicines: newMeds });
  };

  const addMedicine = () => {
    setForm({
      ...form,
      medicines: [...form.medicines, { name: "", dosage: "", frequency: "", duration: "" }],
    });
  };

  const removeMedicine = (idx) => {
    const newMeds = form.medicines.filter((_, i) => i !== idx);
    setForm({ ...form, medicines: newMeds });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Prescription submitted! (Integrate with backend as needed)");
    if (onClose) onClose();
  };

  return (
    <div style={{
      maxWidth: 600,
      margin: "180px auto 180px auto",
      background: "#fff",
      borderRadius: 16,
      boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
      padding: '8px 0', // Add vertical padding inside the form
      fontFamily: 'Segoe UI',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    }}>
      {/* Cross Button */}
      <button
        type="button"
        onClick={onClose}
        style={{
          position: 'absolute',
          top: 16,
          right: 16,
          background: 'transparent',
          border: 'none',
          fontSize: 28,
          color: '#888',
          cursor: 'pointer',
          zIndex: 10,
        }}
        aria-label="Close"
      >
        &times;
      </button>
      <h2 style={{ textAlign: "center", color: "#1976d2", margin: 0, padding: 24, paddingBottom: 0 }}>Patient Prescription Form</h2>
      <form onSubmit={handleSubmit} style={{
        flex: 1,
        overflowY: 'auto',
        padding: 32,
        paddingTop: 16,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}>
        <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
          <input
            name="patientName"
            value={form.patientName}
            onChange={handleChange}
            placeholder="Patient Name"
            required
            style={{ flex: 1, padding: 10, borderRadius: 8, border: "1px solid #ccc" }}
          />
          <input
            name="age"
            value={form.age}
            onChange={handleChange}
            placeholder="Age"
            type="number"
            min="0"
            required
            style={{ width: 80, padding: 10, borderRadius: 8, border: "1px solid #ccc" }}
          />
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            required
            style={{ padding: 10, borderRadius: 8, border: "1px solid #ccc" }}
          >
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
          <input
            name="contact"
            value={form.contact}
            onChange={handleChange}
            placeholder="Contact Number"
            required
            style={{ flex: 1, padding: 10, borderRadius: 8, border: "1px solid #ccc" }}
          />
          <input
            name="date"
            value={form.date}
            onChange={handleChange}
            type="date"
            required
            style={{ width: 160, padding: 10, borderRadius: 8, border: "1px solid #ccc" }}
          />
        </div>
        <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
          <input
            name="doctorName"
            value={form.doctorName}
            onChange={handleChange}
            placeholder="Doctor Name"
            required
            style={{ flex: 1, padding: 10, borderRadius: 8, border: "1px solid #ccc" }}
          />
        </div>
        <textarea
          name="symptoms"
          value={form.symptoms}
          onChange={handleChange}
          placeholder="Symptoms"
          required
          rows={2}
          style={{ width: "100%", padding: 10, borderRadius: 8, border: "1px solid #ccc", marginBottom: 16 }}
        />
        <div style={{ marginBottom: 16 }}>
          <label style={{ fontWeight: 600, color: "#1976d2" }}>Medicines</label>
          <div style={{ maxHeight: 220, overflowY: 'auto', margin: '8px 0', paddingRight: 4 }}>
            {form.medicines.map((med, idx) => (
              <div key={idx} style={{ display: "flex", gap: 8, marginBottom: 8, minWidth: 0 }}>
                <input
                  name="name"
                  value={med.name}
                  onChange={(e) => handleMedicineChange(idx, e)}
                  placeholder="Medicine Name"
                  required
                  style={{ flex: 2, padding: 8, borderRadius: 8, border: "1px solid #ccc", minWidth: 0 }}
                />
                <input
                  name="dosage"
                  value={med.dosage}
                  onChange={(e) => handleMedicineChange(idx, e)}
                  placeholder="Dosage (e.g. 500mg)"
                  required
                  style={{ flex: 1, padding: 8, borderRadius: 8, border: "1px solid #ccc", minWidth: 0 }}
                />
                <input
                  name="frequency"
                  value={med.frequency}
                  onChange={(e) => handleMedicineChange(idx, e)}
                  placeholder="Frequency (e.g. 2x/day)"
                  required
                  style={{ flex: 1, padding: 8, borderRadius: 8, border: "1px solid #ccc", minWidth: 0 }}
                />
                <input
                  name="duration"
                  value={med.duration}
                  onChange={(e) => handleMedicineChange(idx, e)}
                  placeholder="Duration (e.g. 5 days)"
                  required
                  style={{ flex: 1, padding: 8, borderRadius: 8, border: "1px solid #ccc", minWidth: 0 }}
                />
                {form.medicines.length > 1 && (
                  <button type="button" onClick={() => removeMedicine(idx)} style={{ background: "#f44336", color: "#fff", border: "none", borderRadius: 8, padding: "0 10px", cursor: "pointer" }}>✕</button>
                )}
              </div>
            ))}
          </div>
          <button type="button" onClick={addMedicine} style={{ background: "#1976d2", color: "#fff", border: "none", borderRadius: 8, padding: "6px 16px", marginTop: 4, cursor: "pointer" }}>+ Add Medicine</button>
        </div>
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          placeholder="Additional Notes"
          rows={2}
          style={{ width: "100%", padding: 10, borderRadius: 8, border: "1px solid #ccc", marginBottom: 24 }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            background: "linear-gradient(90deg, #1976d2 60%, #42a5f5 100%)",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "14px 0",
            fontWeight: 700,
            fontSize: 18,
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(25,118,210,0.10)",
            letterSpacing: 1,
          }}
        >
          Submit Prescription
        </button>
      </form>
    </div>
  );
};

export default PrescriptionForm;
