export interface IAppBody<T> {
  body: T;
}

export interface IAppPagination {
  size?: string;
  limit?: string;
  search?: string;
}

export interface IAppParams {
  params?: IAppPagination;
}

export interface IAppResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
