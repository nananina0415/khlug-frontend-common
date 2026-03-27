import { type MenuItem, type SubMenuItem } from "./menuData";
import styles from "./style.module.css";

type Props = {
  menuItems: MenuItem[];
  isLoggedIn: boolean;
  isManager: boolean;
};

function SubNavItem({ item }: { item: SubMenuItem }) {
  if (item.isDivider) {
    return <hr />;
  }
  return <a href={item.href}>{item.label}</a>;
}

function NavItem({ item }: { item: MenuItem }) {
  const isActive = item.requiresManager;

  return (
    <div className={styles.navItem}>
      <a
        href={item.href}
        className={`${styles.navLink} ${isActive ? styles.active : ""}`}
      >
        {item.label}
      </a>
      <div className={styles.subNav}>
        {item.subItems.map((subItem, index) => (
          <SubNavItem key={subItem.href || index} item={subItem} />
        ))}
      </div>
    </div>
  );
}

export function DesktopNav({ menuItems, isLoggedIn, isManager }: Props) {
  const visibleItems = menuItems.filter((item) => {
    // requiresManager: 매니저에게만 표시
    if (item.requiresManager) return isManager;
    // requiresMember: 로그인한 사용자(멤버, 매니저)에게만 표시
    if (item.requiresMember) return isLoggedIn;
    // forGuest: 로그인하지 않은 게스트에게만 표시
    if (item.forGuest) return !isLoggedIn;
    // 플래그 없음: 모든 사용자에게 표시
    return true;
  });

  return (
    <>
      {visibleItems.map((item) => (
        <NavItem key={item.label} item={item} />
      ))}
    </>
  );
}