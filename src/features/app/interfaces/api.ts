export interface IAppBody<T> {
  body: T;
}

export interface IAppPagination {
  _limit?: number;
  _start?: number;
}

export interface IAppParams {
  params?: IAppPagination;
}

export interface IAppResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
