export const REGEX_USER = /^[A-z][A-z0-9-_]{3,23}$/;
export const REGEX_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export const API_LOGIN = "/login";
export const API_REGISTER = "/user/save";

export const API_WARRANTY_CATEGORIES = "/warrantycategories"

export const API_WARRANTIES = "/warranties";
export const API_WARRANTY_ADD = "/warranty/add";