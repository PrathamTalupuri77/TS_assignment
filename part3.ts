enum OrderStatus {
    Pending = "Pending",
    Shipped = "Shipped",
    Delivered = "Delivered",
    Cancelled = "Cancelled"
}

function updateOrderStatus(orderId: number, status: OrderStatus): void {
    console.log(`Order ID: ${orderId} has been updated to status: ${status}`);
}

//we are defining a tuple here
type Coords = [latitude: number, longitude: number];


function getLocationInfo(coordinates: Coords): void {
    console.log(`Latitude: ${coordinates[0]}, Longitude: ${coordinates[1]}`);
}

updateOrderStatus(101, OrderStatus.Shipped);

const locations: Coords = [3.49587, 5.95654]; 
getLocationInfo(locations);