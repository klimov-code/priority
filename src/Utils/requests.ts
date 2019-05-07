import { IRequest } from 'Definitions';

const headers = {
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
};

const postRequest = async (request: IRequest) => {
  const { url, data } = request;
  const response = await fetch(url, {
    ...headers,
    body: data ? JSON.stringify(data) : undefined,
    method: 'post',
  });

  const responseText = await response.text();
  const responseJson = responseText.length > 0 ? JSON.parse(responseText) : null;

  if (!response.ok) {
    throw new Error(responseJson.message);
  }

  return responseJson;
};

const uploadRequest = async (request: IRequest) => {
  const { url, data } = request;
  const response = await fetch(url, {
    body: data,
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
    },
    method: 'upload',
    mode: 'cors',
    redirect: 'error',
  });

  const responseText = await response.text();
  const responseJson = responseText.length > 0 ? JSON.parse(responseText) : null;

  if (!response.ok) {
    throw new Error(responseJson.message);
  }

  return responseJson;
};

const putRequest = async (request: IRequest) => {
  const { url, data } = request;
  const response = await fetch(url, {
    ...headers,
    body: data ? JSON.stringify(data) : undefined,
    method: 'put',
  });

  const responseText = await response.text();
  const responseJson = responseText.length > 0 ? JSON.parse(responseText) : null;

  if (!response.ok) {
    throw new Error(responseJson.message);
  }

  return responseJson;
};

const deleteRequest = async (request: IRequest) => {
  const { url, data } = request;
  const response = await fetch(url, {
    ...headers,
    body: data ? JSON.stringify(data) : undefined,
    method: 'delete',
  });
  const responseText = await response.text();
  const responseJson = responseText.length > 0 ? JSON.parse(responseText) : null;

  if (!response.ok) {
    throw new Error(responseJson.message);
  }

  return responseJson;
};

const getRequest = async (request: IRequest) => {
  const { url } = request;
  const response = await fetch(url, {
    method: 'get',
    ...headers,
  });

  const responseText = await response.text();
  const responseJson: any = responseText.length > 0 ? JSON.parse(responseText) : null;

  if (!response.ok) {
    throw new Error(responseJson.message);
  }

  return responseJson;
};

export { getRequest, postRequest, putRequest, uploadRequest, deleteRequest };
