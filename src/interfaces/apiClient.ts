export interface ApiResponseError {
  response?: {
    data?: { [key: string]: any };
    status?: number;
    headers?: { [key: string]: any };
  };
  request?: { [key: string]: any };
  message?: string;
  config?: { [key: string]: any };
}
