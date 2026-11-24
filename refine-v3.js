(() => {
  const nav = document.querySelector('.nav');
  const planning = document.getElementById('planning');

  // Convergences become an execution component of Planning 2027.
  const cross = document.getElementById('cross');
  const crossButton = nav.querySelector('[data-page="cross"]');
  if (cross && planning) {
    const convergence = document.createElement('div');
    convergence.className = 'panel convergence-in-plan';
    convergence.innerHTML = '<div class="eyebrow">Governança de execução</div><h2>Convergências e decisões que passam a compor o Planejamento 2027.</h2><p class="intro">Estas escolhas conectam estratégia de marca, plano de conta, educação, canal e acompanhamento. Devem ser revistas no ritual mensal de governança.</p>';
    [...cross.children].forEach((child) => convergence.appendChild(child));
    planning.appendChild(convergence);
    cross.remove();
  }
  if (crossButton) crossButton.remove();

  const sostac = document.getElementById('sostac');
  const sostacButton = nav.querySelector('[data-page="sostac"]');
  if (sostac) sostac.remove();
  if (sostacButton) sostacButton.remove();

  const journeysPage = document.getElementById('journeys');
  if (!journeysPage) return;
  const products = {
    'Visão da franquia': {
      subtitle: 'A franquia só ganha coerência quando as três jornadas compartilham a mesma leitura: necessidade da pessoa, decisão clínica e execução da conta.',
      patient:[['Buscar orientação','Reconhecer a necessidade de cuidado e chegar a um serviço confiável.'],['Entender o plano','Receber explicação clara do caminho, custos, expectativas e rotina.'],['Viver o ciclo','Conciliar calendário, apoio da clínica e acesso ao tratamento.'],['Seguir com suporte','Receber acolhimento e informação para o próximo passo, qualquer que seja o resultado.']],
      physician:[['Estratificar o caso','Investigar e interpretar perfil, contexto e alternativas.'],['Definir caminho','Escolher conduta individualizada dentro da evidência e da prática.'],['Orquestrar a equipe','Alinhar prescrição, monitoramento, enfermagem e rotina da clínica.'],['Aprender com o ciclo','Revisar resposta e ajustar a conversa clínica.']],
      consultant:[['Priorizar a conta','Cruzar potencial, protocolo, relacionamento e risco de canal.'],['Diagnosticar barreira','Identificar se o entrave é ciência, acesso, rotina, preço ou abastecimento.'],['Orquestrar recursos','Acionar conteúdo, evento, Médica, KAM e distribuidor com objetivo comum.'],['Medir e decidir','Registrar sinal de adoção e próxima ação: escalar, corrigir ou proteger.']]
    },
    'Clomid': {
      subtitle: 'Papel na jornada: ampliar capilaridade e garantir uma experiência de acesso e canal consistente, dentro da indicação e da decisão do profissional.',
      patient:[['Chegar ao cuidado','Busca avaliação e informação confiável sobre fertilidade.'],['Compreender orientação','Esclarece com a equipe o plano definido e as etapas seguintes.'],['Encontrar disponibilidade','Depende de acesso na rede/farmácia e orientação operacional da clínica.'],['Retornar ao cuidado','Segue acompanhamento e conversa sobre próximos passos com a equipe.']],
      physician:[['Avaliar elegibilidade','Investiga o caso e define se há espaço clínico para a abordagem.'],['Orientar com rigor','Explica plano, expectativas e limites de maneira aderente à bula.'],['Coordenar acesso','Considera disponibilidade e orientação de uso da clínica.'],['Revisar percurso','Acompanha evolução e reavalia a conduta quando necessário.']],
      consultant:[['Mapear o ecossistema','Prioriza redes, distribuidores, clínicas e regiões relevantes.'],['Ler a barreira','Distingue preço, disponibilidade, presença ou conhecimento.'],['Executar canal','Ativa materiais aprovados, plano de reposição e acompanhamento de sell-out.'],['Proteger resultado','Monitora ruptura, preço líquido, margem e sinal de prescrição.']]
    },
    'Elonva': {
      subtitle: 'Papel na jornada: traduzir a proposta de simplificação da fase inicial do ciclo em conversa científica, rotina de clínica e experiência para perfis elegíveis.',
      patient:[['Entender alternativas','Recebe da equipe a explicação do plano proposto e de sua rotina.'],['Preparar-se para o ciclo','Organiza calendário, contato da clínica e dúvidas práticas.'],['Viver a rotina','Percebe conveniência e suporte como parte da experiência, não como promessa de resultado.'],['Dar feedback','Compartilha dúvidas e experiência com a equipe para continuidade de cuidado.']],
      physician:[['Estratificar paciente','Avalia perfil, evidência, segurança, histórico e objetivo do ciclo.'],['Considerar protocolo','Discute aplicabilidade sem assumir superioridade universal.'],['Preparar equipe','Alinha rotina, explicação e pontos de monitoramento da clínica.'],['Revisar resposta','Avalia o ciclo e os aprendizados para a decisão seguinte.']],
      consultant:[['Segmentar conta','Classifica barreira dominante: ciência, protocolo, experiência, preço ou acesso.'],['Construir relevância','Leva caso, conteúdo ou conexão médica conforme a barreira específica.'],['Ativar educação','Orquestra preceptorship, evento ou material de equipe com próxima ação definida.'],['Converter com evidência','Acompanha intenção, teste em conta e evolução de adoção.']]
    },
    'Puregon': {
      subtitle: 'Papel na jornada: sustentar continuidade e ajuste dentro da arquitetura de ciclo, evitando que a conversa se reduza a preço ou commodity.',
      patient:[['Receber plano claro','Compreende, junto à equipe, a organização definida para o ciclo.'],['Preparar rotina','Organiza aplicações, calendário e canal de dúvida com a clínica.'],['Executar com apoio','Conta com treinamento e contato da equipe para reduzir atrito operacional.'],['Manter continuidade','Recebe orientação da clínica para os próximos passos do tratamento.']],
      physician:[['Definir necessidade','Avalia individualmente a estratégia e a necessidade de ajuste.'],['Conectar ao ciclo','Posiciona o produto dentro da sequência planejada, sem leitura isolada.'],['Garantir execução','Alinha equipe sobre rotina, monitoramento e comunicação com paciente.'],['Aprender e ajustar','Usa resposta e vivência do ciclo para as decisões subsequentes.']],
      consultant:[['Identificar papel na conta','Entende protocolo, mix, volume, concorrência e sensibilidade a preço.'],['Qualificar valor','Conecta ciência, rotina e economia do ciclo com conteúdo aprovado.'],['Integrar recursos','Treina equipe, ativa plano Full Fidelize e coordena canal/estoque.'],['Ler mix e margem','Monitora unidades por ciclo, desconto, disponibilidade e evolução da conta.']]
    },
    'Orgalutran': {
      subtitle: 'Papel na jornada: proteger valor e execução onde protocolos antagonistas permanecem relevantes, com atenção à rotina e à disponibilidade no momento do ciclo.',
      patient:[['Receber orientação de ciclo','Entende com a equipe calendário e pontos de contato necessários.'],['Organizar aplicação','Recebe treinamento e esclarecimentos adequados pela clínica.'],['Garantir continuidade','Necessita disponibilidade no período correto e apoio para dúvidas operacionais.'],['Concluir e revisar','Retorna à equipe para acompanhamento e definição dos próximos passos.']],
      physician:[['Ler o protocolo','Define conduta conforme perfil e protocolo da clínica.'],['Planejar calendário','Alinha tempo, monitoramento e instruções da equipe.'],['Orientar execução','Garante que paciente e enfermagem tenham clareza operacional.'],['Reavaliar relevância','Revê protocolo e resultado conforme evolução clínica.']],
      consultant:[['Mapear protocolos','Identifica quais contas usam antagonista e onde há pressão de alternativas.'],['Diagnosticar risco','Analisa concorrência, desconto, disponibilidade e percepção de rotina.'],['Apoiar a conta','Aciona treinamento de equipe, materiais aprovados e plano de defesa.'],['Proteger share','Monitora unidades por ciclo, ruptura e evolução de protocolo.']]
    }
  };

  const lane = (title, icon, steps) => `<div class="journey-lane"><div class="lane-title"><span>${icon}</span><div><h3>${title}</h3><p>${title==='Paciente'?'Experiência de cuidado e acesso':'Decisões e ações que conectam a estratégia à realidade'}</p></div></div><div class="trail">${steps.map((s,i)=>`<article><div class="trail-node">${i+1}</div><div class="trail-card"><b>${s[0]}</b><p>${s[1]}</p></div></article>${i<steps.length-1?'<i class="trail-arrow">→</i>':''}`).join('')}</div></div>`;
  journeysPage.innerHTML = `<div class="panel journey-v3"><div class="eyebrow">Jornadas por produto</div><h2>Uma trilha visual para conectar a marca à experiência real.</h2><p class="intro">Selecione uma marca para visualizar como paciente, médico e consultor atravessam o mesmo contexto por perspectivas diferentes. É um mapa estratégico de pontos de contato — não um protocolo clínico nem orientação ao paciente.</p><div id="journeyProductTabs" class="deep-tabs">${Object.keys(products).map((n,i)=>`<button class="${i===0?'active':''}">${n}</button>`).join('')}</div><div id="journeyV3Content"></div><div class="journey-legend"><span class="legend-dot patient"></span> Paciente: vivência e necessidade <span class="legend-dot doctor"></span> Médico: decisão clínica <span class="legend-dot consultant"></span> Consultor: orquestração de conta</div>${document.querySelector('#journeys .source-strip')?.outerHTML || '<div class="source-strip"><b>Base:</b> entrevistas Organon, OMS, ASRM, ESHRE e Anvisa. Conteúdo sujeito a validação Médico-Regulatória.</div>'}</div>`;
  const productTabs = document.getElementById('journeyProductTabs');
  const journeyContent = document.getElementById('journeyV3Content');
  function showProduct(i){
    [...productTabs.children].forEach((b,j)=>b.classList.toggle('active',i===j));
    const d=products[Object.keys(products)[i]];
    journeyContent.innerHTML=`<div class="journey-product-intro"><b>${Object.keys(products)[i]}</b><p>${d.subtitle}</p></div><div class="journey-visual">${lane('Paciente','◎',d.patient)}${lane('Médico','✦',d.physician)}${lane('Consultor','↗',d.consultant)}</div><div class="journey-rule"><b>Como usar esta visão:</b> transformar o ponto de maior atrito em hipótese de conta, escolher uma ativação adequada e medir o próximo comportamento — não apenas atividade realizada.</div>`;
  }
  [...productTabs.children].forEach((b,i)=>b.onclick=()=>showProduct(i));showProduct(0);

  const style=document.createElement('style');style.textContent=`
  .convergence-in-plan>.panel{margin-top:14px}.journey-product-intro{padding:16px 18px;background:#f0f8f6;border-left:4px solid #00a69a;border-radius:0 11px 11px 0;margin:8px 0 15px}.journey-product-intro b{display:block;color:#007f79;font-size:18px}.journey-product-intro p{margin:3px 0 0;color:#405b63}.journey-visual{display:grid;gap:13px}.journey-lane{border:1px solid #d8e4e2;border-radius:14px;padding:16px;overflow:auto}.lane-title{display:flex;gap:11px;align-items:center}.lane-title>span{display:grid;place-items:center;width:38px;height:38px;border-radius:10px;background:#062b41;color:#b8e5dd;font-size:20px}.journey-lane:nth-child(1) .lane-title>span{background:#007f79}.journey-lane:nth-child(2) .lane-title>span{background:#315d88}.journey-lane:nth-child(3) .lane-title>span{background:#a06e14}.lane-title h3{font-size:18px;margin:0}.lane-title p{font-size:12px;color:#5f767c;margin:1px 0 0}.trail{display:grid;grid-template-columns:minmax(175px,1fr) 24px minmax(175px,1fr) 24px minmax(175px,1fr) 24px minmax(175px,1fr);align-items:center;margin-top:15px;min-width:780px}.trail article{display:flex;gap:9px;align-items:flex-start;position:relative}.trail-node{flex:0 0 26px;height:26px;display:grid;place-items:center;border-radius:50%;background:#dff0ec;color:#007f79;font-weight:800;font-size:12px;box-shadow:0 0 0 5px #f5fbfa}.journey-lane:nth-child(2) .trail-node{background:#e1ebf7;color:#315d88}.journey-lane:nth-child(3) .trail-node{background:#fff0ce;color:#a06e14}.trail-card b{display:block;color:#173740;font-size:13px}.trail-card p{font-size:12px;color:#5f767c;margin:3px 0 0}.trail-arrow{text-align:center;color:#00a69a;font-style:normal;font-size:21px}.journey-rule{margin-top:14px;padding:13px 15px;border-radius:10px;background:#062b41;color:#d9eeee}.journey-rule b{color:#b8e5dd}.journey-legend{display:flex;gap:9px;align-items:center;flex-wrap:wrap;font-size:11px;color:#5f767c;margin:18px 0 0}.legend-dot{width:9px;height:9px;border-radius:50%;display:inline-block}.legend-dot.patient{background:#007f79}.legend-dot.doctor{background:#315d88}.legend-dot.consultant{background:#a06e14}@media(max-width:780px){.trail{min-width:700px}.journey-lane{padding:13px}.trail-card p{font-size:11px}}
  `;document.head.appendChild(style);
})();
