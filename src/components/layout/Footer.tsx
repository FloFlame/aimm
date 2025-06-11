import Link from 'next/link';
import { NAV_LINKS, type NavLink } from '@/lib/constants';
import { Brain } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl font-headline text-primary">AIMinds Revitalize</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              AI-gedreven marketingoplossingen voor meetbare resultaten.
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
              <li>Email: <a href="mailto:info@aiminds.nl" className="hover:text-primary">info@aiminds.nl</a></li>
              <li>Telefoon: <a href="tel:+31123456789" className="hover:text-primary">+31 123 456 789</a></li>
              <li>Adres: Voorbeeldstraat 123, Amsterdam</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border/40 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} AIMinds Revitalize. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
