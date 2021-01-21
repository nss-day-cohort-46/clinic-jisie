let primaryKey = 1

export const testPerson = (firstName, age, temp) => {
  return {
    firstName: firstName,
    age: age,
    temperature: temp,
    id: primaryKey++
  }
}
