const supplies = [
    {
        name: "Acrylic Paint",
        description: "High-quality acrylic paint, ideal for canvas.",
        stock: 10,
        reorderLevel: 5
    },
    {
        name: "Brush Set",
        description: "Set of brushes with different sizes for all art types.",
        stock: 3,
        reorderLevel: 5
    },
    {
        name: "Sketch Pads",
        description: "Premium sketch pads for smooth drawing.",
        stock: 8,
        reorderLevel: 3
    },
    {
        name: "Watercolor Pencils",
        description: "Set of vibrant watercolor pencils.",
        stock: 15,
        reorderLevel: 5
    }
];

function renderSupplyList() {
    const supplyListContainer = document.querySelector('.supply-list');
    supplyListContainer.innerHTML = ''; // Clear existing items

    supplies.forEach(supply => {
        const supplyCard = document.createElement('div');
        supplyCard.classList.add('supply-card');
        
        // Supply Name
        const supplyName = document.createElement('h3');
        supplyName.textContent = supply.name;
        
        // Description
        const supplyDescription = document.createElement('p');
        supplyDescription.textContent = supply.description;
        
        // Stock Level
        const stockLevel = document.createElement('div');
        stockLevel.classList.add('stock-level');
        stockLevel.textContent = `Stock: ${supply.stock}`;
        
        // Low Stock Alert
        if (supply.stock <= supply.reorderLevel) {
            const lowStockAlert = document.createElement('div');
            lowStockAlert.classList.add('low-stock-alert');
            lowStockAlert.textContent = "Low Stock! Reorder soon.";
            supplyCard.appendChild(lowStockAlert);
        }

        // Reorder Button
        const reorderBtn = document.createElement('button');
        reorderBtn.classList.add('reorder-btn');
        reorderBtn.textContent = 'Reorder';
        reorderBtn.onclick = () => handleReorder(supply.name);

        // Append elements to supply card
        supplyCard.appendChild(supplyName);
        supplyCard.appendChild(supplyDescription);
        supplyCard.appendChild(stockLevel);
        supplyCard.appendChild(reorderBtn);

        // Add supply card to supply list container
        supplyListContainer.appendChild(supplyCard);
    });
}

// Handle reorder functionality
function handleReorder(supplyName) {
    alert(`Reordering ${supplyName}`);
}

// Initial render
renderSupplyList();
