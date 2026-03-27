import { useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { Menu } from "lucide-react";
import { useCurrentUser } from "../../hooks/user/useCurrentUser";
import { useIsManager } from "../../hooks/user/useIsManager";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { type MenuItem } from "./menuData";
import styles from "./style.module.css";

const DEFAULT_LOGO_URL = "https://cdn.khlug.org/images/khlug-long-logo.png";
const DEFAULT_LOGO_HREF = "https://app.khlug.org";

type Props = {
  notificationSlot?: React.ReactNode;
  logoUrl?: string;
  logoHref?: string;
  menuItems?: MenuItem[];
};

export default function NavigationBar({
  notificationSlot,
  logoUrl = DEFAULT_LOGO_URL,
  logoHref = DEFAULT_LOGO_HREF,
  menuItems = [],
}: Props) {
  const [menuVisible, setMenuVisible] = useState(false);
  const { data: currentUser } = useCurrentUser();
  const isLoggedIn = !!currentUser?.id;
  const { isManager } = useIsManager();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav className={styles.navigationBar}>
      <div className={styles.navContainer}>
        <a href={logoHref}>
          <img
            src={logoUrl}
            alt="KHLUG Logo"
            className={styles.logo}
          />
        </a>

        <div className={styles.desktopMenu}>
          <DesktopNav menuItems={menuItems} isLoggedIn={isLoggedIn} isManager={isManager} />
          {notificationSlot}
        </div>

        <div className={styles.mobileActions}>
          {notificationSlot}
          <IconButton
            aria-label="메뉴"
            onClick={toggleMenu}
            variant="ghost"
            size="sm"
          >
            <Menu size={24} />
          </IconButton>
        </div>
      </div>

      {menuVisible && (
        <MobileNav menuItems={menuItems} isLoggedIn={isLoggedIn} isManager={isManager} />
      )}
    </nav>
  );
}