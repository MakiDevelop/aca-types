export interface TrustProof {
  tier: "raw_source" | "llm_derived" | "human_confirmed";
  confirmed_by: string;
  confirmed_at: string;
  evidence_ids: string[];
  method: "human_review" | "peer_consensus" | "automated_check" | "cross_reference";
}

export interface ProvenanceChain {
  origin: {
    memory_id: string;
    agent_id: string;
    namespace: string;
    tier: string;
    created_at: string;
  };
  transitions: Array<{
    type: "transfer" | "supersede" | "tier_upgrade";
    from_memory_id: string;
    to_memory_id: string;
    performed_by: string;
    performed_at: string;
    tier_before: string;
    tier_after: string;
  }>;
}
