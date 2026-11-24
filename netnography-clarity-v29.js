(() => {
  const page=document.querySelector('#netnography');
  if(!page||page.dataset.clarityUpgrade)return;
  page.dataset.clarityUpgrade='true';
  const journey=page.querySelector('[data-netpage="journey"]');
  const profiles=page.querySelector('[data-netpage="profiles"]');
  if(!journey||!profiles)return;

  /* This is a content taxonomy, not a claim that a single patient follows a linear path. */
  journey.innerHTML=`
    <div class="net-clarity-head">
      <div><div class="eyebrow">JORNADA & TEMAS · COMO LER</div><h2>Esta aba organiza a conversa digital por momento de necessidade — não desenha uma jornada clínica única.</h2></div>
      <span>990 conteúdos clínicos · 666 perfis autores</span>
    </div>
    <div class="clarity-explain">
      <article><b>O que é</b><p>Uma taxonomia dos conteúdos encontrados na coleta. Cada post foi agrupado pelo assunto predominante: sintoma, investigação, acesso, procedimento, preservação ou conversa ao redor da jornada.</p></article>
      <article><b>Para que serve</b><p>Mostra onde há volume, onde há conversa e em que momento a Organon pode ser útil com informação institucional, científica ou de navegação — sem promover medicamento ao público leigo.</p></article>
      <article><b>O que não mede</b><p>Não mede pacientes únicos, prevalência, prescrição ou a sequência real de tratamento. Uma mesma pessoa pode publicar em mais de um tema, e um post pode não ser de paciente.</p></article>
    </div>
    <div class="journey-decision"><b>Pergunta que esta leitura responde</b><span>Qual necessidade concentra atenção em cada momento — e qual tipo de conteúdo, interlocutor ou ação deve ser priorizado?</span></div>
    <div class="journey-flow-v29">
      <article class="theme-card symptom"><span>01 · ENTRADA</span><h3>Sintoma e condição</h3><div><b>170</b><small>posts</small></div><p><strong>91,6 mil interações</strong> · 2.534 comentários</p><em>Endometriose, SOP, dor pélvica, ciclo. Maior identificação e carga emocional.</em></article>
      <article class="theme-card investigation"><span>02 · ENTENDER</span><h3>Investigação</h3><div><b>263</b><small>posts</small></div><p><strong>12,8 mil interações</strong> · 417 comentários</p><em>Exames, hormônios, diagnóstico e consulta. Maior volume de conteúdo específico.</em></article>
      <article class="theme-card access"><span>03 · VIABILIZAR</span><h3>Decisão e acesso</h3><div><b>85</b><small>posts</small></div><p><strong>8,5 mil interações</strong> · 281 comentários</p><em>Preço, clínica, especialista, convênio e custo. Menos posts; alta utilidade de navegação.</em></article>
      <article class="theme-card procedure"><span>04 · TRATAR</span><h3>Tratamento e procedimento</h3><div><b>226</b><small>posts</small></div><p><strong>28,7 mil interações</strong> · 623 comentários</p><em>FIV, inseminação, embrião, transferência e estimulação. Dúvida técnica e ansiedade convivem.</em></article>
      <article class="theme-card preservation"><span>05 · PLANEJAR</span><h3>Preservação</h3><div><b>9</b><small>posts</small></div><p><strong>758 interações</strong> · 7 comentários</p><em>Congelamento e preservação. Tema subcapturado: precisa de vocabulário e coleta próprios.</em></article>
    </div>
    <div class="journey-remainder"><b>+ 237 conteúdos de contexto</b><span>13,6 mil interações e 616 comentários sobre tentativa, notícia, relatos, relacionamento, gravidez e saúde da mulher. Eles mantêm o tema em circulação, mas não foram forçados artificialmente em uma etapa clínica.</span></div>
    <div class="theme-action-grid">
      <article><span>PRIORIDADE DE CONTEÚDO</span><h3>Entrada e investigação</h3><p>Informação sobre sinais, perguntas para consulta, exames e encaminhamento responsável.</p></article>
      <article><span>PRIORIDADE DE NAVEGAÇÃO</span><h3>Acesso e procedimento</h3><p>Explicar etapas, preparar a conversa com a clínica e reduzir desinformação — sem promessa de resultado.</p></article>
      <article><span>PRIORIDADE DE ESCUTA</span><h3>Condição e experiência</h3><p>Ler dúvidas e linguagem de endometriose/SOP para aperfeiçoar disease awareness e apoio.</p></article>
    </div>`;

  const ranking=document.createElement('div');ranking.className='ranking-v29';
  ranking.innerHTML=`
    <div class="net-clarity-head compact"><div><div class="eyebrow">RANKING DE PERFIS · RECORTE CLÍNICO</div><h2>Os DOLs são uma shortlist; o volume vem de 666 perfis, não apenas deles.</h2></div><span>Top sinais observados na base</span></div>
    <div class="ranking-explain"><b>De onde vêm posts e comentários?</b><span>Os seis perfis abaixo somam <strong>13 posts</strong>, 12,9 mil interações e 746 comentários. O restante vem de centenas de autores: perfis de pacientes/comunidades, clínicas, médicos, veículos, creators e contas não classificadas pela base. A base não etiqueta o tipo de autor para todos os 666 perfis; por isso, esta é uma shortlist de sinal, não um mapa completo de influência.</span></div>
    <div class="rank-columns">
      <section><div class="rank-title"><b>Ranking por engajamento observado</b><span>Interações no recorte clínico</span></div>
        <ol class="engagement-list">
          <li><i>1</i><div><b>Dr. Vinícius Amaro</b><span>Endometriose · DOL clínico adjacente</span></div><strong>7.151 <small>interações</small></strong></li>
          <li><i>2</i><div><b>Nathan Gineco</b><span>Ginecologia · validação pendente</span></div><strong>2.444 <small>interações</small></strong></li>
          <li><i>3</i><div><b>Humberto Paes</b><span>Saúde/bem-estar · fora do pool KOL</span></div><strong>1.222 <small>interações</small></strong></li>
          <li><i>4</i><div><b>Dr. Rodrigo da Rosa Filho</b><span>Reprodução humana · evidência pública</span></div><strong>950 <small>interações</small></strong></li>
          <li><i>5</i><div><b>Dr. Alexandre Duarte</b><span>Ginecologia · validação pendente</span></div><strong>690 <small>interações</small></strong></li>
          <li><i>6</i><div><b>Endo Vozes RN</b><span>Comunidade / advocacy</span></div><strong>425 <small>interações</small></strong></li>
        </ol></section>
      <section><div class="rank-title"><b>Prioridade de relevância para Organon</b><span>Leitura qualitativa; não é ranking científico</span></div>
        <ol class="relevance-list">
          <li><i>1</i><div><b>Dr. Rodrigo da Rosa Filho</b><span>Maior aderência direta a reprodução humana; credenciais e vínculo público identificados.</span></div><em>avaliar KOL</em></li>
          <li><i>2</i><div><b>Dr. Vinícius Amaro</b><span>Ponto de entrada para endometriose e investigação; atuação clínica pública verificada.</span></div><em>DOL adjacente</em></li>
          <li><i>3</i><div><b>Endo Vozes RN</b><span>Comunidade e linguagem do paciente; apropriado para escuta, não como KOL médico.</span></div><em>advocacy</em></li>
          <li><i>4</i><div><b>Nathan Gineco / Dr. Alexandre Duarte</b><span>Sinais digitais, mas com especialidade, cidade e vínculo ainda a validar.</span></div><em>diligência</em></li>
          <li><i>5</i><div><b>Humberto Paes</b><span>Alto volume de comentários, porém sem aderência pública a reprodução humana.</span></div><em>não priorizar</em></li>
        </ol></section>
    </div>
    <div class="rank-rules"><b>Como usar este ranking</b><span>Engajamento mostra reação a um conteúdo específico. Relevância combina aderência temática, função na jornada e evidência pública. Nenhum dos dois, isoladamente, confirma influência científica, parceria ou elegibilidade para patrocínio.</span></div>`;
  const existing=profiles.querySelector('.intel-section');
  if(existing)existing.after(ranking);else profiles.prepend(ranking);

  const css=document.createElement('style');css.textContent=`
    .net-clarity-head{display:flex;justify-content:space-between;gap:24px;align-items:flex-end;margin:0 0 16px}.net-clarity-head h2{font-size:29px;max-width:880px;color:#173e4e;line-height:1.13;margin:5px 0 0}.net-clarity-head>span{font-size:11px;font-weight:800;color:#00877f;white-space:nowrap;padding-bottom:4px}.net-clarity-head.compact{margin-top:30px}.clarity-explain{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.clarity-explain article{background:#f5faf9;border:1px solid #d8e8e4;border-radius:14px;padding:17px}.clarity-explain b{font-size:11px;color:#007c74;text-transform:uppercase;letter-spacing:.05em}.clarity-explain p{color:#526f76;font-size:12px;line-height:1.5;margin:8px 0 0}.journey-decision{display:flex;gap:16px;align-items:center;margin:17px 0;padding:15px 17px;border-radius:13px;background:#073347;color:#e2f0ef;font-size:13px;line-height:1.45}.journey-decision b{font-size:11px;color:#94ddd3;text-transform:uppercase;letter-spacing:.05em;min-width:200px}.journey-flow-v29{display:grid;grid-template-columns:repeat(5,1fr);gap:10px}.theme-card{border:1px solid #dce8e5;border-radius:14px;background:#fff;padding:15px;min-height:232px;position:relative}.theme-card span,.theme-action-grid span{font-size:9px;font-weight:900;letter-spacing:.06em;color:#007c74}.theme-card h3{font-size:16px;color:#173e4e;line-height:1.15;margin:8px 0 12px}.theme-card>div{display:flex;align-items:baseline;gap:5px}.theme-card>div b{font-size:27px;color:#007c74}.theme-card>div small{font-size:10px;color:#5e767c}.theme-card p{font-size:11px;line-height:1.35;color:#557078;margin:7px 0}.theme-card em{font-size:10px;line-height:1.42;color:#637d83;display:block;font-style:normal;border-top:1px solid #e5efed;padding-top:10px}.theme-card.symptom{border-top:4px solid #e76f61}.theme-card.investigation{border-top:4px solid #4e9fc4}.theme-card.access{border-top:4px solid #d6a82e}.theme-card.procedure{border-top:4px solid #00877f}.theme-card.preservation{border-top:4px solid #7158a8}.journey-remainder{margin-top:11px;padding:13px 15px;border-radius:12px;background:#eff6f5;color:#567077;font-size:12px;line-height:1.45;display:flex;gap:13px}.journey-remainder b{color:#173e4e;min-width:178px}.theme-action-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:16px}.theme-action-grid article{border-radius:13px;border:1px solid #dbe9e6;padding:16px;background:#fff}.theme-action-grid h3{font-size:17px;color:#173e4e;margin:7px 0}.theme-action-grid p{font-size:12px;line-height:1.45;color:#5c757b;margin:0}.ranking-explain{display:flex;gap:16px;border-left:5px solid #4e9fc4;background:#f3f9fc;border-radius:0 13px 13px 0;padding:16px 18px;color:#536e76;font-size:12px;line-height:1.5}.ranking-explain b{color:#1d6f99;min-width:190px;text-transform:uppercase;font-size:10px;letter-spacing:.05em}.rank-columns{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:16px}.rank-columns section{border:1px solid #d9e7e4;border-radius:14px;overflow:hidden;background:#fff}.rank-title{display:flex;flex-direction:column;gap:3px;padding:15px 17px;background:#073347;color:#fff}.rank-title b{font-size:15px}.rank-title span{font-size:10px;color:#9adfd7}.engagement-list,.relevance-list{list-style:none;margin:0;padding:0}.engagement-list li,.relevance-list li{display:grid;grid-template-columns:26px 1fr auto;gap:10px;align-items:center;padding:12px 15px;border-bottom:1px solid #e5eeec}.engagement-list i,.relevance-list i{font-style:normal;font-size:12px;color:#00877f;font-weight:900}.engagement-list b,.relevance-list b{display:block;font-size:12px;color:#173e4e}.engagement-list span,.relevance-list span{display:block;font-size:10px;line-height:1.35;color:#60787f;margin-top:2px}.engagement-list strong{font-size:14px;color:#007c74;text-align:right}.engagement-list small{display:block;font-size:9px;color:#6e8589;font-weight:600}.relevance-list em{color:#007c74;font-size:9px;font-style:normal;font-weight:900;text-transform:uppercase;letter-spacing:.04em;text-align:right}.rank-rules{display:flex;gap:16px;margin-top:14px;padding:14px 17px;border-radius:12px;background:#fff7f5;color:#60747a;font-size:12px;line-height:1.5}.rank-rules b{color:#c85a4e;min-width:150px;font-size:11px;text-transform:uppercase;letter-spacing:.05em}@media(max-width:900px){.journey-flow-v29{grid-template-columns:repeat(2,1fr)}.clarity-explain,.theme-action-grid,.rank-columns{grid-template-columns:1fr}.net-clarity-head{flex-direction:column;align-items:flex-start;gap:7px}.net-clarity-head>span{white-space:normal}.journey-decision,.ranking-explain,.rank-rules,.journey-remainder{flex-direction:column;gap:6px}.journey-decision b,.ranking-explain b,.rank-rules b,.journey-remainder b{min-width:0}}@media(max-width:520px){.journey-flow-v29{grid-template-columns:1fr}.net-clarity-head h2{font-size:24px}.engagement-list li,.relevance-list li{grid-template-columns:20px 1fr}.engagement-list strong,.relevance-list em{grid-column:2;text-align:left}}
  `;document.head.appendChild(css);
})();
