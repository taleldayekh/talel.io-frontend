export interface PaginationProps {
    count: number;
    page: number;
    onChange: (page: number) => void;
}
