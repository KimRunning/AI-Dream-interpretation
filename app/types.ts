export interface DreamContent {
  id: string;
  createdAt: string;
  content: string;
  role: string;
}

export interface Dream {
  dream: any;
  content: DreamContent[];
  _id: string;
}
