'use client';

import { ReactNode } from 'react';

import { StatusDot } from '@/components/custom/common-ui/status-dot';
import { MainContainer } from '@/components/custom/layout/main-container';
import { PageLayout } from '@/components/custom/layout/page-layout';
import { SideBarOverlay } from '@/components/custom/side-bar/side-bar-overlay';
import { Header } from '@/components/custom/header/header';
import { HeaderActions } from '@/components/custom/header/header-actions';
import { SimpleBadge } from '@/components/custom/common-ui/simple-badge';
import { HeaderChevron } from '@/components/custom/header/header-chevron';
import { HeaderLink } from '@/components/custom/header/header-link';
import { HeaderLinks } from '@/components/custom/header/header-links';
import { HeaderSlash } from '@/components/custom/header/header-slash';
import { NameAvatar } from '@/components/custom/common-ui/name-avatar';
import { Nav } from '@/components/custom/nav/nav';
import { NavLink } from '@/components/custom/nav/nav-link';
import { NavLinkBadge } from '@/components/custom/nav/nav-link-badge';
import { SideBar } from '@/components/custom/side-bar/side-bar';
import { SideBarFooter } from '@/components/custom/side-bar/side-bar-footer';
import { SideBarHeader } from '@/components/custom/side-bar/side-bar-header';
import { SideBarMain } from '@/components/custom/side-bar/side-bar-main';
import { SideBarMenu } from '@/components/custom/side-bar/side-bar-menu';
import { SideBarMenuHeader } from '@/components/custom/side-bar/side-bar-menu-header';
import { SideBarMenuSet } from '@/components/custom/side-bar/side-bar-menu-set';
import { SideBarMenuSetTitle } from '@/components/custom/side-bar/side-bar-menu-set-title';
import { SideBarToggle } from '@/components/custom/side-bar/side-bar-toggle';
import { ThemeToggle } from '@/components/custom/util/theme-toggle';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { LuCircleArrowUp } from 'react-icons/lu';
import { SideBarMenuContent } from '@/components/custom/side-bar/side-bar-menu-content';
import { SideBarMenuItem } from '@/components/custom/side-bar/side-bar-menu-item';
import { SiMonkeytie } from 'react-icons/si';
import { VscSymbolStructure } from 'react-icons/vsc';
import { MdOutlineDesktopWindows } from 'react-icons/md';
import { RiBillLine } from 'react-icons/ri';
import { RiAccountBoxLine } from 'react-icons/ri';
import { TfiMenuAlt } from 'react-icons/tfi';
import { MdDashboardCustomize } from 'react-icons/md';
import { FaCode } from 'react-icons/fa';
import { RiSettingsLine } from 'react-icons/ri';
import { PiBracketsCurlyBold } from 'react-icons/pi';
import { BiNotification } from 'react-icons/bi';
import { TbSettingsCheck } from 'react-icons/tb';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { SideBarMenuItemGroup } from '@/components/custom/side-bar/side-bar-menu-item-group';
import { ContentArea } from '@/components/custom/layout/content-area';
import { Button } from '@/components/custom/ui/button';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <PageLayout>
      <SideBarOverlay />
      <Header>
        <HeaderLinks>
          <HeaderLink href="#">
            <Avatar size="sm" className="shrink-0">
              <AvatarImage src="/images/home.png" className="rounded-sm" />
            </Avatar>
            <span className="truncate">Personal Workspace</span>
            <SimpleBadge variant="secondary">Hobby</SimpleBadge>
          </HeaderLink>
          <HeaderChevron />
          <HeaderSlash />
          <HeaderLink href="#">
            <span className="truncate">Front Row</span>
          </HeaderLink>
          <HeaderChevron />
          <HeaderSlash />
          <HeaderLink href="#">
            <StatusDot />
            <span className="truncate">Development</span>
          </HeaderLink>
          <HeaderChevron />
        </HeaderLinks>
        <HeaderActions>
          <SimpleBadge>
            <LuCircleArrowUp className="mr-1" />
            Upgrades
          </SimpleBadge>
          <Button variant="secondary" size="sm" className="h-6">
            Invite
          </Button>
          <ThemeToggle />
          <NameAvatar href="#" name="burhan shah" />
        </HeaderActions>
      </Header>
      <Nav>
        <NavLink href="#">Overview</NavLink>
        <NavLink href="#">Users</NavLink>
        <NavLink href="#" exact>
          Organizatioins
        </NavLink>
        <NavLink href="#">
          Billing
          <NavLinkBadge>Beta</NavLinkBadge>
        </NavLink>
        <NavLink href="#">Configure</NavLink>
      </Nav>
      <MainContainer>
        <SideBarToggle />
        <SideBar>
          <SideBarHeader />
          <SideBarMain>
            <SideBarMenuSet>
              <SideBarMenuSetTitle>Configure</SideBarMenuSetTitle>
              <SideBarMenu basePath="/admin">
                <SideBarMenuHeader icon={SiMonkeytie}>
                  User & Authentication
                </SideBarMenuHeader>
                <SideBarMenuContent>
                  <SideBarMenuItem path="/admin/analytics">
                    User & Authentication
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/admin/overview">
                    SSO Connections
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/configure/web3">Web3</SideBarMenuItem>
                  <SideBarMenuItem path="/configure/mfa">
                    Multi-factor
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/configure/restrictions">
                    Restrictions
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/configure/attack-protection">
                    Attack Protection
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/configure/waitlist">
                    Waitlist
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/configure/legal">
                    Legal
                  </SideBarMenuItem>
                </SideBarMenuContent>
              </SideBarMenu>
              <SideBarMenu basePath="/sessions">
                <SideBarMenuHeader icon={MdOutlineDesktopWindows}>
                  Sessions
                </SideBarMenuHeader>
                <SideBarMenuContent>
                  <SideBarMenuItem path="/sessions">Sessions</SideBarMenuItem>
                  <SideBarMenuItem path="/sessions/jwt-templates">
                    JWT Templates
                  </SideBarMenuItem>
                </SideBarMenuContent>
              </SideBarMenu>
              <SideBarMenu basePath="/admin2">
                <SideBarMenuHeader icon={VscSymbolStructure}>
                  Organizations
                </SideBarMenuHeader>
                <SideBarMenuContent>
                  <SideBarMenuItem path="/organizations/settings">
                    Settings
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/organizations/roles">
                    Roles & Permissions
                  </SideBarMenuItem>
                </SideBarMenuContent>
              </SideBarMenu>
              <SideBarMenu basePath="/admin3">
                <SideBarMenuHeader icon={RiBillLine}>Billing</SideBarMenuHeader>
                <SideBarMenuContent>
                  <SideBarMenuItem path="/billing/settings">
                    Settings
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/billing/plans">
                    Subscription plans
                  </SideBarMenuItem>
                </SideBarMenuContent>
              </SideBarMenu>
              <SideBarMenuItemGroup>
                <SideBarMenuItem
                  alternate="stand-alone"
                  icon={RiAccountBoxLine}
                  path="/account-portal"
                >
                  Account Portal
                </SideBarMenuItem>
                <SideBarMenuItem
                  alternate="stand-alone"
                  icon={TfiMenuAlt}
                  path="/features"
                >
                  Features
                </SideBarMenuItem>
              </SideBarMenuItemGroup>
              <SideBarMenu basePath="/admin4">
                <SideBarMenuHeader icon={MdDashboardCustomize}>
                  Customizations
                </SideBarMenuHeader>
                <SideBarMenuContent>
                  <SideBarMenuItem path="/customizations/avatars">
                    Avatars
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/customizations/emails">
                    Emails
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/customizations/sms">
                    SMS
                  </SideBarMenuItem>
                </SideBarMenuContent>
              </SideBarMenu>
              <SideBarMenu basePath="/admin5">
                <SideBarMenuHeader icon={FaCode}>Developers</SideBarMenuHeader>
                <SideBarMenuContent>
                  <SideBarMenuItem path="/developers/webhooks">
                    Webhooks
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/developers/domains">
                    Domains
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/developers/paths">
                    Paths
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/developers/api-keys">
                    API Keys
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/developers/m2m">
                    M2M Authentication
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/developers/oauth-apps">
                    OAuth Applications
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/developers/native-apps">
                    Native Applications
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/developers/integrations">
                    Integrations
                  </SideBarMenuItem>
                </SideBarMenuContent>
              </SideBarMenu>
            </SideBarMenuSet>
            <SideBarMenuSet>
              <SideBarMenuSetTitle>Instance</SideBarMenuSetTitle>
              <SideBarMenuItemGroup>
                <SideBarMenuItem
                  alternate="stand-alone"
                  icon={RiSettingsLine}
                  path="/instance/settings"
                >
                  Settings
                </SideBarMenuItem>
                <SideBarMenuItem
                  alternate="stand-alone"
                  icon={PiBracketsCurlyBold}
                  path="/instance/api-keys"
                >
                  API Keys
                </SideBarMenuItem>
                <SideBarMenuItem
                  alternate="stand-alone"
                  icon={BiNotification}
                  path="/instance/updates"
                >
                  Updates
                </SideBarMenuItem>
              </SideBarMenuItemGroup>
            </SideBarMenuSet>
            <SideBarMenuSet>
              <SideBarMenuSetTitle>Application</SideBarMenuSetTitle>
              <SideBarMenuItemGroup>
                <SideBarMenuItem
                  alternate="stand-alone"
                  icon={TbSettingsCheck}
                  path="/application/settings"
                >
                  Settings
                </SideBarMenuItem>
                <SideBarMenuItem
                  alternate="stand-alone"
                  icon={MdOutlineAccountBalanceWallet}
                  path="/application/billing"
                >
                  Plan and Billing
                </SideBarMenuItem>
              </SideBarMenuItemGroup>
            </SideBarMenuSet>
          </SideBarMain>
          <SideBarFooter />
        </SideBar>
        <ContentArea>{children}</ContentArea>
      </MainContainer>
    </PageLayout>
  );
}
