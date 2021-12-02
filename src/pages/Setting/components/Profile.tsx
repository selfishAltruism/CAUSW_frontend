import { memo } from 'react';
import styled from 'styled-components';

export const Porfile: React.FC<{ model: Model.User }> = memo(
  ({ model: { profileImage, email, nameWithAdmission, roleTxt } }) => {
    return (
      <Wrapper>
        <ProfileImage>
          <img src={profileImage} alt="user profile image" />
        </ProfileImage>
        <strong>{email}</strong>
        <br />
        {nameWithAdmission}
        <br />
        {roleTxt}
      </Wrapper>
    );
  },
);

const Wrapper = styled.div`
  margin: 32px 0 12px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
`;

const ProfileImage = styled.div`
  margin: 0 auto 18px;
  width: 55px;
  height: 55px;
  border-radius: 55px;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
  }
`;
