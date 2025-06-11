
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE, COMPANY_NAME } from '@/lib/constants';
import { Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Basic Form Component (Can be expanded with react-hook-form later if needed)
function ContactForm() {
  return (
    <form className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground">Volledige naam</label>
        <input type="text" name="name" id="name" autoComplete="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 input-custom-border" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground">E-mailadres</label>
        <input type="email" name="email" id="email" autoComplete="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 input-custom-border" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground">Bericht</label>
        <textarea name="message" id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 input-custom-border"></textarea>
      </div>
      <div>
        <Button type="submit" className="w-full" disabled>Verstuur (Formulier nog niet actief)</Button>
      </div>
    </form>
  );
}


export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
          Neem <span className="text-primary">Contact</span> Op
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Heeft u vragen of wilt u kennismaken? Wij horen graag van u!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold font-headline text-primary">Contactgegevens</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              U kunt ons bereiken via e-mail of telefoon. We streven ernaar zo snel mogelijk te reageren.
            </p>
            <div className="space-y-4">
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center text-lg text-foreground hover:text-primary transition-colors group">
                <Mail className="h-6 w-6 mr-3 text-primary/80 group-hover:text-primary" />
                <span>{CONTACT_EMAIL}</span>
              </a>
              <a href={`tel:${CONTACT_PHONE}`} className="flex items-center text-lg text-foreground hover:text-primary transition-colors group">
                <Phone className="h-6 w-6 mr-3 text-primary/80 group-hover:text-primary" />
                <span>{CONTACT_PHONE_DISPLAY}</span>
              </a>
            </div>
            {/* Add address or other details if needed 
            <div className="pt-4 border-t">
                <h3 className="font-semibold text-foreground mb-2">Bedrijfsgegevens</h3>
                <p className="text-sm text-muted-foreground">{COMPANY_NAME}</p>
                <p className="text-sm text-muted-foreground">Adres: Voorbeeldstraat 123, 1000AB Amsterdam</p>
                <p className="text-sm text-muted-foreground">KVK: 12345678</p>
            </div>
            */}
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold font-headline text-primary">Stuur ons een bericht</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
