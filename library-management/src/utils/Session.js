export const getUser = () => {
    const user=sessionStorage.getItem("user");
    if(user) return JSON.parse(user);
    else return null;
}

export const getUserType = () => {
    return sessionStorage.getItem("userType") || null;
}

export const getToken = () => {
    return sessionStorage.getItem("token") || null;
}

export const setUserSession = (user,userType) => {
    sessionStorage.setItem("user",JSON.stringify(user));
    sessionStorage.setItem("userType",userType);
    //sessionStorage.setItem("token",JSON.stringify(token));
}

export const removeUserSession = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
}