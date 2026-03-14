import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-primary/90 shadow-[0_1px_2px_rgba(30,90,168,0.2),0_4px_12px_rgba(30,90,168,0.15)] hover:shadow-[0_2px_4px_rgba(30,90,168,0.25),0_8px_20px_rgba(30,90,168,0.2)] hover:-translate-y-[1px] transition-all',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 shadow-[0_1px_2px_rgba(220,38,38,0.2),0_4px_12px_rgba(220,38,38,0.15)]',
        outline:
          'border border-border bg-white hover:bg-secondary/80 shadow-[0_1px_2px_rgba(30,90,168,0.04)] hover:shadow-[0_1px_3px_rgba(30,90,168,0.08),0_4px_12px_rgba(30,90,168,0.06)] hover:-translate-y-[1px] transition-all',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-muted transition-colors',
        ghost:
          'hover:bg-secondary hover:text-foreground transition-colors',
        link: 'text-primary underline-offset-4 hover:underline',
        amber:
          'bg-amber text-white hover:bg-amber/90 shadow-[0_1px_2px_rgba(217,119,6,0.2),0_4px_12px_rgba(217,119,6,0.15)]',
      },
      size: {
        default: 'h-10 px-5 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-lg gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-12 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-10',
        'icon-sm': 'size-8',
        'icon-lg': 'size-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
