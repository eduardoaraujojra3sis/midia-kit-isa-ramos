import {
  Video,
  Play,
  ListVideo,
  Image,
  Film,
  Gift,
  Package,
  Briefcase,
  Calendar,
  Camera,
  FileText,
  Star,
  CalendarCheck,
  Sparkles,
} from 'lucide-react'
import Tilt3D from './Tilt3D'
import { profile } from '../data/profile'

const iconMap = {
  video: Video,
  play: Play,
  'list-video': ListVideo,
  image: Image,
  film: Film,
  gift: Gift,
  package: Package,
  briefcase: Briefcase,
  calendar: Calendar,
  camera: Camera,
  'file-text': FileText,
  star: Star,
  'calendar-check': CalendarCheck,
  sparkles: Sparkles,
} as const

export default function Partnerships() {
  return (
    <section id="partnerships" className="relative py-20 md:py-32 px-6">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-bege/20 via-offwhite to-bege/20" />

      <div className="max-w-7xl mx-auto relative z-10 reveal-right">
        <div className="text-center mb-12 md:mb-16">
          <span className="section-label">Parcerias</span>
          <h2 className="section-title font-display text-balance">
            Formatos de{' '}
            <span className="gradient-text">parceria</span>
          </h2>
          <p className="section-subtitle mt-4 md:mt-6">
            Soluções criativas para cada objetivo de campanha, com entregas personalizadas e resultados mensuráveis.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
          {profile.partnerships.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap]
            return (
              <Tilt3D key={item.label} maxTilt={5} scale={1.02} perspective={800} className="animate-stagger" style={{ animationDelay: `${i * 0.06}s` }}>
                <div className="card text-center py-6 px-4 group !shadow-md !shadow-bege/20 hover:!shadow-lg hover:!shadow-dourado/20 tilt-card-inner">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-bege/20 to-bege/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={18} className="text-cafe" />
                  </div>
                  <p className="text-cafe text-xs md:text-sm font-medium leading-snug">
                    {item.label}
                  </p>
                </div>
              </Tilt3D>
            )
          })}
        </div>
      </div>
    </section>
  )
}
