export class Weight {
  id: number;
  name: string;
  weight: number;
}

export class ElectionWeight {
  electionId: number;
  electionName: string;
  weight: Weight[];
}
