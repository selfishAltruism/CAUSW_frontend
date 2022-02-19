import React, { memo } from 'react';
import styled from 'styled-components';

import { ClearA, ClearLink } from '@/components/regacy/atoms/clear';

export const CircleLinks = memo(() => (
  <Wrapper>
    <University />
    <Library />
    <CSE />
    <Portal />
    {/* <Locker /> */}
  </Wrapper>
));

const University: React.FC = () => (
  <ClearA href="https://www.cau.ac.kr">
    <Circle>
      <img src="images/icons/link/university.svg" alt="University icon link" />
    </Circle>
    <Text>
      학교
      <br />
      홈페이지
    </Text>
  </ClearA>
);

const Library: React.FC = () => (
  <ClearA href="https://library.cau.ac.kr">
    <Circle>
      <img src="images/icons/link/library.svg" alt="Library icon link" />
    </Circle>
    <Text>
      중앙
      <br />
      도서관
    </Text>
  </ClearA>
);

const CSE: React.FC = () => (
  <ClearA href="https://cse.cau.ac.kr">
    <Circle>
      <img src="images/icons/link/cse.svg" alt="CSE icon link" />
    </Circle>
    <Text>
      컴공
      <br />
      홈페이지
    </Text>
  </ClearA>
);

const Portal: React.FC = () => (
  <ClearA href="https://mportal.cau.ac.kr">
    <Circle>
      <img src="images/icons/link/portal.svg" alt="Portal icon link" />
    </Circle>
    <Text>포탈</Text>
  </ClearA>
);

const Locker: React.FC = () => (
  <ClearLink to="#">
    <Circle>
      <img src="images/icons/link/locker.svg" alt="Locker icon link" />
    </Circle>
    <Text>
      사물함
      <br />
      관리
    </Text>
  </ClearLink>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  > * {
    display: inline-block;
    width: 15%;
  }
`;

const Circle = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  border-radius: 100%;
  background: #eaeaea;

  > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 70%;
  }
`;

const Text = styled.div`
  margin-top: 6px;
  text-align: center;
  font-size: 8px;
  line-height: 12px;
  color: #808080;
`;
