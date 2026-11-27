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
    roster.innerHTML = `<div class="eyebrow">13 entrevistas no total</div><h3>5 áreas entrevistadas · 1 diretoria · 5 consultores de campo · 2 cliente-clínica</h3><div class="interview-scope"><span><b>05</b> áreas</span><span><b>01</b> diretoria</span><span><b>05</b> campo</span><span><b>02</b> cliente-clínica</span></div><div class="eyebrow roster-kicker">Visões das áreas entrevistadas</div><div class="area-roster">${people.map(([area,name,role]) => `<div><span>${area}</span><b>${name}</b><small>${role}</small></div>`).join('')}</div>`;
    chips.insertAdjacentElement('beforebegin', roster);
  }
  const style = document.createElement('style');
  style.textContent = `.area-interviewees{padding:16px;margin:16px 0;border:1px solid #d8e4e2;border-radius:13px;background:#f7fbfa}.area-interviewees h3{margin:4px 0 12px;font-size:19px;color:#062b41}.interview-scope{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin:0 0 14px}.interview-scope span{padding:9px 10px;border-radius:8px;background:#fff;border:1px solid #d8e4e2;color:#5f767c;font-size:11px}.interview-scope b{font-size:17px;color:#007f79;margin-right:4px}.roster-kicker{margin:2px 0 8px}.area-roster{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.area-roster>div{padding:11px;border-radius:9px;background:#fff;border:1px solid #d8e4e2}.area-roster span{display:block;color:#007f79;font-size:10px;text-transform:uppercase;letter-spacing:.07em;font-weight:800}.area-roster b{display:block;color:#062b41;font-size:14px;margin:4px 0 2px}.area-roster small{display:block;color:#5f767c;font-size:10px;line-height:1.25}.chips#areaChips button{display:flex;flex-direction:column;align-items:flex-start;gap:1px}.chips#areaChips button small{font-size:10px;opacity:.78;font-weight:600}@media(max-width:900px){.area-roster{grid-template-columns:repeat(2,1fr)}}@media(max-width:520px){.area-roster,.interview-scope{grid-template-columns:1fr}}`;
  style.textContent += `.interview-deep-dive{grid-column:1/-1;margin-top:8px}.deep-dive-lead{padding:18px 19px;border-radius:12px;background:#062b41;color:#fff}.deep-dive-lead span{display:block;color:#aee9df;font-size:10px;font-weight:900;letter-spacing:.1em;text-transform:uppercase}.deep-dive-lead h4{font-size:19px;line-height:1.25;margin:7px 0}.deep-dive-lead p{color:#d7e9e7!important;font-size:12px!important;margin:0!important}.client-deep .deep-dive-lead{background:#315d88}.deep-dive-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:12px}.deep-dive-grid article{border:1px solid #d8e4e2;border-radius:11px;padding:14px;background:#fff}.deep-dive-grid em{display:block;color:#007f79;font-size:9px;letter-spacing:.09em;font-style:normal;font-weight:900}.deep-dive-grid h4{font-size:15px;line-height:1.22;margin:6px 0;color:#062b41}.deep-dive-grid p{font-size:11px!important;line-height:1.5!important;color:#4a666e!important;margin:0 0 10px!important}.deep-dive-grid b{display:block;color:#007f79;font-size:10px;text-transform:uppercase;letter-spacing:.07em}.deep-dive-grid span{display:block;color:#173740;font-size:11px;line-height:1.42;margin-top:3px}.deep-decision-strip{margin-top:12px;padding:14px 16px;border-radius:10px;background:#e4f3ee;border-left:4px solid #00a69a;color:#31545e}.deep-decision-strip b{display:block;color:#007f79;font-size:12px;margin-bottom:3px}.deep-decision-strip span{font-size:12px;line-height:1.45}@media(max-width:780px){.deep-dive-grid{grid-template-columns:1fr}.deep-dive-lead h4{font-size:17px}}`;
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
      <div><div class="eyebrow">DUAS LENTES ESTRATÉGICAS</div><h3>Diretoria de Fertilidade e cliente-clínica: decisão interna e realidade de uso.</h3></div>
      <p>Marcel integra a visão interna da Diretoria de Fertilidade. Dra. Altina é uma voz externa, de quem prescreve, compra e utiliza as soluções da indústria no cuidado de pacientes — por isso não deve ser confundida com uma área interna ou com o campo.</p>
    </div>
    <div class="complementary-grid">
      <details class="complementary-card" open>
        <summary><span>Diretoria de Fertilidade</span><b>Marcel Zetun</b><small>Diretor responsável por Saúde Feminina, Imunologia, Alianças e Novos Negócios</small></summary>
        <div class="complementary-body">
          <div><strong>Leitura estratégica</strong><p>Fertilidade é uma franquia menor e enxuta, porém estratégica: Elonva é o principal motor de diferenciação; Clomid contribui em faturamento e capilaridade; Puregon precisa crescer junto à arquitetura de Elonva; Orgalutran exige gestão realista de uma categoria pressionada.</p></div>
          <div><strong>O que muda para 2027</strong><p>Preservar a narrativa de jornada mais amigável, mas conectá-la à disciplina financeira: decidir onde crescer, controlar erosão de preço em contas premium e médias, e medir se uma condição comercial gera volume e recompra sustentáveis.</p></div>
          <div><strong>Execução e governança</strong><p>O plano precisa entrar em campo antes: estratégia apresentada no retorno de janeiro, plano de conta estruturado logo na sequência e ativação científica desde o segundo trimestre. Negociação não é conversão: após o acordo, a conta precisa de execução médica e comercial com dono, data e acompanhamento.</p></div>
          <div><strong>Segmentação que falta aprofundar</strong><p>Além da conta, segmentar médicos dentro dela: decisores tradicionais e médicos em formação/geração nova pedem abordagens diferentes. O segundo grupo pode ser vetor de adoção de protocolos mais amigáveis e de influência na própria clínica.</p></div>
          <div><strong>Agenda pública</strong><p>Transformar interesse difuso em plano de médio prazo: definir centros prioritários, ponto de partida, mudança esperada, responsáveis e marcos. O acesso público não deve depender apenas de relações ou de uma ação isolada em congresso.</p></div>
        </div>
      </details>
      <details class="complementary-card">
        <summary><span>Cliente-clínica / especialista usuária</span><b>Dra. Altina</b><small>Diretora técnica da Arte Fértil, Recife, e professora de Ginecologia e Obstetrícia</small></summary>
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
  const directorView = document.getElementById('interviewDirectorView');
  const clientView = document.getElementById('interviewClientView');
  const [directorCard, clientCard] = section.querySelectorAll('.complementary-card');
  directorCard?.querySelector('.complementary-body')?.insertAdjacentHTML('beforeend', `
    <section class="interview-deep-dive director-deep">
      <div class="deep-dive-lead"><span>O que esta entrevista muda no Brand Plan</span><h4>A estratégia não falha por falta de narrativa; falha quando crescimento, preço, conta e ativação clínica não operam como um único sistema.</h4><p>A visão de Marcel desloca o plano de “mais atividades para a franquia” para escolhas explícitas de onde crescer, quanto de erosão aceitar e como transformar negociação em uso recorrente.</p></div>
      <div class="deep-dive-grid">
        <article><em>01 · ECONOMIA DA FRANQUIA</em><h4>Crescimento bruto pode esconder erosão de valor.</h4><p>Concentrar crescimento em contas premium e médias pode ampliar volume e, simultaneamente, pressionar preço. O plano precisa enxergar volume, mix, preço líquido, margem e recompra na mesma conta — não só faturamento consolidado.</p><b>Implicação 2027</b><span>Criar guardrails por cluster de conta: ganho mínimo de volume/mix para cada concessão comercial.</span></article>
        <article><em>02 · PORTFÓLIO COMO LÓGICA DE PROTOCOLO</em><h4>Elonva sustenta diferenciação; Puregon precisa capturar continuidade.</h4><p>A entrevista reforça um encadeamento: Elonva é o motor de narrativa e valor; Puregon deve participar da mesma arquitetura onde aplicável; Clomid sustenta capilaridade fora da alta complexidade; Orgalutran pede defesa seletiva, sem meta genérica de expansão.</p><b>Implicação 2027</b><span>Plano por marca precisa ter papel, conta-alvo, barreira e métrica próprios.</span></article>
        <article><em>03 · DA NEGOCIAÇÃO À PRESCRIÇÃO</em><h4>O acordo comercial não é a conversão.</h4><p>O comprador e a liderança da clínica podem viabilizar preço e estoque, mas quem transforma disponibilidade em uso é o médico prescritor e a equipe que acompanha o ciclo. A ausência de uma ponte pós-acordo cria inércia.</p><b>Implicação 2027</b><span>Todo acordo deve gerar um plano de ativação médico-clínica em 30, 60 e 90 dias.</span></article>
        <article><em>04 · SEGMENTAÇÃO DENTRO DA CONTA</em><h4>Não basta classificar a clínica; é preciso ler seus decisores.</h4><p>Dentro da mesma conta coexistem o dono, comprador, líder técnico, médicos estabelecidos e médicos mais jovens. A entrevista aponta estes últimos como possível vetor de aprendizagem e adoção, desde que haja ambiente científico adequado.</p><b>Implicação 2027</b><span>Mapear decisor econômico, decisor clínico, influenciador e próxima geração por conta prioritária.</span></article>
        <article><em>05 · POLÍTICA COMERCIAL COMO NARRATIVA</em><h4>Há valor nas políticas; falta naturalidade no uso.</h4><p>Marcel reconhece a aderência das políticas de portfólio quando conectadas à lógica de protocolo, mas observa dependência de liderança para explicar algo que deveria estar incorporado à conversa do campo.</p><b>Implicação 2027</b><span>Trocar treinamento isolado por playbooks com simulação, objeção, caso de conta e limite financeiro.</span></article>
        <article><em>06 · RITMO DE EXECUÇÃO</em><h4>Estratégia precisa começar antes do calendário de eventos.</h4><p>A sequência sugerida é clara: retorno de janeiro com estratégia reiterada, plano de conta logo depois, preparação científica e ativação já no segundo trimestre. A repetição da mensagem é parte da execução, não redundância.</p><b>Implicação 2027</b><span>Fixar cadência: estratégia → plano de conta → ativação → revisão mensal de sinal e decisão.</span></article>
      </div>
      <div class="deep-decision-strip"><b>Decisões que a Diretoria precisa fechar</b><span>Quais clusters crescem com valor? Onde a política protege portfólio — e onde somente antecipa desconto? Qual médico deve ser ativado após cada negociação? Que sinal faz a liderança escalar, corrigir ou parar?</span></div>
    </section>`);
  clientCard?.querySelector('.complementary-body')?.insertAdjacentHTML('beforeend', `
    <section class="interview-deep-dive client-deep">
      <div class="deep-dive-lead"><span>O que a cliente-clínica revela para a estratégia</span><h4>O produto só cria valor quando cabe no protocolo, na operação, no orçamento e na vida da paciente — ao mesmo tempo.</h4><p>A entrevista da Dra. Altina mostra que a decisão não é uma disputa simples entre marcas. É uma combinação de perfil clínico, rotina da paciente, autonomia médica, logística do ciclo, disponibilidade e confiança na equipe.</p></div>
      <div class="deep-dive-grid">
        <article><em>01 · JORNADA COMEÇA ANTES DA FIV</em><h4>Chegada tardia é uma barreira estrutural, não apenas de comunicação.</h4><p>A médica associa parte do sofrimento, repetição de tentativas e pior prognóstico ao encaminhamento tardio. Redes sociais podem disparar a curiosidade, mas a confiança e o encaminhamento ainda dependem de ginecologista, amigas e especialistas.</p><b>Implicação 2027</b><span>Educar ginecologistas sobre reconhecimento e encaminhamento precoce é agenda de acesso, reputação e cuidado.</span></article>
        <article><em>02 · PRESERVAÇÃO DE FERTILIDADE</em><h4>É uma porta de entrada estratégica para uma paciente mais jovem.</h4><p>O congelamento de óvulos aumentou na experiência relatada após a pandemia. Mulheres profissionais, planejamento de vida, informação digital e recomendação de pares aparecem como contexto de procura; conveniência e menor interferência na rotina ganham peso.</p><b>Implicação 2027</b><span>Construir conteúdo de conscientização e jornada, sem transformar educação em promessa de resultado clínico.</span></article>
        <article><em>03 · DECISÃO É INDIVIDUAL</em><h4>Idade, reserva, histórico, objetivo, custo e medo de aplicação convivem na mesma consulta.</h4><p>A especialista rejeita uma hierarquia universal de produtos. A escolha muda conforme perfil e objetivo: pacientes jovens em preservação ou doação podem atribuir mais peso à rotina; outros perfis exigem avaliação de protocolo, resposta e componentes hormonais pelo médico.</p><b>Implicação 2027</b><span>Evitar mensagem única. Criar materiais por tensão de paciente e por pergunta clínica aprovada.</span></article>
        <article><em>04 · CONVENIÊNCIA PRECISA SER OPERACIONAL</em><h4>Menos aplicações é valor quando reduz atrito sem tirar controle da equipe.</h4><p>Na prática relatada, a menor frequência de aplicações é valorizada quando há elegibilidade e FSH sem LH é desejado; entretanto, custo e escolha clínica preservam espaço para alternativas. A oportunidade não é declarar superioridade, mas qualificar a conversa certa.</p><b>Implicação 2027</b><span>Elonva deve ser ativada como conversa de elegibilidade, rotina e experiência — nunca como atalho universal.</span></article>
        <article><em>05 · A CLÍNICA É UMA REDE DE DECISÃO</em><h4>O prescritor decide, mas a operação sustenta ou interrompe o ciclo.</h4><p>Ultrassom de plantão, prontuário comum, troca por WhatsApp e reunião científica mensal mostram que médico assistente, médico de apoio, enfermagem e logística precisam de informação sincronizada. A decisão é individual; a execução é coletiva.</p><b>Implicação 2027</b><span>Segmentar também a equipe da clínica: decisor, operação e influenciador científico precisam de recursos diferentes.</span></article>
        <article><em>06 · ESTOQUE É PARTE DO CUIDADO</em><h4>Disponibilidade no momento da resposta ovariana não é detalhe de supply.</h4><p>A clínica mantém opções e insumos porque o ciclo pode pedir extensão ou ajuste, enquanto a paciente não pode esperar dias por reposição nem deseja imobilizar orçamento em medicamento que talvez não use. Comprar em volume também altera o custo final.</p><b>Implicação 2027</b><span>Plano de canal deve medir disponibilidade, prazo de reposição, fracionamento e suporte à decisão de compra da clínica.</span></article>
        <article><em>07 · EDUCAÇÃO QUE A CLÍNICA VALORIZA</em><h4>Pequenos grupos, discussão e visita entre pares têm valor prático.</h4><p>A entrevista aponta eventos com ginecologistas, atualização continuada e troca entre clínicas como formatos úteis. O benefício não é apenas presença de marca: é reduzir o atraso no encaminhamento e elevar qualidade da conversa médica.</p><b>Implicação 2027</b><span>Priorizar micro-educação territorial e preceptorship com hipótese de comportamento e follow-up definido.</span></article>
        <article><em>08 · LIMITE E OPORTUNIDADE DA INDÚSTRIA</em><h4>A indústria pode facilitar, não substituir a decisão clínica.</h4><p>A fala da cliente-clínica evidencia onde a Organon pode contribuir: educação, atualização, troca de prática, previsibilidade e suporte à jornada. Diagnóstico, dose, protocolo e conduta permanecem sob responsabilidade do médico assistente.</p><b>Implicação 2027</b><span>Governança Médico-Regulatória deve orientar qualquer conteúdo de paciente, clínica ou protocolo.</span></article>
      </div>
      <div class="deep-decision-strip"><b>Perguntas que a cliente-clínica devolve para a Organon</b><span>Em que ponto a paciente chega tarde? Onde a rotina cria desistência? Qual equipe precisa de suporte? Onde disponibilidade limita a conduta? Como educação precoce gera encaminhamento mais qualificado?</span></div>
    </section>`);
  const buildSegment = (slot, eyebrow, title, intro, card) => {
    if (!slot || !card) return;
    slot.innerHTML = `<div class="panel interview-segment-panel"><div class="eyebrow">${eyebrow}</div><h2>${title}</h2><p class="intro">${intro}</p></div>`;
    slot.querySelector('.interview-segment-panel').appendChild(card);
  };
  buildSegment(directorView,'DIRETORIA DE FERTILIDADE · 01 ENTREVISTA','A lente de negócio que organiza prioridade, investimento e governança.','A visão da Diretoria de Fertilidade é interna e estratégica: ela traduz o papel da franquia, a lógica de crescimento, as escolhas de conta, a disciplina financeira e o modelo de execução para 2027.',directorCard);
  buildSegment(clientView,'CLIENTE-CLÍNICA · 01 ENTREVISTA','Quem prescreve, compra e usa as soluções no cuidado da paciente.','Esta é uma voz externa: a especialista usuária representa a realidade de decisão clínica, operação da clínica, barreiras da paciente e critérios que a indústria precisa compreender para gerar valor.',clientCard);
  section.remove();
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
