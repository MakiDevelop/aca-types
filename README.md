# @chibakuma/aca-types

> TypeScript type definitions for the [Agent Civilization Architecture](https://github.com/MakiDevelop/agent-civilization-architecture) (ACA) protocol.

**npm:** `@chibakuma/aca-types` · **Repository:** [github.com/MakiDevelop/aca-types](https://github.com/MakiDevelop/aca-types)

## Install

```bash
npm install @chibakuma/aca-types
```

## What's Included

Type definitions for all ACA layers:

| Module | ACA Layer | Key Types |
|---|---|---|
| `layer1` | Memory | `AmhRecord`, `MemoryCell`, `Lifecycle`, `MemoryType` |
| `layer2` | Trust | `SourceTier`, `TrustProof`, `ProvenanceChain` |
| `layer3` | Identity | `Principal`, `Credential`, `NamespaceGrant` |
| `layer4` | Authority | `Role`, `Capability`, `Constraint`, `EscalationPolicy` |
| `layer5` | Decision | `DecisionProposal`, `ConsensusResult`, `DecisionLifecycle` |
| `governance` | Governance Plane | `GovernanceRule`, `Amendment`, `KnowledgePromotion` |

## Usage

```typescript
import { AmhRecord, SourceTier, TrustProof } from '@chibakuma/aca-types';

const record: AmhRecord = {
  amh_version: '0.1',
  memory_id: 'mem_001',
  status: 'active',
  agent_id: 'planner',
  namespace: 'project:acme',
  memory_type: 'fact',
  content: {
    format: 'text/plain',
    value: 'Use PostgreSQL for the user store.',
  },
  source: {
    type: 'agent',
    ref: 'session:2026-06-15',
    tier: 'llm_derived',
  },
  content_hash: '...',
  created_at: '2026-06-15T09:30:00Z',
  created_by: 'planner',
};
```

## ACA Ecosystem

`aca-types` provides the shared type definitions used across the ACA ecosystem:

| Package | Purpose | npm |
|---|---|---|
| **[ACA Spec](https://github.com/MakiDevelop/agent-civilization-architecture)** | Protocol specification (5 layers + governance plane + 34 conformance tests) | — |
| **[Agent Memory Hall](https://github.com/MakiDevelop/agent-memory-hall)** | Reference implementation of ACA Layers 1-3 | `@chibakuma/agent-memory-hall` |
| **[aca-govern](https://github.com/MakiDevelop/aca-govern)** | MCP governance proxy — add audit + policy to any MCP server | `@chibakuma/aca-govern` |
| **aca-types** (this package) | TypeScript type definitions for the ACA protocol | `@chibakuma/aca-types` |

## License

Apache 2.0
