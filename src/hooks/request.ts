import { useEffect, useState } from "react"
import axios from "axios"

export function useRequest(options = {}) {
    const [response, setResponse] = useState<any>({});
    const [loading, setLoading] = useState<boolean>(false);

    async function request(overrideOptions = {}, sync = false) {
        setLoading(true);
        try {
            const { data } = await axios({
                ...options,
                ...overrideOptions,
            });
            if (!sync) setResponse(data);
            if (data.statusText === 'OK') {
                return { response: data, success: true };
            } else {
                return { error: data, success: false };
            }
        } catch (e) {
            console.log(e)

            return { success: false };
        } finally {
            if (!sync) setLoading(false);
        }
    }

    return {
        loading,
        request,
        response,
        setResponse,
        setLoading,
    };
}

export function useLoad(options = {}, dependencies = []) {
    const request = useRequest({ method: 'GET', ...options });
    useEffect(() => {
        request.request();
    }, dependencies);

    return request;
}