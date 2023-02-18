import { cva } from "cva";
import type { VariantProps } from "cva";

import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";
import { mergeClasses } from "./helpers/merge-classes";

const textClasses = cva("font-primary", {
  variants: {
    variant: {
      h1: "lg:text-[133px] font-black leading-[152px] tracking-[-0.039em] text-7xl",
      h2: "lg:text-[76px] leading-[92px] tracking-[-0.039em] font-black text-3xl",
      sub: "font-light lg:text-lg tracking-[0.005em] leading-[195.5%] text-sm",
      semi: "font-normal text-2xl  leading-[162%]",
      numbers: "font-bold text-[63px] leading-[76px] tracking-[-0.039em]",
    },
    color: {
      white: "text-white",
      black: "text-black",
      gray: "text-[#757575]",
      accent: "#EFFFE2",
      accentP: "#C7C7C7",
    },
  },
});

enum Component {
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span,
}
type InferredVariantProps = VariantProps<typeof textClasses>;

export interface ITypography
  extends ComponentPropsWithoutRef<"p">,
    ComponentPropsWithoutRef<"h1"> {
  as?: keyof typeof Component;
  component?: keyof typeof Component;
}

type TypographyProps = ITypography & InferredVariantProps;

const Typography = forwardRef<HTMLDivElement, TypographyProps>(
  (props, ref): JSX.Element => {
    const { as = "p", children, variant, color, className, ...rest } = props;

    const Element = as ?? Component.p;
    return (
      <Element
        ref={ref}
        {...((className || variant) && {
          className: mergeClasses(textClasses({ variant, color }), className),
        })}
        {...rest}
      >
        {children}
      </Element>
    );
  }
);

export default Typography;

Typography.displayName = "Typography";
