// Handling error from Axios document: https://axios-http.com/docs/handling_errors
export const apiHelper = async (apiDocsPromise: () => Promise<any>) => {
  return apiDocsPromise()
    .then((response: any) => {
      return response;
    })
    .catch((error: any) => {
      if (error.response) {
        console.warn(error.response.data);
        console.warn(error.response.status);
        console.warn(error.response.headers);
      } else if (error.request) {
        console.warn(error.request);
      } else {
        console.warn('Error', error.message);
      }
      console.warn(error.config);
      return error;
    });
};
