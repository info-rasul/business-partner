import moment from "moment";

export enum Status {
  PRESUMED_DEAD = "Presumed dead",
  ALIVE = "Alive",
  DECEASED = "Deceased",
  UNKNOWN = "Unknown"
}

export interface Character {
  char_id: number;
  name: string;
  birthday: moment.Moment;
  occupation: [] | Array<string>;
  img: string;
  status: Status;
  nickname: string;
  appearance: [] | Array<number>;
  portrayed: string;
  category: string;
  better_call_saul_appearance: [] | Array<number>;
}
