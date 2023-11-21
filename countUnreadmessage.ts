import { Message } from "types/member";

export const countUnreadMessages = (messages: Message[]): number => {
  // Assuming  Message type has a 'status' property to show it is read or not
  const unreadMessages = messages.filter(message => message.status === 'unread');
  return unreadMessages.length;
};

