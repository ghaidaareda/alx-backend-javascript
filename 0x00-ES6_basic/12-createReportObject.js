export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      let count = 0;
      for (const department in this.allEmployees) {
        if (this.allEmployees[department].length > 0) count += 1;
      }
      return (count);
    },
  };
}
