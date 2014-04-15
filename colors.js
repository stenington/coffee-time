var charm = require('charm')();
charm.pipe(process.stdout);
charm.reset();

charm.display('reset').write('standard colors:\t');
for (var i = 0; i < 8; i++) {
  charm.display('reset').foreground(i).write(i.toString()).background(i).write('\t');
}

charm.display('reset').write('\n\nhigh intensity colors:\t');
for (var i = 8; i < 16; i++) {
  charm.display('reset').foreground(i).write(i.toString()).background(i).write('\t');
}

charm.display('reset').write('\n\n216 colors:\n');
for (var k = 0; k <= 5; k++) {
  charm.display("reset").write("r = " + k).down(1).left(5)
    .write("0 b →").down(1).left(5)
    .write("g").down(1).left(1)
    .write("↓").up(1).left(1);
  for (var j = 0; j <= 5; j++) {
    charm.right(1);
    for (var i = 0; i <= 5; i++) {
      charm.background(16 + k*36 + j*6 + i).write('   ');
    }
    charm.down(1).left(19);
  }
    charm.up(8).right(22);
}
charm.down(8);

charm.display('reset').write('\n\ngrayscale:\t');
for (var i = 232; i < 256; i++) {
  charm.display('reset').foreground(i).write(i.toString()).background(i).write('\t');
}

charm.display('reset').write('\n\n');
charm.display('reset');
