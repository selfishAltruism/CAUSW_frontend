import styled from '@emotion/styled';
import { memo } from 'react';
import { generatePath } from 'react-router';

import {
  ClearLink,
  PostAuthorNameCSS,
  PostBreak,
  PostCommentNum,
  PostCreatedAt,
  PostTitleCSS,
  PostWrapperCSS,
  useGetBoardId,
} from '@/components';
import { PAGE_URL } from '@/configs/path';

export const CircleBoardListItem: React.FC<{ model: NonNullable<Model.CircleBoard['post']> }> =
  memo(({ model: { id: postId, title, formatedCreatedAt, writerName, numComment } }) => {
    const boardId = useGetBoardId();

    return (
      <Link to={generatePath(PAGE_URL.PostDetail, { boardId, postId })}>
        <Title>{title}</Title>
        <PostCreatedAt>{formatedCreatedAt}</PostCreatedAt>
        <PostBreak />
        <AuthorName>{writerName}</AuthorName>
        <PostCommentNum>{numComment}</PostCommentNum>
      </Link>
    );
  });

const Link = styled(ClearLink)`
  ${PostWrapperCSS}
  margin: 16px 0 0;
`;

const Title = styled.h3`
  ${PostTitleCSS}
  font-size: 12px;
  line-height: 14px;
`;

const AuthorName = styled.div`
  ${PostAuthorNameCSS}
  font-size: 9px;
  line-height: 11px;
`;
