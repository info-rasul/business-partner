import moment from "moment";

export enum EventName {
  BILL_CREATION = "BILL_CREATION",
  NEW_TRANSACTION = "NEW_TRANSACTION",
  REFUND = "REFUND"
}

export enum EventDescription {
  BILL_CREATION = "Перевод",
  NEW_TRANSACTION = "Заказ",
  REFUND = "Возврат"
}

export enum Type {
  CASUAL = "CASUAL",
  PURCHASE_BILL = "PURCHASE_BILL",
  PURCHASE = "PURCHASE",
  REFUND = "REFUND"
}

enum Currency {
  RUB = "RUB"
}

export enum GroupProperty {
  CREATED_AT = "created_at"
}

export interface Transaction {
  event_id: number;
  event_name: EventName;
  type: Type;
  amount: number;
  currency: Currency;
  description: string | null;
  account_number: string | null;
  created_at: moment.Moment;
}
