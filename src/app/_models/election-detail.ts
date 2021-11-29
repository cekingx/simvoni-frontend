import { Candidate } from "./candidate";
import { Election } from "./election";

export class ElectionDetail extends Election {
  participation_status: string;
  candidates: Candidate[];
}
