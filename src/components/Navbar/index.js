import React from 'react'
import {
  Nav, NavLink, NavbarContainer, Span, NavLogo,
  NavItems, GitHubButton, ButtonContainer,
  MobileIcon, MobileMenu, MobileNavLogo, MobileLink
} from './NavbarStyledComponent';
import { FcBusinessman } from "react-icons/fc";
import { FaBars } from 'react-icons/fa';
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';
import logo from './channels4_profile.jpg'; // ✅ Import image

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
        <img
  src={logo}
  alt="Logo"
  style={{
    width: '69px',
    height: '69px',
    borderRadius: '50%',
    objectFit: 'cover'
  }}
/>
{/* ✅ Using imported image */}
        </NavLogo>

        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>

        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
         
          <NavLink href="#education">Education</NavLink>
        </NavItems>

        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            <FaGithub size="1.5rem" /> Github Profile
          </GitHubButton>
          <GitHubButton href={Bio.linkedin} target="_blank">
            <FaLinkedin size="1.5rem" /> LinkedIn
          </GitHubButton>
        </ButtonContainer>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => setIsOpen(false)}>About</MobileLink>
            <MobileLink href="#skills" onClick={() => setIsOpen(false)}>Skills</MobileLink>
            <MobileLink href="#projects" onClick={() => setIsOpen(false)}>Projects</MobileLink>
            <MobileLink href="#education" onClick={() => setIsOpen(false)}>Education</MobileLink>
            <GitHubButton
              style={{ padding: '10px 16px', background: theme.primary, color: 'white', width: 'max-content' }}
              href={Bio.github}
              target="_blank"
            >
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
