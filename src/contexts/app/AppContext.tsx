import React, { PropsWithChildren, useContext, useEffect, useState } from 'react';

import ErrorDialog, { ErrorDialogProps } from '@/components/dialog/error/Error';
import Loading from '@/components/loading/Loading';

import { storageHelper } from '@/helpers/storage';

export const AppContext = React.createContext({
  // TODO: update these type `any`
  context: {} as any,
  setContext: (_context: any) => {},
  appLoading: false,
  setAppLoading: (_loading: boolean) => {},
  errorDialog: {} as ErrorDialogProps,
  setErrorDialog: (_data: ErrorDialogProps) => {},
});

export const useAppContext = () => {
  return useContext(AppContext);
};

const initialContext = storageHelper.appContext.get();
const AppContextProvider = (props: PropsWithChildren<any>) => {
  const [context, setContext] = useState<any>(initialContext);
  const [appLoading, setAppLoading] = useState(false);
  const [errorDialog, setErrorDialog] = useState<ErrorDialogProps>({
    visible: false,
  });

  useEffect(() => {
    storageHelper.appContext.set(context);
  }, [context]);

  return (
    <>
      <Loading visible={appLoading} />
      <ErrorDialog
        onClose={() =>
          setErrorDialog({
            visible: false,
          })
        }
        {...errorDialog}
      />
      <AppContext.Provider
        value={{
          context,
          setContext,
          appLoading,
          setAppLoading,
          errorDialog,
          setErrorDialog,
        }}
      >
        {props.children}
      </AppContext.Provider>
    </>
  );
};

export default AppContextProvider;
