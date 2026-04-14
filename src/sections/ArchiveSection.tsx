import { motion } from "framer-motion";
import { AngledPanel, HoverCard } from "../components/common";
import { IconGithub, IconGrid, IconMail } from "../components/icons";
import type { StatItem } from "@/types";

type ArchiveSectionProps = {
  stats: StatItem[];
};

export function ArchiveSection({ stats }: ArchiveSectionProps) {
  return (
    <section className="stack-col section-spacing">
      <motion.div initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45, delay: 0.08 }} className="stack-col">
        <HoverCard className="group h-full" glow>
          <AngledPanel className="panel-padding" accent>
            <div className="archive-head">
              <div>
                <div className="tiny-label">干员档案 / Operator Dossier</div>
                <div className="archive-title">个人资料 / Profile</div>
              </div>
              <div className="archive-status">启用中 / Active</div>
            </div>

            <div className="archive-grid">
              <div className="id-card">
                <div className="id-card__scan" />
                <div className="id-card__text">ID</div>
              </div>
              <div className="info-list">
                {[
                  ["代号 / Codename", "HUAMEITANG"],
                  ["职业 / Class", "网络工程师 / Network Engineer"],
                  ["专长 / Specialty", "自动化运维 / Automation / DevOps"],
                  ["状态 / Status", "在线 / Online"],
                ].map(([k, v]) => (
                  <div key={k} className="info-list__row">
                    <span className="info-list__key">{k}</span>
                    <span className="info-list__value">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </AngledPanel>
        </HoverCard>

        <HoverCard className="group" glow>
          <AngledPanel className="panel-padding">
            <div className="archive-head archive-head--compact">
              <div className="tiny-label">系统入口 / System Access</div>
              <IconGrid className="icon" />
            </div>
            <div className="link-grid">
              <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="link-card" type="button">
                <IconGithub className="icon" /> 代码仓库
              </motion.button>
              <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="link-card" type="button">
                <IconMail className="icon" /> 邮箱联系
              </motion.button>
            </div>
          </AngledPanel>
        </HoverCard>

        <div className="stat-grid">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <HoverCard key={item.label} className="group" glow>
                <div className="stat-card">
                  <div className="stat-card__top">
                    <span className="tiny-label">{item.label}</span>
                    <Icon className="icon" />
                  </div>
                  <div className="stat-card__value">{item.value}</div>
                  <div className="stat-card__sub">{item.sub}</div>
                </div>
              </HoverCard>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
