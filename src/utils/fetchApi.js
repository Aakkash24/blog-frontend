const BASE_URL = "https://blog-backend-temp-6yblp1oet-aakkashs-projects-de69e132.vercel.app"

const request = async (url, method, headers, body, isNotStringified = false) => {
    let res
    let data
    switch (method) {
        case 'GET':
            res = await fetch(BASE_URL + url, { headers })
            data = await res.json()
            return data

        case 'POST': 
            if (isNotStringified) {
                res = await fetch(BASE_URL + url, { headers, method, body })
                data = await res.json()
            } else {
                res = await fetch(BASE_URL + url, { headers, method, body: JSON.stringify({ ...body }) })
                data = await res.json()
            }
            return data

        case 'PUT':
            res = await fetch(BASE_URL + url, { headers, method, body: JSON.stringify({ ...body }) })
            data = await res.json()
            return data

        case 'DELETE':
            res = await fetch(BASE_URL + url, { headers, method })
            data = await res.json()
            return data
        default:
            return
    }
}

export {request}