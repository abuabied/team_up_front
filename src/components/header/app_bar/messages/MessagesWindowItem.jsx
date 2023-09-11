import { Container, List, ListItem } from "@mui/material";

export const MessagesWindowItem = ({ msg }) => {
  return (
    <List>
      <ListItem>
        <h4>{msg?.msgFrom}</h4>
      </ListItem>
      <Container sx={{display: "flex"}} >
        <ListItem>
          <h4>{msg?.msgTime}</h4>
        </ListItem>
        <ListItem>
          <h4>{msg?.msgContent}</h4>
        </ListItem>
      </Container>
    </List>
  );
};
