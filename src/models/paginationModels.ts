export interface paginationInterface {
  totalResults: number;
  page: number;
  setPage: Function;
}

export interface paginationModalInterface{
    data: paginationInterface
}