import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Mail } from "lucide-react"

const footerLinks = {
  foundation: [
    { href: "/about", label: "About Us" },
    { href: "/programs", label: "Programs" },
    { href: "/recipients", label: "Recipients" },
    { href: "/announcements", label: "Announcements" },
  ],
  applicants: [
    { href: "/apply", label: "Apply Now" },
    { href: "/status", label: "Check Status" },
    { href: "/programs", label: "Eligibility" },
  ],
  connect: [
    { href: "/contact", label: "Contact Us" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/MAIN JPSYF Logo light gold.png"
                alt="JP Samuels Youth Foundation Logo"
                width={160}
                height={53}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-sm text-white/70 leading-relaxed">
              Empowering youth through scholarships, grants, guidance, and opportunities in honor of Jean Pierre Samuels.
            </p>
          </div>

          {/* Foundation Links */}
          <div>
            <h3 className="font-semibold text-gold mb-4">Foundation</h3>
            <ul className="space-y-2">
              {footerLinks.foundation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Applicants Links */}
          <div>
            <h3 className="font-semibold text-gold mb-4">For Applicants</h3>
            <ul className="space-y-2">
              {footerLinks.applicants.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-gold mb-4">Connect</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-white/70 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@jpsamuelsyouthfoundation.org"
                className="text-white/70 hover:text-gold transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              &copy; {new Date().getFullYear()} Jean Pierre Samuels Youth Foundation. All rights reserved.
            </p>
            <p className="text-sm text-white/50">
              In loving memory of Jean Pierre Samuels
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
