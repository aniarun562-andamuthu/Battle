/**
 * ==========================================================================
 * STUDY BATTLE - Subjects & Anti-Gravity Gamified Learning Roadmap (subjects.js)
 * Screen 8: 3D Zero-Gravity Milestone Roadmap, Upward Energy Particles,
 * Parallax Depth Physics, Winding SVG Curved Paths, & Course Catalog
 * ==========================================================================
 */

// --------------------------------------------------------------------------
// 1. REUSABLE ROADMAP DATA STRUCTURE FOR ALL SUBJECTS
// Standardized dynamic curriculum milestones rendered via JSON/Array data
// --------------------------------------------------------------------------
const SUBJECT_ROADMAP_CONFIG = {
  python: [
    {
      id: 'py_step_1',
      title: 'Python Variables & Types',
      subtitle: 'Dynamic typing, mutability & primitives',
      icon: '🐍',
      xp: 30,
      topic: 'Variables & Data Types',
      difficulty: 'Beginner',
      defaultStatus: 'completed'
    },
    {
      id: 'py_step_2',
      title: 'Control Flow & Conditionals',
      subtitle: 'If-else branching, loops & comprehensions',
      icon: '⚡',
      xp: 40,
      topic: 'Control Flow & Loops',
      difficulty: 'Beginner',
      defaultStatus: 'completed'
    },
    {
      id: 'py_step_3',
      title: 'Functions & First-Class Scope',
      subtitle: 'Closures, *args, **kwargs & lambdas',
      icon: '⚙️',
      xp: 50,
      topic: 'Functions & Modules',
      difficulty: 'Intermediate',
      defaultStatus: 'current'
    },
    {
      id: 'py_step_4',
      title: 'OOP & Class Architecture',
      subtitle: 'Encapsulation, dunder methods & inheritance',
      icon: '🏛️',
      xp: 65,
      topic: 'OOP Concepts',
      difficulty: 'Intermediate',
      defaultStatus: 'locked'
    },
    {
      id: 'py_step_5',
      title: 'File I/O & Exception Handling',
      subtitle: 'Context managers ("with"), custom errors',
      icon: '🛡️',
      xp: 80,
      topic: 'File Handling & Exceptions',
      difficulty: 'Advanced',
      defaultStatus: 'locked'
    },
    {
      id: 'py_step_6',
      title: 'Python Boss Arena: Master Sprint',
      subtitle: 'Full-curriculum timed algorithmic combat',
      icon: '👑',
      xp: 100,
      topic: 'Python Mastery',
      difficulty: 'Master',
      defaultStatus: 'locked'
    }
  ],
  javascript: [
    {
      id: 'js_step_1',
      title: 'ES6+ Syntax & Scoping',
      subtitle: 'let, const, closures & destructuring',
      icon: '🟨',
      xp: 30,
      topic: 'ES6+ Fundamentals',
      difficulty: 'Beginner',
      defaultStatus: 'completed'
    },
    {
      id: 'js_step_2',
      title: 'Async JS & Event Loop',
      subtitle: 'Promises, microtasks, & async/await',
      icon: '⚡',
      xp: 45,
      topic: 'Async & Promises',
      difficulty: 'Intermediate',
      defaultStatus: 'current'
    },
    {
      id: 'js_step_3',
      title: 'DOM Manipulation & Events',
      subtitle: 'Event bubbling, delegation & rendering',
      icon: '🌐',
      xp: 50,
      topic: 'DOM & Events',
      difficulty: 'Intermediate',
      defaultStatus: 'locked'
    },
    {
      id: 'js_step_4',
      title: 'Array & Object Methods',
      subtitle: 'Higher-order map, reduce, filter & sets',
      icon: '📦',
      xp: 65,
      topic: 'Modern Data Structures',
      difficulty: 'Intermediate',
      defaultStatus: 'locked'
    },
    {
      id: 'js_step_5',
      title: 'Prototypes & Class Syntax',
      subtitle: 'Prototypal chain & private class fields',
      icon: '🧬',
      xp: 80,
      topic: 'Prototypal Inheritance',
      difficulty: 'Advanced',
      defaultStatus: 'locked'
    },
    {
      id: 'js_step_6',
      title: 'JS Boss Arena: Web Speedrun',
      subtitle: 'Comprehensive JavaScript battle arena',
      icon: '👑',
      xp: 100,
      topic: 'JavaScript Mastery',
      difficulty: 'Master',
      defaultStatus: 'locked'
    }
  ],
  java: [
    {
      id: 'java_step_1',
      title: 'Java Types & JVM Basics',
      subtitle: 'Static typing, memory stack vs heap',
      icon: '☕',
      xp: 30,
      topic: 'Java Syntax & Primitive Types',
      difficulty: 'Beginner',
      defaultStatus: 'completed'
    },
    {
      id: 'java_step_2',
      title: 'OOP Principles in Java',
      subtitle: 'Classes, abstract classes & interfaces',
      icon: '🏛️',
      xp: 45,
      topic: 'Classes & Inheritance',
      difficulty: 'Intermediate',
      defaultStatus: 'current'
    },
    {
      id: 'java_step_3',
      title: 'Collections & Generics',
      subtitle: 'ArrayList, HashMap, HashSet & type safety',
      icon: '📚',
      xp: 55,
      topic: 'Collections & Generics',
      difficulty: 'Intermediate',
      defaultStatus: 'locked'
    },
    {
      id: 'java_step_4',
      title: 'Streams & Functional Java',
      subtitle: 'Lambdas, Stream pipelines & filters',
      icon: '🌊',
      xp: 70,
      topic: 'Streams & Functional Java',
      difficulty: 'Advanced',
      defaultStatus: 'locked'
    },
    {
      id: 'java_step_5',
      title: 'Concurrency & JVM Threads',
      subtitle: 'Thread lifecycle, synchronization & locks',
      icon: '⚡',
      xp: 85,
      topic: 'Concurrency & JVM Threads',
      difficulty: 'Advanced',
      defaultStatus: 'locked'
    },
    {
      id: 'java_step_6',
      title: 'Java Boss Arena: Enterprise Trial',
      subtitle: 'Grandmaster test of architectural Java',
      icon: '👑',
      xp: 100,
      topic: 'Java Mastery',
      difficulty: 'Master',
      defaultStatus: 'locked'
    }
  ],
  'html-css': [
    {
      id: 'html_step_1',
      title: 'Semantic HTML5 Markup',
      subtitle: 'ARIA landmarks & accessible structure',
      icon: '🌐',
      xp: 30,
      topic: 'Semantic HTML5',
      difficulty: 'Beginner',
      defaultStatus: 'completed'
    },
    {
      id: 'html_step_2',
      title: 'CSS Box Model & Specificity',
      subtitle: 'Margin collapse, padding & cascade math',
      icon: '🎨',
      xp: 40,
      topic: 'Box Model & Specificity',
      difficulty: 'Beginner',
      defaultStatus: 'current'
    },
    {
      id: 'html_step_3',
      title: 'Modern Flexbox & CSS Grid',
      subtitle: '1D flex distribution & 2D grid matrix',
      icon: '📐',
      xp: 55,
      topic: 'Flexbox & Modern Grid',
      difficulty: 'Intermediate',
      defaultStatus: 'locked'
    },
    {
      id: 'html_step_4',
      title: 'Responsive Design Breakpoints',
      subtitle: 'Fluid typography, clamp() & media queries',
      icon: '📱',
      xp: 65,
      topic: 'Responsive Breakpoints',
      difficulty: 'Intermediate',
      defaultStatus: 'locked'
    },
    {
      id: 'html_step_5',
      title: 'CSS Transforms & 3D Keyframes',
      subtitle: 'Hardware acceleration & cubic-bezier easing',
      icon: '✨',
      xp: 80,
      topic: 'Keyframes & 3D CSS',
      difficulty: 'Advanced',
      defaultStatus: 'locked'
    },
    {
      id: 'html_step_6',
      title: 'Frontend Boss Arena: Pixel Sprint',
      subtitle: 'Pixel-perfect frontend layout challenges',
      icon: '👑',
      xp: 100,
      topic: 'Frontend Mastery',
      difficulty: 'Master',
      defaultStatus: 'locked'
    }
  ],
  dbms: [
    {
      id: 'dbms_step_1',
      title: 'Relational Model & Key Schemas',
      subtitle: 'Primary, foreign & candidate keys',
      icon: '🗄️',
      xp: 30,
      topic: 'Relational DB Concepts',
      difficulty: 'Beginner',
      defaultStatus: 'completed'
    },
    {
      id: 'dbms_step_2',
      title: 'SQL DML & Aggregation',
      subtitle: 'SELECT, WHERE, GROUP BY & HAVING',
      icon: '🔍',
      xp: 45,
      topic: 'SQL Fundamentals',
      difficulty: 'Beginner',
      defaultStatus: 'current'
    },
    {
      id: 'dbms_step_3',
      title: 'Complex Relational Joins',
      subtitle: 'INNER, LEFT, RIGHT, FULL & correlated queries',
      icon: '🔗',
      xp: 60,
      topic: 'Complex Joins & Subqueries',
      difficulty: 'Intermediate',
      defaultStatus: 'locked'
    },
    {
      id: 'dbms_step_4',
      title: 'Database Normalization',
      subtitle: '1NF, 2NF, 3NF & BCNF decomposition',
      icon: '📐',
      xp: 75,
      topic: 'Normalization & Forms',
      difficulty: 'Intermediate',
      defaultStatus: 'locked'
    },
    {
      id: 'dbms_step_5',
      title: 'ACID Properties & Indexes',
      subtitle: 'B-Trees, transaction isolation & deadlocks',
      icon: '🛡️',
      xp: 85,
      topic: 'ACID & Indexing',
      difficulty: 'Advanced',
      defaultStatus: 'locked'
    },
    {
      id: 'dbms_step_6',
      title: 'DBMS Boss Arena: Query Master',
      subtitle: 'High-stakes SQL optimization challenge',
      icon: '👑',
      xp: 100,
      topic: 'DBMS Mastery',
      difficulty: 'Master',
      defaultStatus: 'locked'
    }
  ],
  'ui-ux': [
    {
      id: 'ui_step_1',
      title: 'Visual Hierarchy & Spacing',
      subtitle: 'Type scales, focal points & grid rhythm',
      icon: '🎨',
      xp: 30,
      topic: 'Visual Hierarchy',
      difficulty: 'Beginner',
      defaultStatus: 'completed'
    },
    {
      id: 'ui_step_2',
      title: 'Design Systems & Tokens',
      subtitle: 'Atomic design, variants & style guides',
      icon: '🧩',
      xp: 45,
      topic: 'Design Systems & Tokens',
      difficulty: 'Intermediate',
      defaultStatus: 'current'
    },
    {
      id: 'ui_step_3',
      title: 'Color Accessibility & WCAG',
      subtitle: 'Contrast ratios (4.5:1), color blindness & a11y',
      icon: '🌈',
      xp: 55,
      topic: 'Color & Accessibility',
      difficulty: 'Intermediate',
      defaultStatus: 'locked'
    },
    {
      id: 'ui_step_4',
      title: 'UX Heuristics & Research',
      subtitle: 'Nielsen-Norman rules, mental models & flows',
      icon: '📝',
      xp: 70,
      topic: 'UX Heuristics & Research',
      difficulty: 'Intermediate',
      defaultStatus: 'locked'
    },
    {
      id: 'ui_step_5',
      title: 'Micro-Interactions & Motion',
      subtitle: 'Fitts\'s Law, feedback loops & subtle transitions',
      icon: '💫',
      xp: 85,
      topic: 'Interaction Design',
      difficulty: 'Advanced',
      defaultStatus: 'locked'
    },
    {
      id: 'ui_step_6',
      title: 'UI/UX Boss Arena: Critique Sprint',
      subtitle: 'Design audits and user-journey diagnostics',
      icon: '👑',
      xp: 100,
      topic: 'Design Mastery',
      difficulty: 'Master',
      defaultStatus: 'locked'
    }
  ]
};

// --------------------------------------------------------------------------
// 2. MAIN INITIALIZER
// --------------------------------------------------------------------------
function initSubjectsPage() {
  let activeRoadmapSubject = 'python';

  // Roadmap & Catalog toggle handlers
  const btnToggleRoadmap = document.getElementById('btnToggleRoadmapView');
  const btnToggleCatalog = document.getElementById('btnToggleCatalogView');
  const roadmapView = document.getElementById('antiGravityRoadmapView');
  const catalogView = document.getElementById('catalogGridView');

  if (btnToggleRoadmap && btnToggleCatalog && roadmapView && catalogView) {
    btnToggleRoadmap.addEventListener('click', () => {
      roadmapView.style.display = 'block';
      catalogView.style.display = 'none';
      btnToggleRoadmap.className = 'btn btn-primary btn-sm';
      btnToggleCatalog.className = 'btn btn-secondary btn-sm';
      renderAntiGravityRoadmap(activeRoadmapSubject);
      playAudio('click');
    });

    btnToggleCatalog.addEventListener('click', () => {
      roadmapView.style.display = 'none';
      catalogView.style.display = 'block';
      btnToggleRoadmap.className = 'btn btn-secondary btn-sm';
      btnToggleCatalog.className = 'btn btn-primary btn-sm';
      initCourseCatalogGrid();
      playAudio('click');
    });
  }

  // Subject Tab Switchers
  const subjectTabs = document.querySelectorAll('.roadmap-subject-tab');
  subjectTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      subjectTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeRoadmapSubject = tab.getAttribute('data-subject-id') || 'python';
      renderAntiGravityRoadmap(activeRoadmapSubject);
      playAudio('click');
    });
  });

  // Initial Render of Anti-Gravity Roadmap
  renderAntiGravityRoadmap(activeRoadmapSubject);

  // Initialize Particles and Parallax Physics
  initUpwardParticles();
  initParallaxDepth();

  // Also initialize catalog cards
  initCourseCatalogGrid();

  // Resize listener to re-draw dynamic connecting curves
  window.addEventListener('resize', () => {
    drawRoadmapCurves();
  });
}

// --------------------------------------------------------------------------
// 3. ANTI-GRAVITY ROADMAP RENDERER (Winding Nodes + Status Hierarchy)
// --------------------------------------------------------------------------
function renderAntiGravityRoadmap(subjectId) {
  const container = document.getElementById('roadmapMilestonesContainer');
  if (!container) return;

  const milestones = SUBJECT_ROADMAP_CONFIG[subjectId] || SUBJECT_ROADMAP_CONFIG.python;

  // Real Per-User Progress Logic
  const sessionUid = getCurrentUserUid();
  const history = getBattleHistory();
  const isFreshUser = (sessionUid !== 'uid_demo_alex_hunter' && history.length === 0);

  // Layout node coordinates (responsive winding alternating zig-zag)
  const nodePositions = [
    { x: '18%', y: 70 },
    { x: '66%', y: 210 },
    { x: '24%', y: 350 },
    { x: '68%', y: 490 },
    { x: '28%', y: 630 },
    { x: '48%', y: 770 }
  ];

  container.innerHTML = milestones.map((step, idx) => {
    // Dynamic status determination
    let status = step.defaultStatus;
    if (isFreshUser) {
      status = (idx === 0) ? 'current' : 'locked';
    }

    const pos = nodePositions[idx] || { x: '50%', y: 70 + idx * 140 };

    // Status Badges & Glow
    let statusBadgeIcon = '🔒';
    let statusLabel = 'Locked Milestone';
    let actionBtnHtml = `<span style="font-size: 0.76rem; color: var(--text-muted);">Complete preceding step to unlock</span>`;

    if (status === 'completed') {
      statusBadgeIcon = '✔';
      statusLabel = 'Completed';
      actionBtnHtml = `
        <div style="display: flex; gap: 0.35rem; width: 100%;">
          <button class="btn btn-outline btn-sm" style="flex: 1; padding: 0.25rem 0.5rem; font-size: 0.72rem;" onclick="openStudyResourceModal('${subjectId}')">
            📖 Notes
          </button>
          <a href="quiz.html?mode=topic&subject=${subjectId}&topic=${encodeURIComponent(step.topic)}" class="btn btn-secondary btn-sm" style="flex: 1; padding: 0.25rem 0.5rem; font-size: 0.72rem;">
            🔄 Replay
          </a>
        </div>
      `;
    } else if (status === 'current') {
      statusBadgeIcon = '⚔️';
      statusLabel = 'ACTIVE STEP';
      actionBtnHtml = `
        <div style="display: flex; flex-direction: column; gap: 0.4rem; width: 100%;">
          <a href="quiz.html?mode=topic&subject=${subjectId}&topic=${encodeURIComponent(step.topic)}" class="btn btn-primary btn-sm btn-block" style="padding: 0.35rem 0.6rem; font-size: 0.78rem;">
            <span>⚔️ Enter Battle (+${step.xp} XP)</span>
          </a>
          <button class="btn btn-outline btn-sm btn-block" style="padding: 0.25rem 0.5rem; font-size: 0.72rem;" onclick="openStudyResourceModal('${subjectId}')">
            📖 Read Study Notes
          </button>
        </div>
      `;
    }

    return `
      <div class="milestone-node ${status}" id="${step.id}" data-index="${idx}" style="left: ${pos.x}; top: ${pos.y}px;">
        <div class="milestone-orb" title="${step.title}">
          <span>${step.icon}</span>
          <div class="milestone-status-badge">${statusBadgeIcon}</div>
        </div>

        <div class="milestone-card">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
            <span class="badge ${status === 'completed' ? 'badge-green' : status === 'current' ? 'badge-cyan' : 'badge-purple'}" style="font-size: 0.68rem; padding: 2px 6px;">
              ${statusLabel}
            </span>
            <span class="text-gold" style="font-size: 0.75rem; font-weight: 700;">+${step.xp} XP</span>
          </div>

          <div class="milestone-title">${step.title}</div>
          <div class="milestone-subtitle">${step.subtitle}</div>

          <div style="margin-top: 0.5rem;">
            ${actionBtnHtml}
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Attach interactive node clicks for locked guidance
  container.querySelectorAll('.milestone-node.locked').forEach(node => {
    node.addEventListener('click', () => {
      showToast('🔒 This milestone is locked! Master previous topics in the arena to unlock it.', 'info', 3000);
      playAudio('wrong');
    });
  });

  // Draw connecting curve SVG paths after nodes are placed
  setTimeout(drawRoadmapCurves, 40);
}

// --------------------------------------------------------------------------
// 4. DYNAMIC WINDING SVG CURVED CONNECTING PATH
// Connects each milestone alternately with solid (completed) and dotted (pending)
// --------------------------------------------------------------------------
function drawRoadmapCurves() {
  const svg = document.getElementById('roadmapCurveSvg');
  const container = document.getElementById('roadmapMilestonesContainer');
  if (!svg || !container) return;

  const nodes = Array.from(container.querySelectorAll('.milestone-node'));
  if (nodes.length < 2) return;

  const stageRect = container.getBoundingClientRect();
  svg.setAttribute('viewBox', `0 0 ${stageRect.width} ${stageRect.height}`);

  let pathsHtml = '';

  for (let i = 0; i < nodes.length - 1; i++) {
    const node1 = nodes[i];
    const node2 = nodes[i + 1];

    const orb1 = node1.querySelector('.milestone-orb');
    const orb2 = node2.querySelector('.milestone-orb');

    const rect1 = orb1.getBoundingClientRect();
    const rect2 = orb2.getBoundingClientRect();

    // Calculate center points relative to container
    const x1 = rect1.left + rect1.width / 2 - stageRect.left;
    const y1 = rect1.top + rect1.height / 2 - stageRect.top;
    const x2 = rect2.left + rect2.width / 2 - stageRect.left;
    const y2 = rect2.top + rect2.height / 2 - stageRect.top;

    const dy = y2 - y1;
    // Cubic Bezier control points for smooth sinusoidal winding curve
    const cx1 = x1;
    const cy1 = y1 + dy * 0.55;
    const cx2 = x2;
    const cy2 = y2 - dy * 0.55;

    const pathData = `M ${x1} ${y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x2} ${y2}`;

    const isNode1Completed = node1.classList.contains('completed');
    const isNode2Completed = node2.classList.contains('completed');
    const isNode2Current = node2.classList.contains('current');

    // If step is completed, render solid emerald glow line; else dotted purple
    const isCompletedPath = isNode1Completed && (isNode2Completed || isNode2Current);
    const pathClass = isCompletedPath ? 'curve-path-completed' : 'curve-path-pending';

    pathsHtml += `<path d="${pathData}" class="${pathClass}" />`;
  }

  svg.innerHTML = pathsHtml;
}

// --------------------------------------------------------------------------
// 5. UPWARD COSMIC ENERGY PARTICLES (Anti-Gravity Floating)
// Rising upwards against gravity from the stage base into space
// --------------------------------------------------------------------------
function initUpwardParticles() {
  const container = document.getElementById('upwardParticles');
  if (!container) return;

  container.innerHTML = '';
  const particleColors = [
    'rgba(6, 182, 212, 0.75)',
    'rgba(16, 185, 129, 0.75)',
    'rgba(139, 92, 246, 0.75)',
    'rgba(245, 158, 11, 0.75)',
    'rgba(56, 189, 248, 0.8)'
  ];

  const particleCount = 24;
  for (let i = 0; i < particleCount; i++) {
    const p = document.createElement('div');
    p.className = 'upward-particle';

    const size = Math.random() * 5 + 3; // 3px to 8px
    const left = Math.random() * 96 + 2; // 2% to 98%
    const bottom = Math.random() * 40 - 20; // Staggered starting baseline
    const duration = Math.random() * 5 + 4.5; // 4.5s to 9.5s
    const delay = Math.random() * 6; // 0s to 6s
    const color = particleColors[Math.floor(Math.random() * particleColors.length)];

    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.left = `${left}%`;
    p.style.bottom = `${bottom}px`;
    p.style.backgroundColor = color;
    p.style.color = color;
    p.style.animationDuration = `${duration}s`;
    p.style.animationDelay = `${delay}s`;

    container.appendChild(p);
  }
}

// --------------------------------------------------------------------------
// 6. PARALLAX DEPTH PHYSICS (3D Floating Experience on Mouse Interaction)
// Background moves slowly, foreground floating nodes shift faster
// --------------------------------------------------------------------------
function initParallaxDepth() {
  const stage = document.getElementById('antiGravityStage');
  const parallaxBg = document.getElementById('parallaxBg');
  if (!stage || !parallaxBg) return;

  stage.addEventListener('mousemove', (e) => {
    const rect = stage.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const normX = (e.clientX - centerX) / (rect.width / 2);
    const normY = (e.clientY - centerY) / (rect.height / 2);

    // Background moves subtly (slow)
    parallaxBg.style.transform = `translate3d(${normX * -14}px, ${normY * -14}px, 0)`;

    // Foreground milestone container floats faster (3D depth feel)
    const nodes = stage.querySelectorAll('.milestone-node');
    nodes.forEach((node, i) => {
      const depthFactor = (i % 2 === 0) ? 1.2 : 0.9;
      node.style.transform = `translate3d(${normX * 12 * depthFactor}px, ${normY * 12 * depthFactor}px, 0)`;
    });
  });

  stage.addEventListener('mouseleave', () => {
    parallaxBg.style.transform = 'translate3d(0, 0, 0)';
    const nodes = stage.querySelectorAll('.milestone-node');
    nodes.forEach(node => {
      node.style.transform = '';
    });
  });
}

// --------------------------------------------------------------------------
// 7. COURSE CATALOG GRID (Search, Filtering & Direct Battle Launchers)
// --------------------------------------------------------------------------
function initCourseCatalogGrid() {
  const gridContainer = document.getElementById('subjectsGrid');
  if (!gridContainer) return;

  const searchInput = document.getElementById('subjectSearchInput');
  const filterPills = document.querySelectorAll('.filter-pill');

  let currentCategory = 'all';
  let searchQuery = '';

  function renderCards() {
    const filtered = DATA_SUBJECTS.filter(subject => {
      const matchesCategory = currentCategory === 'all' || subject.category === currentCategory;
      const matchesSearch = subject.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            subject.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            subject.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      gridContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; background: var(--bg-surface); border-radius: var(--radius-lg); border: 1px dashed var(--border-subtle);">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</div>
          <h3 style="color: var(--text-white); margin-bottom: 0.35rem;">No subjects found</h3>
          <p style="color: var(--text-secondary); font-size: 0.9rem;">Try adjusting your search terms or category filter.</p>
        </div>
      `;
      return;
    }

    gridContainer.innerHTML = filtered.map(subject => {
      const difficultyBadgeClass = subject.difficulty.includes('Beginner') ? 'badge-green' : 'badge-purple';
      const topicsListHtml = subject.topics.map(t => `<li>• ${t}</li>`).join('');

      return `
        <div class="subject-card" data-subject-id="${subject.id}">
          <div class="subject-card-top">
            <div class="subject-icon-box">${subject.icon}</div>
            <span class="badge ${difficultyBadgeClass}">${subject.difficulty}</span>
          </div>

          <h3>${subject.name}</h3>
          <p>${subject.description}</p>

          <div style="background: var(--bg-darkest); padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); margin-bottom: 1.25rem;">
            <div style="font-size: 0.78rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600; margin-bottom: 0.35rem;">
              Core Syllabus Topics (${subject.topicsCount})
            </div>
            <ul style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.4;">
              ${topicsListHtml}
            </ul>
          </div>

          <div class="subject-stats-row">
            <span>Subject Mastery</span>
            <span style="font-weight: 600; color: var(--text-white);">${subject.progress}%</span>
          </div>

          <div class="progress-container mb-2">
            <div class="progress-fill" style="width: ${subject.progress}%;"></div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-top: auto;">
            <a href="quiz.html?mode=subject&subject=${subject.id}" class="btn btn-primary btn-sm" style="font-size: 0.82rem;">
              ⚔️ Battle
            </a>
            <a href="topic-battle.html?subject=${subject.id}" class="btn btn-secondary btn-sm" style="font-size: 0.82rem;">
              🎯 Topics
            </a>
          </div>

          <div style="margin-top: 0.65rem; text-align: center;">
            <button class="open-resource-btn" data-subject="${subject.id}" style="color: var(--accent-cyan); font-size: 0.78rem; text-decoration: underline; background: none; border: none; cursor: pointer;">
              📖 Open Study Guide & Notes
            </button>
          </div>
        </div>
      `;
    }).join('');

    gridContainer.querySelectorAll('.open-resource-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const sid = btn.getAttribute('data-subject');
        openStudyResourceModal(sid);
      });
    });
  }

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.getAttribute('data-category');
      renderCards();
      playAudio('click');
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderCards();
    });
  }

  renderCards();
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  initSubjectsPage();
});
