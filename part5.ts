type user = {
    id: number;
    name: string;
    email: string;
};


async function fetchUserData(userId: number): Promise<user> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const user: user = {
                id: userId,
                name: "Darth",
                email: "Darth@vader.com"
            };
            resolve(user);
        }, 2000);
    });
}

async function getUserInfo() {
    const user = await fetchUserData(1);
    console.log("User Data:", user);
    
    
}
console.log("user data is being fetched")

getUserInfo();