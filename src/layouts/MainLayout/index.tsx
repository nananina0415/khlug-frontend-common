import NavigationBar from "../NavigationBar";
import "./style.css";

type Props = {
  children: React.ReactNode;
  logoUrl?: string;
  logoHref?: string;
};

export default function MainLayout({ children, logoUrl, logoHref }: Props) {
  return (
    <div className="main-layout">
      <NavigationBar logoUrl={logoUrl} logoHref={logoHref} />
      <div className="main-layout__content">{children}</div>
    </div>
  );
}
