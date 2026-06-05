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
import {
  LuBookOpen,
  LuCalendar,
  LuCircleArrowUp,
  LuLayers,
  LuPanelLeft,
  LuPanelRight,
} from "react-icons/lu";
import {
  MdDashboardCustomize,
  MdOutlineTab,
  MdOutlineWindow,
} from "react-icons/md";
import {
  RiBarChartLine,
  RiBellLine,
  RiCompassLine,
  RiFileListLine,
  RiKeyboardLine,
  RiLayoutLine,
  RiTableLine,
} from "react-icons/ri";
import { TbSettingsCheck } from "react-icons/tb";
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
            {/* Getting Started */}
            <SideBarMenuSet>
              <SideBarMenuSetTitle>Getting Started</SideBarMenuSetTitle>
              <SideBarMenu basePath="/showcase/getting-started">
                <SideBarMenuHeader icon={LuBookOpen}>
                  Getting Started
                </SideBarMenuHeader>
                <SideBarMenuContent>
                  <SideBarMenuItem path="/showcase/getting-started/overview">
                    Overview
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/getting-started/design-tokens">
                    Design Tokens
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/getting-started/guidelines">
                    Usage Guidelines
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/getting-started/accessibility">
                    Accessibility
                  </SideBarMenuItem>
                </SideBarMenuContent>
              </SideBarMenu>
            </SideBarMenuSet>

            {/* Samples */}
            <SideBarMenuSet>
              <SideBarMenuSetTitle>Samples</SideBarMenuSetTitle>
              <SideBarMenuItemGroup>
                <SideBarMenuItem
                  alternate="stand-alone"
                  icon={MdOutlineWindow}
                  path="/showcase/dialogs"
                >
                  Dialog Gallery
                </SideBarMenuItem>
                <SideBarMenuItem
                  alternate="stand-alone"
                  icon={LuPanelRight}
                  path="/showcase/sheets"
                >
                  Sheet Gallery
                </SideBarMenuItem>
                <SideBarMenuItem
                  alternate="stand-alone"
                  icon={LuPanelLeft}
                  path="/showcase/drawers"
                >
                  Drawer Gallery
                </SideBarMenuItem>
              </SideBarMenuItemGroup>
              <SideBarMenu basePath="/showcase/dashboards">
                <SideBarMenuHeader icon={MdDashboardCustomize}>
                  Sample Dashboards
                </SideBarMenuHeader>
                <SideBarMenuContent>
                  <SideBarMenuItem path="/showcase/dashboards">
                    Dashboard Gallery
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/dashboards/saas-revenue">
                    SaaS Revenue
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/dashboards/ecommerce-ops">
                    E-commerce Ops
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/dashboards/marketing">
                    Marketing
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/dashboards/financial-pnl">
                    Financial P&L
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/dashboards/trading-portfolio">
                    Trading Portfolio
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/dashboards/healthcare">
                    Healthcare
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/dashboards/hr-people">
                    HR & People
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/dashboards/devops">
                    DevOps
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/dashboards/supply-chain">
                    Supply Chain
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/dashboards/real-estate">
                    Real Estate
                  </SideBarMenuItem>
                </SideBarMenuContent>
              </SideBarMenu>
              <SideBarMenu basePath="/showcase/forms">
                <SideBarMenuHeader icon={RiFileListLine}>
                  Sample Forms
                </SideBarMenuHeader>
                <SideBarMenuContent>
                  <SideBarMenuItem path="/showcase/forms">
                    Forms Gallery
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/forms/contact-inquiry">
                    Contact & Inquiry
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/forms/user-profile">
                    User Profile Settings
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/forms/support-ticket">
                    Support Ticket
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/forms/appointment-booking">
                    Appointment Booking
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/forms/job-application">
                    Job Application
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/forms/financial-transaction">
                    Financial Transaction
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/forms/create-product">
                    Create Product
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/forms/project-kickoff">
                    Project Kickoff
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/forms/search-filter">
                    Search & Filter Panel
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/forms/employee-onboarding">
                    Employee Onboarding
                  </SideBarMenuItem>
                </SideBarMenuContent>
              </SideBarMenu>
            </SideBarMenuSet>

            {/* Components */}
            <SideBarMenuSet>
              <SideBarMenuSetTitle>Components</SideBarMenuSetTitle>
              <SideBarMenu basePath="/showcase/feedback">
                <SideBarMenuHeader icon={RiBellLine}>
                  Feedback & Status
                </SideBarMenuHeader>
                <SideBarMenuContent>
                  <SideBarMenuItem path="/showcase/simple-badge">
                    Simple Badge
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/bubble-badge">
                    Bubble Badge
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/status-dot">
                    Status Dot
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/simple-alert">
                    Simple Alert
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/toasts">
                    Toast
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/pro-badge">
                    Pro Badge
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/unsaved-changes-bar">
                    Unsaved Changes Bar
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/progress">
                    Progress & Stepper
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/skeleton">
                    Skeleton
                  </SideBarMenuItem>
                </SideBarMenuContent>
              </SideBarMenu>
              <SideBarMenu basePath="/showcase/inputs">
                <SideBarMenuHeader icon={RiKeyboardLine}>
                  Forms & Inputs
                </SideBarMenuHeader>
                <SideBarMenuContent>
                  <SideBarMenuItem path="/showcase/button">
                    Button
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/input">
                    Input
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/input-group">
                    Input Group
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/checkbox">
                    Checkbox
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/radio-group">
                    Radio Group
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/switch">
                    Switch
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/select">
                    Select
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/field">
                    Field
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/combobox">
                    Combobox
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/table-lookup">
                    Table Lookup
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/file-upload">
                    File Upload
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/rich-text-editor">
                    Rich Text Editor
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/color-picker">
                    Color Picker
                  </SideBarMenuItem>
                </SideBarMenuContent>
              </SideBarMenu>
              <SideBarMenu basePath="/showcase/date">
                <SideBarMenuHeader icon={LuCalendar}>
                  Date & Time
                </SideBarMenuHeader>
                <SideBarMenuContent>
                  <SideBarMenuItem path="/showcase/calendar">
                    Calendar
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/date-picker">
                    Date Picker
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/date-range-picker">
                    Date Range Picker
                  </SideBarMenuItem>
                </SideBarMenuContent>
              </SideBarMenu>
              <SideBarMenu basePath="/showcase/nav">
                <SideBarMenuHeader icon={RiCompassLine}>
                  Navigation
                </SideBarMenuHeader>
                <SideBarMenuContent>
                  <SideBarMenuItem path="/showcase/anchor">
                    Anchor
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/nav">Nav</SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/nav-link">
                    Nav Link
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/header">
                    Header
                  </SideBarMenuItem>
                </SideBarMenuContent>
              </SideBarMenu>
              <SideBarMenu basePath="/showcase/overlay">
                <SideBarMenuHeader icon={LuLayers}>Overlays</SideBarMenuHeader>
                <SideBarMenuContent>
                  <SideBarMenuItem path="/showcase/dialog">
                    Dialog
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/sheet">
                    Sheet
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/dropdown-menu">
                    Dropdown Menu
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/tooltips">
                    Tooltip
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/command-palette">
                    Command Palette
                  </SideBarMenuItem>
                </SideBarMenuContent>
              </SideBarMenu>
              <SideBarMenu basePath="/showcase/charts">
                <SideBarMenuHeader icon={RiBarChartLine}>
                  Charts
                </SideBarMenuHeader>
                <SideBarMenuContent>
                  <SideBarMenuItem path="/showcase/charts">
                    Chart Gallery
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/charts/line">
                    Line Charts
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/charts/area">
                    Area Charts
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/charts/bar">
                    Bar Charts
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/charts/pie">
                    Pie & Donut
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/charts/radial">
                    Radial & Gauge
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/charts/radar">
                    Radar Charts
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/charts/scatter">
                    Scatter & Bubble
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/charts/composed">
                    Composed Charts
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/charts/treemap">
                    Treemap
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/charts/histogram">
                    Histogram
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/charts/candlestick">
                    Candlestick
                  </SideBarMenuItem>
                </SideBarMenuContent>
              </SideBarMenu>
              <SideBarMenu basePath="/showcase/data-table">
                <SideBarMenuHeader icon={RiTableLine}>
                  Tables & Data
                </SideBarMenuHeader>
                <SideBarMenuContent>
                  <SideBarMenuItem path="/showcase/table">
                    Table
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/empty">
                    Empty State
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/data-table">
                    Data Table
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/data-table-lab">
                    Data Table Lab
                  </SideBarMenuItem>
                </SideBarMenuContent>
              </SideBarMenu>
              <SideBarMenu basePath="/showcase/layout">
                <SideBarMenuHeader icon={RiLayoutLine}>
                  Layout
                </SideBarMenuHeader>
                <SideBarMenuContent>
                  <SideBarMenuItem path="/showcase/layout-guide">
                    Layout Guide
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/card">Card</SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/page-header">
                    Page Header
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/page-bar">
                    Page Bar
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/aside-content">
                    Aside Content
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/item">Item</SideBarMenuItem>
                </SideBarMenuContent>
              </SideBarMenu>
              <SideBarMenuItemGroup>
                <SideBarMenuItem
                  alternate="stand-alone"
                  icon={MdOutlineTab}
                  path="/showcase/tabs"
                >
                  Tabs
                </SideBarMenuItem>
                <SideBarMenuItem
                  alternate="stand-alone"
                  icon={VscSymbolStructure}
                  path="/showcase/sidebar-menu"
                >
                  Sidebar Menu
                </SideBarMenuItem>
              </SideBarMenuItemGroup>
              <SideBarMenu basePath="/showcase/util">
                <SideBarMenuHeader icon={TbSettingsCheck}>
                  Utilities
                </SideBarMenuHeader>
                <SideBarMenuContent>
                  <SideBarMenuItem path="/showcase/copy-text">
                    Copy Text
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/name-avatar">
                    Name Avatar
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/theme-toggle">
                    Theme Toggle
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/pagination-button">
                    Pagination Button
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/row-action-button">
                    Row Action Button
                  </SideBarMenuItem>
                  <SideBarMenuItem path="/showcase/scroll-to-top">
                    Scroll To Top
                  </SideBarMenuItem>
                </SideBarMenuContent>
              </SideBarMenu>
            </SideBarMenuSet>
          </SideBarMain>
          {/* <SideBarFooter /> */}
        </SideBar>
        <ContentArea>{children}</ContentArea>
      </MainContainer>
    </PageLayout>
  );
}
