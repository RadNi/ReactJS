<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>

    <!-- Styles -->

</head>
<body>

<div class="content">
    <table class="table table-dark table-hover">
        <thead>
        <tr>
            <th>Key</th>
            <th>Value</th>
        </tr>
        </thead>
        <tbody  id="ID">

        </tbody>
    </table>
    <p id="PID" hidden>{!! $res !!}</p>

    <script>
        var elm = document.getElementById("PID");
        var ar = elm.textContent.split('spliter');
        for(var i in ar) {
            var json = JSON.parse(ar[i])
            addEntityToTable(document.getElementById("ID"), json)
        }


        function retfunc(i, tableElm, tdcol) {
            return function (event) {
                $("#ID").empty()
                alert(JSON.stringify(tdcol[i]))
                addEntityToTable(tableElm, tdcol[i])
            }
        }

        function addEntityToTable(tableElm, tdcol) {
            for (var i in tdcol) {
                var tr = document.createElement('tr')
                var td = document.createElement('td')
                td.innerHTML = i
                td.onclick = retfunc(i, tableElm, tdcol)
                tr.appendChild(td)

                td = document.createElement('td')
                td.innerHTML = tdcol[i]
                tr.appendChild(td)
                tableElm.appendChild(tr)
            }
        }

    </script>

</div>
</body>
</html>


