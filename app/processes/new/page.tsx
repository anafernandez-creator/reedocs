"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Loader2,
  Ship,
  UploadCloud,
} from "lucide-react";

import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";

const flowSteps = ["Dados", "Documentos", "Revisão", "Análise"];

const analysisSteps = [
  "Lendo documentos enviados",
  "Extraindo campos críticos",
  "Comparando Invoice × Packing List × Bill of Lading",
  "Calculando score de risco",
  "Gerando relatório executivo",
];

export default function NewProcessPage(): JSX.Element {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [analysisCompleted, setAnalysisCompleted] = useState(false);

  useEffect(() => {
    if (step !== 4) return;

    const timers = [
      setTimeout(() => setAnalysisProgress(1), 700),
      setTimeout(() => setAnalysisProgress(2), 1400),
      setTimeout(() => setAnalysisProgress(3), 2100),
      setTimeout(() => setAnalysisProgress(4), 2800),
      setTimeout(() => {
        setAnalysisProgress(5);
        setAnalysisCompleted(true);
      }, 3500),
      setTimeout(() => {
        router.push("/processes/PROC-2026-0006");
      }, 4800),
    ];

    return () => timers.forEach(clearTimeout);
  }, [step, router]);

  return (
    <AppShell>
      <section className="mx-auto max-w-5xl space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">
            Criar novo processo de validação
          </h1>
          <p className="text-sm text-reedocs-gray">
            Cadastre os dados básicos, envie os documentos e inicie a análise
            automática de divergências.
          </p>
        </div>

        <div className="rounded-lg border bg-muted p-4">
          <p className="text-sm font-medium">Fluxo do processo</p>
          <div className="mt-3 grid gap-3 md:grid-cols-4">
            {flowSteps.map((label, index) => {
              const current = index + 1;
              const active = current === step;
              const done = current < step;

              return (
                <div
                  key={label}
                  className={`rounded-md border px-4 py-3 text-sm ${
                    active
                      ? "border-reedocs-blue bg-white font-semibold text-reedocs-blue"
                      : done
                      ? "border-green-200 bg-green-50 text-green-700"
                      : "border-border bg-white text-reedocs-gray"
                  }`}
                >
                  {done ? "✓" : current}. {label}
                </div>
              );
            })}
          </div>
        </div>

        {step === 1 && (
          <div className="rounded-lg border bg-white p-6">
            <div className="mb-5 flex items-center gap-3">
              <ClipboardCheck className="h-5 w-5 text-reedocs-blue" />
              <div>
                <h2 className="text-lg font-semibold">Dados do processo</h2>
                <p className="text-sm text-reedocs-gray">
                  Informe o contexto mínimo para abrir a análise documental.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <label className="block">
                <span className="text-sm font-medium">
                  Referência do processo
                </span>
                <input
                  className="mt-2 w-full rounded-md border border-border bg-muted px-3 py-2 text-sm"
                  value="PROC-2026-0101"
                  readOnly
                />
                <span className="mt-1 block text-xs text-reedocs-gray">
                  Gerada automaticamente pelo sistema.
                </span>
              </label>

              <label className="block">
                <span className="text-sm font-medium">
                  Importador conforme documentos
                </span>
                <input
                  className="mt-2 w-full rounded-md border border-border px-3 py-2 text-sm"
                  placeholder="Ex.: Importadora Exemplo Ltda"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium">Tipo de operação</span>
                <select className="mt-2 w-full rounded-md border border-border px-3 py-2 text-sm">
                  <option>Importação marítima — FCL</option>
                  <option>Importação marítima — LCL</option>
                  <option>Importação aérea</option>
                  <option>Importação rodoviária</option>
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-medium">Observações internas</span>
                <textarea
                  className="mt-2 h-28 w-full rounded-md border border-border px-3 py-2 text-sm"
                  placeholder="Inclua detalhes úteis para a conferência documental."
                />
              </label>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <Button variant="outline">Salvar rascunho</Button>
              <Button onClick={() => setStep(2)}>
                Continuar para documentos
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="rounded-lg border bg-white p-6">
            <div className="mb-5 flex items-center gap-3">
              <UploadCloud className="h-5 w-5 text-reedocs-blue" />
              <div>
                <h2 className="text-lg font-semibold">
                  Documentos necessários
                </h2>
                <p className="text-sm text-reedocs-gray">
                  Envie os documentos usados na validação cruzada.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                ["Commercial Invoice", "Obrigatório", "PDF, JPG ou PNG"],
                ["Packing List", "Obrigatório", "PDF, JPG ou PNG"],
                ["Bill of Lading", "Obrigatório para marítimo", "PDF, JPG ou PNG"],
                ["Certificado / Licença", "Opcional", "PDF, JPG ou PNG"],
              ].map(([title, required, formats]) => (
                <div key={title} className="rounded-lg border p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold">{title}</p>
                      <p className="text-sm text-reedocs-gray">{required}</p>
                    </div>
                    <FileText className="h-5 w-5 text-reedocs-blue" />
                  </div>

                  <div className="mt-4 rounded-md border border-dashed p-4 text-center">
                    <p className="text-sm font-medium">
                      Arraste ou selecione o arquivo
                    </p>
                    <p className="mt-1 text-xs text-reedocs-gray">{formats}</p>
                  </div>

                  <p className="mt-3 text-xs text-reedocs-gray">
                    Use documento completo, legível e sem cortes.
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-between">
              <Button variant="outline" onClick={() => setStep(1)}>
                Voltar
              </Button>
              <Button onClick={() => setStep(3)}>
                Revisar antes da análise
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="rounded-lg border bg-white p-6">
            <div className="mb-5 flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-reedocs-blue" />
              <div>
                <h2 className="text-lg font-semibold">
                  Revisão antes da análise
                </h2>
                <p className="text-sm text-reedocs-gray">
                  Confira os dados antes de iniciar a validação automática.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border bg-muted p-4">
                <p className="text-xs font-semibold uppercase text-reedocs-gray">
                  Processo
                </p>
                <p className="mt-2 font-semibold">PROC-2026-0101</p>
              </div>

              <div className="rounded-lg border bg-muted p-4">
                <p className="text-xs font-semibold uppercase text-reedocs-gray">
                  Operação
                </p>
                <p className="mt-2 font-semibold">Importação marítima — FCL</p>
              </div>

              <div className="rounded-lg border bg-muted p-4">
                <p className="text-xs font-semibold uppercase text-reedocs-gray">
                  Documentos
                </p>
                <p className="mt-2 font-semibold">3 obrigatórios previstos</p>
              </div>

              <div className="rounded-lg border bg-muted p-4">
                <p className="text-xs font-semibold uppercase text-reedocs-gray">
                  Status
                </p>
                <p className="mt-2 font-semibold text-orange-700">
                  Análise parcial disponível se faltar documento
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-md border border-blue-200 bg-blue-50 p-4">
              <p className="text-sm text-blue-700">
                Tempo médio estimado: menos de 1 minuto após o envio dos
                documentos.
              </p>
            </div>

            <div className="mt-6 flex justify-between">
              <Button variant="outline" onClick={() => setStep(2)}>
                Voltar
              </Button>
              <Button onClick={() => setStep(4)}>
                Iniciar validação automática
              </Button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="rounded-lg border bg-white p-6">
            <div className="mb-5 flex items-center gap-3">
              <Ship className="h-5 w-5 text-reedocs-blue" />
              <div>
                <h2 className="text-lg font-semibold">
                  Validação em andamento
                </h2>
                <p className="text-sm text-reedocs-gray">
                  O Reedocs está analisando os documentos e calculando o risco
                  do processo.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {analysisSteps.map((item, index) => {
                const done = analysisProgress > index;
                const active = analysisProgress === index;

                return (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-md border p-3"
                  >
                    {done ? (
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    ) : active ? (
                      <Loader2 className="h-5 w-5 animate-spin text-reedocs-blue" />
                    ) : (
                      <div className="h-5 w-5 rounded-full border border-border" />
                    )}

                    <p className="text-sm">{item}</p>
                  </div>
                );
              })}
            </div>

            {analysisCompleted && (
              <div className="mt-6 rounded-md border border-green-200 bg-green-50 p-4">
                <p className="font-semibold text-green-700">
                  Análise concluída
                </p>
                <p className="mt-1 text-sm text-green-700">
                  Score de risco calculado e divergências identificadas.
                  Redirecionando para o resultado...
                </p>
              </div>
            )}

            <div className="mt-6 flex justify-end">
              <Button onClick={() => router.push("/processes/PROC-2026-0006")}>
                Ver resultado agora
              </Button>
            </div>
          </div>
        )}
      </section>
    </AppShell>
  );
}