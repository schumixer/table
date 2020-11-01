window.onload = ()=>{
    let isNumber = function isNumber(value) 
    {
    return typeof value === 'number' && isFinite(value);
    }

    function validateForm() {
        let isYCorrect = true;
        let elemY = $("#inputY");
        if( elemY.val()=='' || !isNumber(+elemY.val()) || (+elemY.val()<-5 || +elemY.val()>5 ) ) {
            isYCorrect = false; 
        }
        elemY.toggleClass("error",!isYCorrect);
        
        let isRCorrect = true;
        let elemR = $("#inputR");
        if( elemR.val()=='' || !isNumber(+elemR.val()) || (+elemR.val()<1 || +elemR.val()>4 ) ) {
            isRCorrect = false; 
        }
        elemR.toggleClass("error",!isRCorrect);

        return isYCorrect && isRCorrect;
    }

    function add_row(respond){
        let row = $("tbody").append("<tr>")
        row.append("<td>"+respond.x+"</td>")
        row.append("<td>"+respond.y+"</td>")
        row.append("<td>"+respond.r+"</td>")
        row.append("<td>"+respond.time.date+"</td>")
        row.append("<td>"+respond.diff+"</td>")
        row.append("<td>"+respond.success+"</td>")
    }
    function ajaxQuery() {
        let data = {};
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

    $('#myForm').on('submit', function(event) {
        event.preventDefault(); // отменяем событие по умолчанию
        if ( !validateForm() ) { // если есть ошибки возвращает true
          return false; // прерываем выполнение скрипта
        }
        ajaxQuery()
      });
}