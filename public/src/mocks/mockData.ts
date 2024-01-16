export const contentList = [
  {
    id: '0',
    title: 'post_title',
    writerName: 'post_writerName',
    writerAdmissionYear: 19,
    writerProfileImage: 'content_writerProfileImage | null',
    content: 'content',
    createdAt: new Date('2024-01-11T15:34'),
    updatedAt: new Date(),
    numComment: 0,
    updatable: false,
    deletable: false,
    isDeleted: false,
  },
  {
    id: '1',
    title: 'post_title2',
    writerName: 'post_writerName2',
    writerAdmissionYear: 20,
    writerProfileImage: 'content_writerProfileImage2 | null',
    content: 'content2',
    createdAt: new Date('2024-01-12T15:34'),
    updatedAt: new Date(),
    numComment: 2,
    updatable: false,
    deletable: false,
    isDeleted: false,
  },
];

export const commentList = {
  last: false,
  content: [
    {
      postId: '0',
      id: '0',
      writerAdmissionYear: 19,
      writerName: 'writer_name',
      writerProfileImage: 'writerProfileImage | null',
      content: 'comment_content',
      createdAt: '2024-01-12T15:34',
      updatedAt: '2024-01-13T15:34',
      numChildComment: 1,
      updatable: false,
      deletable: false,
      isDeleted: false,
    },
    {
      postId: '0',
      id: '1',
      writerAdmissionYear: 19,
      writerName: 'writer_name',
      writerProfileImage: 'writerProfileImage | null',
      content: 'comment_content',
      createdAt: '2024-01-12T15:34',
      updatedAt: '2024-01-13T15:34',
      numChildComment: 1,
      updatable: false,
      deletable: false,
      isDeleted: false,
    },
  ],
};

export const lockerLocations = {
  lockerLocations: [
    {
      enableLockerCount: 0,
      id: 'string',
      name: 'string',
      totalLockerCount: 0,
    },
  ],
  myLocker: {
    expireAt: 'string',
    id: 'string',
    isActive: true,
    isMine: true,
    lockerNumber: 'string',
    updatedAt: '2024-01-16T09:08:00.093Z',
  },
};
