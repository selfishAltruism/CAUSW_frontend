import { useEffect } from 'react';
import { useRootStore } from '@/stores/RootStore';
import * as Circle from './Main/components';
import styled from 'styled-components';
import { Header } from '@/components/header';
import { observer } from 'mobx-react-lite';

export const PageCircle: React.FC = observer(() => {
  const {
    circle: { fetch, circle },
  } = useRootStore();

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <Header title="학부 소모임" />
      <Circle.SearchBar />
      <H2>전체 소모임</H2>
      <Circle.ListFrame items={circle} emptyText={'아직 등록된 소모임이 없어요!'} ListComponent={Circle.Slider} />
      <H2>내 소모임</H2>
      <Circle.ListFrame items={[]} emptyText={'아직 가입한 소모임이 없어요!'} ListComponent={Circle.Slider} />
    </>
  );
});

const H2 = styled.h2`
  margin: 23px 0;
  font-size: 18px;
  line-height: 21px;
  color: #3f4040;
`;
