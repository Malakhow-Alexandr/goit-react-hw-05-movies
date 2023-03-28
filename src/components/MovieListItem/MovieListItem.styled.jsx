import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  margin-left: auto;
  margin-right: auto;
  width: 220px;
  border-radius: 10px;
  overflow: hidden;
`;
export const Picture = styled.img`
  border-radius: 10px;
`;
export const LinkStyled = styled(Link)`
  text-decoration: none;
  position: relative;
`;
export const Rating = styled.p`
  margin: 0;
  padding: 0;
  position: absolute;
  top: -10px;
  left: 177px;
  font-weight: bold;
  color: #83cf57;
  font-size: 18px;
  transition: color 250ms ease, transform 250ms ease;
  &:hover {
    color: red;
    transform: scale(1.2);
  }
`;
export const Release = styled.p`
  margin: 0;
  padding: 0;
  position: absolute;
  top: -10px;
  left: 7px;
  font-weight: bold;
  color: #83cf57;
  transition: color 250ms ease, transform 250ms ease;
  &:hover {
    color: red;
    transform: scale(1.2);
  }
`;

export const Title = styled.p`
  padding: 0;
  margin: 0px;
  font-size: 18px;
  font-weight: bold;
  color: #000;
  .link:hover & {
    color: #6e02ac;
  }
`;
