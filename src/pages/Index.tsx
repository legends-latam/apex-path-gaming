import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  TrendingUp, 
  Users, 
  Trophy, 
  Zap, 
  Shield, 
  BarChart3, 
  GamepadIcon,
  CheckCircle,
  Star,
  Twitter,
  MessageCircle,
  Youtube,
  Twitch
} from 'lucide-react';
import heroImage from '@/assets/hero-gaming.jpg';
import dashboardImage from '@/assets/dashboard-preview.jpg';
import gamingBackground from '@/assets/gaming-background.jpg';

const Index = () => {
  const [playerCount, setPlayerCount] = useState(15247);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Simulate live player counter
    const interval = setInterval(() => {
      setPlayerCount(prev => prev + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => (
    <span className="tabular-nums font-bold text-2xl md:text-3xl text-glow animate-glow-pulse">
      {value.toLocaleString()}{suffix}
    </span>
  );

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10 animate-grid-move">
        <div className="grid grid-cols-12 gap-4 h-full w-[calc(100%+100px)]">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-neon-green/20 rounded-lg" />
          ))}
        </div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-neon-green/30 rounded-full blur-xl animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-neon-purple/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-neon-cyan/25 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center px-6 lg:px-12 py-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center glow-green">
            <GamepadIcon className="w-8 h-8 text-background" />
          </div>
          <span className="text-2xl font-bold text-glow">LEGENDS</span>
        </div>
        <Button variant="outline" className="glass-card border-neon-green/50 text-neon-green hover:bg-neon-green hover:text-background glow-green">
          Acceso Early Beta
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 lg:px-12 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Badge className="mb-6 bg-neon-green/20 text-neon-green border-neon-green/50 glow-green">
              🎮 Solo Dota 2 Disponible - Otros Juegos Próximamente
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-glow">Entrena con</span>
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Propósito
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-muted-foreground leading-relaxed">
              IA que analiza <span className="text-neon-green font-semibold">+50 variables</span> por partida logra 
              <span className="text-neon-cyan font-semibold"> 49% mejora más rápida</span> vs práctica tradicional. 
              Diseñado para los <span className="text-neon-purple font-semibold">335M jugadores LATAM</span>.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-sm">
              <div className="flex items-center space-x-2 glass-card px-3 py-2 rounded-lg border border-neon-green/20">
                <Shield className="w-4 h-4 text-neon-green" />
                <span>Anti-cheat Certificado</span>
              </div>
              <div className="flex items-center space-x-2 glass-card px-3 py-2 rounded-lg border border-neon-purple/20">
                <Zap className="w-4 h-4 text-neon-purple" />
                <span>IA Validada por Pros</span>
              </div>
              <div className="flex items-center space-x-2 glass-card px-3 py-2 rounded-lg border border-neon-cyan/20">
                <Trophy className="w-4 h-4 text-neon-cyan" />
                <span>Servidores LATAM</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-gradient-primary glow-green text-lg px-8 py-4 hover:scale-105 transition-transform">
                <Play className="w-5 h-5 mr-2" />
                Comenzar Análisis Gratis
              </Button>
              <Button size="lg" variant="outline" className="glass-card border-neon-purple/50 text-neon-purple hover:bg-neon-purple hover:text-background glow-purple">
                Ver Dashboard Demo
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse" />
                <span><AnimatedCounter value={playerCount} suffix="" /> jugadores LATAM</span>
              </div>
              <div className="flex items-center space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-neon-yellow text-neon-yellow" />
                ))}
                <span className="ml-1">4.9/5</span>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="LEGENDS Gaming Setup con Analytics IA" 
                className="rounded-2xl glow-cyan w-full"
              />
              <div className="absolute -bottom-4 -right-4 glass-card p-4 rounded-xl border border-neon-green/30">
                <div className="text-sm text-neon-green font-semibold">Análisis en Tiempo Real</div>
                <div className="text-xs text-muted-foreground">+50 variables por partida</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 px-6 lg:px-12 py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Jugadores LATAM", value: "335M", icon: Users, desc: "Market total LATAM" },
            { label: "Mejora más rápida", value: "49%", icon: TrendingUp, desc: "vs práctica tradicional" },
            { label: "Estancamiento superado", value: "92%", icon: Zap, desc: "jugadores rompen barreras" },
            { label: "Variables analizadas", value: "+50", icon: BarChart3, desc: "por cada partida IA" }
          ].map((stat, index) => (
            <Card key={index} className="glass-card border-neon-green/20 glow-green hover:glow-purple transition-all duration-300">
              <CardContent className="p-6">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-neon-green" />
                <div className="text-3xl font-bold text-glow mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
                <div className="text-xs text-neon-cyan/70 mt-1">{stat.desc}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="relative z-10 px-6 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-glow">
            Jugadores LATAM ya están mejorando
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos M.",
                rank: "Archon III → Legend I",
                improvement: "+680 MMR en 45 días",
                quote: "La IA detectó que mi warding era terrible. 3 semanas después, subí 2 rangos.",
                country: "🇵🇪 Perú"
              },
              {
                name: "Ana G.",
                rank: "Guardian → Crusader V",
                improvement: "+420 MMR en 30 días",
                quote: "Nunca pensé que era tan mala farmeando. El roadmap personalizado funcionó.",
                country: "🇲🇽 México"
              },
              {
                name: "Luis F.",
                rank: "Herald → Guardian III",
                improvement: "+590 MMR en 2 meses",
                quote: "Rompí mi plateau de 6 meses. El análisis IA es brutal de preciso.",
                country: "🇨🇴 Colombia"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="glass-card border-neon-purple/20 hover:glow-green transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="text-sm text-neon-purple font-semibold">{testimonial.country}</div>
                    <div className="text-lg font-bold text-glow">{testimonial.name}</div>
                    <div className="text-sm text-neon-green">{testimonial.rank}</div>
                    <div className="text-xs text-neon-cyan">{testimonial.improvement}</div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
              Por qué LEGENDS funciona
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              67% de jugadores intermedios experimentan <span className="text-neon-red">estancamiento competitivo</span>. 
              Nuestra IA identifica y rompe estas <span className="text-neon-cyan">barreras invisibles</span> que frenan tu progreso.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "IA Anti-Plateau",
                description: "Identifica el problema exacto que causa tu <span className='text-neon-red'>techo de rendimiento</span>. 92% de usuarios rompen barreras en 30 días vs 23% con práctica tradicional.",
                color: "neon-green",
                proof: "Validado por 15,000+ análisis"
              },
              {
                icon: TrendingUp,
                title: "Progreso Competitivo",
                description: "Métricas que usan los pros: GPM efficiency, teamfight positioning, vision score. Dashboard que importan los equipos.",
                color: "neon-purple",
                proof: "Usado por 3 equipos semi-pro LATAM"
              },
              {
                icon: Zap,
                title: "Móvil-First LATAM", 
                description: "87% de gamers LATAM juegan móvil. Entrenamiento offline, pagos PIX/OXXO, servidores regionales.",
                color: "neon-cyan",
                proof: "Optimizado para Perú-Brasil-México"
              }
            ].map((feature, index) => (
              <Card key={index} className="glass-card border-neon-green/20 hover:glow-purple transition-all duration-300 group">
                <CardHeader>
                  <feature.icon className={`w-12 h-12 text-${feature.color} mb-4 group-hover:scale-110 transition-transform`} />
                  <CardTitle className="text-xl text-glow">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">{feature.description}</p>
                  <div className="text-xs text-neon-cyan/70 flex items-center">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    {feature.proof}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Skill Assessment */}
      <section className="relative z-10 px-6 lg:px-12 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-glow">
            ¿Tu progreso se detuvo?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Test rápido: Descubre si estás estancado y qué te detiene (2 minutos)
          </p>
          <Card className="glass-card border-neon-cyan/30 glow-cyan p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-left">
                <h3 className="text-xl font-bold text-glow mb-4">Síntomas de Plateau:</h3>
                {[
                  "Mismas partidas, mismo resultado durante semanas",
                  "No sabes exactamente qué mejorar primero", 
                  "Tu GPM/XPM se mantiene igual por meses",
                  "Sientes que ya no aprendes nada nuevo"
                ].map((symptom, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-neon-red/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-neon-red rounded-full" />
                    </div>
                    <span className="text-sm">{symptom}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <div className="mb-6">
                  <div className="text-4xl font-bold text-neon-cyan mb-2">67%</div>
                  <div className="text-sm text-muted-foreground">de jugadores intermedios alcanzan su techo</div>
                </div>
                <Button size="lg" className="bg-gradient-secondary glow-cyan w-full">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Analizar Mi Nivel Gratis
                </Button>
                <div className="text-xs text-neon-cyan/70 mt-2">
                  ⏱️ 2 minutos • 🎯 Resultado inmediato
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="relative z-10 px-6 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-neon-purple/20 text-neon-purple border-neon-purple/50">
                Dashboard Personalizable
              </Badge>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-glow">
                Tu progreso, visualizado
              </h3>
              <div className="space-y-4 mb-8">
                {[
                  "Hexágono de performance con 6 skills clave",
                  "Métricas detalladas: GPM, XPM, KDA, LH/10min",
                  "Comparación automática vs jugadores top",
                  "Identificación de fortalezas y debilidades",
                  "Roadmap personalizado de mejora"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-neon-green flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-gradient-secondary glow-purple">
                Explorar Dashboard
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={dashboardImage} 
                alt="Dashboard Analytics Preview LEGENDS" 
                className="rounded-2xl glow-purple w-full"
              />
              <div className="absolute top-4 left-4 glass-card p-3 rounded-lg border border-neon-purple/30">
                <div className="text-sm text-neon-purple font-semibold">Guardian II</div>
                <div className="text-xs text-muted-foreground">+250 MMR este mes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative z-10 px-6 lg:px-12 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            Precios LATAM
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Acceso early beta con <span className="text-neon-green">30% descuento de por vida</span>
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Free",
                price: "$0",
                period: "/mes",
                description: "Para empezar tu progreso",
                features: ["3 análisis por semana", "Dashboard básico", "Métricas generales", "Soporte comunidad"],
                cta: "Comenzar Gratis",
                popular: false,
                color: "border-neon-green/30"
              },
              {
                name: "Pro",
                price: "$9",
                period: "/mes USD",
                description: "Recomendado para progreso serio",
                features: ["Análisis ilimitados", "Dashboard completo", "IA personalizada", "Roadmap adaptativo", "Soporte prioritario"],
                cta: "Activar Pro",
                popular: true,
                color: "border-neon-purple glow-purple"
              },
              {
                name: "Elite",
                price: "TBD",
                period: "/2026",
                description: "Próximamente",
                features: ["Todo lo de Pro", "Coaching profesional", "Certificaciones", "Matchmaking premium", "Beta nuevos juegos"],
                cta: "Lista de Espera",
                popular: false,
                color: "border-neon-cyan/30"
              }
            ].map((plan, index) => (
              <Card key={index} className={`glass-card ${plan.color} relative ${plan.popular ? 'scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-background px-4 py-1 glow-green">
                      Más Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-glow">
                    {plan.price}<span className="text-base text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-neon-green" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-primary glow-green' : 'bg-gradient-secondary glow-purple'}`}
                    disabled={plan.name === 'Elite'}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-sm text-muted-foreground">
            <p>💳 PIX, OXXO, Mercado Pago, PayPal, Crypto</p>
            <p>🌎 Precios locales disponibles para toda LATAM</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 lg:px-12 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="glass-card border-neon-green/30 glow-green p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
              ¿Listo para entrenar con propósito?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Únete a <span className="text-neon-green font-semibold">{playerCount.toLocaleString()}</span> jugadores LATAM que ya mejoran sistemáticamente con LEGENDS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary glow-green text-lg px-8 py-4 hover:scale-105 transition-transform animate-glow-pulse">
                <Trophy className="w-5 h-5 mr-2" />
                Comenzar Mi Progreso
              </Button>
              <Button size="lg" variant="outline" className="glass-card border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan hover:text-background glow-cyan">
                <MessageCircle className="w-5 h-5 mr-2" />
                Unirse a Discord
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 lg:px-12 py-12 border-t border-neon-green/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center glow-green">
                  <GamepadIcon className="w-6 h-6 text-background" />
                </div>
                <span className="text-xl font-bold text-glow">LEGENDS</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Maximiza tu potencial en eSports con IA personalizada para LATAM.
              </p>
              <div className="flex space-x-3">
                {[
                  { icon: MessageCircle, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Twitch, href: "#" },
                  { icon: Youtube, href: "#" }
                ].map((social, index) => (
                  <a key={index} href={social.href} className="w-8 h-8 bg-neon-green/20 rounded-lg flex items-center justify-center hover:bg-neon-green hover:text-background transition-colors glow-green">
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-neon-green">Plataforma</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Dashboard</p>
                <p>Análisis IA</p>
                <p>Entrenamiento</p>
                <p>Certificaciones</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-neon-purple">Juegos</h4>
              <div className="space-y-2 text-sm">
                <p className="text-neon-green">✅ Dota 2</p>
                <p className="text-muted-foreground">🔄 League of Legends</p>
                <p className="text-muted-foreground">🔄 Valorant</p>
                <p className="text-muted-foreground">🔄 CS2</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-neon-cyan">Regiones LATAM</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>🇲🇽 México</p>
                <p>🇨🇴 Colombia</p>
                <p>🇵🇪 Perú</p>
                <p>🇨🇱 Chile</p>
                <p>🇦🇷 Argentina</p>
                <p>🇧🇷 Brasil</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-neon-green/20 mt-8 pt-6 text-center">
            <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
              <p>&copy; 2024 LEGENDS LATAM. Todos los derechos reservados.</p>
              <p>
                <a href="mailto:contact@legendslatam.com" className="text-neon-green hover:text-neon-cyan transition-colors">
                  contact@legendslatam.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;