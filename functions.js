window.onload = ()=>{//когда документ загрузится сработает функция(лямбда-выраЖение)
    let isNumber = function isNumber(value)//проверка на число 
    {
    return typeof (+value) === 'number' && isFinite(+value);
    }

    //проверка правильности введенных данных
    function validateForm() {
        debugger
        let isYCorrect = true;
        let elemY = $("#inputY");//достаем эл-т с id = inputY
        console.log(isNumber(elemY.val()));
        if( elemY.val()==''/*если строчка пустая*/ || !isNumber(elemY.val())/*не число*/ || (+elemY.val()<-5 || +elemY.val()>5 ) ) {
            isYCorrect = false; 
        }
        elemY.toggleClass("error",!isYCorrect);//добавляет или удаляет класс
        
        let isRCorrect = true;
        let elemR = $("#inputR");
        if( elemR.val()=='' || !isNumber(elemR.val()) || (+elemR.val()<1 || +elemR.val()>4 ) ) {
            isRCorrect = false; 
        }
        elemR.toggleClass("error",!isRCorrect);

        return isYCorrect && isRCorrect;
    }

    //Добавление строчки в таблицу
    function add_row(respond){//respond - объект с результатами
        let row = $("tbody").append("<tr>")//Добавление строки в таблицу
        row.append("<td>"+respond.x+"</td>")//Добавление ячейки в строчку
        row.append("<td>"+respond.y+"</td>")
        row.append("<td>"+respond.r+"</td>")
        row.append("<td>"+respond.time.date+"</td>")
        row.append("<td>"+respond.diff+"</td>")
        row.append("<td>"+respond.success+"</td>")
    }
    //ajax запрос - ответ
    function ajaxQuery() {
        let data = {};
        //заполняем объект data
        data['y'] =  $("#inputY").val();
        data['r'] =  $("#inputR").val()
        data['x'] =  $(".insideForm input:checked").val()
        // AJAX запрос
        $.ajax({
            url         : 'submit.php',
            type        : 'GET', // важно!
            data        : data,
            cache       : false,
            dataType    : 'json',
            // функция успешного ответа сервера
            success     : function( respond, status, jqXHR ){
                add_row(respond);
            },
            // функция ошибки ответа сервера
            error: function( jqXHR, status, errorThrown ){
                console.log( 'ОШИБКА AJAX запроса: ' + status, jqXHR );
            }

        });
    }

    $('#myForm').on('submit', function(event) {//событи отправки на сервер
        event.preventDefault(); // отменяем событие по умолчанию
        if ( !validateForm() ) { // если есть ошибки возвращает true
          return false; // прерываем выполнение скрипта
        }
        ajaxQuery()
      });
}