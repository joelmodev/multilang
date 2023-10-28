# Multilingual Application in JS
## Installing
Installing this script is simple and easy, just add the tag below and follow the next steps
```html
  <script src="https://cdn.jsdelivr.net/gh/niccoti/multilang@main/multilang.js">
```


## How to use?
 This js script that allows you to create websites with more than one language in an easy and simple way, has just 3 steps to start working, see:
#### 1. Configuring the html
To configure this project you must include the following items in your html:
The selection menu
 ```html
<select id="lang" onchange="cl()">
    <option value="id">Seu Idioma</option>
    <option value="id2">Your language</option>
    <option value="id3">Su Idioma</option>
  </select>
```
Your file with translations:
> Note: It is necessary to enter the correct path in the src
 ```html
  <script id="json-file" src="path/to/json/file"></script>
```
The project file
```html
  <script src="https://cdn.jsdelivr.net/gh/niccoti/multilang@main/multilang.js">
```

You can view an example of how the project works in the `exaple` folder

### JSON file setup
To configure the json file you must follow the following pattern:
```json
{
    "language":{
     "element id":"Custom text",
     "element id":"Another personalized text"
    }
}
```
> ⚠️ You can use as many languages ​​as you want, as long as you add it to the select!


