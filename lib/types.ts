export type ProcessStatus = "validated" | "divergence" | "review" | "processing";
export type ValidationSeverity = "low" | "medium" | "high";
export type ValidationStatus = "passed" | "divergent" | "needs_review";
export type DocumentStatus = "uploaded" | "processing" | "read";

export interface Document {
  id: string;
  processId: string;
  name: string;
  type: "commercial_invoice" | "packing_list" | "bill_of_lading";
  status: DocumentStatus;
  ocrConfidence: number;
}

export interface ExtractedField {
  id: string;
  documentId: string;
  name: string;
  value: string;
  normalizedValue: string;
  confidence: number;
}

export interface ValidationResult {
  id: string;
  processId: string;
  ruleName: string;
  status: ValidationStatus;
  severity: ValidationSeverity;
  sourceDocument: string;
  sourceValue: string;
  targetDocument: string;
  targetValue: string;
  difference: string;
  tolerance: string;
  explanation: string;
}

export interface HumanReview {
  id: string;
  validationResultId: string;
  reviewer: string;
  decision: "confirm_divergence" | "false_positive" | "accept_exception";
  comment: string;
  createdAt: string;
}

export interface Process {
  id: string;
  reference: string;
  importer: string;
  operationType: string;
  observations: string;
  score: number;
  status: ProcessStatus;
  createdAt: string;
  documentsCount: number;
  approvedRules: number;
  divergences: number;
  missingFields: number;
  reviewsRequired: number;
}
