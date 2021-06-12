import { Candidate } from "./candidate";
import { Election } from "./election";

export class ElectionDetail extends Election {
  candidates: Candidate[];
}
