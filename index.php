<?
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Table</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="functions.js"></script>
</head>
<body>
    <header>
        <p class="studentName">Сухняк Данила Дмитриевич</p>
        <p class="groupNumber">Группа P3232</p>
        <p class="optionNumber">Вариант 2816</p>
    </header>
    <div class="content">
        <img id = "image" src="/src/area.png" alt="" width="500px">
        <form id="myForm" action="">

            <div class="insideForm x">    
                <label>Выберите X:</label>
                <input class="checkbox" type="radio" checked="checked" name="x" value="-3">-3
                <input class="checkbox" type="radio" name="x" value="-2">-2
                <input class="checkbox" type="radio" name="x" value="-1">-1
                <input class="checkbox" type="radio" name="x" value="0">0
                <input class="checkbox" type="radio" name="x" value="1">1
                <input class="checkbox" type="radio" name="x" value="2">2
                <input class="checkbox" type="radio" name="x" value="3">3
                <input class="checkbox" type="radio" name="x" value="4">4
                <input class="checkbox" type="radio" name="x" value="5">5
            </div>

            <div class="insideForm y">    
                <label>Введите Y:</label>
                <input type="text" id="inputY" placeholder="-5..5" name="y">
            </div>

            <div class="insideForm r">
                <label>Введите R:</label>
                <input type="text" id="inputR" placeholder="1..4" name="r">
            </div>

            <input type="submit" name="submit" id="submit" class="submit" value="Добавить" tabindex="4" :disabled="isButtonDisabled"/>
        </form>

        <table>
            <tr>
                <th>X</th>
                <th>Y</th>
                <th>R</th>
                <th>Current time</th>
                <th>Execution time</th>
                <th>Result</th>
            </tr>
        </table>
    </div>
</body>
</html>