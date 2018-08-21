import 'whatwg-fetch';

export function getUsers() {
    return get('users');
}

export function deleteUser(id) {
    return del(`users/${id}`);
}

function get(url) {
    return fetch(url + url).then(onSuccess, onError);
}

// Can't call func delete since reserved word.
function del(url) {
    const request = new Request(url + url, {
        method: 'DELETE'
    });

    return fetch(request).then(onSuccess, onError);
}

function onSuccess(response) {
    return response.json();
}

function onError(error) {
    console.log(error); // eslint-disable-line no-console
}