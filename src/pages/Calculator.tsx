import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Upload, Loader2 } from "lucide-react";
import { toast } from "sonner";

const Calculator = () => {
  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        simulateAnalysis();
      };
      reader.readAsDataURL(file);
    }
  };

  const simulateAnalysis = () => {
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      toast.success("Análise concluída! Esta funcionalidade será integrada com IA em breve.");
    }, 2000);
  };

  return (
    <div className="container py-12 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Calculadora de Calorias</h1>
          <p className="text-xl text-muted-foreground">
            Tire uma foto da sua refeição e descubra instantaneamente as calorias e nutrientes
          </p>
        </div>

        <Card className="gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="h-6 w-6 text-primary" />
              Análise por Imagem
            </CardTitle>
            <CardDescription>
              Faça upload de uma foto clara da sua comida para análise nutricional completa
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {!imagePreview ? (
              <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary transition-smooth">
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileSelect}
                />
                <label htmlFor="file-upload" className="cursor-pointer space-y-4 block">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mx-auto">
                    <Upload className="h-10 w-10 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold">Clique para fazer upload</p>
                    <p className="text-sm text-muted-foreground">
                      ou arraste e solte uma imagem aqui
                    </p>
                  </div>
                </label>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-auto max-h-96 object-cover"
                  />
                  {uploading && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Loader2 className="h-12 w-12 text-white animate-spin" />
                    </div>
                  )}
                </div>

                {!uploading && (
                  <Card className="bg-muted border-border">
                    <CardHeader>
                      <CardTitle className="text-lg">Resultados da Análise</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center p-4 bg-background rounded-lg">
                          <p className="text-3xl font-bold text-primary">450</p>
                          <p className="text-sm text-muted-foreground">Calorias</p>
                        </div>
                        <div className="text-center p-4 bg-background rounded-lg">
                          <p className="text-3xl font-bold text-primary">35g</p>
                          <p className="text-sm text-muted-foreground">Proteínas</p>
                        </div>
                        <div className="text-center p-4 bg-background rounded-lg">
                          <p className="text-3xl font-bold text-primary">45g</p>
                          <p className="text-sm text-muted-foreground">Carboidratos</p>
                        </div>
                        <div className="text-center p-4 bg-background rounded-lg">
                          <p className="text-3xl font-bold text-primary">15g</p>
                          <p className="text-sm text-muted-foreground">Gorduras</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground italic">
                        * Esta é uma demonstração. A análise real será feita por IA em breve.
                      </p>
                    </CardContent>
                  </Card>
                )}

                <Button
                  onClick={() => {
                    setImagePreview(null);
                    setUploading(false);
                  }}
                  variant="outline"
                  className="w-full"
                >
                  Analisar Nova Foto
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <Camera className="h-5 w-5 text-primary" />
              Dicas para Melhores Resultados
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ Tire a foto com boa iluminação</li>
              <li>✓ Capture toda a refeição no enquadramento</li>
              <li>✓ Evite sombras e reflexos excessivos</li>
              <li>✓ Mantenha a câmera perpendicular ao prato</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Calculator;
