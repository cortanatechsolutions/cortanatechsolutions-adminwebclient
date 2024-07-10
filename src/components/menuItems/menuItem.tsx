export interface MenuItem {
  path: string;
  label: string;
  icon?: React.ReactNode;
  root: boolean;
}

export const sidebarMenuItems: MenuItem[] = [
  {
    path: "/",
    label: "Dashboard",
    root: false,
    // Add icon component if you have one, e.g., <DashboardIcon />
  },
  {
    path: "/settings",
    label: "Settings",
    root: false,
    // Add icon component if you have one, e.g., <SettingsIcon />
  },
  // Add more items as needed
];
