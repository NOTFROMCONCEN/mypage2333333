import type { TimelineItem } from '@/types';

export const timeline: TimelineItem[] = [
  {
    index: '01',
    title: '基础设施巡检自动化',
    desc: '把重复巡检流程标准化，接入调度与告警联动，沉淀为可复用的运维流水线。',
    tag: '自动化 / Automation',
  },
  {
    index: '02',
    title: '企业网络可视化监控',
    desc: '整合链路状态、接口指标与日志告警，统一展示网络运行态势，减少排障切换成本。',
    tag: '可观测性 / Observability',
  },
  {
    index: '03',
    title: '故障响应与变更流程优化',
    desc: '完善 SOP、回滚与灰度策略，压缩 MTTR，提高变更可控性和回溯效率。',
    tag: '稳定性工程 / SRE',
  },
];
