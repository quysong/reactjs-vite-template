import { useEffect } from 'react';

import { LoadingStyled } from './Loading.styled';

const Loading = ({ visible }: { visible?: boolean }) => {
  useEffect(() => {
    document.body.style.setProperty('overflow', visible ? 'hidden' : 'visible');
  }, [visible]);

  return (
    <>
      {visible ? (
        <LoadingStyled className="loading-block">
          <div>Loading...</div>
        </LoadingStyled>
      ) : null}
    </>
  );
};

export default Loading;
