import { ComponentType } from "react";

declare module "@platformatic/ui-components" {
  export interface VerticalSeparatorProps {
    color?: string;
    backgroundColorOpacity?: string;
    classes?: string;
    height?: string;
    width?: string;
    marginLeft?: string;
    marginRight?: string;
  }
  export const Checkbox: ComponentType<any>;
  export const BorderedBox: ComponentType<any>;
  export const Button: ComponentType<any>;
  export const HorizontalSeparator: ComponentType<any>;
  export const LoadingSpinnerV2: ComponentType<any>;
  export const Tooltip: ComponentType<any>;
  export const VerticalSeparator: ComponentType<VerticalSeparatorProps>;
  export const TooltipAbsolute: ComponentType<any>;

  export interface PlatformaticIconProps {
    iconName: string;
    color?: string;
    size?: string;
    onClick?: (() => void) | null;
    disabled?: boolean;
    inactive?: boolean;
    className?: string;
    internalOverHandling?: boolean;
  }

  export interface CopyAndPasteProps {
    value: unknown;
    tooltipLabel?: string;
    color?: string;
    size?: string;
    tooltipClassName?: string;
    position?: string;
  }

  export const PlatformaticIcon: ComponentType<PlatformaticIconProps>;
  export const CopyAndPaste: ComponentType<CopyAndPasteProps>;

  interface IconProps {
    size?: string;
    color?: string;
    addImportantToColor?: boolean;
    className?: string;
  }

  export const Icons: {
    AppIcon: ComponentType<IconProps>;
    AlertIcon: ComponentType<IconProps>;
    ArrowUpIcon: ComponentType<IconProps>;
    ArrowDownIcon: ComponentType<IconProps>;
    CircleCheckMarkIcon: ComponentType<IconProps>;
    CLIIcon: ComponentType<IconProps>;
    [key: string]: ComponentType<IconProps>;
  };

  interface ToggleSwitchProps {
    label?: string;
    labelClassName?: string;
    name: string;
    onChange: () => void;
    checked: boolean;
    size?: string;
  }

  interface InputProps {
    label?: string;
    placeholder?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    type?: string;
    error?: string;
    className?: string;
    disabled?: boolean;
  }

  interface SelectProps {
    label?: string;
    options: Array<{ label: string; value: string }>;
    value: string;
    onChange: (value: string) => void;
    name: string;
    placeholder?: string;
    error?: string;
    className?: string;
    disabled?: boolean;
  }

  interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: () => void;
    name: string;
    disabled?: boolean;
  }

  interface RadioButtonProps {
    label: string;
    value: string;
    checked: boolean;
    onChange: () => void;
    name: string;
    disabled?: boolean;
  }

  export const Forms: {
    ToggleSwitch: ComponentType<ToggleSwitchProps>;
    Input: ComponentType<InputProps>;
    Select: ComponentType<SelectProps>;
    Checkbox: ComponentType<CheckboxProps>;
    RadioButton: ComponentType<RadioButtonProps>;
  };
}
