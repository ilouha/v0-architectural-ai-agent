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
    <footer className="py-16 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Logo and description */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-sm">A</span>
              </div>
              <span className="font-semibold text-lg tracking-tight">archie</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Your AI-powered pocket architect, making renovations and construction projects approachable for everyone.
            </p>
          </div>

          {/* Product links */}
          <div>
            <p className="font-medium text-sm mb-4">Product</p>
            <ul className="flex flex-col gap-3">
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
            <p className="font-medium text-sm mb-4">Company</p>
            <ul className="flex flex-col gap-3">
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
            <p className="font-medium text-sm mb-4">Legal</p>
            <ul className="flex flex-col gap-3">
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
            <p className="font-medium text-sm mb-4">Connect</p>
            <ul className="flex flex-col gap-3">
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
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Archie. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built for homeowners, by home builders
          </p>
        </div>
      </div>
    </footer>
  )
}
