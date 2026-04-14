import type { ProjectItem } from '@/types';
import { IconDatabase, IconGlobe, IconTerminal } from '@/components/icons';

export const projects: ProjectItem[] = [
  {
    code: 'PRJ-01',
    title: '边缘哨兵 / Edge Sentinel',
    subtitle: '边缘节点健康监测',
    desc: '聚合 CPU、丢包、链路与服务可用性，面向多地区节点统一监测。',
    stack: 'Prometheus / Exporter / Alertmanager',
    role: '监控方案设计、告警治理、数据面板整合',
    result: '故障定位更快，跨区域节点状态更清晰',
    icon: IconGlobe,
  },
  {
    code: 'PRJ-02',
    title: '运维熔炉 / Ops Forge',
    subtitle: '自动化运维工作台',
    desc: '统一执行批量任务、配置下发、回滚控制和审计记录。',
    stack: 'Python / Ansible / Shell',
    role: '任务编排、变更流程、脚本体系建设',
    result: '减少重复操作，提高批量任务稳定性',
    icon: IconTerminal,
  },
  {
    code: 'PRJ-03',
    title: '日志中继矩阵 / Log Relay Matrix',
    subtitle: '日志采集与检索中枢',
    desc: '串联采集、清洗、检索与告警，提升排障效率与历史追溯能力。',
    stack: '日志采集 / 索引检索 / 告警联动',
    role: '链路梳理、告警策略、平台整合',
    result: '排障链路更短，问题回放更完整',
    icon: IconDatabase,
  },
];
