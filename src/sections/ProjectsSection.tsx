import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { AngledPanel, HoverCard, SectionHeader } from "../components/common";
import type { ProjectItem, TimelineItem } from "@/types";

type ProjectsSectionProps = {
  timeline: TimelineItem[];
  projects: ProjectItem[];
};

export function ProjectsSection({ timeline, projects }: ProjectsSectionProps) {
  const [activeProject, setActiveProject] = useState(0);
  const activeProjectData = useMemo(() => projects[activeProject], [activeProject, projects]);
  const ActiveProjectIcon = activeProjectData.icon;

  return (
    <section className="project-layout section-spacing">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.12 }}>
        <AngledPanel className="panel-padding panel-full-height">
          <SectionHeader no="01" title="作战履历" en="Operation Records / 作战履历" />
          <div className="timeline-list">
            {timeline.map((item) => (
              <HoverCard key={item.index} className="group" glow>
                <div className="timeline-card">
                  <div className="timeline-card__inner">
                    <div className="timeline-card__index">{item.index}</div>
                    <div>
                      <div className="timeline-card__title">{item.title}</div>
                      <p className="timeline-card__desc">{item.desc}</p>
                    </div>
                    <div className="timeline-card__tag">{item.tag}</div>
                  </div>
                </div>
              </HoverCard>
            ))}
          </div>
        </AngledPanel>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.16 }}>
        <AngledPanel className="panel-padding panel-full-height" accent>
          <SectionHeader no="02" title="项目档案" en="Project Archive / 项目档案" />
          <div className="project-grid">
            <div className="project-list">
              {projects.map((item, index) => {
                const Icon = item.icon;
                const active = activeProject === index;
                return (
                  <motion.button
                    key={item.code}
                    onMouseEnter={() => setActiveProject(index)}
                    whileHover={{ x: 3 }}
                    className={`project-list__item ${active ? "project-list__item--active" : ""}`}
                    type="button"
                  >
                    <div className="project-list__top">
                      <span>{item.code}</span>
                      <Icon className={`icon ${active ? "text-accent" : ""}`} />
                    </div>
                    <div className="project-list__title">{item.title}</div>
                    <div className="project-list__sub">{item.subtitle}</div>
                  </motion.button>
                );
              })}
            </div>

            <HoverCard className="group h-full" glow>
              <div className="project-detail-card">
                <div className="project-detail-card__top">
                  <span>{activeProjectData.code}</span>
                  <ActiveProjectIcon className="icon text-accent" />
                </div>
                <div className="project-detail-card__title">{activeProjectData.title}</div>
                <div className="project-detail-card__sub">{activeProjectData.subtitle}</div>
                <p className="project-detail-card__desc">{activeProjectData.desc}</p>

                <div className="detail-grid">
                  <div className="detail-box">
                    <div className="tiny-label">技术栈 / Stack</div>
                    <div className="detail-box__value">{activeProjectData.stack}</div>
                  </div>
                  <div className="detail-box">
                    <div className="tiny-label">职责 / Role</div>
                    <div className="detail-box__value">{activeProjectData.role}</div>
                  </div>
                  <div className="detail-box">
                    <div className="tiny-label">成果 / Result</div>
                    <div className="detail-box__value">{activeProjectData.result}</div>
                  </div>
                </div>

                <div className="button-row button-row--detail">
                  <button className="btn btn-primary" type="button">查看详情</button>
                  <button className="btn btn-secondary" type="button">打开仓库</button>
                </div>
              </div>
            </HoverCard>
          </div>
        </AngledPanel>
      </motion.div>
    </section>
  );
}
