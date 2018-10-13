const isProduction = process.env.NODE_ENV === 'production';

export const TCMARVEL_API_BASE_URL = isProduction ? 'https://tc-marvel-api.herokuapp.com/api' : 'http://localhost:3001/api';
export const TC_API_BASE_URL = 'https://api.topcoder.com';
export const MARVELAPP_GQL_URL = 'https://api.marvelapp.com/graphql';
export const MAIL_SENDER = 'mahestro.topcoder@gmail.com';
export const MAIL_RECEIVER = 'mahestro.topcoder@gmail.com';
