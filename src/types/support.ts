export interface Artist {
  id: string;
  name: string;
  description: string;
}

export interface SupportData {
  artists: Artist[];
}