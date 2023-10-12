function ladybugs(input) {
  let fieldSize = input[0];
  let ladybugPositionsStr = input[1];


  let ladybugPositions = ladybugPositionsStr.split(' ');

  for (let i = 0; i < ladybugPositions.length; i++) {
    let position = parseInt(ladybugPositions[i]);

    if (!isNaN(position) && position >= 0 && position < fieldSize) {
      field[position] = 1;
    }
  }
  for (let j = 2; j < arr.length; j++) {
    let command = arr[j];
    let tokens = command.split(' ');

  for (let i = 2; i < input.length; i++) {
    let [bugIndex, direction, flyLength] = input[i].split(" ");

    let index = parseInt(bugIndex);
    let length = parseInt(flyLength);

    if (
      !field.includes(1) ||
      index < 0 ||
      index >= fieldSize ||
      field[index] !== 1
    ) {
      continue;
    }
    field[ladyBugIdx] = 0;

    field[index] = 0;

    let newPosition = index;

    if (direction == "right") {
      newPosition += length;
    } else if (direction == "left") {
      newPosition -= length;
    }

    while (
      newPosition >= 0 &&
      newPosition < fieldSize &&
      field[newPosition] == 1
    ) {
      if (direction == "right") {
        newPosition += length;
      } else if (direction == "left") {
        newPosition -= length;
      }
    }

  }

  console.log(field.join(" "));
}
ladybugs([3, "0 1", "0 right 1", "2 right 1"]);
//ladybugs([ 3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
//ladybugs([ 5, '3', '3 left 2', '1 left -2']);
