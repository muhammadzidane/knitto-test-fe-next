export interface IAppBody<T> {
  body: T;
}

export interface IAppPagination {
  search?: string;
  limit?: number;
  size?: number;
}

export interface IAppParams {
  params?: IAppPagination;
}

export interface IAppResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
