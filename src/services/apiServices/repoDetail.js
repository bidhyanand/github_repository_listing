import { repoDetailApi } from "../apiHelpers";
import apiUrls from "../apiUrls";

export const getRepoDetail = async (owner, name) => {
  let response = await repoDetailApi(apiUrls.search.repoDetail.method, `${owner}/${name}`);
  return response;
};
