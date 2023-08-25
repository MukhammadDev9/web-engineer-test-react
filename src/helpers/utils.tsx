export const getLocaleStorage = (name: string) => localStorage.getItem(name)

export const setLocaleStorage = (name: string, item: any) => localStorage.setItem(name, item)

export const removeLocalItem = (name: string) => localStorage.removeItem(name)

export const clearLocalStorage = () => localStorage.clear()
