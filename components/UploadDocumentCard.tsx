import { FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Document } from "@/lib/types";
import { cn } from "@/lib/utils";

interface UploadDocumentCardProps {
  title: string;
  document?: Document;
}

function statusLabel(status: Document["status"] | undefined): string {
  if (!status) return "Nao enviado";
  if (status === "uploaded") return "Enviado";
  if (status === "processing") return "Processando";
  return "Lido";
}

export function UploadDocumentCard({ title, document }: UploadDocumentCardProps): JSX.Element {
  return (
    <Card className="border-dashed">
      <CardHeader className="flex flex-row items-center gap-3">
        <div className="rounded-md bg-muted p-2">
          <FileText className="h-4 w-4 text-reedocs-blue" />
        </div>
        <CardTitle className="text-sm">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        <p className="truncate text-reedocs-gray">{document?.name ?? "Nenhum arquivo enviado"}</p>
        <p className="text-xs font-medium">
          Status:{" "}
          <span className={cn("font-semibold", document ? "text-reedocs-blue" : "text-reedocs-gray")}>
            {statusLabel(document?.status)}
          </span>
        </p>
        <p className="text-xs text-reedocs-gray">Confianca OCR: {document ? `${document.ocrConfidence}%` : "-"}</p>
      </CardContent>
    </Card>
  );
}
