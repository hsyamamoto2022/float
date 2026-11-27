(() => {
  const home = document.getElementById('home');
  const areas = document.getElementById('areas');
  const clientView = document.getElementById('interviewClientView');
  if (!home || !areas || !clientView) return;

  const heroTitle = document.querySelector('.hero h1');
  const heroIntro = document.querySelector('.hero p');
  if (heroTitle) heroTitle.textContent = 'Treze entrevistas que precisam orientar o plano de 2027.';
  if (heroIntro) heroIntro.textContent = 'Leitura individual de cinco áreas, uma diretoria, cinco consultores de campo e duas lideranças cliente-clínica, conectada ao overview por marca.';
  const navPanel = home.querySelector('.panel');
  if (navPanel) {
    const h2 = navPanel.querySelector('h2');
    const intro = navPanel.querySelector('.intro');
    const stats = navPanel.querySelector('.grid.g4');
    if (h2) h2.textContent = 'Quatro origens de entrevista, cinco lentes para decidir melhor.';
    if (intro) intro.innerHTML = 'As <b>cinco áreas</b> trazem a visão funcional da Organon; a <b>Diretoria de Fertilidade</b> define a lente de negócio; os <b>cinco consultores de campo</b> traduzem o território; e as <b>duas lideranças cliente-clínica</b> mostram tanto a decisão assistencial quanto a lógica de rede, operação e mercado das clínicas.';
    if (stats) stats.innerHTML = '<div class="stat"><b>05</b><span>áreas entrevistadas</span></div><div class="stat"><b>01</b><span>diretoria de Fertilidade</span></div><div class="stat"><b>05</b><span>consultores de campo</span></div><div class="stat"><b>02</b><span>cliente-clínica</span></div>';
  }

  const roster = areas.querySelector('.area-interviewees');
  if (roster) {
    const eyebrow = roster.querySelector('.eyebrow');
    const h3 = roster.querySelector('h3');
    const scope = roster.querySelector('.interview-scope');
    if (eyebrow) eyebrow.textContent = '13 entrevistas no total';
    if (h3) h3.textContent = '5 áreas entrevistadas · 1 diretoria · 5 consultores de campo · 2 cliente-clínica';
    if (scope) scope.innerHTML = '<span><b>05</b> áreas</span><span><b>01</b> diretoria</span><span><b>05</b> campo</span><span><b>02</b> cliente-clínica</span>';
  }
  const clientTab = areas.querySelector('[data-view="client"]');
  if (clientTab) clientTab.innerHTML = 'Visão cliente-clínica <small>02</small>';

  const existingCard = clientView.querySelector('.complementary-card');
  const panel = clientView.querySelector('.interview-segment-panel');
  if (panel) {
    panel.querySelector('.eyebrow').textContent = 'CLIENTE-CLÍNICA · 02 ENTREVISTAS';
    panel.querySelector('h2').textContent = 'A decisão clínica e a lógica de negócio de quem cuida, compra e organiza a clínica.';
    panel.querySelector('.intro').textContent = 'Dra. Altina traduz o cuidado e a rotina assistencial. Fábio Iwai, CEO da Huntington, acrescenta a visão de rede: autonomia médica, rentabilidade, experiência da paciente, reputação e o que a indústria pode fazer para expandir o mercado de forma responsável.';
  }
  if (!existingCard || clientView.querySelector('.ceo-clinic-card')) return;

  const ceo = document.createElement('details');
  ceo.className = 'complementary-card ceo-clinic-card';
  ceo.open = true;
  ceo.innerHTML = `
    <summary><span>Cliente-clínica / liderança executiva</span><b>Fábio Akiyoshi Iwai</b><small>CEO da Huntington; rede pertencente ao grupo internacional Eugin, 100% dedicada à reprodução humana</small></summary>
    <div class="complementary-body">
      <div><strong>Escala e posicionamento</strong><p>A Huntington opera 11 clínicas e satélites em São Paulo, Alphaville, Campinas, Rio de Janeiro, Minas Gerais, Distrito Federal e Bahia. A marca se posiciona por rigor médico, inovação tecnológica e experiência do paciente; o principal motor de aquisição ainda é o boca a boca, sustentado por resultado clínico e cuidado percebido.</p></div>
      <div><strong>Como a clínica decide medicamentos</strong><p>A liderança de negócio fornece transparência de custo e rentabilidade, mas não determina conduta. Diretores médicos definem diretrizes e mantêm espaço para decisão local dentro de limites técnicos. Quando alternativas são clinicamente equivalentes, preço e margem pesam; quando não são, a decisão é técnica.</p></div>
      <div><strong>Mercado em tensão</strong><p>O CEO vê expansão puxada por maternidade tardia, preservação de fertilidade e famílias homoafetivas, contraposta por menor número desejado de filhos, insegurança econômica e maior competição. Com cerca de 55 mil ciclos anuais para aproximadamente 200 clínicas, a leitura é de saturação econômica de parte da oferta.</p></div>
      <div><strong>O que uma parceria relevante entrega</strong><p>Preço competitivo segue indispensável. Além dele, a Huntington valoriza apoio ao congresso científico, educação médica e campanhas de awareness sobre preservação de fertilidade e encaminhamento precoce. Programas de experiência e treinamento só serão percebidos como valor se tiverem implantação acompanhada até o fim.</p></div>
    </div>
    <section class="interview-deep-dive client-deep ceo-deep">
      <div class="deep-dive-lead"><span>O que a visão do CEO adiciona ao Brand Plan</span><h4>A indústria não disputa apenas preferência de produto: ela participa de uma equação de autonomia médica, viabilidade econômica, reputação da clínica, geração de demanda e execução consistente.</h4><p>Esta visão externa amplia o plano da conta individual para a lógica da rede: como uma clínica cresce, protege qualidade e escolhe parceiros sem permitir que a decisão comercial se sobreponha à decisão técnica.</p></div>
      <div class="deep-dive-grid">
        <article><em>01 · AUTONOMIA MÉDICA COM CONTEXTO ECONÔMICO</em><h4>Preço informa; não substitui o critério técnico.</h4><p>O modelo relatado preserva a decisão do diretor médico e do corpo clínico, dando visibilidade sobre custo e rentabilidade. A implicação é que a conversa comercial precisa ajudar a decisão sem parecer interferência na conduta.</p><b>Implicação 2027</b><span>Separar material econômico, conversa clínica e governança de compliance por decisor da conta.</span></article>
        <article><em>02 · REDE NÃO É UMA CONTA ÚNICA</em><h4>Diretriz comum convive com autonomia local.</h4><p>Mesmo sob uma mesma marca, práticas e escolhas podem variar entre cidades e equipes. Forçar padronização comercial sem respeitar a leitura do diretor médico local tende a reduzir aderência.</p><b>Implicação 2027</b><span>Mapear rede por unidade, líder técnico, prática predominante, preço, estoque e oportunidade — não só pelo contrato central.</span></article>
        <article><em>03 · RESULTADO + EXPERIÊNCIA GERAM DEMANDA</em><h4>O boca a boca é consequência operacional, não mídia espontânea.</h4><p>Corpo clínico, laboratório, enfermagem, tecnologia, infraestrutura e experiência se combinam para produzir confiança. O indicador final não é somente alcance digital: é recomendação e procura qualificada.</p><b>Implicação 2027</b><span>Oferecer iniciativas que facilitem a jornada da clínica e da paciente, com métrica de adoção e qualidade de execução.</span></article>
        <article><em>04 · AWARENESS É UMA AGENDA DE CATEGORIA</em><h4>A clínica sozinha não financia educação que beneficia todo o mercado.</h4><p>O CEO aponta que muitas mulheres chegam tarde à conversa sobre preservação de fertilidade. A clínica arca com o custo de comunicar, enquanto concorrentes também capturam a demanda. A indústria tem escala para construir awareness dentro das regras de compliance.</p><b>Implicação 2027</b><span>Priorizar educação não promocional sobre preservação, sinais de infertilidade e momento de buscar orientação médica.</span></article>
        <article><em>05 · ENCAMINHAMENTO PRECOCE É O MAIOR GARGALO</em><h4>Ginecologistas ainda orientam menos do que o necessário.</h4><p>A comparação proposta é direta: contracepção é tema recorrente na vida das mulheres; preservação de fertilidade raramente é. O atraso no encaminhamento diminui opções e torna a jornada mais desgastante.</p><b>Implicação 2027</b><span>Desenhar educação territorial para ginecologistas com objetivo de comportamento: reconhecer, conversar e encaminhar no momento adequado.</span></article>
        <article><em>06 · EVENTO PRECISA TER PROPÓSITO E EXECUÇÃO</em><h4>Reputação científica abre porta; execução sustenta parceria.</h4><p>O Congresso Huntington é percebido como ativo científico relevante. Já iniciativas de treinamento e experiência foram avaliadas como boas no papel, mas fracas quando não chegam ao fim da implementação.</p><b>Implicação 2027</b><span>Em cada parceria, combinar objetivo, público, líder da clínica, plano de implantação e indicador de uso pós-evento.</span></article>
        <article><em>07 · O MERCADO CRESCE E SE FRAGMENTA</em><h4>Demanda potencial não elimina a pressão econômica.</h4><p>Maternidade tardia, congelamento de óvulos e novos arranjos familiares impulsionam a categoria. Ao mesmo tempo, menor fecundidade, cenário econômico e excesso relativo de clínicas tornam a disputa mais sensível a preço, eficiência e reputação.</p><b>Implicação 2027</b><span>Segmentar investimento por maturidade da clínica e viabilidade da parceria; não tratar abertura de clínica como sinônimo de oportunidade rentável.</span></article>
        <article><em>08 · APRENDER COM EUROPA NÃO É COPIAR MODELO</em><h4>Financiamento público altera acesso, mas pode comprimir a economia da clínica.</h4><p>Operações europeias mostram modelos de custeio público de tentativas e medicamentos; segundo a visão relatada, nem sempre a remuneração sustenta bem a clínica privada. A lição é olhar mecanismos de acesso com avaliação de sustentabilidade, não importar uma solução automaticamente.</p><b>Implicação 2027</b><span>Tratar acesso como hipótese de longo prazo, comparando impacto para paciente, clínica, sistema e indústria.</span></article>
      </div>
      <div class="deep-decision-strip"><b>Perguntas que o CEO devolve para a Organon</b><span>Que proposta respeita a autonomia médica e ajuda a clínica a ser sustentável? Onde educação de categoria gera encaminhamento mais cedo? Quais iniciativas chegam de fato à operação? Como medir valor além do desconto e da presença em evento?</span></div>
    </section>`;
  existingCard.after(ceo);

  const recurrence = areas.querySelector('.interview-recurrence');
  if (recurrence) {
    const title = recurrence.querySelector('h2');
    const intro = recurrence.querySelector('.intro');
    const chart = recurrence.querySelector('.box');
    if (title) title.textContent = 'Temas recorrentes nas 13 entrevistas.';
    if (intro) intro.textContent = 'A contagem incorpora cinco áreas, a Diretoria de Fertilidade, cinco consultores de campo e duas vozes cliente-clínica. Ela mostra em quantas entrevistas cada tema apareceu ao tratar de estratégia, rotina, risco, oportunidade ou plano de 2027 — não é ranking de importância financeira.';
    if (chart) chart.innerHTML = '<h3>Recorrência temática nas 13 entrevistas</h3><div class="barrow"><span>Ações / coordenação</span><div class="bartrack"><div class="barfill" style="width:100%"></div></div><b class="barvalue">13/13</b></div><div class="barrow"><span>Paciente / acesso</span><div class="bartrack"><div class="barfill" style="width:92.3%"></div></div><b class="barvalue">12/13</b></div><div class="barrow"><span>Portfólio e estratégia</span><div class="bartrack"><div class="barfill" style="width:92.3%"></div></div><b class="barvalue">12/13</b></div><div class="barrow"><span>Eventos e conteúdo</span><div class="bartrack"><div class="barfill" style="width:92.3%"></div></div><b class="barvalue">12/13</b></div><div class="barrow"><span>Ciência e protocolos</span><div class="bartrack"><div class="barfill blue" style="width:84.6%"></div></div><b class="barvalue">11/13</b></div><div class="barrow"><span>Dados e segmentação</span><div class="bartrack"><div class="barfill gold" style="width:69.2%"></div></div><b class="barvalue">9/13</b></div><div class="barrow"><span>Canal / abastecimento</span><div class="bartrack"><div class="barfill coral" style="width:53.8%"></div></div><b class="barvalue">7/13</b></div><p class="axisnote">Presença temática após recodificação das 13 entrevistas: 5 áreas, 1 diretoria, 5 consultores de campo e 2 cliente-clínica. Não é medida de importância estatística.</p>';
  }
})();
