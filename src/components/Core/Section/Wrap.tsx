import clsx from "clsx";
import { forwardRef } from "react";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const WrapSection = forwardRef<HTMLElement, IProps>(
  (props: IProps, ref) => {
    const { children, className, ...restProp } = props;

    return (
      <section
        ref={ref}
        className={clsx("md:py-10 py-5", className)}
        {...restProp}>
        {children}
      </section>
    );
  },
);
