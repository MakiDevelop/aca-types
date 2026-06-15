import type { IndependentReviewRecord } from "./layer4.js";

export type DecisionStatus = "proposed" | "under_review" | "ratified" | "in_effect" | "superseded" | "revoked";
export type RiskLevel = "low" | "medium" | "high" | "critical";

export interface DecisionProposal {
  assumptions: string[];
  evidence_ids: string[];
  risks: string[];
  trade_offs: string[];
  rollback_plan: string;
  implementation_steps: string[];
}

export interface Decision {
  decision_id: string;
  title: string;
  status: DecisionStatus;
  risk_level: RiskLevel;
  proposer_principal_id: string;
  proposal: DecisionProposal;
  reviews: IndependentReviewRecord[];
  ratification: { ratified_by: string; rationale: string; review_addressal?: string | null } | null;
  created_at: string;
  effective_at?: string | null;
  review_deadline?: string | null;
  supersedes?: string | null;
}
