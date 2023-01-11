import { repoSearchAPi } from "../apiHelpers";
import apiUrls from "../apiUrls";

export const getSearchedRepositories = async (id:any) => {
  let response = await repoSearchAPi(apiUrls.search.repoSearch.method, id);
  return response;
};
