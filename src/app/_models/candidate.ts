export class Candidate {
  id: number;
  name: string;
  visi: string;
  misi: Array<string>;
  pengalaman: Array<string>;
}

export class AddCandidateDto {
  name: string;
  visi: string;
  misi: Array<string>;
  pengalaman: Array<string>;
}
