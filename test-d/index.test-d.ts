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
  IconsType,
  PlatformaticIcon,
  CopyAndPaste,
  Icons,
} from "@platformatic/ui-components";

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

// Test IconsType
expectAssignable<IconsType>({
  CircleStopIcon: (() => null) as ComponentType<any>,
  RunningIcon: (() => null) as ComponentType<any>,
  customIcon: "string-value",
});

// Test specific Icons exports
expectType<ComponentType<any>>(Icons.CircleStopIcon);
expectType<ComponentType<any>>(Icons.RunningIcon);

// Test that Icons allows string index access
const dynamicIcon: string | ComponentType<any> = Icons["someIconName"];
expectType<string | ComponentType<any>>(dynamicIcon);
