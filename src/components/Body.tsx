import styled from 'styled-components';
import Items from './Items';
import Total from './Total'

const BodyWrapper = styled.div`
  background: #4b4a4a;
  margin: 16px;
  padding: 16px 24px;
  border-radius: 8px;
`;

const Body = () => {
  return (
    <BodyWrapper>
      <Items />
      <Total />
    </BodyWrapper>
  );
};

export default Body;
