import { Project, SocialLink } from './types';
import yuzePng from './img/yuze.png';

export const PROFILE = {
  name: "雨泽",
  englishName: "Yuze",
  bio: "这个人很懒什么都没留下。",
  avatar: yuzePng,
  year: 2026,
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "个人作品集网站",
    description: "一个简洁的静态HTML个人作品集网站，用于展示个人信息和项目。",
    tags: ["HTML", "CSS", "React"],
    link: "https://github.com/yuzeeesama/yuzeeesama.github.io"
  },
  {
    id: "2",
    title: "明日方舟终末地小助手",
    description: "基于MaaFramework开发的明日方舟终末地自动化工具，项目正在进行中。",
    tags: ["Python", "MaaFramework", "Automation"],
    link: "https://github.com/yuzeeesama/MEA"
  }
];

export const SOCIALS: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/yuzeeesama"
  }
];