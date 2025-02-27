
type ShapeType = "circle" | "rectangle" | "triangle";

function calculateArea(shape: ShapeType, width?: number, height?: number, radius?: number): number {
    if (shape === "rectangle" && width !== undefined && height !== undefined) {
        return width * height;
    } else if (shape === "triangle" && width !== undefined && height !== undefined) {
        return 0.5 * width * height;
    } else if (shape === "circle" && radius !== undefined) {
        return Math.PI * radius * radius;
    } else {
        throw new Error("Invalid parameters for the given shape.");
    }
}