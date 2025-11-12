export interface GalleryItem {
  title: string;
  description: string;
  coverImage: string;
  link?: string;
  slug?: string;
  featured?: boolean;
  tech?: string[];
  keywords?: string[];
  images?: string[];
  investment?: string;
  infrastructure?: string[];
  training?: string;
  impact?: string;
  advantage?: string;
  problem?: string;
  solution?: string;
  issues?: string[];
  outcomes?: string[];
  role?: string;
  timeline?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    title: 'LLM Fine-Tuning Pipeline',
    slug: 'llm-fine-tuning-pipeline',
    description:
      'Legal counsel needed LoRA-tuned assistants that passed red-team audits while staying inside a regulated enclave.',
    coverImage: 'https://raw.githubusercontent.com/kubeflow/website/master/content/en/docs/images/pipelines/v1/pipelines-ui.png',
    link: '#',
    featured: true,
    tech: ['HuggingFace', 'Kubeflow', 'AWS S3', 'Weights & Biases', 'Vector Guardrails'],
    keywords: ['LoRA', 'Guardrail testing', 'Retraining SLAs', 'GPU orchestration'],
    investment: '$200K–$500K (vs. consultant costs)',
    infrastructure: ['HuggingFace Hub', 'Kubeflow Pipelines', 'AWS S3', 'Model registry', 'GPU training cluster'],
    training: 'Curriculum design, model documentation, live LoRA workshops for legal analysts',
    impact: 'Requires GPU resources; 2–4 week implementation; enables competitive advantage',
    advantage: 'Codified review playbooks and rapid retuning sprints for new statutes',
    problem:
      'Generic GPT deployments kept hallucinating citations and forced attorneys to manually re-validate every answer.',
    issues: [
      'Hallucination risk around jurisdiction-specific statutes',
      'No reproducible evaluation against regulatory benchmarks',
      'GPU burn when teams re-trained ad hoc on laptops',
    ],
    solution:
      'Centralized LoRA training on Kubeflow with gated evaluation suites, automated data versioning, and vector guardrails before release.',
    outcomes: [
      'Shipped repeatable two-week fine-tuning playbook',
      'Cut hallucination flag rate by 78%',
      'Enabled policy team to self-service new task adapters through curated UI',
    ],
    role: 'Lead AI Platform Engineer',
    timeline: '10-week rollout (pilot + production)',
    images: [
      'https://raw.githubusercontent.com/kubeflow/website/master/content/en/docs/images/pipelines/v1/pipelines-ui.png',
      'https://raw.githubusercontent.com/milvus-io/milvus-docs/v2.6.x/assets/weighted-reranker.png',
      'https://community.n8n.io/uploads/default/original/2X/9/9676d93d0c57c7ad8559de2bc2ccedaaa44954f6.png',
    ],
  },
  {
    title: 'Document Entity Extraction',
    slug: 'document-entity-extraction',
    description:
      'Shared services teams needed dependable OCR hand-offs so reconciliation clerks could focus on exceptions instead of typing.',
    coverImage: 'https://community.n8n.io/uploads/default/original/2X/a/a3379e09b8300a4e99931d1bad313c130bfe5d03.png',
    link: '#',
    featured: false,
    tech: ['Azure Form Recognizer', 'LangChain', 'n8n', 'PostgreSQL', 'Azure Queue Storage'],
    keywords: ['OCR ensemble', 'Human-in-the-loop', 'Exception routing', 'Doc QA'],
    investment: '$120K–$250K (0–3 FTE savings)',
    infrastructure: ['OCR services', 'ERP systems', 'Document repositories', 'Workflow automation'],
    training: 'Document uploader playbooks, workflow builder clinics, validation QA runbooks',
    impact: '98%+ accuracy achievable; handles multiple document formats',
    advantage: 'Retires swivel-chair entry while keeping compliance traceability intact',
    problem:
      'AP clerks spent nights keying fields from variable invoices and handwritten contracts, producing delays and frequent keying mistakes.',
    issues: [
      'Non-uniform templates and low-resolution scans broke off-the-shelf OCR',
      'Approvers lacked confidence without dual-eye validation',
      'No audit trail tying extractions back to source artifacts',
    ],
    solution:
      'Streamed documents through Azure Form Recognizer plus custom vision fallbacks, reconciled entities in LangChain, and orchestrated reviews in n8n with confidence gating.',
    outcomes: [
      'Stabilized extraction accuracy at 98.7%',
      'Eliminated five FTEs of rote entry while preserving validation checkpoints',
      'Fed structured payloads straight into ERP and compliance archive APIs',
    ],
    role: 'Automation Architect',
    timeline: '6-week pilot, 12-week global rollout',
    images: [
      'https://community.n8n.io/uploads/default/original/2X/a/a3379e09b8300a4e99931d1bad313c130bfe5d03.png',
      'https://community.n8n.io/uploads/default/original/2X/f/f70092cf75084b0aaa51ed71747b680d19865870.png',
      'https://community.n8n.io/uploads/default/original/2X/6/613caa97a16c755e5e7a1ab655105f49800b1224.jpeg',
    ],
  },
  {
    title: 'Document Classification',
    slug: 'document-classification',
    description:
      'Mailroom PDFs had no SLA—teams needed auto-triage to the right queue with confidence-based fallbacks.',
    coverImage: 'https://community.n8n.io/uploads/default/original/2X/f/ffb566fbe1fac62c819582b320f0fb2b3ffd42b3.png',
    link: '#',
    featured: false,
    tech: ['Vertex AI', 'Zapier', 'BigQuery', 'Pub/Sub', 'GCS'],
    keywords: ['Multi-class classification', 'Confidence routing', 'Exception queues', 'Zapier visual builder'],
    investment: '$90K–$200K (0–2 FTE savings)',
    infrastructure: ['Email systems', 'Document repositories', 'Workflow automation', 'Compliance routing'],
    training: 'Model explorer, confidence scoring dashboard walkthrough, routing rule clinics',
    impact: 'Reduces processing time by 80%; ensures audit-friendly routing',
    advantage: 'Keeps compliance exceptions surfaced while eliminating backlog',
    problem:
      'Incoming statements and complaints piled up without triage, causing missed SLAs and lost regulatory responses.',
    issues: [
      'Manual triage took 4–6 hours daily',
      'Compliance breaches when exceptions were buried in shared inboxes',
      'No feedback loop to improve model confidence bands',
    ],
    solution:
      'Fine-tuned Vertex AI document classifiers, orchestrated Zapier visual flows for routing, and piped low-confidence items into analyst work queues.',
    outcomes: [
      'Cut backlog time by 80%',
      'Guaranteed compliance tickets created within minutes',
      'Analysts retrained models weekly via curated feedback UI',
    ],
    role: 'Lead ML Engineer',
    timeline: '8-week delivery (model + automation)',
    images: [
      'https://community.n8n.io/uploads/default/original/2X/f/ffb566fbe1fac62c819582b320f0fb2b3ffd42b3.png',
      'https://community.n8n.io/uploads/default/original/2X/9/9676d93d0c57c7ad8559de2bc2ccedaaa44954f6.png',
      'https://community.n8n.io/uploads/default/original/2X/3/35476a636ca63efd5342e6c0c3cd6eb2be1c0ca7.png',
    ],
  },
  {
    title: 'Retrieval-Augmented Generation Hub',
    slug: 'retrieval-augmented-generation-hub',
    description:
      'Advisors needed instant answers across scattered policy docs while compliance demanded citation logging by default.',
    coverImage: 'https://raw.githubusercontent.com/milvus-io/milvus-docs/v2.6.x/assets/webui-home.png',
    link: '#',
    featured: true,
    tech: ['Milvus', 'SQL Warehouse', 'OpenAI GPT-4', 'Web Search', 'LangChain'],
    keywords: ['Hybrid search', 'RRF ranking', 'Compliance guardrails', 'Citations'],
    investment: '$150K–$300K (reduced errors + faster research)',
    infrastructure: ['Vector DB (Milvus)', 'SQL warehouse', 'Web + intranet crawlers', 'Knowledge graph'],
    training: 'Knowledge Node, DoR Node, LLM Node, Web Node certification path',
    impact: 'Improves decision accuracy; reduces research time by 70%',
    advantage: 'Citable answers with audit-ready logs for regulatory review',
    problem:
      'Policy experts wasted hours reconciling PDFs, SharePoint folders, and intranet wikis with no single source of truth.',
    issues: [
      'High variance answers from vanilla GPT deployments',
      'No persistent citation bundle for compliance audits',
      'Cold start when new policies landed mid-quarter',
    ],
    solution:
      'Built a RAG mesh with Milvus hybrid search, SQL fallbacks, and automated crawling—plus guardrail evaluators before responses ship to advisors.',
    outcomes: [
      'Reduced lookup time from 45 minutes to under 5',
      'Logged every answer with deterministic citations for auditors',
      'Enabled advisors to self-train new corpuses via controlled ingestion UI',
    ],
    role: 'RAG Architect',
    timeline: '12-week phased release',
    images: [
      'https://raw.githubusercontent.com/milvus-io/milvus-docs/v2.6.x/assets/webui-home.png',
      'https://raw.githubusercontent.com/milvus-io/milvus-docs/v2.6.x/assets/webui-query.png',
      'https://raw.githubusercontent.com/milvus-io/milvus-docs/v2.6.x/assets/weighted-ranker.png',
    ],
  },
  {
    title: 'Document Compliance Verification',
    slug: 'document-compliance-verification',
    description:
      'Quarterly filings needed automated cross-checks against regulatory bulletins before finance signed off.',
    coverImage: 'https://community.n8n.io/uploads/default/original/2X/2/2988a148a05c94d639ee857483dc4a2a519bfb91.jpeg',
    link: '#',
    featured: false,
    tech: ['Rule Engine', 'Compliance DBs', 'Alerting', 'Reporting Suite', 'Jira Automations'],
    keywords: ['Cross-reference checks', 'Exception workflow', 'Audit trail', 'Regulatory sync'],
    investment: '$100K–$250K (avoided penalties)',
    infrastructure: ['Regulatory databases', 'Compliance systems', 'Document stores', 'Alerting channels'],
    training: 'Reg Compliance Node, Audit Node, Cross-reference Node, Reporting Node',
    impact: 'Critical for regulated industries; reduces audit risk by 60%',
    advantage: 'Keeps auditors satisfied with provable, time-stamped evidence bundles',
    problem:
      'Late-stage audits kept uncovering missing disclosures because reviews relied on spreadsheets and email threads.',
    issues: [
      'Reg updates were not diffed against old filings',
      'Remediation tasks lacked ownership and SLA tracking',
      'No central evidence locker for auditor walkthroughs',
    ],
    solution:
      'Implemented a rules engine that reconciles filings against regulatory feeds, pushes remediation to Jira, and snapshots evidence into a compliance vault.',
    outcomes: [
      'Cut audit prep time by 60%',
      'Eliminated late penalties across two quarters',
      'Auditors sign off using packaged evidence exports',
    ],
    role: 'Compliance Automation Lead',
    timeline: '9-week implementation',
    images: [
      'https://community.n8n.io/uploads/default/original/2X/2/2988a148a05c94d639ee857483dc4a2a519bfb91.jpeg',
      'https://community.n8n.io/uploads/default/original/2X/f/fea2f5003e1388411d8ac6daf2e52400d6f363c4.png',
      'https://community.n8n.io/uploads/default/original/2X/9/9676d93d0c57c7ad8559de2bc2ccedaaa44954f6.png',
    ],
  },
  {
    title: 'Intelligent Support Bot',
    slug: 'intelligent-support-bot',
    description:
      'Support costs were bleeding due to repetitive FAQs. I launched a GPT-4 powered bot with chat memory, RAG, and ServiceNow escalation flows—achieving 52% ticket deflection while keeping CSAT steady.',
    coverImage: 'https://community.n8n.io/uploads/default/original/2X/4/4847dc23830c4dc781715f916a23d961fc13b60b.jpeg',
    link: '#',
    featured: false,
    tech: ['OpenAI GPT-4', 'ServiceNow', 'RAG Pipeline', 'Slack Apps', 'Zendesk'],
    keywords: ['Ticket deflection', 'Conversational AI', 'Escalation routing', 'Knowledge syncing'],
    investment: '$180K–$350K (support cost reduction)',
    infrastructure: ['CRM systems', 'Ticket systems', 'Knowledge base', 'Chat channels'],
    training: 'Bot Builder Node, RAG Node, Knowledge Sync Node, Escalation Node',
    impact: '40–60% ticket deflection rate; 24/7 availability',
    advantage: 'Keeps CSAT steady while absorbing seasonal volume spikes',
    problem:
      'Tier-1 agents repeated the same macros all day, backlog rows spiked every product launch, and escalations clogged ServiceNow.',
    issues: [
      'Knowledge base drifted from production responses',
      'Agents had no unified history across Slack and ServiceNow',
      'Leadership lacked telemetry on deflection vs. escalation quality',
    ],
    solution:
      'Deployed GPT-4 bot with embedded RAG retrieval, synchronized knowledge refresh every release, and layered escalation playbooks into ServiceNow via n8n orchestrations.',
    outcomes: [
      '52% ticket deflection sustained for six months',
      'CSAT held at 4.6/5 with automated after-action digests',
      'Escalations injected into ServiceNow with runbooks pre-populated',
    ],
    role: 'Conversational AI Lead',
    timeline: '8-week pilot, 6-week global go-live',
    images: [
      'https://community.n8n.io/uploads/default/original/2X/4/4847dc23830c4dc781715f916a23d961fc13b60b.jpeg',
      'https://community.n8n.io/uploads/default/original/2X/f/fea2f5003e1388411d8ac6daf2e52400d6f363c4.png',
      'https://community.n8n.io/uploads/default/original/2X/6/613caa97a16c755e5e7a1ab655105f49800b1224.jpeg',
    ],
  },
  {
    title: 'Automated Loan Origination',
    slug: 'automated-loan-origination',
    description:
      'Loan approvals took 20 days and bled customers. I stitched OCR, credit APIs, risk scoring, and compliance checks in Airflow—with n8n handling manual review loops—shrinking cycle time to 48 hours.',
    coverImage: 'https://raw.githubusercontent.com/apache/airflow/main/docs/apache-airflow/img/airflow_erd.svg',
    link: '#',
    featured: true,
    tech: ['Credit APIs', 'Risk Scoring', 'Compliance Checks', 'Decision Engine', 'Apache Airflow', 'n8n'],
    keywords: ['End-to-end underwriting', 'Human-in-the-loop', 'Policy checks', 'Pipeline observability'],
    investment: '$300K–$600K (FTE + accuracy)',
    infrastructure: ['Credit bureaus', 'Core banking', 'Document systems', 'Compliance APIs'],
    training: 'Identity Node, Credit Node, Risk Node, Compliance Node',
    impact: 'Reduces approval time by 60%; improves accuracy to 99%',
    advantage: 'Automates manual loops while satisfying regulator checkpoints',
    problem:
      'Origination teams were shuttling PDFs between inboxes, with approvals taking 20 days and error rates triggering second reviews.',
    issues: [
      'Stale credit pulls and missing income proofs',
      'Risk scoring inconsistencies across legacy scripts',
      'Compliance team lacked evidence trail per loan',
    ],
    solution:
      'Orchestrated OCR, credit bureau pulls, risk scoring, and compliance validations through Airflow, with n8n workflows for manual overrides and audit snapshots.',
    outcomes: [
      'Shrank cycle time from 20 days to 48 hours',
      'Cut rework rate by 35%',
      'Delivered regulator-ready packet with every decision',
    ],
    role: 'Lending Automation Architect',
    timeline: '14-week phased deployment',
    images: [
      'https://raw.githubusercontent.com/apache/airflow/main/docs/apache-airflow/img/airflow_erd.svg',
      'https://community.n8n.io/uploads/default/original/2X/3/35476a636ca63efd5342e6c0c3cd6eb2be1c0ca7.png',
      'https://community.n8n.io/uploads/default/original/2X/a/a3379e09b8300a4e99931d1bad313c130bfe5d03.png',
    ],
  },
  {
    title: 'Collections Optimization Pipeline',
    slug: 'collections-optimization-pipeline',
    description:
      'Collections team worked oldest accounts first and left money on the table. I trained ML prioritisation models, fed signals into Zapier-run campaigns, and automated payment retries—lifting recovery by 22%.',
    coverImage: 'https://raw.githubusercontent.com/milvus-io/milvus-docs/v2.6.x/assets/rt_qps.png',
    link: '#',
    featured: false,
    tech: ['ML Scoring', 'Campaign Builder', 'Payment Gateways', 'Analytics', 'Zapier'],
    keywords: ['Delinquency prioritisation', 'Next-best-action', 'Automated outreach', 'Revenue recovery'],
    investment: '$150K–$300K (FTE + recovery rate)',
    infrastructure: ['Core banking', 'GL systems', 'Payment networks', 'Campaign tools'],
    training: 'Collections Node, Campaign Node, Analytics Node, Recovery Node',
    impact: 'Typically 20% improvement in collection rates',
    advantage: 'Targets high-probability payers and automates repayment cycles',
    problem:
      'Collectors dialed from spreadsheets, working oldest debt first and missing signals on who would actually pay.',
    issues: [
      'No prioritisation beyond age of debt',
      'Manual dialer uploads slowed outbound pace',
      'Payment retries lacked scheduling intelligence',
    ],
    solution:
      'Built ML propensity models, triggered Zapier campaigns with n8n fallback queues, and orchestrated smart payment retry cadences.',
    outcomes: [
      'Lifted recovery by 22%',
      'Reduced roll rates in 60–90 day bucket by 18%',
      'Gave finance live dashboards on expected vs. realized cash',
    ],
    role: 'Revenue Operations Engineer',
    timeline: '10-week implementation',
    images: [
      'https://raw.githubusercontent.com/milvus-io/milvus-docs/v2.6.x/assets/rt_qps.png',
      'https://community.n8n.io/uploads/default/original/2X/9/9676d93d0c57c7ad8559de2bc2ccedaaa44954f6.png',
      'https://community.n8n.io/uploads/default/original/2X/f/f70092cf75084b0aaa51ed71747b680d19865870.png',
    ],
  },
  {
    title: 'KYC / AML Compliance Automation',
    slug: 'kyc-aml-compliance-automation',
    description:
      'We were drowning in false positives during KYC. I integrated identity APIs, watchlist screening, and case tooling behind an n8n workflow, slashing review time by 65% while keeping AML auditors happy.',
    coverImage: 'https://raw.githubusercontent.com/milvus-io/milvus-docs/v2.6.x/assets/users_and_roles.png',
    link: '#',
    featured: false,
    tech: ['Identity APIs', 'Watchlist Screening', 'Risk Scoring', 'Case Tools', 'n8n'],
    keywords: ['False positive reduction', 'Case triage', 'Continuous screening', 'Audit logging'],
    investment: '$200K–$400K (FTE + risk reduction)',
    infrastructure: ['Identity services', 'Watchlist feeds', 'Behavioral analytics', 'Case management'],
    training: 'Identity Node, Watchlist Node, Risk Node, Case Node',
    impact: 'Cuts review time by 65%; required for AML compliance',
    advantage: 'Keeps auditors satisfied with end-to-end traceability',
    problem:
      'Analysts reviewed every flagged applicant manually, leading to week-long backlogs and frustrated account teams.',
    issues: [
      'High false positive rate from blunt screening rules',
      'No clear audit trail linking decisions to evidence',
      'Manual data gathering across identity vendors',
    ],
    solution:
      'Automated document verification, watchlist screening, and case enrichment with n8n orchestrations and real-time risk scoring.',
    outcomes: [
      'Reduced false positives by 40%',
      'Cut average case handling time from 90 minutes to 30',
      'Maintained full SAR audit logs with click-through evidence',
    ],
    role: 'Financial Crime Engineer',
    timeline: '11-week rollout across three regions',
    images: [
      'https://raw.githubusercontent.com/milvus-io/milvus-docs/v2.6.x/assets/users_and_roles.png',
      'https://community.n8n.io/uploads/default/original/2X/a/a3379e09b8300a4e99931d1bad313c130bfe5d03.png',
      'https://community.n8n.io/uploads/default/original/2X/f/fea2f5003e1388411d8ac6daf2e52400d6f363c4.png',
    ],
  },
  {
    title: 'Insurance Claims Processing',
    slug: 'insurance-claims-processing',
    description:
      'Claims adjusters were copy-pasting between systems. I delivered an extraction + policy validation flow with fraud ML and auto-payout orchestration in Zapier, trimming claim resolution by 75%.',
    coverImage: 'https://raw.githubusercontent.com/milvus-io/milvus-docs/v2.6.x/assets/webui-collection-details.png',
    link: '#',
    featured: false,
    tech: ['Document Extraction', 'Fraud ML', 'Payment Engine', 'Policy DBs', 'Zapier', 'n8n'],
    keywords: ['Straight-through processing', 'Fraud detection', 'Policy validation', 'Auto payouts'],
    investment: '$250K–$500K (FTE + fraud reduction)',
    infrastructure: ['Claims system', 'Policy database', 'Payment rails', 'Case management'],
    training: 'Extraction Node, Fraud Node, Policy Node, Payout Node',
    impact: 'Reduces fraud by 30%; improves customer satisfaction',
    advantage: 'Delivers payout decisions with evidence packs for auditors',
    problem:
      'Adjusters retyped loss summaries into multiple systems and missed fraud patterns hidden in historical claims.',
    issues: [
      'Manual double-entry between policy and payment systems',
      'Fraud heuristics hardcoded in spreadsheets',
      'Customers waited weeks for reimbursement',
    ],
    solution:
      'Orchestrated OCR, policy validation, fraud ML, and automated payout approvals with Zapier—including manual review loops in n8n for ambiguous cases.',
    outcomes: [
      'Cut resolution time by 75%',
      'Reduced suspected fraud payouts by 18%',
      'Shipped real-time dashboards for claims leadership',
    ],
    role: 'Insurance Automation Lead',
    timeline: '12-week modernization program',
    images: [
      'https://raw.githubusercontent.com/milvus-io/milvus-docs/v2.6.x/assets/webui-collection-details.png',
      'https://community.n8n.io/uploads/default/original/2X/f/f70092cf75084b0aaa51ed71747b680d19865870.png',
      'https://community.n8n.io/uploads/default/original/2X/2/2988a148a05c94d639ee857483dc4a2a519bfb91.jpeg',
    ],
  },
  {
    title: 'Trade Finance Document Processing',
    slug: 'trade-finance-document-processing',
    description:
      'International trade desk lost days on letter-of-credit discrepancies. I built a SWIFT parser + compliance checker with automated discrepancy detection and banker review queues, cutting cycle time to under four hours.',
    coverImage: 'https://raw.githubusercontent.com/milvus-io/milvus-docs/v2.6.x/assets/webui-data.png',
    link: '#',
    featured: false,
    tech: ['SWIFT Parser', 'Compliance Checker', 'Discrepancy Detection', 'Workflow Engine', 'n8n'],
    keywords: ['Letter-of-credit automation', 'Trade document QA', 'Exception routing', 'Regulatory compliance'],
    investment: '$200K–$450K (faster revenue release)',
    infrastructure: ['SWIFT network', 'Trade platforms', 'Banking systems', 'Compliance engines'],
    training: 'SWIFT Node, Compliance Node, Discrepancy Node, Workflow Node',
    impact: 'Reduces processing time to <4 hours; prevents compliance drift',
    advantage: 'Keeps bankers on value-add reviews instead of document chase',
    problem:
      'Trade finance teams manually reconciled letters of credit, chasing discrepancies across PDFs and scanning emails.',
    issues: [
      'Discrepancy detection relied on banker memory',
      'No unified audit trail for compliance checks',
      'Turnaround times stretched to multiple days',
    ],
    solution:
      'Delivered SWIFT parsing, automated discrepancy scoring, and banker review queues with escalations routed through n8n workflows.',
    outcomes: [
      'Dropped cycle times to under four hours',
      'Captured discrepancy root causes for continuous improvement',
      'Produced compliance-ready audit packages per transaction',
    ],
    role: 'Trade Automation Principal',
    timeline: '10-week delivery (pilot + production)',
    images: [
      'https://raw.githubusercontent.com/milvus-io/milvus-docs/v2.6.x/assets/webui-data.png',
      'https://community.n8n.io/uploads/default/original/2X/9/9676d93d0c57c7ad8559de2bc2ccedaaa44954f6.png',
      'https://community.n8n.io/uploads/default/original/2X/a/a3379e09b8300a4e99931d1bad313c130bfe5d03.png',
    ],
  },
  {
    title: 'Mortgage Underwriting Automation',
    slug: 'mortgage-underwriting-automation',
    description:
      'Mortgage conversions were stalling. I automated income verification, property valuation, DTI calculation, and compliance logging with n8n orchestration, pulling underwriting down from 30 days to five.',
    coverImage: 'https://raw.githubusercontent.com/milvus-io/milvus-docs/v2.6.x/assets/webui-home.png',
    link: '#',
    featured: true,
    tech: ['Credit Bureaus', 'Property APIs', 'Underwriting Rules', 'Decision Engine', 'n8n', 'Zapier'],
    keywords: ['Automated underwriting', 'Income verification', 'DTI calculation', 'Compliance logging'],
    investment: '$300K–$700K (conversion + compliance)',
    infrastructure: ['Credit bureaus', 'Property data', 'Underwriting systems', 'Decision engines'],
    training: 'Credit Node, Valuation Node, DTI Node, Compliance Node',
    impact: 'Improves conversion rates; protects against compliance breaches',
    advantage: 'Required for FINRA compliance; shields against lawsuits',
    problem:
      'Manual underwriting took weeks, with data gaps across income verification, property valuation, and compliance evidence.',
    issues: [
      'Analysts re-keyed data between disparate systems',
      'Compliance logging lagged behind underwriting decisions',
      'Customers abandoned mid-process due to long waits',
    ],
    solution:
      'Automated data gathering, valuation, DTI checks, and compliance logging via n8n orchestrations, pushing final decisions through decision engine APIs.',
    outcomes: [
      'Pulled underwriting time down from 30 days to 5',
      'Increased application pull-through by 22%',
      'Auditors access structured logs for every underwriting decision',
    ],
    role: 'Mortgage Automation Lead',
    timeline: '16-week rollout across three lending products',
    images: [
      'https://raw.githubusercontent.com/milvus-io/milvus-docs/v2.6.x/assets/webui-home.png',
      'https://community.n8n.io/uploads/default/original/2X/a/a3379e09b8300a4e99931d1bad313c130bfe5d03.png',
      'https://community.n8n.io/uploads/default/original/2X/f/f70092cf75084b0aaa51ed71747b680d19865870.png',
    ],
  },
];

