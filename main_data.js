const data = {
    getEmployees() {
        return fetch('http://localhost:3000/employees?_expand=department&_expand=computer')
            .then(response => response.json());
    },
    getEmployee(id) {
        return fetch(`http://localhost:3000/employees/${id}`)
            .then(response => response.json());
    }
}

export default data