/*
 * ============================================================================
 * PORTFOLIO COPY QUICK GUIDE (Search for "EDIT [" across src/ to find any text)
 * ============================================================================
 * - PROFILE.name / role / links  -> Navbar (all pages), Footer (all pages), Overview (/), Resume (/resume)
 * - PROFILE.experience           -> Overview (/) "Experience & Education" section
 * - PROFILE.skillGroups          -> Overview (/) "Core Skills" section
 * - PROFILE.interests            -> Overview (/) "Interests" section
 * - PCOS_MODEL_RESULTS           -> Project Overview: /projects/pcos-diagnostic-dashboard
 * - SIM_GPU_DIAGRAMS/MILESTONES  -> Project Overview: /projects/sim-gpu
 * - FEATURED_PROJECTS            -> Projects (/projects) carousel + /projects/<slug> detail pages
 * - ADDITIONAL_PROJECTS          -> Projects (/projects) "More Projects on GitHub" grid
 * ============================================================================
 */

export type ProjectStatus = 'Completed' | 'Ongoing';

export interface InterestItem {
  topic: string;
  description: string;
}

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
  canvas: 'light' | 'dark';
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
  relatedBlogSlug?: string;
  relatedBlogTitle?: string;
}

export interface AdditionalProject {
  name: string;
  description: string;
  tags: string[];
  repoUrl: string;
  year: string;
}

// EDIT [All Pages — Overview (/), Navbar, Footer, Resume (/resume)]: Core identity, contact links, and PDF path
export const PROFILE = {
  name: 'Austin Simmons',
  role: 'Data Scientist & Embedded Systems Developer',
  tagline:
    'Bridging statistical modeling, applied machine learning, and low-level C++ & embedded firmware development.',
  location: 'Calgary, AB',
  focusSummary:
    'Applied Machine Learning - Embedded Firmware & STM32 - Low-Level C++ & Systems Development',
  links: {
    github: 'https://github.com/AustinJSimmons',
    linkedin: 'https://www.linkedin.com/in/austin-simmons-77953322a/',
    email: 'austinsimmons098@gmail.com',
    resume: '/Austin_resume_web_version.pdf', // File in public/Austin_resume_web_version.pdf
  },
  // EDIT [Overview (/) — "Experience & Education" section]: Work history & degree cards
  experience: [
    {
      title: 'Embedded Firmware Developer',
      organization: 'In-line Pigging Solutions - Calgary, AB',
      period: 'Apr 2025 – Sept 2025',
      highlights: [
        'Designed firmware architecture for an embedded prototype from the ground up.',
        'Developed low-level drivers and packet protocols using STM32 HAL libraries.',
        'Integrated real-time data acquisition pipelines using DMA, timers, and low-power modes.',
        'Established CI/CD systems for firmware testing and deployment.',
        'Enforced BARR-C embedded C coding standards and peer-reviewed code.',
      ],
      isPlaceholder: false,
    },
    {
      title: 'Software Development Intern',
      organization: 'In-line Pigging Solutions - Calgary, AB',
      period: 'Apr 2024 – Apr 2025',
      highlights: [
        'Refactored and expanded a client-facing GPS tracking system using React, JavaScript, and TypeScript.',
        'Collaborated with UI/UX designers to turn Figma mockups into responsive, production-ready code.',
        'Worked independently in a fast-paced, self-directed environment with minimal supervision.',
        'Added interactive map features and filtering logic for asset management.',
      ],
      isPlaceholder: false,
    },
    {
      title: 'B.Sc. in Data Science — Mathematics Concentration',
      organization: 'University of Calgary',
      period: 'Expected Winter/Fall 2027 - Ongoing',
      highlights: [
        'Applied machine learning, statistical validation, distributed MapReduce pipelines, and data visualization.',
      ],
      isPlaceholder: false,
    },
  ],
  // EDIT [Overview (/) — "Core Skills" section]: 4 skill category groups
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
        'C / C++',
        'SystemC',
        'Embedded C (BARR-C), STM32 HAL & DMA',
        'Computer / GPU Architecture',
        'Custom ISA & Bitmap Design',
        'Linux & Git',
      ],
    },
    {
      category: 'Automation & Web',
      skills: [
        'React',
        'TypeScript / Next.js',
        'Tailwind CSS',
        'Google Apps Script',
        'Google Sheets Data Validation',
        'Astro & Vercel CI/CD',
      ],
    },
    {
      category: 'Testing, Tooling & Practices',
      skills: [
        'Automated Testing (pytest, SystemC)',
        'Reproducible Pipelines',
        'CI/CD & Embedded Standards (BARR-C)',
        'Technical Documentation',
      ],
    },
  ],
  // EDIT [Overview (/) — "Interests" section]: Add, remove, or edit your current interests and topics of study
  interests: [
    {
      topic: 'Edge AI & On-Device ML',
      description:
        'Running lightweight inference and decision-making directly on resource-constrained microcontrollers without relying on cloud connectivity.',
    },
    {
      topic: 'GPU & Computer Architecture',
      description:
        'Exploring SIMT execution, custom ISA design, memory hierarchies, and hardware simulation in C++ and SystemC.',
    },
    {
      topic: 'Embedded Firmware & Home Lab',
      description:
        'Building out a personal electronics and firmware workbench for STM32 bare-metal drivers, DMA pipelines, and hardware bring-up.',
    },
  ] satisfies InterestItem[],
};

// EDIT [Project Overview (/projects/pcos-diagnostic-dashboard) — Benchmark Table]: Model CV AUC scores & notes
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

// EDIT [Project Overview (/projects/sim-gpu) — Diagram Explorer]: SVG tabs, file paths in public/images/sim-gpu/, & captions
export const SIM_GPU_DIAGRAMS: SimGpuDiagram[] = [
  {
    id: 'high-level',
    title: 'High-Level GPU Architecture',
    category: 'Architecture',
    src: '/images/sim-gpu/high-level-gpu.svg',
    canvas: 'light',
    caption:
      'Top-level GPU layout connecting the host interface, warp/global scheduler, L2 cache, memory controller, and compute units.',
  },
  {
    id: 'compute-unit',
    title: 'Compute Unit (SM) Internals',
    category: 'Architecture',
    src: '/images/sim-gpu/compute-unit.svg',
    canvas: 'light',
    caption:
      'Compute Unit microarchitecture showing control unit (instruction cache, decoder, scheduler, dispatcher), register file, L1 cache, and processing elements.',
  },
  {
    id: 's-type',
    title: 'S-Type Instruction Bitmap',
    category: 'ISA Encoding',
    src: '/images/sim-gpu/s-type-w.svg',
    canvas: 'dark',
    caption: 'Custom ISA bit-field layout for S-Type instructions.',
  },
  {
    id: 'm-type',
    title: 'M-Type Instruction Bitmap',
    category: 'ISA Encoding',
    src: '/images/sim-gpu/m-type-w.svg',
    canvas: 'dark',
    caption:
      'M-Type register-to-register instruction layout accessing src1, src2, and rd (including MOV).',
  },
  {
    id: 'c-type',
    title: 'C-Type Instruction Bitmap',
    category: 'ISA Encoding',
    src: '/images/sim-gpu/c-type-w.svg',
    canvas: 'dark',
    caption:
      'Control-flow instruction layout using predicates and instruction-cache target addresses.',
  },
];

// EDIT [Project Overview (/projects/sim-gpu) — Roadmap Checklist]: Completed vs. upcoming SystemC milestones
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

// EDIT [Projects (/projects) Carousel + /projects/<slug> Overview Pages]: Add, reorder, or edit featured projects here
export const FEATURED_PROJECTS: FeaturedProject[] = [
  // EDIT [Projects (/projects) Card 01 + /projects/pcos-diagnostic-dashboard]:
  {
    slug: 'pcos-diagnostic-dashboard',
    title: 'PCOS Diagnostic & Risk Dashboard',
    shortTitle: 'PCOS Diagnostic Dashboard',
    subtitle: 'DATA 501 Capstone - Clinical Machine Learning & Explainable Screening App',
    status: 'Completed',
    period: 'Apr 2026',
    contextTag: 'Data Science & Applied ML',
    summary:
      'End-to-end diagnostic ML pipeline and 3-page Streamlit application evaluating 5 classifiers on 541 clinical records, comparing full lab panels against low-cost non-invasive screening.',
    headlineMetric: '0.9623 CV AUC - 541 Patients - 5 Models',
    repoUrl: 'https://github.com/AustinJSimmons/pcos-diagnostic-dashboard',
    liveDemoUrl: 'https://pcos-diagnostic-dashboard-lx9z2zffjzysg2hsxvzhdw.streamlit.app/',
    tags: ['Python', 'XGBoost', 'SHAP', 'K-Means', 'Streamlit', 'pytest'],
    overview:
      'Built on a clinical dataset of 541 patients (177 PCOS cases, 364 controls) across 41 features—spanning hormonal lifestyle, and ultrasound findings from 10 hospitals in Kerala, India. Rather than stopping at a single accuracy score, the pipeline tests whether non-invasive symptoms and vitals alone can support accessible screening when expensive lab or ultrasound tests are unavailable.',
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
        phase: '01 - Cleaning & EDA',
        title: 'Sanitization, Derived Ratios & Statistical Tests',
        description:
          'Notebooks 01–02 clean raw hospital records, recalculate BMI and waist-to-hip ratios, and run t-tests, chi-square tests, and PCA to identify class separation.',
      },
      {
        phase: '02 - Feature Selection & Phenotypes',
        title: 'Mutual Information & K-Means Subtyping',
        description:
          'Notebooks 03–05 apply mutual information selection, SHAP attribution on tuned XGBoost, and K-Means clustering (k=2) on PCOS patients, surfacing Metabolic vs. Hyperandrogenic subtypes.',
      },
      {
        phase: '03 - Rigorous Benchmarking',
        title: 'Identical CV Splits & Screening Context Analysis',
        description:
          'Notebooks 06–08 benchmark XGBoost, Random Forest, LASSO, Ridge, and Logistic Regression on identical 5-fold stratified splits, evaluating sensitivity, specificity, PPV, and NPV across full vs. low-cost screening contexts.',
      },
      {
        phase: '04 - Interactive Delivery',
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
        'All EDA and initial modeling/clustering',
        'Built out the ML model evaluation pipeline with Grid Search for hyperparameter optimization and feature importance analysis',
        'Co-authored the streamlit dashboard',
      ],
    },
    skillsDemonstrated: [
      'Supervised ML Benchmarking',
      'SHAP & Model Explainability',
      'Unsupervised Clustering (K-Means)',
      'Non-Parametric Hypothesis Testing'
    ],
  },
  // EDIT [Projects (/projects) Card 02 + /projects/sim-gpu]:
  {
    slug: 'sim-gpu',
    title: 'sim-gpu: C++ & SystemC GPU Simulator',
    shortTitle: 'sim-gpu Simulator',
    subtitle: 'Ongoing Systems Project - Hardware Architecture, Custom ISA & Verification',
    status: 'Ongoing',
    period: 'Jul 2026 – Present',
    contextTag: 'Systems & Low-Level Architecture',
    summary:
      'From-scratch functional GPU simulator in C++ and SystemC inspired by tiny-gpu, complete with custom architecture diagrams, instruction bit-field layouts, and verified ALU/FPU execution units.',
    headlineMetric: 'C++ / SystemC - ALU & FPU Tested - Custom ISA',
    repoUrl: 'https://github.com/AustinJSimmons/sim-gpu',
    relatedBlogSlug: 'sim-gpu-pt0',
    relatedBlogTitle: 'Read SIM-GPU Devlog',
    tags: ['C++', 'SystemC', 'Computer Architecture', 'ISA Design', 'Digital Logic'],
    overview:
      'Inspired by tiny-gpu, sim-gpu is a self-directed project to design and simulate a GPU from the ground up in C++ using SystemC. Each subsystem is documented around three core questions, what it does, its component parts, and why a GPU needs it, before implementing and functionally verifying modules prior to introducing cycle-accurate timing.',
    audienceTakeaway:
      'Shows low-level hardware literacy, and systems intuition relevant to embedded, firmware, and related roles',
    metrics: [
      { label: 'Core Stack', value: 'C++ / SystemC', detail: 'Hardware-level module simulation' },
      { label: 'Verified Modules', value: 'ALU & FPU', detail: 'Functional SystemC testbenches passing' },
      { label: 'ISA Bitmaps', value: 'S / M / C-Type', detail: 'Custom register & predicate encodings' },
      { label: 'Next Milestone', value: 'LSU & Control', detail: 'Instruction cache, decoder & warp scheduler' },
    ],
    processSteps: [
      {
        phase: '01 - Architecture Blueprinting',
        title: 'High-Level GPU & Compute Unit Mapping',
        description:
          'Authored light/dark SVG architecture diagrams mapping the global scheduler, L2/memory controller, compute units, control unit pipeline, register file, and L1 cache.',
      },
      {
        phase: '02 - ISA Specification',
        title: 'S-Type, M-Type & C-Type Instruction Formats',
        description:
          'Defined custom bit-field layouts using WaveDrom SVGs, covering 3-register arithmetic/MOV operations (M-Type) and predicated instruction-cache jumps (C-Type).',
      },
      {
        phase: '03 - Functional Verification',
        title: 'SystemC Testbenches for Processing Elements',
        description:
          'Built SystemC simulation harnesses and functionally verified the Processing Element ALU and FPU.',
      },
      {
        phase: '04 - Next Up (Ongoing)',
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
          'Separated the roadmap into a functional-simulation phase first (verifying ALU/FPU behavior in isolation) before attempting cycle-accurate timing across caches and warp schedulers.',
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
  // EDIT [Projects (/projects) Card 03 + /projects/dealership-workflow-automation]: Replace [Placeholder] fields below
  {
    slug: 'dealership-workflow-automation',
    title: 'Dealership Intake & Workflow Automation',
    shortTitle: 'Dealership Apps Script',
    subtitle: 'Ongoing Project - Google Sheets & Google Apps Script',
    status: 'Ongoing',
    period: 'August 2026 - Present',
    contextTag: 'Workflow Automation and business logic',
    summary:
      'Custom Google Sheets and Google Apps Script intake form and operational workflow built for a local Dodge dealership to standardize data entry and eliminate manual tracking errors.',
    headlineMetric: 'Streamlining interdepartment workflows through tooling',
    tags: ['Google Apps Script', 'JavaScript', 'Google Sheets', 'Data Validation', 'Workflow Design'],
    overview:
      'I noticed recurring issues at a dodge dealership where my fiance works as a delivery coordinator. Namely, poor communication between departments and missing information leading to missed deliveries and delays. I then desinged and implemented a solution using Google Apps Script and Google Sheets to ',
    audienceTakeaway:
      'Demonstrates pragmatic development for non-technical end users: enforcing data quality at input, automating repetitive spreadsheet work, and building guardrails against human error.',
    metrics: [
      {
        label: 'Primary Platform',
        value: 'Google Sheets + Google Apps Script',
        detail: 'Zero-infrastructure deployment on Google Workspace',
      },
      {
        label: 'Workflow Impact',
        value: 'Reduced missed appointments and reduced time spent on manual data entry',
        detail: 'User reported success',
      },
      {
        label: 'Data Integrity',
        value: 'Increased accountability and reduced errors',
        detail: 'Standardized input fields, formatting, and status tracking',
      },
      {
        label: 'Project Status',
        value: 'Ongoing',
        detail: 'Improvements based on user feedback',
      },
    ],
    processSteps: [
      {
        phase: '01 - Discovery',
        title: 'Mapping the Dealership Paper/Spreadsheet Bottleneck',
        description:
          'The previous system for tracking deliveries relied on Google Calendar and emails to communicate between departments, leading to communication breakdowns between departments, missed appointments, and delays. Staff would inconsistently enter information, causing confusion and errors. The delivery coordinator was responsible for following up with multiple departments to ensure vehicles were ready for customers, which was time-consuming and inefficient.',
        isPlaceholder: false,
      },
      {
        phase: '02 - Schema & Input Design',
        title: 'Structured Intake Form & Normalized Sheet Schema',
        description:
          'Designed a multi-tab Google Sheet, establishing strict formatting rules and required fields for VINs, stock numbers, and delivery milestones.',
        isPlaceholder: false,
      },
      {
        phase: '03 - Apps Script Automation',
        title: 'Triggers, Validation & Automated Routing',
        description:
          'Built custom Google Apps Script triggers as well as a online intake form connected to the multi-tab Google Sheet, automating data entry, status tracking, and notifications between departments to streamline the delivery coordination workflow.',
        isPlaceholder: false,
      },
      {
        phase: '04 - User Rollout & Iteration',
        title: 'Testing with Staff & Ongoing Refinements',
        description:
          'Collaborating with the delivery coordinator to gather feedback and identify areas for improvement.',
        isPlaceholder: false,
      },
    ],
    challenges: [
      {
        challenge:
          'Identifying the root cause of the problem',
        solution:
          'Through observation and discussion with the delivery coordinator and other staff, as well as looking into the communication and workflows between departments, I identified that communication breakdowns and inconsistently entered information were the root causes of delays and errors in the delivery process.',
        isPlaceholder: false,
      },
      {
        challenge:
          'Designing an interface that was intuitive for non-technical staff',
        solution:
          'Since many departments already used Google Sheets, I opted to use those as a base and built an online form that would populate the google sheet with the required information.',
        isPlaceholder: false,
      },
    ],
    contributions: {
      items: [
        'Sole developer',
        'Built an online intake form connected to the multi-tab Google Sheet',
        'Created automations and notifications to streamline the delivery coordination workflow.',
        'Continuously improving based on user feedback to further improve the system.',
      ],
    },
    skillsDemonstrated: [
      'Google Apps Script (JS)',
      'Data Schema & Input Validation',
      'Business Requirements Gathering',
      'Iterative Deployment',
    ],
  },
];

// EDIT [Projects (/projects) — "More Projects on GitHub" grid]: Compact GitHub repo cards
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
    tags: ['Python', 'MapReduce', 'Distributed Data'],
    repoUrl: 'https://github.com/AustinJSimmons/479Project',
    year: 'Apr 2026',
  },
];

export function getFeaturedProject(slug: string): FeaturedProject | undefined {
  return FEATURED_PROJECTS.find((p) => p.slug === slug);
}
