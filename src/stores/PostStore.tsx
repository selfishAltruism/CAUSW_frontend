import { memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { action, computed, flow, makeObservable, observable } from 'mobx';
import { useRootStore } from './RootStore';
import { PostRepoImpl as Repo } from './repositories/PostRepo';
import { PostRequestDTO } from './repositories/PostType';

export class PostStore {
  rootStore: Store.Root;
  postId?: string;
  posts: Model.Post[] = [];
  post?: Model.Post;

  constructor(rootStore: Store.Root) {
    makeObservable(this, {
      boardId: computed,
      postId: observable,
      posts: observable,
      post: observable,

      fetch: flow.bound,
      fetchById: flow.bound,
      create: flow.bound,
      reset: action.bound,
      resetDetail: action.bound,
    });

    this.rootStore = rootStore;
  }

  *fetch(): Generator {
    this.posts = (yield Repo.fetch(this.boardId)) as Model.Post[];
  }

  *fetchById(postId: string): Generator {
    this.postId = postId;
    this.post = (yield Repo.fetchById(postId)) as Model.Post;
  }

  *create(data: Partial<PostRequestDTO>): Generator {
    const body = { ...data, boardId: this.boardId } as PostRequestDTO;

    this.post = (yield Repo.create(body)) as Model.Post;

    return this.post;
  }

  reset(): void {
    this.posts = [];
  }

  resetDetail(): void {
    this.post = undefined;
  }

  get boardId(): string {
    return this.rootStore.board.boardId ?? '';
  }
}

export const PostProvider: React.FC = memo(({ children }) => {
  const { boardId, postId } = useParams<{ boardId: string; postId: string }>();
  const { board, post } = useRootStore();

  useEffect(() => {
    const init = async () => {
      if (boardId) {
        board.boardId = boardId;

        await board.fetch();
        if (!postId) await post.fetch();
      }
      if (postId) await post.fetchById(postId);
    };

    init();

    return () => {
      post.reset();
      post.resetDetail();
    };
  }, [boardId, postId]);

  return <>{children}</>;
});
