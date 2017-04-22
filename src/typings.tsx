export interface Reply {
  value: string;
  next: string;
}

export interface Message {
  id: string;
  user: string;
  value: string;
  
  fromMe?: boolean; // Remove? Extend class where needed
  replies?: Reply[];
  next?: string;
}