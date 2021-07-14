import styled from 'styled-components';

const Wrapper = styled.div`
  color: #fff;
  padding: 15px 0px;
`;

const Form = styled.form``;

const Input = styled.input``;

const List = styled.ul`
  list-style-type: none;
`;

const ListItem = styled.li``;

const Label = styled.label``;

interface ItemProps {
  name: string;
}

const Item = ({ name }: ItemProps) => {
  return (
    <Wrapper>
      {name}
      <Form>
        <List>
          <ListItem>
            <Label>Retention (days)</Label>
            <Input />
          </ListItem>
          <ListItem>
            <Label>Bitrate (Mbps)</Label>
            <Input />
          </ListItem>
          <ListItem>
            <Label># of Cameras</Label>
            <Input />
          </ListItem>
          <ListItem>
            <Label>Bitrate (Mbps)</Label>
            <Input />
          </ListItem>
        </List>
      </Form>
    </Wrapper>
  );
};

export default Item;
