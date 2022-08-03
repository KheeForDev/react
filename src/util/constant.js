export const REGEX_USER = /^[A-z][A-z0-9-_]{3,23}$/;
export const REGEX_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export const TEXTAREA_MAX_LENGTH = 255;

export const DEMO_ADMIN_USERNAME = "demo_admin";
export const DEMO_ADMIN_PASSWORD = "password";
export const DEMO_USER_USERNAME = "demo_user";
export const DEMO_USER_PASSWORD = "password";

export const API_LOGIN = "/login";
export const API_REGISTER = "/user/save";

export const API_WARRANTY_CATEGORIES = "/warrantycategories"

export const API_WARRANTIES = "/warranties";
export const API_WARRANTY_GET = "/warranty/get"
export const API_WARRANTY_ADD = "/warranty/add";
export const API_WARRANTY_DELETE = "/warranty/delete";
export const API_WARRANTY_UPDATE = "/warranty/update";