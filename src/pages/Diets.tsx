import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Apple, Clock, TrendingUp, Leaf } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import healthyFoodImage from "@/assets/healthy-food.jpg";
import mediterraneanImage from "@/assets/diet-mediterranean.jpg";
import lowcarbImage from "@/assets/diet-lowcarb.jpg";
import proteinImage from "@/assets/diet-protein.jpg";
import veganImage from "@/assets/diet-vegan.jpg";
import fastingImage from "@/assets/diet-fasting.jpg";
import flexibleImage from "@/assets/diet-flexible.jpg";

const Diets = () => {
  const { toast } = useToast();
  
  const diets = [
    {
      title: "Dieta Balanceada",
      type: "Equilibrada",
      calories: "1800 kcal/dia",
      description: "Plano alimentar equilibrado com todos os macronutrientes. Ideal para manutenção de peso.",
      features: ["40% Carboidratos", "30% Proteínas", "30% Gorduras", "5 Refeições"],
      image: flexibleImage,
    },
    {
      title: "Low Carb",
      type: "Emagrecimento",
      calories: "1500 kcal/dia",
      description: "Redução de carboidratos para acelerar a queima de gordura corporal.",
      features: ["20% Carboidratos", "40% Proteínas", "40% Gorduras", "4 Refeições"],
      image: lowcarbImage,
    },
    {
      title: "Dieta Mediterrânea",
      type: "Saudável",
      calories: "2000 kcal/dia",
      description: "Baseada em alimentos frescos, azeite e peixes. Ótima para saúde cardiovascular.",
      features: ["Azeite Extra Virgem", "Peixes", "Vegetais Frescos", "Frutas"],
      image: mediterraneanImage,
    },
    {
      title: "Dieta Proteica",
      type: "Hipertrofia",
      calories: "2200 kcal/dia",
      description: "Alta ingestão de proteínas para ganho de massa muscular.",
      features: ["45% Proteínas", "30% Carboidratos", "25% Gorduras", "6 Refeições"],
      image: proteinImage,
    },
    {
      title: "Vegetariana",
      type: "Sustentável",
      calories: "1800 kcal/dia",
      description: "Dieta baseada em plantas, rica em nutrientes e fibras.",
      features: ["Legumes", "Grãos Integrais", "Ovos", "Laticínios"],
      image: veganImage,
    },
    {
      title: "Flexível (IIFYM)",
      type: "Flexível",
      calories: "Variável",
      description: "Atinja suas macros comendo alimentos que você gosta.",
      features: ["Sem Restrições", "Foco em Macros", "Flexibilidade", "Sustentável"],
      image: fastingImage,
    },
  ];

  const handleViewPlan = (dietTitle: string) => {
    toast({
      title: "Plano de Dieta! 🥗",
      description: `Você selecionou: ${dietTitle}. Em breve você terá acesso ao plano completo!`,
    });
  };

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
          style={{ backgroundImage: `url(${healthyFoodImage})` }}
        />
        <div className="container relative py-16 md:py-24">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Dietas Personalizadas</h1>
            <p className="text-xl text-muted-foreground">
              Planos alimentares desenvolvidos para seus objetivos. Nutrição inteligente e sustentável.
            </p>
          </div>
        </div>
      </section>

      {/* Diets Grid */}
      <section className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diets.map((diet, index) => (
            <Card key={index} className="gradient-card shadow-card hover:shadow-primary transition-smooth overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={diet.image} 
                  alt={diet.title}
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                />
                <div className="absolute top-2 right-2">
                  <Badge className={getTypeColor(diet.type)}>
                    {diet.type}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Apple className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl">{diet.title}</CardTitle>
                <CardDescription>{diet.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {diet.calories}
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-semibold">Características:</p>
                  <div className="flex flex-wrap gap-2">
                    {diet.features.map((feature, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button 
                  className="w-full gradient-primary shadow-primary"
                  onClick={() => handleViewPlan(diet.title)}
                >
                  <Leaf className="h-4 w-4 mr-2" />
                  Ver Plano Completo
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Meal Plan Example */}
      <section className="container py-12">
        <Card className="gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl">Exemplo de Plano Alimentar Diário</CardTitle>
            <CardDescription>Dieta Balanceada - 1800 kcal</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">1</span>
                  Café da Manhã (400 kcal)
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1 ml-8">
                  <li>• 2 ovos mexidos</li>
                  <li>• 2 fatias de pão integral</li>
                  <li>• 1 banana</li>
                  <li>• Café com leite desnatado</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">2</span>
                  Lanche da Manhã (200 kcal)
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1 ml-8">
                  <li>• Iogurte grego natural</li>
                  <li>• 1 colher de sopa de granola</li>
                  <li>• Frutas vermelhas</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">3</span>
                  Almoço (600 kcal)
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1 ml-8">
                  <li>• 150g de frango grelhado</li>
                  <li>• Arroz integral (4 colheres)</li>
                  <li>• Feijão (2 colheres)</li>
                  <li>• Salada variada com azeite</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">4</span>
                  Lanche da Tarde (200 kcal)
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1 ml-8">
                  <li>• Castanhas (30g)</li>
                  <li>• 1 maçã</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">5</span>
                  Jantar (400 kcal)
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1 ml-8">
                  <li>• 120g de salmão grelhado</li>
                  <li>• Batata doce assada</li>
                  <li>• Brócolis no vapor</li>
                  <li>• Salada verde</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="container py-12">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8 text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">Dietas 100% Personalizadas em Breve</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nossa IA criará planos alimentares completamente personalizados baseados em suas preferências, restrições e objetivos.
            </p>
            <Button size="lg" className="gradient-primary shadow-primary">
              <TrendingUp className="h-4 w-4 mr-2" />
              Quero Ser Notificado
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Diets;
