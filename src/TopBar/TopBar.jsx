import styled from 'styled-components';

const TopBarWrapper = styled.div`
  height: 80px;
  background-color: #f49f1c;
  color: #030e4f;
  padding: 8px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 36px;
    font-weight: 700;
  }

  ul {
    display: flex;
  }

  li {
    font-weight: 400;
    font-size: 18px;
    list-style-type: none;
    padding: 8px 12px;
    margin: 0 6px;
    cursor: pointer;
  }
`;

const TopBar = () => {
  return (
    <TopBarWrapper>
      <h1>TOORNEY</h1>
      <ul>
        <li>HOME</li>
        <li>CREATE</li>
        <li>SIGN IN</li>
      </ul>
    </TopBarWrapper>
  );
};

export default TopBar;
