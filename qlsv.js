const students = [];

function renderStudents() {
    const studentsTable = document.getElementById('student-table').getElementsByTagName('tbody')[0];
    studentsTable.innerHTML = '';

    students.forEach((student, index) => {
        const row = studentsTable.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
        cell1.innerHTML = student.ID;
        cell2.innerHTML = student.name;
        cell3.innerHTML = student.course;
        cell4.innerHTML = student.phone;
        cell5.innerHTML = `<button onclick="editStudent(${index})">Sửa</button> <button onclick="deleteStudent(${index})">Xóa</button>`;
    });
}

function addStudent() {
    const ID = document.getElementById('ID').value;
    const name = document.getElementById('name').value;
    const course = document.getElementById('course').value;
    const phone = document.getElementById('phone').value;

    if (ID && name && course && phone) {
        const student = { ID, name, course, phone };
        students.push(student);
        renderStudents();
        clearForm();
    }
}

function editStudent(index) {
    const student = students[index];
    document.getElementById('name').value = student.name;
    document.getElementById('ID').value = student.ID;
    document.getElementById('course').value = student.course;
    document.getElementById('phone').value = student.phone;
    document.getElementById('edit-index').value = index;
}

function saveEditedStudent() {
    const index = document.getElementById('edit-index').value;
    const name = document.getElementById('name').value;
    const ID = document.getElementById('ID').value;
    const course = document.getElementById('course').value;
    const phone = document.getElementById('phone').value;

    if (ID && name && course && phone) {
        students[index].name = name;
        students[index].ID = ID;
        students[index].course = course;
        students[index].phone = phone;
        renderStudents();
        clearForm();
    }
}

function deleteStudent(index) {
    students.splice(index, 1);
    renderStudents();
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('ID').value = '';
    document.getElementById('course').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('edit-index').value = '';
}

document.getElementById('save-btn').addEventListener('click', function() {
    const editIndex = document.getElementById('edit-index').value;
    if (editIndex === '') {
        addStudent();
    } else {
        saveEditedStudent();
    }
});

renderStudents();
