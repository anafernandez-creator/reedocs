import { AppShell } from "@/components/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SettingsPage(): JSX.Element {
  return (
    <AppShell>
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold">Configuracoes</h1>
        <Card>
          <CardHeader>
            <CardTitle>Motor de validacao</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-reedocs-gray">
            Estrutura pronta para futura integracao com API REST de regras, perfis e parametros por cliente.
          </CardContent>
        </Card>
      </section>
    </AppShell>
  );
}
