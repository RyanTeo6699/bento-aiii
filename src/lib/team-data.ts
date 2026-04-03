import type { Locale } from "@/lib/i18n";

type LocalizedText = Record<Locale, string>;
type LocalizedList = Record<Locale, string[]>;

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  tags: string[];
};

function pick<T>(value: Record<Locale, T>, locale: Locale): T {
  return value[locale];
}

const teamDefinitions = [
  {
    id: "ryan-z",
    name: "Ryan Z.",
    role: {
      en: "Founder & Product Systems",
      "zh-Hant": "創辦人・產品系統",
      ja: "創業者・プロダクトシステム"
    } satisfies LocalizedText,
    bio: {
      en:
        "Ryan Z. leads product direction, system framing, and the brand and business logic behind Bento AIII. His work focuses on 0→1 product definition, information architecture, workflow design, and practical AI product positioning.",
      "zh-Hant":
        "Ryan Z. 負責 Bento AIII 的產品方向、系統框架，以及品牌與業務邏輯。工作重點在 0→1 產品定義、資訊架構、工作流程設計，以及務實的 AI 產品定位。",
      ja:
        "Ryan Z. は Bento AIII のプロダクト方針、システムの枠組み、ブランドと事業ロジックを担当します。0→1 のプロダクト定義、情報設計、ワークフロー設計、実務的な AI プロダクトの位置づけ整理が主な役割です。"
    } satisfies LocalizedText,
    tags: {
      en: ["Product Systems", "Strategy", "Workflow Design"],
      "zh-Hant": ["產品系統", "策略", "流程設計"],
      ja: ["プロダクトシステム", "戦略", "ワークフロー設計"]
    } satisfies LocalizedList
  },
  {
    id: "randy-j",
    name: "Randy J.",
    role: {
      en: "Product Engineer",
      "zh-Hant": "產品工程師",
      ja: "プロダクトエンジニア"
    } satisfies LocalizedText,
    bio: {
      en:
        "Randy J. focuses on engineering delivery across frontend, backend, deployment, and system integration. He turns product direction into working software with clear implementation choices and dependable shipping paths.",
      "zh-Hant":
        "Randy J. 專注於前後端實作、部署與系統整合等工程交付，負責把產品方向轉成可實際運作的軟體，並維持清楚可落地的實作路徑。",
      ja:
        "Randy J. はフロントエンド、バックエンド、デプロイ、システム統合を含む実装デリバリーを担当します。プロダクトの方向性を、実際に動くソフトウェアと安定したリリース経路へ落とし込みます。"
    } satisfies LocalizedText,
    tags: {
      en: ["Full Stack", "Infrastructure", "Shipping"],
      "zh-Hant": ["全端開發", "基礎設施", "工程交付"],
      ja: ["フルスタック", "インフラ", "実装と出荷"]
    } satisfies LocalizedList
  },
  {
    id: "jason-n",
    name: "Jason N.",
    role: {
      en: "Applied AI Engineer",
      "zh-Hant": "應用 AI 工程師",
      ja: "応用 AI エンジニア"
    } satisfies LocalizedText,
    bio: {
      en:
        "Jason N. works across AI applications, product implementation, and system execution. He contributes to model-enabled features, application logic, and the engineering detail needed to ship usable product surfaces.",
      "zh-Hant":
        "Jason N. 參與 AI 應用開發、產品實作與系統執行，主要投入模型功能落地、應用邏輯，以及讓產品真正可用的工程細節。",
      ja:
        "Jason N. は AI アプリケーション開発、プロダクト実装、システム実行を横断して担当します。モデル機能の実装、アプリケーションロジック、実用的な画面を出荷するための技術細部に関わります。"
    } satisfies LocalizedText,
    tags: {
      en: ["Applied AI", "Product Build", "System Execution"],
      "zh-Hant": ["應用 AI", "產品建置", "系統執行"],
      ja: ["応用 AI", "プロダクト実装", "システム実行"]
    } satisfies LocalizedList
  },
  {
    id: "john-snow",
    name: "John Snow",
    role: {
      en: "Marketing",
      "zh-Hant": "行銷",
      ja: "マーケティング"
    } satisfies LocalizedText,
    bio: {
      en: "Marketing team. Profile details coming soon.",
      "zh-Hant": "行銷團隊。更多資料即將更新。",
      ja: "マーケティングチーム。詳細プロフィールは近日公開予定です。"
    } satisfies LocalizedText,
    tags: {
      en: ["Marketing", "Growth", "Partnerships"],
      "zh-Hant": ["行銷", "成長", "合作"],
      ja: ["マーケティング", "成長", "パートナーシップ"]
    } satisfies LocalizedList
  },
  {
    id: "guo-ng",
    name: "Guo Ng",
    role: {
      en: "Brand & Outreach",
      "zh-Hant": "品牌與拓展",
      ja: "ブランド・アウトリーチ"
    } satisfies LocalizedText,
    bio: {
      en: "Marketing team. Profile details coming soon.",
      "zh-Hant": "行銷團隊。更多資料即將更新。",
      ja: "マーケティングチーム。詳細プロフィールは近日公開予定です。"
    } satisfies LocalizedText,
    tags: {
      en: ["Brand", "Outreach", "Marketing"],
      "zh-Hant": ["品牌", "拓展", "行銷"],
      ja: ["ブランド", "アウトリーチ", "マーケティング"]
    } satisfies LocalizedList
  }
] as const;

export function getTeamMembers(locale: Locale): TeamMember[] {
  return teamDefinitions.map((member) => ({
    id: member.id,
    name: member.name,
    role: pick(member.role, locale),
    bio: pick(member.bio, locale),
    tags: pick(member.tags, locale)
  }));
}
