export default function authHeader() {
    const currentToken = localStorage.getItem("token") ?
    JSON.parse(localStorage.getItem("token")) :
    "";
    if (currentToken && currentToken.state.access_token) {
        return {
            "Access-ControlAllow-Origin": "*",
            authorization: `Bearer ${currentToken.state.access_token}`
        };
    } else {
        return {};
    }
}