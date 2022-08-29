import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const StyledDivBlock = styled.div`
  margin-left: 20px;
`;
export const StyledAddit = styled.div`
  margin-top: 20px;
  border-bottom: 2px solid #ccc;
  border-top: 2px solid #ccc;
`;

export const StyleHomeMovies = styled(NavLink)`
  margin: 10px;
  text-decoration: none;
  display: flex;
`;

export const StyleLinkGoBack = styled(Link)`
background-color: white;
border: 1px solid #eeebeb;
text-decoration: none;
`;