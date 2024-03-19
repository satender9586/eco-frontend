
function setCookie(key, value, more = false) {
    if (typeof window !== "undefined") {
        let defaultSeconds = 1296000; 
        if (more) {
            defaultSeconds = 2592000; 
        }
        document.cookie = `${key}=${value};max-age=${defaultSeconds};path=/`;
    }
}

function getCookie(name){
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}






export function setToken(token){
    setCookie('token',token)
}
export function setUserID(userId){
    setCookie('userId',userId)
}
export function setOrderCookie(order){
    setCookie('Order',order)
}



export const getToken = ()=>{
    return getCookie("token")
}
export const getUserId = ()=>{
    return getCookie("userId")
}