const fs = require('fs');
const path = require('path');

function createNewNote(body, notes) {
    const zookeeper = body;
    zookeepers.push(zookeeper);
    fs.writeFileSync(
      path.join(__dirname, "../data/zookeepers.json"),
      JSON.stringify({ zookeepers }, null, 2)
    );
    return zookeeper;
  }