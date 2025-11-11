import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Dumbbell, MessageSquare, TrendingUp, Zap, Heart } from "lucide-react";
import heroImage from "@/assets/hero-fitness.jpg";

const Home = () => {
  const features = [
    {
      icon: Camera,
      title: "Cálculo de Calorias por Foto",
      description: "Tire uma foto da sua comida e receba instantaneamente as informações nutricionais completas.",
    },
    {
      icon: Dumbbell,
      title: "Treinos Personalizados",
      description: "Planos de treino criados especialmente para seus objetivos e nível de condicionamento.",
    },
    {
      icon: Heart,
      title: "Dietas Sob Medida",
      description: "Dietas personalizadas que se adaptam às suas preferências e restrições alimentares.",
    },
    {
      icon: MessageSquare,
      title: "Suporte 24h por IA",
      description: "Tire suas dúvidas a qualquer hora com nosso assistente inteligente sempre disponível.",
    },
    {
      icon: TrendingUp,
      title: "Acompanhamento de Progresso",
      description: "Monitore sua evolução com gráficos detalhados e conquiste suas metas.",
    },
    {
      icon: Zap,
      title: "Resultados Rápidos",
      description: "Metodologia comprovada para alcançar o shape inexplicável em tempo recorde.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="container relative py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Em Busca do Shape Inexplicável
            </h1>
            <p className="text-xl md:text-2xl text-white/90 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              Revolucione sua jornada fitness com IA, treinos personalizados e suporte 24 horas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-glow text-lg px-8">
                <Link to="/calculadora">Começar Agora - Grátis</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                <Link to="/treinos">Ver Como Funciona</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container py-24">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">Tudo Que Você Precisa Para Transformar</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma plataforma completa para alcançar seus objetivos de forma inteligente e eficiente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="gradient-card border-border hover:shadow-card transition-smooth hover:scale-105"
            >
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-primary">10k+</p>
              <p className="text-muted-foreground">Usuários Ativos</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-primary">500+</p>
              <p className="text-muted-foreground">Treinos Disponíveis</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-primary">95%</p>
              <p className="text-muted-foreground">Taxa de Satisfação</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-primary">24/7</p>
              <p className="text-muted-foreground">Suporte por IA</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">Como Funciona</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Três passos simples para começar sua transformação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="gradient-card shadow-card text-center p-8 space-y-4 border-border">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mx-auto shadow-primary">
                1
              </div>
              <h3 className="text-2xl font-bold">Cadastre-se</h3>
              <p className="text-muted-foreground">
                Crie sua conta e conte-nos sobre seus objetivos e preferências
              </p>
            </Card>

            <Card className="gradient-card shadow-card text-center p-8 space-y-4 border-border">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mx-auto shadow-primary">
                2
              </div>
              <h3 className="text-2xl font-bold">Personalize</h3>
              <p className="text-muted-foreground">
                Receba seu plano personalizado de treinos e dieta sob medida
              </p>
            </Card>

            <Card className="gradient-card shadow-card text-center p-8 space-y-4 border-border">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mx-auto shadow-primary">
                3
              </div>
              <h3 className="text-2xl font-bold">Transforme-se</h3>
              <p className="text-muted-foreground">
                Acompanhe seu progresso e alcance o shape inexplicável
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/50 py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">O Que Nossos Usuários Dizem</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Histórias reais de transformação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="gradient-card shadow-card border-border">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1 text-yellow-500">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "Perdi 15kg em 3 meses! O app é incrível e o suporte por IA me ajudou muito nas dúvidas."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                    M
                  </div>
                  <div>
                    <p className="font-semibold">Maria Silva</p>
                    <p className="text-sm text-muted-foreground">Perdeu 15kg</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card border-border">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1 text-yellow-500">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "Ganhei massa muscular de forma consistente. Os treinos são bem estruturados!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                    J
                  </div>
                  <div>
                    <p className="font-semibold">João Santos</p>
                    <p className="text-sm text-muted-foreground">Ganhou 8kg de massa</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card border-border">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1 text-yellow-500">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "Finalmente consegui criar uma rotina saudável. O app mudou minha vida!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                    A
                  </div>
                  <div>
                    <p className="font-semibold">Ana Costa</p>
                    <p className="text-sm text-muted-foreground">Melhorou saúde geral</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24">
        <Card className="gradient-hero shadow-glow border-0 overflow-hidden">
          <CardContent className="p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Pronto Para Começar Sua Transformação?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Junte-se a milhares de pessoas que já estão transformando seus corpos com nossa plataforma
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 mt-6">
              <Link to="/calculadora">Começar Gratuitamente</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Home;
