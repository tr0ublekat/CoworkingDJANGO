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
    resetCheckboxes();
    closePopup1();
    popup.style.display = "none";
    
}
// функция выбора интервалов и последующее закрытие всех всплывающих окон
function selectIntervals(){
    var checkboxes = document.querySelectorAll(".popup-interval input[type='checkbox']");
    // selectedIntervals = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
    selectedIntervals = Array.from(checkboxes)
                                     .filter(checkbox => checkbox.checked)
                                     .map(checkbox => checkbox.getAttribute('data-interval'));
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

var participants = [currentuser];
// функция добавления участника
function addParticipant() {
    // получение значения из поля ввода
    var studentIdInput = document.getElementById("student-id");
    var studentId = studentIdInput.value.trim();
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
        ${participants.map((participant,index) => {
            if(participant == currentuser){
                return `<li>${participant} (Вы)</li>`;
            }else{
                return `<li>${participant}</li>`;
            }
        }).join('')}
    </ul>`;
}
window.onload = function() {
    displayParticipants();
};
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
function selectTable(TableId){
    selectedTable = TableId;
    popupInterval.style.display = "block";

    var allTables = document.querySelectorAll(".square, .squarex2, .squarex3");
    allTables.forEach(table => table.classList.remove("selected"));

    var selectedTable = document.getElementById(`table_${TableId}`);
    selectedTable.classList.add("selected");
}
// функции выбора столика
table_1.addEventListener("click", function(){
    selectTable(1);
});
table_2.addEventListener("click", function(){
    selectTable(2);
});
table_3.addEventListener("click", function(){
    selectTable(3);
});
table_4.addEventListener("click", function(){
    selectTable(4);
});
table_5.addEventListener("click", function(){
    selectTable(5);
});
table_6.addEventListener("click", function(){
    selectTable(6);
});
table_7.addEventListener("click", function(){
    selectTable(7);
});
//var closeButton = document.querySelector(".popup button");
// функция закрытия всплывающего окна интервалов
function closePopup1() {
    var popup = document.querySelector(".popup-interval");
    resetCheckboxes();
    popup.style.display = "none";
    
}
// closeButton.addEventListener("click", function() {
//     popupInterval.style.display = "none";
// });
// функция сброса состояния чекбоксов
function resetCheckboxes() {
    var checkboxes = document.querySelectorAll(".popup-interval input[type='checkbox']");
    checkboxes.forEach(checkbox => checkbox.checked = false);
}


