
import useSWR from "swr";

//@ts-ignore
export const fetcher = (...args) => fetch(...args).then(res => res.json()) 

export const viajesFormHeaders = (data: Array<number> | number | string | object, method: string) => ({
    method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
 

export const clientesFormHeaders = (data: Array<number> | number | string | object, method: string) => ({
    method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  
export const apiMethods = {
    PUT: 'PUT',
    POST: 'POST',
    GET: 'GET',
    DELETE: 'DELETE'
  };
  