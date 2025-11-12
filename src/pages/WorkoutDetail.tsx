import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Zap, TrendingUp, CheckCircle2, Play } from "lucide-react";
import walkingImage from "@/assets/workout-woman-walking.jpg";
import strengthImage from "@/assets/workout-woman-strength.jpg";
import aquaticImage from "@/assets/workout-woman-aquatic.jpg";
import stretchingImage from "@/assets/workout-woman-stretching.jpg";
import circuitImage from "@/assets/workout-woman-circuit.jpg";
import yogaImage from "@/assets/workout-woman-yoga.jpg";

const WorkoutDetail = () => {
  const { id } = useParams();

  const workouts = [
    {
      id: "caminhada-cardio-leve",
      title: "Caminhada e Cardio de Baixo Impacto",
      duration: "30 min",
      level: "Iniciante",
      calories: "150-200 kcal",
      description: "Perfeito para começar sua jornada de perda de peso com segurança",
      image: walkingImage,
      videoUrl: "https://www.youtube.com/embed/0q4fkFMIhow",
      exercises: [
        { name: "Caminhada moderada", sets: "15 min contínuos", rest: "-", tips: "Mantenha um ritmo confortável onde você consegue conversar" },
        { name: "Elevação de joelhos (marchar)", sets: "2x30s", rest: "30s", tips: "Eleve os joelhos de forma controlada, use apoio se necessário" },
        { name: "Passos laterais", sets: "2x20 cada lado", rest: "30s", tips: "Dê passos largos para o lado, mantendo os pés paralelos" },
        { name: "Alongamento de pernas", sets: "3x20s cada", rest: "10s", tips: "Alongue suavemente posterior e panturrilha" },
        { name: "Respiração profunda", sets: "2 min", rest: "-", tips: "Inspire pelo nariz, expire pela boca lentamente" },
      ],
      warmup: [
        "3 minutos de caminhada muito leve",
        "Rotação suave de tornozelos e joelhos",
        "Movimentos circulares com os braços",
      ],
      cooldown: [
        "5 minutos de caminhada desacelerando",
        "Alongamento suave de pernas",
        "Respiração para normalizar batimentos",
      ],
    },
    {
      id: "forca-iniciantes",
      title: "Treino de Força para Iniciantes",
      duration: "25 min",
      level: "Iniciante",
      calories: "180-230 kcal",
      description: "Construa força muscular progressivamente com exercícios adaptados",
      image: strengthImage,
      videoUrl: "https://www.youtube.com/embed/j64BBgBGNIU",
      exercises: [
        { name: "Agachamento na cadeira", sets: "3x10", rest: "60s", tips: "Sente e levante usando uma cadeira como apoio" },
        { name: "Flexão na parede", sets: "3x12", rest: "45s", tips: "Mantenha corpo reto, empurre a parede suavemente" },
        { name: "Elevação de braços com garrafa", sets: "3x12", rest: "45s", tips: "Use garrafas de água como peso, eleve lateralmente" },
        { name: "Sentar e levantar", sets: "3x10", rest: "60s", tips: "Pratique levantar da cadeira sem usar as mãos" },
        { name: "Prancha na parede", sets: "3x20s", rest: "30s", tips: "Apoie as mãos na parede, corpo inclinado e reto" },
      ],
      warmup: [
        "5 minutos de movimentos leves",
        "Rotação de articulações",
        "Ativação muscular suave",
      ],
      cooldown: [
        "Alongamento de todos os grupos trabalhados",
        "Caminhada leve por 3 minutos",
        "Respiração relaxante",
      ],
    },
    {
      id: "exercicios-aquaticos",
      title: "Hidroginástica e Exercícios Aquáticos",
      duration: "40 min",
      level: "Iniciante",
      calories: "250-300 kcal",
      description: "Exercícios na água reduzem impacto nas articulações",
      image: aquaticImage,
      videoUrl: "https://www.youtube.com/embed/3oGN53cWE8Q",
      exercises: [
        { name: "Caminhada na água", sets: "10 min contínuos", rest: "-", tips: "Caminhe na água na altura da cintura ou peito" },
        { name: "Chutes frontais na água", sets: "3x15 cada perna", rest: "30s", tips: "Chute para frente controladamente" },
        { name: "Círculos com os braços", sets: "3x20", rest: "30s", tips: "Faça círculos amplos debaixo d'água" },
        { name: "Elevação de joelhos", sets: "3x15 cada", rest: "30s", tips: "Eleve alternadamente os joelhos no peito" },
        { name: "Alongamento aquático", sets: "5 min", rest: "-", tips: "Alongue todos os músculos suavemente na água" },
      ],
      warmup: [
        "5 minutos de movimentos leves na água",
        "Adaptação à temperatura",
        "Respiração controlada",
      ],
      cooldown: [
        "Caminhada leve na água",
        "Relaxamento flutuando",
        "Saída gradual da piscina",
      ],
    },
    {
      id: "alongamento-mobilidade",
      title: "Alongamento e Mobilidade Suave",
      duration: "20 min",
      level: "Iniciante",
      calories: "80-120 kcal",
      description: "Melhore flexibilidade e reduza dores nas articulações",
      image: stretchingImage,
      videoUrl: "https://www.youtube.com/embed/g_tea8ZNk5A",
      exercises: [
        { name: "Alongamento de pescoço", sets: "4x15s", rest: "10s", tips: "Incline suavemente para os lados e frente" },
        { name: "Rotação de ombros", sets: "3x10 cada direção", rest: "15s", tips: "Faça círculos amplos e suaves" },
        { name: "Alongamento de quadril sentada", sets: "3x30s cada lado", rest: "15s", tips: "Sentada, puxe suavemente o joelho em direção ao peito" },
        { name: "Alongamento de panturrilha", sets: "3x20s cada", rest: "10s", tips: "Use uma parede como apoio" },
        { name: "Respiração e relaxamento", sets: "3 min", rest: "-", tips: "Deite confortavelmente e respire profundamente" },
      ],
      warmup: [
        "2 minutos de movimentos muito leves",
        "Respiração consciente",
        "Preparação mental",
      ],
      cooldown: [
        "Posição de relaxamento",
        "Meditação breve",
        "Gratidão pelo treino",
      ],
    },
    {
      id: "circuito-adaptado",
      title: "Circuito Funcional Adaptado",
      duration: "30 min",
      level: "Intermediário",
      calories: "220-280 kcal",
      description: "Exercícios funcionais adaptados para ganho progressivo",
      image: circuitImage,
      videoUrl: "https://www.youtube.com/embed/ml6cT4AZdqI",
      exercises: [
        { name: "Caminhada rápida", sets: "5 min contínuos", rest: "-", tips: "Aumente o ritmo gradualmente" },
        { name: "Agachamento com apoio", sets: "3x12", rest: "60s", tips: "Use cadeira ou barra como suporte" },
        { name: "Step na escada (baixo)", sets: "3x10 cada perna", rest: "60s", tips: "Use primeiro degrau, suba e desça controladamente" },
        { name: "Elevação de perna lateral", sets: "3x12 cada lado", rest: "45s", tips: "Use apoio para equilíbrio, eleve a perna lateralmente" },
        { name: "Alongamento completo", sets: "5 min", rest: "-", tips: "Alongue todos os grupos musculares trabalhados" },
      ],
      warmup: [
        "5 minutos de caminhada leve",
        "Preparação articular",
        "Ativação muscular progressiva",
      ],
      cooldown: [
        "Caminhada desacelerando",
        "Alongamentos mantidos",
        "Hidratação",
      ],
    },
    {
      id: "yoga-adaptada",
      title: "Yoga Adaptada para Plus Size",
      duration: "35 min",
      level: "Iniciante",
      calories: "120-170 kcal",
      description: "Posturas modificadas focando em bem-estar e equilíbrio",
      image: yogaImage,
      videoUrl: "https://www.youtube.com/embed/v7SN-d4qXx0",
      exercises: [
        { name: "Respiração consciente", sets: "5 min", rest: "-", tips: "Sente confortavelmente, foque apenas na respiração" },
        { name: "Postura da criança modificada", sets: "2x60s", rest: "30s", tips: "Ajoelhada, sente nos calcanhares e incline para frente" },
        { name: "Gato-vaca sentada", sets: "3x10", rest: "20s", tips: "Sentada em cadeira, alterne arqueamento e curvatura da coluna" },
        { name: "Torção espinal suave", sets: "2x30s cada lado", rest: "20s", tips: "Sentada, gire suavemente o tronco para os lados" },
        { name: "Meditação final", sets: "5 min", rest: "-", tips: "Relaxamento completo com foco na gratidão" },
      ],
      warmup: [
        "3 minutos de respiração diafragmática",
        "Consciência corporal",
        "Intenção para a prática",
      ],
      cooldown: [
        "Savasana (postura do cadáver) modificada",
        "Respiração de encerramento",
        "Momento de gratidão",
      ],
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
        {/* Video Tutorial */}
        {workout.videoUrl && (
          <Card className="gradient-card shadow-card overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Play className="h-6 w-6 text-primary" />
                Vídeo Tutorial - Como Fazer os Exercícios
              </CardTitle>
              <CardDescription>Aprenda a execução correta dos movimentos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src={workout.videoUrl}
                  title={`Tutorial: ${workout.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </CardContent>
          </Card>
        )}

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
