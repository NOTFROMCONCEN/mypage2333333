import type { SiteIcon } from "../components/icons";
import {
  IconActivity,
  IconDatabase,
  IconGlobe,
  IconServer,
  IconShield,
  IconTerminal,
} from "../components/icons";

export type NavItem = {
  label: string;
  id: string;
};

export type HeroHighlight = {
  label: string;
  value: string;
};

export type StatItem = {
  label: string;
  value: string;
  sub: string;
  icon: SiteIcon;
};

export type SummaryPanel = {
  id: string;
  title: string;
  value: string;
};

export type TimelineItem = {
  index: string;
  title: string;
  desc: string;
  tag: string;
};

export type ProjectItem = {
  code: string;
  title: string;
  subtitle: string;
  desc: string;
  stack: string;
  role: string;
  result: string;
  icon: SiteIcon;
};

export const navItems: NavItem[] = [
  { label: "总览 / Overview", id: "overview" },
  { label: "档案 / Archive", id: "archive" },
  { label: "项目 / Projects", id: "projects" },
  { label: "联络 / Contact", id: "contact" },
];

export const heroHighlights: HeroHighlight[] = [
  { label: "定位 / Role", value: "网络工程师 · 自动化运维" },
  { label: "方向 / Focus", value: "稳定性、自动化、可观测性" },
  { label: "特性 / Traits", value: "冷静、模块化、工程导向" },
];

export const stats: StatItem[] = [
  { label: "在线节点 / Nodes", value: "128", sub: "活跃区域 06", icon: IconServer },
  { label: "自动化任务 / Jobs", value: "3.4K", sub: "月均执行量", icon: IconTerminal },
  { label: "平台可用率 / Uptime", value: "99.98%", sub: "近 90 天", icon: IconShield },
  { label: "监控覆盖 / Coverage", value: "24 / 7", sub: "核心服务监测", icon: IconActivity },
];

export const summaryPanels: SummaryPanel[] = [
  { id: "A1", title: "网络运维 / Network Ops", value: "L3 · BGP · MPLS" },
  { id: "B2", title: "自动化编排 / Automation", value: "Ansible · Python · Shell" },
  { id: "C3", title: "平台环境 / Platform", value: "Linux · CI/CD · Monitoring" },
];

export const skills: string[] = [
  "网络工程 / Networking",
  "自动化运维 / DevOps",
  "系统监控 / Monitoring",
  "脚本开发 / Scripting",
  "故障响应 / Incident Response",
  "变更治理 / Change Control",
];

export const timeline: TimelineItem[] = [
  {
    index: "01",
    title: "基础设施巡检自动化",
    desc: "把重复巡检流程标准化，接入调度与告警联动，沉淀为可复用的运维流水线。",
    tag: "自动化 / Automation",
  },
  {
    index: "02",
    title: "企业网络可视化监控",
    desc: "整合链路状态、接口指标与日志告警，统一展示网络运行态势，减少排障切换成本。",
    tag: "可观测性 / Observability",
  },
  {
    index: "03",
    title: "故障响应与变更流程优化",
    desc: "完善 SOP、回滚与灰度策略，压缩 MTTR，提高变更可控性和回溯效率。",
    tag: "稳定性工程 / SRE",
  },
];

export const projects: ProjectItem[] = [
  {
    code: "PRJ-01",
    title: "边缘哨兵 / Edge Sentinel",
    subtitle: "边缘节点健康监测",
    desc: "聚合 CPU、丢包、链路与服务可用性，面向多地区节点统一监测。",
    stack: "Prometheus / Exporter / Alertmanager",
    role: "监控方案设计、告警治理、数据面板整合",
    result: "故障定位更快，跨区域节点状态更清晰",
    icon: IconGlobe,
  },
  {
    code: "PRJ-02",
    title: "运维熔炉 / Ops Forge",
    subtitle: "自动化运维工作台",
    desc: "统一执行批量任务、配置下发、回滚控制和审计记录。",
    stack: "Python / Ansible / Shell",
    role: "任务编排、变更流程、脚本体系建设",
    result: "减少重复操作，提高批量任务稳定性",
    icon: IconTerminal,
  },
  {
    code: "PRJ-03",
    title: "日志中继矩阵 / Log Relay Matrix",
    subtitle: "日志采集与检索中枢",
    desc: "串联采集、清洗、检索与告警，提升排障效率与历史追溯能力。",
    stack: "日志采集 / 索引检索 / 告警联动",
    role: "链路梳理、告警策略、平台整合",
    result: "排障链路更短，问题回放更完整",
    icon: IconDatabase,
  },
];
