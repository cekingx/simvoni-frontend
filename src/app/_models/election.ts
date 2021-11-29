import { Candidate } from "./candidate";

export class Election {
  id: number;
  name: string;
  description: string;
  start: string;
  end: string;
  status: string;
  ea: string;
  candidates: Array<Candidate>
}
