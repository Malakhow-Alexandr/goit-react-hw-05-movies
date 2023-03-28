import styled from '@emotion/styled';

export const ActorItem = styled.li`
  max-width: 176px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  padding-bottom: 3px;
  border-radius: 10px;
  overflow: hidden;
`;
export const ActorPhoto = styled.img`
  width: 100%;
  height: 264px;
`;

export const ActorName = styled.p`
  margin: 3px 0px 5px 5px;
  padding: 0;
  font-weight: 500;
`;

export const ActorRole = styled.p`
  margin: 0px 0px 3px 5px;
  padding: 0;
  font-weight: 500;
  font-size: 15px;
  & span {
    font-weight: bold;
  }
`;
