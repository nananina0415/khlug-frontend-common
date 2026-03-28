import NavigationBar from "../NavigationBar";
import { type MenuItem } from "../NavigationBar/menuData";
import "./style.css";

type Props = {
  children: React.ReactNode;
  logoUrl?: string;
  logoHref?: string;
  menuItems?: MenuItem[];
  current?: string;
};

export default function MainLayout({ children, logoUrl, logoHref, menuItems, current }: Props) {
  return (
    <div className="main-layout">
      <NavigationBar logoUrl={logoUrl} logoHref={logoHref} menuItems={menuItems} current={current} />
      <div className="main-layout__content">{children}</div>
    </div>
  );
}
