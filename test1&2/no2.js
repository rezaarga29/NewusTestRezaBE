let rules = [
  { angka: 3, output: "cat" },
  { angka: 5, output: "kitty" },
];

function catKitty(n) {
  for (let i = 1; i <= n; i++) {
    let output = "";
    for (let rule of rules) {
      if (i % rule.angka === 0) {
        output += rule.output;
      }
    }
    console.log(output || i);
  }
}

function addRule(angka, output) {
  rules.push({ angka, output });
}

// addRule(13, "dog"); //Uncomment untuk mengaktifkan Penambahan Rules
catKitty(30);
