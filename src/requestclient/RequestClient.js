import axios from "axios";
const DEFAULT_CONFIG = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.102 Safari/537.36",
  Origin: "https://act.hoyolab.com",
  Referer: "https://act.hoyolab.com/",
  "Accept": "application/json, text/plain, */*",
  "Accept-Encoding": "gzip, deflate",
  "Accept-Language": "en-US;q=0.8",
};
const X_APP_CONFIG = {
  "x-rpc-app_version": "1.5.0",
  "x-rpc-client_type": "5",
  "x-rpc-language": "en-us",
};
function parseCookies(cookies) {
  let finalCookieString = ''
  for (let [key, value] of Object.entries(cookies)) {
    finalCookieString += `${key}=${value}; `
  }
  finalCookieString += "mi18nLang=en-us"
  return finalCookieString
}
class RequestClient {
  constructor(cookies) {
    this.cookies = parseCookies(cookies)
    this.axiosClient = axios.create({
      headers: {
        ...DEFAULT_CONFIG,
        "Cookie": this.cookies,
      },
      withCredentials: true,
      proxy: {
        host: "localhost",
        port: '8000'
      }
    })
  }
  /**
 * 
 * @param {string} method 
 * @param {string} url 
 * @param {string} _headers 
 * @param {string} data 
 * @param {*} _config 
 * @returns 
 */
  async fetch(method, url, _headers, data = {}, _config) {
    axios.defaults.withCredentials = true
    if (_config.X_APP) {
      Object.assign(_headers, X_APP_CONFIG);
    }
    const config = {
      method,
      url,
      headers: {
        ..._headers,
      },
      data,
    };
    try {
      const dataResponse = await this.axiosClient(config);
      return dataResponse
    } catch (e) {
    }
  }
}
export default RequestClient;