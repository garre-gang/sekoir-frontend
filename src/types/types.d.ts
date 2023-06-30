interface CartComment {
  id: string;
  content: string;
  name: string;
  userImage: string;
}
interface Like {
  name: string;
}
interface Currency {
  name: string;
  code: string;
}
interface OfferCart {
  id: string;
  userName: string;
  createdAt: string;
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
