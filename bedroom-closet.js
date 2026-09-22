(() => {
  'use strict';
  // The source HTML exposes every panel when JavaScript is unavailable.
  document.body.classList.add('js');
  document.querySelectorAll('[data-tabs]').forEach(group => {
    const list = Array.from(group.querySelectorAll('[role="tablist"]')).find(el => el.closest('[data-tabs]') === group);
    if (!list) return;
    const tabs = Array.from(list.querySelectorAll('[role="tab"]'));
    const activate = (tab, focus = false) => {
      tabs.forEach(item => {
        const selected = item === tab;
        item.setAttribute('aria-selected', String(selected));
        item.tabIndex = selected ? 0 : -1;
        const panel = document.getElementById(item.getAttribute('aria-controls'));
        if (panel) panel.hidden = !selected;
      });
      if (focus) tab.focus();
    };
    tabs.forEach(tab => {
      tab.addEventListener('click', () => activate(tab));
      tab.addEventListener('keydown', event => {
        const index = tabs.indexOf(tab);
        let target;
        const vertical = list.getAttribute('aria-orientation') === 'vertical';
        if (event.key === (vertical ? 'ArrowDown' : 'ArrowRight')) target = (index + 1) % tabs.length;
        if (event.key === (vertical ? 'ArrowUp' : 'ArrowLeft')) target = (index - 1 + tabs.length) % tabs.length;
        if (event.key === 'Home') target = 0;
        if (event.key === 'End') target = tabs.length - 1;
        if (target !== undefined) { event.preventDefault(); activate(tabs[target], true); }
      });
    });
    if (tabs.length) activate(tabs.find(tab => tab.getAttribute('aria-selected') === 'true') || tabs[0]);
  });
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-navigation');
  const closeMenu = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = 'Menu';
  };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Close' : 'Menu';
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu(); toggle.focus();
    }
  });
  nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  const revealFragment = () => {
    if (!location.hash) return;
    let target;
    try { target = document.getElementById(decodeURIComponent(location.hash.slice(1))); } catch { return; }
    if (!target) return;
    let parent = target;
    while (parent) {
      if (parent.tagName === 'DETAILS') parent.open = true;
      if (parent.getAttribute('role') === 'tabpanel') {
        const control = document.getElementById(parent.getAttribute('aria-labelledby'));
        if (control) control.click();
      }
      parent = parent.parentElement;
    }
    target.scrollIntoView({block:'start'});
  };
  window.addEventListener('hashchange', revealFragment);
  revealFragment();
})();
