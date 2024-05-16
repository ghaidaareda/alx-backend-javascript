export default function createIteratorObject(report) {
    const departments = Object.keys(report);
    let currentDepartmentIndex = 0;
    let currentEmployeeIndex = 0;

    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            const currentDepartment = departments[currentDepartmentIndex];
            const employees = report[currentDepartment];

            // Check if we have iterated through all employees in the current department
            if (currentEmployeeIndex >= employees.length) {
                // Move to the next department
                currentDepartmentIndex++;
                currentEmployeeIndex = 0;

                // Check if we have iterated through all departments
                if (currentDepartmentIndex >= departments.length) {
                    // No more departments to iterate
                    return { done: true };
                }
            }

            // Get the current employee and move to the next one
            const currentEmployee = employees[currentEmployeeIndex];
            currentEmployeeIndex++;

            return { value: currentEmployee, done: false };
        }
    };
}
