// this fake data for the conversions 
export const FakeDeals: Deal[] = [
  {
    id: "1",
    deals: [
      {
        between: ["أحمد", "سارة"],
        id: "1",
        createdAt: new Date("2023-04-29T08:00:00Z"),
        from: {
          amount: 100,
          currency: { name: "دينار جزائري", code: "DZD" },
          company: {
            id: "123",
            name: "شركة أ",
            logo: "/wise.jpg",
          },
        },
        to: {
          amount: 200,
          currency: { name: "دولار أمريكي", code: "USD" },
          company: {
            id: "456",
            name: "شركة ب",
            logo: "/post.webp",
          },
        },
        rating: 5,
        status: "opened",
      },
    ],
    conversation: {
      id: "1",
      participants: [
        { name: "أحمد", img: "/person.webp" },
        { name: "سارة", img: "/person.webp" },
      ],
      messages: [
        {
          id: "1",
          sender: { name: "أحمد", img: "/person.webp" },
          recipient: { name: "سارة", img: "/person.webp" },
          message: "مرحبًا سارة، هل تحتاجين إلى تبادل العملات؟",
          createdAt: new Date("2023-07-02T10:00:00Z"),
        },
        {
          id: "2",
          sender: { name: "سارة", img: "/person.webp" },
          recipient: { name: "أحمد", img: "/person.webp" },
          message: "نعم، أحتاج إلى تبادل 500 دولار أمريكي إلى دينار جزائري.",
          createdAt: new Date("2023-07-02T10:05:00Z"),
        },
        {
          id: "3",
          sender: { name: "أحمد", img: "/person.webp" },
          recipient: { name: "سارة", img: "/person.webp" },
          message:
            "ممتاز! يمكنني تقديم لك 500 دينار جزائري مقابل 250 دولار أمريكي.",
          createdAt: new Date("2023-07-02T10:10:00Z"),
        },
        {
          id: "4",
          sender: { name: "سارة", img: "/person.webp" },
          recipient: { name: "أحمد", img: "/person.webp" },
          message: "أنا موافقة على الصفقة. كيف يمكننا إتمامها؟",
          createdAt: new Date("2023-07-02T10:15:00Z"),
        },
        {
          id: "5",
          sender: { name: "أحمد", img: "/person.webp" },
          recipient: { name: "سارة", img: "/person.webp" },
          message:
            "نستطيع التقابل في مقهى المدينة في الساعة 11:00 صباحًا لإتمام الصفقة.",
          createdAt: new Date("2023-07-02T10:20:00Z"),
        },
        {
          id: "6",
          sender: { name: "سارة", img: "/person.webp" },
          recipient: { name: "أحمد", img: "/person.webp" },
          message: "حسنًا، سأكون في المقهى في الساعة 11:00 صباحًا.",
          createdAt: new Date("2023-07-02T10:25:00Z"),
        },
        {
          id: "7",
          sender: { name: "أحمد", img: "/person.webp" },
          recipient: { name: "سارة", img: "/person.webp" },
          message:
            "ممتاز! يمكنني تقديم لك 500 دينار جزائري مقابل 250 دولار أمريكي.",
          createdAt: new Date("2023-07-02T10:10:00Z"),
        },
        {
          id: "8",
          sender: { name: "سارة", img: "/person.webp" },
          recipient: { name: "أحمد", img: "/person.webp" },
          message: "أنا موافقة على الصفقة. كيف يمكننا إتمامها؟",
          createdAt: new Date("2023-07-02T10:15:00Z"),
        },
        {
          id: "9",
          sender: { name: "أحمد", img: "/person.webp" },
          recipient: { name: "سارة", img: "/person.webp" },
          message:
            "نستطيع التقابل في مقهى المدينة في الساعة 11:00 صباحًا لإتمام الصفقة.",
          createdAt: new Date("2023-07-02T10:20:00Z"),
        },
        {
          id: "10",
          sender: { name: "سارة", img: "/person.webp" },
          recipient: { name: "أحمد", img: "/person.webp" },
          message: "حسنًا، سأكون في المقهى في الساعة 11:00 صباحًا.",
          createdAt: new Date("2023-07-02T10:25:00Z"),
        },
        {
          id: "11",
          sender: { name: "أحمد", img: "/person.webp" },
          recipient: { name: "سارة", img: "/person.webp" },
          message:
            "ممتاز! يمكنني تقديم لك 500 دينار جزائري مقابل 250 دولار أمريكي.",
          createdAt: new Date("2023-07-02T10:10:00Z"),
        },
        {
          id: "12",
          sender: { name: "سارة", img: "/person.webp" },
          recipient: { name: "أحمد", img: "/person.webp" },
          message: "أنا موافقة على الصفقة. كيف يمكننا إتمامها؟",
          createdAt: new Date("2023-07-02T10:15:00Z"),
        },
        {
          id: "13",
          sender: { name: "أحمد", img: "/person.webp" },
          recipient: { name: "سارة", img: "/person.webp" },
          message:
            "نستطيع التقابل في مقهى المدينة في الساعة 11:00 صباحًا لإتمام الصفقة.",
          createdAt: new Date("2023-07-02T10:20:00Z"),
        },
        {
          id: "14",
          sender: { name: "سارة", img: "/person.webp" },
          recipient: { name: "أحمد", img: "/person.webp" },
          message: "حسنًا، سأكون في المقهى في الساعة 11:00 صباحًا.",
          createdAt: new Date("2023-07-02T10:25:00Z"),
        },
      ],
      createdAt: new Date("2023-07-02T10:00:00Z"),
    },
  },
  {
    id: "2",
    deals: [
      {
        between: ["أحمد", "سارة"],
        id: "2",
        createdAt: new Date("2023-04-29T08:00:00Z"),
        from: {
          amount: 100,
          currency: { name: "دينار جزائري", code: "DZD" },
          company: {
            id: "123",
            name: "شركة أ",
            logo: "/wise.jpg",
          },
        },
        to: {
          amount: 200,
          currency: { name: "دولار أمريكي", code: "USD" },
          company: {
            id: "456",
            name: "شركة ب",
            logo: "/post.webp",
          },
        },
        rating: 5,
        status: "finished",
      },
    ],
    conversation: {
      id: "1",
      participants: [
        { name: "أحمد", img: "/person.webp" },
        { name: "سارة", img: "/person.webp" },
      ],
      messages: [
        {
          id: "1",
          sender: { name: "أحمد", img: "/person.webp" },
          recipient: { name: "سارة", img: "/person.webp" },
          message: "مرحبًا سارة، هل تحتاجين إلى تبادل العملات؟",
          createdAt: new Date("2023-07-02T10:00:00Z"),
        },
        {
          id: "2",
          sender: { name: "سارة", img: "/person.webp" },
          recipient: { name: "أحمد", img: "/person.webp" },
          message: "نعم، أحتاج إلى تبادل 500 دولار أمريكي إلى دينار جزائري.",
          createdAt: new Date("2023-07-02T10:05:00Z"),
        },
        {
          id: "3",
          sender: { name: "أحمد", img: "/person.webp" },
          recipient: { name: "سارة", img: "/person.webp" },
          message:
            "ممتاز! يمكنني تقديم لك 500 دينار جزائري مقابل 250 دولار أمريكي.",
          createdAt: new Date("2023-07-02T10:10:00Z"),
        },
        {
          id: "4",
          sender: { name: "سارة", img: "/person.webp" },
          recipient: { name: "أحمد", img: "/person.webp" },
          message: "أنا موافقة على الصفقة. كيف يمكننا إتمامها؟",
          createdAt: new Date("2023-07-02T10:15:00Z"),
        },
        {
          id: "5",
          sender: { name: "أحمد", img: "/person.webp" },
          recipient: { name: "سارة", img: "/person.webp" },
          message:
            "نستطيع التقابل في مقهى المدينة في الساعة 11:00 صباحًا لإتمام الصفقة.",
          createdAt: new Date("2023-07-02T10:20:00Z"),
        },
        {
          id: "6",
          sender: { name: "سارة", img: "/person.webp" },
          recipient: { name: "أحمد", img: "/person.webp" },
          message: "حسنًا، سأكون في المقهى في الساعة 11:00 صباحًا.",
          createdAt: new Date("2023-07-02T10:25:00Z"),
        },
      ],
      createdAt: new Date("2023-07-02T10:00:00Z"),
    },
  },
  {
    id: "3",
    deals: [
      {
        between: ["أحمد", "سارة"],
        id: "3",
        createdAt: new Date("2023-04-29T08:00:00Z"),
        from: {
          amount: 100,
          currency: { name: "دينار جزائري", code: "DZD" },
          company: {
            id: "123",
            name: "شركة أ",
            logo: "/wise.jpg",
          },
        },
        to: {
          amount: 200,
          currency: { name: "دولار أمريكي", code: "USD" },
          company: {
            id: "456",
            name: "شركة ب",
            logo: "/post.webp",
          },
        },
        rating: 5,
        status: "closed",
      },
    ],
    conversation: {
      id: "1",
      participants: [
        { name: "أحمد", img: "/person.webp" },
        { name: "سارة", img: "/person.webp" },
      ],
      messages: [
        {
          id: "1",
          sender: { name: "أحمد", img: "/person.webp" },
          recipient: { name: "سارة", img: "/person.webp" },
          message: "مرحبًا سارة، هل تحتاجين إلى تبادل العملات؟",
          createdAt: new Date("2023-07-02T10:00:00Z"),
        },
        {
          id: "2",
          sender: { name: "سارة", img: "/person.webp" },
          recipient: { name: "أحمد", img: "/person.webp" },
          message: "نعم، أحتاج إلى تبادل 500 دولار أمريكي إلى دينار جزائري.",
          createdAt: new Date("2023-07-02T10:05:00Z"),
        },
        {
          id: "3",
          sender: { name: "أحمد", img: "/person.webp" },
          recipient: { name: "سارة", img: "/person.webp" },
          message:
            "ممتاز! يمكنني تقديم لك 500 دينار جزائري مقابل 250 دولار أمريكي.",
          createdAt: new Date("2023-07-02T10:10:00Z"),
        },
        {
          id: "4",
          sender: { name: "سارة", img: "/person.webp" },
          recipient: { name: "أحمد", img: "/person.webp" },
          message: "أنا موافقة على الصفقة. كيف يمكننا إتمامها؟",
          createdAt: new Date("2023-07-02T10:15:00Z"),
        },
        {
          id: "5",
          sender: { name: "أحمد", img: "/person.webp" },
          recipient: { name: "سارة", img: "/person.webp" },
          message:
            "نستطيع التقابل في مقهى المدينة في الساعة 11:00 صباحًا لإتمام الصفقة.",
          createdAt: new Date("2023-07-02T10:20:00Z"),
        },
        {
          id: "6",
          sender: { name: "سارة", img: "/person.webp" },
          recipient: { name: "أحمد", img: "/person.webp" },
          message: "حسنًا، سأكون في المقهى في الساعة 11:00 صباحًا.",
          createdAt: new Date("2023-07-02T10:25:00Z"),
        },
      ],
      createdAt: new Date("2023-07-02T10:00:00Z"),
    },
  },
  {
    id: "4",
    deals: [
      {
        between: ["أحمد", "سارة"],
        id: "4",
        createdAt: new Date("2023-04-29T08:00:00Z"),
        from: {
          amount: 100,
          currency: { name: "دينار جزائري", code: "DZD" },
          company: {
            id: "123",
            name: "شركة أ",
            logo: "/wise.jpg",
          },
        },
        to: {
          amount: 200,
          currency: { name: "دولار أمريكي", code: "USD" },
          company: {
            id: "456",
            name: "شركة ب",
            logo: "/post.webp",
          },
        },
        rating: 5,
        status: "in progress",
      },
    ],
    conversation: {
      id: "1",
      participants: [
        { name: "أحمد", img: "/person.webp" },
        { name: "سارة", img: "/person.webp" },
      ],
      messages: [
        {
          id: "1",
          sender: { name: "أحمد", img: "/person.webp" },
          recipient: { name: "سارة", img: "/person.webp" },
          message: "مرحبًا سارة، هل تحتاجين إلى تبادل العملات؟",
          createdAt: new Date("2023-07-02T10:00:00Z"),
        },
        {
          id: "2",
          sender: { name: "سارة", img: "/person.webp" },
          recipient: { name: "أحمد", img: "/person.webp" },
          message: "نعم، أحتاج إلى تبادل 500 دولار أمريكي إلى دينار جزائري.",
          createdAt: new Date("2023-07-02T10:05:00Z"),
        },
        {
          id: "3",
          sender: { name: "أحمد", img: "/person.webp" },
          recipient: { name: "سارة", img: "/person.webp" },
          message:
            "ممتاز! يمكنني تقديم لك 500 دينار جزائري مقابل 250 دولار أمريكي.",
          createdAt: new Date("2023-07-02T10:10:00Z"),
        },
        {
          id: "4",
          sender: { name: "سارة", img: "/person.webp" },
          recipient: { name: "أحمد", img: "/person.webp" },
          message: "أنا موافقة على الصفقة. كيف يمكننا إتمامها؟",
          createdAt: new Date("2023-07-02T10:15:00Z"),
        },
        {
          id: "5",
          sender: { name: "أحمد", img: "/person.webp" },
          recipient: { name: "سارة", img: "/person.webp" },
          message:
            "نستطيع التقابل في مقهى المدينة في الساعة 11:00 صباحًا لإتمام الصفقة.",
          createdAt: new Date("2023-07-02T10:20:00Z"),
        },
        {
          id: "6",
          sender: { name: "سارة", img: "/person.webp" },
          recipient: { name: "أحمد", img: "/person.webp" },
          message: "حسنًا، سأكون في المقهى في الساعة 11:00 صباحًا.",
          createdAt: new Date("2023-07-02T10:25:00Z"),
        },
      ],
      createdAt: new Date("2023-07-02T10:00:00Z"),
    },
  },
]; 



// this face data for the offer carts
export const FakeOfferCarts: OfferCart[] = [
  {
    id: "1",
    createdAt: new Date("2023-04-29T08:00:00Z"),
    userName: "احمد علي",
    trusted: true,
    city: "لندن",
    userImage: "/person.webp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    likes: [{ name: "جون دو" }, { name: "جين سميث" }],
    comments: [
      {
        id: "1",
        content: "عرض رائع!",
        name: "أليس",
        userImage: "/person.webp",
      },
      {
        id: "2",
        content: "مثير للاهتمام. قد أفكر فيه.",
        name: "بوب",
        userImage: "/person.webp",
      },
    ],
    from: {
      amount: 100,
      currency: { name: "Algerian Dinar", code: "DZD" },
      company: {
        id: "123",
        name: "شركة أ",
        logo: "/wise.jpg",
      },
    },
    to: {
      amount: 200,
      currency: { name: "US Dollar", code: "USD" },
      company: {
        id: "456",
        name: "شركة ب",
        logo: "/post.webp",
      },
    },
  },
  {
    id: "2",
    createdAt: new Date("2023-06-29T10:30:00Z"),
    trusted: false,
    userName: "حسام العربي",
    city: "باريس",
    userImage: "/person.webp",

    description: "Nullam et semper mauris.",
    likes: [
      { name: "أليكس جونسون" },
      { name: "إميلي براون" },
      { name: "مايكل ديفيس" },
    ],
    comments: [
      {
        id: "3",
        content: "ليس صفقة جيدة.",
        name: "كارول",
        userImage: "/person.webp",
      },
    ],
    from: {
      amount: 150,
      currency: { name: "Algerian Dinar", code: "DZD" },

      company: {
        id: "789",
        name: "شركة ج",
        logo: "/post.webp",
      },
    },
    to: {
      amount: 250,
      currency: { name: "US Dollar", code: "USD" },

      company: {
        id: "101112",
        name: "شركة د",
        logo: "/wise.jpg",
      },
    },
  },
  {
    id: "3",
    createdAt: new Date("2023-06-29T12:45:00Z"),
    trusted: true,
    userName: "سعيد بن مراد",
    city: "نيويورك",
    userImage: "/person.webp",
    description: "Vivamus tempus elementum mauris ut placerat.",
    likes: [{ name: "سارة جونسون" }, { name: "روبرت سميث" }],
    comments: [
      {
        id: "4",
        content: "عرض مذهل!",
        name: "ديفيد",
        userImage: "/person.webp",
      },
    ],
    from: {
      amount: 200,
      currency: { name: "Algerian Dinar", code: "DZD" },

      company: {
        id: "131415",
        name: "شركة ه",
        logo: "/wise.jpg",
      },
    },
    to: {
      amount: 300,
      currency: { name: "US Dollar", code: "USD" },

      company: {
        id: "161718",
        name: "شركة ف",
        logo: "/post.webp",
      },
    },
  },
  {
    id: "4",
    createdAt: new Date("2023-06-29T15:20:00Z"),
    trusted: true,
    city: "برلين",
    userName: "اسماعيل ",
    userImage: "/person.webp",

    description:
      "Maecenas auctor, dui et placerat euismod, turpis risus egestas justo.",
    likes: [
      { name: "جيسيكا براون" },
      { name: "دانيال ديفيس" },
      { name: "صوفيا جونسون" },
    ],
    comments: [
      {
        id: "5",
        content: "أنا مهتم!",
        name: "إيما",
        userImage: "/person.webp",
      },
      {
        id: "6",
        content: "سعر رائع!",
        name: "أوليفر",
        userImage: "/person.webp",
      },
    ],
    from: {
      amount: 180,
      currency: { name: "Algerian Dinar", code: "DZD" },

      company: {
        id: "192021",
        name: "شركة ج",
        logo: "/post.webp",
      },
    },
    to: {
      amount: 280,
      currency: { name: "US Dollar", code: "USD" },

      company: {
        id: "222324",
        name: "شركة هـ",
        logo: "/wise.jpg",
      },
    },
  },
  {
    id: "5",
    createdAt: new Date("2023-06-29T17:10:00Z"),
    trusted: true,
    userName: "عبد الواحد",
    city: "طوكيو",
    userImage: "/person.webp",

    description:
      "Praesent sed lorem sollicitudin, lobortis mi eget, tristique lectus.",
    likes: [
      { name: "ليام جونسون" },
      { name: "أوليفيا سميث" },
      { name: "نوح ديفيس" },
    ],
    comments: [],
    from: {
      amount: 120,
      currency: { name: "Algerian Dinar", code: "DZD" },

      company: {
        id: "252627",
        name: "شركة أ",
        logo: "/wise.jpg",
      },
    },
    to: {
      amount: 220,
      currency: { name: "US Dollar", code: "USD" },

      company: {
        id: "282930",
        name: "شركة ج",
        logo: "/post.webp",
      },
    },
  },
];
