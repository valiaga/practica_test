# Steps por test width Jasmine

## OPC 1
The option one is only line commands.

Create your project node
```bash
npm init
```
For create you **package.json**
Instalar Jasmine.
- [Install jasmine for Noje.js](https://jasmine.github.io/pages/getting_started.html)
```bash
npm install --save-dev jasmine
"scripts": { "test": "jasmine" }
npm test` OR `npm test init
npm test examples
npm test
```
The file configuration is `.jasmine.json`.

## OPC 2
The option is with inteface.

in your file html base

```html
<!DOCTYPE html>  
<html>
<head>  
    <meta charset="utf-8">
    <title>Jasmine Spec Runner v2.4.1</title>

    <link rel="shortcut icon" type="image/png" href="lib/jasmine-2.4.1/jasmine_favicon.png">
    <link rel="stylesheet" href="lib/jasmine-2.4.1/jasmine.css">

    <script src="lib/jasmine-2.4.1/jasmine.js"></script>
    <script src="lib/jasmine-2.4.1/jasmine-html.js"></script>
    <script src="lib/jasmine-2.4.1/boot.js"></script>
    <!-- include source files here... -->

    <!-- include spec files here... -->
</head>
<body>  
</body>
</html> 
```
Insert the librerias Jasmine.
```html
    <link rel="stylesheet" href="./node_modules/jasmine-core/lib/jasmine-core/jasmine.css">

    <script src="./node_modules/jasmine-core/lib/jasmine-core/jasmine.js"></script>
    <script src="./node_modules/jasmine-core/lib/jasmine-core/jasmine-html.js"></script>
    <script src="./node_modules/jasmine-core/lib/jasmine-core/boot.js"></script>

    <script src="./scripts/hello-world.js"></script>
    <script src="./spec/scripts/hello-world.spec.js"></script>
```
Insert the files `.js` and `.spec.js` in the file html

```html
    <script src="./scripts/hello-world.js"></script>
    <script src="./spec/scripts/hello-world.spec.js"></script>
``` 
Then just drag the html to the browser.
