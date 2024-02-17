window.addEventListener('load', (event) => {
  cl()
})
document.getElementById('lang-select').addEventListener('change', (event) => {
  cl()
})
function cl() {
  const script = document.querySelector("script");
  const langValue = document.querySelector("select").value;
  const src = script.getAttribute("src");
  fetch(src)
    .then(response => response.text())
    .then((data) => {
      const obj = JSON.parse(data);
      const lang = langValue;
      const data2 = obj[lang];

      for (const [id, text] of Object.entries(data2)) {
        const element = document.querySelector(`#${id}`);
        element.textContent = text;
      }
    });
}