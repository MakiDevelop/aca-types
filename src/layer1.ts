export interface MemoryCell {
  aca_version: string;
  memory_id: string;
  status: "active" | "superseded" | "revoked" | "expired";
  agent_id: string;
  namespace: string;
  memory_type: "fact" | "preference" | "constraint" | "lesson" | "risk";
  content: { format: string; value: string };
  source: {
    type: "human" | "agent" | "system" | "document";
    ref: string;
    tier: "raw_source" | "llm_derived" | "human_confirmed";
  };
  content_hash: string;
  created_at: string;
  created_by: string;
  valid_until?: string | null;
  supersedes?: string | null;
  trust_proof?: TrustProof | null;
  provenance_chain?: ProvenanceChain | null;
}

export interface AuditEvent {
  event_id: string;
  memory_id: string;
  operation: string;
  principal_id: string;
  timestamp: string;
  correlation_id?: string | null;
  details?: string | null;
}

export interface WriteResult {
  memory_id: string;
  content_hash: string;
  governance_applied: string[];
}

export interface SupersedeResult {
  memory_id: string;
  superseded_id: string;
  governance_applied: string[];
}

export interface TierUpgradeResult {
  memory_id: string;
  old_tier: string;
  new_tier: string;
}

export interface ReadResult {
  records: MemoryCell[];
  next_cursor: string | null;
}

import type { TrustProof, ProvenanceChain } from "./layer2.js";
