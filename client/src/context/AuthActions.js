export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START"
});

export const LoginSuccess = (user) => ({
    type: "LOGIN_Success",
    payload: user
});

export const LoginFailure = (usier) => ({
    type: "LOGIN_Failure",
    payload: error
});