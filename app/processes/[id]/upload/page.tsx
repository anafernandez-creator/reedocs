import Link from "next/link";

import { AppShell } from "@/components/AppShell";
import { UploadDocumentCard } from "@/components/UploadDocumentCard";
import { Button } from "@/components/ui/button";
import { mockDocuments, mockProcesses } from "@/lib/mockData";

interface UploadPageProps {
  params: { id: string };
}

export default function ProcessUploadPage({ params }: UploadPageProps): JSX.Element {
  const process = mockProcesses.find((item) => item.id === params.id);
  const docs = mockDocuments.filter((item) => item.processId === params.id);

  return (
    <AppShell>
      <section className="space-y-5">
        <div>
          <h1 className="text-2xl font-semibold">Upload de documentos</h1>
          <p className="text-sm text-reedocs-gray">
            Processo {process?.reference ?? params.id} - envie os documentos para iniciar validacao.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <UploadDocumentCard title="Commercial Invoice" document={docs.find((item) => item.type === "commercial_invoice")} />
          <UploadDocumentCard title="Packing List" document={docs.find((item) => item.type === "packing_list")} />
          <UploadDocumentCard title="Bill of Lading" document={docs.find((item) => item.type === "bill_of_lading")} />
        </div>
        <div className="flex gap-2">
          <Button type="button">Iniciar validacao</Button>
          <Button asChild type="button" variant="outline">
            <Link href={`/processes/${params.id}`}>Ver analise do processo</Link>
          </Button>
        </div>
      </section>
    </AppShell>
  );
}
