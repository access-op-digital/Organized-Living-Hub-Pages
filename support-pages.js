(() => {
  'use strict';
  const groups = [...document.querySelectorAll('.faq-topic')];
  if (!groups.length) return;
  const questions = [...document.querySelectorAll('.faq-item')];
  const topics = [...document.querySelectorAll('.topic')];
  const menu = document.querySelector('.topic-menu');
  const help = document.querySelector('.rail-help');
  const note = document.getElementById('faq-result');
  const compact = window.matchMedia('(max-width: 900px)');
  questions.forEach(question => { question.open = false; });
  const sizeMenu = () => {
    menu.open = !compact.matches;
    help.open = !compact.matches;
    menu.querySelector('summary').tabIndex = compact.matches ? 0 : -1;
    help.querySelector('summary').tabIndex = compact.matches ? 0 : -1;
  };
  sizeMenu();
  compact.addEventListener('change', sizeMenu);

  function filter(topic, moveFocus = false) {
    topics.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.topic === topic)));
    let count = 0;
    groups.forEach(group => {
      group.hidden = topic !== 'all' && group.dataset.group !== topic;
      if (!group.hidden) count += group.querySelectorAll('.faq-item').length;
    });
    questions.forEach(question => { question.open = false; });
    note.textContent = topic === 'all'
      ? `${questions.length} questions across ${groups.length} topics`
      : `${count} of ${questions.length} questions`;
    if (moveFocus) {
      if (compact.matches) menu.open = false;
      const heading = groups.find(group => !group.hidden)?.querySelector('h2');
      if (heading) {
        heading.tabIndex = -1;
        heading.focus({preventScroll: true});
        heading.scrollIntoView({block: 'start'});
      }
    }
  }
  topics.forEach(button => button.addEventListener('click', () => filter(button.dataset.topic, true)));

  function revealQuestion() {
    if (!location.hash) return;
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
    const target = document.getElementById(id);
    const group = target?.closest('.faq-topic');
    if (!group) return;
    filter(group.dataset.group);
    const question = target.closest('.faq-item');
    if (question) question.open = true;
    target.scrollIntoView({block: 'start'});
  }
  window.addEventListener('hashchange', revealQuestion);
  revealQuestion();
})();
