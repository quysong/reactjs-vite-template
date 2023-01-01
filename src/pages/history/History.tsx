import { useNavigate } from 'react-router-dom';

import Menu from '@/components/menu/Menu';

import { HistoryWrapperStyled } from './History.styled';

const History = () => {
  const navigate = useNavigate();

  return (
    <HistoryWrapperStyled>
      <Menu />
      <h1>History</h1>
      <p>This is an opinionated starting point, to get you going with React.</p>
      <p>It uses:</p>
      <br />
      <p>Vite</p>
      <p>TypeScript</p>
      <p>ESlint</p>
      <p>Prettier</p>
      <p>React Router</p>
      <p>SCSS</p>
      <p>Styled component</p>
      <p>Jest</p>
      <hr />
      <button type="button" onClick={() => navigate(-1)}>
        Back
      </button>
    </HistoryWrapperStyled>
  );
};

export default History;
