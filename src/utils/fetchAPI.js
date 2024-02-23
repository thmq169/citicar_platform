import axios from 'axios'

import constaints from '../constaints'
import setAPIKey from './setAPIKey'

const fetchAPI = async (apiEndpoint, method, payload) => {
    // Get API Key
    const apiKeyUrl = constaints.host + '/api/keys/'

    const apiKeyResponse = await axios.get(apiKeyUrl)

    const { data } = apiKeyResponse.data

    const apiKey = data.api_key

    setAPIKey(apiKey)

    // Fetch API
    const apiUrl = constaints.host + apiEndpoint

    let callApi = {}

    if (method === 'get' || !method) {
        try {
            callApi = axios.get(apiUrl)
            return callApi
        } catch (error) {
            return error
        }
    } 
    if (method === 'post' && payload != null) {
        try {
            callApi = axios.post(apiUrl, {...payload})
            return callApi
        } catch (error) {
            return error
        }
    }
    if (method === 'put' && payload != null) {
        try {
            callApi = axios.put(apiUrl, {...payload})
            return callApi
        } catch (error) {
            return error
        }
    }

}

export default fetchAPI