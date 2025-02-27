
type ShapeType = "circle" | "rectangle" | "triangle";

function calculateArea(shape: ShapeType, width?: number, height?: number, radius?: number): number {
    if (shape === "rectangle" && width !== undefined && height !== undefined) {
        return width * height;
    } else if (shape === "triangle" && width !== undefined && height !== undefined) {
        return 0.5 * width * height;
    } else if (shape === "circle" && radius !== undefined) {
        return Math.PI * radius * radius;
    } else {
        throw new Error("Invalid parameters ");
    }
}

console.log (calculateArea("circle",0,0,4));
console.log (calculateArea("rectangle",10,5));
console.log (calculateArea("triangle",10,5));

type User = {
    id: number;
    name: string;
    email: string;
    isAdmin?: boolean;
};


function createUser(user: User): void {
    console.log(`User Created: ${user.name}, Email: ${user.email}, Admin: ${user.isAdmin ?? false}`);
}


createUser({ id: 1, name: "Alice", email: "alice@example.com" }); 