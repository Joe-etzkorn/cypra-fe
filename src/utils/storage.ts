const set = (key: string, value: any) => {
  try {
    const serializedValue = JSON.stringify(value)
    localStorage.setItem(key, serializedValue)
  } catch {
    return null
  }
}

const get = (key: string) => {
  try {
    const serializedValue = localStorage.getItem(key)
    if (serializedValue !== null) {
      return JSON.parse(serializedValue)
    }
    return null
  } catch {
    return null
  }
}

const remove = (key: string) => {
  try {
    localStorage.removeItem(key)
  } catch {
    return null
  }
}

export const localStore = { set, get, remove };
