---
title: How to lazy loading JSX react module with dots notation
description: "React lazy loading module with dot notation such as subclass or non default export"
date: 2023-09-18T13:18:02+07:00
updated: 2023-09-19T01:15:03+07:00
categories: [programming]
tags: [react, javascript, typescript]
thumbnail: https://felixgerschau.com/static/fd98b903a50c5468828ec6c1c72d7b7e/0243e/react-lazy-loading-cover.png
---

How to React lazy loading module with dot notation such as subclass or non default export ?

## Original code without react lazy

```tsx
import React from 'react';
import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';

const MyNavbar = () => (
  <Navbar>
    <Navbar.Brand href="#">RSUITE</Navbar.Brand>
    <Nav>
      <Nav.Item icon={<HomeIcon />}>Home</Nav.Item>
      <Nav.Item>News</Nav.Item>
      <Nav.Item>Products</Nav.Item>
      <Nav.Menu title="About">
        <Nav.Item>Company</Nav.Item>
        <Nav.Item>Team</Nav.Item>
        <Nav.Menu title="Contact">
          <Nav.Item>Via email</Nav.Item>
          <Nav.Item>Via telephone</Nav.Item>
        </Nav.Menu>
      </Nav.Menu>
    </Nav>
    <Nav pullRight>
      <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
    </Nav>
  </Navbar>
);
```

## Convert to react lazy

```tsx
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

## How to lazy import SVG Icon in ReactJS

sample codes to import SVG ICON with react lazy using library **React Suite**

### Original imports SVG Icon without react lazy

```tsx
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
```

### Import SVG Icon using react lazy

```tsx
const HomeIcon = React.lazy(() => import('@rsuite/icons/legacy/Home'));
const CogIcon = React.lazy(() => import('@rsuite/icons/legacy/Cog'));
```

## Full Code Sample

my full sample code to lazy import **React Suite** components

**filename**: MyNavbar.tsx

```tsx
import React from 'react';
//

// import HomeIcon from '@rsuite/icons/legacy/Home';
// import { Nav, Navbar } from 'rsuite';

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

const HomeIcon = React.lazy(() => import('@rsuite/icons/legacy/Home'));

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

**filename**: MyTheme.tsx

```tsx
import React from "react";
// lazy import react suite custom navbar
const MyNavbar = React.lazy(() => import("./Navbar"));
// lazy import other react suite components
const Container = React.lazy(() => import("rsuite/esm/Container"));
const Container = React.lazy(() => import("rsuite/esm/Container"));
// export the theme
export default function MyTheme(props) {
  return (
    <Container>
      <Header className="fixed-top">
        <MyNavbar />
      </Header>
      <Container id="content-wrapper">
        {/* using children property */}
        {/* <Content>{this.props.children}</Content> */}
        <Content>
          {/* using react-router-dom */}
          <Outlet />
        </Content>
      </Container>
    </Container>
  );
}
```

## conclusion

now you learned How to lazy loading module without default export in reactjs, and this method also works on `typescript`.
