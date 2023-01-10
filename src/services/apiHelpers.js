import axios from "axios";

export const repoSearchUrl = "https://api.github.com/search/repositories?q=";
export const repoDetailUrl = "https://api.github.com/repos/";

export const repoSearchAPi = async (method, data) => {
  let response = await axios({
    method: method,
    url: `${repoSearchUrl}${data}`,
    // data: data,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const repoDetailApi = async (method, data) => {
  let response = await axios({
    method: method,
    url: `${repoDetailUrl}${data}`,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};
