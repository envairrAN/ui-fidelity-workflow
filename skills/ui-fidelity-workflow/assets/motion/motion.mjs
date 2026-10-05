/* MIT. Optional framework-neutral starter; does not navigate or own business state. */
export function createUIMotion() {
  const media = matchMedia('(prefers-reduced-motion: reduce)');
  const jobs = new Map();
  let disposed = false;
  const skip = () => disposed || media.matches || document.hidden;
  const token = (el, name, fallback) => {
    const value = getComputedStyle(el).getPropertyValue('--ui-motion-' + name).trim();
    return value || fallback;
  };
  const timing = (el, name, fallback, delay = 0) => ({
    duration: parseFloat(token(el, name, fallback)), delay,
    easing: token(el, 'ease', 'cubic-bezier(.23,1,.32,1)'), fill: 'both'
  });
  function cancel(el) { jobs.get(el)?.finish(false); }
  function run(el, build, cleanup = () => {}) {
    cancel(el);
    if (skip() || !el.isConnected || typeof el.animate !== 'function') {
      cleanup(); return Promise.resolve(true);
    }
    return new Promise(resolve => {
      let animations = [], settled = false;
      const job = { finish(ok) {
        if (settled) return;
        settled = true;
        if (jobs.get(el) === job) jobs.delete(el);
        for (const animation of animations) animation.cancel();
        cleanup(); resolve(ok);
      }};
      jobs.set(el, job);
      try {
        animations = build();
        Promise.all(animations.map(a => a.finished)).then(() => job.finish(true), () => job.finish(false));
      } catch { job.finish(false); }
    });
  }
  function enter(el, { kind = 'component', direction = 0, delay = 0 } = {}) {
    const current = getComputedStyle(el);
    const interrupted = jobs.has(el);
    const first = interrupted ? { opacity: current.opacity, transform: current.transform } : {
      opacity: 0,
      transform: kind === 'page' ? `translateX(${direction * 10}px)` : 'translateY(8px)'
    };
    return run(el, () => [el.animate([first, { opacity: 1, transform: 'none' }], timing(el, 'enter', '220ms', Math.min(delay, 80)))]);
  }
  function exit(el, { kind = 'component', direction = 0 } = {}) {
    const style = getComputedStyle(el);
    const first = { opacity: style.opacity, transform: style.transform };
    return run(el, () => [el.animate([first, {
      opacity: 0, transform: kind === 'page' ? `translateX(${-direction * 10}px)` : 'translateY(8px)'
    }], timing(el, 'exit', '160ms'))]);
  }
  function rollNumber(el, previous, next) {
    // The caller owns real data and formatting. Never derive values from transient digit DOM.
    previous = String(previous); next = String(next);
    const busy = jobs.has(el);
    cancel(el); el.textContent = next;
    if (skip() || busy || previous === next || !el.isConnected || !el.animate) return Promise.resolve(true);
    const readable = document.createElement('span');
    readable.className = 'ui-motion-readable'; readable.textContent = next;
    const visual = document.createElement('span');
    visual.className = 'ui-motion-digits'; visual.setAttribute('aria-hidden', 'true');
    const chars = [...next], old = [...previous.padStart(chars.length, ' ')];
    const changing = [];
    chars.forEach((char, i) => {
      const was = old[old.length - chars.length + i] || ' ';
      if (!/\d/.test(char) || char === was) { visual.append(char); return; }
      const digit = document.createElement('span'); digit.className = 'ui-motion-digit';
      const outgoing = document.createElement('span'); outgoing.textContent = was;
      const incoming = document.createElement('span'); incoming.textContent = char;
      digit.append(outgoing, incoming); visual.append(digit); changing.push({outgoing, incoming});
    });
    el.replaceChildren(readable, visual);
    return run(el, () => changing.flatMap(({outgoing, incoming}) => [
      outgoing.animate([{transform: 'translateY(0)'}, {transform: 'translateY(-100%)'}], timing(el, 'number', '280ms')),
      incoming.animate([{transform: 'translateY(100%)'}, {transform: 'translateY(0)'}], timing(el, 'number', '280ms'))
    ]), () => { el.textContent = next; });
  }
  function draw(svg) {
    if (jobs.has(svg)) { cancel(svg); return Promise.resolve(true); }
    // Only explicitly selected original stroke geometry; never replace icon paths.
    const paths = [...svg.querySelectorAll('[data-motion-path]')].filter(path => {
      const style = getComputedStyle(path);
      return typeof path.getTotalLength === 'function' && style.fill === 'none' &&
        style.stroke !== 'none' && style.strokeDasharray === 'none' && path.getTotalLength() > 0;
    });
    return run(svg, () => paths.map((path, i) => {
      const length = path.getTotalLength();
      return path.animate([
        {strokeDasharray: `${length} ${length}`, strokeDashoffset: length},
        {strokeDasharray: `${length} ${length}`, strokeDashoffset: 0}
      ], timing(svg, 'path', '260ms', Math.min(i * 30, 60)));
    }));
  }
  function settle() { for (const job of [...jobs.values()]) job.finish(true); }
  function preferenceChanged() { if (media.matches) settle(); }
  function visibilityChanged() { if (document.hidden) settle(); }
  media.addEventListener('change', preferenceChanged);
  document.addEventListener('visibilitychange', visibilityChanged);
  return { enter, exit, rollNumber, draw, cancel,
    dispose() {
      disposed = true;
      for (const job of [...jobs.values()]) job.finish(false);
      media.removeEventListener('change', preferenceChanged);
      document.removeEventListener('visibilitychange', visibilityChanged);
    }
  };
}
