import { Candidate } from "./candidate";
import { Election } from "./election";

export class ElectionDetail extends Election {
  participation_status: string;
  from?: string;
  to?: string;
  candidates: Candidate[];
}
