import { Button, NavButtonWrapper } from '@/v2/components';
import { usePageUiStore } from '@/v2/hooks';

export const Nav: React.FC = () => {
  usePageUiStore<PageUiStore.SettingPassword>();
  return (
    <NavButtonWrapper>
      <Button>비밀번호 변경</Button>
    </NavButtonWrapper>
  );
};
