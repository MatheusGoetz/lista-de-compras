const form = document.querySelector("form")
const product = document.getElementById("product")
const listItems = document.querySelector("ul")

form.onsubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: new Date().getTime(),
      name: product.value
    }
    console.log(newItem.name)

    if (newItem.name === "") {
      alert("Por favor, informe um item para ser adicionado na lista.")
    } else {
       addProduct(newItem)
    }
}

function addProduct(newItem){
  try {
    // Cria um novo item (li) na lista (ul).
    const productItem = document.createElement("li")
    productItem.classList.add("newItem")

    // Cria input de checkbox.
    const checkboxProduct = document.createElement("input")
    checkboxProduct.type = "checkbox"

    // Cria icone de remover.
    const removeProduct = document.createElement("img")
    removeProduct.classList.add("remove-item")
    removeProduct.setAttribute("src", "./assets/icon-delete.svg")
    removeProduct.setAttribute("alt", "Icone de remoção")

    // Cria o nome do produto.
    const productName = document.createElement("div")
    productName.classList.add("item")
    productName.textContent = newItem.name

    productItem.append(checkboxProduct, productName, removeProduct)
    
    listItems.append(productItem)

    formClear()

  } catch (error) {
    console.log(error)
    alert("Não foi possivel adicionar um novo item")
  }
}

listItems.addEventListener("click", function(event){
  if (event.target.classList.contains("remove-item")){
    const item = event.target.closest(".newItem")

    item.remove()
  }
})

function formClear(){
  product.value = ""

  product.focus()
}