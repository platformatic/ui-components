import { expectType, expectAssignable } from "tsd";
import { ComponentType } from "react";
import {
  VerticalSeparatorProps,
  Checkbox,
  BorderedBox,
  Button,
  HorizontalSeparator,
  LoadingSpinnerV2,
  Tooltip,
  VerticalSeparator,
  TooltipAbsolute,
  PlatformaticIconProps,
  CopyAndPasteProps,
  PlatformaticIcon,
  CopyAndPaste,
  Icons,
  Forms,
  ToggleSwitchProps,
  InputProps,
  SelectProps,
  CheckboxProps,
  RadioButtonProps,
  IconProps,
} from "@platformatic/ui-components";

// Test that Forms components are properly typed as React ComponentType
expectType<ComponentType<ToggleSwitchProps>>(Forms.ToggleSwitch);
expectType<ComponentType<InputProps>>(Forms.Input);
expectType<ComponentType<SelectProps>>(Forms.Select);
expectType<ComponentType<CheckboxProps>>(Forms.Checkbox);
expectType<ComponentType<RadioButtonProps>>(Forms.RadioButton);

// Test VerticalSeparatorProps interface
expectAssignable<VerticalSeparatorProps>({});
expectAssignable<VerticalSeparatorProps>({
  color: "red",
  backgroundColorOpacity: "0.5",
  classes: "custom-class",
  height: "100px",
  width: "2px",
  marginLeft: "10px",
  marginRight: "10px",
});

// Test PlatformaticIconProps interface
expectAssignable<PlatformaticIconProps>({
  iconName: "test-icon",
});
expectAssignable<PlatformaticIconProps>({
  iconName: "test-icon",
  color: "blue",
  size: "large",
  onClick: () => {},
  disabled: false,
  inactive: true,
  className: "custom-icon",
  internalOverHandling: true,
});

// Test CopyAndPasteProps interface
expectAssignable<CopyAndPasteProps>({
  value: "test",
});
expectAssignable<CopyAndPasteProps>({
  value: { test: "object" },
  tooltipLabel: "Copy me",
  color: "green",
  size: "small",
  tooltipClassName: "custom-tooltip",
  position: "top",
});

// Test that components are properly typed as React ComponentType
expectType<ComponentType<any>>(Checkbox);
expectType<ComponentType<any>>(BorderedBox);
expectType<ComponentType<any>>(Button);
expectType<ComponentType<any>>(HorizontalSeparator);
expectType<ComponentType<any>>(LoadingSpinnerV2);
expectType<ComponentType<any>>(Tooltip);
expectType<ComponentType<VerticalSeparatorProps>>(VerticalSeparator);
expectType<ComponentType<any>>(TooltipAbsolute);
expectType<ComponentType<PlatformaticIconProps>>(PlatformaticIcon);
expectType<ComponentType<CopyAndPasteProps>>(CopyAndPaste);

// Test specific Icons exports
expectType<ComponentType<IconProps>>(Icons.CircleStopIcon);
expectType<ComponentType<IconProps>>(Icons.RunningIcon);

// Test that Icons allows string index access
const dynamicIcon: string | ComponentType<any> = Icons["someIconName"];
expectType<ComponentType<any>>(dynamicIcon);
