"use client";

import { ReactNode } from "react";

import {
  Button,
  ContentArea,
  Header,
  HeaderActions,
  HeaderChevron,
  HeaderLink,
  HeaderLinks,
  HeaderSlash,
  MainContainer,
  NameAvatar,
  Nav,
  NavLink,
  NavLinkBadge,
  PageLayout,
  SideBar,
  SideBarHeader,
  SideBarMain,
  SideBarMenu,
  SideBarMenuContent,
  SideBarMenuHeader,
  SideBarMenuItem,
  SideBarMenuItemGroup,
  SideBarMenuSet,
  SideBarMenuSetTitle,
  SideBarOverlay,
  SideBarToggle,
  SimpleBadge,
  StatusDot,
  ThemeToggle,
} from "@/ascendra-ui";
import { Avatar, AvatarImage } from "@/ascendra-ui/shadcn";
import { BiNotification } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { LuCircleArrowUp } from "react-icons/lu";
import {
  MdDashboardCustomize,
  MdOutlineAccountBalanceWallet,
  MdOutlineDesktopWindows,
} from "react-icons/md";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { RiAccountBoxLine, RiBillLine, RiSettingsLine } from "react-icons/ri";
import { SiMonkeytie } from "react-icons/si";
import { TbSettingsCheck } from "react-icons/tb";
import { TfiMenuAlt } from "react-icons/tfi";
import { VscSymbolStructure } from "react-icons/vsc";

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
            <LuCircleArrowUp />
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
              <SideBarMenu basePath="/user-and-auth">
                <SideBarMenuHeader icon={SiMonkeytie}>
                  User & Authentication
                </SideBarMenuHeader>
                <SideBarMenuContent>
                  <SideBarMenuItem path="/user-and-auth/user-and-authentication">
                    User & Authentication
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/user-and-auth/sso-connections">
                    SSO Connections
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/user-and-auth/web3">
                    Web3
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/user-and-auth/mfa">
                    Multi-factor
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/user-and-auth/restrictions">
                    Restrictions
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/user-and-auth/attack-protection">
                    Attack Protection
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/user-and-auth/waitlist">
                    Waitlist
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/user-and-auth/legal">
                    Legal
                  </SideBarMenuItem>
                </SideBarMenuContent>
              </SideBarMenu>
              <SideBarMenu basePath="/sessions">
                <SideBarMenuHeader icon={MdOutlineDesktopWindows}>
                  Sessions
                </SideBarMenuHeader>
                <SideBarMenuContent>
                  <SideBarMenuItem path="/sessions/sessions">
                    Sessions
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/sessions/jwt-templates">
                    JWT Templates
                  </SideBarMenuItem>
                </SideBarMenuContent>
              </SideBarMenu>
              <SideBarMenu basePath="/organizations">
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
              <SideBarMenu basePath="/billing">
                <SideBarMenuHeader icon={RiBillLine}>Billing</SideBarMenuHeader>
                <SideBarMenuContent>
                  <SideBarMenuItem path="/billing/settings">
                    Settings
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/billing/subscription-plans">
                    Subscription plans
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/billing/table-usage">
                    Table usage
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
              <SideBarMenu basePath="/customizations">
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
              <SideBarMenu basePath="/developers">
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
              <SideBarMenuSetTitle>Input</SideBarMenuSetTitle>
              <SideBarMenuItemGroup>
                <SideBarMenuItem alternate="stand-alone" path="/input/combobox">
                  Combobox
                </SideBarMenuItem>
              </SideBarMenuItemGroup>
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
          {/* <SideBarFooter /> */}
        </SideBar>
        <ContentArea>{children}</ContentArea>
      </MainContainer>
    </PageLayout>
  );
}
