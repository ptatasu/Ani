/**
 * custom funtion to decode jwt response
 */
const decodeJwtResponse = (token) => {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join('')
    );
    return JSON.parse(jsonPayload);
};

let responsePayload;

window.handleCredentialResponse = (response) => {
    // decodeJwtResponse() is a custom function defined by you
    // to decode the credential response.
    user = decodeJwtResponse(response.credential);
    console.log(user);
};
/** logout
 * google.ccounts.id.disableAutoSelect();
 * google.ccounts.id.promt();
 */
