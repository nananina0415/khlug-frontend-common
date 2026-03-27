import NavigationBar from "../NavigationBar";
import { type MenuItem } from "../NavigationBar/menuData";
import "./style.css";

type Props = {
  children: React.ReactNode;
  logoUrl?: string;
  logoHref?: string;
  menuItems?: MenuItem[];
};

export default function MainLayout({ children, logoUrl, logoHref, menuItems }: Props) {
  return (
    <div className="main-layout">
      <NavigationBar logoUrl={logoUrl} logoHref={logoHref} menuItems={menuItems} />
      <div className="main-layout__content">{children}</div>
    </div>
  );
}
