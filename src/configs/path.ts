export enum PAGE_URL {
  SignIn = '/signin',
  SignUp = '/singup',

  Home = '/home',
  Circle = '/circle',
  Board = '/boards',
  Setting = '/settings',

  CircleJoin = '/circle/:circleId/join',

  Post = '/boards/:boardId',
  PostWrite = '/posts/write',
  PostDetail = '/posts/:postId',

  Err404 = '/error/404',
}
