const form = document.querySelector("form")
const product = document.getElementById("product")

form.onsubmit = (event) => {
    event.preventDefault();
    console.log(product.value)
}