<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
</head>
<body>
    <div id="root"> </div>
    <script src="a.js"></script>
</body>
</html>
a.js:

const b=React.createElement(
    'h1',{id:'a'} ,"I AM GANESH"
);
const element=document.getElementById('root')
const root=ReactDOM.createRoot(element)
root.render(b)

o/p:
I AM GANESH

REACTDOM.render() --method is used to display to element 
SYNTAX:
Reactelement=what to render 
container=where to render]

JSX:
javascript xml
-----it is a syntax extension for js


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
</head>
<body>
    <div id="app"> </div>
    <script type="text/babel">
        const element=<h1 className='a'> Hello JSX!</h1>
        const e=document.getElementById('app')
        const root=ReactDOM.createRoot(e)
        root.render(element)
    </script>
</body>
</html>
