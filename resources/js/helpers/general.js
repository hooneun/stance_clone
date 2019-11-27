export function initialize() {

}

export function setAuthorization(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}