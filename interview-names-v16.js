(() => {
  const areas = document.getElementById('areas');
  const chips = document.getElementById('areaChips');
  if (!areas || !chips) return;
  const people = [
    ['Marketing','Fernanda Kubik','Marketing / Estratégia de Portfólio'],
    ['Médica','Viviane Santana','Área Médica'],
    ['Liderança de Vendas','Mario Henrique','Liderança de Vendas / Franquia'],
    ['Comercial','Dernival Cardoso','Comercial Nacional / Distribuição'],
    ['Acesso','Carlson Andrade','Acesso / Agenda Institucional']
  ];
  [...chips.children].forEach((chip) => {
    const row = people.find(([area]) => chip.textContent.trim() === area);
    if (row) chip.innerHTML = `<span>${row[0]}</span><small>${row[1]}</small>`;
  });
  if (!areas.querySelector('.area-interviewees')) {
    const roster = document.createElement('div');
    roster.className = 'area-interviewees';
    roster.innerHTML = `<div class="eyebrow">Quem foi entrevistado</div><h3>Visões das áreas</h3><div class="area-roster">${people.map(([area,name,role]) => `<div><span>${area}</span><b>${name}</b><small>${role}</small></div>`).join('')}</div>`;
    chips.insertAdjacentElement('beforebegin', roster);
  }
  const style = document.createElement('style');
  style.textContent = `.area-interviewees{padding:16px;margin:16px 0;border:1px solid #d8e4e2;border-radius:13px;background:#f7fbfa}.area-interviewees h3{margin:4px 0 12px;font-size:19px;color:#062b41}.area-roster{display:grid;grid-template-columns:repeat(5,1fr);gap:8px}.area-roster>div{padding:11px;border-radius:9px;background:#fff;border:1px solid #d8e4e2}.area-roster span{display:block;color:#007f79;font-size:10px;text-transform:uppercase;letter-spacing:.07em;font-weight:800}.area-roster b{display:block;color:#062b41;font-size:14px;margin:4px 0 2px}.area-roster small{display:block;color:#5f767c;font-size:10px;line-height:1.25}.chips#areaChips button{display:flex;flex-direction:column;align-items:flex-start;gap:1px}.chips#areaChips button small{font-size:10px;opacity:.78;font-weight:600}@media(max-width:900px){.area-roster{grid-template-columns:repeat(2,1fr)}}@media(max-width:520px){.area-roster{grid-template-columns:1fr}}`;
  document.head.appendChild(style);
})();

(() => {
  const script = document.createElement('script');
  script.src = '/netnography-v21.js';
  script.onload = () => {
    const redesign = document.createElement('script');
    redesign.src = '/netnography-redesign-v24.js';
    redesign.onload = () => {
      const intelligence = document.createElement('script');
      intelligence.src = '/netnography-intelligence-v26.js';
      intelligence.onload = () => {
        const profiles = document.createElement('script');
        profiles.src = '/netnography-profiles-v27.js';
        profiles.onload = () => {
          const publicData = document.createElement('script');
          publicData.src = '/netnography-public-v28.js';
          publicData.onload = () => {
            const clarity = document.createElement('script');
            clarity.src = '/netnography-clarity-v29.js';
            clarity.onload = () => {
              const interactiveProfiles = document.createElement('script');
              interactiveProfiles.src = '/netnography-interactive-profiles-v30.js';
              interactiveProfiles.onload = () => {
                const auditDirectory = document.createElement('script');
                auditDirectory.src = '/netnography-audit-directory-v31.js';
                auditDirectory.onload = () => {
                  const liveMatrix = document.createElement('script');
                  liveMatrix.src = '/netnography-live-matrix-v32.js';
                  liveMatrix.onload = () => {
                    const evidenceData = document.createElement('script');
                    evidenceData.src = '/netnography-evidence-data-v33.js';
                    evidenceData.onload = () => {
                      const evidence = document.createElement('script');
                      evidence.src = '/netnography-evidence-v33.js';
                      document.body.appendChild(evidence);
                    };
                    document.body.appendChild(evidenceData);
                  };
                  document.body.appendChild(liveMatrix);
                };
                document.body.appendChild(auditDirectory);
              };
              document.body.appendChild(interactiveProfiles);
            };
            document.body.appendChild(clarity);
          };
          document.body.appendChild(publicData);
        };
        document.body.appendChild(profiles);
      };
      document.body.appendChild(intelligence);
    };
    document.body.appendChild(redesign);
  };
  document.body.appendChild(script);
})();
