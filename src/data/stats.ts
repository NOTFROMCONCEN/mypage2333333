import type { StatItem } from '@/types';
import { IconActivity, IconServer, IconShield, IconTerminal } from '@/components/icons';

export const stats: StatItem[] = [
  { label: '在线节点 / Nodes', value: '128', sub: '活跃区域 06', icon: IconServer },
  { label: '自动化任务 / Jobs', value: '3.4K', sub: '月均执行量', icon: IconTerminal },
  { label: '平台可用率 / Uptime', value: '99.98%', sub: '近 90 天', icon: IconShield },
  { label: '监控覆盖 / Coverage', value: '24 / 7', sub: '核心服务监测', icon: IconActivity },
];
