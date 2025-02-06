url_ip = 'http://127.0.0.1:8000'
let tableCount = 0
let walls = []
let currentWall = null
let currentTable = null
const room = document.getElementById("room");
const generateHtmlBtn = document.getElementById("generate-html");
const output = document.getElementById("room-code");
var institutions = [];
async function fetchInstitutions() {
    try {
        const response = await fetch(url_ip + '/api/institutions/');
        institutions = await response.json();
        // console.log(institutions);
    } catch (error) {
        console.error(error);
    }
}

async function createRoom(number, capacity, code, decsription, location) {
    try {
        const response = await fetch(url_ip + '/api/rooms/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                number: number,
                capacity: capacity,
                code: code,
                description: decsription,
                institution: location
            })
        });

        if (!response.ok) {
            const errorData = await response.json() // Получаем данные ошибки от сервера
            throw new Error('Ошибка при создании кабинета: ' + (errorData.message || 'Неизвестная ошибка'))
        }

        alert('Кабинет успешно создан!')

    } catch (error) {
        console.error('Booking error:', error)
        alert('Не удалось создать кабинет: ' + error.message)
    }
}

async function createInstitution(name, address, latitude, longitude) {
    try {
        const response = await fetch(url_ip + '/api/institutions/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                address: address,
                latitude: latitude,
                longitude: longitude
            })
        });

        if (!response.ok) {
            const errorData = await response.json() // Получаем данные ошибки от сервера
            throw new Error('Ошибка при создании учреждения: ' + (errorData.message || 'Неизвестная ошибка'))
        }

        const data = await response.json()

        alert('Учреждение успешно создано!')

    } catch (error) {
        console.error('Booking error:', error)
        alert('Не удалось создать учреждение: ' + error.message)
    }
}

function addTable(type) {
    const tableId = ++tableCount; // Генерация уникального ID для столика
    const table = document.createElement("button");
    table.className = "table-button";
    table.style.position = "absolute"; // Убедитесь, что столик можно позиционировать
    table.style.left = "3%"; // Начальная позиция (можно изменить)
    table.style.top = "3%"; // Начальная позиция (можно изменить)
    table.setAttribute("table_id", tableId); // Установка атрибута table_id
    table.id = `table_${tableId}`; // Установка ID для кнопки столика

    document.getElementById("elem-control").classList.remove("hidden");

    // Измените содержимое кнопки в зависимости от типа
    let iconHtml = '';
    if (type === "2") {
        iconHtml = `<i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>`;
    } else if (type === "4") {
        iconHtml = `<i class="bi bi-4-square-fill icon" style="font-size: 400%;"></i>`;
    } else if (type === "8") {
        iconHtml = `<i class="bi bi-8-square-fill my-8-style" style="font-size: 650%;"></i>`;
    }

    table.innerHTML = iconHtml; // Устанавливаем только иконку

    // Добавьте события перетаскивания
    table.addEventListener("mousedown", (e) => {
        let shiftX = e.clientX - table.getBoundingClientRect().left;
        let shiftY = e.clientY - table.getBoundingClientRect().top;

        const onMouseMove = (event) => {
            const roomRect = room.getBoundingClientRect();
            const x = event.clientX - roomRect.left - shiftX;
            const y = event.clientY - roomRect.top - shiftY;

            // Проверка на границы контейнера
            if (x >= 0 && x <= room.offsetWidth - table.offsetWidth && 
                y >= 0 && y <= room.offsetHeight - table.offsetHeight) {
                const leftPercent = (x / room.offsetWidth) * 100;
                const topPercent = (y / room.offsetHeight) * 100;

                table.style.left = `${leftPercent}%`;
                table.style.top = `${topPercent}%`;
            }
        };

        const onMouseUp = () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        };

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    });

    table.addEventListener("click", () => {
        currentTable = table; // Устанавливаем текущий столик
        currentWall = null; // Сбрасываем текущую стенку
        updateInputs(); // Обновляем значения в полях ввода
    });

    table.ondragstart = () => false; // Отключить стандартное поведение перетаскивания
    room.appendChild(table);
}

function addWall(isVertical) {
    console.log('Добавление стенки...');
    const wall = document.createElement("div");
    wall.className = "wall";
    wall.style.backgroundColor = "rgb(235, 234, 234)";
    wall.style.position = "absolute"; // Убедитесь, что стенка можно позиционировать
    if (isVertical) {
        wall.style.width = "2%"; // Фиксированная ширина для вертикальных стен
        wall.style.height = "10%"; // Высота задается по желанию
    } else {
        wall.style.width = "10%"; // Фиксированная ширина для горизонтальных стен
        wall.style.height = "2%"; // Фиксированная высота
    }
    wall.style.left = "50%"; // Начальная позиция (можно изменить)
    wall.style.top = "50%"; // Начальная позиция (можно изменить)

    walls.push(wall);
    currentWall = wall; // Устанавливаем текущую стенку

    document.getElementById("wall-controls").classList.remove("hidden");
    document.getElementById("elem-control").classList.remove("hidden");

    // Добавляем события перемещения стенки
    wall.addEventListener("mousedown", (e) => {
        let shiftX = e.clientX - wall.getBoundingClientRect().left;
        let shiftY = e.clientY - wall.getBoundingClientRect().top;
    
        const onMouseMove = (event) => {
            const roomRect = room.getBoundingClientRect();
    
            // Вычисляем новые координаты стенки в процентах
            const xPercent = ((event.clientX - roomRect.left - shiftX) / roomRect.width) * 100;
            const yPercent = ((event.clientY - roomRect.top - shiftY) / roomRect.height) * 100;
    
            // Ограничиваем перемещение стенки в пределах контейнера
            if (xPercent >= 0 && xPercent <= 100 - (parseFloat(wall.style.width) || 0) &&
                yPercent >= 0 && yPercent <= 100 - (parseFloat(wall.style.height) || 0)) {
                wall.style.left = `${xPercent}%`;
                wall.style.top = `${yPercent}%`;
            }
        };
    
        const onMouseUp = () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        };
    
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    });

    wall.addEventListener("click", () => {
        currentWall = wall; // Устанавливаем текущую стенку
        updateInputs(); // Обновляем значения в полях ввода
    });

    // Вызов функции обновления свойств стенки с передачей текущей стенки
    updateWallProperties(wall);

    // Добавляем стенку в контейнер
    room.appendChild(wall);
}

// Обработчики событий для ширины
const updateWidth = (e) => {
    if (currentWall) {
        const newWidth = e.target.value;
        currentWall.style.width = `${newWidth}%`;
        document.getElementById("wall-width-slider").value = newWidth; // Синхронизация ползунка
    }
};

// Обработчики событий для высоты
const updateHeight = (e) => {
    if (currentWall) {
        const newHeight = e.target.value;
        currentWall.style.height = `${newHeight}%`;
        document.getElementById("wall-height-slider").value = newHeight; // Синхронизация ползунка
    }
};

function updateWallProperties(currentWall) {
    const widthInput = document.getElementById("wall-width");
    const widthSlider = document.getElementById("wall-width-slider");
    const heightInput = document.getElementById("wall-height");
    const heightSlider = document.getElementById("wall-height-slider");

    // Установка значений из текущей стенки
    widthInput.value = parseFloat(currentWall.style.width);
    heightInput.value = parseFloat(currentWall.style.height);
    widthSlider.value = widthInput.value;
    heightSlider.value = heightInput.value;

    // Удаляем старые обработчики событий, чтобы избежать дублирования
    widthInput.removeEventListener("input", updateWidth);
    widthSlider.removeEventListener("input", updateWidth);
    heightInput.removeEventListener("input", updateHeight);
    heightSlider.removeEventListener("input", updateHeight);

    // Добавляем новые обработчики событий
    widthInput.addEventListener("input", updateWidth);
    widthSlider.addEventListener("input", updateWidth);
    heightInput.addEventListener("input", updateHeight);
    heightSlider.addEventListener("input", updateHeight);
}

function updateInputs() {
    if (currentWall) {
        document.getElementById("wall-width").value = parseFloat(currentWall.style.width);
        document.getElementById("wall-height").value = parseFloat(currentWall.style.height);

        document.getElementById("wall-width-slider").value = parseFloat(currentWall.style.width);
        document.getElementById("wall-height-slider").value = parseFloat(currentWall.style.height);
    }
}

// Обработчики событий для кнопок добавления столиков
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("add-table-2").addEventListener("click", () => addTable("2"));
    document.getElementById("add-table-4").addEventListener("click", () => addTable("4"));
    document.getElementById("add-table-8").addEventListener("click", () => addTable("8"));
    document.getElementById("add-wall").addEventListener("click", () => {
        const isVertical = document.querySelector('input[name="wall-orientation"]:checked').value === "vertical";
        addWall(isVertical);
    });
    document.getElementById("delete-element").addEventListener("click", () => {
        if (currentWall) {
            // Удаляем стенку
            room.removeChild(currentWall);
            currentWall = null; // Сбрасываем текущую стенку
            updateInputs(); // Обновляем поля ввода
        } else if (currentTable) {
            // Удаляем столик
            const tableToRemove = document.getElementById(currentTable.id);
            room.removeChild(tableToRemove);
            currentTable = null; // Сбрасываем текущий столик
            updateInputs(); // Обновляем поля ввода
        }
    });
});


// Генерация HTML
generateHtmlBtn.addEventListener("click", () => {
    const generatedHtml = Array.from(room.children)
        .map(element => {
            if (element.classList.contains('table-button')) {
                return `<button class="table-button" style="left: ${element.style.left}; top: ${element.style.top};" table_id="${element.getAttribute('table_id')}" id="${element.id}">
                            ${element.innerHTML}
                        </button>`;
            } else if (element.classList.contains('wall')) {
                return `<div class="wall" style="background-color: rgb(235, 234, 234); width: ${element.style.width}; height: ${element.style.height}; position: absolute; left: ${element.style.left}; top: ${element.style.top}; transform: ${element.style.transform};"></div>`;
            }
            return null; // Возвращаем null для элементов, которые не подходят
        })
        .filter(html => html !== null) // Убираем null значения
        .join('\n'); // Соединяем с переносами строк
    
    console.log(generatedHtml); // Отладка: выводим сгенерированный HTML в консоль
    output.value = generatedHtml; // Установка сгенерированного кода в textarea
});

async function confirmRoomCreation() {
    const number = document.getElementById("room-number").value
    const capacity = document.getElementById("room-capacity").value
    const code = document.getElementById("room-code").value
    const description = document.getElementById("room-description").value
    const location = document.getElementById("room-location").value

    // Проверка на заполненность полей
    if (!number || !capacity || !code || !description || !location) {
        alert("Пожалуйста, заполните все поля.")
        return
    }

    await createRoom(number, capacity, code, description, location)

    document.getElementById("room-number").value = ''
    document.getElementById("room-capacity").value = ''
    document.getElementById("room-code").value = ''
    document.getElementById("room-description").value = ''
    document.getElementById("room-location").value = ''
}

async function confirmInstituteCreation() {
    const name = document.getElementById("location-name").value
    const address = document.getElementById("location-address").value
    const coordinates = document.getElementById("location-coordinates").value

    if (!name|!address|!coordinates) {
        alert("Пожалуйста, заполните все поля.")
        return
    }

    const coordArray = coordinates.split(',').map(coord => coord.trim())

    const latitude = coordArray[0]

    const longitude = coordArray[1]

    await createInstitution(name, address, latitude, longitude)
}