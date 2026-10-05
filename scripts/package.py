"""Build only the maintained skill and its root license; exclude local previews and history."""
from pathlib import Path
import subprocess,sys,zipfile,hashlib
root=Path(__file__).resolve().parents[1];skill=root/'skills/ui-fidelity-workflow'
subprocess.run([sys.executable,str(root/'scripts/validate.py')],check=True)
out=root/'local/ui-fidelity-workflow-current.zip';out.parent.mkdir(exist_ok=True)
sources={Path('ui-fidelity-workflow')/p.relative_to(skill):p for p in skill.rglob('*') if p.is_file()}
sources[Path('ui-fidelity-workflow/LICENSE')]=root/'LICENSE'
with zipfile.ZipFile(out,'w',zipfile.ZIP_DEFLATED) as z:
 for name,p in sources.items():z.write(p,name)
with zipfile.ZipFile(out) as z:
 assert z.testzip() is None
 for name,p in sources.items():assert z.read(name.as_posix())==p.read_bytes()
print(str(out))
