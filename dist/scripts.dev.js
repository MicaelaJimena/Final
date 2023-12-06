"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // Simular carga de opciones de menú desde un archivo JSON
  var menuSelector = document.getElementById('menuSelector');
  var menuData = [{
    id: 1,
    name: 'Menú 1'
  }, {
    id: 2,
    name: 'Menú 2'
  } // Agregar más menús según sea necesario
  ];
  menuData.forEach(function (menu) {
    var option = document.createElement('option');
    option.value = menu.id;
    option.text = menu.name;
    menuSelector.appendChild(option);
  });
});

function buscarMenu() {
  // Simular carga de datos del menú seleccionado desde un archivo JSON
  var menuId = document.getElementById('menuSelector').value;
  var menuCardsContainer = document.getElementById('menuCards');
  menuCardsContainer.innerHTML = ''; // Limpiar tarjetas anteriores

  var menuItems = [{
    id: 1,
    image: 'Hamburguesa.jpg',
    title: 'Plato 1',
    description: 'Hamburguesa completa',
    price: 2000
  }, {
    id: 2,
    image: 'Pizza.jpg',
    title: 'Plato 2',
    description: 'Pizza de Muzzarella',
    price: 2500
  } // Agregar más platos según sea necesario
  ];
  menuItems.forEach(function (item) {
    var card = document.createElement('div');
    card.className = 'card';
    var image = document.createElement('img');
    image.src = item.image;
    card.appendChild(image);
    var title = document.createElement('h3');
    title.textContent = item.title;
    card.appendChild(title);
    var description = document.createElement('p');
    description.textContent = item.description;
    card.appendChild(description);
    var price = document.createElement('p');
    price.textContent = "Precio: $".concat(item.price.toFixed(2));
    card.appendChild(price);
    menuCardsContainer.appendChild(card);
  });
}