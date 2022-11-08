import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const FlexContainer = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  margin: 0 auto;
  display: flex;
  align-items: left;
  justify-content: start;
  gap: 20px;
  box-shadow: 0px 5px 5px 0px rgba(140, 140, 140, 0.47);
`;
export const InfoContainer = styled.div`
  padding: 15px;
  box-shadow: 0px 5px 5px 0px rgba(140, 140, 140, 0.47);
`;

export const BackLink = styled(Link)`
  margin-left: 15px;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-bottom: 5px;
  padding-top: 5px;
  text-decoration: none;
  color: black;
  gap: 5px;
`;
