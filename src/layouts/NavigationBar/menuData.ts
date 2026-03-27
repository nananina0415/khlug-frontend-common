export type MenuItem = {
  label: string;
  href: string;
  subItems: SubMenuItem[];
  requiresMember?: boolean;
  requiresManager?: boolean;
  forGuest?: boolean;
};

export type SubMenuItem = {
  label: string;
  href: string;
  isDivider?: boolean;
};

// 각 프로젝트에 맞게 메뉴 항목을 추가하세요.
// requiresManager: true 항목은 운영진에게만 표시됩니다.
export const menuItems: MenuItem[] = [];
