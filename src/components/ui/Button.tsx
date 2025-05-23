import * as React from "react"
import { useState } from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  showCodeAnimation?: boolean
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, showCodeAnimation = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    
    const Comp = asChild ? Slot : "button"
    return (
      <div className="relative">
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          {...props}
        />
        
        {showCodeAnimation && isHovered && (
          <div className="absolute left-1/2 bottom-full mb-2 bg-black/80 text-white p-2 rounded w-48 z-50 animate-fade-in-up">
            <pre className="text-xs">
              <code className="typing-animation">
                {`function calculate() {
  return data.map(d => 
    d.value * 1.5);
}`}
              </code>
            </pre>
          </div>
        )}
      </div>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants } 