import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-input",
        outline:
          "border border-ring bg-background shadow-sm hover:bg-input hover:text-secondary-foreground hover:border-none",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        sunset:
          "bg-gradient-to-r from-primary via-accent to-secondary text-white font-bold shadow-sm hover:shadow-[0_0_8px_var(--primary)]  [&>svg]:text-white/90",
        neon:
          "bg-background text-primary border border-primary shadow-md hover:shadow-[0_0_12px_var(--primary)]",
        glow:
          "bg-primary text-primary-foreground shadow-lg hover:shadow-[0_0_6px_var(--primary)]",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 rounded-md px-4 text-xs",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "h-10 w-10",
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
