const PROJECTS_DATA = [
  {
    "id": 1,
    "theme": "🔎 RAG Apps",
    "themeSlug": "rag-apps",
    "title": "Document Q&A RAG (PDF / Slack / Notion)",
    "difficulty": "Beginner",
    "diffBadge": "🟢",
    "description": "Ingest a corpus (your own PDFs, a Slack export, a Notion workspace), chunk + embed, retrieve, and answer with inline citations. The canonical first RAG project — make it *hybrid* (BM25 + dense) to stand out from the tutorial crowd.",
    "skills": [
      "chunking strategy",
      "embeddings",
      "top-k retrieval",
      "prompt grounding",
      "citations"
    ],
    "references": [
      "💻 [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) — 28.2k ⭐ · custom **non-commercial** license (re-implement, don't redistribute the notebooks). The single best techniques reference.",
      "💻 [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — 116k ⭐ · Apache-2.0 · dozens of runnable RAG starters."
    ]
  },
  {
    "id": 2,
    "theme": "🔎 RAG Apps",
    "themeSlug": "rag-apps",
    "title": "Contextual-chunk-headers RAG (Anthropic Contextual Retrieval)",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Prepend an LLM-generated context sentence to each chunk before embedding so retrieval survives fragmentation. Report recall@k before/after — a clean, quantified win.",
    "skills": [
      "contextual chunking",
      "embedding-cost tradeoffs",
      "retrieval eval deltas"
    ],
    "references": [
      "📄 [Anthropic — Contextual Retrieval](https://www.anthropic.com/news/contextual-retrieval) — the method + benchmark numbers to reproduce.",
      "💻 [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) — 28.2k ⭐ · non-commercial · CHC notebook."
    ]
  },
  {
    "id": 3,
    "theme": "🔎 RAG Apps",
    "themeSlug": "rag-apps",
    "title": "Query-rewriting RAG (HyDE / HyPE / multi-query)",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Rewrite or hypothetically-expand the user query before retrieval. Compare raw-query vs HyDE vs multi-query on the same eval set.",
    "skills": [
      "query transformation",
      "retrieval ablation",
      "HyDE/HyPE"
    ],
    "references": [
      "📄 [HyDE — Precise Zero-Shot Dense Retrieval](https://arxiv.org/abs/2212.10496) — the original paper.",
      "💻 [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) — 28.2k ⭐ · non-commercial · query-transform notebooks."
    ]
  },
  {
    "id": 4,
    "theme": "🔎 RAG Apps",
    "themeSlug": "rag-apps",
    "title": "Agentic RAG (retrieve-decide-retrieve loop)",
    "difficulty": "Advanced",
    "diffBadge": "🔴",
    "description": "An agent that decides *whether* and *what* to retrieve, iterates on insufficient context, and knows when to stop. Pairs a router/planner with the retriever.",
    "skills": [
      "tool-use routing",
      "iterative retrieval",
      "stopping criteria",
      "EmbeddingGemma / local embeddings"
    ],
    "references": [
      "💻 [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — 116k ⭐ · Apache-2.0 · agentic-RAG examples.",
      "📘 [LangGraph docs — Agentic RAG](https://langchain-ai.github.io/langgraph/tutorials/rag/langgraph_agentic_rag/) — reference architecture."
    ]
  },
  {
    "id": 5,
    "theme": "🔎 RAG Apps",
    "themeSlug": "rag-apps",
    "title": "GraphRAG (entity graph + community summaries)",
    "difficulty": "Advanced",
    "diffBadge": "🔴",
    "description": "Extract entities/relations into a graph, summarize communities, and answer global \"sensemaking\" questions a vanilla vector store can't. High-effort, high-differentiation.",
    "skills": [
      "graph extraction",
      "community detection",
      "hierarchical summarization",
      "Neo4j/networkx"
    ],
    "references": [
      "📄 [Microsoft — From Local to Global (GraphRAG)](https://arxiv.org/abs/2404.16130) — the paper.",
      "💻 [microsoft/graphrag](https://github.com/microsoft/graphrag) — MIT · reference implementation."
    ]
  },
  {
    "id": 6,
    "theme": "🔎 RAG Apps",
    "themeSlug": "rag-apps",
    "title": "Corrective / trustworthy RAG with hallucination checker",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Grade retrieved docs for relevance, fall back to web search when the corpus is thin, and verify each claim against sources before answering (CRAG / self-RAG).",
    "skills": [
      "relevance grading",
      "fallback routing",
      "claim verification",
      "guardrails"
    ],
    "references": [
      "📄 [Corrective RAG (CRAG)](https://arxiv.org/abs/2401.15884) — the method.",
      "💻 [patchy631/ai-engineering-hub](https://github.com/patchy631/ai-engineering-hub) — 36.2k ⭐ · MIT · corrective-RAG walkthroughs."
    ]
  },
  {
    "id": 7,
    "theme": "🔎 RAG Apps",
    "themeSlug": "rag-apps",
    "title": "Text-to-SQL RAG over a real database",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Retrieve schema + few-shot examples, generate SQL, execute, and self-correct on error. Ground answers in query results, not the model's memory.",
    "skills": [
      "schema retrieval",
      "SQL generation",
      "execution-feedback loops",
      "safety (read-only)"
    ],
    "references": [
      "📘 [LangChain — SQL Q&A tutorial](https://python.langchain.com/docs/tutorials/sql_qa/) — end-to-end reference.",
      "💻 [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — 116k ⭐ · Apache-2.0 · text-to-SQL app."
    ]
  },
  {
    "id": 8,
    "theme": "🔎 RAG Apps",
    "themeSlug": "rag-apps",
    "title": "Multi-modal RAG over PDFs + images + tables (ColPali / ColQwen)",
    "difficulty": "Advanced",
    "diffBadge": "🔴",
    "description": "Retrieve over page *images* with a vision retriever (ColPali) instead of brittle OCR + text chunks. Answers questions about charts and layout-heavy docs.",
    "skills": [
      "visual document retrieval",
      "late-interaction embeddings",
      "VLM answering"
    ],
    "references": [
      "📄 [ColPali — Efficient Document Retrieval with Vision LMs](https://arxiv.org/abs/2407.01449) — the paper.",
      "💻 [illuin-tech/colpali](https://github.com/illuin-tech/colpali) — MIT · reference code + weights."
    ]
  },
  {
    "id": 9,
    "theme": "🔎 RAG Apps",
    "themeSlug": "rag-apps",
    "title": "Long-context RAG with a chunking-strategy benchmark",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Hold everything constant and vary only chunk size / overlap / splitter; publish a table of faithfulness + recall per config. Shows evaluation discipline more than novelty.",
    "skills": [
      "controlled ablation",
      "chunking",
      "eval harness design"
    ],
    "references": [
      "💻 [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) — 28.2k ⭐ · non-commercial · chunking notebooks.",
      "📘 [Chroma — chunking research](https://research.trychroma.com/evaluating-chunking) — empirical chunking study to reproduce."
    ]
  },
  {
    "id": 10,
    "theme": "🔎 RAG Apps",
    "themeSlug": "rag-apps",
    "title": "Production NotebookLM clone (source-grounded study assistant)",
    "difficulty": "Advanced",
    "diffBadge": "🔴",
    "description": "Upload sources, chat grounded to them with citations, and generate an audio/podcast overview. A full product, not a demo — deploy it.",
    "skills": [
      "multi-doc ingestion",
      "grounded chat",
      "citation UX",
      "optional TTS overview"
    ],
    "references": [
      "💻 [patchy631/ai-engineering-hub](https://github.com/patchy631/ai-engineering-hub) — 36.2k ⭐ · MIT · NotebookLM-style builds.",
      "📘 [Google NotebookLM](https://notebooklm.google/) — the product to benchmark against."
    ]
  },
  {
    "id": 11,
    "theme": "🔎 RAG Apps",
    "themeSlug": "rag-apps",
    "title": "Re-ranking pipeline (cross-encoder / Cohere / bge-reranker)",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Add a re-ranker after first-stage retrieval and quantify the nDCG / MRR lift. The cheapest high-impact upgrade to any RAG stack — a great standalone study.",
    "skills": [
      "two-stage retrieval",
      "cross-encoders",
      "ranking metrics"
    ],
    "references": [
      "🛠️ [bge-reranker (FlagEmbedding)](https://github.com/FlagOpen/FlagEmbedding) — MIT · open re-ranker models.",
      "📘 [Pinecone — rerankers guide](https://www.pinecone.io/learn/series/rag/rerankers/) — concepts + code."
    ]
  },
  {
    "id": 12,
    "theme": "🔎 RAG Apps",
    "themeSlug": "rag-apps",
    "title": "Hybrid search from scratch (BM25 + dense + RRF fusion)",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Implement lexical + semantic retrieval and fuse with Reciprocal Rank Fusion; show where each wins (acronyms/IDs vs paraphrase). The technique interviewers most expect. ← Back to the [full catalog](../README.md)",
    "skills": [
      "BM25",
      "dense retrieval",
      "RRF",
      "retrieval evaluation"
    ],
    "references": [
      "📘 [Weaviate — hybrid search](https://weaviate.io/blog/hybrid-search-explained) — concepts + fusion.",
      "💻 [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — 116k ⭐ · Apache-2.0 · hybrid-search examples."
    ]
  },
  {
    "id": 13,
    "theme": "🤖 Agents & Tool-Use",
    "themeSlug": "agents",
    "title": "Multi-role trip planner (CrewAI)",
    "difficulty": "Beginner",
    "diffBadge": "🟢",
    "description": "A crew of role-specialized agents (researcher, budgeter, itinerary writer) that collaborate to produce a plan. Great first taste of multi-agent orchestration.",
    "skills": [
      "role decomposition",
      "task hand-off",
      "tool-use basics"
    ],
    "references": [
      "💻 [crewAIInc/crewAI](https://github.com/crewAIInc/crewAI) — 54.6k ⭐ · MIT · role-based multi-agent framework."
    ]
  },
  {
    "id": 14,
    "theme": "🤖 Agents & Tool-Use",
    "themeSlug": "agents",
    "title": "Multi-agent research team (LangGraph supervisor)",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "A supervisor routes sub-tasks to specialist agents (search, read, synthesize) and merges results into a cited report. The most portfolio-relevant agent pattern.",
    "skills": [
      "supervisor routing",
      "shared state",
      "cited synthesis",
      "LangGraph"
    ],
    "references": [
      "💻 [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) — 36.1k ⭐ · MIT · stateful graph agents.",
      "💻 [patchy631/ai-engineering-hub](https://github.com/patchy631/ai-engineering-hub) — 36.2k ⭐ · MIT · multi-agent tutorials."
    ]
  },
  {
    "id": 15,
    "theme": "🤖 Agents & Tool-Use",
    "themeSlug": "agents",
    "title": "ReAct agent with 5+ real tools",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "A reasoning-and-acting loop wired to genuinely useful tools (web, calculator, code exec, a private API, a DB). Emphasize tool schemas and error recovery.",
    "skills": [
      "ReAct loop",
      "tool schema design",
      "observation parsing",
      "recovery"
    ],
    "references": [
      "📄 [ReAct — Synergizing Reasoning and Acting](https://arxiv.org/abs/2210.03629) — the paper.",
      "📘 [LlamaIndex — ReAct agent](https://docs.llamaindex.ai/en/stable/examples/agent/react_agent/) — tutorial."
    ]
  },
  {
    "id": 16,
    "theme": "🤖 Agents & Tool-Use",
    "themeSlug": "agents",
    "title": "Hierarchical supervisor agent (teams of teams)",
    "difficulty": "Advanced",
    "diffBadge": "🔴",
    "description": "A top-level supervisor coordinating multiple sub-crews, each with its own supervisor. Tests state management and cost control at scale.",
    "skills": [
      "hierarchical orchestration",
      "budget enforcement",
      "deadlock avoidance"
    ],
    "references": [
      "💻 [ashishpatel26/500-AI-Agents-Projects](https://github.com/ashishpatel26/500-AI-Agents-Projects) — 33.2k ⭐ · MIT · 500+ agent patterns + links."
    ]
  },
  {
    "id": 17,
    "theme": "🤖 Agents & Tool-Use",
    "themeSlug": "agents",
    "title": "Plan-and-execute agent (BabyAGI-style)",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Generate a plan, execute steps, re-plan on failure. Contrast with a pure ReAct agent on the same task and report steps/cost/success.",
    "skills": [
      "planning",
      "re-planning",
      "task decomposition",
      "comparison eval"
    ],
    "references": [
      "💻 [ashishpatel26/500-AI-Agents-Projects](https://github.com/ashishpatel26/500-AI-Agents-Projects) — 33.2k ⭐ · MIT.",
      "📘 [LangGraph — plan-and-execute](https://langchain-ai.github.io/langgraph/tutorials/plan-and-execute/plan-and-execute/) — reference."
    ]
  },
  {
    "id": 18,
    "theme": "🤖 Agents & Tool-Use",
    "themeSlug": "agents",
    "title": "Autonomous game-playing agent",
    "difficulty": "Beginner",
    "diffBadge": "🟢",
    "description": "An agent that plays a text game (Wordle, 2048, a maze) via tool calls, with a scoreboard over N runs. Fun, self-contained, and shows a clean action/observation loop.",
    "skills": [
      "action loops",
      "state tracking",
      "deterministic eval over runs"
    ],
    "references": [
      "💻 [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — 116k ⭐ · Apache-2.0 · game-agent examples."
    ]
  },
  {
    "id": 19,
    "theme": "🤖 Agents & Tool-Use",
    "themeSlug": "agents",
    "title": "MCP-powered coding agent (GitHub / browser MCP)",
    "difficulty": "Advanced",
    "diffBadge": "🔴",
    "description": "An agent that uses Model Context Protocol servers (GitHub, filesystem, browser) to read issues, edit code, and open PRs. On-trend and highly differentiating for 2026.",
    "skills": [
      "MCP client/servers",
      "tool discovery",
      "sandboxed execution"
    ],
    "references": [
      "📘 [Model Context Protocol — spec + servers](https://modelcontextprotocol.io/) — official docs.",
      "💻 [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — 116k ⭐ · Apache-2.0 · MCP agent examples."
    ]
  },
  {
    "id": 20,
    "theme": "🤖 Agents & Tool-Use",
    "themeSlug": "agents",
    "title": "Agent with persistent memory (MemGPT-style)",
    "difficulty": "Advanced",
    "diffBadge": "🔴",
    "description": "Long-term + working memory with summarization and retrieval, so the agent recalls facts across sessions. Show memory hits/misses in the trace.",
    "skills": [
      "memory hierarchy",
      "summarization",
      "retrieval-augmented memory"
    ],
    "references": [
      "📄 [MemGPT — LLMs as Operating Systems](https://arxiv.org/abs/2310.08560) — the paper.",
      "💻 [letta-ai/letta](https://github.com/letta-ai/letta) — Apache-2.0 · MemGPT successor (stateful agents)."
    ]
  },
  {
    "id": 21,
    "theme": "🤖 Agents & Tool-Use",
    "themeSlug": "agents",
    "title": "Voice support agent",
    "difficulty": "Advanced",
    "diffBadge": "🔴",
    "description": "Real-time voice loop: STT → agent + tools (order lookup, refunds) → TTS, with barge-in and latency budgets. Full-stack and impressive live.",
    "skills": [
      "streaming STT/TTS",
      "tool-use under latency",
      "turn-taking"
    ],
    "references": [
      "💻 [patchy631/ai-engineering-hub](https://github.com/patchy631/ai-engineering-hub) — 36.2k ⭐ · MIT · voice-agent builds.",
      "🛠️ [LiveKit Agents](https://github.com/livekit/agents) — Apache-2.0 · real-time voice/agent framework."
    ]
  },
  {
    "id": 22,
    "theme": "🤖 Agents & Tool-Use",
    "themeSlug": "agents",
    "title": "Always-on briefing agent (HN / news / inbox)",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Runs on a schedule, pulls sources, dedupes, ranks, and delivers a personalized digest to Slack/email. A genuinely useful thing you'll keep running.",
    "skills": [
      "scheduling",
      "dedup/ranking",
      "summarization",
      "delivery integrations"
    ],
    "references": [
      "💻 [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — 116k ⭐ · Apache-2.0 · briefing/news agents."
    ]
  },
  {
    "id": 23,
    "theme": "🤖 Agents & Tool-Use",
    "themeSlug": "agents",
    "title": "Computer-use / browser agent",
    "difficulty": "Advanced",
    "diffBadge": "🔴",
    "description": "An agent that drives a real browser to complete a task (fill a form, extract data, book something) with screenshots as observations. Bleeding-edge, high-signal.",
    "skills": [
      "vision-grounded action",
      "browser automation",
      "failure recovery"
    ],
    "references": [
      "💻 [browser-use/browser-use](https://github.com/browser-use/browser-use) — MIT · LLM browser automation.",
      "📄 [Anthropic — Computer Use](https://docs.anthropic.com/en/docs/build-with-claude/computer-use) — API + patterns."
    ]
  },
  {
    "id": 24,
    "theme": "🤖 Agents & Tool-Use",
    "themeSlug": "agents",
    "title": "Self-improving agent with reflection (Reflexion)",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "The agent critiques its own output, stores lessons, and retries — measure success-rate lift across attempts. Cheap to build, strong eval story. ← Back to the [full catalog](../README.md)",
    "skills": [
      "self-critique",
      "reflection memory",
      "iterative improvement metrics"
    ],
    "references": [
      "📄 [Reflexion — Verbal Reinforcement Learning](https://arxiv.org/abs/2303.11366) — the paper.",
      "💻 [ashishpatel26/500-AI-Agents-Projects](https://github.com/ashishpatel26/500-AI-Agents-Projects) — 33.2k ⭐ · MIT."
    ]
  },
  {
    "id": 25,
    "theme": "📊 Evals & LLMOps",
    "themeSlug": "evals-llmops",
    "title": "RAGAS-style RAG eval harness",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Build a golden set and score faithfulness, context precision/recall, and answer relevance on every change. The flagship eval project — pair it with any RAG app above.",
    "skills": [
      "golden-set curation",
      "RAG metrics",
      "regression tracking"
    ],
    "references": [
      "💻 [explodinggradients/ragas](https://github.com/explodinggradients/ragas) — 14.5k ⭐ · Apache-2.0 · RAG eval metrics."
    ]
  },
  {
    "id": 26,
    "theme": "📊 Evals & LLMOps",
    "themeSlug": "evals-llmops",
    "title": "LLM-as-judge with a rubric + human spot-check",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Design a scoring rubric, run an LLM judge, and validate it against human labels (report agreement / Cohen's κ). Shows you don't trust the judge blindly.",
    "skills": [
      "rubric design",
      "judge prompting",
      "human-agreement measurement"
    ],
    "references": [
      "💻 [Arize-ai/phoenix](https://github.com/Arize-ai/phoenix) — 10.3k ⭐ · Apache-2.0 · OpenTelemetry-based eval.",
      "📄 [Judging LLM-as-a-Judge (MT-Bench)](https://arxiv.org/abs/2306.05685) — the reference paper."
    ]
  },
  {
    "id": 27,
    "theme": "📊 Evals & LLMOps",
    "themeSlug": "evals-llmops",
    "title": "A/B prompt evaluation with statistical significance",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Compare two prompts/models on a task set with a proper significance test and effect size — not \"it looks better.\" Deploy the winner behind a flag.",
    "skills": [
      "experiment design",
      "significance testing",
      "effect sizes"
    ],
    "references": [
      "💻 [langfuse/langfuse](https://github.com/langfuse/langfuse) — 30.1k ⭐ · MIT · experiments + prompt management."
    ]
  },
  {
    "id": 28,
    "theme": "📊 Evals & LLMOps",
    "themeSlug": "evals-llmops",
    "title": "CI gate that fails a PR on eval regression",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "A GitHub Action that runs the eval suite on every PR and blocks merge if faithfulness/accuracy drops below threshold. The most \"production\" thing on this page.",
    "skills": [
      "CI/CD for LLMs",
      "thresholds",
      "quality gates"
    ],
    "references": [
      "📘 [Langfuse — CI/CD evals](https://langfuse.com/docs/evaluation) — reference setup.",
      "💻 [promptfoo/promptfoo](https://github.com/promptfoo/promptfoo) — MIT · CLI eval + CI integration."
    ]
  },
  {
    "id": 29,
    "theme": "📊 Evals & LLMOps",
    "themeSlug": "evals-llmops",
    "title": "Trace-based cost & latency dashboard",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Instrument an app with tracing and surface p50/p95 latency, tokens, and $/1k-tokens per route. The \"production mindset\" signal reviewers scan for.",
    "skills": [
      "tracing",
      "cost accounting",
      "percentile latency",
      "dashboards"
    ],
    "references": [
      "💻 [langfuse/langfuse](https://github.com/langfuse/langfuse) — 30.1k ⭐ · MIT · tracing + cost dashboards."
    ]
  },
  {
    "id": 30,
    "theme": "📊 Evals & LLMOps",
    "themeSlug": "evals-llmops",
    "title": "Hallucination audit with citation verifiability",
    "difficulty": "Advanced",
    "diffBadge": "🔴",
    "description": "For each answer, verify every claim is supported by a retrieved source and compute a hallucination rate. Publish the failure taxonomy.",
    "skills": [
      "claim decomposition",
      "source attribution",
      "failure analysis"
    ],
    "references": [
      "💻 [Arize-ai/phoenix](https://github.com/Arize-ai/phoenix) — 10.3k ⭐ · Apache-2.0 · hallucination evals."
    ]
  },
  {
    "id": 31,
    "theme": "📊 Evals & LLMOps",
    "themeSlug": "evals-llmops",
    "title": "Adversarial / red-team eval suite",
    "difficulty": "Advanced",
    "diffBadge": "🔴",
    "description": "Generate jailbreaks, prompt-injections, and edge cases; measure attack success rate and harden with guardrails. Security-flavored and increasingly asked-for.",
    "skills": [
      "red-teaming",
      "prompt-injection defense",
      "safety metrics"
    ],
    "references": [
      "💻 [promptfoo/promptfoo](https://github.com/promptfoo/promptfoo) — MIT · red-team / injection testing.",
      "💻 [Arize-ai/phoenix](https://github.com/Arize-ai/phoenix) — 10.3k ⭐ · Apache-2.0."
    ]
  },
  {
    "id": 32,
    "theme": "📊 Evals & LLMOps",
    "themeSlug": "evals-llmops",
    "title": "Production drift monitor over time",
    "difficulty": "Advanced",
    "diffBadge": "🔴",
    "description": "Track output-quality and input-distribution drift on live traffic, with alerts when metrics slip. Closes the loop from \"shipped\" to \"monitored.\"",
    "skills": [
      "online monitoring",
      "drift detection",
      "alerting"
    ],
    "references": [
      "📘 [Arize Phoenix — monitoring docs](https://arize.com/docs/phoenix) — drift + monitoring guide."
    ]
  },
  {
    "id": 33,
    "theme": "📊 Evals & LLMOps",
    "themeSlug": "evals-llmops",
    "title": "Golden-dataset builder + labeling workflow",
    "difficulty": "Beginner",
    "diffBadge": "🟢",
    "description": "A small tool to curate, version, and label an eval set (with inter-annotator agreement). The unglamorous foundation every other eval depends on.",
    "skills": [
      "dataset versioning",
      "labeling UX",
      "annotator agreement"
    ],
    "references": [
      "💻 [langfuse/langfuse](https://github.com/langfuse/langfuse) — 30.1k ⭐ · MIT · datasets + annotation."
    ]
  },
  {
    "id": 34,
    "theme": "📊 Evals & LLMOps",
    "themeSlug": "evals-llmops",
    "title": "Model/prompt regression leaderboard",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Run a fixed suite across models (and over time) and publish a living leaderboard with cost/quality Pareto fronts. Great artifact to pin. ← Back to the [full catalog](../README.md)",
    "skills": [
      "benchmarking",
      "Pareto analysis",
      "reproducible runs"
    ],
    "references": [
      "💻 [promptfoo/promptfoo](https://github.com/promptfoo/promptfoo) — MIT · multi-model comparison."
    ]
  },
  {
    "id": 35,
    "theme": "🎛️ Fine-Tuning & Training",
    "themeSlug": "fine-tuning",
    "title": "LoRA fine-tune a small Llama vs base",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Fine-tune Llama 3.2 1B/3B on a focused task, then run a head-to-head eval against the base model. The canonical \"I can actually tune models\" project.",
    "skills": [
      "LoRA",
      "dataset formatting",
      "base-vs-tuned eval"
    ],
    "references": [
      "💻 [unslothai/unsloth](https://github.com/unslothai/unsloth) — 67.7k ⭐ · Apache-2.0 core (AGPL Studio UI) · 2× faster tuning.",
      "📘 [HF PEFT — LoRA](https://huggingface.co/docs/peft) — official docs."
    ]
  },
  {
    "id": 36,
    "theme": "🎛️ Fine-Tuning & Training",
    "themeSlug": "fine-tuning",
    "title": "QLoRA on a consumer / free-tier GPU",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "4-bit quantized fine-tuning that fits a 7B model on a single 16GB GPU (or a free Colab). Document the memory footprint and throughput.",
    "skills": [
      "4-bit quantization",
      "memory budgeting",
      "QLoRA"
    ],
    "references": [
      "📄 [QLoRA — Efficient Finetuning of Quantized LLMs](https://arxiv.org/abs/2305.14314) — the paper.",
      "💻 [unslothai/unsloth](https://github.com/unslothai/unsloth) — 67.7k ⭐ · Apache-2.0 · QLoRA notebooks."
    ]
  },
  {
    "id": 37,
    "theme": "🎛️ Fine-Tuning & Training",
    "themeSlug": "fine-tuning",
    "title": "DPO preference tuning",
    "difficulty": "Advanced",
    "diffBadge": "🔴",
    "description": "Build a preferred/rejected pairs dataset and align a model with Direct Preference Optimization; measure win-rate vs the SFT baseline.",
    "skills": [
      "preference data",
      "DPO",
      "win-rate eval"
    ],
    "references": [
      "📄 [DPO — Direct Preference Optimization](https://arxiv.org/abs/2305.18290) — the paper.",
      "📘 [HF TRL — DPOTrainer](https://huggingface.co/docs/trl/dpo_trainer) — implementation docs."
    ]
  },
  {
    "id": 38,
    "theme": "🎛️ Fine-Tuning & Training",
    "themeSlug": "fine-tuning",
    "title": "Instruction-tune a small model (Axolotl / Llama-Factory)",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Run a full SFT pipeline with a config-driven trainer on a curated instruction set; publish the config so it's reproducible.",
    "skills": [
      "SFT pipelines",
      "config-driven training",
      "reproducibility"
    ],
    "references": [
      "💻 [axolotl-ai-cloud/axolotl](https://github.com/axolotl-ai-cloud/axolotl) — Apache-2.0 · config-first fine-tuning.",
      "💻 [hiyouga/LLaMA-Factory](https://github.com/hiyouga/LLaMA-Factory) — Apache-2.0 · unified tuning UI/CLI."
    ]
  },
  {
    "id": 39,
    "theme": "🎛️ Fine-Tuning & Training",
    "themeSlug": "fine-tuning",
    "title": "Fine-tune a sentence-transformer for RAG embeddings",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Tune an embedding model on in-domain pairs and show retrieval recall@k improving on *your* corpus. Directly boosts a RAG project — a great pairing.",
    "skills": [
      "contrastive/triplet training",
      "embedding eval",
      "domain adaptation"
    ],
    "references": [
      "📘 [Sentence Transformers — training](https://www.sbert.net/docs/sentence_transformer/training_overview.html) — official docs."
    ]
  },
  {
    "id": 40,
    "theme": "🎛️ Fine-Tuning & Training",
    "themeSlug": "fine-tuning",
    "title": "Reasoning-model fine-tune (distill chain-of-thought)",
    "difficulty": "Advanced",
    "diffBadge": "🔴",
    "description": "Distill CoT traces from a strong reasoning model into a small student, then measure the reasoning-benchmark lift. On-trend for 2026's reasoning wave.",
    "skills": [
      "distillation",
      "CoT data generation",
      "reasoning eval"
    ],
    "references": [
      "📄 [DeepSeek-R1 — reasoning via RL + distillation](https://arxiv.org/abs/2501.12948) — the paper.",
      "💻 [patchy631/ai-engineering-hub](https://github.com/patchy631/ai-engineering-hub) — 36.2k ⭐ · MIT · distillation walkthroughs."
    ]
  },
  {
    "id": 41,
    "theme": "🎛️ Fine-Tuning & Training",
    "themeSlug": "fine-tuning",
    "title": "Synthetic dataset generation + quality filtering",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Generate a training set with an LLM, then dedupe and quality-filter it (perplexity / rubric / dedup). Data quality is where most tuning wins actually come from.",
    "skills": [
      "synthetic data",
      "filtering/dedup",
      "dataset curation"
    ],
    "references": [
      "💻 [argilla-io/distilabel](https://github.com/argilla-io/distilabel) — Apache-2.0 · synthetic-data pipelines."
    ]
  },
  {
    "id": 42,
    "theme": "🎛️ Fine-Tuning & Training",
    "themeSlug": "fine-tuning",
    "title": "GRPO / RL fine-tune on a verifiable task",
    "difficulty": "Advanced",
    "diffBadge": "🔴",
    "description": "Use a reward you can *check* (math, code tests, JSON validity) to run GRPO-style RL on a small model. Bleeding-edge and very differentiating. ← Back to the [full catalog](../README.md)",
    "skills": [
      "RL fine-tuning",
      "reward design",
      "verifiable rewards"
    ],
    "references": [
      "📘 [HF TRL — GRPO](https://huggingface.co/docs/trl/grpo_trainer) — implementation docs.",
      "💻 [unslothai/unsloth](https://github.com/unslothai/unsloth) — 67.7k ⭐ · Apache-2.0 · GRPO examples."
    ]
  },
  {
    "id": 43,
    "theme": "🎨 Multimodal",
    "themeSlug": "multimodal",
    "title": "Whisper transcription + speaker diarization",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Transcribe long audio and label *who* spoke, with timestamps and a searchable transcript. A practically useful tool you can ship.",
    "skills": [
      "ASR",
      "diarization",
      "chunking long audio",
      "timestamp alignment"
    ],
    "references": [
      "💻 [openai/whisper](https://github.com/openai/whisper) — 104k ⭐ · MIT · speech-to-text.",
      "💻 [m-bain/whisperX](https://github.com/m-bain/whisperX) — BSD-4 · word-level timestamps + diarization."
    ]
  },
  {
    "id": 44,
    "theme": "🎨 Multimodal",
    "themeSlug": "multimodal",
    "title": "Blog-to-podcast agent",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Turn an article or docs page into a two-host conversational audio episode (script + TTS). NotebookLM-style, and a shareable artifact.",
    "skills": [
      "long-form summarization",
      "dialogue generation",
      "multi-voice TTS"
    ],
    "references": [
      "💻 [souzatharsis/podcastfy](https://github.com/souzatharsis/podcastfy) — 6.4k ⭐ · Apache-2.0 · blog→podcast."
    ]
  },
  {
    "id": 45,
    "theme": "🎨 Multimodal",
    "themeSlug": "multimodal",
    "title": "Visual chatbot over your own images (LLaVA-style)",
    "difficulty": "Advanced",
    "diffBadge": "🔴",
    "description": "A chat UI that answers questions about uploaded images using an open vision-language model. Shows you can run VLMs, not just call an API.",
    "skills": [
      "VLM serving",
      "image preprocessing",
      "multimodal prompting"
    ],
    "references": [
      "💻 [haotian-liu/LLaVA](https://github.com/haotian-liu/LLaVA) — 24.9k ⭐ · Apache-2.0 · visual instruction tuning."
    ]
  },
  {
    "id": 46,
    "theme": "🎨 Multimodal",
    "themeSlug": "multimodal",
    "title": "CLIP-powered semantic image search",
    "difficulty": "Beginner",
    "diffBadge": "🟢",
    "description": "Embed an image library with CLIP and search it by text (or by image). The clean, classic multimodal-retrieval starter.",
    "skills": [
      "joint image-text embeddings",
      "vector search",
      "retrieval UX"
    ],
    "references": [
      "💻 [openai/CLIP](https://github.com/openai/CLIP) — 33.8k ⭐ · MIT · image-text retrieval."
    ]
  },
  {
    "id": 47,
    "theme": "🎨 Multimodal",
    "themeSlug": "multimodal",
    "title": "Lightweight image captioning + VQA (MiniGPT-4)",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Caption images and answer questions about them with a small VLM you can run locally. A cheaper alternative to #3.",
    "skills": [
      "captioning",
      "visual question answering",
      "lightweight VLMs"
    ],
    "references": [
      "💻 [Vision-CAIR/MiniGPT-4](https://github.com/Vision-CAIR/MiniGPT-4) — 25.7k ⭐ · BSD-3 · lightweight VLM."
    ]
  },
  {
    "id": 48,
    "theme": "🎨 Multimodal",
    "themeSlug": "multimodal",
    "title": "Chart / receipt digitizer (vision → structured JSON)",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Extract clean, validated JSON from charts, receipts, or invoices with a vision model + schema. Vision + structured output end-to-end — very hireable.",
    "skills": [
      "vision extraction",
      "schema validation",
      "retry-on-invalid"
    ],
    "references": [
      "💻 [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — 116k ⭐ · Apache-2.0 · vision-extraction apps.",
      "🛠️ [instructor — vision + Pydantic](https://python.useinstructor.com/concepts/multimodal/) — structured vision docs."
    ]
  },
  {
    "id": 49,
    "theme": "🎨 Multimodal",
    "themeSlug": "multimodal",
    "title": "Real-time voice bot (WebRTC + STT + agent + TTS)",
    "difficulty": "Advanced",
    "diffBadge": "🔴",
    "description": "A sub-second, barge-in-capable voice assistant over WebRTC. The most impressive thing you can demo in a live interview.",
    "skills": [
      "real-time media",
      "latency optimization",
      "turn-taking",
      "streaming"
    ],
    "references": [
      "🛠️ [pipecat-ai/pipecat](https://github.com/pipecat-ai/pipecat) — BSD-2 · real-time voice/multimodal pipelines.",
      "💻 [patchy631/ai-engineering-hub](https://github.com/patchy631/ai-engineering-hub) — 36.2k ⭐ · MIT · voice-bot builds."
    ]
  },
  {
    "id": 50,
    "theme": "🎨 Multimodal",
    "themeSlug": "multimodal",
    "title": "Text-to-image pipeline with control + eval",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "A generation app (SDXL/FLUX) with prompt templates, ControlNet-style conditioning, and a small human-preference eval. Shows the generative side of multimodal. ← Back to the [full catalog](../README.md)",
    "skills": [
      "diffusion pipelines",
      "conditioning",
      "preference eval",
      "prompt design"
    ],
    "references": [
      "💻 [huggingface/diffusers](https://github.com/huggingface/diffusers) — Apache-2.0 · diffusion pipelines."
    ]
  },
  {
    "id": 51,
    "theme": "🧩 Structured Extraction",
    "themeSlug": "structured-extraction",
    "title": "Resume parser with confidence scores",
    "difficulty": "Beginner",
    "diffBadge": "🟢",
    "description": "Parse resumes into a strict schema (skills, roles, dates) with per-field confidence and a retry loop on validation failure. The perfect first structured-extraction project.",
    "skills": [
      "Pydantic schemas",
      "validation",
      "confidence",
      "retry"
    ],
    "references": [
      "💻 [567-labs/instructor](https://github.com/567-labs/instructor) — MIT · Pydantic-validated LLM outputs.",
      "💻 [dottxt-ai/outlines](https://github.com/dottxt-ai/outlines) — 14.1k ⭐ · Apache-2.0 · constrained/structured generation."
    ]
  },
  {
    "id": 52,
    "theme": "🧩 Structured Extraction",
    "themeSlug": "structured-extraction",
    "title": "Invoice extractor with retry + human-in-the-loop",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Extract line items, totals, and tax with validation; route low-confidence fields to a review queue. Mirrors a real enterprise workflow.",
    "skills": [
      "nested schemas",
      "confidence thresholds",
      "review UX"
    ],
    "references": [
      "📘 [instructor — retries & validation](https://python.useinstructor.com/concepts/retrying/) — docs."
    ]
  },
  {
    "id": 53,
    "theme": "🧩 Structured Extraction",
    "themeSlug": "structured-extraction",
    "title": "Entity extraction + disambiguation over news",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Pull people/orgs/places and resolve them to canonical IDs (e.g. Wikidata), handling \"Apple the company vs the fruit.\" Extraction + entity resolution.",
    "skills": [
      "NER",
      "entity linking",
      "disambiguation",
      "canonicalization"
    ],
    "references": [
      "📘 [Outlines — structured generation docs](https://dottxt-ai.github.io/outlines/) — constrained decoding."
    ]
  },
  {
    "id": 54,
    "theme": "🧩 Structured Extraction",
    "themeSlug": "structured-extraction",
    "title": "JSON-schema-locked agent output",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Force an agent's every response into a validated schema (tool calls, plans, final answers) so downstream code never parses free text. Reliability upgrade for any agent project.",
    "skills": [
      "constrained decoding",
      "schema-first design",
      "function-calling"
    ],
    "references": [
      "💻 [dottxt-ai/outlines](https://github.com/dottxt-ai/outlines) — 14.1k ⭐ · Apache-2.0.",
      "💻 [567-labs/instructor](https://github.com/567-labs/instructor) — MIT."
    ]
  },
  {
    "id": 55,
    "theme": "🧩 Structured Extraction",
    "themeSlug": "structured-extraction",
    "title": "Text → knowledge-graph triples → Neo4j",
    "difficulty": "Advanced",
    "diffBadge": "🔴",
    "description": "Extract (subject, relation, object) triples and load them into a graph DB you can query — the ingestion half of a GraphRAG system.",
    "skills": [
      "relation extraction",
      "triple stores",
      "graph loading",
      "Cypher"
    ],
    "references": [
      "📄 [Microsoft GraphRAG paper](https://arxiv.org/abs/2404.16130) — graph-extraction reference.",
      "🛠️ [Neo4j — LLM knowledge graph builder](https://neo4j.com/labs/genai-ecosystem/llm-graph-builder/) — reference tool."
    ]
  },
  {
    "id": 56,
    "theme": "🧩 Structured Extraction",
    "themeSlug": "structured-extraction",
    "title": "Classification with taxonomy + calibrated confidence",
    "difficulty": "Beginner",
    "diffBadge": "🟢",
    "description": "Multi-label classify text against a taxonomy and calibrate the confidence so thresholds are meaningful. Small, sharp, and evaluable.",
    "skills": [
      "multi-label classification",
      "confidence calibration",
      "thresholding"
    ],
    "references": [
      "💻 [567-labs/instructor](https://github.com/567-labs/instructor) — MIT · enum/classification patterns."
    ]
  },
  {
    "id": 57,
    "theme": "🧩 Structured Extraction",
    "themeSlug": "structured-extraction",
    "title": "Web-page → structured records scraper",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Given a URL, extract clean typed records (products, jobs, papers) that validate against a schema, with graceful handling of missing fields. Practically useful and portfolio-ready. ← Back to the [full catalog](../README.md)",
    "skills": [
      "extraction-from-HTML",
      "schema design",
      "missing-data handling"
    ],
    "references": [
      "💻 [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — 116k ⭐ · Apache-2.0 · scraping/extraction apps."
    ]
  },
  {
    "id": 58,
    "theme": "🔬 LLM From-Scratch & Internals",
    "themeSlug": "llm-from-scratch",
    "title": "BPE tokenizer from scratch",
    "difficulty": "Beginner",
    "diffBadge": "🟢",
    "description": "Implement byte-pair encoding: train merges, encode/decode, handle special tokens. The perfect weekend \"I understand tokenization\" project.",
    "skills": [
      "BPE",
      "vocab construction",
      "encode/decode round-trips"
    ],
    "references": [
      "💻 [karpathy/minbpe](https://github.com/karpathy/minbpe) — 10.6k ⭐ · MIT · minimal BPE reference.",
      "🎬 [Karpathy — Let's build the GPT Tokenizer](https://www.youtube.com/watch?v=zduSFxRajkE) — companion video."
    ]
  },
  {
    "id": 59,
    "theme": "🔬 LLM From-Scratch & Internals",
    "themeSlug": "llm-from-scratch",
    "title": "GPT-2 (124M) reproduction with nanoGPT",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Train a small GPT and reproduce GPT-2-scale loss curves. The reference \"I can pretrain a transformer\" project.",
    "skills": [
      "transformer blocks",
      "training loop",
      "LR schedules",
      "checkpointing"
    ],
    "references": [
      "💻 [karpathy/nanoGPT](https://github.com/karpathy/nanoGPT) — 60.3k ⭐ · MIT · small-scale training.",
      "🎬 [Karpathy — Let's reproduce GPT-2](https://www.youtube.com/watch?v=l8pRSuU81PU) — companion video."
    ]
  },
  {
    "id": 60,
    "theme": "🔬 LLM From-Scratch & Internals",
    "themeSlug": "llm-from-scratch",
    "title": "GPT-2 in raw C / CUDA (llm.c-style)",
    "difficulty": "Advanced",
    "diffBadge": "🔴",
    "description": "Implement training in C/CUDA to understand what the framework hides — kernels, memory, and the forward/backward at the metal. Deep-systems credibility.",
    "skills": [
      "CUDA kernels",
      "memory layout",
      "low-level autograd",
      "performance"
    ],
    "references": [
      "💻 [karpathy/llm.c](https://github.com/karpathy/llm.c) — 30.4k ⭐ · MIT · GPT-2/3 in C/CUDA."
    ]
  },
  {
    "id": 61,
    "theme": "🔬 LLM From-Scratch & Internals",
    "themeSlug": "llm-from-scratch",
    "title": "Build a ChatGPT-like LLM in PyTorch (Raschka)",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Follow the \"Build a Large Language Model (From Scratch)\" path: implement attention, pretraining, then instruction fine-tuning. The most structured way in.",
    "skills": [
      "attention",
      "pretraining",
      "SFT",
      "end-to-end LLM assembly"
    ],
    "references": [
      "💻 [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) — 97.6k ⭐ · Apache-2.0 (code) · book companion repo."
    ]
  },
  {
    "id": 62,
    "theme": "🔬 LLM From-Scratch & Internals",
    "themeSlug": "llm-from-scratch",
    "title": "Tiny Llama-architecture reproduction",
    "difficulty": "Advanced",
    "diffBadge": "🔴",
    "description": "Implement RoPE, RMSNorm, SwiGLU, and GQA — the modern-LLM building blocks GPT-2 lacks — and train a tiny model. Shows you know *current* architectures.",
    "skills": [
      "RoPE",
      "RMSNorm",
      "SwiGLU",
      "grouped-query attention"
    ],
    "references": [
      "💻 [jzhang38/TinyLlama](https://github.com/jzhang38/TinyLlama) — Apache-2.0 · tiny-scale Llama pretraining."
    ]
  },
  {
    "id": 63,
    "theme": "🔬 LLM From-Scratch & Internals",
    "themeSlug": "llm-from-scratch",
    "title": "Attention mechanism visualizer",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Build an interactive tool that renders attention weights across heads/layers for a given input. Teaches internals *and* makes a great shareable artifact.",
    "skills": [
      "attention internals",
      "hooks",
      "visualization",
      "interpretability basics"
    ],
    "references": [
      "💻 [jessevig/bertviz](https://github.com/jessevig/bertviz) — Apache-2.0 · attention visualization reference."
    ]
  },
  {
    "id": 64,
    "theme": "🔬 LLM From-Scratch & Internals",
    "themeSlug": "llm-from-scratch",
    "title": "KV-cache + speculative decoding from scratch",
    "difficulty": "Advanced",
    "diffBadge": "🔴",
    "description": "Implement a KV cache and a simple speculative-decoding loop, then measure the tokens/sec speedup. Bridges internals and serving performance. ← Back to the [full catalog](../README.md)",
    "skills": [
      "KV caching",
      "speculative decoding",
      "inference optimization"
    ],
    "references": [
      "📄 [Speculative Decoding](https://arxiv.org/abs/2211.17192) — the method."
    ]
  },
  {
    "id": 65,
    "theme": "⚙️ Production & Serving",
    "themeSlug": "production-serving",
    "title": "Self-hosted OpenAI-compatible API with vLLM",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Serve an open model behind an OpenAI-compatible endpoint and benchmark throughput vs a hosted API. Shows you can run inference, not just call it.",
    "skills": [
      "paged-attention serving",
      "batching",
      "throughput benchmarking"
    ],
    "references": [
      "💻 [vllm-project/vllm](https://github.com/vllm-project/vllm) — 84.9k ⭐ · Apache-2.0 · high-throughput serving."
    ]
  },
  {
    "id": 66,
    "theme": "⚙️ Production & Serving",
    "themeSlug": "production-serving",
    "title": "Local / edge deployment with llama.cpp (GGUF)",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Run a quantized GGUF model on a laptop/Mac/Raspberry Pi and report tokens/sec at each quant level. Great \"runs anywhere\" story.",
    "skills": [
      "GGUF quantization",
      "CPU/Metal inference",
      "quality-vs-size tradeoffs"
    ],
    "references": [
      "💻 [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) — 119k ⭐ · MIT · edge/local inference."
    ]
  },
  {
    "id": 67,
    "theme": "⚙️ Production & Serving",
    "themeSlug": "production-serving",
    "title": "Quantized inference on Apple Silicon (MLX)",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Run and benchmark quantized models with MLX on an M-series Mac. A clean, self-contained perf study on hardware you already own.",
    "skills": [
      "MLX",
      "Apple-Silicon inference",
      "quantization benchmarking"
    ],
    "references": [
      "💻 [ml-explore/mlx-examples](https://github.com/ml-explore/mlx-examples) — MIT · MLX inference examples."
    ]
  },
  {
    "id": 68,
    "theme": "⚙️ Production & Serving",
    "themeSlug": "production-serving",
    "title": "FastAPI chat backend with SSE streaming",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "A production-shaped API: streaming responses, auth, rate limits, request logging, and graceful errors. The backend every AI product needs.",
    "skills": [
      "SSE streaming",
      "auth",
      "rate limiting",
      "structured logging"
    ],
    "references": [
      "📘 [FastAPI — streaming responses](https://fastapi.tiangolo.com/advanced/custom-response/#streamingresponse) — docs."
    ]
  },
  {
    "id": 69,
    "theme": "⚙️ Production & Serving",
    "themeSlug": "production-serving",
    "title": "One-click deploy of a RAG + LLM app (Modal / Railway)",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Take any project from this catalog and give it a real live URL with autoscaling and secrets management. **Reviewers rarely clone — a live URL is worth ten READMEs.**",
    "skills": [
      "serverless GPU deploy",
      "secrets",
      "autoscaling",
      "live-URL delivery"
    ],
    "references": [
      "📘 [Modal — LLM deployment docs](https://modal.com/docs/examples/vllm_inference) — reference."
    ]
  },
  {
    "id": 70,
    "theme": "⚙️ Production & Serving",
    "themeSlug": "production-serving",
    "title": "vLLM production stack on Kubernetes",
    "difficulty": "Advanced",
    "diffBadge": "🔴",
    "description": "Deploy vLLM with request routing, autoscaling, and observability on K8s. The most \"senior infra\" project on the list.",
    "skills": [
      "K8s",
      "autoscaling",
      "load balancing",
      "GPU scheduling",
      "monitoring"
    ],
    "references": [
      "💻 [vllm-project/production-stack](https://github.com/vllm-project/production-stack) — Apache-2.0 · reference K8s stack."
    ]
  },
  {
    "id": 71,
    "theme": "⚙️ Production & Serving",
    "themeSlug": "production-serving",
    "title": "Semantic caching + cost-control gateway",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "A proxy in front of LLM calls that does semantic caching, rate limiting, fallback routing, and budget caps — measure the cache hit-rate and $ saved.",
    "skills": [
      "semantic cache",
      "gateway routing",
      "budget enforcement",
      "fallbacks"
    ],
    "references": [
      "💻 [BerriAI/litellm](https://github.com/BerriAI/litellm) — MIT · LLM gateway/proxy."
    ]
  },
  {
    "id": 72,
    "theme": "⚙️ Production & Serving",
    "themeSlug": "production-serving",
    "title": "Batch inference pipeline for large jobs",
    "difficulty": "Beginner",
    "diffBadge": "🟢",
    "description": "Process a large dataset through an LLM efficiently: batching, checkpointing, resumability, and a cost estimate up front. Unglamorous but very real. ← Back to the [full catalog](../README.md)",
    "skills": [
      "batching",
      "checkpoint/resume",
      "throughput",
      "cost estimation"
    ],
    "references": [
      "💻 [vllm-project/vllm](https://github.com/vllm-project/vllm) — 84.9k ⭐ · Apache-2.0 · offline batched inference."
    ]
  },
  {
    "id": 73,
    "theme": "🧠 Prompt & DSPy",
    "themeSlug": "prompt-dspy",
    "title": "DSPy pipeline optimized against a metric",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Define a task as DSPy modules and let the optimizer compile the prompts/few-shots to maximize your metric. Then show the before/after score. The flagship of this theme.",
    "skills": [
      "DSPy modules",
      "metric-driven compilation",
      "few-shot optimization"
    ],
    "references": [
      "💻 [stanfordnlp/dspy](https://github.com/stanfordnlp/dspy) — MIT · programming (not prompting) framework.",
      "📄 [DSPy paper](https://arxiv.org/abs/2310.03714) — the method."
    ]
  },
  {
    "id": 74,
    "theme": "🧠 Prompt & DSPy",
    "themeSlug": "prompt-dspy",
    "title": "Prompt optimizer that beats a hand-written baseline",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Automatically search prompt variants (or use DSPy/APE) and prove a lift over your best manual prompt on a held-out set. Quantified prompt engineering.",
    "skills": [
      "automated prompt search",
      "held-out eval",
      "baseline comparison"
    ],
    "references": [
      "💻 [stanfordnlp/dspy](https://github.com/stanfordnlp/dspy) — MIT · optimizers (MIPRO/BootstrapFewShot)."
    ]
  },
  {
    "id": 75,
    "theme": "🧠 Prompt & DSPy",
    "themeSlug": "prompt-dspy",
    "title": "Context-engineering study (what to put in the window)",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Systematically vary retrieved context, ordering, and compression; measure quality and cost. \"Context engineering\" is the 2026 replacement for prompt-fiddling.",
    "skills": [
      "context selection/ordering",
      "compression",
      "cost/quality tradeoffs"
    ],
    "references": [
      "📘 [Anthropic — effective context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) — reference."
    ]
  },
  {
    "id": 76,
    "theme": "🧠 Prompt & DSPy",
    "themeSlug": "prompt-dspy",
    "title": "Prompt-versioning + registry with rollback",
    "difficulty": "Beginner",
    "diffBadge": "🟢",
    "description": "A small system to version prompts, A/B them, and roll back — like Git for prompts, wired to an eval. Production hygiene most portfolios skip.",
    "skills": [
      "prompt versioning",
      "A/B routing",
      "rollback",
      "eval hookup"
    ],
    "references": [
      "💻 [langfuse/langfuse](https://github.com/langfuse/langfuse) — 30.1k ⭐ · MIT · prompt management + versioning."
    ]
  },
  {
    "id": 77,
    "theme": "🧠 Prompt & DSPy",
    "themeSlug": "prompt-dspy",
    "title": "Prompt-injection defense playground",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "A test-bed of injection attacks against a prompted app, plus layered defenses (delimiting, allow-lists, output checks) with a measured attack-success rate.",
    "skills": [
      "prompt-injection",
      "defense-in-depth",
      "security eval"
    ],
    "references": [
      "💻 [promptfoo/promptfoo](https://github.com/promptfoo/promptfoo) — MIT · injection/red-team testing."
    ]
  },
  {
    "id": 78,
    "theme": "🧠 Prompt & DSPy",
    "themeSlug": "prompt-dspy",
    "title": "Chain-of-thought vs. structured-reasoning benchmark",
    "difficulty": "Beginner",
    "diffBadge": "🟢",
    "description": "Compare zero-shot, few-shot CoT, and self-consistency on a reasoning set; publish the accuracy/cost table. Simple, clean, and eval-driven. ← Back to the [full catalog](../README.md)",
    "skills": [
      "CoT",
      "self-consistency",
      "reasoning eval",
      "cost accounting"
    ],
    "references": [
      "📄 [Self-Consistency Improves CoT](https://arxiv.org/abs/2203.11171) — the method."
    ]
  },
  {
    "id": 79,
    "theme": "🚀 GTM & AI-PM Prototypes",
    "themeSlug": "gtm-ai-pm",
    "title": "Context-aware sales agent (voice / email / SMS)",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "An outbound/inbound sales agent with product knowledge and conversation memory across channels. Directly maps to GTM-engineer work.",
    "skills": [
      "conversational memory",
      "multi-channel",
      "product-grounded prompting"
    ],
    "references": [
      "💻 [filip-michalsky/SalesGPT](https://github.com/filip-michalsky/SalesGPT) — 2.7k ⭐ · MIT · sales-conversation agent."
    ]
  },
  {
    "id": 80,
    "theme": "🚀 GTM & AI-PM Prototypes",
    "themeSlug": "gtm-ai-pm",
    "title": "Lead-scoring + enrichment agent",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Given a list of companies/contacts, enrich from public sources and score fit against an ICP with a transparent rubric. The core GTM-engineering loop.",
    "skills": [
      "enrichment pipelines",
      "ICP scoring",
      "API orchestration",
      "dedup"
    ],
    "references": [
      "💻 [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — 116k ⭐ · Apache-2.0 · enrichment/agent examples."
    ]
  },
  {
    "id": 81,
    "theme": "🚀 GTM & AI-PM Prototypes",
    "themeSlug": "gtm-ai-pm",
    "title": "Marketing-asset generator (brief → landing page)",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Turn a one-line brief into copy, a hero image, and a deployable landing page. Shows product + generative + full-stack in one artifact.",
    "skills": [
      "structured generation",
      "image gen",
      "code gen",
      "deployment"
    ],
    "references": [
      "💻 [crewAIInc/crewAI](https://github.com/crewAIInc/crewAI) — 54.6k ⭐ · MIT · multi-agent content crews."
    ]
  },
  {
    "id": 82,
    "theme": "🚀 GTM & AI-PM Prototypes",
    "themeSlug": "gtm-ai-pm",
    "title": "Behavior-brief → interactive prototype tool (AI-PM)",
    "difficulty": "Advanced",
    "diffBadge": "🔴",
    "description": "Turn a PM's feature brief into a clickable prototype (spec → components → preview). The \"PM who ships\" project for AI Product Engineer roles.",
    "skills": [
      "spec parsing",
      "code generation",
      "component synthesis",
      "preview"
    ],
    "references": [
      "💻 [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — 116k ⭐ · Apache-2.0 · builder/prototype apps."
    ]
  },
  {
    "id": 83,
    "theme": "🚀 GTM & AI-PM Prototypes",
    "themeSlug": "gtm-ai-pm",
    "title": "Support-ticket classifier with auto-escalation",
    "difficulty": "Beginner",
    "diffBadge": "🟢",
    "description": "Classify inbound tickets by intent/urgency, draft a reply, and escalate the hard ones with a confidence gate. High product value, low build cost.",
    "skills": [
      "classification",
      "drafting",
      "confidence-gated routing",
      "integrations"
    ],
    "references": [
      "💻 [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — 116k ⭐ · Apache-2.0 · support-agent examples."
    ]
  },
  {
    "id": 84,
    "theme": "🚀 GTM & AI-PM Prototypes",
    "themeSlug": "gtm-ai-pm",
    "title": "Meeting-notes → CRM-updater agent",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Transcribe a call, extract action items and deal fields, and push structured updates to a CRM. Voice + extraction + integration — a complete GTM tool.",
    "skills": [
      "transcription",
      "extraction",
      "CRM API writes",
      "idempotency"
    ],
    "references": [
      "💻 [openai/whisper](https://github.com/openai/whisper) — 104k ⭐ · MIT · transcription front-end."
    ]
  },
  {
    "id": 85,
    "theme": "🚀 GTM & AI-PM Prototypes",
    "themeSlug": "gtm-ai-pm",
    "title": "Competitor / pricing intelligence monitor",
    "difficulty": "Intermediate",
    "diffBadge": "🟡",
    "description": "Watch competitor pages, detect meaningful changes (filter noise), and deliver a summarized alert. A GTM/PM tool teams actually want. ← Back to the [full catalog](../README.md)",
    "skills": [
      "change detection",
      "noise filtering",
      "summarization",
      "alerting"
    ],
    "references": [
      "💻 [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — 116k ⭐ · Apache-2.0 · monitoring agents."
    ]
  }
];
