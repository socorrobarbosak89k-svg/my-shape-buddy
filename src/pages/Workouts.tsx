import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dumbbell, Clock, TrendingUp, Zap } from "lucide-react";
import workoutImage from "@/assets/workout-gym.jpg";
import walkingImage from "@/assets/workout-woman-walking.jpg";
import strengthImage from "@/assets/workout-woman-strength.jpg";
import aquaticImage from "@/assets/workout-woman-aquatic.jpg";
import stretchingImage from "@/assets/workout-woman-stretching.jpg";
import circuitImage from "@/assets/workout-woman-circuit.jpg";
import yogaImage from "@/assets/workout-woman-yoga.jpg";

const Workouts = () => {
  const workouts = [
    {
      id: "caminhada-cardio-leve",
      title: "Caminhada e Cardio de Baixo Impacto",
      duration: "30 min",
      level: "Iniciante",
      calories: "150-200 kcal",
      description: "Perfeito para começar sua jornada de perda de peso com segurança e conforto.",
      exercises: ["Caminhada moderada", "Elevação de joelhos", "Passos laterais", "Alongamento"],
      image: walkingImage,
      videoUrl: "https://www.youtube.com/embed/KVg_uzdNdAo",
    },
    {
      id: "forca-iniciantes",
      title: "Treino de Força para Iniciantes",
      duration: "25 min",
      level: "Iniciante",
      calories: "180-230 kcal",
      description: "Construa força muscular progressivamente com exercícios adaptados e seguros.",
      exercises: ["Agachamento na cadeira", "Flexão na parede", "Elevação de braços", "Prancha parede"],
      image: strengthImage,
    },
    {
      id: "exercicios-aquaticos",
      title: "Hidroginástica e Exercícios Aquáticos",
      duration: "40 min",
      level: "Iniciante",
      calories: "250-300 kcal",
      description: "Exercícios na água reduzem impacto nas articulações, ideal para perda de peso.",
      exercises: ["Caminhada aquática", "Chutes na água", "Círculos braços", "Alongamento aquático"],
      image: aquaticImage,
      videoUrl: "https://www.youtube.com/embed/xqvCmoLULNY",
    },
    {
      id: "alongamento-mobilidade",
      title: "Alongamento e Mobilidade Suave",
      duration: "20 min",
      level: "Iniciante",
      calories: "80-120 kcal",
      description: "Melhore flexibilidade e reduza dores nas articulações com exercícios suaves.",
      exercises: ["Alongamento pescoço", "Rotação ombros", "Alongamento quadril", "Relaxamento"],
      image: stretchingImage,
    },
    {
      id: "circuito-adaptado",
      title: "Circuito Funcional Adaptado",
      duration: "30 min",
      level: "Intermediário",
      calories: "220-280 kcal",
      description: "Exercícios funcionais adaptados para ganho progressivo de condicionamento.",
      exercises: ["Caminhada rápida", "Agachamento apoio", "Step baixo", "Elevação pernas"],
      image: circuitImage,
    },
    {
      id: "yoga-adaptada",
      title: "Yoga Adaptada para Plus Size",
      duration: "35 min",
      level: "Iniciante",
      calories: "120-170 kcal",
      description: "Posturas modificadas focando em bem-estar, equilíbrio e auto-aceitação.",
      exercises: ["Respiração consciente", "Postura criança", "Gato-vaca", "Meditação"],
      image: yogaImage,
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Iniciante":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Intermediário":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "Avançado":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default:
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/50">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${workoutImage})` }}
        />
        <div className="container relative py-16 md:py-24">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Treinos para Perda de Peso</h1>
            <p className="text-xl text-muted-foreground">
              Treinos especializados para mulheres com foco em perda de peso saudável e sustentável. Exercícios de baixo impacto, seguros e eficazes.
            </p>
          </div>
        </div>
      </section>

      {/* Workouts Grid */}
      <section className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workouts.map((workout, index) => (
            <Card key={index} className="gradient-card shadow-card hover:shadow-primary transition-smooth overflow-hidden">
              <Link to={`/treinos/${workout.id}`}>
                <div className="relative h-48 overflow-hidden cursor-pointer">
                  <img 
                    src={workout.image} 
                    alt={workout.title}
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className={getLevelColor(workout.level)}>
                      {workout.level}
                    </Badge>
                  </div>
                </div>
              </Link>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Dumbbell className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl">{workout.title}</CardTitle>
                <CardDescription>{workout.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {workout.duration}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Zap className="h-4 w-4" />
                    {workout.calories}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-semibold">Exercícios principais:</p>
                  <div className="flex flex-wrap gap-2">
                    {workout.exercises.map((exercise, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {exercise}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button 
                  asChild
                  className="w-full gradient-primary shadow-primary"
                >
                  <Link to={`/treinos/${workout.id}`}>
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Começar Treino
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-12">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8 text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">Treinos Personalizados Disponíveis em Breve</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nossa IA criará treinos completamente personalizados baseados no seu nível, objetivos e equipamentos disponíveis.
            </p>
            <Button size="lg" className="gradient-primary shadow-primary">
              Quero Ser Notificado
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Workouts;
