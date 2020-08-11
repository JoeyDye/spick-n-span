import { callbackify } from "util";

export const prevDefault = (e, callback) => {
  e.preventDefault();
  callback();
};
