import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Zap, TrendingUp, CheckCircle2 } from "lucide-react";
import fullbodyImage from "@/assets/workout-fullbody.jpg";
import hiitImage from "@/assets/workout-hiit.jpg";
import upperImage from "@/assets/workout-upper.jpg";
import coreImage from "@/assets/workout-core.jpg";
import legsImage from "@/assets/workout-legs.jpg";
import mobilityImage from "@/assets/workout-mobility.jpg";

const WorkoutDetail = () => {
  const { id } = useParams();

  const workouts = [
    {
      id: "fullbody-iniciante",
      title: "Treino Full Body Iniciante",
      duration: "45 min",
      level: "Iniciante",
      calories: "300 kcal",
      description: "Treino completo para trabalhar todos os grupos musculares. Perfeito para quem está começando.",
      image: fullbodyImage,
      exercises: [
        { name: "Agachamento Livre", sets: "3x12", rest: "60s", tips: "Mantenha o core contraído e joelhos alinhados" },
        { name: "Flexão de Braço", sets: "3x10", rest: "60s", tips: "Corpo reto, desça até o peito quase tocar o chão" },
        { name: "Prancha Isométrica", sets: "3x30s", rest: "45s", tips: "Mantenha quadril alinhado, não deixe cair" },
        { name: "Remada com Elástico", sets: "3x15", rest: "60s", tips: "Puxe os cotovelos para trás, aperte as escápulas" },
        { name: "Afundo Alternado", sets: "3x10", rest: "60s", tips: "Joelho não deve ultrapassar a ponta do pé" },
      ],
      warmup: ["5 min de caminhada leve", "Alongamento dinâmico", "Mobilidade articular"],
      cooldown: ["Alongamento estático", "Respiração profunda", "Hidratação"],
    },
    {
      id: "hiit-intenso",
      title: "HIIT Intenso",
      duration: "30 min",
      level: "Avançado",
      calories: "450 kcal",
      description: "Treino de alta intensidade para queima máxima de calorias.",
      image: hiitImage,
      exercises: [
        { name: "Burpees", sets: "4x20s", rest: "40s", tips: "Explosão máxima no salto" },
        { name: "Mountain Climbers", sets: "4x30s", rest: "30s", tips: "Velocidade máxima mantendo forma" },
        { name: "Jump Squats", sets: "4x15", rest: "45s", tips: "Aterrissagem suave" },
        { name: "Sprint no Lugar", sets: "4x30s", rest: "30s", tips: "Joelhos altos" },
        { name: "Prancha com Toque no Ombro", sets: "4x20", rest: "40s", tips: "Minimize rotação do quadril" },
      ],
      warmup: ["3 min de polichinelos", "Rotação de articulações", "Ativação cardíaca"],
      cooldown: ["Caminhada leve", "Alongamento completo", "Respiração controlada"],
    },
    {
      id: "hipertrofia-superiores",
      title: "Hipertrofia Membros Superiores",
      duration: "60 min",
      level: "Intermediário",
      calories: "350 kcal",
      description: "Foco em ganho de massa muscular para peito, costas, ombros e braços.",
      image: upperImage,
      exercises: [
        { name: "Supino Reto", sets: "4x10", rest: "90s", tips: "Barra na linha dos mamilos" },
        { name: "Pulldown Aberto", sets: "4x12", rest: "90s", tips: "Puxe até o peito alto" },
        { name: "Rosca Direta", sets: "3x12", rest: "60s", tips: "Cotovelos fixos" },
        { name: "Desenvolvimento Militar", sets: "4x10", rest: "90s", tips: "Core estável" },
        { name: "Tríceps Testa", sets: "3x12", rest: "60s", tips: "Apenas cotovelos se movem" },
      ],
      warmup: ["Aquecimento articular", "Séries de ativação", "Alongamento dinâmico"],
      cooldown: ["Alongamento muscular", "Liberação miofascial", "Hidratação com proteína"],
    },
    {
      id: "core-abdomen",
      title: "Core & Abdômen",
      duration: "30 min",
      level: "Todos",
      calories: "200 kcal",
      description: "Fortalecimento do core e definição abdominal.",
      image: coreImage,
      exercises: [
        { name: "Prancha Frontal", sets: "3x45s", rest: "30s", tips: "Corpo reto como tábua" },
        { name: "Russian Twist", sets: "3x20", rest: "45s", tips: "Rotação controlada" },
        { name: "Elevação de Pernas", sets: "3x15", rest: "45s", tips: "Lombar no chão" },
        { name: "Bicycle Crunch", sets: "3x20", rest: "45s", tips: "Cotovelo toca joelho oposto" },
        { name: "Prancha Lateral", sets: "3x30s", rest: "30s", tips: "Corpo alinhado" },
      ],
      warmup: ["Ativação do core", "Respiração diafragmática", "Mobilidade de tronco"],
      cooldown: ["Alongamento de lombar", "Respiração relaxante", "Liberação de tensão"],
    },
    {
      id: "treino-pernas",
      title: "Treino de Pernas",
      duration: "55 min",
      level: "Intermediário",
      calories: "400 kcal",
      description: "Desenvolvimento completo de membros inferiores e glúteos.",
      image: legsImage,
      exercises: [
        { name: "Agachamento Livre", sets: "4x12", rest: "120s", tips: "Profundidade completa" },
        { name: "Leg Press 45°", sets: "4x15", rest: "90s", tips: "Pés na largura dos ombros" },
        { name: "Stiff", sets: "4x12", rest: "90s", tips: "Joelhos levemente flexionados" },
        { name: "Elevação de Panturrilha", sets: "4x20", rest: "60s", tips: "Amplitude completa" },
        { name: "Cadeira Extensora", sets: "3x15", rest: "60s", tips: "Contração no topo" },
      ],
      warmup: ["5 min de bike", "Mobilidade de quadril", "Ativação de glúteos"],
      cooldown: ["Alongamento de posteriores", "Liberação de IT band", "Massagem em quadríceps"],
    },
    {
      id: "mobilidade-alongamento",
      title: "Mobilidade & Alongamento",
      duration: "40 min",
      level: "Todos",
      calories: "150 kcal",
      description: "Melhore sua flexibilidade e previna lesões.",
      image: mobilityImage,
      exercises: [
        { name: "Yoga Flow", sets: "3 rounds", rest: "30s", tips: "Movimentos fluidos" },
        { name: "Alongamento Dinâmico", sets: "2x10 cada", rest: "15s", tips: "Controle e amplitude" },
        { name: "Foam Rolling", sets: "5 min", rest: "-", tips: "Pontos de tensão" },
        { name: "Respiração Diafragmática", sets: "5 min", rest: "-", tips: "Foco no relaxamento" },
        { name: "Mobilidade de Quadril", sets: "3x10", rest: "30s", tips: "Amplitude máxima" },
      ],
      warmup: ["Movimentos suaves", "Respiração consciente", "Ativação gentil"],
      cooldown: ["Postura de relaxamento", "Meditação breve", "Gratidão"],
    },
  ];

  const workout = workouts.find(w => w.id === id);

  if (!workout) {
    return (
      <div className="container py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Treino não encontrado</h1>
        <Button asChild>
          <Link to="/treinos">Voltar para Treinos</Link>
        </Button>
      </div>
    );
  }

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
          style={{ backgroundImage: `url(${workout.image})` }}
        />
        <div className="container relative py-12 md:py-16">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/treinos">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar para Treinos
            </Link>
          </Button>
          <div className="max-w-3xl space-y-4">
            <Badge className={getLevelColor(workout.level)}>{workout.level}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">{workout.title}</h1>
            <p className="text-xl text-muted-foreground">{workout.description}</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>{workout.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span>{workout.calories}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workout Content */}
      <section className="container py-12 space-y-8">
        {/* Warmup */}
        <Card className="gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl">🔥 Aquecimento</CardTitle>
            <CardDescription>Prepare seu corpo para o treino</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {workout.warmup.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Exercises */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">💪 Exercícios</h2>
          {workout.exercises.map((exercise, index) => (
            <Card key={index} className="gradient-card shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{exercise.name}</h3>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span className="font-semibold text-primary">{exercise.sets}</span>
                      <span>Descanso: {exercise.rest}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-lg px-3 py-1">
                    {index + 1}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  💡 <span className="font-semibold">Dica:</span> {exercise.tips}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Cooldown */}
        <Card className="gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl">🧘 Volta à Calma</CardTitle>
            <CardDescription>Recuperação e alongamento</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {workout.cooldown.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="gradient-hero shadow-glow border-0">
          <CardContent className="p-8 text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Pronto para começar?</h2>
            <p className="text-white/90">Dê o play e transforme seu corpo hoje!</p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              <TrendingUp className="h-5 w-5 mr-2" />
              Iniciar Treino Agora
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default WorkoutDetail;
