import { motion } from "framer-motion";
import { HoverCard, AngledPanel } from "../components/common";
import { IconChevronRight } from "../components/icons";
import type { HeroHighlight, SummaryPanel } from "@/types";

type OverviewSectionProps = {
  heroHighlights: HeroHighlight[];
  summaryPanels: SummaryPanel[];
  skills: string[];
  onGoArchive: () => void;
  onGoProjects: () => void;
};

export function OverviewSection({
  heroHighlights,
  summaryPanels,
  skills,
  onGoArchive,
  onGoProjects,
}: OverviewSectionProps) {
  return (
    <section className="layout-two-col section-spacing">
      <motion.div initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45, delay: 0.04 }}>
        <HoverCard className="group h-full" glow>
          <AngledPanel accent className="panel-padding panel-full-height">
            <div className="hero-grid">
              <div>
                <div className="eyebrow-row">
                  <span className="eyebrow-bar" />
                  首页概览 / Homepage Overview
                </div>

                <h1 className="hero-title">
                  明日方舟风格主页
                  <span className="hero-title__sub">Arknights-inspired Personal Homepage</span>
                </h1>

                <p className="hero-copy">
                  这版重点收口了首屏结构、字体层级和动效强度。现在更偏成品站：主视觉更集中，信息区更清晰，项目内容也更接近真实作品集的展示逻辑。
                </p>

                <div className="button-row">
                  <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                    <button onClick={onGoArchive} className="btn btn-primary" type="button">
                      进入档案
                      <IconChevronRight className="icon" />
                    </button>
                  </motion.div>
                  <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                    <button onClick={onGoProjects} className="btn btn-secondary" type="button">
                      查看项目
                    </button>
                  </motion.div>
                </div>

                <div className="mini-card-grid">
                  {heroHighlights.map((item) => (
                    <div key={item.label} className="mini-card">
                      <div className="mini-card__label">{item.label}</div>
                      <div className="mini-card__value">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="stack-col">
                {summaryPanels.map((item, index) => (
                  <HoverCard key={item.id} className="group" glow={index === 0}>
                    <div className="summary-card">
                      <div className="summary-card__top">
                        <span>{item.id}</span>
                        <span>模块 / Module</span>
                      </div>
                      <div className={`summary-card__title ${index === 0 ? "summary-card__title--accent" : ""}`}>{item.title}</div>
                      <div className="summary-card__value">{item.value}</div>
                    </div>
                  </HoverCard>
                ))}

                <div className="skill-box">
                  <div className="skill-box__title">技能矩阵 / Skill Matrix</div>
                  <div className="skill-tag-wrap">
                    {skills.map((tag) => (
                      <motion.span key={tag} whileHover={{ y: -2 }} className="skill-tag">
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AngledPanel>
        </HoverCard>
      </motion.div>
    </section>
  );
}
