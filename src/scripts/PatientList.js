import { usePatients } from "./Clinic.js"

export const PatientList = () => {
    const patients = usePatients()
    return patients
        .map(p => `
        <section class="patient" id="patient--${p.id}">
            <h2 class="patient__name">${p.firstName}</h2>
            <div class="patient__properties">
                <p>Age: ${p.age}</p>
                <p>Temperature: ${p.temperature}</p>
                <p>Diagnosed: ${p.diagnosed}</p>
            </div>
            <div class="patient_diagnosis">
                Infected: ${p.infected}
            </div>
        </section>
        `).join("")
}