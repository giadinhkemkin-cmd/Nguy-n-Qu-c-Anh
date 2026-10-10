# Cắt ảnh chụp cả trang thành nhiều đoạn để xem: python3 qa/tools/slice.py <png> <seg_h> [scale]
import sys
from PIL import Image
f=sys.argv[1]; h=int(sys.argv[2]); sc=float(sys.argv[3]) if len(sys.argv)>3 else 1
im=Image.open(f); W,H=im.size; n=0
for y in range(0,H,h):
    c=im.crop((0,y,W,min(H,y+h)))
    if sc!=1: c=c.resize((int(c.width*sc),int(c.height*sc)))
    out=f.replace('.png',f'-p{n}.png'); c.save(out); print(out); n+=1
