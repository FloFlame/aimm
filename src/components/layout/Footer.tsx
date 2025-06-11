
import Link from 'next/link';
import { NAV_LINKS, COMPANY_NAME, CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE, type NavLink } from '@/lib/constants';
import { Brain, Mail, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl font-headline text-primary">{COMPANY_NAME}</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Praktische AI-oplossingen voor jouw werk.
            </p>
          </div>
          <div>
            <h3 className="text-md font-semibold text-foreground mb-4">Snelle Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link: NavLink) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold text-foreground mb-4">Contacteer Ons</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary/80" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primary">{CONTACT_EMAIL}</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary/80" />
                <a href={`tel:${CONTACT_PHONE}`} className="hover:text-primary">{CONTACT_PHONE_DISPLAY}</a>
              </li>
              {/* Add address if available
              <li>Adres: Voorbeeldstraat 123, Amsterdam</li>
              */}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border/40 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {COMPANY_NAME}. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
