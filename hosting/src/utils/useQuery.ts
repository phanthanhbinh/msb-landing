import moment from "moment";
import { useLocation } from "react-router-dom";
import { RegUtil } from "utils/RegUtils";

export function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export function getQueryParams(params: URLSearchParams) {
  let paramObj = {};
  var keys = params.keys();
  for (var key of keys) {
    let value = params.get(key);
    if (value != null && value.includes(",")) {
      paramObj = { ...paramObj, [key]: value.split(",") };
    } else if (value != null && RegUtil.UTC.test(value)) {
      paramObj = { ...paramObj, [key]: new Date(value) };
    } else {
      paramObj = { ...paramObj, [key]: value };
    }
  }
  return paramObj;
}

export function getQueryParamsFromQueryString(params: { [key: string]: string | (string | null)[] | null }) {
  let paramObj = {};
  for (var key of Object.keys(params)) {
    let value = params[key];
    if (Array.isArray(value)) {
      return paramObj;
    }
    if (value != null && value.includes(",")) {
      paramObj = { ...paramObj, [key]: value.split(",") };
    } else if (value != null && RegUtil.UTC.test(value)) {
      paramObj = { ...paramObj, [key]: new Date(value) };
    } else {
      paramObj = { ...paramObj, [key]: value };
    }
  }
  return paramObj;
}
export function getParamsFromQuery(params: { [key: string]: string | (string | null)[] | null }, initParams: any) {
  let paramObj = {};
  let keyParamInits = Object.keys(initParams);
  for (var key of Object.keys(params)) {
    let value = params[key];
    if (Array.isArray(value)) {
      return paramObj;
    }
    if (value != null) {
      // eslint-disable-next-line
      let keyFind = keyParamInits.find((a: any) => a === key);
      if (keyFind) {
        let valueInitParam = initParams[keyFind];
        if (valueInitParam && Array.isArray(valueInitParam)) {
          paramObj = { ...paramObj, [key]: value.split(",") };
        } else {
          paramObj = { ...paramObj, [key]: value };
        }
      }
    } else if (value != null && RegUtil.UTC.test(value)) {
      paramObj = { ...paramObj, [key]: new Date(value) };
    } else {
      paramObj = { ...paramObj, [key]: value };
    }
  }
  return paramObj;
}

export const generateQuery = (obj: any) => {
  if (obj !== undefined) {
    let a: string = Object.keys(obj)
      .map((key, index) => {
        let url = "";
        if (obj[key] !== undefined && obj[key] !== null && obj[key] !== "" && obj[key].length !== 0) {
          let value = obj[key];
          if (obj[key] instanceof Array) {
            value = obj[key].join(",");
          }
          if (obj[key] instanceof Date) {
            value = moment(obj[key]).utc().format();
          }
          if (moment.isMoment(obj[key])) {
            value = obj[key].utc().format();
          }
          url = key + "=" + encodeURIComponent(value) + "&";
        }
        return url;
      })
      .join("");
    if (a.charAt(a.length - 1) === "&") {
      a = a.substring(0, a.length - 1);
    }
    return a;
  }
  return "";
};
