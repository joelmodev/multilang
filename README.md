# Multilingual Application in JS

## How to use?
 This js script that allows you to create websites with more than one language in an easy and simple way, has just 3 steps to start working, see:
#### 1. Configuring the html
To configure this project you must include the following items in your html:
- The selection menu
 ```html
<select id="lang" onchange="cl()">
    <option value="id">Seu Idioma</option>
    <option value="id2">Your language</option>
    <option value="id3">Su Idioma</option>
  </select>
```
- Your file with translations:
 ```html
  <script id="json-file" src="assets/json/lin.json"></script>
```

