import { repoDetailApi } from "../apiHelpers";
import apiUrls from "../apiUrls";

export const getRepoDetail = async (owner:string, name:string) => {
  let response = await repoDetailApi(apiUrls.search.repoDetail.method, `${owner}/${name}`);
  return response;
};
