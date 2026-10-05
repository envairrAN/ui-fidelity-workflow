"""Checks this package's simple metadata and references; not a general YAML or UI audit."""
from pathlib import Path
import re,json,hashlib
root=Path(__file__).resolve().parents[1];skill=root/'skills/ui-fidelity-workflow'
text=(skill/'SKILL.md').read_text(encoding='utf-8');front=re.match(r'^---\n(.*?)\n---\n',text,re.S)
assert front,'Missing frontmatter'
fields=dict(line.split(': ',1) for line in front[1].splitlines())
assert set(fields)=={'name','description'} and fields['name']=='ui-fidelity-workflow'
assert 0<len(fields['description'])<=1024 and not re.search('[<>]',fields['description'])
meta=(skill/'agents/openai.yaml').read_text(encoding='utf-8').splitlines();assert meta[0]=='interface:'
values={k:json.loads(v) for k,v in [line.strip().split(': ',1) for line in meta[1:] if line.strip()]}
assert 25<=len(values['short_description'])<=64 and '$ui-fidelity-workflow' in values['default_prompt']
links=[]
for p in [root/'README.md',*list((root/'docs').rglob('*.md')),*list(skill.rglob('*.md'))]:
 for link in re.findall(r'\]\(([^)]+)\)',p.read_text(encoding='utf-8')):
  if '://' in link or link.startswith('#'):continue
  target=(p.parent/link.split('#')[0]).resolve();assert target.is_file(),(str(p),link);links.append(link)
files=[p for p in skill.rglob('*') if p.is_file()]
assert all(p.suffix not in {'.otf','.ttf','.png','.jpg','.zip','.log'} for p in files),'Unexpected distribution assets'
assert all(x in text for x in ['液态玻璃','元素对齐自检','导航状态','Figma','1–3','未验证'])
print(json.dumps({'skillFiles':len(files),'relativeLinks':len(links),'skillKiB':round(sum(p.stat().st_size for p in files)/1024,1),'entryLines':len(text.splitlines()),'passed':True},ensure_ascii=False))
