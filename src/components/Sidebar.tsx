import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";
import type { MenuItemType } from "./MenuItem";
import { useCategories } from "@/hook/queries";

export default function Sidebar() {
  const { data } = useCategories();
  const categories: { _id: string; label: string }[] = Array.isArray(data)
    ? data
    : (data as any)?.data ?? [];

  const categoryChildren = categories.map((cat) => ({
    label: cat.label,
    href: `/dashboard/configurations?category=${cat._id}`,
  }));

  const menuItems: MenuItemType[] = [
    {
      id: "sidebarconfig",
      title: "Configuration",
      icon: "uil-cog",
      name: "configurations",
      type: "static",
      href: "/dashboard/configurations",
      children: [...categoryChildren],
    },
  ];

  return (
    <div className="leftside-menu">
      <SidebarHeader />
      <SidebarMenu menuItems={menuItems} />
    </div>
  );
}
