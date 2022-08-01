import React, { forwardRef} from "react";
import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";
import './Message.css';

const Message= forwardRef(({message , userName}, ref) => {
    const isUser= userName === message.userName;

  return (
    <div ref={ref} className={`message ${isUser && 'message__user'}`}>
        <Card className={isUser ? "message__userCard" : "message__questCard"}>
      <CardContent>
        <Typography color="black" variant="h5" component="h2">
          {!isUser && `${message.userName || 'Unknown User'}:`} {message.message}
        </Typography>
      </CardContent>
    </Card>
    </div>
    
  );
})

 export default Message;
