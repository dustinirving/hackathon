import styled from 'styled-components';
import SVG from './SVG';

const HeaderWrapper = styled.div`
  background: #1e1e1e;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
`;

const HeaderText = styled.h1`
  color: #ffffff;
  font-weight: 500;
  margin-left: 10px;
  font-size: 28px;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <SVG />
        <HeaderText>Solink Pricing Calculator</HeaderText>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
