export interface repoDetailInterface {
  full_name: string;
  name: string;
  open_issues: number;
  default_branch: string;
  html_url: string;
  owner: ownerInterface;
}

export interface ownerInterface {
  html_url: string;
}

export interface repoDetailModalInterface {
  data: repoDetailInterface;
}
