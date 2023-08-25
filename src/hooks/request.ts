import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface RequestOptions extends AxiosRequestConfig {
    handleSuccess?: (data: any) => void;
    handleError?: (error: any) => void;
}

interface RequestResponse<T> {
    response?: T;
    error?: any;
    success: boolean;
}

export function useRequest<T = any>() {
    const [response, setResponse] = useState<T | undefined>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any | undefined>();

    const request = async (options: RequestOptions, sync = false): Promise<RequestResponse<T>> => {
        setLoading(true);
        setError(undefined);

        try {
            const { data }: AxiosResponse<T> = await axios(options);

            if (!sync) {
                setResponse(data);

                if (options.handleSuccess) {
                    options.handleSuccess(data);
                }
            }

            return { response: data, success: true };
        } catch (e) {
            console.error(e);
            setError(e);

            if (options.handleError) {
                options.handleError(e);
            }

            return { error: e, success: false };
        } finally {
            if (!sync) {
                setLoading(false);
            }
        }
    };

    return {
        loading,
        request,
        response,
        error,
        setResponse,
    };
}

export function useLoad<T = any>(options: RequestOptions, dependencies: any[] = [], sync = false) {
    const { request, ...rest } = useRequest<T>();

    useEffect(() => {
        request(options, sync);
    }, dependencies);

    return rest;
}
