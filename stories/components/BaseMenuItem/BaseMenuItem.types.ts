export type BaseMenuItemProps = {
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
  children: string;
};

export type ContainerProps = Omit<Required<BaseMenuItemProps>, 'children'>;
