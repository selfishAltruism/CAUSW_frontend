import { useEffect } from 'react';

import { PageUiStoreImpl } from './BoardListPageUiStore';
import { Boards } from './components';

import { BodyScreen, GNB, Header, PageBody, PageStoreHOC, UniformLogo } from '@/components';
import { usePageUiStore } from '@/v2/hooks';

const BoardListPage: React.FC = () => {
  const { fetch } = usePageUiStore<PageUiStore.BoardList>();

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <Header title="게시판 목록" RightComponent={UniformLogo} />
      <PageBody>
        <BodyScreen>
          <Boards />
        </BodyScreen>
      </PageBody>
      <GNB />
    </>
  );
};

export default PageStoreHOC(<BoardListPage />, { store: PageUiStoreImpl });
