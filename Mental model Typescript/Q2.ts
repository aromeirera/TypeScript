// 2. You receive data from an API as `unknown` type. Create a 
// function called `validateUser` that:
//     - Takes an `unknown` parameter
//     - Checks if it's an object with `name` (string) and `age` 
// (number) properties
//     - Returns the validated object typed as 
// `{ name: string; age: number }` or throws an error if validation fails
    
//     Then create a type called `PartialUser` using TypeScript's 
// utility types that makes all properties of your user type optional.
export
interface User {
    name: string;
    age: number;
}


function validateUser(data: unknown): User {
    if (
        typeof data === "object" &&
        data !== null &&
        "name" in data &&
        "age" in data &&
        typeof data.name === "string" &&
        typeof data.age === "number"
    ) {
        return {
            name: data.name,
            age: data.age
        };
    }

    throw new Error("Invalid user");
}


const user = validateUser({
    name: "MUGISHA",
    age: 17
});

console.log(user);