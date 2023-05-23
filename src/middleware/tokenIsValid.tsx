import { exit } from "process";


export default async function tokenIsValid() {
    // Check if the token "JWT" in SessionStorage is valid
    // by colling api/user/isAuthenticated
    // If it is valid, return true
    // Otherwise, return false
    // Backend call
    var result: Boolean = await fetch("http://localhost:8000/api/user/isAuthenticated", {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + sessionStorage.getItem("JWT"),
        },
    }).then((response) => response.json()) 
    .then((data) => {
        if (data.status == 200) {
            return true;
        } else {
            return false;
        }
    }).catch((error) => {
        return false;
    });
    return result;
}