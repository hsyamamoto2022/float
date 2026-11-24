(() => {
  const title = 'Planejamento de Marketing 2027 — Estudo e análise de evidências, mercado, entrevistas, dados públicos e coleta de informações';
  document.title = title;
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const heading = hero.querySelector('h1');
  const summary = hero.querySelector('p');
  const context = hero.querySelector('.top span');
  if (heading) heading.textContent = title;
  if (summary) summary.textContent = 'Fertilidade Organon · consolidação estratégica do Overview por marca, benchmark competitivo, entrevistas internas, dados públicos, jornadas e oportunidades para 2027.';
  if (context) context.textContent = 'Fertilidade · Organon · visão estratégica 2027';
})();
