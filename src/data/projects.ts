export type ProjectStatus = 'Completed' | 'Ongoing';

export interface MetricItem {
  label: string;
  value: string;
  detail?: string;
}

export interface ChallengeItem {
  challenge: string;
  solution: string;
  isPlaceholder?: boolean;
}

export interface ProcessStep {
  phase: string;
  title: string;
  description: string;
  isPlaceholder?: boolean;
}

export interface PcosModelResult {
  model: string;
  fullAuc: number;
  fullStd: number;
  lowCostAuc: number;
  lowCostStd: number;
  note: string;
}

export interface SimGpuDiagram {
  id: string;
  title: string;
  category: 'Architecture' | 'ISA Encoding';
  src: string;
  caption: string;
}

export interface SimGpuMilestone {
  label: string;
  done: boolean;
  group: string;
}

export interface FeaturedProject {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  status: ProjectStatus;
  period: string;
  contextTag: string;
  summary: string;
  headlineMetric: string;
  repoUrl?: string;
  liveDemoUrl?: string;
  tags: string[];
  overview: string;
  audienceTakeaway: string;
  metrics: MetricItem[];
  processSteps: ProcessStep[];
  challenges: ChallengeItem[];
  contributions: {
    items: string[];
    placeholderNote?: string;
  };
  skillsDemonstrated: string[];
}

export interface AdditionalProject {
  name: string;
  description: string;
  tags: string[];
  repoUrl: string;
  year: string;
}

export const PROFILE = {
  name: 'Austin Simmons',
  role: 'Data Science & Systems-Minded Engineer',
  tagline:
    'Bridging statistical modeling, low-level C++ & embedded systems, and security-focused engineering.',
  location: 'Calgary, AB',
  focusSummary:
    'Applied Machine Learning · Low-Level C++ & Embedded Systems · Security-Minded Engineering',
  links: {
    github: 'https://github.com/AustinJSimmons',
    linkedin: 'https://www.linkedin.com/in/austin-simmons-77953322a/',
    email: 'austinsimmons098@gmail.com',
    resume: '/Austin_resume_web_version.pdf',
  },
  experience: [
    {
      title: 'Embedded Systems Intern',
      organization: '[Placeholder: Company Name]',
      period: '[Placeholder: Term / Year]',
      highlights: [
        '[Placeholder: Describe firmware, hardware bring-up, or telemetry pipeline you worked on]',
        '[Placeholder: Mention debugging tools, protocols (e.g., SPI/I2C/UART/CAN), or measurable reliability gains]',
      ],
      isPlaceholder: true,
    },
    {
      title: 'B.Sc. in Data Science (Coursework & Capstone)',
      organization: 'Data Science & Computing Coursework',
      period: 'Expected 2026',
      highlights: [
        'Applied machine learning, statistical validation, distributed MapReduce pipelines, and interactive visualization.',
        'Independent systems exploration in C++/SystemC GPU simulation and security-oriented engineering.',
      ],
      isPlaceholder: false,
    },
  ],
  skillGroups: [
    {
      category: 'Data Science & ML',
      skills: [
        'Python (pandas, scikit-learn, XGBoost)',
        'SHAP Explainability',
        'Stratified Cross-Validation',
        'K-Means Clustering',
        'Statistical Hypothesis Testing',
        'Streamlit & Observable Plot',
      ],
    },
    {
      category: 'Systems & Embedded',
      skills: [
        'C++',
        'SystemC',
        'Computer / GPU Architecture',
        'Custom ISA & Bitmap Design',
        'Embedded Firmware [Update w/ Internship]',
        'Linux & Git',
      ],
    },
    {
      category: 'Automation & Web',
      skills: [
        'Google Apps Script',
        'Google Sheets Data Validation',
        'TypeScript / Next.js',
        'Tailwind CSS',
        'Astro',
        'Vercel CI/CD',
      ],
    },
    {
      category: 'Engineering & Security Mindset',
      skills: [
        'Automated Testing (pytest, SystemC)',
        'Reproducible Pipelines',
        'Input Sanitization & Access Controls',
        'Technical Documentation',
      ],
    },
  ],
};

export const PCOS_MODEL_RESULTS: PcosModelResult[] = [
  {
    model: 'XGBoost',
    fullAuc: 0.9623,
    fullStd: 0.012,
    lowCostAuc: 0.875,
    lowCostStd: 0.018,
    note: 'Highest mean Full-Feature AUC; paired with SHAP for local & global feature attribution.',
  },
  {
    model: 'Random Forest',
    fullAuc: 0.961,
    fullStd: 0.012,
    lowCostAuc: 0.8891,
    lowCostStd: 0.024,
    note: 'Highest mean Low-Cost (non-invasive symptoms/vitals only) AUC.',
  },
  {
    model: 'LASSO (L1)',
    fullAuc: 0.9551,
    fullStd: 0.009,
    lowCostAuc: 0.8853,
    lowCostStd: 0.024,
    note: 'Sparse linear baseline encouraging automatic feature selection.',
  },
  {
    model: 'Ridge (L2)',
    fullAuc: 0.9505,
    fullStd: 0.004,
    lowCostAuc: 0.8803,
    lowCostStd: 0.027,
    note: 'Lowest fold-to-fold variance on the full clinical feature set.',
  },
  {
    model: 'Logistic Regression',
    fullAuc: 0.9419,
    fullStd: 0.003,
    lowCostAuc: 0.8778,
    lowCostStd: 0.027,
    note: 'Directly interpretable odds ratios used in the Risk Calculator app.',
  },
];

export const SIM_GPU_DIAGRAMS: SimGpuDiagram[] = [
  {
    id: 'high-level',
    title: 'High-Level GPU Architecture',
    category: 'Architecture',
    src: '/images/sim-gpu/high-level-gpu.svg',
    caption:
      'Top-level GPU layout connecting the host interface, warp/global scheduler, L2 cache, memory controller, and compute units.',
  },
  {
    id: 'compute-unit',
    title: 'Compute Unit (SM) Internals',
    category: 'Architecture',
    src: '/images/sim-gpu/compute-unit.svg',
    caption:
      'Compute Unit microarchitecture showing control unit (instruction cache, decoder, scheduler, dispatcher), register file, L1 cache, and processing elements.',
  },
  {
    id: 's-type',
    title: 'S-Type Instruction Bitmap',
    category: 'ISA Encoding',
    src: '/images/sim-gpu/s-type.svg',
    caption: 'Custom ISA bit-field layout for S-Type instructions.',
  },
  {
    id: 'm-type',
    title: 'M-Type Instruction Bitmap',
    category: 'ISA Encoding',
    src: '/images/sim-gpu/m-type.svg',
    caption:
      'M-Type register-to-register instruction layout accessing src1, src2, and rd (including MOV).',
  },
  {
    id: 'c-type',
    title: 'C-Type Instruction Bitmap',
    category: 'ISA Encoding',
    src: '/images/sim-gpu/c-type.svg',
    caption:
      'Control-flow instruction layout using predicates and instruction-cache target addresses.',
  },
];

export const SIM_GPU_MILESTONES: SimGpuMilestone[] = [
  { group: 'Foundation', label: 'SystemC functional testbench & module testing', done: true },
  { group: 'Processing Element', label: 'ALU simulated & functionally tested', done: true },
  { group: 'Processing Element', label: 'FPU simulated & functionally tested', done: true },
  { group: 'Processing Element', label: 'LSU (Load/Store Unit) & optional SFU', done: false },
  { group: 'Compute Unit', label: 'Control Unit (I-Cache, Decoder, Scheduler, Dispatcher)', done: false },
  { group: 'Compute Unit', label: 'Register File & L1 Cache', done: false },
  { group: 'Full GPU', label: 'Warp Scheduler, L2 Cache & Memory Controller', done: false },
  { group: 'Timing', label: 'Cycle-accurate simulation pass', done: false },
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    slug: 'pcos-diagnostic-dashboard',
    title: 'PCOS Diagnostic & Risk Dashboard',
    shortTitle: 'PCOS Diagnostic Dashboard',
    subtitle: 'DATA 501 Capstone · Clinical Machine Learning & Explainable Screening App',
    status: 'Completed',
    period: 'Apr 2026',
    contextTag: 'Data Science & Applied ML',
    summary:
      'End-to-end diagnostic ML pipeline and 3-page Streamlit application evaluating 5 classifiers on 541 clinical records, comparing full lab panels against low-cost non-invasive screening.',
    headlineMetric: '0.9623 CV AUC · 541 Patients · 5 Models',
    repoUrl: 'https://github.com/AustinJSimmons/pcos-diagnostic-dashboard',
    tags: ['Python', 'XGBoost', 'SHAP', 'K-Means', 'Streamlit', 'pytest'],
    overview:
      'Built on a clinical dataset of 541 patients (177 PCOS cases, 364 controls) across 41 features—spanning hormonal assays, anthropometric measurements, ultrasound findings, and self-reported symptoms from 10 hospitals in Kerala, India. Rather than stopping at a single accuracy score, the pipeline tests whether non-invasive symptoms and vitals alone can support accessible screening when expensive lab or ultrasound tests are unavailable.',
    audienceTakeaway:
      'Demonstrates statistical rigor (identical 5-fold stratified CV splits + Wilcoxon signed-rank validation), model interpretability (SHAP + LR coefficients), and production-minded delivery (tested multi-page UI).',
    metrics: [
      { label: 'Best Full-Panel AUC', value: '0.9623 ± 0.012', detail: 'XGBoost (5-fold stratified CV)' },
      { label: 'Best Low-Cost AUC', value: '0.8891 ± 0.024', detail: 'Random Forest (symptoms & vitals)' },
      { label: 'Dataset Scope', value: '541 × 41', detail: '177 PCOS / 364 controls' },
      { label: 'Pipeline & UI', value: '8 NBs + 3 Pages', detail: 'Reproducible notebooks + pytest suite' },
    ],
    processSteps: [
      {
        phase: '01 · Cleaning & EDA',
        title: 'Sanitization, Derived Ratios & Statistical Tests',
        description:
          'Notebooks 01–02 clean raw hospital records, recalculate BMI and waist-to-hip ratios, and run t-tests, chi-square tests, and PCA to identify class separation.',
      },
      {
        phase: '02 · Feature Selection & Phenotypes',
        title: 'Mutual Information & K-Means Subtyping',
        description:
          'Notebooks 03–05 apply mutual information selection, SHAP attribution on tuned XGBoost, and K-Means clustering (k=2) on PCOS patients, surfacing Metabolic vs. Hyperandrogenic subtypes.',
      },
      {
        phase: '03 · Rigorous Benchmarking',
        title: 'Identical CV Splits & Screening Context Analysis',
        description:
          'Notebooks 06–08 benchmark XGBoost, Random Forest, LASSO, Ridge, and Logistic Regression on identical 5-fold stratified splits, evaluating sensitivity, specificity, PPV, and NPV across full vs. low-cost screening contexts.',
      },
      {
        phase: '04 · Interactive Delivery',
        title: '3-Page Tested Streamlit Application',
        description:
          'Ships Phenotype Explorer, Risk Calculator (full clinical or non-invasive mode), and Feature Impact pages backed by automated dashboard tests in tests/test_dashboard.py.',
      },
    ],
    challenges: [
      {
        challenge:
          'Avoiding cherry-picked model comparisons when multiple classifiers perform closely (~0.94–0.96 AUC).',
        solution:
          'Standardized all 5 models on identical 5-fold stratified CV splits (NB07) and ran Bonferroni-corrected Wilcoxon signed-rank tests—confirming pairwise differences were statistically non-significant and justifying simpler interpretable models where appropriate.',
      },
      {
        challenge:
          'Clinical models often rely on costly hormone panels and ultrasound counts that are inaccessible for early screening.',
        solution:
          'Built a parallel Low-Cost Screening track restricted to symptoms and vitals (NB08 & Risk Calculator), retaining 0.875–0.889 AUC while clearly documenting sensitivity/specificity trade-offs.',
      },
      {
        challenge:
          'Ensuring the Streamlit UI remained reliable as notebooks and processed artifacts evolved.',
        solution:
          'Decoupled notebook outputs into data/processed/cleaned_data.csv, centralized styling/themes in app/styles.py, and added pytest checks in tests/test_dashboard.py.',
      },
    ],
    contributions: {
      items: [
        '[Placeholder: Specify which notebooks (01–08) or modeling/clustering sections you owned]',
        '[Placeholder: Specify your role in building the Streamlit dashboard pages or pytest suite]',
        'Co-authored reproducible analysis workflow and model evaluation criteria across the capstone team.',
      ],
      placeholderNote:
        'Replace the first two bullets above with the exact notebooks, models, or UI pages you built.',
    },
    skillsDemonstrated: [
      'Supervised ML Benchmarking',
      'SHAP & Model Explainability',
      'Unsupervised Clustering (K-Means)',
      'Non-Parametric Hypothesis Testing',
      'Streamlit App Engineering',
      'Automated Testing (pytest)',
    ],
  },
  {
    slug: 'sim-gpu',
    title: 'sim-gpu: C++ & SystemC GPU Simulator',
    shortTitle: 'sim-gpu Simulator',
    subtitle: 'Ongoing Systems Project · Hardware Architecture, Custom ISA & Verification',
    status: 'Ongoing',
    period: 'Jul 2026 – Present',
    contextTag: 'Systems & Low-Level Architecture',
    summary:
      'From-scratch functional GPU simulator in C++ and SystemC inspired by tiny-gpu, complete with custom architecture diagrams, instruction bit-field layouts, and verified ALU/FPU execution units.',
    headlineMetric: 'C++ / SystemC · ALU & FPU Tested · Custom ISA',
    repoUrl: 'https://github.com/AustinJSimmons/sim-gpu',
    tags: ['C++', 'SystemC', 'Computer Architecture', 'ISA Design', 'Digital Logic'],
    overview:
      'Inspired by tiny-gpu, sim-gpu is a self-directed engineering project to design and simulate a GPU from the ground up in C++ and SystemC. Each subsystem is documented around three core questions—what it does, its component parts, and why a GPU needs it—before implementing and functionally verifying modules prior to introducing cycle-accurate timing.',
    audienceTakeaway:
      'Shows low-level hardware literacy, disciplined verification-first engineering (testing ALU & FPU in SystemC before scaling up), and systems intuition relevant to embedded, performance, and hardware security roles.',
    metrics: [
      { label: 'Core Stack', value: 'C++ / SystemC', detail: 'Hardware-level module simulation' },
      { label: 'Verified Modules', value: 'ALU & FPU', detail: 'Functional SystemC testbenches passing' },
      { label: 'ISA Bitmaps', value: 'S / M / C-Type', detail: 'Custom register & predicate encodings' },
      { label: 'Next Milestone', value: 'LSU & Control', detail: 'Instruction cache, decoder & warp scheduler' },
    ],
    processSteps: [
      {
        phase: '01 · Architecture Blueprinting',
        title: 'High-Level GPU & Compute Unit Mapping',
        description:
          'Authored light/dark SVG architecture diagrams mapping the global scheduler, L2/memory controller, compute units, control unit pipeline, register file, and L1 cache.',
      },
      {
        phase: '02 · ISA Specification',
        title: 'S-Type, M-Type & C-Type Instruction Formats',
        description:
          'Defined custom bit-field layouts using WaveDrom SVGs—covering 3-register arithmetic/MOV operations (M-Type) and predicated instruction-cache jumps (C-Type).',
      },
      {
        phase: '03 · Functional Verification',
        title: 'SystemC Testbenches for Processing Elements',
        description:
          'Built SystemC simulation harnesses and functionally verified the Processing Element ALU and FPU prior to adding cycle-timing complexity.',
      },
      {
        phase: '04 · Next Up (Ongoing)',
        title: 'Memory Subsystem, Control Unit & Cycle Timing',
        description:
          'Implementing the Load/Store Unit (LSU), Instruction Cache, Decoder, Register File, Warp Scheduler, and finally transitioning from functional simulation to cycle-accurate timing.',
      },
    ],
    challenges: [
      {
        challenge:
          'Managing simulation complexity when learning GPU microarchitecture and SystemC simultaneously.',
        solution:
          'Explicitly separated the roadmap into a functional-simulation phase first (verifying ALU/FPU behavior in isolation) before attempting cycle-accurate timing across caches and warp schedulers.',
      },
      {
        challenge:
          'Designing predicated control flow (C-Type instructions) for SIMT/GPU execution without overcomplicating the initial instruction decoder.',
        solution:
          'Documented explicit bitmap layouts for S-Type, M-Type, and C-Type instructions first so register decoding and predicate branching remain cleanly decoupled.',
      },
    ],
    contributions: {
      items: [
        'Sole author: designed the GPU & Compute Unit block architectures and ISA instruction bitmap diagrams.',
        'Configured SystemC functional testing infrastructure and verified Processing Element ALU and FPU modules.',
        'Maintained structured architectural documentation answering component purpose, structure, and GPU rationale.',
      ],
    },
    skillsDemonstrated: [
      'C++ Systems Programming',
      'SystemC Hardware Simulation',
      'ISA & Bit-Level Encoding',
      'Unit-Level Hardware Verification',
      'Technical Architecture Diagramming',
    ],
  },
  {
    slug: 'dealership-workflow-automation',
    title: 'Dealership Intake & Workflow Automation',
    shortTitle: 'Dealership Apps Script',
    subtitle: 'Ongoing Client Project · Google Sheets & Google Apps Script Form Pipeline',
    status: 'Ongoing',
    period: 'Ongoing · Real-World Build',
    contextTag: 'Workflow Automation & Data Integrity',
    summary:
      'Custom Google Sheets and Google Apps Script intake form and operational workflow built for a local Dodge dealership to standardize data entry and eliminate manual tracking errors.',
    headlineMetric: '[Placeholder: Hours Saved / Error Reduction]',
    tags: ['Google Apps Script', 'JavaScript', 'Google Sheets', 'Data Validation', 'Workflow Design'],
    overview:
      '[Placeholder: Replace with 3–4 sentences describing the exact workflow bottleneck at the Dodge dealership (e.g., vehicle check-in, service/sales intake, inventory or commission tracking), who uses the tool daily, and what the form + spreadsheet pipeline automates.]',
    audienceTakeaway:
      'Demonstrates pragmatic engineering for non-technical end users: enforcing data quality at input, automating repetitive spreadsheet work, and building guardrails against human error.',
    metrics: [
      {
        label: 'Primary Platform',
        value: 'Sheets + Script',
        detail: 'Zero-infrastructure deployment on Google Workspace',
      },
      {
        label: 'Workflow Impact',
        value: '[Placeholder]',
        detail: 'e.g., X mins saved per intake / Y records processed',
      },
      {
        label: 'Data Integrity',
        value: '[Placeholder]',
        detail: 'Automated validation, formatting & status triggers',
      },
      {
        label: 'Project Status',
        value: 'Ongoing',
        detail: 'Iterating directly with dealership staff feedback',
      },
    ],
    processSteps: [
      {
        phase: '01 · Discovery',
        title: 'Mapping the Dealership Paper/Spreadsheet Bottleneck',
        description:
          '[Placeholder: Describe how staff previously tracked entries and where manual errors, duplicates, or missing fields occurred.]',
        isPlaceholder: true,
      },
      {
        phase: '02 · Schema & Input Design',
        title: 'Structured Intake Form & Normalized Sheet Schema',
        description:
          '[Placeholder: Describe the form fields, dropdowns, VIN/stock-number formatting rules, or multi-tab sheet layout you designed.]',
        isPlaceholder: true,
      },
      {
        phase: '03 · Apps Script Automation',
        title: 'Triggers, Validation & Automated Routing',
        description:
          '[Placeholder: Describe your Apps Script functions—e.g., onFormSubmit / onEdit triggers, timestamping, email/PDF notifications, or status syncing.]',
        isPlaceholder: true,
      },
      {
        phase: '04 · User Rollout & Iteration',
        title: 'Testing with Staff & Ongoing Refinements',
        description:
          '[Placeholder: Describe what you are currently improving next based on live dealership usage.]',
        isPlaceholder: true,
      },
    ],
    challenges: [
      {
        challenge:
          '[Placeholder: Challenge #1 — e.g., handling concurrent edits, Apps Script trigger permissions/quotas, or inconsistent staff inputs like VINs/dates]',
        solution:
          '[Placeholder: How you solved it — e.g., LockService, input regex/validation rules, protected ranges, or idempotent script triggers]',
        isPlaceholder: true,
      },
      {
        challenge:
          '[Placeholder: Challenge #2 — e.g., designing an interface non-technical staff could use quickly without breaking formulas]',
        solution:
          '[Placeholder: How you solved it — e.g., separating raw intake log from formatted dashboard views and locking formula columns]',
        isPlaceholder: true,
      },
    ],
    contributions: {
      items: [
        'Sole developer & stakeholder liaison: gathered requirements directly from dealership staff.',
        '[Placeholder: Key Apps Script / Sheet architecture feature you built]',
        '[Placeholder: Next feature planned before full handoff]',
      ],
      placeholderNote:
        'Replace the [Placeholder] text in src/data/projects.ts (and optionally drop sanitized screenshots into public/images/dealership/).',
    },
    skillsDemonstrated: [
      'Google Apps Script (JS)',
      'Data Schema & Input Validation',
      'Stakeholder Requirements Gathering',
      'Defensive Spreadsheet Design',
      'Iterative Deployment',
    ],
  },
];

export const ADDITIONAL_PROJECTS: AdditionalProject[] = [
  {
    name: '482FinalDashboard',
    description:
      'Interactive Observable Framework dashboard analyzing personal biometric telemetry (Heart Rate vs. Mood & Focus) with live toggles and linear regression.',
    tags: ['Observable Framework', 'JavaScript', 'Observable Plot', 'Data Viz'],
    repoUrl: 'https://github.com/AustinJSimmons/482FinalDashboard',
    year: 'Dec 2025',
  },
  {
    name: '479Project',
    description:
      'Multi-task Python distributed data processing pipeline implementing custom MapReduce mappers and reducers across structured tasks.',
    tags: ['Python', 'MapReduce', 'Data Engineering'],
    repoUrl: 'https://github.com/AustinJSimmons/479Project',
    year: 'Apr 2026',
  },
  {
    name: 'MyGraphicsEngine',
    description:
      'C++ graphics engine project exploring real-time rendering pipelines, math primitives, and low-level memory/resource management.',
    tags: ['C++', 'Graphics', 'Systems'],
    repoUrl: 'https://github.com/AustinJSimmons/MyGraphicsEngine',
    year: 'Feb 2026',
  },
  {
    name: 'sim-blog',
    description:
      'Minimalist technical blog built with Astro and TypeScript content collections for writing engineering notes.',
    tags: ['Astro', 'TypeScript', 'Web'],
    repoUrl: 'https://github.com/AustinJSimmons/sim-blog',
    year: 'Jul 2026',
  },
];

export function getFeaturedProject(slug: string): FeaturedProject | undefined {
  return FEATURED_PROJECTS.find((p) => p.slug === slug);
}
