document.addEventListener('DOMContentLoaded', function () {
    // Simular carga de opciones de menú desde un archivo JSON
    const menuSelector = document.getElementById('menuSelector');
    const menuData = [
        { id: 1, name: 'Menú 1' },
        { id: 2, name: 'Menú 2' },
        // Agregar más menús según sea necesario
    ];

    menuData.forEach(menu => {
        const option = document.createElement('option');
        option.value = menu.id;
        option.text = menu.name;
        menuSelector.appendChild(option);
    });
});

function buscarMenu() {
    // Simular carga de datos del menú seleccionado desde un archivo JSON
    const menuId = document.getElementById('menuSelector').value;
    const menuCardsContainer = document.getElementById('menuCards');
    menuCardsContainer.innerHTML = ''; // Limpiar tarjetas anteriores

    const menuItems = [
        { id: 1, image: 'asset/Hamburguesa.jpg', title: 'Plato 1', description: 'Hamburguesa completa', price: 2000 },
        { id: 2, image: 'asset/Pizza.jpg', title: 'Plato 2', description: 'Pizza de Muzzarella', price: 2500},
        // Agregar más platos según sea necesario
    ];

    menuItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';

        const image = document.createElement('img');
        image.src = item.image;
        card.appendChild(image);

        const title = document.createElement('h3');
        title.textContent = item.title;
        card.appendChild(title);

        const description = document.createElement('p');
        description.textContent = item.description;
        card.appendChild(description);

        const price = document.createElement('p');
        price.textContent = `Precio: $${item.price.toFixed(2)}`;
        card.appendChild(price);

        menuCardsContainer.appendChild(card);
    });
}
