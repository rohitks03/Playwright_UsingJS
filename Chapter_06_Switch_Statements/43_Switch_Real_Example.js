let responseCode = 404;

switch (responseCode) { 
    case 200:
        console.log("Success: The request was successful.");
        break;
    case 400:
        console.log("Bad Request: The server could not understand the request.");
        break;
    case 404:
        console.log("Not Found: The requested resource was not found.");
        break;
    case 500:
        console.log("Internal Server Error: The server encountered an error.");
        break;
    default:
        console.log("Unknown Response Code: " + responseCode);
}   