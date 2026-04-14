import { HeaderNav } from "./components/HeaderNav";
import {
  navItems,
  heroHighlights,
  projects,
  skills,
  stats,
  summaryPanels,
  timeline,
} from "./data";
import { useSectionNav } from "./hooks/useSectionNav";
import { ArchiveSection } from "./sections/ArchiveSection";
import { ContactSection } from "./sections/ContactSection";
import { OverviewSection } from "./sections/OverviewSection";
import { ProjectsSection } from "./sections/ProjectsSection";

export default function App() {
  const ids = navItems.map((item) => item.id);
  const { refs, activeNav, scrollToSection } = useSectionNav(ids);

  return (
    <div className="page-shell">
      <div className="page-bg page-bg--radial" />
      <div className="page-bg page-bg--grid" />
      <div className="page-rail page-rail--left" />
      <div className="page-rail page-rail--right" />

      <div className="site-container">
        <HeaderNav activeNav={activeNav} items={navItems} onNavClick={scrollToSection} />

        <section ref={refs.overview} id="overview" className="scroll-anchor">
          <OverviewSection
            heroHighlights={heroHighlights}
            summaryPanels={summaryPanels}
            skills={skills}
            onGoArchive={() => scrollToSection(1)}
            onGoProjects={() => scrollToSection(2)}
          />
        </section>

        <section ref={refs.archive} id="archive" className="scroll-anchor">
          <ArchiveSection stats={stats} />
        </section>

        <section ref={refs.projects} id="projects" className="scroll-anchor">
          <ProjectsSection timeline={timeline} projects={projects} />
        </section>

        <section ref={refs.contact} id="contact" className="scroll-anchor">
          <ContactSection />
        </section>
      </div>
    </div>
  );
}
