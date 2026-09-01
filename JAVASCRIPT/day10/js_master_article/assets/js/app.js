// Shared Application Logic for JavaScript Master Guide

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initReadingProgress();
  initCopyCodeButtons();
  initSearch();
  initMobileSidebar();
  initTableOfContents();
  initLiveRunner();
});

/* ==========================================================================
   1. Theme Management (Dark / Light)
   ========================================================================== */
function initTheme() {
  const themeToggleButtons = document.querySelectorAll('.theme-toggle-btn');
  const storedTheme = localStorage.getItem('js-docs-theme') || 'light';

  applyTheme(storedTheme);

  themeToggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('js-docs-theme', newTheme);
    });
  });
}

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

/* ==========================================================================
   2. Reading Progress Indicator
   ========================================================================== */
function initReadingProgress() {
  const progressBar = document.getElementById('reading-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;
    const progress = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  });
}

/* ==========================================================================
   3. One-Click Copy Code Snippets
   ========================================================================== */
function initCopyCodeButtons() {
  const codeBlocks = document.querySelectorAll('pre');

  codeBlocks.forEach((pre) => {
    // Avoid double buttons
    if (pre.querySelector('.copy-btn')) return;

    // Create wrapper button
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn absolute top-3 right-3 px-2.5 py-1.5 text-xs font-semibold rounded-md bg-slate-800/80 hover:bg-amber-500 hover:text-slate-950 text-slate-300 border border-slate-700 backdrop-blur-md transition-all duration-200 flex items-center gap-1.5 z-10';
    copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i><span>Copy</span>';

    pre.appendChild(copyBtn);

    copyBtn.addEventListener('click', async () => {
      const codeElement = pre.querySelector('code');
      const textToCopy = codeElement ? codeElement.innerText : pre.innerText;

      try {
        await navigator.clipboard.writeText(textToCopy);
        copyBtn.innerHTML = '<i class="fa-solid fa-check text-emerald-400"></i><span class="text-emerald-400">Copied!</span>';
        copyBtn.classList.add('border-emerald-500/50');
        showToast('Code copied to clipboard!', 'success');

        setTimeout(() => {
          copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i><span>Copy</span>';
          copyBtn.classList.remove('border-emerald-500/50');
        }, 2000);
      } catch (err) {
        showToast('Failed to copy code.', 'error');
      }
    });

    // Add Live Run Button if applicable
    const codeElement = pre.querySelector('code');
    if (codeElement && (codeElement.classList.contains('language-js') || codeElement.classList.contains('language-javascript') || !codeElement.className)) {
      const runBtn = document.createElement('button');
      runBtn.className = 'run-code-btn absolute top-3 right-20 px-2.5 py-1.5 text-xs font-semibold rounded-md bg-emerald-600/90 hover:bg-emerald-500 text-white shadow-sm transition-all duration-200 flex items-center gap-1.5 z-10';
      runBtn.innerHTML = '<i class="fa-solid fa-play text-[10px]"></i><span>Run</span>';

      runBtn.addEventListener('click', () => {
        const code = codeElement.innerText;
        openCodeRunnerModal(code);
      });

      pre.appendChild(runBtn);
    }
  });
}

/* ==========================================================================
   4. Live Interactive JS Code Runner Modal
   ========================================================================== */
function initLiveRunner() {
  if (document.getElementById('live-runner-modal')) return;

  const modalHtml = `
    <div id="live-runner-modal" class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md hidden flex items-center justify-center p-4">
      <div class="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        <!-- Modal Header -->
        <div class="px-5 py-3.5 bg-slate-800/80 border-b border-slate-700/60 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
            <span class="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
            <span class="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
            <span class="ml-2 text-sm font-bold text-slate-200 flex items-center gap-2 font-mono">
              <i class="fa-brands fa-square-js text-amber-400"></i> Interactive JS Console
            </span>
          </div>
          <div class="flex items-center gap-2">
            <button id="execute-code-btn" class="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg flex items-center gap-1.5 transition">
              <i class="fa-solid fa-play"></i> Execute
            </button>
            <button id="clear-console-btn" class="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 font-medium text-xs rounded-lg flex items-center gap-1.5 transition">
              <i class="fa-solid fa-trash-can"></i> Clear
            </button>
            <button id="close-runner-btn" class="text-slate-400 hover:text-white p-1 rounded-lg transition ml-2">
              <i class="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>
        </div>

        <!-- Code Editor Area -->
        <div class="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800 flex-1 overflow-hidden">
          <div class="flex flex-col p-3 bg-slate-950">
            <label class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 font-mono flex items-center justify-between">
              <span>Code Editor</span>
              <span class="text-[10px] text-slate-500">Edit and run</span>
            </label>
            <textarea id="runner-code-input" class="w-full flex-1 min-h-[220px] bg-slate-900/90 text-amber-300 font-mono text-xs p-3 rounded-lg border border-slate-800 focus:outline-none focus:border-amber-500 resize-none" spellcheck="false"></textarea>
          </div>

          <!-- Console Output Area -->
          <div class="flex flex-col p-3 bg-slate-900/60 overflow-hidden">
            <label class="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1 font-mono flex items-center justify-between">
              <span>Console Output</span>
              <span id="execution-time" class="text-[10px] text-slate-500">Ready</span>
            </label>
            <div id="runner-console-output" class="w-full flex-1 min-h-[220px] max-h-[350px] overflow-y-auto bg-black/70 p-3 rounded-lg border border-slate-800/80 font-mono text-xs text-slate-200 space-y-1">
              <div class="text-slate-500 italic">// Click "Execute" to run JavaScript code...</div>
            </div>
          </div>
        </div>

        <!-- Modal Footer -->
        <div class="px-5 py-2.5 bg-slate-950 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
          <span class="flex items-center gap-1.5"><i class="fa-solid fa-circle-info text-amber-400"></i> Runs safely in isolated sandboxed scope</span>
          <span class="text-[11px] text-slate-500">Shortcut: Press <kbd class="px-1.5 py-0.5 bg-slate-800 text-slate-300 rounded border border-slate-700">ESC</kbd> to close</span>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  const modal = document.getElementById('live-runner-modal');
  const closeBtn = document.getElementById('close-runner-btn');
  const executeBtn = document.getElementById('execute-code-btn');
  const clearBtn = document.getElementById('clear-console-btn');
  const codeInput = document.getElementById('runner-code-input');
  const consoleOutput = document.getElementById('runner-console-output');
  const executionTime = document.getElementById('execution-time');

  closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden');
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
    }
  });

  clearBtn.addEventListener('click', () => {
    consoleOutput.innerHTML = '<div class="text-slate-500 italic">// Console cleared</div>';
  });

  executeBtn.addEventListener('click', () => {
    executeSandboxedCode(codeInput.value, consoleOutput, executionTime);
  });
}

function openCodeRunnerModal(code) {
  const modal = document.getElementById('live-runner-modal');
  const codeInput = document.getElementById('runner-code-input');
  const consoleOutput = document.getElementById('runner-console-output');
  const executionTime = document.getElementById('execution-time');

  if (!modal) return;
  codeInput.value = code.trim();
  consoleOutput.innerHTML = '';
  modal.classList.remove('hidden');
  executeSandboxedCode(code, consoleOutput, executionTime);
}

function executeSandboxedCode(code, outputEl, timeEl) {
  outputEl.innerHTML = '';
  const startTime = performance.now();

  const logs = [];
  const customConsole = {
    log: (...args) => logs.push({ type: 'log', text: formatConsoleArgs(args) }),
    error: (...args) => logs.push({ type: 'error', text: formatConsoleArgs(args) }),
    warn: (...args) => logs.push({ type: 'warn', text: formatConsoleArgs(args) }),
    info: (...args) => logs.push({ type: 'info', text: formatConsoleArgs(args) }),
    table: (data) => logs.push({ type: 'table', text: JSON.stringify(data, null, 2) })
  };

  try {
    const sandbox = new Function('console', `
      try {
        ${code}
      } catch(err) {
        console.error(err.name + ': ' + err.message);
      }
    `);
    sandbox(customConsole);

    const endTime = performance.now();
    timeEl.innerText = `${(endTime - startTime).toFixed(2)} ms`;

    if (logs.length === 0) {
      outputEl.innerHTML = '<div class="text-slate-500 italic">// Code executed successfully (No console output returned)</div>';
    } else {
      logs.forEach(log => {
        const item = document.createElement('div');
        if (log.type === 'error') {
          item.className = 'text-red-400 bg-red-950/40 px-2 py-1 rounded border-l-2 border-red-500 whitespace-pre-wrap';
          item.innerHTML = `<i class="fa-solid fa-triangle-exclamation mr-1.5 text-xs"></i>${escapeHtml(log.text)}`;
        } else if (log.type === 'warn') {
          item.className = 'text-amber-300 bg-amber-950/30 px-2 py-1 rounded border-l-2 border-amber-500 whitespace-pre-wrap';
          item.innerHTML = `<i class="fa-solid fa-circle-exclamation mr-1.5 text-xs"></i>${escapeHtml(log.text)}`;
        } else if (log.type === 'table') {
          item.className = 'text-cyan-300 bg-slate-950 p-2 rounded whitespace-pre font-mono text-[11px]';
          item.innerText = log.text;
        } else {
          item.className = 'text-emerald-300 whitespace-pre-wrap py-0.5 flex items-start gap-1.5';
          item.innerHTML = `<span class="text-slate-500 select-none">›</span><span>${escapeHtml(log.text)}</span>`;
        }
        outputEl.appendChild(item);
      });
    }
  } catch (err) {
    outputEl.innerHTML = `<div class="text-red-400 bg-red-950/50 p-2 rounded border border-red-500/50"><i class="fa-solid fa-skull mr-1.5"></i>Compilation Error: ${escapeHtml(err.message)}</div>`;
  }
}

function formatConsoleArgs(args) {
  return args.map(arg => {
    if (arg === null) return 'null';
    if (arg === undefined) return 'undefined';
    if (typeof arg === 'object') {
      try {
        return JSON.stringify(arg, null, 2);
      } catch (e) {
        return String(arg);
      }
    }
    return String(arg);
  }).join(' ');
}

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, function(m) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[m];
  });
}

/* ==========================================================================
   5. Quick Search Modal (Ctrl+K or button)
   ========================================================================== */
function initSearch() {
  const searchTriggers = document.querySelectorAll('.search-trigger-btn');
  
  const searchModalHtml = `
    <div id="search-modal" class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md hidden flex items-start justify-center pt-16 md:pt-24 px-4">
      <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in duration-150">
        <!-- Input -->
        <div class="relative flex items-center px-4 py-3 border-b border-slate-200 dark:border-slate-800">
          <i class="fa-solid fa-magnifying-glass text-slate-400 mr-3 text-base"></i>
          <input id="search-input" type="text" placeholder="Search JavaScript concepts (e.g. TDZ, Hoisting, Closure, Spread)..." class="w-full bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none text-base">
          <button id="close-search-btn" class="text-slate-400 hover:text-slate-600 dark:hover:text-white p-1 text-sm rounded-lg">
            <kbd class="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded text-xs">ESC</kbd>
          </button>
        </div>

        <!-- Search Results List -->
        <div id="search-results" class="max-h-[60vh] overflow-y-auto p-3 space-y-2 divide-y divide-slate-100 dark:divide-slate-800/60">
          <div class="text-center py-8 text-slate-400 text-sm">
            <i class="fa-solid fa-bolt text-amber-500 text-2xl mb-2"></i>
            <p>Type any keyword to instantly search 8 deep chapters...</p>
          </div>
        </div>

        <!-- Search Footer -->
        <div class="px-4 py-2.5 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span><kbd class="font-mono bg-slate-200 dark:bg-slate-800 px-1 rounded">↑</kbd> <kbd class="font-mono bg-slate-200 dark:bg-slate-800 px-1 rounded">↓</kbd> to navigate</span>
            <span><kbd class="font-mono bg-slate-200 dark:bg-slate-800 px-1 rounded">↵</kbd> to select</span>
          </div>
          <span>8 Chapters Indexed</span>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', searchModalHtml);

  const modal = document.getElementById('search-modal');
  const input = document.getElementById('search-input');
  const resultsContainer = document.getElementById('search-results');
  const closeBtn = document.getElementById('close-search-btn');

  const openSearch = () => {
    modal.classList.remove('hidden');
    input.value = '';
    input.focus();
    renderSearchResults('');
  };

  const closeSearch = () => {
    modal.classList.add('hidden');
  };

  searchTriggers.forEach(btn => btn.addEventListener('click', openSearch));
  closeBtn.addEventListener('click', closeSearch);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeSearch();
  });

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (modal.classList.contains('hidden')) {
        openSearch();
      } else {
        closeSearch();
      }
    }
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeSearch();
    }
  });

  input.addEventListener('input', (e) => {
    renderSearchResults(e.target.value);
  });
}

function renderSearchResults(query) {
  const container = document.getElementById('search-results');
  const trimmed = query.trim().toLowerCase();

  if (!window.DOCS_SEARCH_INDEX || !Array.isArray(window.DOCS_SEARCH_INDEX)) {
    container.innerHTML = '<div class="p-4 text-center text-slate-400">Search index loading...</div>';
    return;
  }

  if (!trimmed) {
    // Show quick suggestions
    const suggestions = window.DOCS_SEARCH_INDEX.slice(0, 6);
    container.innerHTML = `
      <div class="px-2 py-1 text-xs font-bold text-slate-400 uppercase tracking-wider">Quick Suggestions</div>
      <div class="space-y-1">
        ${suggestions.map(item => `
          <a href="${item.url}" class="block p-2.5 rounded-xl hover:bg-amber-500/10 hover:border-amber-500/30 border border-transparent transition group">
            <div class="flex items-center justify-between">
              <div class="font-semibold text-slate-800 dark:text-slate-100 group-hover:text-amber-500 text-sm">${item.title}</div>
              <span class="text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:bg-amber-500/20 group-hover:text-amber-400">${item.chapter}</span>
            </div>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">${item.snippet}</p>
          </a>
        `).join('')}
      </div>
    `;
    return;
  }

  const matches = window.DOCS_SEARCH_INDEX.filter(item => {
    return item.title.toLowerCase().includes(trimmed) || 
           item.chapter.toLowerCase().includes(trimmed) || 
           item.snippet.toLowerCase().includes(trimmed);
  });

  if (matches.length === 0) {
    container.innerHTML = `
      <div class="text-center py-8 text-slate-400">
        <i class="fa-regular fa-face-frown text-2xl mb-2"></i>
        <p>No results found for "<span class="text-amber-400">${escapeHtml(query)}</span>"</p>
        <p class="text-xs text-slate-500 mt-1">Try searching for keywords like "Hoisting", "let", "Array", "Scope", or "ES6".</p>
      </div>
    `;
    return;
  }

  container.innerHTML = matches.map(item => `
    <a href="${item.url}" class="block p-3 rounded-xl hover:bg-amber-500/10 hover:border-amber-500/30 border border-transparent transition group">
      <div class="flex items-center justify-between mb-1">
        <span class="font-bold text-slate-900 dark:text-slate-100 group-hover:text-amber-500 text-sm flex items-center gap-1.5">
          <i class="fa-solid fa-angle-right text-amber-500 text-xs"></i> ${highlightMatch(item.title, trimmed)}
        </span>
        <span class="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">${item.chapter}</span>
      </div>
      <p class="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">${highlightMatch(item.snippet, trimmed)}</p>
    </a>
  `).join('');
}

function highlightMatch(text, query) {
  if (!query) return escapeHtml(text);
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return escapeHtml(text).replace(regex, '<mark class="bg-amber-400/30 text-amber-300 font-semibold px-0.5 rounded">$1</mark>');
}

/* ==========================================================================
   6. Mobile Sidebar Drawer
   ========================================================================== */
function initMobileSidebar() {
  const toggleBtn = document.getElementById('mobile-sidebar-toggle');
  const sidebar = document.getElementById('docs-sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');

  if (!toggleBtn || !sidebar) return;

  const openDrawer = () => {
    sidebar.classList.remove('-translate-x-full');
    if (backdrop) backdrop.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  };

  const closeDrawer = () => {
    sidebar.classList.add('-translate-x-full');
    if (backdrop) backdrop.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  };

  toggleBtn.addEventListener('click', () => {
    if (sidebar.classList.contains('-translate-x-full')) {
      openDrawer();
    } else {
      closeDrawer();
    }
  });

  if (backdrop) backdrop.addEventListener('click', closeDrawer);
}

/* ==========================================================================
   7. Table of Contents Spy
   ========================================================================== */
function initTableOfContents() {
  const tocLinks = document.querySelectorAll('#toc-list a');
  const sections = document.querySelectorAll('section[id], h2[id], h3[id]');

  if (tocLinks.length === 0 || sections.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        tocLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('text-amber-500', 'font-bold', 'border-l-2', 'border-amber-500', 'pl-2');
            link.classList.remove('text-slate-500', 'dark:text-slate-400');
          } else {
            link.classList.remove('text-amber-500', 'font-bold', 'border-l-2', 'border-amber-500', 'pl-2');
            link.classList.add('text-slate-500', 'dark:text-slate-400');
          }
        });
      }
    });
  }, { rootMargin: '-80px 0px -70% 0px' });

  sections.forEach(sec => observer.observe(sec));
}

/* ==========================================================================
   8. Utility Toast Notifications
   ========================================================================== */
function showToast(message, type = 'info') {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  const icon = type === 'success' ? 'fa-circle-check text-emerald-400' : 'fa-circle-info text-amber-400';
  const border = type === 'success' ? 'border-emerald-500/40' : 'border-amber-500/40';

  toast.className = `pointer-events-auto flex items-center gap-3 bg-slate-900/95 text-white px-4 py-3 rounded-xl border ${border} shadow-2xl backdrop-blur-md text-xs font-medium animate-in slide-in-from-bottom-5 duration-200`;
  toast.innerHTML = `<i class="fa-solid ${icon} text-base"></i><span>${escapeHtml(message)}</span>`;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2', 'transition-all', 'duration-300');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}
