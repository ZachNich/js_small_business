const displayEmployee = (object) => {
    let employeeCard = document.createElement('article')
    employeeCard.className = 'employee'
    employeeCard.innerHTML = `
    <header class="employee__name">
        <h1>${object.name}</h1>
    </header>
    <section class="employee__department">
        Works in the ${object.department.name} department
    </section>
    <section class="employee__computer">
        Currently using the ${object.computer.model}
    </section>
    `
    document.querySelector('.employees').appendChild(employeeCard)
}

export default { displayEmployee }