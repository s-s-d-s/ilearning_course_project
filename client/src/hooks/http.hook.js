export const sendRequest = async (url, method, body = null, headers = {}) => {
    if (body) {
        body = JSON.stringify(body)
        headers = {
            'Content-Type': 'application/json'
        }
    }

    return await fetch(url, {
        method: method,
        body: body,
        headers: headers
    })
}



