export class Participant {
  participationId: number;
  userId: number;
  username: string;
  status: string;
}

export class ElectionParticipant {
  electionId: number;
  electionName: string;
  participant: Participant[];
}
