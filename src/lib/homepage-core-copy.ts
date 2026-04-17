import type { Locale } from "@/lib/i18n";

type LocalizedValue<T> = Record<Locale, T>;

type LabelValueItem = {
  label: string;
  value: string;
};

type ArchitectureTone = "primary" | "secondary" | "tertiary";

export type HomepageArchitectureModuleMeta = {
  displayTitle: string;
  descriptor: string;
  status: string;
  headline: string;
  focus: string;
  flow: string;
  tone: ArchitectureTone;
};

export type HomepageCoreCopy = {
  hero: {
    eyebrow: string;
    title: string;
    support: string;
    contrast: string[];
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
    previewLabel: string;
    previewTitle: string;
    previewSummary: string;
    previewSignals: LabelValueItem[];
  };
  problemField: {
    eyebrow: string;
    title: string;
    lead: string;
    signals: string[];
  };
  coreStatement: {
    eyebrow: string;
    title: string;
    lead: string;
    support: string[];
  };
  architecture: {
    eyebrow: string;
    title: string;
    description: string;
    coreLabel: string;
    coreHeadline: string;
    coreText: string;
    coreChips: string[];
    primaryActionLabel: string;
    primaryActionHref: string;
    secondaryActionLabel: string;
    secondaryActionHref: string;
    activeModuleLabel: string;
    currentRoleLabel: string;
    executionPathLabel: string;
    systemContextLabel: string;
    moduleMeta: Record<string, HomepageArchitectureModuleMeta>;
  };
  executionLoop: {
    eyebrow: string;
    title: string;
    lead: string;
    steps: LabelValueItem[];
    closing: string[];
  };
  whyItMatters: {
    eyebrow: string;
    title: string;
    lead: string;
    leftLabel: string;
    rightLabel: string;
    leftItems: string[];
    rightItems: string[];
  };
  domainAdaptation: {
    eyebrow: string;
    title: string;
    lead: string;
    items: string[];
    closing: string[];
  };
  companyPosition: {
    eyebrow: string;
    title: string;
    lead: string;
    support: LabelValueItem[];
  };
  closing: {
    eyebrow: string;
    title: string;
    lead: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
    signalLine: string;
  };
};

function pick<T>(value: LocalizedValue<T>, locale: Locale): T {
  return value[locale];
}

const content: Record<Locale, HomepageCoreCopy> = {
  en: {
    hero: {
      eyebrow: "DECISION-AND-EXECUTION INFRASTRUCTURE",
      title: "Adaptive core for complex service systems.",
      support:
        "Bento AIII builds an adaptive operating core for service platforms that need better demand structure, stronger routing, and execution continuity.",
      contrast: [
        "Most AI products generate answers.",
        "This system generates operational memory."
      ],
      primaryLabel: "REVIEW SYSTEM",
      primaryHref: "#system-core",
      secondaryLabel: "DISCUSS DEPLOYMENT",
      secondaryHref: "/contact",
      previewLabel: "SYSTEM ENTRY",
      previewTitle: "A quieter view of the operating core.",
      previewSummary:
        "Structured intake, constrained routing, live workflow control, and retained outcomes inside one bounded system.",
      previewSignals: [
        { label: "INPUT", value: "case intake" },
        { label: "ROUTING", value: "valid paths" },
        { label: "EXECUTION", value: "owned workflows" },
        { label: "MEMORY", value: "retained outcomes" }
      ]
    },
    problemField: {
      eyebrow: "PROBLEM FIELD",
      title: "Complex service networks fail after selection.",
      lead:
        "These systems rarely fail on discovery alone. They fail when demand enters incomplete, routing over-trusts supply, execution fragments after handoff, and outcomes never return as memory.",
      signals: [
        "demand enters incomplete",
        "routing rests on weak or overstated supply",
        "execution breaks after handoff",
        "outcomes disappear instead of becoming memory"
      ]
    },
    coreStatement: {
      eyebrow: "SYSTEM DEFINITION",
      title: "A platform-level operating core for execution continuity.",
      lead:
        "It structures demand into executable cases, routes through constraints, stays with the workflow after selection, and turns outcomes into reusable operational intelligence.",
      support: [
        "more than matching or recommendation",
        "built for execution, traceability, and learning",
        "deployable across domain packs without replacing the core"
      ]
    },
    architecture: {
      eyebrow: "FULL SYSTEM CORE",
      title: "Interactive architecture map",
      description:
        "Select a module to inspect how the operating core structures demand, holds the valid path, and keeps execution inside one system.",
      coreLabel: "SYSTEM_CORE",
      coreHeadline: "Decision, execution, memory.",
      coreText:
        "A modular operating layer for fragmented demand, constraint-aware routing, workflow continuity, and reusable operational memory.",
      coreChips: ["execution continuity", "adaptive routing", "outcome learning"],
      primaryActionLabel: "TRACE EXECUTION",
      primaryActionHref: "#execution-loop",
      secondaryActionLabel: "VIEW DOMAIN MATRIX",
      secondaryActionHref: "#domain-adaptation",
      activeModuleLabel: "ACTIVE MODULE",
      currentRoleLabel: "CURRENT ROLE",
      executionPathLabel: "EXECUTION PATH",
      systemContextLabel: "SYSTEM CONTEXT",
      moduleMeta: {
        INPUT_STRUCTURING: {
          displayTitle: "Input Structuring",
          descriptor: "Input layer",
          status: "LIVE INTAKE",
          headline: "Structure incomplete demand before routing begins.",
          focus: "Converts partial or ambiguous requests into executable case objects.",
          flow: "Demand intake -> field structure -> case object",
          tone: "secondary"
        },
        CONSTRAINT_ROUTING: {
          displayTitle: "Constraint Routing",
          descriptor: "Policy routing",
          status: "RULES ACTIVE",
          headline: "Apply the valid path before the system commits.",
          focus: "Reduces route options through policy, risk, and operating limits.",
          flow: "Constraint checks -> route gate -> valid path",
          tone: "primary"
        },
        DUAL_SIDE_EVALUATION: {
          displayTitle: "Dual-Side Evaluation",
          descriptor: "Matching intelligence",
          status: "FIT SCORING",
          headline: "Evaluate demand and supply as one execution decision.",
          focus: "Assesses readiness on both sides before work advances.",
          flow: "Demand viability + supply viability -> execution fit",
          tone: "secondary"
        },
        WORKFLOW_EXECUTION: {
          displayTitle: "Workflow Execution",
          descriptor: "Execution layer",
          status: "FLOW IN MOTION",
          headline: "Keep ownership and state inside the workflow.",
          focus: "Maintains tasks, accountability, proof, and escalation through execution.",
          flow: "Assignment -> owner state -> evidence -> escalation",
          tone: "primary"
        },
        OUTCOME_MEMORY: {
          displayTitle: "Outcome Memory",
          descriptor: "Learning loop",
          status: "MEMORY WARM",
          headline: "Retain outcomes as reusable operating memory.",
          focus: "Captures what happened so the next decision improves.",
          flow: "Outcome capture -> memory weight -> next decision",
          tone: "primary"
        },
        DOMAIN_ADAPTATION: {
          displayTitle: "Domain Adaptation",
          descriptor: "Domain layer",
          status: "PACK READY",
          headline: "Adapt one core across different service environments.",
          focus: "Changes schemas, rules, and workflows without replacing the operating logic.",
          flow: "Domain pack -> schema overlay -> workflow variant",
          tone: "tertiary"
        }
      }
    },
    executionLoop: {
      eyebrow: "EXECUTION LOOP",
      title: "From intake to reusable system memory.",
      lead:
        "The loop moves beyond recommendation and into controlled execution.",
      steps: [
        { label: "INTAKE", value: "Demand enters the system." },
        { label: "STRUCTURING", value: "Signals become case objects." },
        {
          label: "CONSTRAINT REVIEW",
          value: "Rules determine the valid path."
        },
        {
          label: "DUAL-SIDE EVALUATION",
          value: "Demand and supply are checked for execution viability."
        },
        {
          label: "WORKFLOW EXECUTION",
          value: "Tasks, ownership, and state stay inside the system."
        },
        {
          label: "OUTCOME CAPTURE",
          value: "Results return as memory for the next decision."
        }
      ],
      closing: [
        "Selection becomes execution.",
        "Execution becomes memory.",
        "Memory improves the next decision."
      ]
    },
    whyItMatters: {
      eyebrow: "WHY THIS MATTERS",
      title: "Most platforms stop too early.",
      lead:
        "Most systems improve discovery. This core is built for what follows: execution continuity, accountability, and learning.",
      leftLabel: "MOST PLATFORMS",
      rightLabel: "THIS SYSTEM",
      leftItems: [
        "optimize for selection",
        "stop at matching",
        "capture output",
        "lose context"
      ],
      rightItems: [
        "optimizes for execution continuity",
        "continues into workflow control",
        "captures outcomes",
        "compounds operating memory"
      ]
    },
    domainAdaptation: {
      eyebrow: "DOMAIN ADAPTATION",
      title: "One core. Multiple deployment environments.",
      lead:
        "The same core can move across high-friction service systems by changing schemas, rules, workflows, and evidence structures.",
      items: [
        "immigration workflow platforms",
        "condo / HOA systems",
        "legal service coordination",
        "healthcare workflow systems",
        "multi-party operational marketplaces",
        "high-friction delivery environments"
      ],
      closing: [
        "The interface may change.",
        "The rules may change.",
        "The operating core remains consistent."
      ]
    },
    companyPosition: {
      eyebrow: "COMPANY POSITION",
      title: "Bento AIII builds infrastructure, not just interface.",
      lead:
        "Bento AIII is focused on reusable operating logic for platforms that need to structure demand, control workflows, and learn from outcomes.",
      support: [
        { label: "SYSTEM", value: "system-level AI core" },
        { label: "LOGIC", value: "modular operating logic" },
        { label: "EXECUTION", value: "execution-aware design" },
        { label: "DEPLOYMENT", value: "deployable domain packs" }
      ]
    },
    closing: {
      eyebrow: "NEXT ACTION",
      title: "Build the operating layer, not another surface layer.",
      lead:
        "If a platform improves discovery without improving execution, it only scales the same failures. Bento AIII is building the operating layer that makes service systems more structured, more traceable, and more intelligent over time.",
      primaryLabel: "REQUEST ARCHITECTURE REVIEW",
      primaryHref: "/contact",
      secondaryLabel: "EXPLORE DEPLOYMENT DIRECTIONS",
      secondaryHref: "/projects",
      signalLine: "SYSTEM MODE / READY FOR DOMAIN DEPLOYMENT"
    }
  },
  "zh-Hant": {
    hero: {
      eyebrow: "DECISION-AND-EXECUTION INFRASTRUCTURE",
      title: "複雜服務系統的自適應核心。",
      support:
        "Bento AIII 正在打造一套模組化 AI operating core，用來結構化需求、評估真實供給狀態、依限制條件進行路由、執行工作流程，並把結果轉成可重用的營運記憶。",
      contrast: [
        "大多數 AI 產品產生的是答案。",
        "這套系統產生的是營運記憶。"
      ],
      primaryLabel: "檢視系統",
      primaryHref: "#system-core",
      secondaryLabel: "討論部署",
      secondaryHref: "/contact",
      previewLabel: "SYSTEM ENTRY",
      previewTitle: "核心作業層預覽。",
      previewSummary:
        "同一套受控核心承接 intake、routing、workflow control 與 outcome retention，部署於高摩擦服務環境。",
      previewSignals: [
        { label: "INPUT", value: "案件結構化" },
        { label: "ROUTING", value: "限制導向路徑" },
        { label: "EXECUTION", value: "狀態與責任" },
        { label: "MEMORY", value: "可重用結果" }
      ]
    },
    problemField: {
      eyebrow: "PROBLEM FIELD",
      title: "複雜服務網路通常在選擇之後才失敗。",
      lead:
        "問題通常不只是資訊不足。真正的失敗來自需求進場不完整、供給被高估、路由忽略限制，以及交接後的執行斷裂。",
      signals: [
        "破碎的 intake",
        "不可靠的 matching",
        "中斷的 workflow continuity",
        "責任不清",
        "缺少 outcome memory"
      ]
    },
    coreStatement: {
      eyebrow: "SYSTEM DEFINITION",
      title: "不是 chatbot，不是 recommendation layer，也不是另一個 dashboard。",
      lead:
        "這是一個平台層級的 operating core，適用於需求混亂、供給不均、流程容易斷裂，且結果經常消失而無法沉澱成可重用 intelligence 的環境。",
      support: [
        "把需求結構化成可執行案件",
        "依限制條件路由，而不是表面 matching",
        "持續進入 execution、traceability 與 learning"
      ]
    },
    architecture: {
      eyebrow: "FULL SYSTEM CORE",
      title: "互動式架構地圖",
      description:
        "點選任一模組，即可查看核心如何結構化需求、路由決策，並把執行維持在系統之內。",
      coreLabel: "SYSTEM_CORE",
      coreHeadline: "決策、執行、記憶。",
      coreText:
        "這是一個模組化 operating layer，把破碎輸入轉成可執行案件，把 workflow 留在系統中，並把結果保存成可重用的營運 intelligence。",
      coreChips: ["執行連續性", "可追溯性", "自適應路由", "結果學習"],
      primaryActionLabel: "追蹤執行鏈",
      primaryActionHref: "#execution-loop",
      secondaryActionLabel: "查看領域模組",
      secondaryActionHref: "#domain-adaptation",
      activeModuleLabel: "ACTIVE MODULE",
      currentRoleLabel: "CURRENT ROLE",
      executionPathLabel: "EXECUTION PATH",
      systemContextLabel: "SYSTEM CONTEXT",
      moduleMeta: {
        INPUT_STRUCTURING: {
          displayTitle: "輸入結構化",
          descriptor: "Input layer",
          status: "LIVE INTAKE",
          headline: "在進入路由前，先把破碎需求正規化。",
          focus: "把模糊或不完整的請求整理成可執行的案件物件。",
          flow: "Raw demand -> field normalization -> executable case",
          tone: "secondary"
        },
        CONSTRAINT_ROUTING: {
          displayTitle: "限制路由",
          descriptor: "Policy routing",
          status: "RULES ACTIVE",
          headline: "在系統承諾路徑之前，先套用限制條件。",
          focus: "透過政策、風險與營運限制縮小可行路徑集合。",
          flow: "Constraint layer -> route gating -> viable path set",
          tone: "primary"
        },
        DUAL_SIDE_EVALUATION: {
          displayTitle: "雙邊評估",
          descriptor: "Matching intelligence",
          status: "FIT SCORING",
          headline: "把需求端與供給端視為同一個決策來評估。",
          focus: "同時考量需求品質、供給品質、信任與歷史行為訊號。",
          flow: "Demand fit + supply fit -> trust-weighted decision",
          tone: "secondary"
        },
        WORKFLOW_EXECUTION: {
          displayTitle: "流程執行",
          descriptor: "Execution layer",
          status: "FLOW IN MOTION",
          headline: "系統的工作不在選擇結束，而是在那之後開始。",
          focus: "把所有權、狀態、升級與證據維持在同一個 execution surface 上。",
          flow: "Assignment -> owner state -> evidence -> escalation",
          tone: "primary"
        },
        OUTCOME_MEMORY: {
          displayTitle: "結果記憶",
          descriptor: "Learning loop",
          status: "MEMORY WARM",
          headline: "把結果轉成可重用的營運記憶。",
          focus: "記錄實際發生的結果，讓未來的 routing 與 evaluation 持續改善。",
          flow: "Outcome capture -> learning weights -> next decision",
          tone: "primary"
        },
        DOMAIN_ADAPTATION: {
          displayTitle: "領域適配",
          descriptor: "Domain layer",
          status: "PACK READY",
          headline: "同一套核心可以部署進不同服務環境。",
          focus: "允許 workflow、schema 與政策改變，而不需要替換底層核心。",
          flow: "Domain pack -> schema overlay -> workflow variant",
          tone: "tertiary"
        }
      }
    },
    executionLoop: {
      eyebrow: "EXECUTION LOOP",
      title: "從 intake 到可重用的系統記憶。",
      lead: "這套 operating loop 的目標，不是推薦，而是受控執行。",
      steps: [
        { label: "INTAKE", value: "原始需求進入系統。" },
        { label: "STRUCTURING", value: "訊號被整理成可執行案件物件。" },
        { label: "CONSTRAINT REVIEW", value: "規則與風險閘門決定可行路徑。" },
        {
          label: "DUAL-SIDE EVALUATION",
          value: "需求與供給同時被評估是否具備執行可行性。"
        },
        {
          label: "WORKFLOW EXECUTION",
          value: "任務、責任與狀態維持在系統內部。"
        },
        {
          label: "OUTCOME CAPTURE",
          value: "執行結果沉澱成未來決策可重用的記憶。"
        }
      ],
      closing: [
        "Selection 變成 execution。",
        "Execution 變成 memory。",
        "Memory 改善下一次 decision。"
      ]
    },
    whyItMatters: {
      eyebrow: "WHY THIS MATTERS",
      title: "大多數平台停得太早。",
      lead:
        "多數系統只優化 discovery、recommendation 或 visibility。這套 core 關注的是那之後的 execution continuity、accountability、traceability 與 learning。",
      leftLabel: "MOST PLATFORMS",
      rightLabel: "THIS SYSTEM",
      leftItems: [
        "只優化 selection",
        "停在 matching",
        "只記錄 output",
        "流失 operational context"
      ],
      rightItems: [
        "優化 execution continuity",
        "持續進入 workflow control",
        "記錄 outcomes",
        "建立 operational memory"
      ]
    },
    domainAdaptation: {
      eyebrow: "DOMAIN ADAPTATION",
      title: "一套核心，多種部署環境。",
      lead:
        "同一套 operating logic 可以透過更換 schema、規則、workflow 與 evidence structure，部署到多種高摩擦服務系統，而不必替換核心。",
      items: [
        "移民工作流平台",
        "condo / HOA 系統",
        "法律服務協調",
        "醫療工作流系統",
        "多方營運 marketplace",
        "高摩擦交付環境"
      ],
      closing: [
        "介面可以改變。",
        "Domain pack 可以改變。",
        "Operating core 保持一致。"
      ]
    },
    companyPosition: {
      eyebrow: "COMPANY POSITION",
      title: "Bento AIII 打造的是 infrastructure，而不只是 interface。",
      lead:
        "公司專注於可重用 operating logic，服務那些需要結構化 demand、評估 supply、控制 workflow，並從真實 outcomes 中學習的平台。",
      support: [
        { label: "SYSTEM", value: "system-level AI architecture" },
        { label: "LOGIC", value: "modular operating logic" },
        { label: "EXECUTION", value: "execution-aware design" },
        { label: "DEPLOYMENT", value: "deployable domain core" }
      ]
    },
    closing: {
      eyebrow: "NEXT ACTION",
      title: "該打造的是 operating layer，不是另一層 surface layer。",
      lead:
        "如果平台只改善 discovery，那只是以更高流量重複同樣的 execution failure。Bento AIII 正在打造的是讓服務系統在每一次 case 中都更結構化、更可追溯、也更有 intelligence 的核心層。",
      primaryLabel: "申請架構審查",
      primaryHref: "/contact",
      secondaryLabel: "探索部署方向",
      secondaryHref: "/projects",
      signalLine: "SYSTEM MODE / READY FOR DOMAIN DEPLOYMENT"
    }
  },
  ja: {
    hero: {
      eyebrow: "DECISION-AND-EXECUTION INFRASTRUCTURE",
      title: "複雑なサービスシステムのための適応型コア。",
      support:
        "Bento AIII は、需要を構造化し、供給の実条件を評価し、制約で経路を決め、ワークフローを実行し、結果を再利用可能な運用記憶へ変えるモジュール型 AI operating core を構築しています。",
      contrast: [
        "多くの AI 製品は答えを生成します。",
        "このシステムは運用記憶を生成します。"
      ],
      primaryLabel: "SYSTEM を確認",
      primaryHref: "#system-core",
      secondaryLabel: "導入を相談",
      secondaryHref: "/contact",
      previewLabel: "SYSTEM ENTRY",
      previewTitle: "オペレーティングサーフェスのプレビュー。",
      previewSummary:
        "同じ制御されたコアで、intake、routing、workflow control、outcome retention を高摩擦なサービス環境へ展開します。",
      previewSignals: [
        { label: "INPUT", value: "ケース構造化" },
        { label: "ROUTING", value: "制約対応の経路" },
        { label: "EXECUTION", value: "状態と責任" },
        { label: "MEMORY", value: "再利用可能な結果" }
      ]
    },
    problemField: {
      eyebrow: "PROBLEM FIELD",
      title: "複雑なサービスネットワークは、選択の後で壊れます。",
      lead:
        "問題は情報不足だけではありません。需要が不完全なまま入り、供給が過大評価され、routing が制約を無視し、handoff 後に execution が途切れることで失敗します。",
      signals: [
        "断片的な intake",
        "不安定な matching",
        "切れた workflow continuity",
        "不明瞭な ownership",
        "欠落した outcome memory"
      ]
    },
    coreStatement: {
      eyebrow: "SYSTEM DEFINITION",
      title: "chatbot でも recommendation layer でも dashboard でもない。",
      lead:
        "これは、需要が乱れ、供給が偏り、ワークフローが壊れ、結果が再利用可能な intelligence にならず消えていく環境のための、プラットフォームレベルの operating core です。",
      support: [
        "需要を実行可能なケースへ構造化する",
        "表面的な matching ではなく制約で routing する",
        "execution、traceability、learning まで継続する"
      ]
    },
    architecture: {
      eyebrow: "FULL SYSTEM CORE",
      title: "インタラクティブなアーキテクチャマップ",
      description:
        "モジュールを選択すると、コアがどのように需要を構造化し、意思決定を routing し、execution をシステム内に保つかを確認できます。",
      coreLabel: "SYSTEM_CORE",
      coreHeadline: "意思決定、実行、記憶。",
      coreText:
        "断片的な入力を実行可能なケースへ変え、workflow をシステム内に維持し、結果を再利用可能な運用 intelligence として保持するモジュール型 operating layer です。",
      coreChips: ["execution continuity", "traceability", "adaptive routing", "outcome learning"],
      primaryActionLabel: "EXECUTION を追跡",
      primaryActionHref: "#execution-loop",
      secondaryActionLabel: "DOMAIN PACK を確認",
      secondaryActionHref: "#domain-adaptation",
      activeModuleLabel: "ACTIVE MODULE",
      currentRoleLabel: "CURRENT ROLE",
      executionPathLabel: "EXECUTION PATH",
      systemContextLabel: "SYSTEM CONTEXT",
      moduleMeta: {
        INPUT_STRUCTURING: {
          displayTitle: "入力構造化",
          descriptor: "Input layer",
          status: "LIVE INTAKE",
          headline: "routing の前に断片的な需要を正規化する。",
          focus: "曖昧または不完全な要求を実行可能なケースへ変換します。",
          flow: "Raw demand -> field normalization -> executable case",
          tone: "secondary"
        },
        CONSTRAINT_ROUTING: {
          displayTitle: "制約ルーティング",
          descriptor: "Policy routing",
          status: "RULES ACTIVE",
          headline: "システムが経路を確定する前に制約を適用する。",
          focus: "ポリシー、リスク、運用制約を通じて経路候補を絞り込みます。",
          flow: "Constraint layer -> route gating -> viable path set",
          tone: "primary"
        },
        DUAL_SIDE_EVALUATION: {
          displayTitle: "両面評価",
          descriptor: "Matching intelligence",
          status: "FIT SCORING",
          headline: "需要側と供給側を一つの意思決定として評価する。",
          focus: "需要品質、供給品質、信頼、履歴シグナルを同じ評価ループに入れます。",
          flow: "Demand fit + supply fit -> trust-weighted decision",
          tone: "secondary"
        },
        WORKFLOW_EXECUTION: {
          displayTitle: "ワークフロー実行",
          descriptor: "Execution layer",
          status: "FLOW IN MOTION",
          headline: "システムの仕事は selection で終わらない。",
          focus: "ownership、state progression、escalation、evidence を execution 中に保持します。",
          flow: "Assignment -> owner state -> evidence -> escalation",
          tone: "primary"
        },
        OUTCOME_MEMORY: {
          displayTitle: "結果記憶",
          descriptor: "Learning loop",
          status: "MEMORY WARM",
          headline: "結果を再利用可能な運用記憶へ変える。",
          focus: "実際に起きたことを保存し、将来の routing と evaluation を改善します。",
          flow: "Outcome capture -> learning weights -> next decision",
          tone: "primary"
        },
        DOMAIN_ADAPTATION: {
          displayTitle: "ドメイン適応",
          descriptor: "Domain layer",
          status: "PACK READY",
          headline: "一つのコアを複数のサービス環境へ展開する。",
          focus: "基盤コアを置き換えずに workflow、schema、policy を変えられます。",
          flow: "Domain pack -> schema overlay -> workflow variant",
          tone: "tertiary"
        }
      }
    },
    executionLoop: {
      eyebrow: "EXECUTION LOOP",
      title: "intake から再利用可能な system memory へ。",
      lead: "この operating loop は recommendation を超え、制御された execution へ進むために設計されています。",
      steps: [
        { label: "INTAKE", value: "生の需要がシステムへ入ります。" },
        { label: "STRUCTURING", value: "シグナルが実行可能なケースオブジェクトになります。" },
        {
          label: "CONSTRAINT REVIEW",
          value: "ルールとリスクゲートが有効な経路を決定します。"
        },
        {
          label: "DUAL-SIDE EVALUATION",
          value: "需要と供給の両方が execution viability の観点で評価されます。"
        },
        {
          label: "WORKFLOW EXECUTION",
          value: "タスク、ownership、state はシステム内に維持されます。"
        },
        {
          label: "OUTCOME CAPTURE",
          value: "結果は次回の判断に使える memory になります。"
        }
      ],
      closing: [
        "Selection が execution になる。",
        "Execution が memory になる。",
        "Memory が次の decision を改善する。"
      ]
    },
    whyItMatters: {
      eyebrow: "WHY THIS MATTERS",
      title: "多くのプラットフォームは早く止まりすぎる。",
      lead:
        "多くのシステムは discovery、recommendation、visibility の最適化で止まります。この core はその先、execution continuity、accountability、traceability、learning のために作られています。",
      leftLabel: "MOST PLATFORMS",
      rightLabel: "THIS SYSTEM",
      leftItems: [
        "selection を最適化する",
        "matching で止まる",
        "output だけを記録する",
        "operational context を失う"
      ],
      rightItems: [
        "execution continuity を最適化する",
        "workflow control まで継続する",
        "outcomes を記録する",
        "operational memory を構築する"
      ]
    },
    domainAdaptation: {
      eyebrow: "DOMAIN ADAPTATION",
      title: "一つのコア、複数の展開環境。",
      lead:
        "同じ operating logic を、schema、rules、workflows、evidence structures を変えることで、高摩擦なサービスシステムへ展開できます。コア自体は置き換えません。",
      items: [
        "移民ワークフロープラットフォーム",
        "condo / HOA システム",
        "法務サービス連携",
        "ヘルスケアワークフローシステム",
        "多者間オペレーション marketplace",
        "高摩擦な delivery 環境"
      ],
      closing: [
        "インターフェースは変わる。",
        "domain pack は変わる。",
        "operating core は一貫する。"
      ]
    },
    companyPosition: {
      eyebrow: "COMPANY POSITION",
      title: "Bento AIII が作るのは interface ではなく infrastructure。",
      lead:
        "この会社は、需要を構造化し、供給を評価し、workflow を制御し、実際の outcomes から学ぶ必要があるプラットフォーム向けに、再利用可能な operating logic を構築しています。",
      support: [
        { label: "SYSTEM", value: "system-level AI architecture" },
        { label: "LOGIC", value: "modular operating logic" },
        { label: "EXECUTION", value: "execution-aware design" },
        { label: "DEPLOYMENT", value: "deployable domain core" }
      ]
    },
    closing: {
      eyebrow: "NEXT ACTION",
      title: "surface layer ではなく、operating layer を作る。",
      lead:
        "もしプラットフォームが discovery だけを改善するなら、同じ execution failure をより大きな量で繰り返すだけです。Bento AIII は、ケースを重ねるほどサービスシステムをより構造化し、より追跡可能にし、より知的にする core layer を構築しています。",
      primaryLabel: "アーキテクチャレビューを依頼",
      primaryHref: "/contact",
      secondaryLabel: "導入方向を見る",
      secondaryHref: "/projects",
      signalLine: "SYSTEM MODE / READY FOR DOMAIN DEPLOYMENT"
    }
  }
};

export function getHomepageCoreCopy(locale: Locale): HomepageCoreCopy {
  return pick(content, locale);
}
