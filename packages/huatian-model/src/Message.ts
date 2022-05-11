export enum MessageStatus {
  SENDING,
  SENT,
  RECEIVING,
  RECEIVED,
  READED,
  ERROR
}

export enum MessageType {
  SEND,
  RECEIVED,
  SYSTEM,
  NOTIFY
}

export type Message = TextMessage | IamgeMessage

export interface TextMessage extends MessageData {
  msg: string
}

export interface IamgeMessage extends MessageData {
  url: string
}

interface MessageData {
  id: number,
  status: MessageStatus,
  type: MessageType,
  from: number,
  to: number,
}