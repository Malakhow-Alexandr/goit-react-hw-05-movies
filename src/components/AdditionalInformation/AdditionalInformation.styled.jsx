import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const SectionInformation = styled.section`
  padding: 15px 0px;
`;
export const MetaContainer = styled.div`
  padding: 10px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
`;
export const InformationTitle = styled.h2`
  margin: 0;
  padding: 0;
`;

export const InformationList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const InformationLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  color: #000;
  transition: color 250ms ease;
  &:hover {
    color: #03039c;
  }
`;
