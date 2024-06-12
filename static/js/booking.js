// функция передачи данных из переменных js в переменные django
document.getElementById('submitBooking').addEventListener('click', function(event) {
    document.getElementById('place').value = selectedTable;
    document.getElementById('student_ids').value = JSON.stringify(participants);
    document.getElementById('times').value = JSON.stringify(selectedIntervals);
});

// кнопка открытия окна со схемой
function showPopup() {
    var popup = document.querySelector(".popup-schema");
    popup.style.display = "block";
}
// кнопка закрытия окна со схемой
function closePopup() {
    var popup = document.querySelector(".popup-schema");
    popup.style.display = "none";
}
// функция выбора интервалов и последующее закрытие всех всплывающих окон
function selectIntervals(){
    var checkboxes = document.querySelectorAll(".popup-interval input[type='checkbox']");
    // selectedIntervals = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
    selectedIntervals = Array.from(checkboxes)
                                     .filter(checkbox => checkbox.checked)
                                     .map(checkbox => parseInt(checkbox.value));
    displayResult();
    closePopup1();
    closePopup();
}
// функция вывода результата столика и интерваов
function displayResult(){
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = `<p>Выбранный стол: ${selectedTable}</p>
    <p>Выбранные интервалы:</p>
    <ul>
        ${selectedIntervals.map(interval => `<li>${interval}</li>`).join('')}
    </ul>`; 
}
// переменная массив участников
var participants = [];
// функция добавления участника
function addParticipant() {
    // получение значения из поля ввода
    var studentIdInput = document.getElementById("student-id");
    var studentId = studentIdInput.value;
    // проверка на пустоту
    if(studentId) {
       //participants.push(studentId);
       participants.push(parseInt(studentId));
       studentIdInput.value = "";
       displayParticipants(); 
    }else{
        alert("Введите студ билет студентика!");
    }
}
// функция вывода участников
function displayParticipants(){
    var participantsElement = document.getElementById("participants-result");
    participantsElement.innerHTML = `<p>Добавленные участники:</p>
    <ul>
        ${participants.map(participant => `<li>${participant}</li>`).join('')}
    </ul>`;
}
// определение переменных под столики
var table_1 = document.getElementById("table_1");
var table_2 = document.getElementById("table_2");
var table_3 = document.getElementById("table_3");
var table_4 = document.getElementById("table_4");
var table_5 = document.getElementById("table_5");
var table_6 = document.getElementById("table_6");
var table_7 = document.getElementById("table_7");
// переменная выбора интервалов
var popupInterval = document.querySelector(".popup-interval");
// переменная выбранного столика
var selectedTable = 0;
// переменная выбранных интервалов
var selectedIntervals = [];
// функции выбора столика
table_1.addEventListener("click", function(){
    selectedTable = 1;
    popupInterval.style.display = "block";
});
table_2.addEventListener("click", function(){
    selectedTable = 2;
    popupInterval.style.display = "block";
});
table_3.addEventListener("click", function(){
    selectedTable = 3;
    popupInterval.style.display = "block";
});
table_4.addEventListener("click", function(){
    selectedTable = 4;
    popupInterval.style.display = "block";
});
table_5.addEventListener("click", function(){
    selectedTable = 5;
    popupInterval.style.display = "block";
});
table_6.addEventListener("click", function(){
    selectedTable = 6;
    popupInterval.style.display = "block";
});
table_7.addEventListener("click", function(){
    selectedTable = 7;
    popupInterval.style.display = "block";
});
//var closeButton = document.querySelector(".popup button");
// функция закрытия всплывающего окна интервалов
function closePopup1() {
    var popup = document.querySelector(".popup-interval");
    popup.style.display = "none";
}
// closeButton.addEventListener("click", function() {
//     popupInterval.style.display = "none";
// });


