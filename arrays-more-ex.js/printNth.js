function printNth(input) {
  let n = Number(input[input.length - 1]);
  let modified = [];

  for (let i = 0; i < input.length - 1; i++) {
    let el = input[i];

    if (i % n == 0) {
      modified.push(el);
    }
  }
  console.log(modified.join(" "));
}

printNth(["5", "20", "31", "4", "20", "2"]);
//printNth(["dsa", "asd", "test", "test", "2"]);
//printNth(["1", "2", "3", "4", "5", "6"]);
