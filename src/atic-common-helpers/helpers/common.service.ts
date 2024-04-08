import axios from 'axios'

const cancelToken = axios.CancelToken.source()

const getServiceWithParams = (url: string, param: any): Promise<any> => {
  return new Promise(function (resolve, reject) {
    axios
      .get(url, {
        params: param,
      })
      .then((data) => {
        resolve(data)
      })
      .catch((err) => {
        console.error(err)
        reject(err)
      })
  })
}

const getServices = (url: string): Promise<any> => {
  return new Promise(function (resolve, reject) {
    axios
      .get(url)
      .then((data) => {
        resolve(data)
      })
      .catch((err) => {
        console.error(err)
        reject(err)
      })
  })
}

const postService = (url: string, body: any): Promise<any> => {
  return new Promise(function (resolve, reject) {
    axios
      .post(url, body)
      .then((data) => {
        resolve(data)
      })
      .catch((err) => {
        console.error(err)
        reject(err)
      })
  })
}

const postServiceParams = (
  url: string,
  body: any,
  param: any
): Promise<any> => {
  return new Promise(function (resolve, reject) {
    axios
      .post(url, body, {
        params: param,
      })
      .then((data) => {
        resolve(data)
      })
      .catch((err) => {
        console.error(err)
        reject(err)
      })
  })
}

const patchService = (url: string, body: any): Promise<any> => {
  return new Promise(function (resolve, reject) {
    axios
      .patch(url, body)
      .then((data) => {
        resolve(data)
      })
      .catch((err) => {
        console.error(err)
        reject(err)
      })
  })
}

const fileUploadService = (url: string, file: any): Promise<any> => {
  return new Promise(function (resolve, reject) {
    axios
      .post(url, file, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((data) => {
        resolve(data)
      })
      .catch((err) => {
        console.error(err)
        reject(err)
      })
  })
}

const putService = (url: string, body: any): Promise<any> => {
  return new Promise(function (resolve, reject) {
    axios
      .put(url, body)
      .then((data) => {
        resolve(data)
      })
      .catch((err) => {
        console.error(err)
        reject(err)
      })
  })
}

const formDataService = (url: string, body: any): Promise<any> => {
  return new Promise(function (resolve, reject) {
    axios
      .post(url, body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((data) => {
        resolve(data)
      })
      .catch((err) => {
        console.error(err)
        reject(err)
      })
  })
}

const deleteService = (url: string): Promise<any> => {
  return new Promise(function (resolve, reject) {
    axios
      .delete(url)
      .then((data) => {
        resolve(data)
      })
      .catch((err) => {
        console.error(err)
        reject(err)
      })
  })
}

export const commonService = {
  cancelToken,
  getServiceWithParams,
  postService,
  postServiceParams,
  patchService,
  getServices,
  fileUploadService,
  formDataService,
  deleteService,
  putService,
}
