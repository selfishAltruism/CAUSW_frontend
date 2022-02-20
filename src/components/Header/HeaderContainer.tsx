import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { memo } from 'react';

import { BackButton } from './BackButton';
import { DefaultTop } from './DefaultTop';

import { DefaultLogo } from '@/assets';

interface Props {
  title?: string;
  withBack?: boolean | string;
  TopComponent?: React.ReactNode;
  RightComponent?: React.ReactNode | null;
  mini?: boolean;
}
export const HeaderContainer: React.FC<Props> = memo(
  ({
    withBack = false,
    TopComponent = <DefaultTop />,
    title = '',
    RightComponent = <DefaultLogo />,
    mini = false,
  }) => (
    <Wrapper mini={mini}>
      {withBack ? (
        <Left>
          <BackButton link={withBack} />
        </Left>
      ) : null}
      <Center>
        {!mini ? TopComponent : null}
        <Title mini={mini}>{title}</Title>
      </Center>
      <Right>{RightComponent}</Right>
    </Wrapper>
  ),
);

interface Mini {
  mini: boolean;
}

const Wrapper = styled.header<Mini>`
  display: flex;
  margin: ${({ mini }) => (mini ? null : '20px 0 10px')};
  padding: 0 20px;
`;

const Left = styled.div`
  flex-shrink: 0;
  width: 30px;
`;

const Center = styled.div`
  flex-grow: 1;
`;

const Title = styled.h1<Mini>`
  font-weight: bold;

  ${({ mini }) =>
    mini
      ? css`
          margin: 15px 0 12px;
          font-size: 20px;
          line-height: 23px;
          text-align: center;
        `
      : css`
          margin: 5px 0 0;
          font-size: 24px;
          line-height: 28px;
        `}
`;

const Right = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 30px;

  > img {
    margin-left: -20px;
  }
`;
