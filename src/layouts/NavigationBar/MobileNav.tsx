import { type MenuItem, type SubMenuItem } from "./menuData";
import styles from "./style.module.css";

type Props = {
  menuItems: MenuItem[];
  isLoggedIn: boolean;
  isManager: boolean;
};

function MobileSubNavItem({ item }: { item: SubMenuItem }) {
  if (item.isDivider) {
    return <hr />;
  }
  return <a href={item.href}>{item.label}</a>;
}

function MobileNavItem({ item }: { item: MenuItem }) {
  const isActive = item.requiresManager;

  return (
    <div className={styles.mobileNavItem}>
      <a
        href={item.href}
        className={`${styles.mobileNavLink} ${isActive ? styles.active : ""}`}
      >
        {item.label}
      </a>
      <div className={styles.mobileSubNav}>
        {item.subItems.map((subItem, index) => (
          <MobileSubNavItem key={subItem.href || index} item={subItem} />
        ))}
      </div>
    </div>
  );
}

export function MobileNav({ menuItems, isLoggedIn, isManager }: Props) {
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
    <div className={styles.mobileMenu}>
      {visibleItems.map((item) => (
        <MobileNavItem key={item.label} item={item} />
      ))}
    </div>
  );
}