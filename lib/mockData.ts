import { Document, HumanReview, Process, ValidationResult } from "@/lib/types";

export const mockProcesses: Process[] = [
  {
    id: "4",
    reference: "PROC-2026-0004",
    importer: "Importadora Exemplo Ltda",
    operationType: "Importacao maritima",
    observations: "Carga refrigerada.",
    score: 78,
    status: "review",
    createdAt: "2026-04-30",
    documentsCount: 3,
    approvedRules: 9,
    divergences: 2,
    missingFields: 1,
    reviewsRequired: 2
  },
  {
    id: "5",
    reference: "PROC-2026-0005",
    importer: "Global Trade Brasil",
    operationType: "Importacao aerea",
    observations: "Mercadoria de alto valor.",
    score: 95,
    status: "validated",
    createdAt: "2026-04-29",
    documentsCount: 3,
    approvedRules: 12,
    divergences: 0,
    missingFields: 0,
    reviewsRequired: 0
  },
  {
    id: "6",
    reference: "PROC-2026-0006",
    importer: "Norte Logistica SA",
    operationType: "Importacao maritima",
    observations: "Conferencia aduaneira prioritaria.",
    score: 62,
    status: "divergence",
    createdAt: "2026-04-28",
    documentsCount: 2,
    approvedRules: 6,
    divergences: 3,
    missingFields: 2,
    reviewsRequired: 2
  },
  {
    id: "7",
    reference: "PROC-2026-0007",
    importer: "Atlas Comex",
    operationType: "Importacao rodoviaria",
    observations: "Aguardando BL.",
    score: 0,
    status: "processing",
    createdAt: "2026-04-30",
    documentsCount: 1,
    approvedRules: 0,
    divergences: 0,
    missingFields: 0,
    reviewsRequired: 0
  }
];

export const mockDocuments: Document[] = [
  {
    id: "doc-1",
    processId: "4",
    name: "commercial_invoice_apr2026.pdf",
    type: "commercial_invoice",
    status: "read",
    ocrConfidence: 92
  },
  {
    id: "doc-2",
    processId: "4",
    name: "packing_list_apr2026.pdf",
    type: "packing_list",
    status: "read",
    ocrConfidence: 89
  },
  {
    id: "doc-3",
    processId: "4",
    name: "bill_of_lading_0981.pdf",
    type: "bill_of_lading",
    status: "read",
    ocrConfidence: 94
  }
];

export const mockValidations: ValidationResult[] = [
  {
    id: "val-1",
    processId: "4",
    ruleName: "Peso bruto - Invoice vs Packing List",
    status: "divergent",
    severity: "medium",
    sourceDocument: "Commercial Invoice",
    sourceValue: "1250 kg",
    targetDocument: "Packing List",
    targetValue: "1287 kg",
    difference: "2,96%",
    tolerance: "2%",
    explanation: "Peso acima da tolerancia definida para o processo."
  },
  {
    id: "val-2",
    processId: "4",
    ruleName: "Importador - Invoice vs BL",
    status: "divergent",
    severity: "high",
    sourceDocument: "Commercial Invoice",
    sourceValue: "Importadora Exemplo Ltda",
    targetDocument: "Bill of Lading",
    targetValue: "Exemplo Trading Ltda",
    difference: "Texto divergente",
    tolerance: "Correspondencia exata",
    explanation: "Razao social do importador nao coincide entre documentos."
  },
  {
    id: "val-3",
    processId: "4",
    ruleName: "Descricao da mercadoria - Invoice vs Packing List",
    status: "needs_review",
    severity: "low",
    sourceDocument: "Commercial Invoice",
    sourceValue: "Red wine bottles",
    targetDocument: "Packing List",
    targetValue: "Bottled wine",
    difference: "Similar semantico",
    tolerance: "Revisao humana",
    explanation: "Descricao possivelmente equivalente, requer validacao humana."
  }
];

export const mockReviews: HumanReview[] = [
  {
    id: "review-1",
    validationResultId: "val-1",
    reviewer: "Ana Carolina",
    decision: "confirm_divergence",
    comment: "Divergencia confirmada para ajuste no fornecedor.",
    createdAt: "2026-04-30 14:58"
  }
];
