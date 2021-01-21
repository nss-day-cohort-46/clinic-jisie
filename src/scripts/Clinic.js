let diagnosedPatients = []

export const usePatients = () => {
  return diagnosedPatients.slice()
}

export const diagnose = (personObject, symptomDaysNumber) => {
  personObject.diagnosed = true
  // debugger
  if (personObject.temperature > 101 && symptomDaysNumber >= 4) {
    personObject.infected = true
  } else {
    personObject.infected =  false
  }
}
