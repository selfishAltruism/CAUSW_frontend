import { makeAutoObservable } from 'mobx';

import { AuthRepoImpl as Repo } from '@/stores/repositories/AuthRepo';
import { RootStoreInstance } from '@/stores/RootStore';

export class SignInPageUiStore {
  rootStore: Store.Root;

  constructor(rootStore: Store.Root) {
    this.rootStore = rootStore;
    makeAutoObservable(this, {}, { autoBind: true });
  }

  *signIn(body: User.SignInRequestDto): Generator {
    try {
      yield Repo.signIn(body);
      this.authStore.isSignIn = true;

      return { success: true };
    } catch (err) {
      this.authStore.isSignIn = false;
      return err;
    }
  }

  get authStore(): Store.Auth {
    return this.rootStore.auth;
  }
}

export const PageUiStoreImpl = new SignInPageUiStore(RootStoreInstance);
