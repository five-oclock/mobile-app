const baseURL = 'http://172.29.175.205:5000'

export const GetInventory = async () => {
    const response = await fetch(`${baseURL}/api/v1/inventory`, {  });

    /** @type {{ inventory: Array<InventoryItem> }} */
    const data = await response.json();
    return data.inventory;
}

export const SetInventory = async (reservoirNumber, data) => {
    fetch(`${baseURL}/api/v1/inventory/${ reservoirNumber }`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}