import { useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { Menu } from "lucide-react";
import { useIsManager } from "../../hooks/user/useIsManager";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import styles from "./style.module.css";

type Props = {
  notificationSlot?: React.ReactNode;
};

export default function NavigationBar({ notificationSlot }: Props) {
  const [menuVisible, setMenuVisible] = useState(false);
  const { isManager } = useIsManager();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav className={styles.navigationBar}>
      <div className={styles.navContainer}>
        <a href="https://app.khlug.org">
          <img
            src="https://cdn.khlug.org/images/khlug-long-logo.png"
            alt="KHLUG Logo"
            className={styles.logo}
          />
        </a>

        <div className={styles.desktopMenu}>
          <DesktopNav isManager={isManager} />
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

      {menuVisible && <MobileNav isManager={isManager} />}
    </nav>
  );
}
