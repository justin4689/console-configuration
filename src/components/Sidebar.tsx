import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";
import type { MenuItemType } from "./MenuItem";

export default function Sidebar() {
  const menuItems: MenuItemType[] = [
  


    {
      id: "sidebarconfig",
      title: "Configuration",
      icon: "uil-cog",
      name: "configurations",
      type: "static",
      href: "/dashboard/configurations",
    },
  ];

  return (
    <div className="leftside-menu">
      <SidebarHeader />
      <SidebarMenu menuItems={menuItems} />
    </div>
  );
}
