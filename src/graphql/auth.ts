const STORAGE_KEY = "@@token";

export function getAuthCode() {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(STORAGE_KEY);
}

export function setAuthCode(token: string) {
  return token
    ? window.localStorage.setItem(STORAGE_KEY, token)
    : window.localStorage.removeItem(STORAGE_KEY);
}
