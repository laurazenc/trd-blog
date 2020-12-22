const WORDS_PER_MIN = 275;
const IMAGE_READ_TIME = 10;
const imageTags = ["img", "Image"];

function imageCount(string: string) {
  const combinedImageTags = imageTags.join("|");
  const pattern = `<(${combinedImageTags})([\\w\\W]+?)[\\/]?>`;
  const reg = new RegExp(pattern, "g");
  return (string.match(reg) || []).length;
}

function imageReadTime(string: string) {
  let seconds = 0;
  const count = imageCount(string);

  if (count > 10) {
    seconds = (count / 2) * (IMAGE_READ_TIME + 3) + (count - 10) * 3; // n/2(a+b) + 3 sec/image
  } else {
    seconds = (count / 2) * (2 * IMAGE_READ_TIME + (1 - count)); // n/2[2a+(n-1)d]
  }
  return {
    time: seconds / 60,
    count,
  };
}

function stripTags(string: string) {
  const pattern = "<\\w+(\\s+(\"[^\"]*\"|\\'[^\\']*'|[^>])+)?>|<\\/\\w+>";
  const reg = new RegExp(pattern, "gi");
  return string.replace(reg, "");
}

function wordsCount(string: string) {
  const pattern = "\\w+";
  const reg = new RegExp(pattern, "g");
  return (string.match(reg) || []).length;
}

function wordsReadTime(string: string, wordsPerMin = WORDS_PER_MIN) {
  const wordCount = wordsCount(string);
  const wordTime = wordCount / wordsPerMin;
  return {
    wordTime,
    wordCount,
  };
}

export const stripWhitespace = (text: string) => {
  return text.replace(/^\s+/, "").replace(/\s+$/, "");
};

export function readingTime(string: string) {
  const { time: imageTime, count: imageCount } = imageReadTime(string);
  const strippedString = stripTags(stripWhitespace(string));
  const { wordTime, wordCount } = wordsReadTime(strippedString, WORDS_PER_MIN);
  return Math.ceil(imageTime + wordTime);
}
