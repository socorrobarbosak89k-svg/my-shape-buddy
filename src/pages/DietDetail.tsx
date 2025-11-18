import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Apple, TrendingUp, CheckCircle2 } from "lucide-react";
import mediterraneanImage from "@/assets/diet-mediterranean.jpg";
import lowcarbImage from "@/assets/diet-lowcarb.jpg";
import proteinImage from "@/assets/diet-protein.jpg";
import veganImage from "@/assets/diet-vegan.jpg";
import fastingImage from "@/assets/diet-fasting.jpg";
import flexibleImage from "@/assets/diet-flexible.jpg";

const DietDetail = () => {
  const { id } = useParams();

  const diets = [
    {
      id: "dieta-balanceada",
      title: "Dieta Balanceada",
      type: "Equilibrada",
      calories: "1800 kcal/dia",
      description: "Plano alimentar equilibrado com todos os macronutrientes. Ideal para manutenção de peso.",
      features: ["40% Carboidratos", "30% Proteínas", "30% Gorduras", "5 Refeições"],
      image: flexibleImage,
      meals: [
        {
          name: "Café da Manhã",
          time: "7:00",
          calories: 400,
          foods: ["2 ovos mexidos (100g)", "2 fatias de pão integral (50g)", "1 banana média (120g)", "Café com leite desnatado (200ml)"],
        },
        {
          name: "Lanche da Manhã",
          time: "10:00",
          calories: 200,
          foods: ["Iogurte grego natural (150g)", "1 colher de granola (20g)", "Frutas vermelhas (80g)"],
        },
        {
          name: "Almoço",
          time: "13:00",
          calories: 600,
          foods: ["Frango grelhado (150g)", "Arroz integral (120g)", "Feijão (60g)", "Salada variada (100g) com azeite (10ml)"],
        },
        {
          name: "Lanche da Tarde",
          time: "16:00",
          calories: 200,
          foods: ["Castanhas (30g)", "1 maçã média (180g)"],
        },
        {
          name: "Jantar",
          time: "19:30",
          calories: 400,
          foods: ["Salmão grelhado (120g)", "Batata doce assada (150g)", "Brócolis no vapor (100g)", "Salada verde (80g)"],
        },
      ],
      tips: [
        "Beba pelo menos 2L de água por dia",
        "Evite alimentos processados",
        "Prefira fontes de gorduras saudáveis",
        "Mantenha horários regulares",
      ],
    },
    {
      id: "low-carb",
      title: "Low Carb",
      type: "Emagrecimento",
      calories: "1500 kcal/dia",
      description: "Redução de carboidratos para acelerar a queima de gordura corporal.",
      features: ["20% Carboidratos", "40% Proteínas", "40% Gorduras", "4 Refeições"],
      image: lowcarbImage,
      meals: [
        {
          name: "Café da Manhã",
          time: "7:00",
          calories: 400,
          foods: ["3 ovos mexidos (150g) com queijo (30g)", "Abacate (100g)", "Café sem açúcar (200ml)", "Bacon (40g)"],
        },
        {
          name: "Almoço",
          time: "12:30",
          calories: 500,
          foods: ["Carne vermelha (200g)", "Salada verde (100g) com azeite (15ml)", "Vegetais refogados (120g)", "Queijo parmesão (30g)"],
        },
        {
          name: "Lanche",
          time: "16:00",
          calories: 250,
          foods: ["Whey protein (30g)", "Pasta de amendoim (20g)", "Castanhas (25g)"],
        },
        {
          name: "Jantar",
          time: "19:30",
          calories: 350,
          foods: ["Frango grelhado (150g)", "Couve-flor gratinada (150g)", "Azeite extra virgem (10ml)", "Salada (80g)"],
        },
      ],
      tips: [
        "Aumente a ingestão de gorduras boas",
        "Monitore os níveis de cetose",
        "Suplementação de eletrólitos pode ajudar",
        "Período de adaptação de 1-2 semanas",
      ],
    },
    {
      id: "mediterranea",
      title: "Dieta Mediterrânea",
      type: "Saudável",
      calories: "2000 kcal/dia",
      description: "Baseada em alimentos frescos, azeite e peixes. Ótima para saúde cardiovascular.",
      features: ["Azeite Extra Virgem", "Peixes", "Vegetais Frescos", "Frutas"],
      image: mediterraneanImage,
      meals: [
        {
          name: "Café da Manhã",
          time: "7:30",
          calories: 450,
          foods: ["Pão integral (80g) com azeite (10ml)", "Tomate (100g) e queijo fresco (50g)", "Frutas da estação (150g)", "Suco natural (200ml)"],
        },
        {
          name: "Lanche",
          time: "10:30",
          calories: 200,
          foods: ["Iogurte natural (150g)", "Mel (15g)", "Nozes (30g)"],
        },
        {
          name: "Almoço",
          time: "13:00",
          calories: 700,
          foods: ["Salmão grelhado (180g)", "Quinoa (120g)", "Vegetais mediterrâneos (150g)", "Azeite extra virgem (15ml)"],
        },
        {
          name: "Lanche da Tarde",
          time: "17:00",
          calories: 250,
          foods: ["Hummus (100g)", "Palitos de vegetais (120g)", "Azeitonas (50g)"],
        },
        {
          name: "Jantar",
          time: "20:00",
          calories: 400,
          foods: ["Frutos do mar (150g)", "Salada grega (150g)", "Pão integral (50g)", "Vinho tinto (150ml)"],
        },
      ],
      tips: [
        "Use azeite como principal fonte de gordura",
        "Consuma peixes pelo menos 2x na semana",
        "Frutas frescas como sobremesa",
        "Refeições em família e sem pressa",
      ],
    },
    {
      id: "proteica",
      title: "Dieta Proteica",
      type: "Hipertrofia",
      calories: "2200 kcal/dia",
      description: "Alta ingestão de proteínas para ganho de massa muscular.",
      features: ["45% Proteínas", "30% Carboidratos", "25% Gorduras", "6 Refeições"],
      image: proteinImage,
      meals: [
        {
          name: "Café da Manhã",
          time: "6:30",
          calories: 450,
          foods: ["5 claras (150g) + 2 ovos inteiros (100g)", "Aveia (50g)", "Whey protein (30g)", "Banana (120g)"],
        },
        {
          name: "Lanche 1",
          time: "9:30",
          calories: 300,
          foods: ["Frango desfiado (100g)", "Batata doce (100g)", "Castanhas (25g)"],
        },
        {
          name: "Almoço",
          time: "12:30",
          calories: 600,
          foods: ["Carne vermelha magra (200g)", "Arroz integral (120g)", "Feijão (60g)", "Salada (100g)", "Azeite (10ml)"],
        },
        {
          name: "Pré-treino",
          time: "15:30",
          calories: 250,
          foods: ["Whey protein (30g)", "Tapioca (50g)", "Pasta de amendoim (20g)"],
        },
        {
          name: "Pós-treino",
          time: "18:00",
          calories: 350,
          foods: ["Whey protein (30g)", "Dextrose (30g)", "Creatina (5g)", "Banana (120g)"],
        },
        {
          name: "Jantar",
          time: "20:30",
          calories: 250,
          foods: ["Tilápia grelhada (150g)", "Vegetais (150g)", "Azeite (10ml)"],
        },
      ],
      tips: [
        "Proteína em todas as refeições",
        "Timing nutricional é importante",
        "Hidratação constante",
        "Suplementação pode ser necessária",
      ],
    },
    {
      id: "vegetariana",
      title: "Vegetariana",
      type: "Sustentável",
      calories: "1800 kcal/dia",
      description: "Dieta baseada em plantas, rica em nutrientes e fibras.",
      features: ["Legumes", "Grãos Integrais", "Ovos", "Laticínios"],
      image: veganImage,
      meals: [
        {
          name: "Café da Manhã",
          time: "7:00",
          calories: 400,
          foods: ["Omelete de vegetais (150g)", "Pão integral (60g)", "Frutas (120g)", "Suco verde (200ml)"],
        },
        {
          name: "Lanche",
          time: "10:00",
          calories: 200,
          foods: ["Iogurte (150g) com granola (25g)", "Frutas vermelhas (80g)"],
        },
        {
          name: "Almoço",
          time: "13:00",
          calories: 600,
          foods: ["Grão de bico assado (150g)", "Quinoa (100g)", "Vegetais grelhados (150g)", "Tahine (30g)"],
        },
        {
          name: "Lanche",
          time: "16:00",
          calories: 200,
          foods: ["Mix de castanhas (40g)", "Frutas secas (30g)"],
        },
        {
          name: "Jantar",
          time: "19:30",
          calories: 400,
          foods: ["Tofu grelhado (150g)", "Arroz integral (100g)", "Legumes no vapor (120g)", "Salada (80g)"],
        },
      ],
      tips: [
        "Atenção à vitamina B12",
        "Combine proteínas vegetais",
        "Variedade de cores no prato",
        "Ferro de fontes vegetais + vitamina C",
      ],
    },
    {
      id: "flexivel",
      title: "Flexível (IIFYM)",
      type: "Flexível",
      calories: "Variável",
      description: "Atinja suas macros comendo alimentos que você gosta.",
      features: ["Sem Restrições", "Foco em Macros", "Flexibilidade", "Sustentável"],
      image: fastingImage,
      meals: [
        {
          name: "Planejamento Diário",
          time: "Flexível",
          calories: 1800,
          foods: ["Calcule suas macros", "Escolha alimentos que prefere", "80% alimentos nutritivos", "20% alimentos prazerosos"],
        },
      ],
      tips: [
        "Use aplicativo para rastrear macros",
        "Foque em proteína primeiro",
        "Equilíbrio é fundamental",
        "Não há alimentos proibidos",
        "Aprenda a fazer escolhas conscientes",
      ],
    },
  ];

  const diet = diets.find(d => d.id === id);

  if (!diet) {
    return (
      <div className="container py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Dieta não encontrada</h1>
        <Button asChild>
          <Link to="/dietas">Voltar para Dietas</Link>
        </Button>
      </div>
    );
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Emagrecimento":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "Hipertrofia":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Saudável":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Sustentável":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200";
      default:
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/50">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${diet.image})` }}
        />
        <div className="container relative py-12 md:py-16">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/dietas">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar para Dietas
            </Link>
          </Button>
          <div className="max-w-3xl space-y-4">
            <Badge className={getTypeColor(diet.type)}>{diet.type}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">{diet.title}</h1>
            <p className="text-xl text-muted-foreground">{diet.description}</p>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-semibold">{diet.calories}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Diet Content */}
      <section className="container py-12 space-y-8">
        {/* Features */}
        <Card className="gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl">📊 Características da Dieta</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {diet.features.map((feature, index) => (
                <Badge key={index} variant="secondary" className="text-base px-4 py-2">
                  {feature}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Meals */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">🍽️ Plano Alimentar Diário</h2>
          {diet.meals.map((meal, index) => (
            <Card key={index} className="gradient-card shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className="text-lg px-3 py-1">{index + 1}</Badge>
                      <h3 className="text-xl font-bold">{meal.name}</h3>
                    </div>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {meal.time}
                      </span>
                      <span className="flex items-center gap-1 text-primary font-semibold">
                        <Apple className="h-4 w-4" />
                        {meal.calories} kcal
                      </span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {meal.foods.map((food, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{food}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tips */}
        <Card className="gradient-card shadow-card border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">💡 Dicas Importantes</CardTitle>
            <CardDescription>Maximize seus resultados seguindo essas orientações</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {diet.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="gradient-hero shadow-glow border-0">
          <CardContent className="p-8 text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Comece hoje mesmo!</h2>
            <p className="text-white/90">Siga o plano e alcance seus objetivos</p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              <TrendingUp className="h-5 w-5 mr-2" />
              Iniciar Dieta Agora
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default DietDetail;
