---
title: How to lazy loading JSX react module with dots notation
description: "React lazy loading module with dot notation such as subclass or non default export"
date: 2023-09-18T13:18:02+07:00
categories: [programming]
tags: [react, javascript, typescript]
---

How to React lazy loading module with dot notation such as subclass or non default export ?

## Code Example

```tsx
// import { Nav, Navbar } from 'rsuite'; // <-- this is original import without lazy loading

// below is turn them into react lazy loading
const Nav = React.lazy(() => import('rsuite/esm/Nav'));
const NavItem = React.lazy(() =>
  import('rsuite/esm/Nav').then(module => ({
    default: module.default.Item,
  })),
);
const NavMenu = React.lazy(() =>
  import('rsuite/esm/Nav').then(module => ({
    default: module.default.Menu,
  })),
);
const Navbar = React.lazy(() => import('rsuite/esm/Navbar'));
const NavbarBrand = React.lazy(() =>
  import('rsuite/esm/Navbar').then(module => ({
    default: module.default.Brand,
  })),
);
```

now use above lazy imported module into JSX, this also works on `typescript`

```tsx
const MyNavbar = ({ ...props }) => {
  return (
    <Navbar {...props}>
      <NavbarBrand href="#">WMI</NavbarBrand>
      <Nav>
        <NavItem icon={<HomeIcon />} href="/page">
          Home
        </NavItem>
        <NavItem href="/page/google/login">Login</NavItem>
        <NavMenu title="Tools">
          <NavItem onClick={navItemClick} href="/page/bot-detect">
            Selenium Checker
          </NavItem>
          <NavItem onClick={navItemClick} href="/page/moment-timezone">
            Moment Timezone Playground
          </NavItem>
          <NavItem onClick={navItemClick} href="/page/cookies">
            Cookie Manager
          </NavItem>
        </NavMenu>
      </Nav>
      {/* <Nav pullRight>
        <NavItem icon={<CogIcon />}>Settings</NavItem>
      </Nav> */}
    </Navbar>
  );
};

export default MyNavbar;

function navItemClick(e: { target: any }): any {
  const el = e.target as HTMLElement;
  if (el.hasAttribute('href')) {
    window.location.href = el.getAttribute('href');
  }
}
```
