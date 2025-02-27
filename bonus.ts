type Userprops = {
    id: number;
    name: string;
    email: string;
  };
  type RoUser = {
    readonly [K in keyof User]: User[K];
  };
  const user: RoUser = { id: 1, name: "Darth", email: "Darth@vader.com" };
// here when we try to assign a value to the user we will get an error as it is a readonly file 
// user.name = "Bob"; 

type IsString<T> = T extends string ? true : false;

type A = IsString<string>;  
type B = IsString<number>;  
type C = IsString<boolean>; 
