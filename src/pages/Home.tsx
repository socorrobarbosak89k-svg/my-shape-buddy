import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Dumbbell, Heart } from "lucide-react";
import heroImage from "@/assets/hero-fitness.jpg";

const Home = () => {
  const mainFeatures = [
    {
      icon: Dumbbell,
      title: "Treinos",
      description: "Programas de exercícios especializados em perda de peso",
      link: "/treinos",
      gradient: "from-primary to-primary/80"
    },
    {
      icon: Heart,
      title: "Dietas",
      description: "Planos alimentares personalizados para seus objetivos",
      link: "/dietas",
      gradient: "from-accent to-accent/80"
    },
    {
      icon: Camera,
      title: "Calculadora",
      description: "Calcule calorias tirando foto da sua comida",
      link: "/calculadora",
      gradient: "from-secondary to-secondary/80"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Simplificado */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="container relative py-20 md:py-28">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Transforme Seu Corpo com Inteligência
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Treinos, dietas e suporte especializado em perda de peso
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-glow text-lg px-12 py-6 h-auto mt-8"
            >
              <Link to="/treinos">Começar Agora</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Features - 3 Cards Principais */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-3">O Que Você Vai Encontrar</h2>
          <p className="text-muted-foreground text-lg">
            Tudo que você precisa em um só lugar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {mainFeatures.map((feature, index) => (
            <Link key={index} to={feature.link} className="block">
              <Card className="border-2 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer h-full">
                <CardHeader className="text-center space-y-4 pb-8">
                  <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient}`}>
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center pb-6">
                  <Button variant="outline" className="w-full">
                    Acessar
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Final - Simplificado */}
      <section className="container py-16 md:py-20">
        <Card className="gradient-card border-0 overflow-hidden">
          <CardContent className="text-center space-y-6 py-12 md:py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Pronto Para Começar Sua Transformação?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Dê o primeiro passo hoje e alcance os resultados que você sempre quis
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-10 mt-4"
            >
              <Link to="/treinos">Começar Treinos</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Home;
