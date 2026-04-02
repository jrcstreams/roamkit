// ===== Constants =====

const STORAGE_KEY = 'roamkit-v1';
const OLD_KEY = 'travel-itinerary-v2';

const ICON_DN = `<svg class="si" viewBox="0 0 10 11" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="1" x2="5" y2="7.5"/><polyline points="2,5 5,7.5 8,5"/><line x1="1" y1="10.5" x2="9" y2="10.5"/></svg>`;
const ICON_UP = `<svg class="si" viewBox="0 0 10 11" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="7.5" x2="5" y2="1"/><polyline points="2,3.5 5,1 8,3.5"/><line x1="1" y1="10.5" x2="9" y2="10.5"/></svg>`;
const ICON_SHARE = `<svg class="si" viewBox="0 0 11 11" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="8.5" cy="2" r="1.5"/><circle cx="8.5" cy="9" r="1.5"/><circle cx="2" cy="5.5" r="1.5"/><line x1="3.5" y1="6.3" x2="7" y2="8.3"/><line x1="7" y1="2.7" x2="3.5" y2="4.7"/></svg>`;

const COLOR_PRESETS = [
  '#1a56db', '#0e9f6e', '#d97706', '#e02424',
  '#7e3af2', '#0891b2', '#db2777', '#374151'
];

const SECTION_TEMPLATES = {
  flights: {
    title: 'Flights', icon: '✈️',
    fields: [
      { label: 'Flight #', type: 'text' },
      { label: 'Airline', type: 'text' },
      { label: 'From', type: 'text' },
      { label: 'To', type: 'text' },
      { label: 'Departure', type: 'datetime-local' },
      { label: 'Arrival', type: 'datetime-local' },
      { label: 'Confirmation #', type: 'text' },
      { label: 'Seat', type: 'text' },
      { label: 'Notes', type: 'textarea' }
    ]
  },
  car_rental: {
    title: 'Car Rental', icon: '🚗',
    fields: [
      { label: 'Company', type: 'text' },
      { label: 'Pickup Location', type: 'text' },
      { label: 'Pickup Date/Time', type: 'datetime-local' },
      { label: 'Return Location', type: 'text' },
      { label: 'Return Date/Time', type: 'datetime-local' },
      { label: 'Confirmation #', type: 'text' },
      { label: 'Vehicle Type', type: 'text' },
      { label: 'Notes', type: 'textarea' }
    ]
  },
  lodging: {
    title: 'Lodging', icon: '🏨',
    fields: [
      { label: 'Hotel / Property', type: 'text' },
      { label: 'Address', type: 'text' },
      { label: 'Check-in Date', type: 'date' },
      { label: 'Check-out Date', type: 'date' },
      { label: 'Confirmation #', type: 'text' },
      { label: 'Contact #', type: 'text' },
      { label: 'Room Type', type: 'text' },
      { label: 'Website', type: 'url' },
      { label: 'Notes', type: 'textarea' }
    ]
  },
  restaurants: {
    title: 'Restaurants', icon: '🍽️',
    fields: [
      { label: 'Restaurant', type: 'text' },
      { label: 'Address', type: 'text' },
      { label: 'Date', type: 'date' },
      { label: 'Time', type: 'time' },
      { label: 'Reservation #', type: 'text' },
      { label: 'Cuisine', type: 'text' },
      { label: 'Website', type: 'url' },
      { label: 'Notes', type: 'textarea' }
    ]
  },
  events: {
    title: 'Events', icon: '🎫',
    fields: [
      { label: 'Event Name', type: 'text' },
      { label: 'Venue', type: 'text' },
      { label: 'Address', type: 'text' },
      { label: 'Date', type: 'date' },
      { label: 'Time', type: 'time' },
      { label: 'Ticket #', type: 'text' },
      { label: 'Website', type: 'url' },
      { label: 'Notes', type: 'textarea' }
    ]
  },
  transport: {
    title: 'Transport', icon: '🚆',
    fields: [
      { label: 'Type (Bus/Train/Ferry...)', type: 'text' },
      { label: 'From', type: 'text' },
      { label: 'To', type: 'text' },
      { label: 'Date', type: 'date' },
      { label: 'Departure Time', type: 'time' },
      { label: 'Booking #', type: 'text' },
      { label: 'Notes', type: 'textarea' }
    ]
  },
  activities: {
    title: 'Activities', icon: '🎯',
    fields: [
      { label: 'Activity', type: 'text' },
      { label: 'Location', type: 'text' },
      { label: 'Date', type: 'date' },
      { label: 'Time', type: 'time' },
      { label: 'Booking #', type: 'text' },
      { label: 'Cost', type: 'text' },
      { label: 'Website', type: 'url' },
      { label: 'Notes', type: 'textarea' }
    ]
  },
  packing: {
    title: 'Packing List', icon: '🧳',
    fields: [
      { label: 'Item', type: 'text' },
      { label: 'Quantity', type: 'number' },
      { label: 'Notes', type: 'text' }
    ]
  },
  budget: {
    title: 'Budget', icon: '💰',
    fields: [
      { label: 'Category', type: 'text' },
      { label: 'Estimated Cost', type: 'number' },
      { label: 'Actual Cost', type: 'number' },
      { label: 'Currency', type: 'text' },
      { label: 'Notes', type: 'text' }
    ]
  },
  notes: {
    title: 'Trip Notes', icon: '📝',
    fields: [
      { label: 'Note', type: 'textarea' }
    ]
  },
  destinations: {
    title: 'Destinations', icon: '📍',
    fields: [] // custom rendering
  },
  parent: {
    title: 'Parent Section', icon: '📁',
    fields: [] // custom rendering
  },
  custom: {
    title: 'Custom', icon: '',
    fields: [
      { label: 'Title', type: 'text' },
      { label: 'Notes', type: 'textarea' }
    ]
  }
};

const WEB_LINKS = [
  { name: 'Things To Do', icon: '🔍', url: q => `https://www.google.com/search?q=things+to+do+in+${encodeURIComponent(q)}` },
  { name: 'Google Maps', icon: '🗺️', url: q => `https://www.google.com/maps/search/${encodeURIComponent(q)}` },
  { name: 'TripAdvisor', icon: '⭐', url: q => `https://www.tripadvisor.com/Search?q=${encodeURIComponent(q)}` },
  { name: 'Viator', icon: '🎟️', url: q => `https://www.viator.com/searchResults/all?text=${encodeURIComponent(q)}` },
  { name: 'GetYourGuide', icon: '🌟', url: q => `https://www.getyourguide.com/s/?q=${encodeURIComponent(q)}` },
  { name: 'Yelp', icon: '🍴', url: q => `https://www.yelp.com/search?find_desc=things+to+do&find_loc=${encodeURIComponent(q)}` },
  { name: 'Airbnb Rentals', icon: '🏠', url: q => `https://www.airbnb.com/s/${encodeURIComponent(q)}/homes` },
  { name: 'Airbnb Exp.', icon: '🎭', url: q => `https://www.airbnb.com/s/${encodeURIComponent(q)}/experiences` },
  { name: 'Hotels', icon: '🏨', url: q => `https://www.google.com/travel/hotels/${encodeURIComponent(q)}` },
];

// ===== Module-level flags =====
let crossGroupDragInitialized = false;

// ===== State =====

const state = {
  groups: [],
  trips: [],
  deletedTrips: [],
  currentTripId: null,
  editingTripId: null,
  editingDestId: null,
  editingGroupId: null,
  movingTripId: null,
  addSectionContext: null,
  addDestSectionContext: null,
  addFieldContext: null,
  selectedSectionTypes: new Set(),
  pendingImportData: null,
  importSectionContext: null  // { tripId, isReturn, parentId, targetSectionId }
};

// ===== Persistence =====

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    groups: state.groups,
    trips: state.trips,
    deletedTrips: state.deletedTrips
  }));
}

function load() {
  // Attempt migration from old key
  const oldRaw = localStorage.getItem(OLD_KEY);
  if (oldRaw && !localStorage.getItem(STORAGE_KEY)) {
    try {
      const oldTrips = JSON.parse(oldRaw);
      if (Array.isArray(oldTrips)) {
        const defaultGroup = makeDefaultGroup();
        const migratedTrips = oldTrips.map((t, i) => ({
          id: t.id || uid(),
          groupId: 'default',
          order: i,
          name: t.name || 'Untitled Trip',
          description: t.description || '',
          startDate: t.startDate || '',
          endDate: t.endDate || '',
          color: t.color || '#1a56db',
          hasReturnTrip: t.hasReturnTrip || false,
          destinations: t.destinations || [],
          sections: t.sections || [],
          returnSections: t.returnSections || [],
          createdAt: t.createdAt || new Date().toISOString(),
          updatedAt: t.updatedAt || new Date().toISOString()
        }));
        state.groups = [defaultGroup];
        state.trips = migratedTrips;
        state.deletedTrips = [];
        save();
        return;
      }
    } catch (e) { /* ignore */ }
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      state.groups = parsed.groups || [];
      state.trips = parsed.trips || [];
      state.deletedTrips = parsed.deletedTrips || [];
    }
  } catch (e) {
    state.groups = [];
    state.trips = [];
    state.deletedTrips = [];
  }

  // Ensure default group exists
  if (!state.groups.find(g => g.id === 'default')) {
    state.groups.unshift(makeDefaultGroup());
  }
}

function makeDefaultGroup() {
  return { id: 'default', name: 'My Trips', order: 0, collapsed: false };
}

// ===== Utilities =====

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function fmtDate(d) {
  if (!d) return '';
  const parts = d.split('-');
  if (parts.length !== 3) return d;
  const dt = new Date(+parts[0], +parts[1] - 1, +parts[2]);
  return dt.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function fmtDatetime(d) {
  if (!d) return '';
  const dt = new Date(d);
  if (isNaN(dt)) return d;
  return dt.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' });
}

function esc(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function debounce(fn, ms) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
}

function getTrip(id) { return state.trips.find(t => t.id === id); }
function getDeletedTrip(id) { return state.deletedTrips.find(t => t.id === id); }
function findSectionRecursive(sections, sectionId) {
  for (const sec of sections) {
    if (sec.id === sectionId) return sec;
    if (sec.type === 'parent' && sec.children) {
      const found = findSectionRecursive(sec.children, sectionId);
      if (found) return found;
    }
  }
  return null;
}

function getSection(trip, sectionId) {
  if (!trip) return null;
  return findSectionRecursive(trip.sections || [], sectionId)
      || findSectionRecursive(trip.returnSections || [], sectionId)
      || null;
}
function removeSectionRecursive(sections, sectionId) {
  const idx = sections.findIndex(s => s.id === sectionId);
  if (idx !== -1) { sections.splice(idx, 1); return true; }
  for (const sec of sections) {
    if (sec.type === 'parent' && sec.children) {
      if (removeSectionRecursive(sec.children, sectionId)) return true;
    }
  }
  return false;
}
function getItem(section, itemId) { return section.items.find(i => i.id === itemId); }
function getGroup(id) { return state.groups.find(g => g.id === id); }
function tripsInGroup(groupId) {
  return state.trips.filter(t => t.groupId === groupId).sort((a, b) => a.order - b.order);
}

// ===== createSortableV2 =====
function createSortableV2(container, { handleSelector, itemAttr, onEnd }) {
  if (!container) return;

  let dragEl = null;
  let ghost = null;
  let offsetX = 0, offsetY = 0;
  let moved = false;
  let startX = 0, startY = 0;

  container.addEventListener('pointerdown', start, { passive: false });

  function start(e) {
    const handle = e.target.closest(handleSelector);
    if (!handle) return;
    const item = handle.closest('[data-' + itemAttr + ']');
    if (!item) return;

    dragEl = item;
    startX = e.clientX;
    startY = e.clientY;
    moved = false;

    const rect = item.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    document.addEventListener('pointermove', move, { passive: false });
    document.addEventListener('pointerup', end);
    document.addEventListener('pointercancel', end);
  }

  function move(e) {
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    if (!moved && Math.sqrt(dx * dx + dy * dy) < 6) return;

    if (!moved) {
      moved = true;
      const rect = dragEl.getBoundingClientRect();
      ghost = dragEl.cloneNode(true);
      ghost.style.cssText = `
        position: fixed;
        left: ${rect.left}px;
        top: ${rect.top}px;
        width: ${rect.width}px;
        height: ${rect.height}px;
        pointer-events: none;
        z-index: 9999;
        opacity: 0.85;
        box-shadow: 0 8px 24px rgba(0,0,0,.18);
        border-radius: 5px;
        background: white;
      `;
      document.body.appendChild(ghost);
      dragEl.classList.add('drag-placeholder');
    }

    e.preventDefault();

    ghost.style.left = (e.clientX - offsetX) + 'px';
    ghost.style.top = (e.clientY - offsetY) + 'px';

    // Reorder in DOM — 2D aware for grid layouts (fields) and column layouts (items/sections)
    const siblings = [...container.querySelectorAll('[data-' + itemAttr + ']')].filter(el => el !== dragEl);
    let insertBefore = null;
    for (const sib of siblings) {
      const r = sib.getBoundingClientRect();
      const sibCY = r.top + r.height / 2;
      const sibCX = r.left + r.width / 2;
      if (sibCY > e.clientY + 8) {
        // Sibling center is clearly below cursor
        insertBefore = sib;
        break;
      } else if (Math.abs(sibCY - e.clientY) <= 8 && sibCX > e.clientX) {
        // Sibling is in the same row and to the right of cursor (grid layout)
        insertBefore = sib;
        break;
      }
    }
    if (insertBefore) {
      container.insertBefore(dragEl, insertBefore);
    } else if (siblings.length > 0) {
      container.appendChild(dragEl);
    }
  }

  function end() {
    document.removeEventListener('pointermove', move);
    document.removeEventListener('pointerup', end);
    document.removeEventListener('pointercancel', end);

    if (ghost) { ghost.remove(); ghost = null; }
    if (dragEl) dragEl.classList.remove('drag-placeholder');

    if (moved && dragEl) {
      const ids = [...container.querySelectorAll('[data-' + itemAttr + ']')].map(el => el.dataset[itemAttr]);
      onEnd(ids);
    }

    dragEl = null;
    moved = false;
  }
}

// ===== Modal Helpers =====

function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.hidden = false;
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.hidden = true;
}

function wireModals() {
  document.querySelectorAll('[data-modal]').forEach(btn => {
    btn.addEventListener('click', () => closeModal(btn.dataset.modal));
  });
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeModal(overlay.id);
    });
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const open = [...document.querySelectorAll('.modal-overlay:not([hidden])')];
      if (open.length) closeModal(open[open.length - 1].id);
    }
  });
}

// ===== Sidebar Rendering =====

function renderSidebar() {
  const body = document.getElementById('sidebar-body');
  let html = '';

  const sortedGroups = [...state.groups].sort((a, b) => a.order - b.order);

  sortedGroups.forEach(group => {
    const trips = tripsInGroup(group.id);
    const isDefault = group.id === 'default';
    const collapsed = group.collapsed ? 'collapsed' : '';

    html += `<div class="sidebar-group ${collapsed}" data-group-id="${group.id}">`;
    html += `<div class="sidebar-group-header" data-group-header="${group.id}">`;
    html += `<span class="group-drag-handle" data-group-drag-handle="true">⠿</span>`;
    html += `<span class="group-name">${esc(group.name)}</span>`;
    html += `<span class="group-header-actions">`;
    html += `<button class="group-action-btn" data-rename-group="${group.id}" title="Rename group">✎</button>`;
    if (!isDefault) {
      html += `<button class="group-action-btn danger" data-delete-group="${group.id}" title="Delete group">🗑</button>`;
    }
    html += `</span>`;
    html += `<span class="group-chevron">▶</span>`;
    html += `</div>`; // sidebar-group-header

    html += `<div class="sidebar-group-trips" data-trips-container="${group.id}">`;
    trips.forEach(trip => {
      const active = trip.id === state.currentTripId ? 'active' : '';
      html += `<div class="sidebar-trip-item ${active}" data-trip-id="${trip.id}" data-trip-item="${trip.id}">`;
      html += `<span class="trip-drag-handle" data-trip-drag-handle="true">⠿</span>`;
      html += `<span class="trip-color-dot" style="background:${esc(trip.color || '#1a56db')}"></span>`;
      html += `<span class="trip-item-name">${esc(trip.name)}</span>`;
      html += `<span class="sidebar-trip-actions">`;
      html += `<button class="trip-action-btn" data-more-trip="${trip.id}" title="More">⋮</button>`;
      html += `</span>`;
      html += `</div>`;
    });
    html += `<button class="btn-add-trip-group" data-add-trip-group="${group.id}">+ Add Trip</button>`;
    html += `</div>`; // sidebar-group-trips
    html += `</div>`; // sidebar-group
  });

  // Deleted trips section
  if (state.deletedTrips.length > 0) {
    const delSection = body.querySelector('.deleted-trips-section');
    const isCollapsed = delSection ? delSection.classList.contains('collapsed') : false;
    html += `<div class="deleted-trips-section ${isCollapsed ? 'collapsed' : ''}">`;
    html += `<div class="deleted-trips-header">`;
    html += `<span class="deleted-trips-label">🗑 Recently Deleted</span>`;
    html += `<span class="deleted-chevron">▶</span>`;
    html += `</div>`;
    html += `<div class="deleted-trips-list">`;
    state.deletedTrips.forEach(dt => {
      const dateStr = dt.deletedAt ? new Date(dt.deletedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : '';
      html += `<div class="deleted-trip-item">`;
      html += `<div class="deleted-trip-info">`;
      html += `<div class="deleted-trip-name">${esc(dt.name)}</div>`;
      html += `<div class="deleted-trip-date">Deleted ${dateStr}</div>`;
      html += `</div>`;
      html += `<div class="deleted-trip-actions">`;
      html += `<button class="deleted-action-btn restore" data-restore-trip="${dt.id}" title="Restore">↩ Restore</button>`;
      html += `<button class="deleted-action-btn remove" data-remove-trip="${dt.id}" title="Remove Forever">✕</button>`;
      html += `</div>`;
      html += `</div>`;
    });
    html += `</div></div>`;
  }

  body.innerHTML = html;
  attachSidebarEvents();
}

function attachSidebarEvents() {
  const body = document.getElementById('sidebar-body');

  // Group header: collapse/expand toggle
  body.querySelectorAll('[data-group-header]').forEach(header => {
    header.addEventListener('click', e => {
      if (e.target.closest('button')) return;
      const groupId = header.dataset.groupHeader;
      const group = getGroup(groupId);
      if (group) {
        group.collapsed = !group.collapsed;
        save();
        renderSidebar();
      }
    });
  });

  // Rename group
  body.querySelectorAll('[data-rename-group]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      openRenameGroup(btn.dataset.renameGroup);
    });
  });

  // Delete group
  body.querySelectorAll('[data-delete-group]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const groupId = btn.dataset.deleteGroup;
      if (confirm('Delete this group? Its trips will move to "My Trips".')) {
        deleteGroup(groupId);
      }
    });
  });

  // Add trip to group
  body.querySelectorAll('[data-add-trip-group]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      openNewTrip(btn.dataset.addTripGroup);
    });
  });

  // More trip dropdown
  body.querySelectorAll('[data-more-trip]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      openTripMoreDropdown(btn, btn.dataset.moreTrip);
    });
  });

  // Trip item click (select)
  body.querySelectorAll('.sidebar-trip-item').forEach(item => {
    item.addEventListener('click', e => {
      if (e.target.closest('button')) return;
      if (e.target.closest('.sidebar-trip-actions')) return;
      selectTrip(item.dataset.tripId);
    });

    // Touch: toggle touch-active
    item.addEventListener('touchstart', () => {
      item.classList.add('touch-active');
    }, { passive: true });
    item.addEventListener('touchend', () => {
      setTimeout(() => item.classList.remove('touch-active'), 500);
    }, { passive: true });
  });

  // Deleted trips toggle
  const delHeader = body.querySelector('.deleted-trips-header');
  if (delHeader) {
    delHeader.addEventListener('click', () => {
      delHeader.closest('.deleted-trips-section').classList.toggle('collapsed');
    });
  }

  // Restore trip
  body.querySelectorAll('[data-restore-trip]').forEach(btn => {
    btn.addEventListener('click', () => restoreTrip(btn.dataset.restoreTrip));
  });

  // Remove forever
  body.querySelectorAll('[data-remove-trip]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm('Permanently delete this trip? This cannot be undone.')) {
        permanentDeleteTrip(btn.dataset.removeTrip);
      }
    });
  });

  // Group drag sort
  const groupsContainer = body;
  createSortableV2(groupsContainer, {
    handleSelector: '[data-group-drag-handle]',
    itemAttr: 'group-id',
    onEnd: (orderedIds) => {
      orderedIds.forEach((id, i) => {
        const g = getGroup(id);
        if (g) g.order = i;
      });
      save();
    }
  });

  attachCrossGroupTripDrag();
}

function attachCrossGroupTripDrag() {
  if (crossGroupDragInitialized) return;
  crossGroupDragInitialized = true;
  const body = document.getElementById('sidebar-body');
  if (!body) return;
  let dragEl = null, ghost = null;
  let offsetX = 0, offsetY = 0;
  let moved = false, startX = 0, startY = 0;
  let placeholder = null;

  body.addEventListener('pointerdown', startDrag, { passive: false });

  function startDrag(e) {
    const handle = e.target.closest('[data-trip-drag-handle]');
    if (!handle) return;
    const item = handle.closest('[data-trip-item]');
    if (!item) return;
    dragEl = item;
    startX = e.clientX; startY = e.clientY;
    moved = false;
    const rect = item.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    document.addEventListener('pointermove', moveDrag, { passive: false });
    document.addEventListener('pointerup', endDrag);
    document.addEventListener('pointercancel', endDrag);
  }

  function moveDrag(e) {
    const dx = e.clientX - startX, dy = e.clientY - startY;
    if (!moved && Math.sqrt(dx * dx + dy * dy) < 6) return;
    if (!moved) {
      moved = true;
      const rect = dragEl.getBoundingClientRect();
      ghost = dragEl.cloneNode(true);
      ghost.style.cssText = 'position:fixed;left:' + rect.left + 'px;top:' + rect.top + 'px;width:' + rect.width + 'px;pointer-events:none;z-index:9999;opacity:0.85;box-shadow:0 4px 16px rgba(0,0,0,.3);border-radius:5px;';
      document.body.appendChild(ghost);
      placeholder = document.createElement('div');
      placeholder.style.cssText = 'height:' + rect.height + 'px;border-radius:5px;background:rgba(255,255,255,.12);margin-bottom:2px;box-sizing:border-box;';
      dragEl.parentNode.insertBefore(placeholder, dragEl);
      dragEl.style.display = 'none';
    }
    e.preventDefault();
    ghost.style.left = (e.clientX - offsetX) + 'px';
    ghost.style.top = (e.clientY - offsetY) + 'px';

    const containers = [...body.querySelectorAll('[data-trips-container]')];
    let targetContainer = null;
    for (const c of containers) {
      const r = c.getBoundingClientRect();
      if (e.clientY >= r.top - 30 && e.clientY <= r.bottom + 30 && e.clientX >= r.left - 20 && e.clientX <= r.right + 20) {
        targetContainer = c; break;
      }
    }
    if (targetContainer) {
      const siblings = [...targetContainer.querySelectorAll('[data-trip-item]')];
      let insertBefore = null;
      for (const sib of siblings) {
        if (sib === dragEl) continue;
        const r = sib.getBoundingClientRect();
        if (e.clientY < r.top + r.height / 2) { insertBefore = sib; break; }
      }
      const addBtn = targetContainer.querySelector('.btn-add-trip-group');
      if (insertBefore) targetContainer.insertBefore(placeholder, insertBefore);
      else if (addBtn) targetContainer.insertBefore(placeholder, addBtn);
      else targetContainer.appendChild(placeholder);
    }
  }

  function endDrag() {
    document.removeEventListener('pointermove', moveDrag);
    document.removeEventListener('pointerup', endDrag);
    document.removeEventListener('pointercancel', endDrag);
    if (ghost) { ghost.remove(); ghost = null; }
    if (moved && dragEl && placeholder) {
      const targetContainer = placeholder.parentNode;
      if (targetContainer) {
        targetContainer.insertBefore(dragEl, placeholder);
        placeholder.remove();
        dragEl.style.display = '';
        const newGroupId = targetContainer.dataset.tripsContainer;
        const tripId = dragEl.dataset.tripItem;
        const trip = state.trips.find(t => t.id === tripId);
        if (trip && newGroupId) {
          trip.groupId = newGroupId;
          const allSiblings = [...targetContainer.querySelectorAll('[data-trip-item]')];
          allSiblings.forEach((el, i) => {
            const t = state.trips.find(t2 => t2.id === el.dataset.tripItem);
            if (t) t.order = i;
          });
          save();
          renderSidebar();
        }
      }
    } else {
      if (placeholder) placeholder.remove();
      if (dragEl) dragEl.style.display = '';
    }
    dragEl = null; moved = false; placeholder = null;
  }
}

function openTripMoreDropdown(btn, tripId) {
  // Remove any existing dropdown
  document.querySelectorAll('.trip-more-dropdown').forEach(d => d.remove());

  const trip = getTrip(tripId);
  if (!trip) return;

  const dropdown = document.createElement('div');
  dropdown.className = 'trip-more-dropdown';
  dropdown.innerHTML = `
    <button data-move="${tripId}">Move to...</button>
    <button data-duplicate-trip="${tripId}">⧉ Duplicate</button>
    <button data-export-trip="${tripId}">${ICON_DN} Export</button>
    <button data-delete-trip="${tripId}" class="danger">🗑 Delete</button>
  `;

  // Position relative to item
  const item = btn.closest('.sidebar-trip-item');
  item.style.position = 'relative';
  item.appendChild(dropdown);

  dropdown.querySelector('[data-move]').addEventListener('click', e => {
    e.stopPropagation();
    dropdown.remove();
    openMoveTrip(tripId);
  });
  dropdown.querySelector('[data-duplicate-trip]').addEventListener('click', e => {
    e.stopPropagation();
    dropdown.remove();
    duplicateTrip(tripId);
  });
  dropdown.querySelector('[data-export-trip]').addEventListener('click', e => {
    e.stopPropagation();
    dropdown.remove();
    exportSingleTrip(tripId);
  });
  dropdown.querySelector('[data-delete-trip]').addEventListener('click', e => {
    e.stopPropagation();
    dropdown.remove();
    if (confirm(`Delete "${trip.name}"? It will be moved to Recently Deleted.`)) {
      softDeleteTrip(tripId);
    }
  });

  // Close on outside click
  const closeDropdown = (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.remove();
      document.removeEventListener('click', closeDropdown);
      document.removeEventListener('touchstart', closeDropdown);
    }
  };
  setTimeout(() => {
    document.addEventListener('click', closeDropdown);
    document.addEventListener('touchstart', closeDropdown);
  }, 0);
}

function selectTrip(tripId) {
  state.currentTripId = tripId;
  renderSidebar();
  renderTripDetail();
  closeMobileSidebar();
}

// ===== Empty Main Rendering =====

function renderEmptyMain() {
  const el = document.getElementById('empty-main');
  if (!el) return;
  // Always show the full welcome screen when no trip is open
  el.className = 'empty-main';
  el.innerHTML = `
    <div class="empty-main-hero">
      <img src="assets/logo/roamkit-logo.png" alt="RoamKit" class="empty-main-logo">
      <h2>Welcome to RoamKit</h2>
      <p class="empty-main-promo">A lightweight, local-first travel planner that lets you build, organize, and share complete itineraries — without accounts, cloud lock-in, or complexity.</p>
      <div class="empty-main-badges">
        <span class="empty-badge">✓ No account needed</span>
        <span class="empty-badge">✓ All data stays local</span>
        <span class="empty-badge">✓ Free &amp; open source</span>
      </div>
    </div>
    <div class="empty-main-divider"><span>Get started</span></div>
    <div class="empty-main-cards">
      <button class="empty-action-card" id="btn-new-trip-empty">
        <span class="empty-card-icon">✈️</span>
        <span class="empty-card-text">
          <strong>Create a Trip</strong>
          <span class="empty-card-desc">Build a full itinerary with flights, lodging, activities, budget, and more.</span>
        </span>
      </button>
      <button class="empty-action-card" id="btn-explore-dest-empty">
        <span class="empty-card-icon">🔍</span>
        <span class="empty-card-text">
          <strong>Explore a Destination</strong>
          <span class="empty-card-desc">Instantly search any city or country for maps, hotels, tours, and activities.</span>
        </span>
      </button>
      <button class="empty-action-card" id="btn-import-trip-empty">
        <span class="empty-card-icon">📂</span>
        <span class="empty-card-text">
          <strong>Import a Trip</strong>
          <span class="empty-card-desc">Load a previously exported RoamKit JSON file and pick up right where you left off.</span>
        </span>
      </button>
    </div>
  `;
  const btnNew = document.getElementById('btn-new-trip-empty');
  if (btnNew) btnNew.addEventListener('click', () => openNewTrip('default'));
  const btnExplore = document.getElementById('btn-explore-dest-empty');
  if (btnExplore) btnExplore.addEventListener('click', openExploreDestModal);
  const btnImport = document.getElementById('btn-import-trip-empty');
  if (btnImport) btnImport.addEventListener('click', () => document.getElementById('file-import-single').click());
}

function updateCompactAppBar() {
  const bar = document.getElementById('compact-app-bar');
  if (!bar) return;
  bar.hidden = !state.currentTripId;
}

// ===== Trip Detail Rendering =====

function renderTripDetail() {
  const emptyMain = document.getElementById('empty-main');
  const tripDetail = document.getElementById('trip-detail');

  if (!state.currentTripId) {
    emptyMain.hidden = false;
    tripDetail.hidden = true;
    updateCompactAppBar();
    renderEmptyMain();
    return;
  }

  const trip = getTrip(state.currentTripId);
  if (!trip) {
    emptyMain.hidden = false;
    tripDetail.hidden = true;
    updateCompactAppBar();
    renderEmptyMain();
    return;
  }

  emptyMain.hidden = true;
  tripDetail.hidden = false;
  updateCompactAppBar();

  const startStr = fmtDate(trip.startDate);
  const endStr = fmtDate(trip.endDate);
  let datesBadge = '';
  if (startStr && endStr) datesBadge = `<span class="trip-dates-badge">${startStr} – ${endStr}</span>`;
  else if (startStr) datesBadge = `<span class="trip-dates-badge">${startStr}</span>`;

  const outboundSections = trip.sections || [];
  const returnSections = trip.returnSections || [];
  const hasLegacyDests = trip.destinations && trip.destinations.length > 0;
  const isEmpty = outboundSections.length === 0 && returnSections.length === 0 && !hasLegacyDests && !trip.hasReturnTrip;

  let html = '';

  // Header
  html += `<div class="trip-header" style="--trip-color:${esc(trip.color || '#1a56db')}">`;
  html += `<div class="trip-color-accent" style="background:${esc(trip.color || '#1a56db')}"></div>`;
  html += `<div class="trip-header-inner">`;

  // Info + meta actions row
  html += `<div class="trip-header-top">`;
  html += `<div class="trip-header-info">`;
  html += `<div class="trip-title">${esc(trip.name)}</div>`;
  if (trip.description) html += `<div class="trip-desc">${esc(trip.description)}</div>`;
  if (datesBadge) html += `<div class="trip-dates">${datesBadge}</div>`;
  html += `</div>`;
  html += `<div class="trip-header-meta-actions">`;
  html += `<button class="btn-secondary btn-sm" id="btn-edit-trip">✎ Edit</button>`;
  html += `<button class="btn-secondary btn-sm" id="btn-export-trip">${ICON_DN} Export</button>`;
  html += `<button class="btn-secondary btn-sm" id="btn-share-trip">${ICON_SHARE} Share</button>`;
  html += `</div>`;
  html += `</div>`; // trip-header-top

  // Control panel row
  html += `<div class="trip-control-panel">`;
  html += `<div class="trip-ctrl-group">`;
  html += `<button class="trip-ctrl-btn trip-ctrl-btn-primary" id="btn-add-section">+ Add Section</button>`;
  html += `<button class="trip-ctrl-btn" id="btn-add-parent-section">+ Add Group</button>`;
  html += `</div>`;
  const hasExpandable = outboundSections.length > 1 || outboundSections.some(s => s.type === 'parent');
  if (hasExpandable) {
    html += `<div class="trip-ctrl-group">`;
    html += `<button class="trip-ctrl-btn trip-ctrl-btn-ghost" id="btn-expand-all">↕ Expand All</button>`;
    html += `<button class="trip-ctrl-btn trip-ctrl-btn-ghost" id="btn-collapse-all">↕ Collapse All</button>`;
    html += `</div>`;
  }
  html += `<div class="trip-ctrl-group trip-ctrl-group-right">`;
  if (!trip.hasReturnTrip) {
    html += `<button class="trip-ctrl-btn trip-ctrl-btn-return" id="btn-add-return">↩ Add Return Trip</button>`;
  }
  html += `<button class="trip-ctrl-btn trip-ctrl-btn-close" id="btn-close-trip">✕ Close Trip</button>`;
  html += `</div>`;
  html += `</div>`; // trip-control-panel

  html += `</div>`; // trip-header-inner
  html += `</div>`; // trip-header

  // Content
  html += `<div class="trip-content" id="trip-content">`;

  if (isEmpty) {
    html += `<div class="blank-slate">`;
    html += `<div style="font-size:2.5rem">🗺️</div>`;
    html += `<p>No sections yet. Use the controls above to start building your trip.</p>`;
    html += `</div>`;
  } else {
    // Legacy destinations (top-level trip.destinations array)
    if (hasLegacyDests) {
      html += renderDestinationsHTML(trip);
    }

    // Outbound sections
    if (outboundSections.length > 0) {
      html += `<div class="sections-list" id="sections-list">`;
      outboundSections.forEach(section => {
        if (section.type === 'parent') {
          html += renderParentSectionHTML(section, trip.id, false);
        } else {
          html += renderSectionHTML(section, trip.id, false);
        }
      });
      html += `</div>`;
    }

    html += `<div class="import-section-row">`;
    html += `<button class="btn-import-section" id="btn-import-section-outbound" data-import-target="outbound">${ICON_UP} Import Section or Group</button>`;
    html += `</div>`;

    // Return trip
    if (trip.hasReturnTrip) {
      html += `<div class="return-trip-divider"><span class="return-badge">↩ Return Trip</span></div>`;
      html += `<div class="return-sections-list" id="return-sections-list">`;
      returnSections.forEach(section => {
        if (section.type === 'parent') {
          html += renderParentSectionHTML(section, trip.id, true);
        } else {
          html += renderSectionHTML(section, trip.id, true);
        }
      });
      html += `</div>`;
      html += `<div class="return-trip-actions-row">`;
      html += `<button class="btn-ghost" id="btn-add-return-section">+ Add Return Section</button>`;
      html += `<button class="btn-ghost" id="btn-add-return-parent-section">+ Add Return Group</button>`;
      html += `<button class="btn-ghost" id="btn-import-section-return" data-import-target="return">${ICON_UP} Import</button>`;
      html += `<button class="btn-ghost" id="btn-remove-return" style="border-color:var(--danger);color:var(--danger)">Remove Return Trip</button>`;
      html += `</div>`;
    }
  }

  html += `</div>`; // trip-content

  tripDetail.innerHTML = html;
  attachTripDetailEvents(trip);
  attachSectionEvents(trip);
  attachSortables(trip);
}

function renderDestinationsHTML(trip) {
  let html = `<div class="destinations-section">`;
  html += `<div class="destinations-header">`;
  html += `<span style="font-size:1.1rem">📍</span>`;
  html += `<h3>Destinations</h3>`;
  html += `<button class="btn-secondary btn-sm" id="btn-add-dest-inline">+ Add</button>`;
  html += `</div>`;
  html += `<div class="dest-grid">`;
  (trip.destinations || []).forEach(dest => {
    html += renderDestCardHTML(dest);
  });
  html += `</div></div>`;
  return html;
}

function renderDestCardHTML(dest) {
  const q = dest.country ? `${dest.name}, ${dest.country}` : dest.name;
  let html = `<div class="dest-card">`;
  html += `<div class="dest-card-top">`;
  html += `<div><div class="dest-name">${esc(dest.name)}</div>`;
  if (dest.country) html += `<div class="dest-country">${esc(dest.country)}</div>`;
  html += `</div>`;
  html += `<div class="dest-card-actions">`;
  html += `<button class="btn-icon btn-sm" data-edit-dest="${dest.id}" title="Edit">✎</button>`;
  html += `<button class="btn-icon btn-sm danger" data-delete-dest="${dest.id}" title="Delete">🗑</button>`;
  html += `</div>`;
  html += `</div>`;
  if (dest.startDate || dest.endDate) {
    const ds = fmtDate(dest.startDate);
    const de = fmtDate(dest.endDate);
    html += `<div class="dest-dates">`;
    if (ds && de) html += `${ds} – ${de}`;
    else if (ds) html += `From ${ds}`;
    else if (de) html += `Until ${de}`;
    html += `</div>`;
  }
  if (dest.notes) html += `<div class="dest-notes">${esc(dest.notes)}</div>`;
  html += `<button class="dest-resources-toggle" data-dest-resources="${dest.id}">🔗 Destination Resources ▾</button>`;
  html += `<div class="dest-resources-area" id="dest-res-${dest.id}">`;
  html += `<div class="dest-links-grid">`;
  WEB_LINKS.forEach(link => {
    html += `<a href="${link.url(q)}" target="_blank" rel="noopener noreferrer" class="dest-link-card">`;
    html += `<span class="dest-link-icon">${link.icon}</span>`;
    html += `<span class="dest-link-name">${esc(link.name)}</span>`;
    html += `</a>`;
  });
  html += `</div>`;
  html += `</div>`;
  html += `</div>`;
  return html;
}

function renderSectionHTML(section, tripId, _isReturn) {
  if (section.type === 'destinations') {
    return renderSectionDestinationsHTML(section, tripId);
  }

  const tmpl = SECTION_TEMPLATES[section.type] || {};
  const icon = section.icon !== undefined ? section.icon : (tmpl.icon || '');
  const items = section.items || [];
  const expandedClass = section.expanded !== false ? 'expanded' : '';

  let html = `<div class="content-section ${expandedClass}" data-section-id="${section.id}">`;
  html += `<div class="content-section-header">`;
  html += `<span class="section-drag-handle" data-section-drag>⠿</span>`;
  if (icon) html += `<span class="section-icon" data-section-icon="${section.id}">${icon}</span>`;
  else html += `<span class="section-icon section-icon-empty" data-section-icon="${section.id}"></span>`;
  html += `<span class="section-title-text" data-section-title-text="${section.id}">${esc(section.title)}</span>`;
  html += `<span class="section-header-actions">`;
  html += `<button class="btn-icon btn-sm" data-export-section="${section.id}" data-export-trip="${tripId}" title="Export section">${ICON_DN}</button>`;
  html += `<button class="btn-icon btn-sm" data-import-section="${section.id}" data-import-trip="${tripId}" title="Import into section">${ICON_UP}</button>`;
  html += `<button class="btn-icon btn-sm" data-share-section="${section.id}" data-share-trip="${tripId}" title="Share section">${ICON_SHARE}</button>`;
  html += `<button class="btn-icon btn-sm" data-rename-section="${section.id}" title="Rename section">✎</button>`;
  html += `<button class="btn-icon btn-sm danger" data-delete-section="${section.id}" data-section-trip="${tripId}" title="Delete section">🗑</button>`;
  html += `</span>`;
  html += `<span class="section-chevron">▶</span>`;
  html += `</div>`; // content-section-header

  html += `<div class="section-body">`;
  if (items.length > 0) {
    html += `<div class="item-list" data-items-container="${section.id}">`;
    items.forEach((item, idx) => {
      html += renderItemHTML(item, section.id, tripId, idx);
    });
    html += `</div>`;
  } else {
    html += `<div class="item-list" data-items-container="${section.id}"></div>`;
  }
  html += `<button class="btn-ghost" data-add-entry="${section.id}" data-entry-trip="${tripId}">+ Add Entry</button>`;
  html += `</div>`; // section-body

  html += `</div>`; // content-section
  return html;
}

function renderSectionDestinationsHTML(section, tripId) {
  const dests = (section.items || []);
  const expandedClass = section.expanded !== false ? 'expanded' : '';

  let html = `<div class="content-section ${expandedClass}" data-section-id="${section.id}">`;
  html += `<div class="content-section-header">`;
  html += `<span class="section-drag-handle" data-section-drag>⠿</span>`;
  const destIcon = section.icon !== undefined ? section.icon : '📍';
  if (destIcon) html += `<span class="section-icon" data-section-icon="${section.id}">${destIcon}</span>`;
  else html += `<span class="section-icon section-icon-empty" data-section-icon="${section.id}"></span>`;
  html += `<span class="section-title-text" data-section-title-text="${section.id}">${esc(section.title)}</span>`;
  html += `<span class="section-header-actions">`;
  html += `<button class="btn-icon btn-sm" data-export-section="${section.id}" data-export-trip="${tripId}" title="Export section">${ICON_DN}</button>`;
  html += `<button class="btn-icon btn-sm" data-import-section="${section.id}" data-import-trip="${tripId}" title="Import into section">${ICON_UP}</button>`;
  html += `<button class="btn-icon btn-sm" data-share-section="${section.id}" data-share-trip="${tripId}" title="Share section">${ICON_SHARE}</button>`;
  html += `<button class="btn-icon btn-sm" data-rename-section="${section.id}" title="Rename section">✎</button>`;
  html += `<button class="btn-icon btn-sm danger" data-delete-section="${section.id}" data-section-trip="${tripId}" title="Delete section">🗑</button>`;
  html += `</span>`;
  html += `<span class="section-chevron">▶</span>`;
  html += `</div>`;

  html += `<div class="section-body">`;
  if (dests.length > 0) {
    html += `<div class="dest-grid">`;
    dests.forEach(dest => {
      html += renderDestCardHTML(dest);
    });
    html += `</div>`;
  }
  html += `<button class="btn-ghost" data-add-section-dest="${section.id}" data-dest-trip="${tripId}" style="margin-top:.5rem">+ Add Destination</button>`;
  html += `</div>`;

  html += `</div>`;
  return html;
}

function renderParentSectionHTML(section, tripId, isReturn) {
  const expandedClass = section.expanded !== false ? 'expanded' : '';
  const children = section.children || [];

  let html = `<div class="parent-section ${expandedClass}" data-section-id="${section.id}">`;
  html += `<div class="parent-section-header">`;
  html += `<span class="section-drag-handle" data-section-drag>⠿</span>`;
  const parentIcon = section.icon !== undefined ? section.icon : '📁';
  if (parentIcon) html += `<span class="parent-section-icon" data-section-icon="${section.id}">${parentIcon}</span>`;
  else html += `<span class="parent-section-icon section-icon-empty" data-section-icon="${section.id}"></span>`;
  html += `<span class="parent-section-title" data-section-title-text="${section.id}">${esc(section.title)}</span>`;
  html += `<span class="parent-section-header-actions">`;
  html += `<button class="btn-icon btn-sm" data-export-section="${section.id}" data-export-trip="${tripId}" title="Export group">${ICON_DN}</button>`;
  html += `<button class="btn-icon btn-sm" data-import-section="${section.id}" data-import-trip="${tripId}" title="Import into group">${ICON_UP}</button>`;
  html += `<button class="btn-icon btn-sm" data-share-section="${section.id}" data-share-trip="${tripId}" title="Share group">${ICON_SHARE}</button>`;
  html += `<button class="btn-icon btn-sm" data-rename-section="${section.id}" title="Rename">✎</button>`;
  html += `<button class="btn-icon btn-sm danger" data-delete-section="${section.id}" data-section-trip="${tripId}" title="Delete">🗑</button>`;
  html += `</span>`;
  html += `<span class="parent-section-chevron">▶</span>`;
  html += `</div>`; // parent-section-header

  html += `<div class="parent-section-body">`;
  if (children.length > 0) {
    html += `<div class="parent-section-children" data-children-container="${section.id}">`;
    children.forEach(child => {
      if (child.type === 'parent') {
        html += renderParentSectionHTML(child, tripId, isReturn);
      } else {
        html += renderSectionHTML(child, tripId, isReturn);
      }
    });
    html += `</div>`;
  } else {
    html += `<div class="parent-section-children" data-children-container="${section.id}"></div>`;
  }
  html += `<div class="parent-section-footer">`;
  html += `<button class="btn-ghost" data-add-child-section="${section.id}" data-parent-trip="${tripId}">+ Add Subsection</button>`;
  html += `<button class="btn-ghost" data-add-child-group="${section.id}" data-parent-trip="${tripId}">+ Add Subgroup</button>`;
  html += `<button class="btn-import-section btn-import-child" data-import-parent="${section.id}" data-parent-trip="${tripId}">${ICON_UP} Import</button>`;
  html += `</div>`;
  html += `</div>`; // parent-section-body

  html += `</div>`; // parent-section
  return html;
}

function renderItemHTML(item, sectionId, tripId, idx) {
  const itemNum = idx + 1;
  const fields = item.fields || [];
  const titleText = item.title || '';
  const displayTitle = titleText || `Entry ${itemNum}`;

  let html = `<div class="item-card" data-item-id="${item.id}">`;
  html += `<div class="item-card-header">`;
  html += `<span class="item-drag-handle" data-item-drag>⠿</span>`;
  html += `<span class="item-card-title" contenteditable="true" data-item-title="${item.id}" data-item-section="${sectionId}" data-item-trip="${tripId}" title="Click to rename">${esc(displayTitle)}</span>`;
  html += `<div class="item-card-actions">`;
  html += `<button class="btn-icon btn-sm" data-add-field="${item.id}" data-field-section="${sectionId}" data-field-trip="${tripId}" title="Add field">+ Field</button>`;
  html += `<button class="btn-icon btn-sm" data-export-item="${item.id}" data-item-section="${sectionId}" data-item-trip="${tripId}" title="Export entry">${ICON_DN}</button>`;
  html += `<button class="btn-icon btn-sm" data-import-entry="${sectionId}" data-entry-trip="${tripId}" title="Import entry from file">${ICON_UP}</button>`;
  html += `<button class="btn-icon btn-sm" data-share-item="${item.id}" data-share-section="${sectionId}" data-share-trip="${tripId}" title="Share entry">${ICON_SHARE}</button>`;
  html += `<button class="btn-icon btn-sm danger" data-delete-item="${item.id}" data-item-section="${sectionId}" data-item-trip="${tripId}" title="Delete entry">🗑</button>`;
  html += `</div>`;
  html += `</div>`; // item-card-header

  html += `<div class="item-fields" data-fields-container="${item.id}" data-fields-section="${sectionId}" data-fields-trip="${tripId}">`;
  fields.forEach(field => {
    const isTextarea = field.type === 'textarea';
    const fullClass = isTextarea ? 'field-full' : '';
    html += `<div class="field-group ${fullClass}" data-field-id="${field.id}">`;
    html += `<div class="field-label-row">`;
    html += `<span class="field-drag-handle" data-field-drag title="Drag to reorder">⠿</span>`;
    html += `<span class="field-label" contenteditable="true" data-field-label="${field.id}" data-item-id="${item.id}" data-section-id="${sectionId}" data-trip-id="${tripId}">${esc(field.label)}</span>`;
    html += `<button class="field-delete danger" data-delete-field="${field.id}" data-item-id="${item.id}" data-section-id="${sectionId}" data-trip-id="${tripId}" title="Delete field">✕</button>`;
    html += `</div>`;
    if (isTextarea) {
      html += `<textarea class="field-input" rows="2" data-field-input="${field.id}" data-item-id="${item.id}" data-section-id="${sectionId}" data-trip-id="${tripId}">${esc(field.value || '')}</textarea>`;
    } else {
      html += `<input type="${esc(field.type)}" class="field-input" value="${esc(field.value || '')}" data-field-input="${field.id}" data-item-id="${item.id}" data-section-id="${sectionId}" data-trip-id="${tripId}">`;
    }
    html += `</div>`;
  });
  html += `</div>`; // item-fields

  html += `<div class="item-footer">`;
  html += `</div>`;

  html += `</div>`; // item-card
  return html;
}

function attachTripDetailEvents(trip) {
  const el = id => document.getElementById(id);

  // Edit trip
  const btnEdit = el('btn-edit-trip');
  if (btnEdit) btnEdit.addEventListener('click', () => openEditTrip(trip.id));

  // Export trip
  const btnExport = el('btn-export-trip');
  if (btnExport) btnExport.addEventListener('click', () => exportSingleTrip(trip.id));

  // Share trip
  const btnShareTrip = el('btn-share-trip');
  if (btnShareTrip) btnShareTrip.addEventListener('click', () => shareTrip(trip.id));

  // Close trip
  const btnCloseTrip = el('btn-close-trip');
  if (btnCloseTrip) btnCloseTrip.addEventListener('click', () => {
    state.currentTripId = null;
    renderSidebar();
    renderTripDetail();
  });

  // Add destination (inline in destinations section)
  const btnAddDestInline = el('btn-add-dest-inline');
  if (btnAddDestInline) btnAddDestInline.addEventListener('click', () => openAddDest(trip.id));

  // Expand All / Collapse All
  const btnExpandAll = el('btn-expand-all');
  if (btnExpandAll) btnExpandAll.addEventListener('click', () => expandCollapseAll(true));

  const btnCollapseAll = el('btn-collapse-all');
  if (btnCollapseAll) btnCollapseAll.addEventListener('click', () => expandCollapseAll(false));

  // Edit/Delete destinations
  const tripContent = el('trip-content');
  if (tripContent) {
    // Destination resources toggles
    tripContent.querySelectorAll('[data-dest-resources]').forEach(btn => {
      btn.addEventListener('click', () => {
        const destId = btn.dataset.destResources;
        const area = document.getElementById('dest-res-' + destId);
        if (!area) return;
        const isOpen = area.classList.toggle('open');
        btn.textContent = isOpen ? '🔗 Destination Resources ▴' : '🔗 Destination Resources ▾';
      });
    });

    tripContent.querySelectorAll('[data-edit-dest]').forEach(btn => {
      btn.addEventListener('click', () => openEditDest(trip.id, btn.dataset.editDest));
    });
    tripContent.querySelectorAll('[data-delete-dest]').forEach(btn => {
      btn.addEventListener('click', () => {
        trip.destinations = (trip.destinations || []).filter(d => d.id !== btn.dataset.deleteDest);
        // Also check section destinations
        (trip.sections || []).forEach(sec => {
          if (sec.type === 'destinations') {
            sec.items = (sec.items || []).filter(d => d.id !== btn.dataset.deleteDest);
          }
        });
        trip.updatedAt = new Date().toISOString();
        save();
        renderTripDetail();
      });
    });

    // Section destination add buttons
    tripContent.querySelectorAll('[data-add-section-dest]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.addDestSectionContext = { tripId: btn.dataset.destTrip, sectionId: btn.dataset.addSectionDest };
        state.editingDestId = null;
        document.getElementById('modal-dest-title').textContent = 'Add Destination';
        document.getElementById('f-dest-name').value = '';
        document.getElementById('f-dest-country').value = '';
        document.getElementById('f-dest-start').value = '';
        document.getElementById('f-dest-end').value = '';
        document.getElementById('f-dest-notes').value = '';
        openModal('modal-dest');
        setTimeout(() => document.getElementById('f-dest-name').focus(), 50);
      });
    });
  }

  // Blank slate buttons
  const btnBlankSection = el('btn-blank-add-section');
  if (btnBlankSection) btnBlankSection.addEventListener('click', () => openAddSection(trip.id, false));

  const btnBlankAddParent = el('btn-blank-add-parent-section');
  if (btnBlankAddParent) btnBlankAddParent.addEventListener('click', () => openAddParentSection(trip.id, false));

  const btnBlankReturn = el('btn-blank-return');
  if (btnBlankReturn) btnBlankReturn.addEventListener('click', () => {
    trip.hasReturnTrip = true;
    trip.returnSections = trip.returnSections || [];
    trip.updatedAt = new Date().toISOString();
    save();
    renderTripDetail();
  });

  // Add section
  const btnAddSection = el('btn-add-section');
  if (btnAddSection) btnAddSection.addEventListener('click', () => openAddSection(trip.id, false));

  // Add parent section
  const btnAddParentSection = el('btn-add-parent-section');
  if (btnAddParentSection) btnAddParentSection.addEventListener('click', () => openAddParentSection(trip.id, false));

  // Add return trip
  const btnAddReturn = el('btn-add-return');
  if (btnAddReturn) btnAddReturn.addEventListener('click', () => {
    trip.hasReturnTrip = true;
    trip.returnSections = trip.returnSections || [];
    trip.updatedAt = new Date().toISOString();
    save();
    renderTripDetail();
  });

  // Add return section
  const btnAddReturnSection = el('btn-add-return-section');
  if (btnAddReturnSection) btnAddReturnSection.addEventListener('click', () => openAddSection(trip.id, true));

  // Add return parent section
  const btnAddReturnParent = el('btn-add-return-parent-section');
  if (btnAddReturnParent) btnAddReturnParent.addEventListener('click', () => openAddParentSection(trip.id, true));

  // Remove return trip
  const btnRemoveReturn = el('btn-remove-return');
  if (btnRemoveReturn) btnRemoveReturn.addEventListener('click', () => {
    if (confirm('Remove the return trip section and all its entries?')) {
      trip.hasReturnTrip = false;
      trip.returnSections = [];
      trip.updatedAt = new Date().toISOString();
      save();
      renderTripDetail();
    }
  });

  // Import section (outbound)
  const btnImportOutbound = el('btn-import-section-outbound');
  if (btnImportOutbound) btnImportOutbound.addEventListener('click', () => openImportSection(trip.id, false, null, null));

  // Import section (return)
  const btnImportReturn = el('btn-import-section-return');
  if (btnImportReturn) btnImportReturn.addEventListener('click', () => openImportSection(trip.id, true, null, null));
}

function expandCollapseAll(expand) {
  const trip = getTrip(state.currentTripId);
  if (!trip) return;
  function applyExpand(sections) {
    sections.forEach(sec => {
      sec.expanded = expand;
      if (sec.type === 'parent' && sec.children) applyExpand(sec.children);
    });
  }
  applyExpand(trip.sections || []);
  applyExpand(trip.returnSections || []);
  save();
  renderTripDetail();
}

function attachSectionEvents(trip) {
  const content = document.getElementById('trip-content');
  if (!content) return;

  // Section header click: collapse/expand (regular sections)
  content.querySelectorAll('.content-section-header').forEach(header => {
    header.addEventListener('click', e => {
      if (e.target.closest('button') || e.target.closest('[contenteditable]')) return;
      const section = header.closest('.content-section');
      section.classList.toggle('expanded');
      const sectionId = section.dataset.sectionId;
      const t = getTrip(state.currentTripId);
      if (t) {
        const sec = getSection(t, sectionId);
        if (sec) sec.expanded = section.classList.contains('expanded');
      }
      save();
    });
  });

  // Parent section header click
  content.querySelectorAll('.parent-section-header').forEach(header => {
    header.addEventListener('click', e => {
      if (e.target.closest('button') || e.target.closest('[contenteditable]')) return;
      // Ignore if the click originated from a nested group's header (prevent double-toggle)
      if (e.target.closest('.parent-section-header') !== header) return;
      const parentSec = header.closest('.parent-section');
      parentSec.classList.toggle('expanded');
      const sectionId = parentSec.dataset.sectionId;
      const t = getTrip(state.currentTripId);
      if (t) {
        const sec = getSection(t, sectionId);
        if (sec) sec.expanded = parentSec.classList.contains('expanded');
      }
      save();
    });
  });

  // Add child section inside parent
  content.querySelectorAll('[data-add-child-section]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      openAddSection(btn.dataset.parentTrip, false, btn.dataset.addChildSection);
    });
  });

  // Add child group (parent inside parent)
  content.querySelectorAll('[data-add-child-group]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      openAddParentSection(btn.dataset.parentTrip, false, btn.dataset.addChildGroup);
    });
  });

  // Import child section into parent
  content.querySelectorAll('[data-import-parent]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      openImportSection(btn.dataset.parentTrip, false, btn.dataset.importParent, null);
    });
  });

  // Import into section (from section header)
  // For parent sections: import a section file as a child (use parentId).
  // For regular/destinations sections: import entries into the section (use targetSectionId).
  content.querySelectorAll('[data-import-section]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const sectionId = btn.dataset.importSection;
      const tripId = btn.dataset.importTrip;
      const sec = getSection(getTrip(tripId), sectionId);
      if (sec && sec.type === 'parent') {
        // Treat like [data-import-parent]: add imported section as a child
        openImportSection(tripId, false, sectionId, null);
      } else {
        // Import entries into this section
        openImportSection(tripId, false, null, sectionId);
      }
    });
  });

  // Rename section
  content.querySelectorAll('[data-rename-section]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const sectionId = btn.dataset.renameSection;
      const titleEl = content.querySelector(`[data-section-title-text="${sectionId}"]`);
      const iconEl = content.querySelector(`[data-section-icon="${sectionId}"]`);
      if (!titleEl) return;

      const sec = getSection(trip, sectionId);
      if (!sec) return;

      const tmplForSec = SECTION_TEMPLATES[sec.type] || {};
      const currentIcon = sec.icon !== undefined ? sec.icon : (tmplForSec.icon || '');

      // Build inline rename wrapper with icon + title inputs
      const wrapper = document.createElement('span');
      wrapper.className = 'section-rename-wrapper';

      const iconInput = document.createElement('input');
      iconInput.type = 'text';
      iconInput.className = 'section-icon-rename-input';
      iconInput.value = currentIcon;
      iconInput.placeholder = tmplForSec.icon || '✏️';
      iconInput.maxLength = 4;
      iconInput.title = 'Icon / Emoji';

      const titleInput = document.createElement('input');
      titleInput.type = 'text';
      titleInput.className = 'section-rename-input';
      titleInput.value = sec.title;

      wrapper.appendChild(iconInput);
      wrapper.appendChild(titleInput);

      // Replace title element; hide icon element
      titleEl.replaceWith(wrapper);
      if (iconEl) iconEl.style.display = 'none';

      const headerEl = wrapper.closest('.content-section-header') || wrapper.closest('.parent-section-header');
      if (headerEl) headerEl.classList.add('is-renaming');

      titleInput.focus();
      titleInput.select();

      let saved = false;
      const save_rename = () => {
        if (saved) return;
        // Check if focus moved to the other input in the wrapper
        setTimeout(() => {
          if (saved) return;
          if (wrapper.contains(document.activeElement)) return; // focus still inside wrapper
          saved = true;
          const newTitle = titleInput.value.trim();
          const newIcon = iconInput.value.trim();
          if (newTitle) sec.title = newTitle;
          sec.icon = newIcon;
          save();
          renderTripDetail();
        }, 100);
      };
      titleInput.addEventListener('blur', save_rename);
      iconInput.addEventListener('blur', save_rename);
      titleInput.addEventListener('keydown', e2 => {
        if (e2.key === 'Enter') { titleInput.blur(); }
        if (e2.key === 'Escape') {
          saved = true;
          renderTripDetail();
        }
      });
      iconInput.addEventListener('keydown', e2 => {
        if (e2.key === 'Enter') { titleInput.focus(); }
        if (e2.key === 'Escape') {
          saved = true;
          renderTripDetail();
        }
      });
    });
  });

  // Delete section
  content.querySelectorAll('[data-delete-section]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const sectionId = btn.dataset.deleteSection;
      const tripId = btn.dataset.sectionTrip;
      const t = getTrip(tripId);
      if (!t) return;
      if (confirm('Delete this section and all its entries?')) {
        removeSectionRecursive(t.sections || [], sectionId);
        removeSectionRecursive(t.returnSections || [], sectionId);
        t.updatedAt = new Date().toISOString();
        save();
        renderTripDetail();
      }
    });
  });

  // Export section
  content.querySelectorAll('[data-export-section]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      exportSection(btn.dataset.exportTrip, btn.dataset.exportSection);
    });
  });

  // Export entry
  content.querySelectorAll('[data-export-item]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      exportEntry(btn.dataset.itemTrip, btn.dataset.itemSection, btn.dataset.exportItem);
    });
  });

  // Import entry (reuses file-import-section, ctx.targetSectionId set so handler knows it's an entry target)
  content.querySelectorAll('[data-import-entry]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      openImportSection(btn.dataset.entryTrip, false, null, btn.dataset.importEntry);
    });
  });

  // Share section
  // Exclude item-level share buttons (which also carry data-share-section but are handled below)
  content.querySelectorAll('[data-share-section]:not([data-share-item])').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      shareSection(btn.dataset.shareTrip, btn.dataset.shareSection);
    });
  });

  // Share item
  content.querySelectorAll('[data-share-item]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      shareItem(btn.dataset.shareTrip, btn.dataset.shareSection, btn.dataset.shareItem);
    });
  });

  // Add entry
  content.querySelectorAll('[data-add-entry]').forEach(btn => {
    btn.addEventListener('click', () => {
      const sectionId = btn.dataset.addEntry;
      const tripId = btn.dataset.entryTrip;
      const t = getTrip(tripId);
      if (!t) return;
      const sec = getSection(t, sectionId);
      if (!sec) return;
      const tmpl = SECTION_TEMPLATES[sec.type] || SECTION_TEMPLATES.custom;
      const newItem = {
        id: uid(),
        title: '',
        fields: tmpl.fields.map(f => ({ id: uid(), label: f.label, type: f.type, value: '' }))
      };
      sec.items = sec.items || [];
      sec.items.push(newItem);
      sec.expanded = true;
      t.updatedAt = new Date().toISOString();
      save();
      renderTripDetail();
      // Scroll to the new item
      setTimeout(() => {
        const newCard = document.querySelector(`[data-item-id="${newItem.id}"]`);
        if (newCard) newCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 50);
    });
  });

  // Delete item
  content.querySelectorAll('[data-delete-item]').forEach(btn => {
    btn.addEventListener('click', () => {
      const itemId = btn.dataset.deleteItem;
      const sectionId = btn.dataset.itemSection;
      const tripId = btn.dataset.itemTrip;
      const t = getTrip(tripId);
      if (!t) return;
      const sec = getSection(t, sectionId);
      if (!sec) return;
      if (confirm('Delete this entry?')) {
        sec.items = (sec.items || []).filter(i => i.id !== itemId);
        t.updatedAt = new Date().toISOString();
        save();
        renderTripDetail();
      }
    });
  });

  // Add field
  content.querySelectorAll('[data-add-field]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.addFieldContext = {
        tripId: btn.dataset.fieldTrip,
        sectionId: btn.dataset.fieldSection,
        itemId: btn.dataset.addField
      };
      document.getElementById('f-field-label').value = '';
      document.getElementById('f-field-type').value = 'text';
      openModal('modal-field');
      setTimeout(() => document.getElementById('f-field-label').focus(), 50);
    });
  });

  // Delete field
  content.querySelectorAll('[data-delete-field]').forEach(btn => {
    btn.addEventListener('click', () => {
      const fieldId = btn.dataset.deleteField;
      const itemId = btn.dataset.itemId;
      const sectionId = btn.dataset.sectionId;
      const tripId = btn.dataset.tripId;
      const t = getTrip(tripId);
      if (!t) return;
      const sec = getSection(t, sectionId);
      if (!sec) return;
      const item = getItem(sec, itemId);
      if (!item) return;
      item.fields = item.fields.filter(f => f.id !== fieldId);
      t.updatedAt = new Date().toISOString();
      save();
      renderTripDetail();
    });
  });

  // Field label edit (contenteditable)
  content.querySelectorAll('[data-field-label]').forEach(span => {
    span.addEventListener('blur', () => {
      const fieldId = span.dataset.fieldLabel;
      const itemId = span.dataset.itemId;
      const sectionId = span.dataset.sectionId;
      const tripId = span.dataset.tripId;
      const t = getTrip(tripId);
      if (!t) return;
      const sec = getSection(t, sectionId);
      if (!sec) return;
      const item = getItem(sec, itemId);
      if (!item) return;
      const field = item.fields.find(f => f.id === fieldId);
      if (!field) return;
      const val = span.textContent.trim();
      if (val) field.label = val;
      t.updatedAt = new Date().toISOString();
      save();
    });
    span.addEventListener('keydown', e => {
      if (e.key === 'Enter') { e.preventDefault(); span.blur(); }
    });
  });

  // Item title edit (contenteditable)
  content.querySelectorAll('[data-item-title]').forEach(span => {
    span.addEventListener('focus', () => {
      // Clear default "Entry N" text on focus if it's the auto-generated title
      const itemId = span.dataset.itemTitle;
      const sectionId = span.dataset.itemSection;
      const tripId = span.dataset.itemTrip;
      const t = getTrip(tripId);
      if (!t) return;
      const sec = getSection(t, sectionId);
      if (!sec) return;
      const item = getItem(sec, itemId);
      if (!item) return;
      if (!item.title) {
        span.textContent = '';
      }
    });
    span.addEventListener('blur', () => {
      const itemId = span.dataset.itemTitle;
      const sectionId = span.dataset.itemSection;
      const tripId = span.dataset.itemTrip;
      const t = getTrip(tripId);
      if (!t) return;
      const sec = getSection(t, sectionId);
      if (!sec) return;
      const item = getItem(sec, itemId);
      if (!item) return;
      item.title = span.textContent.trim();
      t.updatedAt = new Date().toISOString();
      save();
      // Refresh the display title if empty
      if (!item.title) {
        const idx = sec.items.findIndex(i => i.id === itemId);
        span.textContent = `Entry ${idx + 1}`;
      }
    });
    span.addEventListener('keydown', e => {
      if (e.key === 'Enter') { e.preventDefault(); span.blur(); }
    });
  });

  // Field input changes
  const saveFieldInput = debounce((fieldId, itemId, sectionId, tripId, value) => {
    const t = getTrip(tripId);
    if (!t) return;
    const sec = getSection(t, sectionId);
    if (!sec) return;
    const item = getItem(sec, itemId);
    if (!item) return;
    const field = item.fields.find(f => f.id === fieldId);
    if (!field) return;
    field.value = value;
    t.updatedAt = new Date().toISOString();
    save();
  }, 300);

  content.querySelectorAll('[data-field-input]').forEach(input => {
    input.addEventListener('input', () => {
      saveFieldInput(
        input.dataset.fieldInput,
        input.dataset.itemId,
        input.dataset.sectionId,
        input.dataset.tripId,
        input.value
      );
    });
  });
}

function attachSortables(_trip) {
  const content = document.getElementById('trip-content');
  if (!content) return;

  // Cross-container section drag (sections ↔ groups ↔ children)
  attachCrossContainerSectionDrag();

  // Sort items in each section
  content.querySelectorAll('[data-items-container]').forEach(container => {
    const sectionId = container.dataset.itemsContainer;
    createSortableV2(container, {
      handleSelector: '[data-item-drag]',
      itemAttr: 'item-id',
      onEnd: (ids) => {
        const t = getTrip(state.currentTripId);
        if (!t) return;
        const sec = getSection(t, sectionId);
        if (!sec) return;
        const reordered = ids.map(id => sec.items.find(i => i.id === id)).filter(Boolean);
        if (reordered.length === 0 && ids.length > 0) return;
        sec.items = reordered;
        t.updatedAt = new Date().toISOString();
        save();
      }
    });
  });

  // Sort fields within each entry
  content.querySelectorAll('[data-fields-container]').forEach(container => {
    const itemId = container.dataset.fieldsContainer;
    const sectionId = container.dataset.fieldsSection;
    createSortableV2(container, {
      handleSelector: '[data-field-drag]',
      itemAttr: 'field-id',
      onEnd: (ids) => {
        const t = getTrip(state.currentTripId);
        if (!t) return;
        const sec = getSection(t, sectionId);
        if (!sec) return;
        const item = getItem(sec, itemId);
        if (!item) return;
        const reordered = ids.map(id => item.fields.find(f => f.id === id)).filter(Boolean);
        if (reordered.length === 0 && ids.length > 0) return;
        item.fields = reordered;
        t.updatedAt = new Date().toISOString();
        save();
      }
    });
  });
}

function attachCrossContainerSectionDrag() {
  const content = document.getElementById('trip-content');
  if (!content) return;

  let dragEl = null;
  let ghost = null;
  let offsetX = 0, offsetY = 0;
  let moved = false;
  let startX = 0, startY = 0;

  // Collect all valid drop containers (visible, not inside dragEl, not dragEl's own children container)
  function getAllContainers() {
    const containers = [];
    const sectList = document.getElementById('sections-list');
    if (sectList) containers.push(sectList);
    const retList = document.getElementById('return-sections-list');
    if (retList) containers.push(retList);
    content.querySelectorAll('[data-children-container]').forEach(el => {
      if (!dragEl.contains(el) && el.dataset.childrenContainer !== (dragEl && dragEl.dataset.sectionId)) {
        containers.push(el);
      }
    });
    return containers;
  }

  // Build a list of all valid insertion points with their Y coordinates
  function getInsertionPoints() {
    const points = [];
    const containers = getAllContainers();

    for (const container of containers) {
      if (dragEl.contains(container)) continue;
      if (container.dataset.childrenContainer === dragEl.dataset.sectionId) continue;

      const children = [...container.querySelectorAll(':scope > [data-section-id]')]
        .filter(el => el !== dragEl);

      const containerRect = container.getBoundingClientRect();
      // Skip containers with no visual presence (collapsed/hidden parents)
      if (containerRect.width === 0 && containerRect.height === 0) continue;

      if (children.length === 0) {
        // Empty container — single insertion point at the container midpoint
        points.push({ y: containerRect.top + Math.max(containerRect.height, 20) / 2, container, before: null });
      } else {
        // Before the first child
        const r0 = children[0].getBoundingClientRect();
        points.push({ y: r0.top - 4, container, before: children[0] });

        // Between each pair of adjacent children
        for (let i = 0; i < children.length - 1; i++) {
          const ra = children[i].getBoundingClientRect();
          const rb = children[i + 1].getBoundingClientRect();
          points.push({ y: (ra.bottom + rb.top) / 2, container, before: children[i + 1] });
        }

        // After the last child
        const rLast = children[children.length - 1].getBoundingClientRect();
        points.push({ y: rLast.bottom + 4, container, before: null });
      }
    }

    return points;
  }

  content.addEventListener('pointerdown', start, { passive: false });

  function start(e) {
    const handle = e.target.closest('[data-section-drag]');
    if (!handle) return;
    const item = handle.closest('[data-section-id]');
    if (!item) return;

    dragEl = item;
    startX = e.clientX;
    startY = e.clientY;
    moved = false;

    const rect = item.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    document.addEventListener('pointermove', move, { passive: false });
    document.addEventListener('pointerup', end);
    document.addEventListener('pointercancel', end);
  }

  function move(e) {
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    if (!moved && Math.sqrt(dx * dx + dy * dy) < 8) return;

    if (!moved) {
      moved = true;
      const rect = dragEl.getBoundingClientRect();
      ghost = dragEl.cloneNode(true);
      ghost.style.cssText = `position:fixed;left:${rect.left}px;top:${rect.top}px;width:${rect.width}px;height:${rect.height}px;pointer-events:none;z-index:9999;opacity:0.85;box-shadow:0 8px 24px rgba(0,0,0,.18);border-radius:5px;background:white;`;
      document.body.appendChild(ghost);
      dragEl.classList.add('drag-placeholder');
      document.body.classList.add('is-section-dragging');
    }

    e.preventDefault();
    ghost.style.left = (e.clientX - offsetX) + 'px';
    ghost.style.top = (e.clientY - offsetY) + 'px';

    // Find the insertion point closest to the cursor's Y position
    const points = getInsertionPoints();
    if (points.length === 0) return;

    let best = points[0];
    let bestDist = Math.abs(e.clientY - best.y);
    for (const pt of points) {
      const dist = Math.abs(e.clientY - pt.y);
      if (dist < bestDist) { bestDist = dist; best = pt; }
    }

    // Move the placeholder to the target position in the DOM
    if (best.before) {
      best.container.insertBefore(dragEl, best.before);
    } else {
      best.container.appendChild(dragEl);
    }
  }

  function end() {
    document.removeEventListener('pointermove', move);
    document.removeEventListener('pointerup', end);
    document.removeEventListener('pointercancel', end);
    document.body.classList.remove('is-section-dragging');

    if (ghost) { ghost.remove(); ghost = null; }
    if (dragEl) dragEl.classList.remove('drag-placeholder');

    if (moved && dragEl) {
      const finalContainer = dragEl.parentElement;

      if (!finalContainer || !finalContainer.isConnected) {
        dragEl = null; moved = false;
        return;
      }

      const t = getTrip(state.currentTripId);
      if (t) {
        const sectionId = dragEl.dataset.sectionId;
        const section = getSection(t, sectionId);
        if (section) {
          removeSectionRecursive(t.sections, sectionId);
          removeSectionRecursive(t.returnSections || [], sectionId);

          const cid = finalContainer.id;
          const parentId = finalContainer.dataset ? finalContainer.dataset.childrenContainer : null;
          const orderedIds = [...finalContainer.querySelectorAll(':scope > [data-section-id]')].map(el => el.dataset.sectionId);

          let targetArr = null;
          if (cid === 'sections-list') {
            targetArr = t.sections;
          } else if (cid === 'return-sections-list') {
            if (!t.returnSections) t.returnSections = [];
            targetArr = t.returnSections;
          } else if (parentId) {
            const parent = getSection(t, parentId);
            if (parent) {
              if (!parent.children) parent.children = [];
              targetArr = parent.children;
            }
          }

          if (targetArr) {
            const lookup = new Map(targetArr.map(s => [s.id, s]));
            lookup.set(sectionId, section);
            const newArr = orderedIds.map(id => lookup.get(id)).filter(Boolean);
            if (cid === 'sections-list') t.sections = newArr;
            else if (cid === 'return-sections-list') t.returnSections = newArr;
            else if (parentId) {
              const parent = getSection(t, parentId);
              if (parent) parent.children = newArr;
            }
            t.updatedAt = new Date().toISOString();
            save();
            renderTripDetail();
          } else {
            t.sections.push(section);
            t.updatedAt = new Date().toISOString();
            save();
            renderTripDetail();
          }
        }
      }
    }

    dragEl = null;
    moved = false;
  }
}

// ===== Trip CRUD =====

function openNewTrip(groupId) {
  state.editingTripId = null;
  document.getElementById('modal-trip-title').textContent = 'New Trip';
  document.getElementById('f-trip-name').value = '';
  document.getElementById('f-trip-desc').value = '';
  document.getElementById('f-trip-start').value = '';
  document.getElementById('f-trip-end').value = '';
  document.getElementById('f-trip-color').value = '#1a56db';
  populateGroupSelect(groupId || 'default');
  buildColorPresets();
  openModal('modal-trip');
  setTimeout(() => document.getElementById('f-trip-name').focus(), 50);
}

function openEditTrip(id) {
  const trip = getTrip(id);
  if (!trip) return;
  state.editingTripId = id;
  document.getElementById('modal-trip-title').textContent = 'Edit Trip';
  document.getElementById('f-trip-name').value = trip.name;
  document.getElementById('f-trip-desc').value = trip.description || '';
  document.getElementById('f-trip-start').value = trip.startDate || '';
  document.getElementById('f-trip-end').value = trip.endDate || '';
  document.getElementById('f-trip-color').value = trip.color || '#1a56db';
  populateGroupSelect(trip.groupId);
  buildColorPresets();
  openModal('modal-trip');
  setTimeout(() => document.getElementById('f-trip-name').focus(), 50);
}

function saveTrip() {
  const name = document.getElementById('f-trip-name').value.trim();
  if (!name) { alert('Trip name is required.'); return; }

  const groupId = document.getElementById('f-trip-group').value || 'default';

  if (state.editingTripId) {
    const trip = getTrip(state.editingTripId);
    if (!trip) return;
    trip.name = name;
    trip.description = document.getElementById('f-trip-desc').value.trim();
    trip.startDate = document.getElementById('f-trip-start').value;
    trip.endDate = document.getElementById('f-trip-end').value;
    trip.color = document.getElementById('f-trip-color').value;
    trip.groupId = groupId;
    trip.updatedAt = new Date().toISOString();
    save();
    closeModal('modal-trip');
    renderSidebar();
    renderTripDetail();
  } else {
    const existingInGroup = tripsInGroup(groupId);
    const newTrip = {
      id: uid(),
      groupId,
      order: existingInGroup.length,
      name,
      description: document.getElementById('f-trip-desc').value.trim(),
      startDate: document.getElementById('f-trip-start').value,
      endDate: document.getElementById('f-trip-end').value,
      color: document.getElementById('f-trip-color').value || '#1a56db',
      hasReturnTrip: false,
      destinations: [],
      sections: [],
      returnSections: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    state.trips.push(newTrip);
    state.currentTripId = newTrip.id;
    save();
    closeModal('modal-trip');
    renderSidebar();
    renderTripDetail();
  }
}

function populateGroupSelect(selectedGroupId) {
  const sel = document.getElementById('f-trip-group');
  sel.innerHTML = '';
  state.groups.sort((a, b) => a.order - b.order).forEach(g => {
    const opt = document.createElement('option');
    opt.value = g.id;
    opt.textContent = g.name;
    if (g.id === selectedGroupId) opt.selected = true;
    sel.appendChild(opt);
  });
}

function buildColorPresets() {
  const container = document.getElementById('color-presets');
  const colorInput = document.getElementById('f-trip-color');
  const hexInput = document.getElementById('f-trip-color-hex');
  // Sync hex display with current color value
  hexInput.value = colorInput.value.toUpperCase();
  container.innerHTML = '';
  COLOR_PRESETS.forEach(color => {
    const sw = document.createElement('button');
    sw.type = 'button';
    sw.className = 'color-swatch';
    sw.style.background = color;
    sw.title = color;
    sw.addEventListener('click', () => {
      colorInput.value = color;
      hexInput.value = color.toUpperCase();
    });
    container.appendChild(sw);
  });
}

// ===== Duplicate Trip =====

function duplicateTrip(tripId) {
  const trip = getTrip(tripId);
  if (!trip) return;

  function deepCopySection(sec) {
    const newSec = { ...sec, id: uid() };
    if (sec.items) {
      newSec.items = sec.items.map(item => ({
        ...item,
        id: uid(),
        fields: (item.fields || []).map(f => ({ ...f, id: uid() }))
      }));
    }
    if (sec.children) {
      newSec.children = sec.children.map(deepCopySection);
    }
    return newSec;
  }

  const newTrip = {
    ...trip,
    id: uid(),
    name: trip.name + ' (Copy)',
    sections: (trip.sections || []).map(deepCopySection),
    returnSections: (trip.returnSections || []).map(deepCopySection),
    destinations: (trip.destinations || []).map(d => ({ ...d, id: uid() })),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  // Place after original
  const groupTrips = tripsInGroup(trip.groupId);
  const origIdx = groupTrips.findIndex(t => t.id === tripId);
  // Shift orders for trips after origIdx
  groupTrips.forEach(t => {
    if (t.order > origIdx) t.order++;
  });
  newTrip.order = origIdx + 1;

  state.trips.push(newTrip);
  state.currentTripId = newTrip.id;
  save();
  renderSidebar();
  renderTripDetail();
}

// ===== Destinations CRUD =====

function openAddDest(tripId) {
  state.editingDestId = null;
  state.addDestSectionContext = null;
  const trip = getTrip(tripId);
  if (!trip) return;
  state.currentTripId = tripId;
  document.getElementById('modal-dest-title').textContent = 'Add Destination';
  document.getElementById('f-dest-name').value = '';
  document.getElementById('f-dest-country').value = '';
  document.getElementById('f-dest-start').value = '';
  document.getElementById('f-dest-end').value = '';
  document.getElementById('f-dest-notes').value = '';
  openModal('modal-dest');
  setTimeout(() => document.getElementById('f-dest-name').focus(), 50);
}

function openEditDest(tripId, destId) {
  const trip = getTrip(tripId);
  if (!trip) return;
  // Search in trip.destinations and in section items
  let dest = (trip.destinations || []).find(d => d.id === destId);
  if (!dest) {
    for (const sec of (trip.sections || [])) {
      if (sec.type === 'destinations') {
        dest = (sec.items || []).find(d => d.id === destId);
        if (dest) break;
      }
    }
  }
  if (!dest) return;
  state.editingDestId = destId;
  state.currentTripId = tripId;
  document.getElementById('modal-dest-title').textContent = 'Edit Destination';
  document.getElementById('f-dest-name').value = dest.name;
  document.getElementById('f-dest-country').value = dest.country || '';
  document.getElementById('f-dest-start').value = dest.startDate || '';
  document.getElementById('f-dest-end').value = dest.endDate || '';
  document.getElementById('f-dest-notes').value = dest.notes || '';
  openModal('modal-dest');
  setTimeout(() => document.getElementById('f-dest-name').focus(), 50);
}

function saveDest() {
  const name = document.getElementById('f-dest-name').value.trim();
  const countryVal = document.getElementById('f-dest-country').value.trim();
  if (!name && !countryVal) { alert('Enter a city/place or country.'); return; }

  const trip = getTrip(state.currentTripId);
  if (!trip) return;

  const destData = {
    name,
    country: countryVal,
    startDate: document.getElementById('f-dest-start').value,
    endDate: document.getElementById('f-dest-end').value,
    notes: document.getElementById('f-dest-notes').value.trim()
  };

  if (state.editingDestId) {
    // Update in trip.destinations
    const dest = (trip.destinations || []).find(d => d.id === state.editingDestId);
    if (dest) {
      Object.assign(dest, destData);
    } else {
      // Update in section items
      for (const sec of (trip.sections || [])) {
        if (sec.type === 'destinations') {
          const sItem = (sec.items || []).find(d => d.id === state.editingDestId);
          if (sItem) { Object.assign(sItem, destData); break; }
        }
      }
    }
  } else if (state.addDestSectionContext) {
    // Add to section
    const sec = getSection(trip, state.addDestSectionContext.sectionId);
    if (sec) {
      sec.items = sec.items || [];
      sec.items.push({ id: uid(), ...destData });
    }
    state.addDestSectionContext = null;
  } else {
    // Add to trip.destinations
    trip.destinations = trip.destinations || [];
    trip.destinations.push({ id: uid(), ...destData });
  }

  trip.updatedAt = new Date().toISOString();
  save();
  closeModal('modal-dest');
  renderTripDetail();
}

// ===== Soft Delete =====

function softDeleteTrip(tripId) {
  const trip = getTrip(tripId);
  if (!trip) return;
  const deleted = { ...trip, deletedAt: new Date().toISOString(), originalGroupId: trip.groupId };
  state.deletedTrips.push(deleted);
  state.trips = state.trips.filter(t => t.id !== tripId);
  if (state.currentTripId === tripId) state.currentTripId = null;
  save();
  renderSidebar();
  renderTripDetail();
}

function restoreTrip(tripId) {
  const idx = state.deletedTrips.findIndex(t => t.id === tripId);
  if (idx === -1) return;
  const deleted = state.deletedTrips[idx];
  const trip = { ...deleted };
  delete trip.deletedAt;
  delete trip.originalGroupId;

  // Ensure group exists
  const groupId = deleted.originalGroupId || 'default';
  const groupExists = state.groups.find(g => g.id === groupId);
  trip.groupId = groupExists ? groupId : 'default';
  trip.order = tripsInGroup(trip.groupId).length;

  state.deletedTrips.splice(idx, 1);
  state.trips.push(trip);
  save();
  renderSidebar();
}

function permanentDeleteTrip(tripId) {
  state.deletedTrips = state.deletedTrips.filter(t => t.id !== tripId);
  save();
  renderSidebar();
}

// ===== Sections =====

function openAddSection(tripId, isReturn, parentId) {
  state.addSectionContext = { tripId, isReturn, parentId: parentId || null };
  state.selectedSectionTypes = new Set();

  // Build grid — exclude 'parent' type (parent sections added via separate modal)
  const grid = document.getElementById('section-type-grid');
  grid.innerHTML = '';
  Object.entries(SECTION_TEMPLATES).forEach(([key, tmpl]) => {
    if (key === 'parent') return; // parent sections added separately
    const card = document.createElement('div');
    card.className = 'section-type-card';
    card.dataset.sectionType = key;
    const displayIcon = tmpl.icon || (key === 'custom' ? '＋' : '');
    const iconHtml = displayIcon ? `<span class="section-type-icon">${displayIcon}</span>` : '';
    card.innerHTML = `${iconHtml}<span class="section-type-name">${tmpl.title}</span>`;
    card.addEventListener('click', () => {
      if (state.selectedSectionTypes.has(key)) {
        state.selectedSectionTypes.delete(key);
        card.classList.remove('selected');
      } else {
        state.selectedSectionTypes.add(key);
        card.classList.add('selected');
      }
      // Update customize group visibility and the save button text
      const customizeGroup = document.getElementById('section-customize-group');
      const labelEl = document.getElementById('section-customize-label');
      const reqBadge = document.getElementById('f-section-title-req');
      const titleInput = document.getElementById('f-section-title');
      const iconInput = document.getElementById('f-section-icon');
      const saveBtn = document.getElementById('btn-save-section');
      const count = state.selectedSectionTypes.size;
      // Update button text
      if (count === 0) {
        saveBtn.textContent = 'Add Section';
      } else {
        saveBtn.textContent = count === 1 ? 'Add 1 Section' : `Add ${count} Sections`;
      }
      // Show customize group only when custom is selected OR exactly 1 non-custom selected
      if (state.selectedSectionTypes.has('custom')) {
        customizeGroup.hidden = false;
        if (count === 1) {
          // only custom
          labelEl.textContent = 'this section';
          reqBadge.hidden = false;
          titleInput.placeholder = 'e.g. Packing List, Notes...';
          iconInput.placeholder = 'e.g. 📋';
        } else {
          labelEl.textContent = 'Custom section';
          reqBadge.hidden = false;
          titleInput.placeholder = 'e.g. Packing List, Notes...';
          iconInput.placeholder = 'e.g. 📋';
        }
      } else if (count === 1) {
        // exactly one non-custom type selected — show optional title/icon override
        const selectedKey = [...state.selectedSectionTypes][0];
        const selectedTmpl = SECTION_TEMPLATES[selectedKey] || {};
        customizeGroup.hidden = false;
        labelEl.textContent = selectedTmpl.title;
        reqBadge.hidden = true;
        titleInput.placeholder = selectedTmpl.title;
        iconInput.placeholder = selectedTmpl.icon || '';
        iconInput.value = '';
        titleInput.value = '';
      } else {
        // Multiple non-custom selected — hide customize (each uses defaults)
        customizeGroup.hidden = true;
      }
    });
    grid.appendChild(card);
  });

  document.getElementById('section-customize-group').hidden = true;
  document.getElementById('f-section-title').value = '';
  document.getElementById('f-section-icon').value = '';
  document.getElementById('btn-save-section').textContent = 'Add Section';
  openModal('modal-section');
}

function saveSection() {
  if (state.selectedSectionTypes.size === 0) { alert('Please select at least one section type.'); return; }
  const ctx = state.addSectionContext;
  if (!ctx) return;
  const trip = getTrip(ctx.tripId);
  if (!trip) { console.warn('saveSection: trip not found', ctx.tripId); return; }

  const customTitleInput = document.getElementById('f-section-title').value.trim();
  const customIconInput = document.getElementById('f-section-icon').value.trim();

  // Validate custom if selected
  if (state.selectedSectionTypes.has('custom') && !customTitleInput) {
    alert('Please enter a title for the Custom section.');
    return;
  }

  const parentId = ctx.parentId || null;

  state.selectedSectionTypes.forEach(sectionType => {
    const tmpl = SECTION_TEMPLATES[sectionType];
    let title, icon;
    if (sectionType === 'custom') {
      title = customTitleInput;
      icon = customIconInput !== '' ? customIconInput : tmpl.icon;
    } else if (state.selectedSectionTypes.size === 1) {
      // Single non-custom: allow title/icon override
      title = customTitleInput || tmpl.title;
      icon = customIconInput !== '' ? customIconInput : tmpl.icon;
    } else {
      // Multiple: use defaults
      title = tmpl.title;
      icon = tmpl.icon;
    }

    const newSection = {
      id: uid(),
      type: sectionType,
      title,
      icon,
      expanded: true,
      items: [],
      ...(sectionType === 'parent' ? { children: [] } : {})
    };

    if (parentId) {
      const parentSec = getSection(trip, parentId);
      if (parentSec) {
        parentSec.children = parentSec.children || [];
        parentSec.children.push(newSection);
      }
    } else if (ctx.isReturn) {
      trip.returnSections = trip.returnSections || [];
      trip.returnSections.push(newSection);
    } else {
      trip.sections = trip.sections || [];
      trip.sections.push(newSection);
    }
  });

  trip.updatedAt = new Date().toISOString();
  state.currentTripId = ctx.tripId;
  save();
  closeModal('modal-section');
  renderTripDetail();
}

// ===== Parent Sections =====

function openAddParentSection(tripId, isReturn, parentId) {
  state.addSectionContext = { tripId, isReturn, parentId: parentId || null, isParent: true };
  document.getElementById('f-parent-section-name').value = '';
  openModal('modal-parent-section');
  setTimeout(() => document.getElementById('f-parent-section-name').focus(), 50);
}

function saveParentSection() {
  const name = document.getElementById('f-parent-section-name').value.trim();
  if (!name) { alert('Section group name is required.'); return; }
  const ctx = state.addSectionContext;
  if (!ctx) return;
  const trip = getTrip(ctx.tripId);
  if (!trip) return;

  const newSection = {
    id: uid(),
    type: 'parent',
    title: name,
    expanded: true,
    items: [],
    children: []
  };

  if (ctx.parentId) {
    // Add as child of an existing parent section
    const parentSec = getSection(trip, ctx.parentId);
    if (parentSec) {
      parentSec.children = parentSec.children || [];
      parentSec.children.push(newSection);
    }
  } else if (ctx.isReturn) {
    trip.returnSections = trip.returnSections || [];
    trip.returnSections.push(newSection);
  } else {
    trip.sections = trip.sections || [];
    trip.sections.push(newSection);
  }

  trip.updatedAt = new Date().toISOString();
  state.currentTripId = ctx.tripId; // ensure correct trip is shown
  save();
  closeModal('modal-parent-section');
  renderTripDetail();
}

// ===== Fields =====

function saveField() {
  const ctx = state.addFieldContext;
  if (!ctx) return;
  const label = document.getElementById('f-field-label').value.trim();
  if (!label) { alert('Field label is required.'); return; }
  const type = document.getElementById('f-field-type').value;

  const trip = getTrip(ctx.tripId);
  if (!trip) return;
  const sec = getSection(trip, ctx.sectionId);
  if (!sec) return;
  const item = getItem(sec, ctx.itemId);
  if (!item) return;

  item.fields.push({ id: uid(), label, type, value: '' });
  trip.updatedAt = new Date().toISOString();
  save();
  closeModal('modal-field');
  renderTripDetail();
}

// ===== Groups CRUD =====

function openAddGroup() {
  state.editingGroupId = null;
  document.getElementById('modal-group-title').textContent = 'New Group';
  document.getElementById('f-group-name').value = '';
  openModal('modal-group');
  setTimeout(() => document.getElementById('f-group-name').focus(), 50);
}

function openRenameGroup(groupId) {
  const group = getGroup(groupId);
  if (!group) return;
  state.editingGroupId = groupId;
  document.getElementById('modal-group-title').textContent = 'Rename Group';
  document.getElementById('f-group-name').value = group.name;
  openModal('modal-group');
  setTimeout(() => {
    const inp = document.getElementById('f-group-name');
    inp.focus();
    inp.select();
  }, 50);
}

function saveGroup() {
  const name = document.getElementById('f-group-name').value.trim();
  if (!name) { alert('Group name is required.'); return; }

  if (state.editingGroupId) {
    const group = getGroup(state.editingGroupId);
    if (group) group.name = name;
  } else {
    state.groups.push({
      id: uid(),
      name,
      order: state.groups.length,
      collapsed: false
    });
  }
  save();
  closeModal('modal-group');
  renderSidebar();
}

function deleteGroup(groupId) {
  if (groupId === 'default') return;
  // Move trips to default
  state.trips.forEach(t => {
    if (t.groupId === groupId) t.groupId = 'default';
  });
  state.groups = state.groups.filter(g => g.id !== groupId);
  save();
  renderSidebar();
}

// ===== Move Trip =====

function openMoveTrip(tripId) {
  state.movingTripId = tripId;
  const trip = getTrip(tripId);
  if (!trip) return;

  const list = document.getElementById('move-trip-group-list');
  list.innerHTML = '';
  state.groups.sort((a, b) => a.order - b.order).forEach(g => {
    const btn = document.createElement('button');
    btn.className = 'move-group-btn' + (g.id === trip.groupId ? ' current' : '');
    btn.textContent = (g.id === trip.groupId ? '✓ ' : '') + g.name;
    if (g.id !== trip.groupId) {
      btn.addEventListener('click', () => {
        executeMoveTrip(tripId, g.id);
        closeModal('modal-move-trip');
      });
    }
    list.appendChild(btn);
  });

  openModal('modal-move-trip');
}

function executeMoveTrip(tripId, newGroupId) {
  const trip = getTrip(tripId);
  if (!trip) return;
  trip.groupId = newGroupId;
  trip.order = tripsInGroup(newGroupId).length;
  trip.updatedAt = new Date().toISOString();
  save();
  renderSidebar();
}

// ===== Schema Normalization (future-proof import) =====

const SCHEMA_VERSION = 2;
const VALID_FIELD_TYPES = ['text','date','time','number','url','email','tel','textarea'];

function normalizeField(f = {}) {
  return {
    id: f.id || uid(),
    label: f.label != null ? String(f.label) : 'Field',
    value: f.value != null ? String(f.value) : '',
    type: VALID_FIELD_TYPES.includes(f.type) ? f.type : 'text'
  };
}

function normalizeItem(item = {}) {
  return {
    id: item.id || uid(),
    title: item.title || '',
    fields: Array.isArray(item.fields) ? item.fields.map(normalizeField) : []
  };
}

function normalizeSection(sec = {}) {
  const base = {
    id: sec.id || uid(),
    type: sec.type || 'custom',
    title: sec.title || 'Section',
    icon: sec.icon || '📋',
    isReturn: Boolean(sec.isReturn),
    collapsed: Boolean(sec.collapsed),
    expanded: sec.expanded !== false
  };
  if (sec.type === 'parent') {
    return { ...base, children: Array.isArray(sec.children) ? sec.children.map(normalizeSection) : [] };
  }
  return { ...base, items: Array.isArray(sec.items) ? sec.items.map(normalizeItem) : [] };
}

function normalizeDestination(d = {}) {
  return {
    id: d.id || uid(),
    name: d.name || '',
    country: d.country || '',
    startDate: d.startDate || '',
    endDate: d.endDate || '',
    notes: d.notes || ''
  };
}

function normalizeTrip(trip = {}) {
  return {
    id: trip.id || uid(),
    name: trip.name || 'Untitled Trip',
    description: trip.description || '',
    startDate: trip.startDate || '',
    endDate: trip.endDate || '',
    color: trip.color || '#1a56db',
    hasReturnTrip: Boolean(trip.hasReturnTrip),
    groupId: trip.groupId || 'default',
    order: typeof trip.order === 'number' ? trip.order : 0,
    createdAt: trip.createdAt || new Date().toISOString(),
    updatedAt: trip.updatedAt || new Date().toISOString(),
    destinations: Array.isArray(trip.destinations) ? trip.destinations.map(normalizeDestination) : [],
    sections: Array.isArray(trip.sections) ? trip.sections.map(normalizeSection) : [],
    returnSections: Array.isArray(trip.returnSections) ? trip.returnSections.map(normalizeSection) : []
  };
}

// ===== Export / Import =====

function exportSingleTrip(tripId) {
  const trip = getTrip(tripId);
  if (!trip) return;
  const data = { schemaVersion: SCHEMA_VERSION, type: 'roamkit_trip', exported: new Date().toISOString(), trip };
  downloadJSON(data, `roamkit_trip_${trip.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.json`);
}

function exportEntry(tripId, sectionId, itemId) {
  const trip = getTrip(tripId);
  if (!trip) return;
  const sec = getSection(trip, sectionId);
  if (!sec) return;
  const item = (sec.items || []).find(i => i.id === itemId);
  if (!item) return;
  const safeName = (item.title || 'entry').replace(/[^a-z0-9]/gi, '_').toLowerCase();
  const data = {
    schemaVersion: SCHEMA_VERSION,
    type: 'roamkit_entry',
    exported: new Date().toISOString(),
    sectionType: sec.type,
    sectionTitle: sec.title,
    entry: JSON.parse(JSON.stringify(item))
  };
  downloadJSON(data, `roamkit_entry_${safeName}.json`);
}

function exportSection(tripId, sectionId) {
  const t = getTrip(tripId);
  if (!t) return;
  const sec = getSection(t, sectionId);
  if (!sec) return;
  const isGroup = sec.type === 'parent';
  const exportType = isGroup ? 'roamkit_section_group' : 'roamkit_section';
  const sectionCopy = JSON.parse(JSON.stringify(sec));
  const data = {
    schemaVersion: SCHEMA_VERSION,
    type: exportType,
    exported: new Date().toISOString(),
    section: sectionCopy
  };
  const safeName = sec.title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
  downloadJSON(data, `roamkit_${isGroup ? 'group' : 'section'}_${safeName}.json`);
}

function exportAll() {
  const today = new Date().toISOString().slice(0, 10);
  const data = {
    schemaVersion: SCHEMA_VERSION,
    type: 'roamkit_backup',
    exported: new Date().toISOString(),
    groups: state.groups,
    trips: state.trips,
    deletedTrips: state.deletedTrips || []
  };
  downloadJSON(data, `roamkit_backup_${today}.json`);
}

function openImportSection(tripId, isReturn, parentId, targetSectionId) {
  state.importSectionContext = {
    tripId,
    isReturn: isReturn || false,
    parentId: parentId || null,
    targetSectionId: targetSectionId || null
  };
  const input = document.getElementById('file-import-section');
  input.value = '';
  input.click();
}

function handleImportSection(file) {
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      const ctx = state.importSectionContext;
      if (!ctx) return;
      const trip = getTrip(ctx.tripId);
      if (!trip) return;

      // ── Entry file: add a single entry to a section ──────────────────────
      if (data.type === 'roamkit_entry') {
        if (!data.entry) { alert('Invalid entry file.'); return; }
        const targetId = ctx.targetSectionId;
        if (!targetId) { alert('Please use the import button on a section (not a group) to import entries.'); return; }
        const targetSec = getSection(trip, targetId);
        if (!targetSec) { alert('Target section not found.'); return; }
        const item = normalizeItem(data.entry);
        item.id = uid();
        (item.fields || []).forEach(f => { f.id = uid(); });
        targetSec.items = (targetSec.items || []).concat([item]);
        state.currentTripId = ctx.tripId;
        trip.updatedAt = new Date().toISOString();
        save();
        renderTripDetail();
        return;
      }

      // ── Section / group file ──────────────────────────────────────────────
      const validTypes = ['roamkit_section', 'roamkit_section_group'];
      if (!data.section || !validTypes.includes(data.type)) {
        alert('Invalid file. Please import a RoamKit section, group, or entry file.');
        return;
      }

      // Normalize + remap all IDs to avoid collisions
      function remapSection(sec) {
        const s = normalizeSection(sec);
        s.id = uid();
        if (s.items) s.items = s.items.map(item => {
          const i = normalizeItem(item);
          i.id = uid();
          i.fields = i.fields.map(f => ({ ...f, id: uid() }));
          return i;
        });
        if (s.children) s.children = s.children.map(remapSection);
        return s;
      }

      if (ctx.targetSectionId) {
        // Import entries INTO an existing section
        const targetSec = getSection(trip, ctx.targetSectionId);
        if (!targetSec) { alert('Target section not found.'); return; }
        const importedSection = remapSection(data.section);
        const newItems = importedSection.items || [];
        if (importedSection.children) {
          importedSection.children.forEach(child => {
            (child.items || []).forEach(item => newItems.push(item));
          });
        }
        targetSec.items = (targetSec.items || []).concat(newItems);
      } else {
        const importedSection = remapSection(data.section);
        importedSection.expanded = true;
        if (ctx.parentId) {
          const parentSec = getSection(trip, ctx.parentId);
          if (!parentSec) { alert('Target parent section not found.'); return; }
          parentSec.children = parentSec.children || [];
          parentSec.children.push(importedSection);
        } else if (ctx.isReturn) {
          trip.returnSections = trip.returnSections || [];
          trip.returnSections.push(importedSection);
        } else {
          trip.sections = trip.sections || [];
          trip.sections.push(importedSection);
        }
      }

      state.currentTripId = ctx.tripId;
      trip.updatedAt = new Date().toISOString();
      save();
      renderTripDetail();
    } catch (err) {
      alert('Failed to import: ' + err.message);
    }
  };
  reader.readAsText(file);
}

function downloadJSON(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function handleImportSingle(file) {
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      let raw = null;
      if (data.trip) raw = data.trip;
      else if (data.id && data.name) raw = data; // direct trip object
      if (!raw) { alert('Invalid trip file.'); return; }

      // Normalize fills defaults for any fields added/changed since this was exported
      const trip = normalizeTrip(raw);
      trip.id = uid(); // always assign new id to avoid collision
      trip.groupId = 'default';
      trip.order = tripsInGroup('default').length;
      state.trips.push(trip);
      state.currentTripId = trip.id;
      save();
      renderSidebar();
      renderTripDetail();
      alert(`Trip "${trip.name}" imported successfully!`);
    } catch (err) {
      alert('Failed to import trip: ' + err.message);
    }
  };
  reader.readAsText(file);
}

function handleImportAll(file) {
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      // Accept any file that has trips/groups arrays (version field optional for forward-compat)
      if (!data.trips && !data.groups) {
        // Try treating it as a single trip or section
        handleImportSingle(file);
        return;
      }
      state.pendingImportData = data;
      openModal('modal-import-choice');
    } catch (err) {
      alert('Failed to read import file: ' + err.message);
    }
  };
  reader.readAsText(file);
}

function executeImport(data, mode) {
  const importGroups = data.groups || [makeDefaultGroup()];
  const importTrips = data.trips || [];

  // Normalize all trips and sections to fill defaults for any model changes since export
  const normalizedTrips = importTrips.map(t => normalizeTrip(t));

  if (mode === 'replace') {
    state.groups = importGroups;
    state.trips = normalizedTrips;
    state.deletedTrips = (data.deletedTrips || []).map(t => normalizeTrip(t));
    if (!state.groups.find(g => g.id === 'default')) {
      state.groups.unshift(makeDefaultGroup());
    }
    state.currentTripId = null;
  } else {
    // Merge: remap ids to avoid collisions
    const groupIdMap = {};
    importGroups.forEach(g => {
      if (g.id === 'default') {
        groupIdMap[g.id] = 'default';
        return;
      }
      const existing = state.groups.find(eg => eg.name === g.name);
      if (existing) {
        groupIdMap[g.id] = existing.id;
      } else {
        const newId = uid();
        groupIdMap[g.id] = newId;
        state.groups.push({ ...g, id: newId, order: state.groups.length });
      }
    });

    normalizedTrips.forEach(t => {
      const newTripId = uid();
      const mappedGroupId = groupIdMap[t.groupId] || 'default';
      state.trips.push({
        ...t,
        id: newTripId,
        groupId: mappedGroupId,
        order: tripsInGroup(mappedGroupId).length
      });
    });
  }

  save();
  closeModal('modal-import-choice');
  state.pendingImportData = null;
  renderSidebar();
  renderTripDetail();
  alert('Import completed!');
}

// ===== Share (Copy-Paste Formatted Text) =====

function fmtFieldValue(field) {
  if (!field.value) return '';
  if (field.type === 'datetime-local') {
    try {
      return new Date(field.value).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' });
    } catch (e) { return field.value; }
  }
  if (field.type === 'date') {
    return fmtDate(field.value) || field.value;
  }
  if (field.type === 'time') {
    try {
      const [h, m] = field.value.split(':');
      const d = new Date(); d.setHours(+h, +m);
      return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    } catch (e) { return field.value; }
  }
  return field.value;
}

function formatItemText(item, idx) {
  const title = item.title || `Entry ${idx + 1}`;
  let lines = [`  ${title.toUpperCase()}`];
  (item.fields || []).forEach(f => {
    const val = fmtFieldValue(f);
    if (val) lines.push(`    • ${f.label}: ${val}`);
  });
  return lines.join('\n');
}

function formatSectionText(section, includeHeader = true, indent = 0) {
  const tmpl = SECTION_TEMPLATES[section.type] || {};
  const icon = section.icon !== undefined ? section.icon : (tmpl.icon || '');
  const pad = ' '.repeat(indent);
  const title = `${icon ? icon + '  ' : ''}${section.title.toUpperCase()}`;
  const dividerChar = indent > 0 ? '·' : '─';
  const dividerLen = Math.max(20, Math.min(42 - indent, 42));
  const divider = pad + dividerChar.repeat(dividerLen);

  let lines = [];
  if (includeHeader) {
    lines.push(divider);
    lines.push(pad + title);
    lines.push(divider);
  }

  const items = section.items || [];
  if (items.length > 0) {
    items.forEach((item, idx) => {
      lines.push('');
      const itemLines = formatItemText(item, idx).split('\n');
      itemLines.forEach(l => {
        const trimmed = l.trimStart();
        lines.push(trimmed ? pad + trimmed : '');
      });
    });
  }

  // Handle parent section children with increased indent
  if (section.type === 'parent' && section.children) {
    section.children.forEach(child => {
      lines.push('');
      lines.push(formatSectionText(child, true, indent + 2));
    });
  }

  return lines.join('\n');
}

function formatTripText(trip) {
  const startStr = fmtDate(trip.startDate);
  const endStr = fmtDate(trip.endDate);
  const dateRange = startStr && endStr ? `${startStr} – ${endStr}` : (startStr || endStr || '');

  const border = '═'.repeat(Math.min(trip.name.length + 6, 44));
  let lines = [];
  lines.push(border);
  lines.push(`  ✈  ${trip.name}`);
  if (dateRange) lines.push(`  ${dateRange}`);
  if (trip.description) lines.push(`  ${trip.description}`);
  lines.push(border);

  const sections = trip.sections || [];
  sections.forEach(sec => {
    lines.push('');
    lines.push(formatSectionText(sec, true));
  });

  if (trip.hasReturnTrip && (trip.returnSections || []).length > 0) {
    lines.push('');
    lines.push('');
    lines.push('┄'.repeat(42));
    lines.push('  ↩  RETURN TRIP');
    lines.push('┄'.repeat(42));
    (trip.returnSections || []).forEach(sec => {
      lines.push('');
      lines.push(formatSectionText(sec, true));
    });
  }

  return lines.join('\n');
}

function openShareModal(title, text) {
  document.getElementById('modal-share-title').textContent = title;
  document.getElementById('share-text-area').value = text;
  openModal('modal-share');
}

function shareTrip(tripId) {
  const trip = getTrip(tripId);
  if (!trip) return;
  openShareModal(`Share: ${trip.name}`, formatTripText(trip));
}

function shareSection(tripId, sectionId) {
  const trip = getTrip(tripId);
  if (!trip) return;
  const sec = getSection(trip, sectionId);
  if (!sec) return;
  const text = formatSectionText(sec, true);
  openShareModal(`Share: ${sec.title}`, text);
}

function shareItem(tripId, sectionId, itemId) {
  const trip = getTrip(tripId);
  if (!trip) return;
  const sec = getSection(trip, sectionId);
  if (!sec) return;
  const item = (sec.items || []).find(i => i.id === itemId);
  if (!item) return;
  const idx = (sec.items || []).indexOf(item);
  const text = formatItemText(item, idx);
  openShareModal(`Share Entry`, text.trim());
}

// ===== Explore Destination Modal =====

function openExploreDestModal() {
  document.getElementById('f-explore-city').value = '';
  document.getElementById('f-explore-country').value = '';
  document.getElementById('explore-links-area').hidden = true;
  document.getElementById('explore-hint').hidden = false;
  openModal('modal-explore-dest');
  setTimeout(() => document.getElementById('f-explore-city').focus(), 50);
}

function doExploreSearch() {
  const city = document.getElementById('f-explore-city').value.trim();
  const country = document.getElementById('f-explore-country').value.trim();
  if (!city && !country) { alert('Please enter a city/place or country.'); return; }
  const q = city && country ? `${city}, ${country}` : (city || country);

  document.getElementById('explore-dest-label').textContent = q;
  document.getElementById('explore-hint').hidden = true;

  const grid = document.getElementById('explore-links-grid');
  grid.innerHTML = '';
  WEB_LINKS.forEach(link => {
    const a = document.createElement('a');
    a.href = link.url(q);
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = 'dest-link-card';
    a.innerHTML = `<span class="dest-link-icon">${link.icon}</span><span class="dest-link-name">${link.name}</span>`;
    grid.appendChild(a);
  });

  document.getElementById('explore-links-area').hidden = false;
}

// ===== Mobile Sidebar =====

function openMobileSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebar-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMobileSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

// ===== Desktop Sidebar Toggle =====

function toggleDesktopSidebar() {
  const app = document.getElementById('app');
  app.classList.toggle('sidebar-collapsed');
}

// ===== Reset App =====

function resetApp() {
  if (!confirm('Reset RoamKit? This will permanently delete ALL trips, groups, and data. This cannot be undone.')) return;
  if (!confirm('Are you absolutely sure? All data will be lost.')) return;
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(OLD_KEY);
  state.groups = [];
  state.trips = [];
  state.deletedTrips = [];
  state.currentTripId = null;
  load(); // re-initializes default group
  renderSidebar();
  renderTripDetail();
}

// ===== Init =====

function init() {
  load();
  wireModals();
  renderSidebar();
  renderTripDetail();

  // (empty-main buttons are wired in renderEmptyMain() on each render)

  // Compact app bar buttons (static elements, wired once)
  document.getElementById('btn-new-trip-compact').addEventListener('click', () => openNewTrip('default'));
  document.getElementById('btn-explore-dest-compact').addEventListener('click', openExploreDestModal);

  // Explore modal search button
  document.getElementById('btn-explore-search').addEventListener('click', doExploreSearch);
  document.getElementById('f-explore-city').addEventListener('keydown', e => {
    if (e.key === 'Enter') doExploreSearch();
  });
  document.getElementById('f-explore-country').addEventListener('keydown', e => {
    if (e.key === 'Enter') doExploreSearch();
  });

  // Save trip modal
  document.getElementById('btn-save-trip').addEventListener('click', saveTrip);
  document.getElementById('f-trip-name').addEventListener('keydown', e => {
    if (e.key === 'Enter') saveTrip();
  });

  // Save dest modal
  document.getElementById('btn-save-dest').addEventListener('click', saveDest);
  document.getElementById('f-dest-name').addEventListener('keydown', e => {
    if (e.key === 'Enter') saveDest();
  });

  // Save section modal
  document.getElementById('btn-save-section').addEventListener('click', saveSection);
  document.getElementById('f-section-title').addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); saveSection(); }
  });

  // Save field modal
  document.getElementById('btn-save-field').addEventListener('click', saveField);
  document.getElementById('f-field-label').addEventListener('keydown', e => {
    if (e.key === 'Enter') saveField();
  });

  // Save group modal
  document.getElementById('btn-save-group').addEventListener('click', saveGroup);
  document.getElementById('f-group-name').addEventListener('keydown', e => {
    if (e.key === 'Enter') saveGroup();
  });

  // Add trip from sidebar controls (default group)
  document.getElementById('btn-add-trip-default').addEventListener('click', () => openNewTrip('default'));

  // Save parent section modal
  document.getElementById('btn-save-parent-section').addEventListener('click', saveParentSection);
  document.getElementById('f-parent-section-name').addEventListener('keydown', e => {
    if (e.key === 'Enter') saveParentSection();
  });

  // Add group
  document.getElementById('btn-add-group').addEventListener('click', openAddGroup);

  // Export all
  document.getElementById('btn-export-all').addEventListener('click', exportAll);

  // Import all
  document.getElementById('btn-import-all').addEventListener('click', () => {
    document.getElementById('file-import-all').value = '';
    document.getElementById('file-import-all').click();
  });

  // Help
  document.getElementById('btn-help').addEventListener('click', () => openModal('modal-help'));

  // Import file handlers
  document.getElementById('file-import-single').addEventListener('change', e => {
    if (e.target.files[0]) handleImportSingle(e.target.files[0]);
  });
  document.getElementById('file-import-all').addEventListener('change', e => {
    if (e.target.files[0]) handleImportAll(e.target.files[0]);
  });

  // Import section file handler
  document.getElementById('file-import-section').addEventListener('change', e => {
    if (e.target.files[0]) handleImportSection(e.target.files[0]);
  });

  // Import choice
  document.getElementById('import-choice-replace').addEventListener('click', () => {
    if (state.pendingImportData) {
      if (confirm('This will replace ALL current trips and groups. Are you sure?')) {
        executeImport(state.pendingImportData, 'replace');
      }
    }
  });
  document.getElementById('import-choice-merge').addEventListener('click', () => {
    if (state.pendingImportData) {
      executeImport(state.pendingImportData, 'merge');
    }
  });

  // Mobile topbar nav buttons
  document.getElementById('btn-explore-dest-mobile').addEventListener('click', openExploreDestModal);
  document.getElementById('btn-new-trip-mobile').addEventListener('click', () => openNewTrip('default'));

  // Mobile sidebar
  document.getElementById('btn-open-sidebar').addEventListener('click', openMobileSidebar);
  document.getElementById('sidebar-overlay').addEventListener('click', closeMobileSidebar);

  // Toggle sidebar button (works differently on desktop vs mobile)
  document.getElementById('btn-toggle-sidebar').addEventListener('click', () => {
    if (window.innerWidth >= 768) {
      toggleDesktopSidebar();
    } else {
      closeMobileSidebar();
    }
  });

  // Revive tab (desktop collapsed state)
  document.getElementById('btn-revive-sidebar').addEventListener('click', () => {
    document.getElementById('app').classList.remove('sidebar-collapsed');
  });

  // Reset app
  document.getElementById('btn-reset-app').addEventListener('click', resetApp);

  // Copy share text
  document.getElementById('btn-copy-share').addEventListener('click', () => {
    const ta = document.getElementById('share-text-area');
    ta.select();
    ta.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(ta.value).then(() => {
      const btn = document.getElementById('btn-copy-share');
      const orig = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(() => btn.textContent = orig, 1500);
    }).catch(() => {
      // Clipboard API unavailable — text is already selected, user can Ctrl+C
    });
  });

  // Color picker sync (wired once here, not in buildColorPresets)
  document.getElementById('f-trip-color').addEventListener('input', () => {
    document.getElementById('f-trip-color-hex').value = document.getElementById('f-trip-color').value.toUpperCase();
  });
  document.getElementById('f-trip-color-hex').addEventListener('input', () => {
    const val = document.getElementById('f-trip-color-hex').value.trim();
    if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
      document.getElementById('f-trip-color').value = val;
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
