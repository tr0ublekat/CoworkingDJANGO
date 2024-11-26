
    var rooms = [];
    var institutions = [];
    var selectedMarkId;
    var hintContent;
    var selectedTable;
    var selectedIntervals = [];
    const add_participant = document.getElementById('add-participant');
    const participants_result = document.getElementById('participants-result');
    const confirm_booking = document.getElementById('bookingForm');
    const addedStudents = new Set();
    let lastSelectedRoomId = null;
    addedStudents.add(currentuser);

    // Получаем текущую дату
    const today = new Date();
    
    // Форматируем дату в формате YYYY-MM-DD
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Январь - 0
    const yyyy = today.getFullYear();
    
    const formattedDate = `${yyyy}-${mm}-${dd}`;
    
    // Устанавливаем минимальную дату в input
    document.getElementById('data').setAttribute('min', formattedDate);



const roomSchemes = {
    '1_1' : `
    <h3 class = "back_1" >Выберите стол</h3>
    <div class="room-container">
        <div class="scheme">
            <!-- Столы -->
             <button class="table-button" style="left: 0%; top: 0%;" table_id="1" id="table_1">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 15%; top: 0%;" table_id="2" id="table_2">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 30%; top: 0%;" table_id="3" id="table_3">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 0%; top: 25%;" table_id="4" id="table_4">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 15%; top: 25%;" table_id="5" id="table_5">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 30%; top: 25%;" table_id="6" id="table_6">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>

            <!-- Линии -->
            <div style="background-color: rgb(235, 234, 234); width: 46%; height: 2%; position: absolute; left: 0%; top: 60%;"></div>
            <div style="background-color: rgb(235, 234, 234); width: 1%; height: 40%; position: absolute; left: 45%; top: -1%; border-radius: 5px;"></div>
            <div style="background-color: rgb(235, 234, 234); width: 1%; height: 20%; position: absolute; left: 45%; top: 50%; border-radius: 5px;"></div>
            <div style="background-color: rgb(235, 234, 234); width: 1%; height: 21%; position: absolute; left: 45%; top: 80%; border-radius: 5px;"></div>

            <!-- Столы -->
             <button class="table-button" style="left: 0%; top: 70%;" table_id="7" id="table_7">
                <i class="bi bi-4-square-fill icon" style="font-size: 400%;"></i>
            </button>
            <button class="table-button" style="left: 15%; top: 70%;" table_id="8" id="table_8">
                <i class="bi bi-4-square-fill icon" style="font-size: 400%;"></i>
            </button>
            <button class="table-button" style="left: 30%; top: 70%;" table_id="9" id="table_9">
                <i class="bi bi-4-square-fill icon" style="font-size: 400%;"></i>
            </button>
            <button class="table-button" style="left: 73%; top: 0%;" table_id="10" id="table_10">
                <i class="bi bi-8-square-fill my-8-style" style="font-size: 650%;"></i>
            </button>
            <button class="table-button" style="left: 73%; top: 55%;" table_id="11" id="table_11">
                <i class="bi bi-8-square-fill my-8-style" style="font-size: 650%;"></i>
            </button>

            <!-- Дополнения -->
            <i class="bi bi-tv dop" style="font-size: 400%; color: #6c6960; position: absolute; left: 91%; top: 10.3%; transform: rotate(90deg);"></i>
            <i class="bi bi-tv dop" style="font-size: 400%; color: #6c6960; position: absolute; left: 91%; top: 66%; transform: rotate(90deg);"></i>

            <i class="bi bi-square dop" style="font-size: 400%; color: rgb(235, 234, 234); position: absolute; left: 48%; top: 0%;"></i>
            <i class="bi bi-droplet-half dop" style="font-size: 370%; color: #6c6960; position: absolute; left: 48.5%; top: 0%;"></i>
            

            <i class="bi bi-square dop" style="font-size: 400%; color: rgb(235, 234, 234); position: absolute; left: 59%; top: 0%;"></i>
            <i class="bi bi-cup-hot-fill dop" style="font-size: 370%; color: #6c6960; position: absolute; left: 59.5%; top: 0%;"></i>

            <!-- <i class="bi bi-door-open"
                style="font-size: 60px; color: #6c6960; position: absolute; left: 48%; top: 78%;"></i> -->
        </div>
    </div>`,
    '1_2' : `
    <h3 class = "back_1" >Выберите стол</h3>
    <div class="room-container">
        <div class="scheme">
            <!-- Столы -->
             <button class="table-button" style="left: 0%; top: 0%;" table_id="1" id="table_1">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 15%; top: 0%;" table_id="2" id="table_2">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 30%; top: 0%;" table_id="3" id="table_3">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 0%; top: 25%;" table_id="4" id="table_4">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 15%; top: 25%;" table_id="5" id="table_5">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 30%; top: 25%;" table_id="6" id="table_6">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>

            <!-- Линии -->
            <div style="background-color: rgb(235, 234, 234); width: 46%; height: 2%; position: absolute; left: 0%; top: 60%;"></div>
            <div style="background-color: rgb(235, 234, 234); width: 1%; height: 40%; position: absolute; left: 45%; top: -1%; border-radius: 5px;"></div>
            <div style="background-color: rgb(235, 234, 234); width: 1%; height: 20%; position: absolute; left: 45%; top: 50%; border-radius: 5px;"></div>
            <div style="background-color: rgb(235, 234, 234); width: 1%; height: 21%; position: absolute; left: 45%; top: 80%; border-radius: 5px;"></div>

            <!-- Столы -->
             <button class="table-button" style="left: 0%; top: 70%;" table_id="7" id="table_7">
                <i class="bi bi-4-square-fill icon" style="font-size: 400%;"></i>
            </button>
            <button class="table-button" style="left: 15%; top: 70%;" table_id="8" id="table_8">
                <i class="bi bi-4-square-fill icon" style="font-size: 400%;"></i>
            </button>
            <button class="table-button" style="left: 30%; top: 70%;" table_id="9" id="table_9">
                <i class="bi bi-4-square-fill icon" style="font-size: 400%;"></i>
            </button>
            <button class="table-button" style="left: 73%; top: 0%;" table_id="10" id="table_10">
                <i class="bi bi-8-square-fill my-8-style" style="font-size: 650%;"></i>
            </button>
            <button class="table-button" style="left: 73%; top: 55%;" table_id="11" id="table_11">
                <i class="bi bi-8-square-fill my-8-style" style="font-size: 650%;"></i>
            </button>

            <!-- Дополнения -->
            <i class="bi bi-tv dop" style="font-size: 400%; color: #6c6960; position: absolute; left: 91%; top: 10.3%; transform: rotate(90deg);"></i>
            <i class="bi bi-tv dop" style="font-size: 400%; color: #6c6960; position: absolute; left: 91%; top: 66%; transform: rotate(90deg);"></i>
            

            <i class="bi bi-square dop" style="font-size: 400%; color: rgb(235, 234, 234); position: absolute; left: 48%; top: 0%;"></i>
            <i class="bi bi-droplet-half dop" style="font-size: 370%; color: #6c6960; position: absolute; left: 48.5%; top: 0%;"></i>

            <i class="bi bi-square dop" style="font-size: 400%; color: rgb(235, 234, 234); position: absolute; left: 59%; top: 0%;"></i>
            <i class="bi bi-cup-hot-fill dop" style="font-size: 370%; color: #6c6960; position: absolute; left: 59.5%; top: 0%;"></i>

            <!-- <i class="bi bi-door-open"
                style="font-size: 60px; color: #6c6960; position: absolute; left: 48%; top: 78%;"></i> -->
        </div>
    </div>`,
    '1_3': `
    <h3 class = "back_1" >Выберите стол</h3>
    <div class="room-container">
        <div class="scheme">
            <!-- Столы -->
             <button class="table-button" style="left: 0%; top: 0%;" table_id="1" id="table_1">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 15%; top: 0%;" table_id="2" id="table_2">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 30%; top: 0%;" table_id="3" id="table_3">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 0%; top: 25%;" table_id="4" id="table_4">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 15%; top: 25%;" table_id="5" id="table_5">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 30%; top: 25%;" table_id="6" id="table_6">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>

            <!-- Линии -->
            <div style="background-color: rgb(235, 234, 234); width: 46%; height: 2%; position: absolute; left: 0%; top: 60%;"></div>
            <div style="background-color: rgb(235, 234, 234); width: 1%; height: 40%; position: absolute; left: 45%; top: -1%; border-radius: 5px;"></div>
            <div style="background-color: rgb(235, 234, 234); width: 1%; height: 20%; position: absolute; left: 45%; top: 50%; border-radius: 5px;"></div>
            <div style="background-color: rgb(235, 234, 234); width: 1%; height: 21%; position: absolute; left: 45%; top: 80%; border-radius: 5px;"></div>

            <!-- Столы -->
             <button class="table-button" style="left: 0%; top: 70%;" table_id="7" id="table_7">
                <i class="bi bi-4-square-fill icon" style="font-size: 400%;"></i>
            </button>
            <button class="table-button" style="left: 15%; top: 70%;" table_id="8" id="table_8">
                <i class="bi bi-4-square-fill icon" style="font-size: 400%;"></i>
            </button>
            <button class="table-button" style="left: 30%; top: 70%;" table_id="9" id="table_9">
                <i class="bi bi-4-square-fill icon" style="font-size: 400%;"></i>
            </button>
            <button class="table-button" style="left: 73%; top: 0%;" table_id="10" id="table_10">
                <i class="bi bi-8-square-fill my-8-style" style="font-size: 650%;"></i>
            </button>
            <button class="table-button" style="left: 73%; top: 55%;" table_id="11" id="table_11">
                <i class="bi bi-8-square-fill my-8-style" style="font-size: 650%;"></i>
            </button>
            

            <!-- Дополнения -->
            <i class="bi bi-tv dop" style="font-size: 400%; color: #6c6960; position: absolute; left: 91%; top: 10.3%; transform: rotate(90deg);"></i>
            <i class="bi bi-tv dop" style="font-size: 400%; color: #6c6960; position: absolute; left: 91%; top: 66%; transform: rotate(90deg);"></i>

            <i class="bi bi-square dop" style="font-size: 400%; color: rgb(235, 234, 234); position: absolute; left: 48%; top: 0%;"></i>
            <i class="bi bi-droplet-half dop" style="font-size: 370%; color: #6c6960; position: absolute; left: 48.5%; top: 0%;"></i>

            <i class="bi bi-square dop" style="font-size: 400%; color: rgb(235, 234, 234); position: absolute; left: 59%; top: 0%;"></i>
            <i class="bi bi-cup-hot-fill dop" style="font-size: 370%; color: #6c6960; position: absolute; left: 59.5%; top: 0%;"></i>

            <!-- <i class="bi bi-door-open"
                style="font-size: 60px; color: #6c6960; position: absolute; left: 48%; top: 78%;"></i> -->
        </div>
    </div>`,
    '2_4': `
    <h3 class = "back_1" >Выберите стол</h3>
    <div class="room-container">
        <div class="scheme">
            <!-- Столы -->
             <button class="table-button" style="left: 0%; top: 0%;" table_id="1" id="table_1">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 15%; top: 0%;" table_id="2" id="table_2">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 30%; top: 0%;" table_id="3" id="table_3">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 0%; top: 25%;" table_id="4" id="table_4">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 15%; top: 25%;" table_id="5" id="table_5">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 30%; top: 25%;" table_id="6" id="table_6">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>

            <!-- Линии -->
            <div style="background-color: rgb(235, 234, 234); width: 46%; height: 2%; position: absolute; left: 0%; top: 60%;"></div>
            <div style="background-color: rgb(235, 234, 234); width: 1%; height: 40%; position: absolute; left: 45%; top: -1%; border-radius: 5px;"></div>
            <div style="background-color: rgb(235, 234, 234); width: 1%; height: 20%; position: absolute; left: 45%; top: 50%; border-radius: 5px;"></div>
            <div style="background-color: rgb(235, 234, 234); width: 1%; height: 21%; position: absolute; left: 45%; top: 80%; border-radius: 5px;"></div>
            

            <!-- Столы -->
             <button class="table-button" style="left: 0%; top: 70%;" table_id="7" id="table_7">
                <i class="bi bi-4-square-fill icon" style="font-size: 400%;"></i>
            </button>
            <button class="table-button" style="left: 15%; top: 70%;" table_id="8" id="table_8">
                <i class="bi bi-4-square-fill icon" style="font-size: 400%;"></i>
            </button>
            <button class="table-button" style="left: 30%; top: 70%;" table_id="9" id="table_9">
                <i class="bi bi-4-square-fill icon" style="font-size: 400%;"></i>
            </button>
            <button class="table-button" style="left: 73%; top: 0%;" table_id="10" id="table_10">
                <i class="bi bi-8-square-fill my-8-style" style="font-size: 650%;"></i>
            </button>
            <button class="table-button" style="left: 73%; top: 55%;" table_id="11" id="table_11">
                <i class="bi bi-8-square-fill my-8-style" style="font-size: 650%;"></i>
            </button>

            <!-- Дополнения -->
            <i class="bi bi-tv dop" style="font-size: 400%; color: #6c6960; position: absolute; left: 91%; top: 10.3%; transform: rotate(90deg);"></i>
            <i class="bi bi-tv dop" style="font-size: 400%; color: #6c6960; position: absolute; left: 91%; top: 66%; transform: rotate(90deg);"></i>

            <i class="bi bi-square dop" style="font-size: 400%; color: rgb(235, 234, 234); position: absolute; left: 48%; top: 0%;"></i>
            <i class="bi bi-droplet-half dop" style="font-size: 370%; color: #6c6960; position: absolute; left: 48.5%; top: 0%;"></i>

            <i class="bi bi-square dop" style="font-size: 400%; color: rgb(235, 234, 234); position: absolute; left: 59%; top: 0%;"></i>
            <i class="bi bi-cup-hot-fill dop" style="font-size: 370%; color: #6c6960; position: absolute; left: 59.5%; top: 0%;"></i>

            <!-- <i class="bi bi-door-open"
                style="font-size: 60px; color: #6c6960; position: absolute; left: 48%; top: 78%;"></i> -->
        </div>
    </div>`,
    '2_5': `
    <h3 class = "back_1" >Выберите стол</h3>
    <div class="room-container">
        <div class="scheme">
            <!-- Столы -->
             <button class="table-button" style="left: 0%; top: 0%;" table_id="1" id="table_1">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 15%; top: 0%;" table_id="2" id="table_2">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 30%; top: 0%;" table_id="3" id="table_3">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 0%; top: 25%;" table_id="4" id="table_4">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 15%; top: 25%;" table_id="5" id="table_5">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 30%; top: 25%;" table_id="6" id="table_6">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            

            <!-- Линии -->
            <div style="background-color: rgb(235, 234, 234); width: 46%; height: 2%; position: absolute; left: 0%; top: 60%;"></div>
            <div style="background-color: rgb(235, 234, 234); width: 1%; height: 40%; position: absolute; left: 45%; top: -1%; border-radius: 5px;"></div>
            <div style="background-color: rgb(235, 234, 234); width: 1%; height: 20%; position: absolute; left: 45%; top: 50%; border-radius: 5px;"></div>
            <div style="background-color: rgb(235, 234, 234); width: 1%; height: 21%; position: absolute; left: 45%; top: 80%; border-radius: 5px;"></div>

            <!-- Столы -->
             <button class="table-button" style="left: 0%; top: 70%;" table_id="7" id="table_7">
                <i class="bi bi-4-square-fill icon" style="font-size: 400%;"></i>
            </button>
            <button class="table-button" style="left: 15%; top: 70%;" table_id="8" id="table_8">
                <i class="bi bi-4-square-fill icon" style="font-size: 400%;"></i>
            </button>
            <button class="table-button" style="left: 30%; top: 70%;" table_id="9" id="table_9">
                <i class="bi bi-4-square-fill icon" style="font-size: 400%;"></i>
            </button>
            <button class="table-button" style="left: 73%; top: 0%;" table_id="10" id="table_10">
                <i class="bi bi-8-square-fill my-8-style" style="font-size: 650%;"></i>
            </button>
            <button class="table-button" style="left: 73%; top: 55%;" table_id="11" id="table_11">
                <i class="bi bi-8-square-fill my-8-style" style="font-size: 650%;"></i>
            </button>

            <!-- Дополнения -->
            <i class="bi bi-tv dop" style="font-size: 400%; color: #6c6960; position: absolute; left: 91%; top: 10.3%; transform: rotate(90deg);"></i>
            <i class="bi bi-tv dop" style="font-size: 400%; color: #6c6960; position: absolute; left: 91%; top: 66%; transform: rotate(90deg);"></i>

            <i class="bi bi-square dop" style="font-size: 400%; color: rgb(235, 234, 234); position: absolute; left: 48%; top: 0%;"></i>
            <i class="bi bi-droplet-half dop" style="font-size: 370%; color: #6c6960; position: absolute; left: 48.5%; top: 0%;"></i>

            <i class="bi bi-square dop" style="font-size: 400%; color: rgb(235, 234, 234); position: absolute; left: 59%; top: 0%;"></i>
            <i class="bi bi-cup-hot-fill dop" style="font-size: 370%; color: #6c6960; position: absolute; left: 59.5%; top: 0%;"></i>
            

            <!-- <i class="bi bi-door-open"
                style="font-size: 60px; color: #6c6960; position: absolute; left: 48%; top: 78%;"></i> -->
        </div>
    </div>`,
    '2_8': `
    <h3 class = "back_1" >Выберите стол</h3>
    <div class="room-container">
        <div class="scheme">
            <!-- Столы -->
             <button class="table-button" style="left: 0%; top: 0%;" table_id="1" id="table_1">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 15%; top: 0%;" table_id="2" id="table_2">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 30%; top: 0%;" table_id="3" id="table_3">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 0%; top: 25%;" table_id="4" id="table_4">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 15%; top: 25%;" table_id="5" id="table_5">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 30%; top: 25%;" table_id="6" id="table_6">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            

            <!-- Линии -->
            <div style="background-color: rgb(235, 234, 234); width: 46%; height: 2%; position: absolute; left: 0%; top: 60%;"></div>
            <div style="background-color: rgb(235, 234, 234); width: 1%; height: 40%; position: absolute; left: 45%; top: -1%; border-radius: 5px;"></div>
            <div style="background-color: rgb(235, 234, 234); width: 1%; height: 20%; position: absolute; left: 45%; top: 50%; border-radius: 5px;"></div>
            <div style="background-color: rgb(235, 234, 234); width: 1%; height: 21%; position: absolute; left: 45%; top: 80%; border-radius: 5px;"></div>

            <!-- Столы -->
             <button class="table-button" style="left: 0%; top: 70%;" table_id="7" id="table_7">
                <i class="bi bi-4-square-fill icon" style="font-size: 400%;"></i>
            </button>
            <button class="table-button" style="left: 15%; top: 70%;" table_id="8" id="table_8">
                <i class="bi bi-4-square-fill icon" style="font-size: 400%;"></i>
            </button>
            <button class="table-button" style="left: 30%; top: 70%;" table_id="9" id="table_9">
                <i class="bi bi-4-square-fill icon" style="font-size: 400%;"></i>
            </button>
            <button class="table-button" style="left: 73%; top: 0%;" table_id="10" id="table_10">
                <i class="bi bi-8-square-fill my-8-style" style="font-size: 650%;"></i>
            </button>
            <button class="table-button" style="left: 73%; top: 55%;" table_id="11" id="table_11">
                <i class="bi bi-8-square-fill my-8-style" style="font-size: 650%;"></i>
            </button>

            <!-- Дополнения -->
            <i class="bi bi-tv dop" style="font-size: 400%; color: #6c6960; position: absolute; left: 91%; top: 10.3%; transform: rotate(90deg);"></i>
            <i class="bi bi-tv dop" style="font-size: 400%; color: #6c6960; position: absolute; left: 91%; top: 66%; transform: rotate(90deg);"></i>

            <i class="bi bi-square dop" style="font-size: 400%; color: rgb(235, 234, 234); position: absolute; left: 48%; top: 0%;"></i>
            <i class="bi bi-droplet-half dop" style="font-size: 370%; color: #6c6960; position: absolute; left: 48.5%; top: 0%;"></i>

            <i class="bi bi-square dop" style="font-size: 400%; color: rgb(235, 234, 234); position: absolute; left: 59%; top: 0%;"></i>
            <i class="bi bi-cup-hot-fill dop" style="font-size: 370%; color: #6c6960; position: absolute; left: 59.5%; top: 0%;"></i>
            

            <!-- <i class="bi bi-door-open"
                style="font-size: 60px; color: #6c6960; position: absolute; left: 48%; top: 78%;"></i> -->
        </div>
    </div>`,
    "3_6": `
    <h3 class = "back_1" >Выберите стол</h3>
    <div class="room-container">
        <div class="scheme">
            <!-- Столы -->
             <button class="table-button" style="left: 0%; top: 0%;" table_id="1" id="table_1">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 15%; top: 0%;" table_id="2" id="table_2">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 30%; top: 0%;" table_id="3" id="table_3">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 0%; top: 25%;" table_id="4" id="table_4">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 15%; top: 25%;" table_id="5" id="table_5">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 30%; top: 25%;" table_id="6" id="table_6">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>

            <!-- Линии -->
            <div style="background-color: rgb(235, 234, 234); width: 46%; height: 2%; position: absolute; left: 0%; top: 60%;"></div>
            <div style="background-color: rgb(235, 234, 234); width: 1%; height: 40%; position: absolute; left: 45%; top: -1%; border-radius: 5px;"></div>
            <div style="background-color: rgb(235, 234, 234); width: 1%; height: 20%; position: absolute; left: 45%; top: 50%; border-radius: 5px;"></div>
            <div style="background-color: rgb(235, 234, 234); width: 1%; height: 21%; position: absolute; left: 45%; top: 80%; border-radius: 5px;"></div>

            <!-- Столы -->
             <button class="table-button" style="left: 0%; top: 70%;" table_id="7" id="table_7">
                <i class="bi bi-4-square-fill icon" style="font-size: 400%;"></i>
            </button>
            <button class="table-button" style="left: 15%; top: 70%;" table_id="8" id="table_8">
                <i class="bi bi-4-square-fill icon" style="font-size: 400%;"></i>
            </button>
            <button class="table-button" style="left: 30%; top: 70%;" table_id="9" id="table_9">
                <i class="bi bi-4-square-fill icon" style="font-size: 400%;"></i>
            </button>
            <button class="table-button" style="left: 73%; top: 0%;" table_id="10" id="table_10">
                <i class="bi bi-8-square-fill my-8-style" style="font-size: 650%;"></i>
            </button>
            <button class="table-button" style="left: 73%; top: 55%;" table_id="11" id="table_11">
                <i class="bi bi-8-square-fill my-8-style" style="font-size: 650%;"></i>
            </button>

            <!-- Дополнения -->
            <i class="bi bi-tv dop" style="font-size: 400%; color: #6c6960; position: absolute; left: 91%; top: 10.3%; transform: rotate(90deg);"></i>
            <i class="bi bi-tv dop" style="font-size: 400%; color: #6c6960; position: absolute; left: 91%; top: 66%; transform: rotate(90deg);"></i>

            <i class="bi bi-square dop" style="font-size: 400%; color: rgb(235, 234, 234); position: absolute; left: 48%; top: 0%;"></i>
            <i class="bi bi-droplet-half dop" style="font-size: 370%; color: #6c6960; position: absolute; left: 48.5%; top: 0%;"></i>
            

            <i class="bi bi-square dop" style="font-size: 400%; color: rgb(235, 234, 234); position: absolute; left: 59%; top: 0%;"></i>
            <i class="bi bi-cup-hot-fill dop" style="font-size: 370%; color: #6c6960; position: absolute; left: 59.5%; top: 0%;"></i>

            <!-- <i class="bi bi-door-open"
                style="font-size: 60px; color: #6c6960; position: absolute; left: 48%; top: 78%;"></i> -->
        </div>
    </div>`,
    '3_7': `
    <h3 class = "back_1" >Выберите стол</h3>
    <div class="room-container">
        <div class="scheme">
            <!-- Столы -->
             <button class="table-button" style="left: 0%; top: 0%;" table_id="1" id="table_1">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 15%; top: 0%;" table_id="2" id="table_2">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 30%; top: 0%;" table_id="3" id="table_3">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 0%; top: 25%;" table_id="4" id="table_4">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 15%; top: 25%;" table_id="5" id="table_5">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>
            <button class="table-button" style="left: 30%; top: 25%;" table_id="6" id="table_6">
                <i class="bi bi-2-circle-fill icon" style="font-size: 365%;"></i>
            </button>

            <!-- Линии -->
            <div style="background-color: rgb(235, 234, 234); width: 46%; height: 2%; position: absolute; left: 0%; top: 60%;"></div>
            <div style="background-color: rgb(235, 234, 234); width: 1%; height: 40%; position: absolute; left: 45%; top: -1%; border-radius: 5px;"></div>
            <div style="background-color: rgb(235, 234, 234); width: 1%; height: 20%; position: absolute; left: 45%; top: 50%; border-radius: 5px;"></div>
            <div style="background-color: rgb(235, 234, 234); width: 1%; height: 21%; position: absolute; left: 45%; top: 80%; border-radius: 5px;"></div>

            <!-- Столы -->
             <button class="table-button" style="left: 0%; top: 70%;" table_id="7" id="table_7">
                <i class="bi bi-4-square-fill icon" style="font-size: 400%;"></i>
            </button>
            <button class="table-button" style="left: 15%; top: 70%;" table_id="8" id="table_8">
                <i class="bi bi-4-square-fill icon" style="font-size: 400%;"></i>
            </button>
            <button class="table-button" style="left: 30%; top: 70%;" table_id="9" id="table_9">
                <i class="bi bi-4-square-fill icon" style="font-size: 400%;"></i>
            </button>
            <button class="table-button" style="left: 73%; top: 0%;" table_id="10" id="table_10">
                <i class="bi bi-8-square-fill my-8-style" style="font-size: 650%;"></i>
            </button>
            <button class="table-button" style="left: 73%; top: 55%;" table_id="11" id="table_11">
                <i class="bi bi-8-square-fill my-8-style" style="font-size: 650%;"></i>
            </button>

            <!-- Дополнения -->
            <i class="bi bi-tv dop" style="font-size: 400%; color: #6c6960; position: absolute; left: 91%; top: 10.3%; transform: rotate(90deg);"></i>
            <i class="bi bi-tv dop" style="font-size: 400%; color: #6c6960; position: absolute; left: 91%; top: 66%; transform: rotate(90deg);"></i>
            

            <i class="bi bi-square dop" style="font-size: 400%; color: rgb(235, 234, 234); position: absolute; left: 48%; top: 0%;"></i>
            <i class="bi bi-droplet-half dop" style="font-size: 370%; color: #6c6960; position: absolute; left: 48.5%; top: 0%;"></i>

            <i class="bi bi-square dop" style="font-size: 400%; color: rgb(235, 234, 234); position: absolute; left: 59%; top: 0%;"></i>
            <i class="bi bi-cup-hot-fill dop" style="font-size: 370%; color: #6c6960; position: absolute; left: 59.5%; top: 0%;"></i>

            <!-- <i class="bi bi-door-open"
                style="font-size: 60px; color: #6c6960; position: absolute; left: 48%; top: 78%;"></i> -->
        </div>
    </div>`,
}

async function fetchRooms(institutionId) {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/rooms/');
        rooms = await response.json();
        displayRooms(rooms, institutionId);
    } catch (error) {
        console.error(error);
    }
}

async function fetchInstitutions() {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/institutions/');
        institutions = await response.json();
    } catch (error) {
        console.error(error);
    }
}

async function fetchIntervals(roomId, date, tableId) {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/available-times/',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                room_id: roomId,
                date: date,
                place: tableId
            })
        });

        const data = await response.json();
        console.log('Received data:', data);
        displayAvailableIntervals(data);
    } catch (error) {
        console.error(error);
    }
}

async function fetchUsers(studentId) {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/available-student/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                student_id: studentId
            })
        });
        
        // Проверьте статус ответа и содержимое
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        console.log('Received data:', data);
        
        return data;
    } catch (error) {
        console.error('Error fetching users:', error);
        return {}; // Верните пустой объект в случае ошибки
    }
}

// csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;

async function fetchBooking(date, tableId, intervals, studentId, room_id) {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/book/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'X-CSRFToken': csrfToken
            },
            body: JSON.stringify({
                date: date,
                place: tableId,
                times: intervals,  // Отправляем массив интервалов
                room_id: room_id,
                student_ids: participants,
            })
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error('Error in booking: ' + JSON.stringify(data));
        }

        console.log('Booking result:', data);

    } catch (error) {
        console.error('Booking error:', error);
    }
}


function displayRooms(rooms, institutionId) {
    const kab = document.getElementById('room-select');
    const container = document.getElementById('rooms-container');
    container.innerHTML = '';

    const filteredRooms = rooms.filter(room => room.institution === institutionId);

    kab.style.display = 'block';

    filteredRooms.forEach(room => {
        const institution = institutions.find(inst => inst.id === room.institution);

        if (!institution) {
            console.warn(`Institution with ID ${room.institution} not found.`);
            return;
        }

        const card = document.createElement('div');
        card.className = 'card';
        card.style.width = '15rem';
        card.innerHTML = 
            // <img src="..." class="card-img-top" alt="${'Image'}">
            `<div class="card-body">
                <h5 class="card-title">${room.number || 'Card title'}</h5>
                <p class="card-text">${institution.name || 'Institution name'} (${institution.address || 'Address'})</p>
                <button onclick="selectRoom(${room.id})" class="btn btn-primary">Выбрать</button>
            </div>
        `;
        container.appendChild(card);
    });
}



function displayAvailableIntervals(data) {
    const intervals = data["available-times"]; 

    const intervalContainer = document.querySelector('.popup-interval');
    const checkboxes = intervalContainer.querySelectorAll('input[type="checkbox"]');
    document.querySelector('.overlay').style.display = 'block';

    // Проверяем, что количество чекбоксов совпадает с длиной массива данных
    if (intervals.length !== checkboxes.length) {
        console.error('Mismatch between data length and checkboxes length');
        return;
    }

    checkboxes.forEach((checkbox, index) => {
        if (intervals[index] === false) {
            checkbox.disabled = false;
            checkbox.parentElement.style.display = 'block'; 
        } else {
            checkbox.disabled = true;
            checkbox.parentElement.style.display = 'disabled'; 
        }
    });

    // Показать окно интервалов
    intervalContainer.style.display = 'block';
}

function selectIntervals() {
    selectedIntervals = []; 
    const checkboxes = document.querySelectorAll('.popup-interval input[type="checkbox"]:checked');

    checkboxes.forEach(checkbox => {
        selectedIntervals.push(Number(checkbox.value)); 
    });

    console.log('Selected intervals:', selectedIntervals); 

    localStorage.setItem('selectedTable', Number(selectedTable));
    localStorage.setItem('selectedIntervals', JSON.stringify(selectedIntervals));

    displayResult(); 
    closePopup1(); 

    // Показать блок добавления участника
    const participantBlock = document.getElementById('participant-block');
    participantBlock.style.display = 'block'; 

    const participantsResultCon = document.getElementById('participants-result-container');
    participantsResultCon.style.display = 'block';
    
    if (confirm_booking) {
        confirm_booking.classList.remove('hidden');
    }
}

function displayResult() {
    var resultElement = document.getElementById("result");
    var resCon = document.getElementById("result-container");
    resCon.style.display = 'block';
    resultElement.innerHTML = `<p>Выбранный стол: ${selectedTable}</p>
    <p>Выбранные интервалы:</p>
    <ul>
        ${selectedIntervals.map(interval => {
            let intervalText = "";
            switch(interval) {
                case 1:
                    intervalText = "8:00 - 9:00";
                    break;
                case 2:
                    intervalText = "9:00 - 10:00";
                    break;
                case 3:
                    intervalText = "10:00 - 11:00";
                    break;
                case 4:
                    intervalText = "11:00 - 12:00";
                    break;
                case 5:
                    intervalText = "12:00 - 13:00";
                    break;
                case 6:
                    intervalText = "13:00 - 14:00";
                    break;
                case 7:
                    intervalText = "14:00 - 15:00";
                    break;
                case 8:
                    intervalText = "15:00 - 16:00";
                    break;
                case 9:
                    intervalText = "16:00 - 17:00";
                    break;
                case 10:
                    intervalText = "17:00 - 18:00";
                    break;
                default:
                    intervalText = "Неизвестный интервал";
            }
            return `<li>${intervalText}</li>`;
        }).join('')}
    </ul>`;
}

function closePopup1() {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.popup-interval').style.display = 'none';
    resetCheckboxes();
}

function closePopup(){
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.popup-interval').style.display = 'none';
    resetCheckboxes();
}


function resetCheckboxes() {
    var checkboxes = document.querySelectorAll(".popup-interval input[type='checkbox']");
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
        checkbox.disabled = false;
    });
}



// функция добавления участника
async function addParticipant() {
    var studentIdInput = document.getElementById("student-id");
    var studentId = studentIdInput.value.trim();

    if (studentId) {
        if(addedStudents.has(Number(studentId))){
            showModal('Такой студент уже добавлен.');
            return;
        }
        try {
            const validStudentIdResponse = await fetchUsers(studentId);
            
            // Проверьте, что ответ существует и имеет нужное свойство
            if (validStudentIdResponse && validStudentIdResponse['available-student'] === "true") {
                participants.push(parseInt(studentId));
                addedStudents.add(Number(studentId));
                studentIdInput.value = "";
                displayParticipants();
            } else {
                showModal('Такого студента не существует.');
            }
        } catch (error) {
            console.error('Error fetching student validation:', error);
        }
    } else {
        showModal('Введите номер студента.');
    }
}

// функция вывода участников
function displayParticipants(){
    var participantsElement = document.getElementById("participants-result");
    participantsElement.innerHTML = `
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

function saveSelectedMarkToLocalStorage(markId, hint) {
    localStorage.setItem('selectedMarkId', markId);
    localStorage.setItem('hintContent', hint);
}

function loadSelectedMarkFromLocalStorage() {
    selectedMarkId = localStorage.getItem('selectedMarkId');
    hintContent = localStorage.getItem('hintContent');
    savedTable = localStorage.getItem('selectedTable');
    savedIntervals = JSON.parse(localStorage.getItem('selectedIntervals'));
}

function selectRoom(roomId) {
    console.log('Выбранный roomId:', roomId); 
    if (roomId) {
        if (lastSelectedRoomId !== null) {
            const previousButton = document.querySelector(`button[onclick="selectRoom(${lastSelectedRoomId})"]`);
            if (previousButton) {
                previousButton.textContent = 'Выбрать'; // Восстанавливаем текст кнопки
                previousButton.disabled = false; // Делаем кнопку кликабельной
            }
        }
        localStorage.setItem('selectedRoomId', roomId);
        console.log('selectedRoomId сохранен в localStorage:', roomId); 
        
        // Находим кнопку, которая соответствует выбранному кабинету
        const button = document.querySelector(`button[onclick="selectRoom(${roomId})"]`);

        if (button) {
            button.textContent = 'Выбрано'; // Меняем текст кнопки
            button.disabled = true; // Делаем кнопку некликабельной
        }

        lastSelectedRoomId = roomId;

        loadRoomScheme(); // Загружаем схему кабинета
    }
}

function loadRoomScheme() {
    console.log('Загрузка схемы комнаты...');
    const savedMarkId = localStorage.getItem('selectedMarkId');
    const roomId = localStorage.getItem('selectedRoomId');
    const schemeContainer = document.getElementById('table-select');

    if (!schemeContainer) {
        console.error('Элемент с id="table-select" не найден в DOM. Проверьте, существует ли он в HTML.');
        return;
    }

    if (roomSchemes[`${savedMarkId}_${roomId}`]) {
        schemeContainer.innerHTML = roomSchemes[`${savedMarkId}_${roomId}`];
        console.log(`Файл ${savedMarkId}_${roomId}.html успешно загружен`);
    } else {
        console.error(`Файл ${savedMarkId}_${roomId}.html не найден в roomSchemes`);
        schemeContainer.innerHTML = '<p>Для данного кабинета не найдена схема</p>';
    }
}

function saveDataToLocalStorage() {
    const dateInput = document.getElementById('data');
    if (dateInput) {
        localStorage.setItem('selectedDate', dateInput.value);
    }
}

document.getElementById('data').addEventListener('change', function() {
    saveDataToLocalStorage();
    // toggleTableSelect();
});

function positionPopup(popupElement, targetElement) {
    // Получаем размеры и положение стола
    var targetRect = targetElement.getBoundingClientRect();
    var popupRect = popupElement.getBoundingClientRect();

    // Рассчитываем позицию всплывающего окна в процентных значениях
    var topPercent = ((targetRect.top + window.scrollY - popupRect.height) / window.innerHeight) * 100;
    var leftPercent;
    if (targetRect.left <= 200) {
        // Если элемент на левом краю, показываем окно справа от него
        leftPercent = ((targetRect.right + window.scrollX + 10) / window.innerWidth) * 100; // Добавляем небольшой отступ
    } else {
        // Иначе показываем окно слева от него
        leftPercent = ((targetRect.left + window.scrollX + (targetElement.offsetWidth / 2) - (popupRect.width / 2) - 10) / window.innerWidth) * 100;
    }
    // Устанавливаем позицию всплывающего окна в процентах
    popupElement.style.position = 'absolute';
    popupElement.style.top = topPercent + 27 + '%';  // Устанавливаем значение top в процентах
    popupElement.style.left = leftPercent - 2 + '%'; // Устанавливаем значение left в процентах
    popupElement.style.display = 'block';
}

function showPopupForTable(tableId) {
    console.log('showPopupForTable called with tableId:', tableId);
    var popupElement = document.querySelector('.popup-interval');
    var targetElement = document.getElementById(`table_${tableId}`);

    if (popupElement && targetElement) {
        positionPopup(popupElement, targetElement);
    } else {
        console.error('Popup element or target element not found.');
    }
}

document.getElementById("add-participant-button").addEventListener('click', addParticipant);

function showModal(message) {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    modalText.textContent = message;
    modal.style.display = 'block';
}

// Закрытие модального окна при нажатии на кнопку закрытия
document.querySelector('.close-button').addEventListener('click', () => {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
});

// Закрытие модального окна при клике вне его
window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');

    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

   
    

function getIntervalText(interval) {
    switch (interval) {
        case 1: return "8:00 - 9:00";
        case 2: return "9:00 - 10:00";
        case 3: return "10:00 - 11:00";
        case 4: return "11:00 - 12:00";
        case 5: return "12:00 - 13:00";
        case 6: return "13:00 - 14:00";
        case 7: return "14:00 - 15:00";
        case 8: return "15:00 - 16:00";
        case 9: return "16:00 - 17:00";
        case 10: return "17:00 - 18:00";
        default: return "Неизвестный интервал";
    }
}

document.getElementById('submitBooking').addEventListener('click', async function(event) {
    event.preventDefault();  // Предотвращаем стандартное поведение кнопки отправки формы
    const roomNumbers = [
        {"1": "101"},
        {"2": "103"},
        {"3": "105"},
        {"4": "201"},
        {"5": "213"},
        {"6": "305"},
        {"7": "309"},
        {"8": "203"},
    ]
    const date = document.getElementById('data').value;
    const tableId = Number(localStorage.getItem('selectedTable'));
    const interval = selectedIntervals; 
    const studentId = participants; 
    const room_id = Number(localStorage.getItem('selectedRoomId'));
    const roomNumber = getRoomNumberById(room_id.toString());
    const address = localStorage.getItem('hintContent');

    function getRoomNumberById(id) {
        const room = roomNumbers.find(room => Object.keys(room)[0] === id);
        return room ? room[id] : "Неизвестный кабинет";
    }

    // Проверяем, что все необходимые данные присутствуют
    if (date && tableId && interval.length>0 && studentId && room_id) {
        // Преобразуем интервалы в текст
        const intervalTexts = interval.map(getIntervalText).join(', ');

        const modalDetails = `
            Дата: ${date}<br>
            Номер стола: ${tableId}<br>
            Интервал: ${intervalTexts}<br>
            Участники: ${studentId}<br>
            Номер комнаты: ${roomNumber}<br>
            Адрес: ${address}<br>
        `;
        document.getElementById('modalDetails').innerHTML = modalDetails;

        // Отображаем модальное окно
        document.getElementById('bookingModal').style.display = 'block';

        // Обработчик нажатия на кнопку подтверждения бронирования
        document.getElementById('confirmBooking').onclick = async function() {
            // Здесь вы можете вызвать функцию для отправки данных на сервер
            await fetchBooking(date, tableId, interval, studentId, room_id);
            clearLocalStorage();
            location.reload();
        };
        // await fetchBooking(date, tableId, interval, studentId, room_id);
        // clearLocalStorage();
        // location.reload();
        // Обработчик закрытия модального окна
        document.getElementById('closeModal').onclick = function() {
            document.getElementById('bookingModal').style.display = 'none';
        };

        // Закрытие модального окна при клике вне его
        window.onclick = function(event) {
            if (event.target == document.getElementById('bookingModal')) {
                document.getElementById('bookingModal').style.display = 'none';
            }
        };
    } else {
        showModal('Пожалуйста, заполните все поля.');
    }
});

function clearLocalStorage() {
    localStorage.clear();
}

const logout = document.getElementById('logout');
if (logout) {
    logout.addEventListener('click', clearLocalStorage);
}

document.addEventListener('DOMContentLoaded', () => {
    // Навешиваем событие на динамически создаваемый контейнер
    document.body.addEventListener('click', function(event) {
        const target = event.target.closest('.scheme button'); // Ищем ближайшую кнопку внутри контейнера

        if (target) {
            document.querySelectorAll('.scheme button').forEach(button => {
                button.style.textShadow = ""; // Сбрасываем тень для всех кнопок
            });

            const tableId = target.getAttribute('table_id');
            console.log('Button clicked, Table ID:', tableId);
            target.style.textShadow = "0 0 10px blue";
            const roomId = localStorage.getItem('selectedRoomId');
            const date = document.getElementById('data')?.value;
            selectedTable = tableId;

            if (roomId && date && tableId) {
                fetchIntervals(roomId, date, tableId)
                    .then(() => showPopupForTable(tableId))
                    .catch((err) => console.error('Error fetching intervals:', err));
            } else {
                showModal('Пожалуйста, выберите дату.');
                console.error('Необходимые данные не найдены.');
            }
        }
    });
});