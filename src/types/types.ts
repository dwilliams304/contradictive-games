export type Dropdown ={
    title: string;
    options: DropdownOptions[];
}
export type DropdownOptions = {
    content: string;
    action: () => void;
}