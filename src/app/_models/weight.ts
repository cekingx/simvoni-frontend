export class Weight {
  name: string;
  weight: number;
}

export class ElectionWeight {
  electionId: number;
  electionName: string;
  weight: Weight[];
}
