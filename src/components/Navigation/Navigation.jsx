import { StyledNavLink, StyledNav } from './Nav.styled';

export default function Navigation() {
  return (
    <StyledNav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/movies">Movies</StyledNavLink>
    </StyledNav>
  );
}