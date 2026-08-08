import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#0B1B3A] text-white shadow-sm hover:bg-[#10264D]",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-slate-300 bg-white text-[#0B1B3A] shadow-xs hover:bg-slate-50 hover:border-slate-400 font-bold",
        secondary: "bg-slate-100 text-[#0B1B3A] hover:bg-slate-200 font-semibold",
        ghost: "text-[#0B1B3A] hover:bg-slate-100 hover:text-[#0B1B3A] font-bold",
        link: "text-[#0B1B3A] underline-offset-4 hover:underline font-semibold",
        gold: "bg-[image:var(--gradient-gold)] text-slate-950 font-extrabold shadow-[var(--shadow-gold)] hover:brightness-[1.05] active:brightness-95 disabled:bg-slate-200 disabled:text-slate-500 disabled:border disabled:border-slate-300 disabled:shadow-none",
        goldOutline:
          "border border-amber-500/60 text-amber-900 bg-amber-50/60 hover:bg-amber-100 font-bold",
        navy: "bg-[#0B1B3A] text-white shadow-md hover:bg-[#10264D]",
        navyOutline:
          "border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50 shadow-sm font-bold",
        navyGhost:
          "text-white/90 hover:bg-white/15 hover:text-white font-bold",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-xl px-7 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
