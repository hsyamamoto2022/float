(() => {
  const nav = document.querySelector(".nav");
  const areasButton = nav.querySelector('[data-page="areas"]');
  const fieldButton = nav.querySelector('[data-page="field"]');
  const areasPage = document.getElementById("areas");
  const fieldPage = document.getElementById("field");
  const areasPanel = areasPage.querySelector(".panel");
  const fieldPanel = fieldPage.querySelector(".panel");
  const home = document.getElementById("home");

  if (home) {
    const heroTitle = document.querySelector('.hero h1');
    const heroIntro = document.querySelector('.hero p');
    if (heroTitle) heroTitle.textContent = 'Treze entrevistas que precisam orientar o plano de 2027.';
    if (heroIntro) heroIntro.textContent = 'Leitura individual de cinco áreas, uma diretoria, cinco consultores de campo e duas lideranças cliente-clínica, conectada ao overview por marca.';
    const navigationPanel = home.querySelector('.panel');
    const navigationHeading = navigationPanel?.querySelector('h2');
    const navigationIntro = navigationPanel?.querySelector('.intro');
    const navigationStats = navigationPanel?.querySelector('.grid.g4');
    if (navigationHeading) navigationHeading.textContent = 'Quatro origens de entrevista, cinco lentes para decidir melhor.';
    if (navigationIntro) navigationIntro.innerHTML = 'As <b>cinco áreas</b> trazem a visão funcional da Organon; a <b>Diretoria de Fertilidade</b> define a lente de negócio; os <b>cinco consultores de campo</b> mostram a realidade do território; e as <b>duas lideranças cliente-clínica</b> revelam tanto a decisão assistencial quanto a lógica de negócio, operação e mercado das clínicas.';
    if (navigationStats) navigationStats.innerHTML = '<div class="stat"><b>05</b><span>áreas entrevistadas</span></div><div class="stat"><b>01</b><span>diretoria de Fertilidade</span></div><div class="stat"><b>05</b><span>consultores de campo</span></div><div class="stat"><b>02</b><span>cliente-clínica</span></div>';
  }

  areasButton.textContent = "Entrevistas";
  areasButton.setAttribute("aria-label", "Entrevistas: áreas e consultores de campo");
  fieldButton.remove();

  const areaView = document.createElement("div");
  while (areasPanel.firstChild) areaView.appendChild(areasPanel.firstChild);

  const directorView = document.createElement("div");
  directorView.id = "interviewDirectorView";
  directorView.className = "interview-segment-view";
  directorView.style.display = "none";
  const clientView = document.createElement("div");
  clientView.id = "interviewClientView";
  clientView.className = "interview-segment-view";
  clientView.style.display = "none";
  const interviewTabs = document.createElement("div");
  interviewTabs.className = "interview-tabs";
  interviewTabs.innerHTML = '<button class="active" data-view="areas">Visões das áreas <small>05</small></button><button data-view="director">Visão da diretoria <small>01</small></button><button data-view="field">Visões do campo <small>05</small></button><button data-view="client">Visão cliente-clínica <small>02</small></button>';
  areasPanel.append(interviewTabs, areaView, directorView, fieldPanel, clientView);
  fieldPage.remove();
  fieldPanel.style.display = "none";

  const views={areas:areaView,director:directorView,field:fieldPanel,client:clientView};
  [...interviewTabs.querySelectorAll("button")].forEach(tab=>tab.onclick=()=>{
    [...interviewTabs.querySelectorAll("button")].forEach(x=>x.classList.toggle("active",x===tab));
    Object.entries(views).forEach(([key,view])=>view.style.display=key===tab.dataset.view?"":"none");
  });

  const planning = document.createElement("section");
  planning.id = "planning";
  planning.className = "page";
  planning.innerHTML = `
    <div class="panel planning-hero">
      <div class="eyebrow">Planejamento 2027 · visão executiva de marketing</div>
      <h2>Da evidência para uma estratégia de marketing de franquia.</h2>
      <p class="intro">A estratégia deve conectar ciência, experiência, conta, canal e acesso. Marketing organiza a proposta de valor, os públicos, os formatos de ativação e a conversão das iniciativas em comportamento mensurável.</p>
      <div class="strategy-grid">
        <article><b>1. Construir a arquitetura de ciclo</b><p>Apresentar o portfólio como uma resposta coordenada: entrada e capilaridade, estimulação inicial, ajuste e proteção do ciclo conforme a decisão clínica.</p></article>
        <article><b>2. Segmentar pela barreira de adoção</b><p>Não basta segmentar por potencial. Cada conta deve ser classificada por barreira dominante: ciência/protocolo, preço, execução de canal, experiência ou acesso.</p></article>
        <article><b>3. Converter educação em adoção</b><p>Cada evento, group call, conteúdo ou preceptorship precisa de público definido, hipótese, próxima ação e indicador de resultado.</p></article>
        <article><b>4. Proteger a promessa no canal</b><p>Disponibilidade, validade, previsão e reposição são parte da experiência de marca. Marketing não deve gerar demanda onde não há plano de atendimento.</p></article>
      </div>
    </div>
    <div class="panel">
      <div class="eyebrow">Arquitetura de marketing</div>
      <h2>Cinco frentes integradas para 2027.</h2>
      <div class="marketing-flow">
        <div><strong>Proposta de valor</strong><span>Jornada, conveniência, controle e valor por ciclo.</span></div>
        <i>→</i><div><strong>Segmentação</strong><span>Conta, decisão, protocolo, potencial e risco.</span></div>
        <i>→</i><div><strong>Ativação</strong><span>Ciência, conteúdo, eventos, relacionamento e canal.</span></div>
        <i>→</i><div><strong>Conversão</strong><span>Próximo passo documentado por conta.</span></div>
        <i>→</i><div><strong>Otimização</strong><span>Share, mix, margem, adoção e ruptura.</span></div>
      </div>
    </div>
    <div class="panel">
      <div class="eyebrow">Estratégia de marketing por produto</div>
      <h2>Quatro papéis diferentes dentro da mesma franquia.</h2>
      <div class="planning-products">
        <article><div class="product-kicker">Clomid · acesso e capilaridade</div><h3>Defender a liderança sem reduzir a marca a preço.</h3><p><b>Objetivo:</b> sustentar disponibilidade, share de prescrição e presença de canal, conectando a marca à Organon e à jornada de fertilidade.</p><p><b>Públicos:</b> ginecologistas, especialistas, redes, farmácias e distribuidores.</p><p><b>Ativações:</b> execução de varejo, materiais de prescrição, política por canal, monitoramento de ruptura e presença digital/educacional aderente.</p><p><b>KPIs:</b> share de prescrição, share de unidades, sell-out, preço líquido, ruptura e margem.</p></article>
        <article><div class="product-kicker">Elonva · experiência e diferenciação</div><h3>Transformar conveniência em adoção de protocolo.</h3><p><b>Objetivo:</b> ampliar uso em perfis elegíveis por meio de uma narrativa de jornada, experiência e custo total de ciclo, sem promessas clínicas universais.</p><p><b>Públicos:</b> especialistas, diretores técnicos, KOLs, equipe de clínica e ginecologistas encaminhadores.</p><p><b>Ativações:</b> casos clínicos, preceptorship, conteúdos de jornada, discussão de evidência, plano por conta premium/média e materiais para equipe.</p><p><b>KPIs:</b> adoção de protocolo, unidades por ciclo, penetração em contas prioritárias, recompra e crescimento por conta.</p></article>
        <article><div class="product-kicker">Puregon · continuidade e ajuste</div><h3>Retirar a marca da lógica de commodity isolada.</h3><p><b>Objetivo:</b> consolidar Puregon como componente de ajuste e continuidade dentro da arquitetura de ciclo, com argumento de valor e execução de canal.</p><p><b>Públicos:</b> especialistas, prescritores de alto volume, enfermagem, embriologia, compradores e distribuidores.</p><p><b>Ativações:</b> materiais sobre uso/manuseio, argumentação econômica de ciclo, treinamento de equipe, política de mix e plano de contas Full Fidelize.</p><p><b>KPIs:</b> mix Elonva/Puregon, unidades por ciclo, crescimento em contas prioritárias, desconto, margem e ruptura.</p></article>
        <article><div class="product-kicker">Orgalutran · defesa de valor</div><h3>Defender share no segmento que permanece relevante.</h3><p><b>Objetivo:</b> proteger participação e preço nos ciclos antagonistas, reforçando praticidade da seringa pronta e integração com o ciclo.</p><p><b>Públicos:</b> clínicas com protocolo antagonista, médicos de FIV, equipe de enfermagem e gestores de compra.</p><p><b>Ativações:</b> treinamento de aplicação/calendário, comparação de manuseio aprovada, monitoramento de concorrentes e plano de defesa por clínica.</p><p><b>KPIs:</b> share, unidades por ciclo, desconto líquido, ruptura, adesão e evolução de protocolos da conta.</p></article>
      </div>
    </div>
    <div class="panel">
      <div class="eyebrow">Agenda de marketing 2027</div>
      <h2>O que fazer, para quem e como medir.</h2>
      <table class="planning-table"><thead><tr><th>Frente</th><th>Entregas de marketing</th><th>Público prioritário</th><th>Métrica de sucesso</th></tr></thead><tbody>
      <tr><td>Ciência aplicada</td><td>Trilhas de conteúdo, casos, materiais aprovados e preceptorships por barreira clínica.</td><td>Contas com resistência a FSH isolado ou alto peso de LH/hMG.</td><td>Participação qualificada, intenção documentada, mudança de protocolo e adoção.</td></tr>
      <tr><td>Experiência de jornada</td><td>Materiais para paciente e equipe, treinamento de rotina e suporte de aplicação.</td><td>Clínicas premium/médias e equipes com maior contato com paciente.</td><td>Uso de materiais, dúvidas recorrentes, satisfação da equipe e recompra.</td></tr>
      <tr><td>Eventos com objetivo</td><td>Calendário que separa educação, relacionamento, negociação e ativação de conta.</td><td>Segmentos e contas definidos antes da convocação.</td><td>Presença do público certo, próximos passos e conversão por conta.</td></tr>
      <tr><td>Conteúdo e influência</td><td>Biblioteca de argumentos por produto, concorrente e perfil de conta.</td><td>Campo, KAMs, Médica e Marketing.</td><td>Uso no campo, consistência de mensagem e lacunas identificadas.</td></tr>
      <tr><td>Canal e disponibilidade</td><td>Comunicação e plano conjunto com Comercial/Supply para evitar criação de demanda sem produto.</td><td>Distribuidores e contas de maior risco.</td><td>Ruptura, validade, nível de serviço e recuperação de vendas.</td></tr>
      </tbody></table>
    </div>`;
  document.querySelector("#analytics").insertAdjacentElement("afterend", planning);

  const planningButton = document.createElement("button");
  planningButton.textContent = "Planejamento 2027";
  planningButton.setAttribute("aria-label", "Planejamento de marketing 2027");
  planningButton.dataset.page = "planning";
  nav.insertBefore(planningButton, nav.querySelector('[data-page="analytics"]'));
  planningButton.onclick = () => {
    document.querySelectorAll(".nav button,.page").forEach((x) => x.classList.remove("active"));
    planningButton.classList.add("active");
    planning.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const style = document.createElement("style");
  style.textContent = `
    .interview-tabs{display:flex;gap:7px;margin:0 0 20px;border-bottom:1px solid #d8e4e2;padding-bottom:10px}.interview-tabs button{border:1px solid #d8e4e2;background:#fff;border-radius:9px;padding:9px 13px;font-weight:800;color:#5f767c;cursor:pointer}.interview-tabs button.active{background:#062b41;color:#fff;border-color:#062b41}.planning-hero{background:linear-gradient(120deg,#062b41,#097a76);color:#fff}.planning-hero .eyebrow{color:#b8e5dd}.planning-hero h2{font-size:36px;max-width:680px}.planning-hero .intro{color:#d5e6e7}.strategy-grid,.planning-products{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-top:20px}.strategy-grid article{border:1px solid #77b5af;background:#ffffff13;border-radius:12px;padding:16px}.strategy-grid b{font-size:16px}.strategy-grid p{margin:6px 0 0;color:#deefef}.marketing-flow{display:grid;grid-template-columns:repeat(5,1fr);align-items:center;gap:8px}.marketing-flow div{border:1px solid #d8e4e2;border-radius:11px;padding:14px;min-height:110px;background:#f5fbfa}.marketing-flow strong{display:block;color:#007f79}.marketing-flow span{display:block;font-size:12px;color:#5f767c;margin-top:5px}.marketing-flow i{font-style:normal;color:#00a69a;font-size:22px;text-align:center}.planning-products article{padding:19px;border:1px solid #d8e4e2;border-radius:12px;background:#fff}.planning-products article:nth-child(1){border-top:5px solid #d8aa37}.planning-products article:nth-child(2){border-top:5px solid #00a69a}.planning-products article:nth-child(3){border-top:5px solid #5399c9}.planning-products article:nth-child(4){border-top:5px solid #eb7467}.planning-products p{font-size:13px;color:#405b63}.product-kicker{font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#007f79}.planning-table{border-collapse:collapse;width:100%;font-size:13px}.planning-table th{background:#062b41;color:#fff;text-align:left;padding:11px}.planning-table td{padding:12px;border-bottom:1px solid #d8e4e2;vertical-align:top}.planning-table td:first-child{font-weight:800;color:#007f79}@media(max-width:780px){.strategy-grid,.planning-products,.marketing-flow{grid-template-columns:1fr}.marketing-flow i{transform:rotate(90deg)}}`;
  style.textContent += `.interview-tabs button{display:inline-flex;gap:7px;align-items:center}.interview-tabs button small{display:inline-grid;place-items:center;min-width:20px;height:20px;padding:0 4px;border-radius:20px;background:#edf4f2;color:#007f79;font-size:10px}.interview-tabs button.active small{background:#0b667d;color:#fff}.interview-segment-panel{margin-top:2px}.interview-segment-panel .complementary-card{margin-top:16px}.interview-segment-panel .complementary-body{grid-template-columns:repeat(2,minmax(0,1fr))}@media(max-width:780px){.interview-tabs{flex-wrap:wrap}.interview-segment-panel .complementary-body{grid-template-columns:1fr}}`;
  document.head.appendChild(style);
})();
