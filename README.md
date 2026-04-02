# RoamKit

A free, open-source, local-first travel itinerary planner. Build complete trip plans entirely in your browser — no account, no server, no lock-in.

**Live:** https://jrcstreams.github.io/roamkit/

---

## Features

- **Trips** — Create trips with name, dates, color coding, and notes. Duplicate, move between groups, or delete trips at any time.
- **Section types** — Flights, lodging, car rental, restaurants, activities, transport, events, budget, trip notes, destinations, and custom sections.
- **Groups** — Organize sections into collapsible groups, including nested groups (e.g. Day 1 → Morning).
- **Custom fields** — Every entry supports custom inline-editable fields: text, textarea, date, time, number, URL, email, and phone.
- **Return trips** — Toggle a separate return-trip section group on any trip.
- **Destinations** — Track cities/countries with dates and notes. Instant search links to Google, Maps, TripAdvisor, Viator, GetYourGuide, Yelp, Airbnb, and Hotels.
- **Explore** — Look up any destination without opening a trip first.
- **Drag & drop** — Reorder trips, sections, entries, and fields. Drag sections across groups and into nested groups.
- **Share** — Generate clean, formatted plaintext for any trip, section, or entry — copy and paste anywhere.
- **Export / Import** — Every level of the hierarchy (workspace, trip, section, group, entry) can be exported as a JSON file and re-imported later, even after the app has been updated.

## Data & Privacy

All data is stored in your browser's `localStorage` under the key `roamkit-v1`. Nothing is ever sent to a server.

Use **Export Trips** in the sidebar to back up your entire workspace as a single JSON file. Import supports both full replacement and merge modes.

## Export / Import

RoamKit's export format is designed to survive future app updates:

| Level | Export from | Import into |
|---|---|---|
| Workspace | Sidebar → Export Trips | Sidebar → Import Trips |
| Trip | Trip header (↓) | Sidebar → Import Trips, or welcome screen |
| Section / Group | Section header (↓) | Section header (↑) |
| Entry | Entry actions (↓) | Section footer → Import Entry |

All imported files are normalized on load — missing or renamed fields are filled with safe defaults — so exports from older versions of RoamKit always import cleanly.

## Getting Started

RoamKit is a static single-page app with no build step and no dependencies.

```bash
git clone https://github.com/jrcstreams/roamkit.git
cd roamkit
open index.html   # or serve with any static file server
```

## File Structure

```
index.html        # App shell and all modals
css/styles.css    # All styles
js/app.js         # All application logic (~3200 lines, no framework)
assets/
  favicons/       # Favicon set (SVG, ICO, PNG sizes, webmanifest)
  logo/           # App logo
  social/         # OG image for social sharing
```

## Tech Stack

Vanilla JavaScript, HTML, CSS. No framework, no build tool, no runtime dependencies. All state lives in `localStorage`.

## License

MIT — fork it, self-host it, or build your own version.
