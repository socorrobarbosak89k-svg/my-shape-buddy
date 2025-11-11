import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dumbbell, Clock, TrendingUp, Zap } from "lucide-react";
import workoutImage from "@/assets/workout-gym.jpg";
import fullbodyImage from "@/assets/workout-fullbody.jpg";
import hiitImage from "@/assets/workout-hiit.jpg";
import upperImage from "@/assets/workout-upper.jpg";
import coreImage from "@/assets/workout-core.jpg";
import legsImage from "@/assets/workout-legs.jpg";
import mobilityImage from "@/assets/workout-mobility.jpg";

const Workouts = () => {
  const workouts = [
    {
      id: "fullbody-iniciante",
      title: "Treino Full Body Iniciante",
      duration: "45 min",
      level: "Iniciante",
      calories: "300 kcal",
      description: "Treino completo para trabalhar todos os grupos musculares. Perfeito para quem está começando.",
      exercises: ["Agachamento", "Flexão", "Prancha", "Remada"],
      image: fullbodyImage,
    },
    {
      id: "hiit-intenso",
      title: "HIIT Intenso",
      duration: "30 min",
      level: "Avançado",
      calories: "450 kcal",
      description: "Treino de alta intensidade para queima máxima de calorias e condicionamento cardiovascular.",
      exercises: ["Burpees", "Mountain Climbers", "Jump Squats", "Sprint"],
      image: hiitImage,
    },
    {
      id: "hipertrofia-superiores",
      title: "Hipertrofia Membros Superiores",
      duration: "60 min",
      level: "Intermediário",
      calories: "350 kcal",
      description: "Foco em ganho de massa muscular para peito, costas, ombros e braços.",
      exercises: ["Supino", "Pulldown", "Rosca Direta", "Desenvolvimento"],
      image: upperImage,
    },
    {
      id: "core-abdomen",
      title: "Core & Abdômen",
      duration: "30 min",
      level: "Todos",
      calories: "200 kcal",
      description: "Fortalecimento do core e definição abdominal com exercícios funcionais.",
      exercises: ["Prancha", "Russian Twist", "Leg Raises", "Bicycle Crunch"],
      image: coreImage,
    },
    {
      id: "treino-pernas",
      title: "Treino de Pernas",
      duration: "55 min",
      level: "Intermediário",
      calories: "400 kcal",
      description: "Desenvolvimento completo de membros inferiores e glúteos.",
      exercises: ["Agachamento Livre", "Leg Press", "Stiff", "Panturrilha"],
      image: legsImage,
    },
    {
      id: "mobilidade-alongamento",
      title: "Mobilidade & Alongamento",
      duration: "40 min",
      level: "Todos",
      calories: "150 kcal",
      description: "Melhore sua flexibilidade e previna lesões com rotina completa de alongamento.",
      exercises: ["Yoga Flow", "Alongamento Dinâmico", "Foam Rolling", "Respiração"],
      image: mobilityImage,
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
            <h1 className="text-4xl md:text-5xl font-bold">Treinos Personalizados</h1>
            <p className="text-xl text-muted-foreground">
              Planos de treino desenvolvidos especialmente para seus objetivos. Do iniciante ao avançado.
            </p>
          </div>
        </div>
      </section>

      {/* Workouts Grid */}
      <section className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workouts.map((workout, index) => (
            <Card key={index} className="gradient-card shadow-card hover:shadow-primary transition-smooth overflow-hidden">
              <div className="relative h-48 overflow-hidden">
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
