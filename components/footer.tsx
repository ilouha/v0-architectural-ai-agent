import Link from "next/link"

const footerLinks = {
  product: [
    { label: "Features", href: "#" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Pricing", href: "#" },
    { label: "FAQ", href: "#" }
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" }
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Cookies", href: "#" }
  ],
  social: [
    { label: "Twitter", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" }
  ]
}

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/40 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Logo and description */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs font-[var(--font-heading)]">A</span>
              </div>
              <span className="font-semibold text-[15px] tracking-tight text-foreground font-[var(--font-heading)]">archie</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Your AI-powered pocket architect, making renovations and construction projects approachable for everyone.
            </p>
          </div>

          {/* Product links */}
          <div>
            <p className="font-medium text-xs text-muted-foreground mb-3 font-[var(--font-heading)] uppercase tracking-wider">Product</p>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <p className="font-medium text-xs text-muted-foreground mb-3 font-[var(--font-heading)] uppercase tracking-wider">Company</p>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <p className="font-medium text-xs text-muted-foreground mb-3 font-[var(--font-heading)] uppercase tracking-wider">Legal</p>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div>
            <p className="font-medium text-xs text-muted-foreground mb-3 font-[var(--font-heading)] uppercase tracking-wider">Connect</p>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border/40 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Archie. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built for homeowners, by home builders
          </p>
        </div>
      </div>
    </footer>
  )
}
