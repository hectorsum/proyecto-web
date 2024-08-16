const btnAgregarProductoId = document.getElementById('btn-agregar-producto');
const productsTable = document.getElementById('table-products');


btnAgregarProductoId.addEventListener('click', () => {
  const trElement = document.createElement("tr");
  const tdElementProductName = document.createElement("td");
  const tdElementProductQuantity = document.createElement("td");
  const tdElementProductPrice = document.createElement("td");
  const tdElementProductStatus = document.createElement("td");
  const tdElementProductActions = document.createElement("td");

  tdElementProductName.appendChild(document.createTextNode("Galleta"));
  tdElementProductQuantity.appendChild(document.createTextNode("12"));
  tdElementProductPrice.appendChild(document.createTextNode("2"));
  tdElementProductStatus.appendChild(document.createTextNode(""));
  tdElementProductActions.appendChild(document.createTextNode(""));

  trElement.appendChild(tdElementProductName);
  trElement.appendChild(tdElementProductQuantity);
  trElement.appendChild(tdElementProductPrice);
  trElement.appendChild(tdElementProductStatus);
  trElement.appendChild(tdElementProductActions);

  productsTable.querySelector('tbody').prepend(trElement);
})