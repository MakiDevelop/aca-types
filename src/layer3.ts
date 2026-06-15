export interface Principal {
  principal_id: string;
  principal_type: "human" | "agent" | "system";
  display_name?: string;
  status: "active" | "suspended" | "revoked";
}

export interface Grant {
  grant_id: string;
  granter_principal_id: string;
  grantee_principal_id: string;
  namespace_id: string;
  permissions: Array<"read" | "write" | "transfer" | "admin">;
  granted_at: string;
  expires_at?: string | null;
  status: "active" | "revoked";
}

export interface AuthorizeResult {
  allowed: boolean;
  reason?: string;
}
