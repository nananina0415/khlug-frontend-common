import { AxiosInstance } from 'axios';
import { Button as Button_2 } from '@chakra-ui/react';
import { cn } from './util/cn';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { LucideProps } from 'lucide-react';

export declare const apiClient: AxiosInstance;

export declare function BaseModal({ isOpen, onRequestClose, children }: Props): JSX_2.Element;

export declare function Button({ variant, disabled, ...props }: Props_2): JSX_2.Element;

export declare function calcDateInterval(target: Date, ref?: Date): string;

export declare function Callout({ type, children }: Props_3): JSX_2.Element;

export declare function CenterRingLoadingIndicator({ className }: Props_7): JSX_2.Element;

export { cn }

export declare function CollegeIcon({ college, ...rest }: Props_4 & LucideProps): JSX_2.Element;

export declare function Container({ children, className }: Props_5): JSX_2.Element;

export declare const DateFormats: {
    DATE: string;
    DATE_KOR: string;
    TIME: string;
    DATETIME: string;
    DATETIME_KOR: string;
};

export declare function extractErrorMessage(error: Error): any;

/**
 * 숫자를 통화 형식으로 포맷팅합니다.
 * @param amount - 포맷팅할 금액
 * @returns ₩ 기호와 천단위 구분자가 포함된 문자열
 * @example
 * formatCurrency(20000) // "₩20,000"
 * formatCurrency(3302795) // "₩3,302,795"
 */
export declare function formatCurrency(amount: number): string;

export declare function formatDate(date: Date, format?: string): any;

declare type GetCurrentUserResponseDto = {
    id: number;
    name: string;
    manager: boolean;
    status: string;
    studentStatus: string;
    createdAt: string;
    updatedAt: string;
};

export declare function KhlugIcon(): JSX_2.Element;

export declare function MainLayout({ children, logoUrl, logoHref, menuItems }: Props_8): JSX_2.Element;

export declare type MenuItem = {
    label: string;
    href: string;
    subItems: SubMenuItem[];
    requiresMember?: boolean;
    requiresManager?: boolean;
    forGuest?: boolean;
};

export declare function NavigationBar({ notificationSlot, logoUrl, logoHref, menuItems, }: Props_9): JSX_2.Element;

export declare function PageNavigator({ currentPage, countPerPage, totalCount, onPageChange, }: Props_6): JSX_2.Element;

declare type Props = {
    isOpen: boolean;
    onRequestClose?: () => void;
    children?: React.ReactNode;
};

declare type Props_10 = {
    children?: React.ReactNode;
};

declare type Props_2 = React.ComponentProps<typeof Button_2> & {
    variant?: Variant;
    disabled?: boolean;
    onClick?: () => void;
};

declare type Props_3 = {
    type?: "info" | "success" | "error" | "warning";
    children?: React.ReactNode;
};

declare type Props_4 = {
    college: string;
};

declare type Props_5 = {
    children?: React.ReactNode;
    className?: string;
};

declare type Props_6 = {
    currentPage: number;
    countPerPage: number;
    totalCount: number;
    onPageChange: (page: number) => void;
};

declare type Props_7 = {
    className?: string;
};

declare type Props_8 = {
    children: React.ReactNode;
    logoUrl?: string;
    logoHref?: string;
    menuItems?: MenuItem[];
};

declare type Props_9 = {
    notificationSlot?: React.ReactNode;
    logoUrl?: string;
    logoHref?: string;
    menuItems?: MenuItem[];
};

export declare type PropsOf<T extends React.ComponentType<any>> = T extends React.ComponentType<infer P> ? P : never;

export declare function RingLoadingIndicator(): JSX_2.Element;

export declare function SimpleLogoLayout({ children }: Props_10): JSX_2.Element;

/**
 * HTML 태그를 제거하고 텍스트만 반환합니다.
 * 중첩된 태그도 처리합니다.
 */
export declare const stripHtmlTags: (html: string) => string;

export declare type SubMenuItem = {
    label: string;
    href: string;
    isDivider?: boolean;
};

export declare const system: any;

export declare const useCurrentUser: () => any;

export declare const useIsManager: () => {
    isLoggedIn: boolean;
    isManager: any;
    isLoading: boolean;
    isError: boolean;
};

export declare const UserPublicApi: {
    getCurrentUser: () => Promise<GetCurrentUserResponseDto>;
};

declare type ValidateResult = {
    result: true;
} | {
    result: false;
    message: string;
};

export declare class Validator {
    static validateUserName(name: string): ValidateResult;
    static validateGrade(grade: number): ValidateResult;
}

declare type Variant = "primary" | "neutral" | "danger";

export { }
