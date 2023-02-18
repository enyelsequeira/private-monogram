import type { ComponentPropsWithRef, JSXElementConstructor } from "react";
import { forwardRef } from "react";
import type { VariantProps } from "cva";

import { cva } from "cva";
import { mergeClasses } from "./helpers/merge-classes";

export interface IContainer extends ComponentPropsWithRef<"div"> {
  as?: string | JSXElementConstructor<any>;
  component?: string | JSXElementConstructor<any>;
}

const containerClasses = cva("", {
  variants: {
    size: {
      sm: "max-w-sm",
      md: "max-w-md",
      contain: "max-w-[1280px]",
    },
  },
});
type InferredVariantProps = VariantProps<typeof containerClasses>;

type ContainerProps = IContainer & InferredVariantProps;
const DEFAULT_ELEMENT = "div";

const Container = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
  const { as = "div", children, size, className, ...rest } = props;

  const Element = as ?? DEFAULT_ELEMENT;
  return (
    <Element
      ref={ref}
      className={mergeClasses(containerClasses({ size }), className)}
      {...rest}
    >
      {children}
    </Element>
  );
});

export default Container;
Container.displayName = "Container";
