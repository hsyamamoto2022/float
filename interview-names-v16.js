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
  const areas = document.getElementById('areas');
  const chips = document.getElementById('areaChips');
  if (!areas || !chips || areas.querySelector('.complementary-interviews')) return;
  const section = document.createElement('section');
  section.className = 'complementary-interviews';
  section.innerHTML = `
    <div class="complementary-heading">
      <div><div class="eyebrow">LIDERANÇA E PRÁTICA CLÍNICA</div><h3>Duas perspectivas que completam a leitura das 10 entrevistas.</h3></div>
      <p>Marcel traz a lente de negócio, priorização e governança. Dra. Altina traz a decisão clínica, a experiência da paciente e a operação de uma clínica de reprodução assistida.</p>
    </div>
    <div class="complementary-grid">
      <details class="complementary-card" open>
        <summary><span>Visão de liderança</span><b>Marcel Zetun</b><small>Diretor responsável por Saúde Feminina, Imunologia, Alianças e Novos Negócios</small></summary>
        <div class="complementary-body">
          <div><strong>Leitura estratégica</strong><p>Fertilidade é uma franquia menor e enxuta, porém estratégica: Elonva é o principal motor de diferenciação; Clomid contribui em faturamento e capilaridade; Puregon precisa crescer junto à arquitetura de Elonva; Orgalutran exige gestão realista de uma categoria pressionada.</p></div>
          <div><strong>O que muda para 2027</strong><p>Preservar a narrativa de jornada mais amigável, mas conectá-la à disciplina financeira: decidir onde crescer, controlar erosão de preço em contas premium e médias, e medir se uma condição comercial gera volume e recompra sustentáveis.</p></div>
          <div><strong>Execução e governança</strong><p>O plano precisa entrar em campo antes: estratégia apresentada no retorno de janeiro, plano de conta estruturado logo na sequência e ativação científica desde o segundo trimestre. Negociação não é conversão: após o acordo, a conta precisa de execução médica e comercial com dono, data e acompanhamento.</p></div>
          <div><strong>Segmentação que falta aprofundar</strong><p>Além da conta, segmentar médicos dentro dela: decisores tradicionais e médicos em formação/geração nova pedem abordagens diferentes. O segundo grupo pode ser vetor de adoção de protocolos mais amigáveis e de influência na própria clínica.</p></div>
          <div><strong>Agenda pública</strong><p>Transformar interesse difuso em plano de médio prazo: definir centros prioritários, ponto de partida, mudança esperada, responsáveis e marcos. O acesso público não deve depender apenas de relações ou de uma ação isolada em congresso.</p></div>
        </div>
      </details>
      <details class="complementary-card">
        <summary><span>Visão de clínica e paciente</span><b>Dra. Altina</b><small>Diretora técnica da Arte Fértil, Recife, e professora de Ginecologia e Obstetrícia</small></summary>
        <div class="complementary-body">
          <div><strong>Contexto assistencial</strong><p>A clínica realiza cerca de 40 a 45 ciclos por mês, majoritariamente de alta complexidade. A entrevista aponta aumento relevante de congelamento de óvulos após a pandemia, com redes sociais como gatilho inicial e recomendação de amigas como fator de confiança.</p></div>
          <div><strong>Decisão por perfil de paciente</strong><p>Não há uma escolha única de medicamento: idade, reserva ovariana, histórico, objetivo do ciclo, rotina, medo de injeção e capacidade financeira alteram a conduta. Para pacientes jovens em congelamento ou doação, conveniência e menor interferência na rotina ganham peso; para pacientes mais velhas ou baixa respondedora, protocolos com LH podem ser considerados pelo médico.</p></div>
          <div><strong>Oportunidade para Elonva e FSH</strong><p>A redução de aplicações é valorizada quando a paciente busca um tratamento mais leve e repetível. Na prática relatada, Elonva aparece como opção quando se deseja FSH sem LH e menor frequência de injeção; alternativas diárias e de menor custo preservam espaço quando o orçamento é a principal barreira.</p></div>
          <div><strong>Como a clínica opera</strong><p>O médico assistente mantém autonomia, apoiado por ultrassom de plantão, prontuário eletrônico compartilhado, discussões entre pares e reunião científica mensal. A clínica mantém insumos para ajustar o tratamento conforme a resposta da paciente e reduzir atrito de reposição durante o ciclo.</p></div>
          <div><strong>O que a indústria pode fazer</strong><p>Educação de ginecologistas para reconhecimento e encaminhamento precoce, apoio a pequenos grupos científicos, troca entre clínicas e atualização médica continuada. A principal oportunidade sistêmica é reduzir a chegada tardia ao cuidado; a principal lacuna clínica citada é a implantação embrionária.</p></div>
        </div>
      </details>
    </div>`;
  chips.parentElement.appendChild(section);
  const roster = areas.querySelector('.area-roster');
  if (roster && !areas.querySelector('.complementary-roster')) {
    const extra = document.createElement('div');
    extra.className = 'complementary-roster';
    extra.innerHTML = `<div class="eyebrow">Perspectivas complementares entrevistadas</div><div class="complementary-roster-grid"><div><span>Liderança</span><b>Marcel Zetun</b><small>Direção de Saúde Feminina, Imunologia, Alianças e Novos Negócios</small></div><div><span>Prática clínica</span><b>Dra. Altina</b><small>Diretora técnica de clínica de reprodução assistida e docente</small></div></div>`;
    roster.parentElement.insertAdjacentElement('afterend', extra);
  }
  const style = document.createElement('style');
  style.textContent = `.complementary-roster{margin:0 0 16px;padding:14px 16px;border:1px solid #d8e4e2;border-radius:13px;background:#fff}.complementary-roster-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px}.complementary-roster-grid>div{padding:11px;border-radius:9px;background:#f7fbfa;border:1px solid #d8e4e2}.complementary-roster span{display:block;color:#007f79;font-size:10px;text-transform:uppercase;letter-spacing:.07em;font-weight:800}.complementary-roster b{display:block;color:#062b41;font-size:14px;margin:4px 0 2px}.complementary-roster small{display:block;color:#5f767c;font-size:10px;line-height:1.25}.complementary-interviews{margin-top:22px;padding-top:20px;border-top:1px solid #d8e4e2}.complementary-heading{display:flex;justify-content:space-between;gap:22px;align-items:end;margin-bottom:13px}.complementary-heading h3{font-size:22px;margin:4px 0;color:#062b41}.complementary-heading p{max-width:480px;margin:0;color:#5f767c;font-size:12px;line-height:1.5}.complementary-grid{display:grid;grid-template-columns:1fr 1fr;gap:13px}.complementary-card{border:1px solid #d8e4e2;border-radius:13px;background:#f7fbfa;overflow:hidden}.complementary-card summary{list-style:none;cursor:pointer;padding:17px 18px;background:#fff}.complementary-card summary::-webkit-details-marker{display:none}.complementary-card summary span{display:block;color:#007f79;font-size:10px;text-transform:uppercase;letter-spacing:.08em;font-weight:800}.complementary-card summary b{display:block;margin:6px 24px 3px 0;font-size:20px;color:#062b41}.complementary-card summary small{display:block;color:#5f767c;font-size:11px;line-height:1.35}.complementary-card summary:after{content:'+';float:right;margin-top:-42px;color:#007f79;font-size:22px;font-weight:400}.complementary-card[open] summary:after{content:'−'}.complementary-body{padding:0 18px 18px;display:grid;gap:10px}.complementary-body>div{background:#fff;border-left:3px solid #00a69a;padding:10px 12px}.complementary-body strong{display:block;font-size:11px;color:#062b41}.complementary-body p{margin:4px 0 0;font-size:11px;line-height:1.48;color:#4a666e}@media(max-width:780px){.complementary-grid,.complementary-roster-grid{grid-template-columns:1fr}.complementary-heading{display:block}.complementary-heading p{margin-top:7px}}`;
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
