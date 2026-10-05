/** Read-only DOM diagnostics. Run in page context, or page.evaluate(auditUIContract, options).
 * No dependency. Explicit selectors identify real surfaces and navigation; they do not waive rules.
 * Cannot prove source provenance, actual rendered font, material quality or motion correctness.
 */
export function auditUIContract(options = {}) {
  const visible = el => {const r=el.getBoundingClientRect(),s=getComputedStyle(el);return r.width>0&&r.height>0&&s.visibility!=='hidden'&&s.display!=='none'&&!el.closest('[hidden]')};
  const geometry = el => {const r=el.getBoundingClientRect();return {x:r.x,y:r.y,width:r.width,height:r.height,bottom:r.bottom,right:r.right}};
  const identity = el => el.dataset.testid||el.id||el.getAttribute('aria-label')||el.textContent.trim().slice(0,60)||el.tagName;
  const radius = (raw,w,h) => {const p=raw.split(/\s+/);return [p[0],p[1]||p[0]].map((v,i)=>v.endsWith('%')?parseFloat(v)*(i?h:w)/100:parseFloat(v))};
  const rounded = el => {const s=getComputedStyle(el),r=el.getBoundingClientRect();const target=Math.min(r.height,r.width)/2;const corners=['borderTopLeftRadius','borderTopRightRadius','borderBottomLeftRadius','borderBottomRightRadius'].map(k=>radius(s[k],r.width,r.height));return {target,corners,passed:corners.every(c=>c.every(v=>v>=target-.6))}};
  const buttons=[...document.querySelectorAll(options.buttons||'button,[role=button],[role=tab]')].filter(visible).map(el=>({name:identity(el),...geometry(el),...rounded(el)}));
  const surfaces=[...document.querySelectorAll(options.surfaces||'body,main')].filter(visible).map(el=>{const s=getComputedStyle(el),c=s.backgroundColor.match(/[\d.]+/g)?.map(Number);return {name:identity(el).slice(0,60),background:s.backgroundColor,image:s.backgroundImage,neutral:c&&(c[3]===undefined||c[3]===1)?Math.max(...c.slice(0,3))-Math.min(...c.slice(0,3))<=3:null}});
  const navEl=options.navigation?document.querySelector(options.navigation):null;
  let navigation=null;if(navEl&&visible(navEl)){const r=geometry(navEl);navigation={...r,...rounded(navEl),leftGap:r.x,rightGap:innerWidth-r.right,bottomGap:innerHeight-r.bottom,position:getComputedStyle(navEl).position};navigation.floating=navigation.position==='fixed'&&navigation.leftGap>=8&&navigation.rightGap>=8&&navigation.bottomGap>=8&&navigation.passed;}
  return {viewport:{width:innerWidth,height:innerHeight},horizontalOverflow:document.documentElement.scrollWidth>innerWidth+1,buttons,buttonFailures:buttons.filter(x=>!x.passed),surfaces,navigation,unverified:['Actual rendered font glyphs require browser font inspection.','Reference components require viewed source evidence and an implementation mapping.','Motion requires triggered intermediate frames, interruption and reduced-motion checks.','SVG provenance requires original-geometry comparison; CSS stroke-width alone is insufficient.']};
}
