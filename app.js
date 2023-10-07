'use strict';

let allInfo = [];
document.getElementById('student-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form input values
    const fullName = document.getElementById('fullname').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const phone = document.getElementById('phone').value;
    const grade = document.getElementById('grade').value;
    const major = document.getElementById('major').value;
    const imageUrl = document.getElementById('image').value;

    let newStudent = {fullName, dob, gender, phone, grade, major, imageUrl};

    allInfo.push(newStudent);
    
    // newStudent.newTable();
    // newStudent.renderCard();
    saveToLocalStorage();
});

Student.prototype.newTable = function () {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${this.fullName}</td>
        <td>${this.dob}</td>
        <td>${this.gender}</td>
        <td>${this.phone}</td>
        <td>${this.grade}</td>
        <td>${this.major}</td>
        `; // Include the image URL in the table
    // Append the new row to the table
    const tableBody = document.querySelector('#student-table tbody');
    tableBody.appendChild(newRow);
    document.getElementById('student-form').reset();
}

Student.prototype.renderCard = function () {
    let newCard = document.createElement('div'); // Create a new card element
    newCard.classList.add('card');
    newCard.style.width = '18rem';
    let card = " "
    card += `<img src="${this.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Name: ${this.fullName}</h5>
        <p class="card-text">Phone: ${this.phone}</p>
    </div>`
    newCard.innerHTML += card

    // Append the new card to the student-cards container
    const studentCardsContainer = document.getElementById('student-cards');
    studentCardsContainer.appendChild(newCard);
}

// Student constructor function
function Student(fullName, dob, gender, phone, grade, major, imageUrl) {
    this.fullName = fullName;
    this.dob = dob;
    this.gender = gender;
    this.phone = phone;
    this.grade = grade;
    this.major = major;
    this.imageUrl = imageUrl;
    allInfo.push(this);
}

function saveToLocalStorage() {
    let saveData = JSON.stringify(allInfo);
    console.log(saveData);
    localStorage.setItem("Student", saveData);
}

function getItemFromLocalStorage() {
    let getData = localStorage.getItem("Student");
    let dataParsed = JSON.parse(getData);
    if (dataParsed !== null) {
        for (let i = 0; i < dataParsed.length; i++) {
            let temp = new Student(dataParsed[i].fullName, dataParsed[i].dob, dataParsed[i].gender, dataParsed[i].phone, dataParsed[i].grade, dataParsed[i].major, dataParsed[i].imageUrl);
            temp.newTable();
            temp.renderCard();
        }
    }
}

getItemFromLocalStorage();