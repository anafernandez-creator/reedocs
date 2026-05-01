import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockValidations } from "@/lib/mockData";

interface ReviewPageProps {
  params: { id: string };
}

export default function ReviewPage({ params }: ReviewPageProps): JSX.Element {
  const validations = mockValidations.filter((item) => item.processId === params.id);

  return (
    <AppShell>
      <section className="mx-auto max-w-4xl space-y-5">
        <div>
          <h1 className="text-2xl font-semibold">Revisao humana</h1>
          <p className="text-sm text-reedocs-gray">Confirme divergencias ou marque excecoes com justificativa.</p>
        </div>
        {validations.map((validation) => (
          <Card key={validation.id}>
            <CardHeader>
              <CardTitle className="text-base">{validation.ruleName}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm">
                <strong>Origem:</strong> {validation.sourceDocument} ({validation.sourceValue})
              </p>
              <p className="text-sm">
                <strong>Destino:</strong> {validation.targetDocument} ({validation.targetValue})
              </p>
              <p className="text-sm text-reedocs-gray">{validation.explanation}</p>
              <textarea className="min-h-24 w-full rounded-md border border-border p-3 text-sm" placeholder="Adicionar comentario da revisao" />
              <div className="flex flex-wrap gap-2">
                <Button type="button">Confirmar divergencia</Button>
                <Button type="button" variant="outline">
                  Marcar falso positivo
                </Button>
                <Button type="button" variant="outline">
                  Aceitar excecao
                </Button>
                <Button type="button" variant="secondary">
                  Salvar revisao
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </AppShell>
  );
}
