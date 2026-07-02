import { MessageCircle, Mail, Instagram, Heart } from 'lucide-react'
import { profile } from '../data/profile'

const contactLinks = [
  {
    icon: MessageCircle,
    label: 'Chamar no WhatsApp',
    href: `https://wa.me/${profile.contact.whatsapp}?text=${encodeURIComponent(profile.contact.whatsappMessage)}`,
    gradient: 'from-dourado to-rosa-metalico',
    hoverShadow: 'hover:shadow-dourado/40',
  },
  {
    icon: Mail,
    label: 'Enviar e-mail',
    href: `mailto:${profile.contact.email}?subject=${encodeURIComponent(profile.contact.emailSubject)}`,
    gradient: 'from-rosa-metalico to-dourado',
    hoverShadow: 'hover:shadow-dourado/40',
  },
  {
    icon: Instagram,
    label: 'Ver Instagram',
    href: profile.social.instagram.url,
    gradient: 'from-dourado to-rosa-metalico',
    hoverShadow: 'hover:shadow-dourado/40',
  },
]

export default function FinalCTA() {
  const year = new Date().getFullYear()

  return (
    <section id="contact" className="relative py-20 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-cafe" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-1/4 right-0 w-64 h-64 border border-dourado/10 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-1/4 left-0 w-48 h-48 border border-dourado/10 rounded-full -translate-y-1/2 -translate-x-1/3" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dourado/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dourado/40 to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10 text-center reveal" data-parallax-speed="-0.06">
        <span className="inline-block text-xs tracking-[0.25em] uppercase text-dourado/70 font-semibold mb-4">
          Contato
        </span>

        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-offwhite mb-4 leading-[1.1]">
          Bora{' '}
          <span className="gradient-text font-cursive">conversar?</span>
        </h2>

        <div className="w-16 h-0.5 bg-gradient-to-r from-dourado/80 to-rosa-metalico/60 rounded-full mx-auto mb-6" />

        <p className="text-bege/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 md:mb-12">
          Quer levar sua marca para um público autêntico, engajado e apaixonado por conteúdo de qualidade? Vamos criar uma parceria com conteúdo bonito, verdadeiro e estratégico.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12 md:mb-16">
          {contactLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r ${link.gradient} text-white font-medium text-sm tracking-wide transition-all duration-500 hover:-translate-y-1 shadow-lg ${link.hoverShadow} relative overflow-hidden before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-500 before:rounded-xl hover:before:opacity-100 before:bg-white/10`}
              >
                <Icon size={18} />
                {link.label}
              </a>
            )
          })}
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="font-cursive text-4xl md:text-5xl text-dourado">
            {profile.name}
          </p>

          <p className="text-bege/50 text-xs tracking-[0.15em] uppercase font-sans">
            Influenciadora Digital & UGC Creator
          </p>

          <div className="flex items-center gap-4 mt-2">
            <a
              href={profile.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bege/40 hover:text-dourado transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href={profile.social.tiktok.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bege/40 hover:text-dourado transition-colors"
              aria-label="TikTok"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5Z" />
                <path d="M10 12a3 3 0 1 0 3 3V6c.3.5 1 1 2 1" />
              </svg>
            </a>
            <span className="text-bege/20 mx-2">|</span>
            <span className="text-bege/40 text-xs font-sans">{profile.username}</span>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 md:mt-14 pt-6 md:pt-8">
          <p className="text-bege/40 text-xs flex items-center justify-center gap-1">
            {profile.name} &copy; {year} &mdash; Influenciadora Digital & UGC Creator
            <Heart size={10} className="text-dourado/60 ml-1" />
          </p>
        </div>
      </div>
    </section>
  )
}
