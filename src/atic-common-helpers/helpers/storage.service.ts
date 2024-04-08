const setUserData = (key: string, data: any) => {
  localStorage.setItem(key, data)
}

export const storageService = {
  setUserData,
}
