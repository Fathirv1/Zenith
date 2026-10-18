/**
 * Zenith — Life Operating System
 * Minimalist, high-performance, modular multi-board architecture.
 */

// =============================================================================
// DEFAULT SEED DATA
// =============================================================================

const DEFAULT_ENABLED_BOARDS = {
  finance: true,
  planner: true,
  notes: true,
  goals: true,
  library: true,
  health: true,
  projects: true
};

const DEFAULT_SETTINGS = {
  userName: 'Alex',
  theme: 'dark-obsidian',
  format24h: false,
  showSeconds: true,
  searchEngine: 'google',
  enabledBoards: { ...DEFAULT_ENABLED_BOARDS }
};

const DEFAULT_SHORTCUTS = [
  { id: '1', title: 'GitHub', url: 'https://github.com' },
  { id: '2', title: 'Hacker News', url: 'https://news.ycombinator.com' },
  { id: '3', title: 'Linear', url: 'https://linear.app' },
  { id: '4', title: 'Gmail', url: 'https://mail.google.com' },
  { id: '5', title: 'Google Docs', url: 'https://docs.google.com' },
  { id: '6', title: 'YouTube', url: 'https://youtube.com' }
];

const DEFAULT_TODOS = [
  { id: '1', text: 'Define quarterly roadmap & milestones', completed: false },
  { id: '2', text: 'Reconcile weekly ledger and cashflow', completed: true },
  { id: '3', text: 'Complete 45m deep focus sprint', completed: false }
];

const DEFAULT_TRANSACTIONS = [
  { id: '1', date: '2026-10-15', desc: 'Consulting Retainer', amount: 3500.00, type: 'income', category: 'Salary & Earnings' },
  { id: '2', date: '2026-10-16', desc: 'Workspace Studio Rent', amount: 1200.00, type: 'expense', category: 'Housing & Rent' },
  { id: '3', date: '2026-10-16', desc: 'Nutrition & Groceries', amount: 135.50, type: 'expense', category: 'Food & Dining' },
  { id: '4', date: '2026-10-17', desc: 'Cloud Computing Services', amount: 55.00, type: 'expense', category: 'Tech & Tools' }
];

const DEFAULT_SUBSCRIPTIONS = [
  { id: '1', name: 'Cloud Infrastructure', amount: 48.00, dayOfMonth: 5 },
  { id: '2', name: 'Software Development Suite', amount: 20.00, dayOfMonth: 19 },
  { id: '3', name: 'Gym & Recovery Studio', amount: 75.00, dayOfMonth: 22 }
];

const DEFAULT_CATEGORY_BUDGETS = {
  'Food & Dining': 450,
  'Housing & Rent': 1400,
  'Tech & Tools': 150,
  'Transport': 120,
  'Entertainment': 100
};

const DEFAULT_SAVINGS_VAULTS = [
  { id: '1', name: 'Operational Reserve (6M)', current: 6500, target: 12000 },
  { id: '2', name: 'Hardware Upgrade', current: 1600, target: 2400 },
  { id: '3', name: 'Index Fund Investment', current: 2200, target: 5000 }
];

const DEFAULT_HABITS = [
  { id: '1', name: 'Morning Cardio', category: 'Health', days: [true, true, false, true, true, false, false], streak: 4 },
  { id: '2', name: 'Deep Work Block (2h)', category: 'Focus', days: [true, true, true, true, true, false, false], streak: 14 },
  { id: '3', name: 'Technical Reading', category: 'Mind', days: [true, true, true, true, false, false, false], streak: 7 },
  { id: '4', name: 'Hydration Target (2.5L)', category: 'Health', days: [true, true, true, false, true, false, false], streak: 3 }
];

const DEFAULT_SCHEDULE = {
  Mon: [{ id: '1', text: 'Sprint Planning & Architecture', time: '09:00' }, { id: '2', text: 'Design Review', time: '14:30' }],
  Tue: [{ id: '3', text: 'Core System Implementation', time: '10:00' }],
  Wed: [{ id: '4', text: 'Client Review Meeting', time: '11:00' }, { id: '5', text: 'Strength Training', time: '17:30' }],
  Thu: [{ id: '6', text: 'Feature Verification & Profiling', time: '13:00' }],
  Fri: [{ id: '7', text: 'Weekly Retrospective & Ledger Audit', time: '15:30' }],
  Weekend: [{ id: '8', text: 'Offline Recovery & Reading', time: '10:00' }]
};

const DEFAULT_KANBAN = [
  { id: '1', text: 'Profile database query latency', lane: 'backlog' },
  { id: '2', text: 'Refactor layout state machine', lane: 'in_progress' },
  { id: '3', text: 'Implement export CSV utility', lane: 'completed' }
];

const DEFAULT_NOTES = [
  {
    id: '1',
    title: 'System Design Heuristics',
    tag: 'personal',
    pinned: true,
    body: `# System Design Heuristics\n\n1. Simplicity over cleverness: readable architectures compound reliably.\n2. Prefer local data ownership with optional sync primitives.\n3. Make common paths zero-latency.\n4. Design interfaces with clear boundaries and minimal surface area.`,
    updatedAt: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Core Development Architecture',
    tag: 'work',
    pinned: false,
    body: `Architecture Principles:\n- Pure semantic HTML5 + Modern CSS variables.\n- Native browser APIs (Dialog, Geolocation, Intl, Web Audio).\n- Zero external framework dependencies for instant startup time.\n- Deterministic state persistence in localStorage.`,
    updatedAt: new Date().toISOString()
  }
];

const DEFAULT_GOALS = [
  {
    id: '1',
    title: 'Fund 6-Month Emergency Reserve',
    category: 'Wealth',
    progress: 55,
    deadline: '2026-12-31',
    milestones: [
      { id: 'm1', text: 'Hit $3,000 threshold', completed: true },
      { id: 'm2', text: 'Hit $6,000 threshold', completed: true },
      { id: 'm3', text: 'Hit $10,000 threshold', completed: false },
      { id: 'm4', text: 'Complete $12,000 goal', completed: false }
    ]
  },
  {
    id: '2',
    title: 'Ship Production System v1.0',
    category: 'Career',
    progress: 75,
    deadline: '2026-11-20',
    milestones: [
      { id: 'm5', text: 'Core engine architecture', completed: true },
      { id: 'm6', text: 'Local persistence & tests', completed: true },
      { id: 'm7', text: 'Documentation & release prep', completed: true },
      { id: 'm8', text: 'Production deployment', completed: false }
    ]
  }
];

const DEFAULT_LIBRARY = [
  {
    id: '1',
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    status: 'reading',
    progress: 'Page 210 of 560 (38%)',
    notes: 'Reliability, scalability, and maintainability are the triad of durable systems.'
  },
  {
    id: '2',
    title: 'Clean Architecture',
    author: 'Robert C. Martin',
    status: 'completed',
    progress: 'Complete',
    notes: 'Keep core business rules independent of delivery mechanisms.'
  },
  {
    id: '3',
    title: 'The Pragmatic Programmer',
    author: 'David Thomas & Andrew Hunt',
    status: 'to_read',
    progress: 'Queued',
    notes: 'Care about your craft; provide options instead of excuses.'
  }
];

const DEFAULT_HEALTH = {
  waterCurrent: 1750,
  waterTarget: 2500,
  sleepHours: 7.5,
  workouts: [
    { id: '1', date: '2026-10-15', type: 'Strength: Push Day', duration: '45m', notes: 'Flat bench 4x8, OHP 3x10' },
    { id: '2', date: '2026-10-16', type: 'Running: 5K Steady', duration: '30m', notes: 'Zone 2 steady-state run (5.2 km)' }
  ]
};

const DEFAULT_PROJECTS = [
  {
    id: '1',
    name: 'Zenith Life OS',
    status: 'development',
    stack: ['TypeScript', 'Vanilla JS', 'CSS3'],
    url: 'https://github.com/alex/zenith'
  },
  {
    id: '2',
    name: 'Distributed KV Store',
    status: 'concept',
    stack: ['Go', 'Raft', 'gRPC'],
    url: ''
  },
  {
    id: '3',
    name: 'Minimalist Markdown CMS',
    status: 'shipped',
    stack: ['Node', 'SQLite', 'Markdown'],
    url: 'https://github.com/alex/cms'
  }
];

const SEARCH_ENGINES = {
  google: { name: 'Google', url: 'https://www.google.com/search?q=' },
  duckduckgo: { name: 'DuckDuckGo', url: 'https://duckduckgo.com/?q=' },
  youtube: { name: 'YouTube', url: 'https://www.youtube.com/results?search_query=' },
  github: { name: 'GitHub', url: 'https://github.com/search?q=' },
  reddit: { name: 'Reddit', url: 'https://reddit.com/search/?q=' },
  wikipedia: { name: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=' }
};

// =============================================================================
// STORAGE UTILITY
// =============================================================================

const loadData = (key, fallback) => {
  try {
    const item = localStorage.getItem(`zenith_${key}`);
    return item ? JSON.parse(item) : fallback;
  } catch (e) {
    return fallback;
  }
};

const saveData = (key, val) => {
  try {
    localStorage.setItem(`zenith_${key}`, JSON.stringify(val));
  } catch (e) {
    console.error(`Failed to save zenith_${key}`, e);
  }
};

// State
let settings = loadData('settings', DEFAULT_SETTINGS);
if (!settings.enabledBoards) settings.enabledBoards = { ...DEFAULT_ENABLED_BOARDS };

let shortcuts = loadData('shortcuts', DEFAULT_SHORTCUTS);
let todos = loadData('todos', DEFAULT_TODOS);
let transactions = loadData('transactions', DEFAULT_TRANSACTIONS);
let subscriptions = loadData('subscriptions', DEFAULT_SUBSCRIPTIONS);
let categoryBudgets = loadData('categoryBudgets', DEFAULT_CATEGORY_BUDGETS);
let savingsVaults = loadData('savingsVaults', DEFAULT_SAVINGS_VAULTS);
let habits = loadData('habits', DEFAULT_HABITS);
let schedule = loadData('schedule', DEFAULT_SCHEDULE);
let kanbanTasks = loadData('kanbanTasks', DEFAULT_KANBAN);
let notes = loadData('notes', DEFAULT_NOTES);
let goals = loadData('goals', DEFAULT_GOALS);
let libraryItems = loadData('libraryItems', DEFAULT_LIBRARY);
let healthData = loadData('healthData', DEFAULT_HEALTH);
let projects = loadData('projects', DEFAULT_PROJECTS);

let activeNoteId = notes[0]?.id || null;
let currentActiveBoard = 'overview';
let activePlannerView = 'weekly';
let isMarkdownPreview = false;
let isAnnualSubView = false;

// =============================================================================
// DIALOG COMPLIANCE & LIGHT-DISMISS
// =============================================================================

const setupDialogLightDismiss = (dialogEl) => {
  if (!dialogEl) return;
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    dialogEl.addEventListener('click', (event) => {
      if (event.target !== dialogEl) return;
      const rect = dialogEl.getBoundingClientRect();
      const isInside = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );
      if (!isInside) dialogEl.close();
    });
  }
};

[
  'shortcutDialog', 'transactionDialog', 'subscriptionDialog', 'habitDialog',
  'savingsGoalDialog', 'goalDialog', 'mediaDialog', 'workoutDialog',
  'projectDialog', 'dayTaskDialog', 'settingsDialog', 'commandPaletteDialog'
].forEach(id => setupDialogLightDismiss(document.getElementById(id)));

const showToast = (message, duration = 2800) => {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(8px)';
    toast.style.transition = '0.2s ease';
    setTimeout(() => toast.remove(), 200);
  }, duration);
};

// =============================================================================
// BESPOKE CHECKBOX COMPONENT GENERATOR (ZERO OS CHECKBOXES)
// =============================================================================

const createCustomCheckbox = (checked, onChange) => {
  const wrap = document.createElement('label');
  wrap.className = 'custom-checkbox-wrap';
  
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.checked = checked;
  input.addEventListener('change', (e) => onChange(e.target.checked));

  const visual = document.createElement('span');
  visual.className = 'checkbox-visual';
  visual.innerHTML = `
    <svg viewBox="0 0 24 24">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  `;

  wrap.appendChild(input);
  wrap.appendChild(visual);
  return wrap;
};

// =============================================================================
// DYNAMIC NAVIGATION & BOARD SWITCHER
// =============================================================================

const BOARD_DEFINITIONS = [
  {
    id: 'overview',
    label: 'Overview',
    alwaysEnabled: true,
    title: 'Overview',
    sub: 'System status and daily focus',
    icon: `<svg class="nav-svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`
  },
  {
    id: 'finance',
    label: 'Finance',
    title: 'Finance',
    sub: 'Cashflow, recurring commitments, and budgets',
    badgeId: 'financeBadge',
    icon: `<svg class="nav-svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>`
  },
  {
    id: 'planner',
    label: 'Planner & Habits',
    title: 'Planner & Habits',
    sub: 'Weekly schedule, kanban lanes, and discipline tracking',
    badgeId: 'habitBadge',
    icon: `<svg class="nav-svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`
  },
  {
    id: 'notes',
    label: 'Notes',
    title: 'Notes',
    sub: 'Knowledge base, technical documentation, and logs',
    badgeId: 'notesBadge',
    icon: `<svg class="nav-svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`
  },
  {
    id: 'goals',
    label: 'Goals',
    title: 'Strategic Objectives',
    sub: 'Milestone roadmaps and progress tracking',
    icon: `<svg class="nav-svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`
  },
  {
    id: 'library',
    label: 'Library & Media',
    title: 'Reading & Media Vault',
    sub: 'Books, research papers, articles, and takeaways',
    icon: `<svg class="nav-svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>`
  },
  {
    id: 'health',
    label: 'Health & Wellness',
    title: 'Health & Wellness',
    sub: 'Daily baseline physical metrics and instant training logs',
    icon: `<svg class="nav-svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`
  },
  {
    id: 'projects',
    label: 'Projects',
    title: 'Project & Dev Roadmap',
    sub: 'Active software products, deliverables, and repos',
    icon: `<svg class="nav-svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`
  }
];

const renderSidebarNav = () => {
  const navContainer = document.getElementById('sidebarNavMenu');
  navContainer.innerHTML = '';

  BOARD_DEFINITIONS.forEach(def => {
    if (!def.alwaysEnabled && !settings.enabledBoards[def.id]) return;

    const btn = document.createElement('button');
    btn.className = `nav-item ${currentActiveBoard === def.id ? 'active' : ''}`;
    btn.dataset.board = def.id;
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', currentActiveBoard === def.id);

    btn.innerHTML = `
      ${def.icon}
      <span class="nav-label">${def.label}</span>
      ${def.badgeId ? `<span class="nav-badge" id="${def.badgeId}">-</span>` : ''}
    `;

    btn.addEventListener('click', () => switchBoard(def.id));
    navContainer.appendChild(btn);
  });
};

const switchBoard = (boardKey) => {
  currentActiveBoard = boardKey;

  document.querySelectorAll('.nav-item').forEach(item => {
    const isTarget = item.dataset.board === boardKey;
    item.classList.toggle('active', isTarget);
    item.setAttribute('aria-selected', isTarget);
  });

  document.querySelectorAll('.board-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === `board-${boardKey}`);
  });

  const def = BOARD_DEFINITIONS.find(b => b.id === boardKey) || BOARD_DEFINITIONS[0];
  document.getElementById('boardHeading').textContent = def.title;
  document.getElementById('boardSubheading').textContent = def.sub;

  if (boardKey === 'finance') renderFinanceBoard();
  if (boardKey === 'planner') renderPlannerBoard();
  if (boardKey === 'notes') renderNotesBoard();
  if (boardKey === 'goals') renderGoalsBoard();
  if (boardKey === 'library') renderLibraryBoard();
  if (boardKey === 'health') renderHealthBoard();
  if (boardKey === 'projects') renderProjectsBoard();
  if (boardKey === 'overview') updateOverviewKPIs();
};

document.querySelectorAll('.kpi-card').forEach(card => {
  card.addEventListener('click', () => {
    const targetBoard = card.dataset.switchTo;
    if (targetBoard && (targetBoard === 'overview' || settings.enabledBoards[targetBoard])) {
      switchBoard(targetBoard);
    }
  });
});

// =============================================================================
// COMMAND PALETTE (NATURAL LANGUAGE SHORTHAND + UNIVERSAL COMMANDS)
// =============================================================================

const commandPaletteDialog = document.getElementById('commandPaletteDialog');
const paletteSearchInput = document.getElementById('paletteSearchInput');
const paletteResultsList = document.getElementById('paletteResultsList');

const COMMAND_LIST = [
  { label: 'Jump to Overview', category: 'Navigation', action: () => switchBoard('overview') },
  { label: 'Jump to Finance', category: 'Navigation', action: () => switchBoard('finance') },
  { label: 'Jump to Planner & Habits', category: 'Navigation', action: () => switchBoard('planner') },
  { label: 'Jump to Notes', category: 'Navigation', action: () => switchBoard('notes') },
  { label: 'Jump to Goals', category: 'Navigation', action: () => switchBoard('goals') },
  { label: 'Jump to Reading Vault', category: 'Navigation', action: () => switchBoard('library') },
  { label: 'Jump to Health & Wellness', category: 'Navigation', action: () => switchBoard('health') },
  { label: 'Jump to Projects', category: 'Navigation', action: () => switchBoard('projects') },
  { label: 'Log Transaction Entry', category: 'Finance', action: () => { switchBoard('finance'); document.getElementById('openAddTransactionBtn').click(); } },
  { label: 'Add Recurring Subscription', category: 'Finance', action: () => { switchBoard('finance'); document.getElementById('openAddSubscriptionBtn').click(); } },
  { label: 'Add Priority Task', category: 'Tasks', action: () => { switchBoard('overview'); document.getElementById('overviewTodoInput').focus(); } },
  { label: 'Track New Habit', category: 'Habits', action: () => { switchBoard('planner'); document.getElementById('addHabitBtn').click(); } },
  { label: 'Create New Note', category: 'Notes', action: () => { switchBoard('notes'); document.getElementById('createNewNoteBtn').click(); } },
  { label: 'Toggle Focus Mode', category: 'System', action: () => document.getElementById('focusModeBtn').click() },
  { label: 'Open Preferences', category: 'System', action: () => document.getElementById('openSettingsBtn').click() }
];

const renderPaletteResults = (filterText = '') => {
  paletteResultsList.innerHTML = '';
  const q = filterText.toLowerCase().trim();

  // Natural Language Shorthand Parsers
  if (q.startsWith('exp ') || q.startsWith('expense ')) {
    const parts = q.replace(/^exp(ense)?\s+/, '').split(' ');
    const amt = parseFloat(parts[0]);
    const desc = parts.slice(1).join(' ') || 'Quick Expense';
    if (!isNaN(amt)) {
      const item = document.createElement('div');
      item.className = 'palette-item selected';
      item.innerHTML = `
        <span>Log Expense: <strong>$${amt.toFixed(2)}</strong> for "${desc}"</span>
        <span class="palette-item-action">Press Enter ↵</span>
      `;
      item.addEventListener('click', () => {
        transactions.unshift({
          id: Date.now().toString(),
          type: 'expense',
          desc,
          amount: amt,
          category: 'General',
          date: new Date().toISOString().slice(0, 10)
        });
        saveData('transactions', transactions);
        renderFinanceBoard();
        updateOverviewKPIs();
        commandPaletteDialog.close();
        showToast(`Logged $${amt.toFixed(2)} for ${desc}`);
      });
      paletteResultsList.appendChild(item);
      return;
    }
  }

  if (q.startsWith('water ')) {
    const amt = parseInt(q.replace('water ', '').trim(), 10);
    if (!isNaN(amt)) {
      const item = document.createElement('div');
      item.className = 'palette-item selected';
      item.innerHTML = `
        <span>Add Hydration: <strong>+${amt} ml</strong></span>
        <span class="palette-item-action">Press Enter ↵</span>
      `;
      item.addEventListener('click', () => {
        healthData.waterCurrent += amt;
        saveData('healthData', healthData);
        renderHealthBoard();
        updateOverviewKPIs();
        commandPaletteDialog.close();
        showToast(`Added ${amt} ml water`);
      });
      paletteResultsList.appendChild(item);
      return;
    }
  }

  const filtered = COMMAND_LIST.filter(cmd => {
    return cmd.label.toLowerCase().includes(q) || cmd.category.toLowerCase().includes(q);
  });

  if (filtered.length === 0) {
    paletteResultsList.innerHTML = `<div style="padding:0.75rem; color:var(--text-muted); font-size:0.82rem; text-align:center;">No matching commands</div>`;
    return;
  }

  filtered.forEach((cmd, idx) => {
    const item = document.createElement('div');
    item.className = `palette-item ${idx === 0 ? 'selected' : ''}`;
    item.innerHTML = `
      <span>${cmd.label}</span>
      <span class="palette-item-action">${cmd.category}</span>
    `;
    item.addEventListener('click', () => {
      commandPaletteDialog.close();
      cmd.action();
    });
    paletteResultsList.appendChild(item);
  });
};

document.getElementById('openCommandPaletteBtn').addEventListener('click', () => {
  paletteSearchInput.value = '';
  renderPaletteResults();
  commandPaletteDialog.showModal();
  paletteSearchInput.focus();
});

document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    if (commandPaletteDialog.open) {
      commandPaletteDialog.close();
    } else {
      paletteSearchInput.value = '';
      renderPaletteResults();
      commandPaletteDialog.showModal();
      paletteSearchInput.focus();
    }
  }
});

paletteSearchInput.addEventListener('input', (e) => renderPaletteResults(e.target.value));
paletteSearchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const selected = paletteResultsList.querySelector('.palette-item.selected') || paletteResultsList.querySelector('.palette-item');
    if (selected) selected.click();
  }
});

// =============================================================================
// BOARD 1: OVERVIEW & CLOCK
// =============================================================================

const updateClock = () => {
  const now = new Date();
  const timeOptions = {
    hour12: !settings.format24h,
    hour: '2-digit',
    minute: '2-digit'
  };
  if (settings.showSeconds) timeOptions.second = '2-digit';

  document.getElementById('clockDisplay').textContent = now.toLocaleTimeString([], timeOptions);
  document.getElementById('dateDisplay').textContent = now.toLocaleDateString([], {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  const hour = now.getHours();
  let greeting = 'Good evening';
  if (hour >= 5 && hour < 12) greeting = 'Good morning';
  else if (hour >= 12 && hour < 17) greeting = 'Good afternoon';
  else if (hour >= 22 || hour < 5) greeting = 'Good night';
  document.getElementById('greetingText').textContent = greeting;

  document.querySelectorAll('.clock-chip').forEach(chip => {
    const tz = chip.dataset.tz;
    const timeSpan = chip.querySelector('.chip-time');
    try {
      timeSpan.textContent = new Intl.DateTimeFormat([], {
        timeZone: tz,
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).format(now);
    } catch (e) {
      timeSpan.textContent = '--:--';
    }
  });
};

setInterval(updateClock, 1000);
updateClock();

// Editable Name
const userNameEl = document.getElementById('userName');
userNameEl.textContent = settings.userName || 'Alex';
userNameEl.addEventListener('blur', () => {
  const name = userNameEl.textContent.trim() || 'Alex';
  settings.userName = name;
  saveData('settings', settings);
});
userNameEl.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    userNameEl.blur();
  }
});

// Search Omnibox
const searchInput = document.getElementById('searchInput');
const searchEngineMenuBtn = document.getElementById('searchEngineMenuBtn');
const engineDropdown = document.getElementById('engineDropdown');

const updateSearchUI = () => {
  const engine = SEARCH_ENGINES[settings.searchEngine] || SEARCH_ENGINES.google;
  document.getElementById('currentEngineName').textContent = engine.name;
};

searchEngineMenuBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  engineDropdown.classList.toggle('hidden');
});

document.querySelectorAll('.engine-option').forEach(btn => {
  btn.addEventListener('click', () => {
    settings.searchEngine = btn.dataset.engine;
    saveData('settings', settings);
    updateSearchUI();
    engineDropdown.classList.add('hidden');
    searchInput.focus();
  });
});

document.addEventListener('click', () => engineDropdown.classList.add('hidden'));

const executeSearch = () => {
  const query = searchInput.value.trim();
  if (!query) return;
  const isUrl = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/.*)?$/i.test(query);
  if (isUrl) {
    window.location.href = query.startsWith('http') ? query : `https://${query}`;
    return;
  }
  const engine = SEARCH_ENGINES[settings.searchEngine] || SEARCH_ENGINES.google;
  window.location.href = `${engine.url}${encodeURIComponent(query)}`;
};

document.getElementById('searchSubmitBtn').addEventListener('click', executeSearch);
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') executeSearch();
});

document.addEventListener('keydown', (e) => {
  if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
    e.preventDefault();
    searchInput.focus();
  }
});

// Shortcuts
const renderShortcuts = () => {
  const grid = document.getElementById('shortcutsGrid');
  grid.innerHTML = '';
  shortcuts.forEach(item => {
    const card = document.createElement('a');
    card.className = 'shortcut-card';
    card.href = item.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';

    const iconWrap = document.createElement('div');
    iconWrap.className = 'shortcut-icon-wrap';

    const img = document.createElement('img');
    img.className = 'shortcut-icon-img';
    img.src = `https://www.google.com/s2/favicons?sz=32&domain_url=${encodeURIComponent(item.url)}`;
    img.alt = item.title;
    img.onerror = () => {
      img.remove();
      iconWrap.innerHTML = `
        <svg class="shortcut-fallback-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
        </svg>
      `;
    };
    iconWrap.appendChild(img);

    const title = document.createElement('span');
    title.className = 'shortcut-title';
    title.textContent = item.title;

    const delBtn = document.createElement('button');
    delBtn.className = 'shortcut-delete-btn';
    delBtn.innerHTML = '&times;';
    delBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      shortcuts = shortcuts.filter(s => s.id !== item.id);
      saveData('shortcuts', shortcuts);
      renderShortcuts();
      showToast('Shortcut removed');
    });

    card.appendChild(iconWrap);
    card.appendChild(title);
    card.appendChild(delBtn);
    grid.appendChild(card);
  });
};

document.getElementById('addShortcutBtn').addEventListener('click', () => {
  document.getElementById('shortcutForm').reset();
  document.getElementById('shortcutDialog').showModal();
});
document.getElementById('closeShortcutDialogBtn').addEventListener('click', () => document.getElementById('shortcutDialog').close());
document.getElementById('cancelShortcutBtn').addEventListener('click', () => document.getElementById('shortcutDialog').close());

document.getElementById('shortcutForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('shortcutTitle').value.trim();
  let url = document.getElementById('shortcutUrl').value.trim();
  if (!url.startsWith('http://') && !url.startsWith('https://')) url = `https://${url}`;

  shortcuts.push({ id: Date.now().toString(), title, url });
  saveData('shortcuts', shortcuts);
  renderShortcuts();
  document.getElementById('shortcutDialog').close();
  showToast(`Added ${title}`);
});

// Overview Priorities (With Custom Styled Checkbox)
const renderOverviewTodos = () => {
  const list = document.getElementById('overviewTodoList');
  list.innerHTML = '';
  if (todos.length === 0) {
    list.innerHTML = `<div class="empty-state-card-mini">No focus tasks. Press Enter above or add via Command Menu.</div>`;
    return;
  }
  todos.forEach(todo => {
    const item = document.createElement('div');
    item.className = `todo-item ${todo.completed ? 'completed' : ''}`;

    const left = document.createElement('div');
    left.className = 'todo-item-left';

    const customCheckbox = createCustomCheckbox(todo.completed, (isChecked) => {
      todo.completed = isChecked;
      saveData('todos', todos);
      renderOverviewTodos();
      updateOverviewKPIs();
    });

    const text = document.createElement('span');
    text.className = 'todo-text';
    text.textContent = todo.text;

    left.appendChild(customCheckbox);
    left.appendChild(text);

    const delBtn = document.createElement('button');
    delBtn.className = 'todo-delete-btn';
    delBtn.innerHTML = '&times;';
    delBtn.addEventListener('click', () => {
      todos = todos.filter(t => t.id !== todo.id);
      saveData('todos', todos);
      renderOverviewTodos();
      updateOverviewKPIs();
    });

    item.appendChild(left);
    item.appendChild(delBtn);
    list.appendChild(item);
  });

  const completed = todos.filter(t => t.completed).length;
  document.getElementById('overviewTodoCounter').textContent = `${completed}/${todos.length}`;
};

document.getElementById('overviewTodoForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('overviewTodoInput');
  const text = input.value.trim();
  if (!text) return;
  todos.unshift({ id: Date.now().toString(), text, completed: false });
  saveData('todos', todos);
  renderOverviewTodos();
  updateOverviewKPIs();
  input.value = '';
});

// =============================================================================
// FOCUS TIMER & PURE WEB AUDIO AMBIENT SOUNDSCAPES
// =============================================================================

let timerDuration = 1500;
let timerRemaining = 1500;
let timerInterval = null;
let timerIsRunning = false;
let audioCtx = null;
let activeAmbientSource = null;
let currentSoundscape = 'none';

const playChime = () => {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(520, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(780, ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.65);
  } catch (e) {}
};

const stopAmbientSound = () => {
  if (activeAmbientSource) {
    try {
      activeAmbientSource.stop();
      activeAmbientSource.disconnect();
    } catch (e) {}
    activeAmbientSource = null;
  }
};

const startAmbientSound = (soundType) => {
  stopAmbientSound();
  if (soundType === 'none') return;

  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const bufferSize = audioCtx.sampleRate * 2;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);

    if (soundType === 'rain') {
      // Soft filtered pink/rain noise
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        data[i] = (b0 + b1 + b2) * 0.07;
      }
    } else if (soundType === 'brown') {
      // Warm brownian noise
      let last = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        data[i] = (last + (0.02 * white)) / 1.02;
        last = data[i];
        data[i] *= 0.35;
      }
    } else if (soundType === 'waves') {
      // Alpha waves drone
      for (let i = 0; i < bufferSize; i++) {
        const t = i / audioCtx.sampleRate;
        data[i] = (Math.sin(2 * Math.PI * 216 * t) + Math.sin(2 * Math.PI * 226 * t)) * 0.04;
      }
    }

    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    const gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);

    noise.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    noise.start();
    activeAmbientSource = noise;
  } catch (e) {
    console.warn('Ambient audio synthesis not permitted without direct user click', e);
  }
};

document.querySelectorAll('#soundPillsGroup .sound-pill').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#soundPillsGroup .sound-pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentSoundscape = btn.dataset.sound;
    startAmbientSound(currentSoundscape);
    showToast(`Soundscape: ${btn.textContent}`);
  });
});

const updateTimerUI = () => {
  const m = Math.floor(timerRemaining / 60).toString().padStart(2, '0');
  const s = (timerRemaining % 60).toString().padStart(2, '0');
  document.getElementById('timerCountdown').textContent = `${m}:${s}`;
};

const startTimer = () => {
  if (timerIsRunning) return;
  timerIsRunning = true;
  document.getElementById('timerToggleBtn').textContent = 'Pause';
  document.getElementById('timerStatus').textContent = 'Session active';
  if (currentSoundscape !== 'none') startAmbientSound(currentSoundscape);
  
  timerInterval = setInterval(() => {
    if (timerRemaining > 0) {
      timerRemaining--;
      updateTimerUI();
    } else {
      pauseTimer();
      stopAmbientSound();
      playChime();
      document.getElementById('timerStatus').textContent = 'Session finished';
      showToast('Focus session complete');
    }
  }, 1000);
};

const pauseTimer = () => {
  timerIsRunning = false;
  document.getElementById('timerToggleBtn').textContent = 'Start';
  clearInterval(timerInterval);
  stopAmbientSound();
};

document.getElementById('timerToggleBtn').addEventListener('click', () => {
  if (timerIsRunning) pauseTimer();
  else startTimer();
});

document.getElementById('timerResetBtn').addEventListener('click', () => {
  pauseTimer();
  timerRemaining = timerDuration;
  document.getElementById('timerStatus').textContent = 'Ready';
  updateTimerUI();
});

document.querySelectorAll('.mode-pill').forEach(pill => {
  pill.addEventListener('click', () => {
    document.querySelectorAll('.mode-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    timerDuration = parseInt(pill.dataset.time, 10);
    pauseTimer();
    timerRemaining = timerDuration;
    document.getElementById('timerStatus').textContent = 'Ready';
    updateTimerUI();
  });
});

const updateOverviewKPIs = () => {
  let income = 0;
  let expenses = 0;
  transactions.forEach(t => {
    if (t.type === 'income') income += Number(t.amount);
    else expenses += Number(t.amount);
  });
  const net = income - expenses;
  const rate = income > 0 ? Math.max(0, Math.round(((income - expenses) / income) * 100)) : 0;
  document.getElementById('kpiNetSavings').textContent = `$${net.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  document.getElementById('kpiSavingsRate').textContent = `${rate}% retained`;
  
  const fBadge = document.getElementById('financeBadge');
  if (fBadge) fBadge.textContent = `$${Math.round(net)}`;

  const dayIndex = (new Date().getDay() + 6) % 7;
  const habitsDone = habits.filter(h => h.days[dayIndex]).length;
  document.getElementById('kpiHabitsDone').textContent = `${habitsDone} / ${habits.length}`;
  
  const hBadge = document.getElementById('habitBadge');
  if (hBadge) hBadge.textContent = `${habitsDone}/${habits.length}`;

  const pendingTodos = todos.filter(t => !t.completed).length;
  document.getElementById('kpiPendingTasks').textContent = pendingTodos;
  document.getElementById('kpiActiveGoals').textContent = goals.length;
  
  const nBadge = document.getElementById('notesBadge');
  if (nBadge) nBadge.textContent = notes.length;

  const habitsRemaining = habits.length - habitsDone;
  document.getElementById('dailyBriefPill').textContent = 
    `${pendingTodos} tasks pending • ${habitsRemaining} habits left • ${healthData.waterCurrent} ml water`;
};

// =============================================================================
// BOARD 2: FINANCE (RENEWAL RADAR, QUICK LOG BAR, BUDGETS, CSV)
// =============================================================================

const calculateDaysUntilRenewal = (dayOfMonth) => {
  const now = new Date();
  const currentDay = now.getDate();
  const targetDay = parseInt(dayOfMonth, 10) || 1;
  
  if (targetDay === currentDay) return 0;
  if (targetDay > currentDay) return targetDay - currentDay;
  
  // Next month
  const lastDayThisMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  return (lastDayThisMonth - currentDay) + targetDay;
};

const renderFinanceBoard = () => {
  let totalIncome = 0;
  let totalExpenses = 0;
  const categoryTotals = {};

  transactions.forEach(t => {
    const amt = Number(t.amount);
    if (t.type === 'income') {
      totalIncome += amt;
    } else {
      totalExpenses += amt;
      categoryTotals[t.category] = (categoryTotals[t.category] || 0) + amt;
    }
  });

  const netBalance = totalIncome - totalExpenses;
  const savingsRate = totalIncome > 0 ? Math.max(0, Math.round(((totalIncome - totalExpenses) / totalIncome) * 100)) : 0;

  document.getElementById('financeNetBalance').textContent = `$${netBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  document.getElementById('financeTotalIncome').textContent = `+$${totalIncome.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  document.getElementById('financeTotalExpenses').textContent = `-$${totalExpenses.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  document.getElementById('financeSavingsRate').textContent = `${savingsRate}%`;

  // Ledger Table
  const tbody = document.getElementById('transactionTableBody');
  tbody.innerHTML = '';
  if (transactions.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="empty-state-cell">No transactions recorded yet. Use the quick entry bar above to log cashflow.</td></tr>`;
  } else {
    transactions.forEach(tx => {
      const tr = document.createElement('tr');
      const isInc = tx.type === 'income';
      tr.innerHTML = `
        <td>${tx.date}</td>
        <td style="font-weight: 500;">${tx.desc}</td>
        <td><span class="category-tag">${tx.category}</span></td>
        <td class="${isInc ? 'text-success' : 'text-danger'}" style="font-family: var(--font-mono); font-weight: 600;">
          ${isInc ? '+' : '-'}$${Number(tx.amount).toFixed(2)}
        </td>
        <td>
          <button class="todo-delete-btn">&times;</button>
        </td>
      `;
      tr.querySelector('.todo-delete-btn').addEventListener('click', () => {
        transactions = transactions.filter(t => t.id !== tx.id);
        saveData('transactions', transactions);
        renderFinanceBoard();
        updateOverviewKPIs();
        showToast('Entry removed');
      });
      tbody.appendChild(tr);
    });
  }

  // Subscription Renewal Radar
  const subsList = document.getElementById('subscriptionsList');
  subsList.innerHTML = '';
  let monthlySubTotal = 0;

  if (subscriptions.length === 0) {
    subsList.innerHTML = `<div class="empty-state-card-mini">No recurring subscriptions tracked. Add services to monitor renewal countdowns.</div>`;
  } else {
    // Sort subscriptions by closest upcoming renewal
    const sortedSubs = [...subscriptions].sort((a, b) => {
      return calculateDaysUntilRenewal(a.dayOfMonth) - calculateDaysUntilRenewal(b.dayOfMonth);
    });

  sortedSubs.forEach(sub => {
    monthlySubTotal += Number(sub.amount);
    const daysLeft = calculateDaysUntilRenewal(sub.dayOfMonth);

    let dueTagClass = 'sub-due-normal';
    let dueTagText = `Due in ${daysLeft} days`;
    if (daysLeft === 0) {
      dueTagClass = 'sub-due-today';
      dueTagText = 'Renews today';
    } else if (daysLeft <= 3) {
      dueTagClass = 'sub-due-soon';
      dueTagText = `Renews in ${daysLeft}d`;
    }

    const item = document.createElement('div');
    item.className = 'subscription-item';
    item.innerHTML = `
      <div class="sub-left">
        <span class="sub-title">${sub.name}</span>
        <span class="sub-due-tag ${dueTagClass}">${dueTagText} (Day ${sub.dayOfMonth || 1})</span>
      </div>
      <div class="sub-right">
        <span class="sub-amount">$${Number(sub.amount).toFixed(2)}/mo</span>
        <button class="todo-delete-btn sub-del-btn">&times;</button>
      </div>
    `;
    item.querySelector('.sub-del-btn').addEventListener('click', () => {
      subscriptions = subscriptions.filter(s => s.id !== sub.id);
      saveData('subscriptions', subscriptions);
      renderFinanceBoard();
      showToast('Subscription removed');
    });
    subsList.appendChild(item);
  });
  }

  const displaySubTotal = isAnnualSubView ? (monthlySubTotal * 12) : monthlySubTotal;
  document.getElementById('subscriptionsMonthlyTotal').textContent = 
    `$${displaySubTotal.toFixed(2)}${isAnnualSubView ? '/yr' : '/mo'}`;

  // Category Budgets & Breakdown
  const catList = document.getElementById('categoryBarsList');
  catList.innerHTML = '';
  const sortedCategories = Object.entries(categoryTotals).sort((a, b) => b[1] - a[1]);
  if (sortedCategories.length === 0) {
    catList.innerHTML = `<div style="color:var(--text-muted);font-size:0.78rem;">No expense transactions logged.</div>`;
  } else {
    sortedCategories.forEach(([cat, amt]) => {
      const budgetCap = categoryBudgets[cat] || (amt * 1.3);
      const pct = Math.min(100, Math.round((amt / budgetCap) * 100));
      const isOver = amt > budgetCap;
      const barItem = document.createElement('div');
      barItem.className = 'cat-bar-item';
      barItem.innerHTML = `
        <div class="cat-bar-header">
          <span>${cat}</span>
          <span style="${isOver ? 'color:var(--danger);' : ''}">$${amt.toFixed(2)} / $${budgetCap.toFixed(0)} (${pct}%)</span>
        </div>
        <div class="cat-bar-track">
          <div class="cat-bar-fill ${isOver ? 'over-budget' : ''}" style="width: ${pct}%;"></div>
        </div>
      `;
      catList.appendChild(barItem);
    });
  }

  // Savings Vaults
  const vaultsList = document.getElementById('savingsGoalsList');
  vaultsList.innerHTML = '';
  savingsVaults.forEach(vault => {
    const pct = Math.min(100, Math.round((vault.current / vault.target) * 100));
    const item = document.createElement('div');
    item.className = 'vault-item';
    item.innerHTML = `
      <div class="vault-top">
        <span>${vault.name}</span>
        <span class="vault-amounts">$${vault.current.toLocaleString()} / $${vault.target.toLocaleString()} (${pct}%)</span>
      </div>
      <div class="cat-bar-track">
        <div class="cat-bar-fill" style="width: ${pct}%;"></div>
      </div>
    `;
    vaultsList.appendChild(item);
  });
};

// Quick Finance Entry Bar Handler
let quickEntryType = 'expense';
document.querySelectorAll('.qf-type-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.qf-type-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    quickEntryType = btn.dataset.type;
  });
});

document.getElementById('quickFinanceForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const desc = document.getElementById('qfDesc').value.trim();
  const amount = parseFloat(document.getElementById('qfAmount').value);
  const category = document.getElementById('qfCategory').value;
  if (!desc || isNaN(amount)) return;

  transactions.unshift({
    id: Date.now().toString(),
    type: quickEntryType,
    desc,
    amount,
    category,
    date: new Date().toISOString().slice(0, 10)
  });

  saveData('transactions', transactions);
  renderFinanceBoard();
  updateOverviewKPIs();
  document.getElementById('qfDesc').value = '';
  document.getElementById('qfAmount').value = '';
  showToast(`Logged $${amount.toFixed(2)} ${quickEntryType}`);
});

document.getElementById('toggleAnnualSubCostBtn').addEventListener('click', () => {
  isAnnualSubView = !isAnnualSubView;
  document.getElementById('toggleAnnualSubCostBtn').textContent = isAnnualSubView ? 'Monthly' : 'Annualize';
  renderFinanceBoard();
});

document.getElementById('openAddTransactionBtn').addEventListener('click', () => {
  document.getElementById('transactionForm').reset();
  document.getElementById('txDate').value = new Date().toISOString().slice(0, 10);
  document.getElementById('transactionDialog').showModal();
});
document.getElementById('closeTxDialogBtn').addEventListener('click', () => document.getElementById('transactionDialog').close());
document.getElementById('cancelTxBtn').addEventListener('click', () => document.getElementById('transactionDialog').close());

document.getElementById('transactionForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const type = document.querySelector('input[name="txType"]:checked').value;
  const desc = document.getElementById('txDescription').value.trim();
  const amount = parseFloat(document.getElementById('txAmount').value);
  const category = document.getElementById('txCategory').value;
  const date = document.getElementById('txDate').value;

  transactions.unshift({ id: Date.now().toString(), type, desc, amount, category, date });
  saveData('transactions', transactions);
  renderFinanceBoard();
  updateOverviewKPIs();
  document.getElementById('transactionDialog').close();
  showToast(`Recorded $${amount.toFixed(2)}`);
});

// Recurring Subscription Dialog
document.getElementById('openAddSubscriptionBtn').addEventListener('click', () => {
  document.getElementById('subscriptionForm').reset();
  document.getElementById('subscriptionDialog').showModal();
});
document.getElementById('closeSubDialogBtn').addEventListener('click', () => document.getElementById('subscriptionDialog').close());
document.getElementById('cancelSubBtn').addEventListener('click', () => document.getElementById('subscriptionDialog').close());

document.getElementById('subscriptionForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('subName').value.trim();
  const amount = parseFloat(document.getElementById('subAmount').value);
  const dayOfMonth = parseInt(document.getElementById('subCycle').value, 10) || 1;

  subscriptions.push({ id: Date.now().toString(), name, amount, dayOfMonth });
  saveData('subscriptions', subscriptions);
  renderFinanceBoard();
  document.getElementById('subscriptionDialog').close();
  showToast(`Added subscription: ${name}`);
});

// CSV Export
document.getElementById('exportFinanceCsvBtn').addEventListener('click', () => {
  let csv = 'Date,Description,Category,Type,Amount\n';
  transactions.forEach(t => {
    csv += `"${t.date}","${t.desc.replace(/"/g, '""')}","${t.category}","${t.type}",${t.amount}\n`;
  });
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `zenith-ledger-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('CSV exported');
});

// Budget Cap Setting
document.getElementById('editBudgetsBtn').addEventListener('click', () => {
  const cat = prompt('Enter Category name to set limit for (e.g. Food & Dining, Tech & Tools):');
  if (cat) {
    const limit = prompt(`Enter monthly budget cap for ${cat} ($):`);
    if (limit && !isNaN(limit)) {
      categoryBudgets[cat] = parseFloat(limit);
      saveData('categoryBudgets', categoryBudgets);
      renderFinanceBoard();
      showToast(`Budget cap for ${cat} updated to $${limit}`);
    }
  }
});

// Savings Goal Modal
document.getElementById('addSavingsGoalBtn').addEventListener('click', () => {
  document.getElementById('savingsGoalForm').reset();
  document.getElementById('savingsGoalDialog').showModal();
});
document.getElementById('closeSavingsGoalBtn').addEventListener('click', () => document.getElementById('savingsGoalDialog').close());
document.getElementById('cancelSavingsBtn').addEventListener('click', () => document.getElementById('savingsGoalDialog').close());

document.getElementById('savingsGoalForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('vaultName').value.trim();
  const target = parseFloat(document.getElementById('vaultTarget').value);
  const current = parseFloat(document.getElementById('vaultCurrent').value) || 0;

  savingsVaults.push({ id: Date.now().toString(), name, target, current });
  saveData('savingsVaults', savingsVaults);
  renderFinanceBoard();
  document.getElementById('savingsGoalDialog').close();
  showToast(`Created vault ${name}`);
});

// =============================================================================
// BOARD 3: PLANNER & HABITS (WEEKLY & KANBAN WITH INLINE TASK INPUTS)
// =============================================================================

const renderPlannerBoard = () => {
  // Habit Matrix
  const tbody = document.getElementById('habitTableBody');
  tbody.innerHTML = '';
  if (habits.length === 0) {
    tbody.innerHTML = `<tr><td colspan="10" class="empty-state-cell">No habits configured yet. Click "+ Add Habit" to start building your streak.</td></tr>`;
  } else {
  habits.forEach(habit => {
    const tr = document.createElement('tr');
    let daysHtml = '';
    for (let i = 0; i < 7; i++) {
      const isChecked = habit.days[i];
      daysHtml += `
        <td>
          <button class="habit-check-btn ${isChecked ? 'checked' : ''}" data-habit="${habit.id}" data-day="${i}">
            ${isChecked ? '✓' : ''}
          </button>
        </td>
      `;
    }

    tr.innerHTML = `
      <td class="habit-name-col">
        <span class="habit-tag-pill">${habit.category || 'Focus'}</span>
        ${habit.name}
      </td>
      ${daysHtml}
      <td><span class="streak-pill">${habit.streak || 0}d</span></td>
      <td><button class="todo-delete-btn habit-del-btn">&times;</button></td>
    `;

    tr.querySelectorAll('.habit-check-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const dIdx = parseInt(btn.dataset.day, 10);
        habit.days[dIdx] = !habit.days[dIdx];
        if (habit.days[dIdx]) habit.streak = (habit.streak || 0) + 1;
        saveData('habits', habits);
        renderPlannerBoard();
        updateOverviewKPIs();
      });
    });

    tr.querySelector('.habit-del-btn').addEventListener('click', () => {
      habits = habits.filter(h => h.id !== habit.id);
      saveData('habits', habits);
      renderPlannerBoard();
      updateOverviewKPIs();
    });

    tbody.appendChild(tr);
  });
  }

  // Weekly Planner View
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Weekend'];
  days.forEach(day => {
    const container = document.getElementById(`dayList-${day}`);
    container.innerHTML = '';
    const dayTasks = schedule[day] || [];
    dayTasks.forEach(task => {
      const item = document.createElement('div');
      item.className = 'day-task-item';
      item.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span>${task.text}</span>
          <button class="todo-delete-btn" style="font-size:0.75rem;">&times;</button>
        </div>
        ${task.time ? `<span class="day-task-time">${task.time}</span>` : ''}
      `;
      item.querySelector('.todo-delete-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        schedule[day] = schedule[day].filter(t => t.id !== task.id);
        saveData('schedule', schedule);
        renderPlannerBoard();
      });
      container.appendChild(item);
    });
  });

  // Kanban View
  ['backlog', 'in_progress', 'completed'].forEach(lane => {
    const laneContainer = document.getElementById(`kanbanLane-${lane}`);
    laneContainer.innerHTML = '';
    const items = kanbanTasks.filter(k => k.lane === lane);
    document.getElementById(`kanbanCount-${lane}`).textContent = items.length;

    if (items.length === 0) {
      laneContainer.innerHTML = `<div class="kanban-empty-lane">Lane is empty</div>`;
      return;
    }

    items.forEach(task => {
      const card = document.createElement('div');
      card.className = 'kanban-card';
      
      let nextActionHtml = '';
      if (lane === 'backlog') nextActionHtml = `<button class="btn-subtle move-btn" data-to="in_progress">Start →</button>`;
      else if (lane === 'in_progress') nextActionHtml = `<button class="btn-subtle move-btn" data-to="completed">Done ✓</button>`;
      
      card.innerHTML = `
        <div>${task.text}</div>
        <div class="kanban-card-actions">
          ${nextActionHtml}
          <button class="todo-delete-btn del-k-btn">&times;</button>
        </div>
      `;

      const moveBtn = card.querySelector('.move-btn');
      if (moveBtn) {
        moveBtn.addEventListener('click', () => {
          task.lane = moveBtn.dataset.to;
          saveData('kanbanTasks', kanbanTasks);
          renderPlannerBoard();
        });
      }

      card.querySelector('.del-k-btn').addEventListener('click', () => {
        kanbanTasks = kanbanTasks.filter(k => k.id !== task.id);
        saveData('kanbanTasks', kanbanTasks);
        renderPlannerBoard();
      });

      laneContainer.appendChild(card);
    });
  });
};

// Fast Inline Input for Day Columns
document.querySelectorAll('.quick-col-input').forEach(input => {
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const day = input.dataset.day;
      const text = input.value.trim();
      if (!text) return;
      if (!schedule[day]) schedule[day] = [];
      schedule[day].push({ id: Date.now().toString(), text });
      saveData('schedule', schedule);
      renderPlannerBoard();
      input.value = '';
    }
  });
});

// View Switcher (Weekly vs Kanban)
document.getElementById('viewToggleWeekly').addEventListener('click', () => {
  activePlannerView = 'weekly';
  document.getElementById('viewToggleWeekly').classList.add('active');
  document.getElementById('viewToggleKanban').classList.remove('active');
  document.getElementById('plannerWeeklyView').classList.remove('hidden');
  document.getElementById('plannerKanbanView').classList.add('hidden');
});

document.getElementById('viewToggleKanban').addEventListener('click', () => {
  activePlannerView = 'kanban';
  document.getElementById('viewToggleKanban').classList.add('active');
  document.getElementById('viewToggleWeekly').classList.remove('active');
  document.getElementById('plannerKanbanView').classList.remove('hidden');
  document.getElementById('plannerWeeklyView').classList.add('hidden');
});

document.querySelectorAll('.add-kanban-item-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const lane = btn.dataset.lane;
    const text = prompt(`Add item to ${lane}:`);
    if (text) {
      kanbanTasks.push({ id: Date.now().toString(), text, lane });
      saveData('kanbanTasks', kanbanTasks);
      renderPlannerBoard();
    }
  });
});

document.getElementById('addHabitBtn').addEventListener('click', () => {
  document.getElementById('habitForm').reset();
  document.getElementById('habitDialog').showModal();
});
document.getElementById('closeHabitDialogBtn').addEventListener('click', () => document.getElementById('habitDialog').close());
document.getElementById('cancelHabitBtn').addEventListener('click', () => document.getElementById('habitDialog').close());

document.getElementById('habitForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('habitName').value.trim();
  const category = document.getElementById('habitCategory').value;
  habits.push({ id: Date.now().toString(), name, category, days: [false, false, false, false, false, false, false], streak: 0 });
  saveData('habits', habits);
  renderPlannerBoard();
  updateOverviewKPIs();
  document.getElementById('habitDialog').close();
  showToast(`Added habit ${name}`);
});

document.querySelectorAll('.add-day-task-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetDay = btn.dataset.day;
    document.getElementById('dayTaskForm').reset();
    document.getElementById('dayTaskTargetDay').value = targetDay;
    document.getElementById('dayTaskDialogTitle').textContent = `Schedule: ${targetDay}`;
    document.getElementById('dayTaskDialog').showModal();
  });
});
document.getElementById('closeDayTaskBtn').addEventListener('click', () => document.getElementById('dayTaskDialog').close());
document.getElementById('cancelDayTaskBtn').addEventListener('click', () => document.getElementById('dayTaskDialog').close());

document.getElementById('dayTaskForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const targetDay = document.getElementById('dayTaskTargetDay').value;
  const text = document.getElementById('dayTaskText').value.trim();
  const time = document.getElementById('dayTaskTime').value;

  if (!schedule[targetDay]) schedule[targetDay] = [];
  schedule[targetDay].push({ id: Date.now().toString(), text, time });
  saveData('schedule', schedule);
  renderPlannerBoard();
  document.getElementById('dayTaskDialog').close();
  showToast(`Scheduled item`);
});

// =============================================================================
// BOARD 4: NOTES (MARKDOWN PREVIEW & PINNING)
// =============================================================================

let activeNoteTagFilter = 'all';

const parseMarkdown = (md) => {
  if (!md) return '';
  let html = md
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
    .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*)\*/gim, '<em>$1</em>')
    .replace(/`([^`]+)`/gim, '<code>$1</code>')
    .replace(/^- \[ \] (.*$)/gim, '<div><input type="checkbox" disabled> $1</div>')
    .replace(/^- \[x\] (.*$)/gim, '<div><input type="checkbox" checked disabled> <strike>$1</strike></div>')
    .replace(/^- (.*$)/gim, '<li>$1</li>')
    .replace(/\n$/gim, '<br />');
  return html.replace(/\n/g, '<br />');
};

const renderNotesBoard = () => {
  const feed = document.getElementById('notesListFeed');
  feed.innerHTML = '';
  const searchQ = (document.getElementById('notesSearchInput').value || '').toLowerCase();

  const sortedNotes = [...notes].sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));

  const filtered = sortedNotes.filter(n => {
    const matchesTag = activeNoteTagFilter === 'all' || n.tag === activeNoteTagFilter;
    const matchesSearch = n.title.toLowerCase().includes(searchQ) || n.body.toLowerCase().includes(searchQ);
    return matchesTag && matchesSearch;
  });

  if (filtered.length === 0) {
    feed.innerHTML = `<div class="empty-state-card-mini">No notes found. Click + to draft one.</div>`;
    loadActiveNote();
    return;
  }

  filtered.forEach(note => {
    const item = document.createElement('div');
    item.className = `note-feed-item ${note.id === activeNoteId ? 'active' : ''} ${note.pinned ? 'pinned' : ''}`;
    item.innerHTML = `
      <div class="note-feed-title">${note.pinned ? '• ' : ''}${note.title || 'Untitled'}</div>
      <div class="note-feed-preview">${note.body ? note.body.slice(0, 60).replace(/\n/g, ' ') : 'Empty...'}</div>
    `;
    item.addEventListener('click', () => {
      activeNoteId = note.id;
      renderNotesBoard();
      loadActiveNote();
    });
    feed.appendChild(item);
  });

  loadActiveNote();
};

const loadActiveNote = () => {
  const current = notes.find(n => n.id === activeNoteId);
  const titleInput = document.getElementById('activeNoteTitle');
  const bodyText = document.getElementById('activeNoteBody');
  const previewPane = document.getElementById('activeNotePreview');
  const tagSelect = document.getElementById('activeNoteTag');
  const countEl = document.getElementById('noteCharCount');
  const pinBtn = document.getElementById('togglePinNoteBtn');

  if (current) {
    titleInput.value = current.title;
    bodyText.value = current.body;
    previewPane.innerHTML = parseMarkdown(current.body);
    tagSelect.value = current.tag || 'personal';
    pinBtn.textContent = current.pinned ? 'Unpin' : 'Pin';
    const words = current.body.trim() ? current.body.trim().split(/\s+/).length : 0;
    countEl.textContent = `${current.body.length} characters • ${words} words`;
  } else if (notes.length > 0) {
    activeNoteId = notes[0].id;
    loadActiveNote();
  } else {
    titleInput.value = '';
    bodyText.value = '';
    previewPane.innerHTML = '';
    countEl.textContent = '0 characters • 0 words';
  }
};

document.getElementById('toggleMarkdownPreviewBtn').addEventListener('click', () => {
  isMarkdownPreview = !isMarkdownPreview;
  const textarea = document.getElementById('activeNoteBody');
  const previewPane = document.getElementById('activeNotePreview');
  const current = notes.find(n => n.id === activeNoteId);

  if (isMarkdownPreview) {
    textarea.classList.add('hidden');
    previewPane.classList.remove('hidden');
    previewPane.innerHTML = parseMarkdown(current ? current.body : '');
    document.getElementById('toggleMarkdownPreviewBtn').textContent = 'Edit';
  } else {
    textarea.classList.remove('hidden');
    previewPane.classList.add('hidden');
    document.getElementById('toggleMarkdownPreviewBtn').textContent = 'Preview';
  }
});

document.getElementById('togglePinNoteBtn').addEventListener('click', () => {
  const current = notes.find(n => n.id === activeNoteId);
  if (current) {
    current.pinned = !current.pinned;
    saveData('notes', notes);
    renderNotesBoard();
    showToast(current.pinned ? 'Note pinned' : 'Note unpinned');
  }
});

document.getElementById('activeNoteTitle').addEventListener('input', (e) => {
  const current = notes.find(n => n.id === activeNoteId);
  if (current) {
    current.title = e.target.value;
    current.updatedAt = new Date().toISOString();
    saveData('notes', notes);
    renderNotesFeedOnly();
  }
});

document.getElementById('activeNoteBody').addEventListener('input', (e) => {
  const current = notes.find(n => n.id === activeNoteId);
  if (current) {
    current.body = e.target.value;
    current.updatedAt = new Date().toISOString();
    saveData('notes', notes);
    const words = current.body.trim() ? current.body.trim().split(/\s+/).length : 0;
    document.getElementById('noteCharCount').textContent = `${current.body.length} characters • ${words} words`;
    renderNotesFeedOnly();
  }
});

document.getElementById('activeNoteTag').addEventListener('change', (e) => {
  const current = notes.find(n => n.id === activeNoteId);
  if (current) {
    current.tag = e.target.value;
    saveData('notes', notes);
    renderNotesBoard();
  }
});

const renderNotesFeedOnly = () => {
  document.querySelectorAll('.note-feed-item').forEach((item, idx) => {
    const current = notes[idx];
    if (current && current.id === activeNoteId) {
      item.querySelector('.note-feed-title').textContent = (current.pinned ? '• ' : '') + (current.title || 'Untitled');
      item.querySelector('.note-feed-preview').textContent = current.body.slice(0, 60).replace(/\n/g, ' ');
    }
  });
};

document.getElementById('createNewNoteBtn').addEventListener('click', () => {
  const newNote = {
    id: Date.now().toString(),
    title: 'Untitled Note',
    tag: activeNoteTagFilter === 'all' ? 'personal' : activeNoteTagFilter,
    body: '',
    pinned: false,
    updatedAt: new Date().toISOString()
  };
  notes.unshift(newNote);
  activeNoteId = newNote.id;
  saveData('notes', notes);
  renderNotesBoard();
  document.getElementById('activeNoteTitle').focus();
});

document.getElementById('deleteActiveNoteBtn').addEventListener('click', () => {
  if (confirm('Delete current note?')) {
    notes = notes.filter(n => n.id !== activeNoteId);
    activeNoteId = notes[0]?.id || null;
    saveData('notes', notes);
    renderNotesBoard();
    updateOverviewKPIs();
    showToast('Note deleted');
  }
});

document.querySelectorAll('.tag-pill').forEach(pill => {
  pill.addEventListener('click', () => {
    document.querySelectorAll('.tag-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    activeNoteTagFilter = pill.dataset.tag;
    renderNotesBoard();
  });
});

document.getElementById('notesSearchInput').addEventListener('input', renderNotesBoard);

// =============================================================================
// BOARD 5: LIFE GOALS (WITH BESPOKE CHECKBOXES)
// =============================================================================

const renderGoalsBoard = () => {
  const grid = document.getElementById('goalsGrid');
  grid.innerHTML = '';
  if (goals.length === 0) {
    grid.innerHTML = `
      <div class="empty-state-card full-span">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
        <h4>No goals defined yet</h4>
        <p>Outline high-impact milestones and strategic objectives.</p>
        <button class="btn-primary" onclick="document.getElementById('openAddGoalBtn').click()">+ Create First Goal</button>
      </div>
    `;
    return;
  }
  goals.forEach(goal => {
    const card = document.createElement('div');
    card.className = 'goal-card';
    
    const milestonesWrap = document.createElement('div');
    milestonesWrap.className = 'goal-milestones-list';

    if (goal.milestones && goal.milestones.length > 0) {
      goal.milestones.forEach(m => {
        const mRow = document.createElement('div');
        mRow.className = `milestone-item ${m.completed ? 'completed' : ''}`;

        const chk = createCustomCheckbox(m.completed, (isChecked) => {
          m.completed = isChecked;
          const completedCount = goal.milestones.filter(item => item.completed).length;
          goal.progress = Math.round((completedCount / goal.milestones.length) * 100);
          saveData('goals', goals);
          renderGoalsBoard();
          updateOverviewKPIs();
        });

        const span = document.createElement('span');
        span.textContent = m.text;

        mRow.appendChild(chk);
        mRow.appendChild(span);
        milestonesWrap.appendChild(mRow);
      });
    }

    card.innerHTML = `
      <div class="goal-top">
        <span class="goal-pillar-badge">${goal.category}</span>
        <button class="todo-delete-btn goal-del-btn">&times;</button>
      </div>
      <div class="goal-title">${goal.title}</div>
      <div class="goal-progress-bar-wrap">
        <div class="goal-progress-header">
          <span>Completion</span>
          <span style="font-weight:600; font-family:var(--font-mono);">${goal.progress}%</span>
        </div>
        <div class="goal-track">
          <div class="goal-fill" style="width: ${goal.progress}%;"></div>
        </div>
      </div>
    `;

    card.appendChild(milestonesWrap);

    const footer = document.createElement('div');
    footer.className = 'goal-footer';
    footer.innerHTML = `
      <span>Target: ${goal.deadline}</span>
      <button class="btn-subtle add-milestone-btn">+ Milestone</button>
    `;

    footer.querySelector('.add-milestone-btn').addEventListener('click', () => {
      const text = prompt('Enter Milestone title:');
      if (text) {
        if (!goal.milestones) goal.milestones = [];
        goal.milestones.push({ id: Date.now().toString(), text, completed: false });
        const completedCount = goal.milestones.filter(m => m.completed).length;
        goal.progress = Math.round((completedCount / goal.milestones.length) * 100);
        saveData('goals', goals);
        renderGoalsBoard();
      }
    });

    card.querySelector('.goal-del-btn').addEventListener('click', () => {
      goals = goals.filter(g => g.id !== goal.id);
      saveData('goals', goals);
      renderGoalsBoard();
      updateOverviewKPIs();
    });

    card.appendChild(footer);
    grid.appendChild(card);
  });
};

document.getElementById('openAddGoalBtn').addEventListener('click', () => {
  document.getElementById('goalForm').reset();
  document.getElementById('goalDialog').showModal();
});
document.getElementById('closeGoalDialogBtn').addEventListener('click', () => document.getElementById('goalDialog').close());
document.getElementById('cancelGoalBtn').addEventListener('click', () => document.getElementById('goalDialog').close());

document.getElementById('goalForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('goalTitle').value.trim();
  const category = document.getElementById('goalCategory').value;
  const progress = parseInt(document.getElementById('goalProgress').value, 10);
  const deadline = document.getElementById('goalDeadline').value;

  goals.push({ id: Date.now().toString(), title, category, progress, deadline, milestones: [] });
  saveData('goals', goals);
  renderGoalsBoard();
  updateOverviewKPIs();
  document.getElementById('goalDialog').close();
  showToast(`Goal logged: ${title}`);
});

// =============================================================================
// BOARD 6: LIBRARY & MEDIA VAULT
// =============================================================================

let activeLibraryFilter = 'all';

const renderLibraryBoard = () => {
  const grid = document.getElementById('libraryGrid');
  grid.innerHTML = '';

  const filtered = libraryItems.filter(item => {
    return activeLibraryFilter === 'all' || item.status === activeLibraryFilter;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state-card full-span">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
        <h4>No media items found</h4>
        <p>Keep track of books, papers, articles, and reading notes.</p>
        <button class="btn-primary" onclick="document.getElementById('openAddMediaBtn').click()">+ Add Media Item</button>
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'media-card';
    card.innerHTML = `
      <div class="media-top">
        <span class="media-status-badge">${item.status.replace('_', ' ')}</span>
        <button class="todo-delete-btn del-media-btn">&times;</button>
      </div>
      <div>
        <div class="media-title">${item.title}</div>
        <div class="media-author">${item.author}</div>
      </div>
      ${item.notes ? `<div class="media-takeaways">${item.notes}</div>` : ''}
      <div class="media-footer">
        <span>${item.progress || 'In Progress'}</span>
        <button class="btn-subtle update-progress-btn">Update</button>
      </div>
    `;

    card.querySelector('.update-progress-btn').addEventListener('click', () => {
      const newP = prompt('Update reading progress (e.g. Page 250 of 400):', item.progress);
      if (newP !== null) {
        item.progress = newP;
        saveData('libraryItems', libraryItems);
        renderLibraryBoard();
      }
    });

    card.querySelector('.del-media-btn').addEventListener('click', () => {
      libraryItems = libraryItems.filter(i => i.id !== item.id);
      saveData('libraryItems', libraryItems);
      renderLibraryBoard();
      showToast('Item removed');
    });

    grid.appendChild(card);
  });
};

document.querySelectorAll('#libraryFilterPills .tag-pill').forEach(pill => {
  pill.addEventListener('click', () => {
    document.querySelectorAll('#libraryFilterPills .tag-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    activeLibraryFilter = pill.dataset.status;
    renderLibraryBoard();
  });
});

document.getElementById('openAddMediaBtn').addEventListener('click', () => {
  document.getElementById('mediaForm').reset();
  document.getElementById('mediaDialog').showModal();
});
document.getElementById('closeMediaDialogBtn').addEventListener('click', () => document.getElementById('mediaDialog').close());
document.getElementById('cancelMediaBtn').addEventListener('click', () => document.getElementById('mediaDialog').close());

document.getElementById('mediaForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('mediaTitle').value.trim();
  const author = document.getElementById('mediaAuthor').value.trim();
  const status = document.getElementById('mediaStatus').value;
  const progress = document.getElementById('mediaProgress').value.trim();
  const notes = document.getElementById('mediaNotes').value.trim();

  libraryItems.push({ id: Date.now().toString(), title, author, status, progress, notes });
  saveData('libraryItems', libraryItems);
  renderLibraryBoard();
  document.getElementById('mediaDialog').close();
  showToast(`Added ${title}`);
});

// =============================================================================
// BOARD 7: HEALTH & WELLNESS (1-CLICK WORKOUT LOGGER)
// =============================================================================

const renderHealthBoard = () => {
  // Water
  document.getElementById('waterCurrentVal').textContent = `${healthData.waterCurrent} ml`;
  const waterPct = Math.min(100, Math.round((healthData.waterCurrent / healthData.waterTarget) * 100));
  document.getElementById('waterFillBar').style.width = `${waterPct}%`;

  // Sleep
  document.getElementById('sleepHoursVal').textContent = `${healthData.sleepHours} hrs`;

  // Workouts Table
  const tbody = document.getElementById('workoutTableBody');
  tbody.innerHTML = '';
  if (healthData.workouts.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="empty-state-cell">No workout sessions logged yet today. Tap any preset button above to record in 1 click.</td></tr>`;
  } else {
    healthData.workouts.forEach(w => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${w.date}</td>
        <td style="font-weight: 500;">${w.type}</td>
        <td style="font-family: var(--font-mono);">${w.duration}</td>
        <td style="color: var(--text-secondary);">${w.notes || '-'}</td>
        <td><button class="todo-delete-btn del-w-btn">&times;</button></td>
      `;
      tr.querySelector('.del-w-btn').addEventListener('click', () => {
        healthData.workouts = healthData.workouts.filter(item => item.id !== w.id);
        saveData('healthData', healthData);
        renderHealthBoard();
      });
      tbody.appendChild(tr);
    });
  }
};

// 1-Click Fast Workout Preset Buttons
document.querySelectorAll('.workout-preset-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const type = btn.dataset.type;
    const duration = btn.dataset.dur;
    const date = new Date().toISOString().slice(0, 10);

    healthData.workouts.unshift({
      id: Date.now().toString(),
      date,
      type,
      duration,
      notes: 'Logged via 1-click preset'
    });

    saveData('healthData', healthData);
    renderHealthBoard();
    showToast(`Logged session: ${type} (${duration})`);
  });
});

document.getElementById('addWater250Btn').addEventListener('click', () => {
  healthData.waterCurrent += 250;
  saveData('healthData', healthData);
  renderHealthBoard();
  updateOverviewKPIs();
});

document.getElementById('addWater500Btn').addEventListener('click', () => {
  healthData.waterCurrent += 500;
  saveData('healthData', healthData);
  renderHealthBoard();
  updateOverviewKPIs();
});

document.getElementById('resetWaterBtn').addEventListener('click', () => {
  healthData.waterCurrent = 0;
  saveData('healthData', healthData);
  renderHealthBoard();
  updateOverviewKPIs();
});

document.getElementById('logSleepBtn').addEventListener('click', () => {
  const hours = prompt('Hours of sleep last night:', healthData.sleepHours);
  if (hours && !isNaN(hours)) {
    healthData.sleepHours = parseFloat(hours);
    saveData('healthData', healthData);
    renderHealthBoard();
    showToast(`Logged ${hours}h sleep`);
  }
});

document.getElementById('openLogWorkoutBtn').addEventListener('click', () => {
  document.getElementById('workoutForm').reset();
  document.getElementById('workoutDialog').showModal();
});
document.getElementById('closeWorkoutDialogBtn').addEventListener('click', () => document.getElementById('workoutDialog').close());
document.getElementById('cancelWorkoutBtn').addEventListener('click', () => document.getElementById('workoutDialog').close());

document.getElementById('workoutForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const type = document.getElementById('workoutType').value;
  const duration = document.getElementById('workoutDuration').value.trim();
  const notes = document.getElementById('workoutNotes').value.trim();
  const date = new Date().toISOString().slice(0, 10);

  healthData.workouts.unshift({ id: Date.now().toString(), date, type, duration, notes });
  saveData('healthData', healthData);
  renderHealthBoard();
  document.getElementById('workoutDialog').close();
  showToast(`Recorded training session`);
});

// =============================================================================
// BOARD 8: PROJECTS & DEV ROADMAP
// =============================================================================

const renderProjectsBoard = () => {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = '';
  if (projects.length === 0) {
    grid.innerHTML = `
      <div class="empty-state-card full-span">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
        <h4>No projects tracked</h4>
        <p>Catalog side projects, client builds, and technical roadmaps here.</p>
        <button class="btn-primary" onclick="document.getElementById('openAddProjectBtn').click()">+ Add Project</button>
      </div>
    `;
    return;
  }
  projects.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    let stackHtml = '';
    if (proj.stack && proj.stack.length > 0) {
      proj.stack.forEach(tech => {
        stackHtml += `<span class="stack-pill">${tech.trim()}</span>`;
      });
    }

    card.innerHTML = `
      <div class="project-top">
        <span class="project-status-badge">${proj.status}</span>
        <button class="todo-delete-btn del-proj-btn">&times;</button>
      </div>
      <div class="project-name">${proj.name}</div>
      ${stackHtml ? `<div class="project-stack-row">${stackHtml}</div>` : ''}
      <div class="project-footer">
        ${proj.url ? `<a href="${proj.url}" target="_blank" class="project-link">Open Project ↗</a>` : '<span>Internal</span>'}
        <button class="btn-subtle update-proj-btn">Status</button>
      </div>
    `;

    card.querySelector('.update-proj-btn').addEventListener('click', () => {
      const statuses = ['concept', 'development', 'shipped', 'paused'];
      const nextIdx = (statuses.indexOf(proj.status) + 1) % statuses.length;
      proj.status = statuses[nextIdx];
      saveData('projects', projects);
      renderProjectsBoard();
    });

    card.querySelector('.del-proj-btn').addEventListener('click', () => {
      projects = projects.filter(p => p.id !== proj.id);
      saveData('projects', projects);
      renderProjectsBoard();
      showToast('Project removed');
    });

    grid.appendChild(card);
  });
};

document.getElementById('openAddProjectBtn').addEventListener('click', () => {
  document.getElementById('projectForm').reset();
  document.getElementById('projectDialog').showModal();
});
document.getElementById('closeProjectDialogBtn').addEventListener('click', () => document.getElementById('projectDialog').close());
document.getElementById('cancelProjectBtn').addEventListener('click', () => document.getElementById('projectDialog').close());

document.getElementById('projectForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('projName').value.trim();
  const status = document.getElementById('projStatus').value;
  const stack = document.getElementById('projStack').value.split(',').filter(s => s.trim() !== '');
  const url = document.getElementById('projUrl').value.trim();

  projects.push({ id: Date.now().toString(), name, status, stack, url });
  saveData('projects', projects);
  renderProjectsBoard();
  document.getElementById('projectDialog').close();
  showToast(`Added project ${name}`);
});

// =============================================================================
// WEATHER (Clean SVG icon, Free Open-Meteo)
// =============================================================================

const updateWeatherSvg = (code) => {
  const svg = document.getElementById('weatherSvg');
  if (!svg) return;
  if (code === 0 || code === 1) {
    svg.innerHTML = `<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>`;
  } else if (code >= 51 && code <= 65) {
    svg.innerHTML = `<line x1="16" y1="13" x2="16" y2="21"/><line x1="8" y1="13" x2="8" y2="21"/><line x1="12" y1="15" x2="12" y2="23"/><path d="M20 16.58A5 5 0 0018 7h-1.26A8 8 0 104 15.25"/>`;
  } else {
    svg.innerHTML = `<path d="M17.5 19H9a7 7 0 116.71-9h1.79a4.5 4.5 0 110 9z"/>`;
  }
};

const fetchWeather = async (lat, lon, cityName = 'Local') => {
  try {
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&timezone=auto`);
    if (!res.ok) throw new Error();
    const data = await res.json();
    const temp = Math.round(data.current.temperature_2m);
    const code = data.current.weather_code;

    document.getElementById('weatherTemp').textContent = `${temp}°C`;
    document.getElementById('weatherCity').textContent = cityName;
    updateWeatherSvg(code);
  } catch (e) {
    document.getElementById('weatherTemp').textContent = '21°C';
    document.getElementById('weatherCity').textContent = 'Nearby';
    updateWeatherSvg(0);
  }
};

const initWeather = () => {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      pos => fetchWeather(pos.coords.latitude, pos.coords.longitude, 'Nearby'),
      () => fetchWeather(51.5074, -0.1278, 'London')
    );
  } else {
    fetchWeather(51.5074, -0.1278, 'London');
  }
};

document.getElementById('weatherWidget').addEventListener('click', initWeather);
initWeather();

// =============================================================================
// PREFERENCES, BOARD VISIBILITY & BACKUP
// =============================================================================

const renderBoardToggles = () => {
  const container = document.getElementById('boardTogglesGrid');
  container.innerHTML = '';

  BOARD_DEFINITIONS.forEach(def => {
    if (def.alwaysEnabled) return;

    const item = document.createElement('div');
    item.className = 'board-toggle-item';
    const isChecked = settings.enabledBoards[def.id] !== false;

    item.innerHTML = `
      <span>${def.label}</span>
      <input type="checkbox" class="zenith-toggle board-vis-chk" data-bid="${def.id}" ${isChecked ? 'checked' : ''}>
    `;

    item.querySelector('.board-vis-chk').addEventListener('change', (e) => {
      settings.enabledBoards[def.id] = e.target.checked;
      saveData('settings', settings);
      renderSidebarNav();
      if (!e.target.checked && currentActiveBoard === def.id) {
        switchBoard('overview');
      }
      showToast(`${def.label} board ${e.target.checked ? 'enabled' : 'disabled'}`);
    });

    container.appendChild(item);
  });
};

const applyTheme = (themeName) => {
  settings.theme = themeName;
  document.body.setAttribute('data-theme', themeName);
  saveData('settings', settings);
};

document.querySelectorAll('.theme-option').forEach(btn => {
  btn.addEventListener('click', () => {
    applyTheme(btn.dataset.themeVal);
    showToast(`Theme updated`);
  });
});

const f24 = document.getElementById('format24hToggle');
f24.checked = settings.format24h;
f24.addEventListener('change', () => {
  settings.format24h = f24.checked;
  saveData('settings', settings);
  updateClock();
});

const secToggle = document.getElementById('showSecondsToggle');
secToggle.checked = settings.showSeconds;
secToggle.addEventListener('change', () => {
  settings.showSeconds = secToggle.checked;
  saveData('settings', settings);
  updateClock();
});

document.getElementById('openSettingsBtn').addEventListener('click', () => {
  renderBoardToggles();
  document.getElementById('settingsDialog').showModal();
});
document.getElementById('closeSettingsDialogBtn').addEventListener('click', () => document.getElementById('settingsDialog').close());

// Focus Mode
document.getElementById('focusModeBtn').addEventListener('click', () => {
  document.body.classList.toggle('focus-mode');
  showToast(document.body.classList.contains('focus-mode') ? 'Focus Mode active (Esc to exit)' : 'Normal mode');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && document.body.classList.contains('focus-mode')) {
    document.body.classList.remove('focus-mode');
  }
});

// JSON Export
document.getElementById('exportDataBtn').addEventListener('click', () => {
  const fullBackup = {
    settings, shortcuts, todos, transactions, subscriptions, categoryBudgets,
    savingsVaults, habits, schedule, kanbanTasks, notes, goals, libraryItems,
    healthData, projects,
    exportedAt: new Date().toISOString()
  };
  const blob = new Blob([JSON.stringify(fullBackup, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `zenith-data-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('JSON export downloaded');
});

// JSON Import
document.getElementById('importDataInput').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const data = JSON.parse(event.target.result);
      if (data.settings) settings = data.settings;
      if (data.shortcuts) shortcuts = data.shortcuts;
      if (data.todos) todos = data.todos;
      if (data.transactions) transactions = data.transactions;
      if (data.subscriptions) subscriptions = data.subscriptions;
      if (data.categoryBudgets) categoryBudgets = data.categoryBudgets;
      if (data.savingsVaults) savingsVaults = data.savingsVaults;
      if (data.habits) habits = data.habits;
      if (data.schedule) schedule = data.schedule;
      if (data.kanbanTasks) kanbanTasks = data.kanbanTasks;
      if (data.notes) notes = data.notes;
      if (data.goals) goals = data.goals;
      if (data.libraryItems) libraryItems = data.libraryItems;
      if (data.healthData) healthData = data.healthData;
      if (data.projects) projects = data.projects;

      saveData('settings', settings);
      saveData('shortcuts', shortcuts);
      saveData('todos', todos);
      saveData('transactions', transactions);
      saveData('subscriptions', subscriptions);
      saveData('categoryBudgets', categoryBudgets);
      saveData('savingsVaults', savingsVaults);
      saveData('habits', habits);
      saveData('schedule', schedule);
      saveData('kanbanTasks', kanbanTasks);
      saveData('notes', notes);
      saveData('goals', goals);
      saveData('libraryItems', libraryItems);
      saveData('healthData', healthData);
      saveData('projects', projects);

      location.reload();
    } catch (err) {
      showToast('Invalid JSON file format');
    }
  };
  reader.readAsText(file);
});

// Restore Demo Data (reloads seed defaults)
document.getElementById('resetDemoBtn').addEventListener('click', () => {
  if (confirm('Restore the demo dataset? Your current data will be replaced.')) {
    localStorage.clear();
    location.reload();
  }
});

// Clear All Data (blank slate)
document.getElementById('clearAllBtn').addEventListener('click', () => {
  if (confirm('Permanently erase ALL data and start with a blank workspace?')) {
    // Save blank arrays for everything so defaults don't reload
    const blankSettings = { ...DEFAULT_SETTINGS };
    const blankKeys = {
      settings: blankSettings,
      shortcuts: [],
      todos: [],
      transactions: [],
      subscriptions: [],
      categoryBudgets: {},
      savingsVaults: [],
      habits: [],
      schedule: { Mon: [], Tue: [], Wed: [], Thu: [], Fri: [], Weekend: [] },
      kanbanTasks: [],
      notes: [],
      goals: [],
      libraryItems: [],
      healthData: { waterCurrent: 0, waterTarget: 2500, sleepHours: 0, workouts: [] },
      projects: []
    };
    Object.entries(blankKeys).forEach(([key, val]) => {
      localStorage.setItem(`zenith_${key}`, JSON.stringify(val));
    });
    location.reload();
  }
});

// =============================================================================
// SIDEBAR TOGGLE (Ctrl+B)
// =============================================================================

document.getElementById('toggleSidebarBtn').addEventListener('click', () => {
  document.body.classList.toggle('sidebar-collapsed');
  // On mobile, toggle the drawer
  if (window.innerWidth <= 850) {
    document.body.classList.toggle('sidebar-mobile-open');
  }
});

document.getElementById('sidebarBackdrop').addEventListener('click', () => {
  document.body.classList.remove('sidebar-mobile-open');
});

// =============================================================================
// KEYBOARD SHORTCUTS CHEATSHEET (?)
// =============================================================================

document.getElementById('openShortcutsBtn').addEventListener('click', () => {
  document.getElementById('shortcutsHelpModal').showModal();
});
document.getElementById('closeShortcutsModalBtn').addEventListener('click', () => {
  document.getElementById('shortcutsHelpModal').close();
});

// =============================================================================
// GLOBAL KEYBOARD SHORTCUTS
// =============================================================================

document.addEventListener('keydown', (e) => {
  const tag = document.activeElement.tagName;
  const isTyping = tag === 'INPUT' || tag === 'TEXTAREA' || document.activeElement.isContentEditable;

  // Ctrl+B — toggle sidebar
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') {
    e.preventDefault();
    document.getElementById('toggleSidebarBtn').click();
    return;
  }

  // Skip other shortcuts when actively typing
  if (isTyping) return;

  // ? — open shortcuts cheatsheet
  if (e.key === '?' && !e.ctrlKey && !e.metaKey) {
    e.preventDefault();
    document.getElementById('shortcutsHelpModal').showModal();
    return;
  }

  // Alt+1-8 — jump to boards
  if (e.altKey && e.key >= '1' && e.key <= '8') {
    e.preventDefault();
    const boardIds = ['overview', 'finance', 'planner', 'notes', 'goals', 'library', 'health', 'projects'];
    const idx = parseInt(e.key, 10) - 1;
    if (idx < boardIds.length) {
      const boardId = boardIds[idx];
      if (boardId === 'overview' || settings.enabledBoards[boardId]) {
        switchBoard(boardId);
        showToast(`Jumped to ${BOARD_DEFINITIONS.find(b => b.id === boardId)?.label || boardId}`);
      }
    }
    return;
  }
});

// =============================================================================
// DIALOG OUTSIDE-CLICK DISMISSAL (Cross-browser closedby="any" fallback)
// =============================================================================

document.querySelectorAll('dialog.modal-dialog').forEach(dialog => {
  dialog.addEventListener('click', (e) => {
    // If the user clicked the dialog backdrop (outside the dialog-content box)
    if (e.target === dialog) {
      dialog.close();
    }
  });
});

// =============================================================================
// INIT
// =============================================================================

const initApp = () => {
  applyTheme(settings.theme || 'dark-obsidian');
  renderSidebarNav();
  renderBoardToggles();
  updateSearchUI();
  renderShortcuts();
  renderOverviewTodos();
  updateTimerUI();
  updateOverviewKPIs();
  renderFinanceBoard();
  renderPlannerBoard();
  renderNotesBoard();
  renderGoalsBoard();
  renderLibraryBoard();
  renderHealthBoard();
  renderProjectsBoard();
};

initApp();
