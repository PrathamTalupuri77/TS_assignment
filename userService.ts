type User = {
    id: number;
    name: string;
    email: string;
};

const users: User[] = [];

export function createUser(id: number, name: string, email: string): void {
    const newUser: User = { id, name, email };
    users.push(newUser);
    console.log(`User created: ${name}`);
}

// Function to fetch a user by ID
export function getUserById(id: number): User | undefined {
    return users.find(user => user.id === id);
}