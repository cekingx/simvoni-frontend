import { Candidate } from "./candidate";
import { Election } from "./election";

export class EndedCandidate extends Candidate {
  vote_count: number;
}

export class EndedElection extends Election {
  winner: string;
  candidates: EndedCandidate[];
  votes: number;
  abstains: number;
  total: number;
}
