let userRole = "admin";
let accessLevel;

if(userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if(isLoggedIn) {
    if(userRole === "admin") {
        userMessage = "Welcome admin!";
    } else {
        userMessage = "Welome user!";
    }
} else {
    userMessage = "Please log in to access the system";
}

console.log("User message: ", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User category: ", userCategory);

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);