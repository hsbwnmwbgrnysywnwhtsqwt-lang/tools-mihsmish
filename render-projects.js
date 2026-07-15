import { loadProjects } from "./firebase-config.js";

function renderProject(p) {
  const tagsHtml = (p.tags || []).map(t => `<span class="tag">${t}</span>`).join("");
  const linksHtml = (p.links || []).map(l =>
    `<a href="${l.url}" target="_blank" class="project-link">${l.label} ←</a>`
  ).join("");
  const pageLink = p.hasPage
    ? `<a href="project.html?id=${p.id}" class="project-link">פרטים נוספים ←</a>`
    : "";
  const iconHtml = p.logoUrl
    ? `<img src="${p.logoUrl}" alt="${p.name}" class="project-icon-img" style="width:45px;height:45px;object-fit:contain;border-radius:10px;">`
    : `<div class="project-icon-img" style="width:45px;height:45px;display:flex;align-items:center;justify-content:center;font-size:2rem;background:rgba(244,162,45,0.12);border-radius:12px;">${p.icon || "🛠️"}</div>`;
  const statusHtml = p.status === "in_dev"
    ? `<span style="font-size:0.8rem;color:var(--text-xlight);">🚧 בפיתוח</span>` : "";
  const footer = linksHtml || pageLink || statusHtml
    ? `<div class="project-footer">${linksHtml}${pageLink}${statusHtml}</div>` : "";

  return `
    <div class="project-card ${p.featured ? "featured" : ""}">
      <div class="project-card-top">
        ${iconHtml}
        <span class="project-ai-badge">${p.badge || "AI"}</span>
      </div>
      <div class="project-name">${p.name}</div>
      <div class="project-desc">${p.description || ""}</div>
      <div class="project-tags">${tagsHtml}</div>
      ${footer}
    </div>`;
}

export async function renderProjectsGrid(gridId) {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  const projects = await loadProjects();
  if (!projects.length) return;

  const mine = projects.filter(p => p.category === "mine");
  const others = projects.filter(p => p.category === "others");

  let html = `<div class="projects-section-label"><span>הפרויקטים שלי</span></div>`;
  html += mine.map(renderProject).join("");
  if (others.length) {
    html += `<div class="projects-section-label divider"><span>דברים שבניתי לאחרים</span></div>`;
    html += others.map(renderProject).join("");
  }
  grid.innerHTML = html;
}
