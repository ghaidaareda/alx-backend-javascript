export default function createIteratorObject(report) {
    let currentDepartmentIndex = 0;
    let currentEmployeeIndex = 0;

    const departments = Object.keys(report);

    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            const currentDepartment = departments[currentDepartmentIndex];
            const employees = report[currentDepartment];

            if (currentEmployeeIndex >= employees.length) {
                // Move to the next department
                currentDepartmentIndex++;
                currentEmployeeIndex = 0;

                if (currentDepartmentIndex >= departments.length) {
                    // No more departments to iterate
                    return { done: true };
                }
            }

            const currentEmployee = employees[currentEmployeeIndex];
            currentEmployeeIndex++;

            return { value: currentEmployee, done: false };
        }
    };
}
