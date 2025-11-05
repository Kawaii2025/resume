import { Mail, Phone, MapPin, Github } from 'lucide-react';
import { useState } from 'react';

export default function Resume() {
  const [language, setLanguage] = useState('zh');

  // 个人信息 - 从环境变量读取，如果不存在则使用默认值
  const personalInfo = {
    name_zh: process.env.REACT_APP_NAME_ZH || '张浩然',
    name_en: process.env.REACT_APP_NAME_EN || 'Zhang Haoran',
    phone: process.env.REACT_APP_PHONE || '+86 138-xxxx-xxxx',
    email: process.env.REACT_APP_EMAIL || 'haoran.zhang@email.com',
    city_zh: process.env.REACT_APP_CITY_ZH || '广州',
    city_en: process.env.REACT_APP_CITY_EN || 'Guangzhou',
    github: process.env.REACT_APP_GITHUB || 'https://github.com',
  };

  const content = {
    zh: {
      resume: '简历 | Resume',
      position: '🎯 应聘岗位 / Position',
      positionTitle: 'Web前端开发工程师 | Web Front-end Developer',
      education: '🎓 教育经历 / Education',
      university: '北京林业大学 | Beijing Forestry University',
      degree: '本科 / 地理信息系统（GIS）',
      degreeTime: '2010.09 – 2014.06',
      experience: '💼 工作经历 / Work Experience',
      projects: '🧩 项目经验摘要 / Project Highlights',
      skills: '🛠 主要技能 / Core Skills',
      jobs: [
        {
          id: 'job1',
          title: 'Web前端开发工程师',
          company: '深圳市法本信息技术股份有限公司（广州分公司）',
          time: '2020.09 – 2023.01',
          tasks: [
            '参与 汇丰银行 Wealth Dashboard 与 Wealth Product Catalog 项目开发，前端使用 React，后端基于 Spring Boot',
            '负责编写 自动化测试：使用 Jest 进行单元测试并生成覆盖率报告，使用 TestCafe 实现端到端（E2E）测试，并成功配置 Jenkins 持续集成',
            '参与部分 后端 API 的开发与维护，并使用 Karate / JUnit 编写后端单元测试，提升系统可维护性与回归测试效率'
          ]
        },
        {
          id: 'job2',
          title: 'Web前端开发工程师',
          company: '北京文思海辉金信软件有限公司（广州分公司）',
          time: '2017.04 – 2020.04',
          tasks: [
            '负责 汇丰银行内部自动化测试系统 前端开发，基于 Vue + Composition API + TypeScript 构建，实现模块逻辑复用与高可维护性',
            '参与 广发证券战略客户关系系统（Angular + Vue）与 经纪人系统 的开发，掌握 Vuex、Router、Axios、JSX、ES6 模块化 等前端核心技术',
            '深入理解 大型前端项目架构设计、组件化思想 与 函数式编程，具备复杂业务场景的架构优化能力'
          ]
        },
        {
          id: 'job3',
          title: 'Web前端开发工程师',
          company: '广东南方数码科技股份有限公司',
          time: '2015.10 – 2017.03',
          tasks: [
            '主导多个 GIS 相关项目 开发',
            '佛山经济税收分析电子地图：基于 AngularJS + ArcGIS JS API + ECharts，实现经济与地理数据可视化展示',
            '地理信息云集市：采用 AngularJS MVC 架构，实现可自动搭建的 Web App 生成系统（申请专利并获公司技术奖）',
            '南方数码新官网重构：使用 Webpack、Gulp、RequireJS 进行模块化与多页面构建优化'
          ]
        },
        {
          id: 'job4',
          title: '软件工程师',
          company: '埃森哲（中国）广州天河分公司',
          time: '2014.08 – 2015.10',
          tasks: [
            '参与 IBM Informix / UNIX 保险系统 开发与维护',
            '使用 Shell 脚本、Informix 4GL、MySQL 实现自动化测试与系统功能模块开发',
            '掌握 UNIX 系统操作 与金融业务逻辑实现，培养了扎实的工程规范意识'
          ]
        }
      ],
      projectList: [
        { id: 'proj1', name: '汇丰 Wealth Dashboard', tech: 'React + Jest + TestCafe + Jenkins', jobId: 'job1' },
        { id: 'proj2', name: '自动化测试系统', tech: 'Vue3 Composition API + TypeScript', jobId: 'job2' },
        { id: 'proj3', name: '广发证券关系系统', tech: 'Angular + Vue', jobId: 'job2' },
        { id: 'proj4', name: '税收分析电子地图', tech: 'AngularJS + ArcGIS + ECharts', jobId: 'job3' },
        { id: 'proj5', name: '地理信息云集市', tech: 'AngularJS + Web Component', jobId: 'job3' },
        { id: 'proj6', name: '南方数码官网重构', tech: 'Webpack + Gulp + RequireJS', jobId: 'job3' }
      ],
      skillList: [
        { category: '前端开发', desc: '精通 HTML / CSS / JavaScript / TypeScript，熟练使用 Vue、Angular、React 等框架' },
        { category: '架构思想', desc: '深入理解 OOP / FP 编程思想，熟悉 Flux 架构，具备良好的代码组织与复用设计能力' },
        { category: '构建与测试', desc: '熟练使用 Webpack，掌握 Jest / TestCafe / Jenkins CI/CD 自动化测试流程' },
        { category: '后端能力', desc: '能使用 Node.js + MongoDB 搭建 RESTful 服务' },
        { category: '项目经验', desc: '拥有 1.5 年 GIS 项目经验 与 5 年金融行业项目经验' },
        { category: '开发风格', desc: '注重 代码质量、可读性、可维护性 与团队协作' }
      ],
      copyright: '© 2024 Zhang Haoran | 持续学习与成长'
    },
    en: {
      resume: 'Resume',
      position: '🎯 Position',
      positionTitle: 'Web Front-end Developer',
      education: '🎓 Education',
      university: 'Beijing Forestry University',
      degree: 'Bachelor of Science / Geographic Information System (GIS)',
      degreeTime: '2010.09 – 2014.06',
      experience: '💼 Work Experience',
      projects: '🧩 Project Highlights',
      skills: '🛠 Core Skills',
      jobs: [
        {
          id: 'job1',
          title: 'Web Front-end Developer',
          company: 'Faben Information Technology Co., Ltd. (Guangzhou Branch)',
          time: '2020.09 – 2023.01',
          tasks: [
            'Participated in the development of HSBC Wealth Dashboard and Wealth Product Catalog projects, using React for frontend and Spring Boot for backend',
            'Responsible for writing automated tests: performed unit testing with Jest and generated coverage reports, implemented end-to-end (E2E) testing with TestCafe, and successfully configured Jenkins CI/CD',
            'Participated in the development and maintenance of backend APIs, wrote backend unit tests using Karate/JUnit, improving system maintainability and regression test efficiency'
          ]
        },
        {
          id: 'job2',
          title: 'Web Front-end Developer',
          company: 'Wonders Information Technology Co., Ltd. (Guangzhou Branch)',
          time: '2017.04 – 2020.04',
          tasks: [
            'Led the front-end development of HSBC internal automation testing system, built with Vue + Composition API + TypeScript, achieving module logic reusability and high maintainability',
            'Participated in the development of GF Securities Strategic Customer Relationship System (Angular + Vue) and Broker System, mastered core frontend technologies including Vuex, Router, Axios, JSX, ES6 modularization',
            'Gained deep understanding of large-scale frontend project architecture design, component-based thinking and functional programming, with strong optimization capabilities for complex business scenarios'
          ]
        },
        {
          id: 'job3',
          title: 'Web Front-end Developer',
          company: 'Southern Digital Technology Co., Ltd.',
          time: '2015.10 – 2017.03',
          tasks: [
            'Led the development of multiple GIS-related projects',
            'Foshan Economic Tax Analysis E-map: implemented economic and geographic data visualization based on AngularJS + ArcGIS JS API + ECharts',
            'Geographic Information Cloud Marketplace: adopted AngularJS MVC architecture, implemented an automatic Web App generation system (patent applied and received company technical award)',
            'Southern Digital Website Redesign: optimized modularization and multi-page construction using Webpack, Gulp, RequireJS'
          ]
        },
        {
          id: 'job4',
          title: 'Software Engineer',
          company: 'Accenture (China) Guangzhou Tianhe Branch',
          time: '2014.08 – 2015.10',
          tasks: [
            'Participated in the development and maintenance of IBM Informix / UNIX insurance system',
            'Implemented automation testing and system feature module development using Shell scripts, Informix 4GL, MySQL',
            'Mastered UNIX system operations and financial business logic implementation, cultivated solid engineering standard awareness'
          ]
        }
      ],
      projectList: [
        { id: 'proj1', name: 'HSBC Wealth Dashboard', tech: 'React + Jest + TestCafe + Jenkins', jobId: 'job1' },
        { id: 'proj2', name: 'Automation Testing System', tech: 'Vue3 Composition API + TypeScript', jobId: 'job2' },
        { id: 'proj3', name: 'GF Securities Relationship System', tech: 'Angular + Vue', jobId: 'job2' },
        { id: 'proj4', name: 'Economic Tax E-map', tech: 'AngularJS + ArcGIS + ECharts', jobId: 'job3' },
        { id: 'proj5', name: 'Geographic Information Marketplace', tech: 'AngularJS + Web Component', jobId: 'job3' },
        { id: 'proj6', name: 'Website Redesign', tech: 'Webpack + Gulp + RequireJS', jobId: 'job3' }
      ],
      skillList: [
        { category: 'Frontend Development', desc: 'Proficient in HTML / CSS / JavaScript / TypeScript, skilled in frameworks such as Vue, Angular, React' },
        { category: 'Architecture Design', desc: 'Deep understanding of OOP / FP programming paradigms, familiar with Flux architecture, strong code organization and reusable design capabilities' },
        { category: 'Build & Testing', desc: 'Proficient with Webpack, experienced in Jest / TestCafe / Jenkins CI/CD automation testing workflow' },
        { category: 'Backend Capability', desc: 'Capable of building RESTful services using Node.js + MongoDB' },
        { category: 'Project Experience', desc: '1.5 years of GIS project experience and 5 years of financial industry project experience' },
        { category: 'Development Style', desc: 'Focus on code quality, readability, maintainability and team collaboration' }
      ],
      copyright: '© 2024 Zhang Haoran | Continuous Learning and Growth'
    }
  };

  const t = content[language];
  const [activeJobId, setActiveJobId] = useState(null);

  const scrollToJob = (jobId) => {
    setActiveJobId(jobId);
    const element = document.getElementById(`job-${jobId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setTimeout(() => setActiveJobId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Language Toggle */}
        <div className="flex justify-end mb-6">
          <div className="bg-white rounded-lg shadow-md p-2 flex gap-2">
            <button
              onClick={() => setLanguage('zh')}
              className={`px-4 py-2 rounded font-semibold transition-all ${
                language === 'zh'
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              中
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-4 py-2 rounded font-semibold transition-all ${
                language === 'en'
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Eng
            </button>
          </div>
        </div>

        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-slate-800 mb-2">
              {language === 'zh' ? '张浩然 | Zhang Haoran' : 'Zhang Haoran'}
            </h1>
            <h2 className="text-xl text-blue-600 font-semibold mb-4">
              {t.resume}
            </h2>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-blue-500" />
                <span>+86 138-xxxx-xxxx</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-blue-500" />
                <span>haoran.zhang@email.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-500" />
                <span>{language === 'zh' ? '广州 / Guangzhou' : 'Guangzhou'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Github size={16} className="text-blue-500" />
                <a href="#" className="text-blue-600 hover:underline">GitHub</a>
              </div>
            </div>
          </div>

          {/* Position */}
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-bold text-slate-800">{t.position}</h3>
            </div>
            <p className="text-blue-600 font-semibold">{t.positionTitle}</p>
          </div>
        </div>

        {/* Education */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-xl font-bold text-slate-800">{t.education}</h3>
          </div>
          <div className="border-l-4 border-blue-200 pl-4 py-3">
            <p className="font-semibold text-slate-800">{t.university}</p>
            <p className="text-slate-600">{t.degree}</p>
            <p className="text-sm text-slate-500">{t.degreeTime}</p>
          </div>
        </div>

        {/* Project Highlights */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-xl font-bold text-slate-800">{t.projects}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.projectList.map((proj) => (
              <button
                key={proj.id}
                onClick={() => scrollToJob(proj.jobId)}
                className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg p-4 border border-blue-100 hover:shadow-lg hover:border-blue-300 transition-all text-left cursor-pointer transform hover:scale-105"
              >
                <p className="font-semibold text-slate-800 mb-1 group-hover:text-blue-600">{proj.name}</p>
                <p className="text-xs text-slate-600">{proj.tech}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Work Experience */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-xl font-bold text-slate-800">{t.experience}</h3>
          </div>
          
          <div className="space-y-6">
            {t.jobs.map((job, idx) => (
              <div
                key={job.id}
                id={`job-${job.id}`}
                className={`border-l-4 pl-4 py-2 rounded transition-all ${
                  activeJobId === job.id ? 'bg-blue-50 border-blue-500' : `${['border-green-400', 'border-blue-400', 'border-purple-400', 'border-orange-400'][idx]}`
                }`}
              >
                <p className="font-bold text-slate-800">{job.title}</p>
                <p className="text-slate-600">{job.company}</p>
                <p className="text-sm text-slate-500 mb-3">{job.time}</p>
                <ul className="space-y-2 text-slate-700 text-sm">
                  {job.tasks.map((task, taskIdx) => (
                    <li key={taskIdx}>• {task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-xl font-bold text-slate-800">{t.skills}</h3>
          </div>
          
          <div className="space-y-4">
            {t.skillList.map((skill, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-sm font-semibold min-w-fit">
                    {skill.category}
                  </span>
                </div>
                <div className="flex-grow pt-0.5">
                  <p className="text-slate-700">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-slate-500 text-sm">
          <p>{t.copyright}</p>
        </div>
      </div>
    </div>
  );
}
