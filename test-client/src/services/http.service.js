import React from 'react'

const baseApi = "https://localhost:44364/api/";


const post = (url, data) => {
    return fetch(`${baseApi}${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(s => s.json())
}
const put = (url, data) => {
    return fetch(`${baseApi}${url}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(s => s.json())
}
const remove = (url, data) => {
    return fetch(`${baseApi}${url}${data}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(s => s.json())
}

const get = (url) => {
    return fetch(`${baseApi}${url}`, {
        method: 'Get',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(s => s.json())
}

export default { post, put, get, remove }