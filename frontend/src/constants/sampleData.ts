export type sampleChatsType = {
  avatar: string;
  name: string;
  _id: string;
  groupChat: boolean;
  members: string[];
};

export type sampleSearchDataType = {
  _id: string;
  avatar: string;
  name: string;
};

export type sampleNotificationsType = {
  sender: {
    avatar: string;
    name: string;
  };
  _id: string;
};

export type sampleMessagesType = {
  attachments: {
    public_id: string;
    url: string;
  }[];
  content: string;
  _id: string;
  sender: {
    _id: string;
    name: string;
  };
  chat: string;
  createdAt: string;
};

export const sampleChats: sampleChatsType[] = [
  {
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    name: "John Doe",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    name: "Jane Doe",
    _id: "2",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: "",
    name: "Jane Foster",
    _id: "3",
    groupChat: false,
    members: ["1", "2"],
  },
];

export const sampleSearchData: sampleSearchDataType[] = [
  {
    _id: "1",
    avatar: "https://randomuser.me/api/portraits",
    name: "John Doe",
  },
  {
    _id: "2",
    avatar: "https://avatars.githubusercontent.com/u/116663682?v=4",
    name: "Dibakar Ghosh",
  },
  {
    _id: "3",
    avatar: "",
    name: "Jane Foster",
  },
];

export const sampleNotifications: sampleNotificationsType[] = [
  {
    sender: {
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Jhon Doe",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: "",
      name: "Dibakar Ghosh",
    },
    _id: "2",
  },
  
];

export const sampleMessages: sampleMessagesType[] = [
  {
    attachments: [
      {
        public_id: "sample_id_111",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "Hey Whats up? mkmf anfea fsa ose fsaednfsaenfcase zfvu gnvsg fhnsuirghrius ",
    _id: "fhdfsdflkjnfjs",
    sender: {
      _id: "13",
      name: "John Doe",
    },
    chat: "chatId",
    createdAt: "2024-11-21T12:00:00.000Z",
  },
  {
    attachments: [
      {
        public_id: "sample_id_222",
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      },
    ],
    content: "I am good fda fusjhfiusfvbsigbskfi vbsdfyk ghobsiyubsikbsyi njfea;lnesafneas;nieuhfniefu  uef hna",
    _id: "fhdfsdflkjnfjs",
    sender: {
      _id: "1",
      name: "Jane Foster",
    },
    chat: "chatId",
    createdAt: "2024-11-22T12:00:00.000Z",
  }
]