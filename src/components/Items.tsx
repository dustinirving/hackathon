import styled from 'styled-components';
import Item from './Item';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  
`;

const items = ['Site 1', 'Site 2', 'Site 3', 'Site 4', 'Site 5', 'Site 6']
const Items = () => {
  return (
    <Wrapper>
      {items.map((item) => {
        return <Item name={item} />;
      })}
    </Wrapper>
  );
};

export default Items;
