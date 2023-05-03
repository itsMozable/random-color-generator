// Import necessary packages
import chalk from 'chalk';
import randomColor from 'randomcolor';

// define color variable
let color = randomColor();

// define hue color

const hue = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'pink',
  'monochrome',
];
const brightness = ['bright', 'light', 'dark'];

// building box function for sweet sweet output
function colorBox(setColor) {
  const hashtag = '#'.repeat(31) + '\n';
  const tripleHashtag = hashtag.repeat(3);

  const hashtagMiddle = '#'.repeat(5) + ' '.repeat(21) + '#'.repeat(5) + '\n';
  const hashtagHexcode =
    '#'.repeat(5) +
    ' '.repeat(7) +
    setColor +
    ' '.repeat(7) +
    '#'.repeat(5) +
    '\n';
  console.log(
    chalk.hex(setColor)(
      tripleHashtag +
        hashtagMiddle +
        hashtagHexcode +
        hashtagMiddle +
        tripleHashtag,
    ),
  );
}

// UserInput
const inputArgument = process.argv[2];
const inputLumen = process.argv[3];

// What is happening with the user input
if (hue.includes(inputArgument) && brightness.includes(inputLumen)) {
  color = randomColor({
    hue: inputArgument,
    luminosity: inputLumen,
  });
  colorBox(color);
} else if (hue.includes(inputArgument)) {
  color = randomColor({
    hue: inputArgument,
  });
  colorBox(color);
} else {
  console.log(
    'Not so fast Mr. Bird Bonker! - I will choose the color for you !',
  );
  colorBox(color);
}
