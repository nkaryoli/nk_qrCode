import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium hover:scale-[1.02] transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-[rgba(255,255,255,0)_0px_0px_0px_1px,rgba(255,255,255,0)_0px_0px_0px_0px_inset,rgba(34,42,53,0.2)_0px_2px_3px_0px,rgba(0,0,0,0.24)_0px_1px_1px_0px] ",
  {
    variants: {
      variant: {
        destructive:
          "bg-destructive text-destructive-foreground shadow-md hover:bg-input font-bold",
        secondary:
          "bg-input text-foreground hover:font-bold hover:border hover:border-primary hover:text-primary ",
        outline:
          "border border-ring  shadow-sm hover:bg-input hover:text-secondary-foreground hover:border-none",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        sunset:
          "bg-gradient-to-r from-primary via-accent to-secondary text-white font-bold hover:from-accent hover:via-secondary hover:to-primary transition-bg [&>svg]:text-white/90",
        neon:
          "bg-background text-primary border border-primary hover:shadow-[0_0_12px_var(--primary)]",
        glow:
          "bg-primary text-primary-foreground hover:scale-[1.03] hover:bg-chart-1 font-bold",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 px-4 text-xs rounded-sm",
        lg: "h-12 px-8 text-xl",
        icon: "h-10 w-10 rounded-md",
        rounded: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "glow",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
