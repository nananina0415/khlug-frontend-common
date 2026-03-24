import NavigationBar from "../NavigationBar";
import "./style.css";

type Props = {
  children: React.ReactNode;
  logoUrl?: string;
};

export default function MainLayout({ children, logoUrl }: Props) {
  return (
    <div className="main-layout">
      <NavigationBar logoUrl={logoUrl} />
      <div className="main-layout__content">{children}</div>
    </div>
  );
}
