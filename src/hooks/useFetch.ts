import { useCallback, useState } from 'react';

import { useAppContext } from '@/contexts/app/AppContext';
import { ApiResponseError } from '@/interfaces/apiClient';

interface UseFetchProps {
  customLoading?: boolean;
  customHandleError?: boolean;
  requestPromise: (data?: any) => Promise<any>;
}
const useFetchData = ({ customLoading, customHandleError, requestPromise }: UseFetchProps) => {
  const { setErrorDialog, setAppLoading } = useAppContext();

  const handleWarningError = (error: ApiResponseError) => {
    // Handling error from Axios document: https://axios-http.com/docs/handling_errors
    if (error.response) {
      console.warn('error.response', error.response);
    } else if (error.request) {
      console.warn('error.request', error.request);
    } else {
      console.warn('error.message', error.message);
    }
    console.warn('error.config', error.config);
  };
  const callAPI = useCallback(
    async (data?: any) => {
      try {
        if (!customLoading) {
          setAppLoading(true);
        }
        const result = await requestPromise(data);
        return result;
      } catch (e) {
        const error = e as ApiResponseError;
        handleWarningError(error);

        if (customHandleError) {
          throw error;
        }
        setErrorDialog({ visible: true });
      } finally {
        if (!customLoading) {
          setAppLoading(false);
        }
      }
    },
    [customHandleError, customLoading, requestPromise, setAppLoading, setErrorDialog]
  );
  return { callAPI };
};

export default useFetchData;
