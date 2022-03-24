import config from 'src/config';

const API_V1_BASE_URL = config.api.backendApiUrl;

// Accounts
const ACCOUNTS_LOGIN = 'accounts/login';
const ACCOUNTS_NEW_ACCESS_TOKEN = 'accounts/token';
const ACCOUNTS_LOGOUT = 'accounts/logout';

// Articles
const ARTICLES = 'articles';
const ARTICLES_LIST_ALL = 'users/marshi/articles';

// Assets
const ASSETS_UPLOAD_IMAGE = 'assets/images';

export {
  API_V1_BASE_URL,
  ACCOUNTS_LOGIN,
  ACCOUNTS_NEW_ACCESS_TOKEN,
  ACCOUNTS_LOGOUT,
  ARTICLES,
  ARTICLES_LIST_ALL,
  ASSETS_UPLOAD_IMAGE,
};
