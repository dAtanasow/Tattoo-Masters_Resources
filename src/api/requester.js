import { util } from "../utils/userUtil.js";

export async function requester(method, url, data) {
    const userData = util.getUser()
    const option = {
        method,
        headers: {}
    }

    if (userData) {
        option.headers["X-authorization"] = userData.accessToken;
    }
    if (data) {
        option.headers["Content-type"] = "application/json"
        option.body = JSON.stringify(data)
    }

    try {
        const response = await fetch(url, option);
        if (!response.ok) {
            if (response.status === 403) {
                util.removeUser()
            }
            const error = await response.json();
            throw new Error(error.message)
        }
        if (response.status === 204) {
            return response
        }
        return await response.json();
    } catch (error) {
        alert(error)
        throw new Error(error)
    }
}

async function get(url) {
    return await requester("GET", url);
}

async function post(url, data) {
    return await requester("POST", url, data);
}

async function put(url, data) {
    return await requester("PUT", url, data);
}

async function del(url) {
    return await requester("DELETE", url);
}

export const api = {
    get,
    post,
    put,
    del
}