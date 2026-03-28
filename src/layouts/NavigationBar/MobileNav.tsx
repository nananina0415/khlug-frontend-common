import { type MenuItem, type SubMenuItem } from "./menuData";
import styles from "./style.module.css";

type Props = {
  menuItems: MenuItem[];
  isLoggedIn: boolean;
  isManager: boolean;
  current?: string;
};

function MobileSubNavItem({ item, isCurrent }: { item: SubMenuItem; isCurrent: boolean }) {
  if (item.isDivider) {
    return <hr />;
  }
  return <a href={item.href} className={isCurrent ? styles.active : ""}>{item.label}</a>;
}

function MobileNavItem({ item, current }: { item: MenuItem; current?: string }) {
  return (
    <div className={styles.mobileNavItem}>
      <a href={item.href} className={styles.mobileNavLink}>
        {item.label}
      </a>
      <div className={styles.mobileSubNav}>
        {item.subItems.map((subItem, index) => (
          <MobileSubNavItem key={subItem.href || index} item={subItem} isCurrent={subItem.href === current} />
        ))}
      </div>
    </div>
  );
}

export function MobileNav({ menuItems, isLoggedIn, isManager, current }: Props) {
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
        <MobileNavItem key={item.label} item={item} current={current} />
      ))}
    </div>
  );
}
