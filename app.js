// ===================================================================
// AI Engineer Portfolio Catalog - Application Logic
// Curated & Maintained by Shourya Goyal
// ===================================================================

document.addEventListener('DOMContentLoaded', () => {
  // State
  let activeTheme = 'all';
  let activeDifficulty = 'all';
  let searchQuery = '';
  let activeSkill = '';

  // DOM Elements
  const projectsGrid = document.getElementById('projectsGrid');
  const resultsCount = document.getElementById('resultsCount');
  const searchInput = document.getElementById('searchInput');
  const difficultyFilter = document.getElementById('difficultyFilter');
  const themeChipsContainer = document.getElementById('themeChips');
  const resetBtn = document.getElementById('resetBtn');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  const themeToggle = document.getElementById('themeToggle');
  const specModal = document.getElementById('specModal');
  const modalClose = document.getElementById('modalClose');
  const modalTitle = document.getElementById('modalTitle');
  const modalContent = document.getElementById('modalContent');
  const modalCopyBtn = document.getElementById('modalCopyBtn');

  // Stats Counters
  const statTotal = document.getElementById('statTotal');
  const statBeginner = document.getElementById('statBeginner');
  const statIntermediate = document.getElementById('statIntermediate');
  const statAdvanced = document.getElementById('statAdvanced');

  // Update initial stats
  if (statTotal) statTotal.textContent = PROJECTS_DATA.length;
  if (statBeginner) statBeginner.textContent = PROJECTS_DATA.filter(p => p.difficulty === 'Beginner').length;
  if (statIntermediate) statIntermediate.textContent = PROJECTS_DATA.filter(p => p.difficulty === 'Intermediate').length;
  if (statAdvanced) statAdvanced.textContent = PROJECTS_DATA.filter(p => p.difficulty === 'Advanced').length;

  // Initialize Theme Chips
  const themes = [
    { label: 'All Themes', slug: 'all', count: PROJECTS_DATA.length },
    { label: '🔎 RAG Apps', slug: 'rag-apps', count: PROJECTS_DATA.filter(p => p.themeSlug === 'rag-apps').length },
    { label: '🤖 Agents & Tool-Use', slug: 'agents', count: PROJECTS_DATA.filter(p => p.themeSlug === 'agents').length },
    { label: '📊 Evals & LLMOps', slug: 'evals-llmops', count: PROJECTS_DATA.filter(p => p.themeSlug === 'evals-llmops').length },
    { label: '🎛️ Fine-Tuning', slug: 'fine-tuning', count: PROJECTS_DATA.filter(p => p.themeSlug === 'fine-tuning').length },
    { label: '🎨 Multimodal', slug: 'multimodal', count: PROJECTS_DATA.filter(p => p.themeSlug === 'multimodal').length },
    { label: '🧩 Structured Extraction', slug: 'structured-extraction', count: PROJECTS_DATA.filter(p => p.themeSlug === 'structured-extraction').length },
    { label: '🔬 LLM Internals', slug: 'llm-from-scratch', count: PROJECTS_DATA.filter(p => p.themeSlug === 'llm-from-scratch').length },
    { label: '⚙️ Production & Serving', slug: 'production-serving', count: PROJECTS_DATA.filter(p => p.themeSlug === 'production-serving').length },
    { label: '🧠 Prompt & DSPy', slug: 'prompt-dspy', count: PROJECTS_DATA.filter(p => p.themeSlug === 'prompt-dspy').length },
    { label: '🚀 GTM & AI-PM', slug: 'gtm-ai-pm', count: PROJECTS_DATA.filter(p => p.themeSlug === 'gtm-ai-pm').length },
  ];

  function renderThemeChips() {
    themeChipsContainer.innerHTML = themes.map(t => `
      <button class="theme-chip ${activeTheme === t.slug ? 'active' : ''}" data-slug="${t.slug}">
        ${t.label} (${t.count})
      </button>
    `).join('');

    themeChipsContainer.querySelectorAll('.theme-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        activeTheme = chip.getAttribute('data-slug');
        renderThemeChips();
        filterAndRenderProjects();
      });
    });
  }

  // Format Markdown link like "[text](url)" into "<a href='url' target='_blank'>text</a>"
  function parseMarkdownLinks(text) {
    return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  }

  // Filter & Render Projects
  function filterAndRenderProjects() {
    const q = searchQuery.toLowerCase().trim();

    const filtered = PROJECTS_DATA.filter(p => {
      // Theme filter
      if (activeTheme !== 'all' && p.themeSlug !== activeTheme) return false;

      // Difficulty filter
      if (activeDifficulty !== 'all' && p.difficulty !== activeDifficulty) return false;

      // Skill tag filter
      if (activeSkill && !p.skills.some(s => s.toLowerCase() === activeSkill.toLowerCase())) return false;

      // Search query filter (matches title, description, skills)
      if (q) {
        const inTitle = p.title.toLowerCase().includes(q);
        const inDesc = p.description.toLowerCase().includes(q);
        const inSkills = p.skills.some(s => s.toLowerCase().includes(q));
        const inTheme = p.theme.toLowerCase().includes(q);
        if (!inTitle && !inDesc && !inSkills && !inTheme) return false;
      }

      return true;
    });

    // Update count
    resultsCount.innerHTML = `Showing <strong>${filtered.length}</strong> of <strong>${PROJECTS_DATA.length}</strong> projects ${
      activeSkill ? `with skill <em>"${activeSkill}"</em>` : ''
    }`;

    // Reset button visibility
    const isFiltered = activeTheme !== 'all' || activeDifficulty !== 'all' || q !== '' || activeSkill !== '';
    resetBtn.style.display = isFiltered ? 'inline-block' : 'none';

    // Render Grid
    if (filtered.length === 0) {
      projectsGrid.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🔍</div>
          <h3>No projects matched your criteria</h3>
          <p>Try clearing your search query or adjusting your filters.</p>
        </div>
      `;
      return;
    }

    projectsGrid.innerHTML = filtered.map(p => `
      <div class="project-card" data-id="${p.id}">
        <div class="card-header">
          <span class="theme-tag">${p.theme}</span>
          <span class="diff-badge ${p.difficulty}">${p.diffBadge} ${p.difficulty}</span>
        </div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        
        <div class="skills-wrapper">
          <div class="skills-title">Skills Proven</div>
          <div class="skills-tags">
            ${p.skills.map(s => `<span class="skill-tag" data-skill="${s}">${s}</span>`).join('')}
          </div>
        </div>

        ${p.references && p.references.length > 0 ? `
          <div class="references-box">
            ${p.references.map(r => `<div class="ref-item">${parseMarkdownLinks(r)}</div>`).join('')}
          </div>
        ` : ''}

        <div class="card-actions">
          <button class="btn-card copy-spec-btn" data-id="${p.id}">
            📋 Copy Spec
          </button>
          <button class="btn-card view-details-btn" data-id="${p.id}">
            🔍 View Spec
          </button>
        </div>
      </div>
    `).join('');

    // Attach listeners to newly rendered items
    projectsGrid.querySelectorAll('.skill-tag').forEach(tag => {
      tag.addEventListener('click', (e) => {
        e.stopPropagation();
        activeSkill = tag.getAttribute('data-skill');
        filterAndRenderProjects();
      });
    });

    projectsGrid.querySelectorAll('.copy-spec-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(btn.getAttribute('data-id'), 10);
        const proj = PROJECTS_DATA.find(p => p.id === id);
        if (proj) {
          copyProjectSpec(proj);
        }
      });
    });

    projectsGrid.querySelectorAll('.view-details-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(btn.getAttribute('data-id'), 10);
        const proj = PROJECTS_DATA.find(p => p.id === id);
        if (proj) {
          openSpecModal(proj);
        }
      });
    });
  }

  // Spec Generator Template
  function generateProjectSpecText(p) {
    return `# AI Engineer Portfolio Project Spec: ${p.title}

## 1. Overview & Problem Statement
${p.description}

## 2. Core Information
- **Category:** ${p.theme}
- **Difficulty:** ${p.difficulty} (${p.diffBadge})
- **Skills Proven:** ${p.skills.join(', ')}

## 3. High-Signal Production Requirements
- [ ] End-to-end implementation with clean Dockerfile / modular setup
- [ ] Rigorous automated evals with real metrics table (3+ benchmarks)
- [ ] Observability & distributed tracing (Langfuse / Phoenix / OpenTelemetry)
- [ ] Latency & cost metrics tracking ($/1k tokens, p50 / p95)
- [ ] Live deployment URL (Vercel / Modal / Railway / HuggingFace Spaces)
- [ ] README structured as a production product spec with architecture diagram

## 4. Key References & Starters
${p.references.map(r => `- ${r}`).join('\n')}

---
Curated by Shourya Goyal (https://github.com/y81252294-svg/ai-engineer-portfolio-projects)`;
  }

  // Copy Spec
  function copyProjectSpec(proj) {
    const spec = generateProjectSpecText(proj);
    navigator.clipboard.writeText(spec).then(() => {
      showToast(`Copied spec for "${proj.title}"!`);
    }).catch(() => {
      showToast('Spec copied to clipboard!');
    });
  }

  // Modal Handling
  let currentModalProject = null;
  function openSpecModal(proj) {
    currentModalProject = proj;
    modalTitle.textContent = proj.title;
    const spec = generateProjectSpecText(proj);
    modalContent.innerHTML = `
      <p style="margin-bottom: 1rem; color: var(--text-secondary);">${proj.description}</p>
      <div style="margin-bottom: 1rem;">
        <span class="theme-tag" style="margin-right: 0.5rem;">${proj.theme}</span>
        <span class="diff-badge ${proj.difficulty}">${proj.diffBadge} ${proj.difficulty}</span>
      </div>
      <div style="margin-bottom: 1.25rem;">
        <div class="skills-title">Proven Competencies:</div>
        <div class="skills-tags">
          ${proj.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
        </div>
      </div>
      <div class="skills-title" style="margin-bottom: 0.5rem;">Markdown Product Spec / LLM Prompt:</div>
      <div class="spec-snippet">${escapeHtml(spec)}</div>
    `;
    specModal.classList.add('active');
  }

  function escapeHtml(text) {
    return text.replace(/&/g, '&amp;')
               .replace(/</g, '&lt;')
               .replace(/>/g, '&gt;');
  }

  modalClose.addEventListener('click', () => {
    specModal.classList.remove('active');
  });

  specModal.addEventListener('click', (e) => {
    if (e.target === specModal) {
      specModal.classList.remove('active');
    }
  });

  modalCopyBtn.addEventListener('click', () => {
    if (currentModalProject) {
      copyProjectSpec(currentModalProject);
    }
  });

  // Toast Functionality
  function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  // Search Input Event
  let debounceTimeout = null;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      searchQuery = e.target.value;
      filterAndRenderProjects();
    }, 150);
  });

  // Difficulty Filter Event
  difficultyFilter.addEventListener('change', (e) => {
    activeDifficulty = e.target.value;
    filterAndRenderProjects();
  });

  // Reset Filters Button
  resetBtn.addEventListener('click', () => {
    activeTheme = 'all';
    activeDifficulty = 'all';
    searchQuery = '';
    activeSkill = '';
    searchInput.value = '';
    difficultyFilter.value = 'all';
    renderThemeChips();
    filterAndRenderProjects();
  });

  // Dark / Light Theme Toggle
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcon(next);
  });

  function updateThemeIcon(th) {
    themeToggle.innerHTML = th === 'light' ? '🌙' : '☀️';
  }

  // Initial Execution
  renderThemeChips();
  filterAndRenderProjects();
});
