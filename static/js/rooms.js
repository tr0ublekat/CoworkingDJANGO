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