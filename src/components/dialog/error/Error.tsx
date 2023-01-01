import { ReactNode } from 'react';

import { ErrorDialogStyled, ErrorDialogWrapper } from './Error.styled';

export interface ErrorDialogProps {
  visible: boolean;
  title?: string;
  description?: string | ReactNode;
  footer?: ReactNode;
  onClose?: () => void;
}
const ErrorDialog = ({
  visible,
  title = 'ERROR',
  description = 'Internal server error',
  footer,
  onClose,
}: ErrorDialogProps) => {
  return (
    <>
      {visible ? (
        <ErrorDialogWrapper>
          <ErrorDialogStyled>
            <div>
              <h3>{title || <>&nbsp;</>}</h3>
            </div>
            {description ? <div>{description}</div> : null}
            {footer || null}
            <button type="button" onClick={onClose}>
              Close
            </button>
          </ErrorDialogStyled>
        </ErrorDialogWrapper>
      ) : null}
    </>
  );
};

export default ErrorDialog;
