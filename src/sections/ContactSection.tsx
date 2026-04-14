import { motion } from "framer-motion";
import { AngledPanel, HoverCard } from "../components/common";
import { IconBolt, IconGithub, IconMail } from "../components/icons";

export function ContactSection() {
  return (
    <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.2 }} className="section-spacing">
      <HoverCard className="group" glow>
        <AngledPanel className="panel-padding">
          <div className="contact-layout">
            <div>
              <div className="contact-tag">
                <IconBolt className="icon text-accent" />
                联络终端 / Contact Terminal
              </div>
              <div className="contact-title">已就绪 / Ready For Deployment</div>
              <p className="contact-copy">
                这里适合继续接入你的邮箱、GitHub、博客、状态页和最近项目更新。当前版本已经把版式、字体层级、交互动效和项目信息结构都做了统一收口。
              </p>
            </div>
            <div className="button-row">
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <button className="btn btn-primary" type="button">
                  <IconMail className="icon" /> 发送邮件
                </button>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <button className="btn btn-secondary" type="button">
                  <IconGithub className="icon" /> 仓库主页
                </button>
              </motion.div>
            </div>
          </div>
        </AngledPanel>
      </HoverCard>
    </motion.section>
  );
}
