url_ip = 'http://127.0.0.1:8000'
let tableCount = 0;
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

        const data = await response.json()

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

    table.ondragstart = () => false; // Отключить стандартное поведение перетаскивания
    room.appendChild(table);
}

// Обработчики событий для кнопок добавления столиков
document.getElementById("add-table-2").addEventListener("click", () => addTable("2"));
document.getElementById("add-table-4").addEventListener("click", () => addTable("4"));
document.getElementById("add-table-8").addEventListener("click", () => addTable("8"));

// Генерация HTML
generateHtmlBtn.addEventListener("click", () => {
    const generatedHtml = Array.from(room.children).map(table => {
        return `<button class="table-button" style="left: ${table.style.left}; top: ${table.style.top};" table_id="${table.getAttribute('table_id')}" id="${table.id}">
                    ${table.innerHTML}
                </button>`;
    }).join('\n');
    
    output.value = generatedHtml;
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