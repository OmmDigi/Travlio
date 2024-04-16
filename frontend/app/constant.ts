export const GLOBAL_X_PADDING = "px-24 sm:px-3";

export let BASE_URL = "http://localhost:3000";
export let API_BASE_URL = "http://localhost:8080";

export const SEND_EMAIL_API = `${API_BASE_URL}/sendemail`

const env = process.env.NODE_ENV;
if(env == "development"){
  // do something
  BASE_URL = "http://localhost:3000";
  API_BASE_URL = "http://localhost:8080";
}
else if (env == "production"){
 // do something
 BASE_URL = "https://travlio.in";
 API_BASE_URL = "https://travliobackend.vercel.app";
}