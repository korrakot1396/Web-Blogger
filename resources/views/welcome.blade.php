<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Korrakot'Blogger</title>

     

    </head>
    <body>
       <h1>Korrakot' Blogger </h1>
       <div id="app">
            <mainapp></mainapp>
       
       </div>
    </body>
    <script src="{{mix('/js/app.js')}}"></script>
</html>
