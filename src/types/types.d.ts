interface CartComment {
  id: string;
  content: string;
  name: string;
  userImage: string;
}
interface Like {
  name: string;
}

interface OfferCart {
  id: string;
  userName: string;
  createdAt: Date;
  trusted: boolean;
  city: string;
  userImage: string;
  description: string;
  likes: Like[];
  comments: CartComment[];
  from: {
    amount: number;
    currency: Currency;
    company: {
      id: string;
      name: string;
      logo: string;
    };
  };
  to: {
    amount: number;
    currency: Currency;
    company: {
      id: string;
      name: string;
      logo: string;
    };
  };
}

interface Currency {
  name: string;
  code: string;
}


interface UserInMessage {
name: string;
img:string
}

interface ChatMessage {
  id: string;
  sender: UserInMessage;
  recipient: UserInMessage;
  message: string;
  createdAt: Date;
}
interface Conversation {
  id: string;
  participants: UserInMessage[];
  messages: ChatMessage[];
  createdAt: Date;
}
interface DealDetails {
  between: [string, string];
  id: string;
  status: "opened" | "in progress" | "closed" | "finished";
  from: {
    amount: number;
    currency: Currency;
    company: {
      id: string;
      name: string;
      logo: string;
    };
  };
  to: {
    amount: number;
    currency: Currency;
    company: {
      id: string;
      name: string;
      logo: string;
    };
  };
  createdAt: Date;
  rating: number; // A number from 1 to 5 representing the rating
}


interface Deal {
  id:string
  conversation: Conversation;
  deals: DealDetails[];
}