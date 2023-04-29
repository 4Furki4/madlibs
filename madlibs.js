/**
 * Complete the implementation of parseStory.
 *
 * parseStory retrieves the story as a single string from story.txt
 * (I have written this part for you).
 *
 * In your code, you are required (please read this carefully):
 * - to return a list of objects
 * - each object should definitely have a field, `word`
 * - each object should maybe have a field, `pos` (part of speech)
 *
 * So for example, the return value of this for the example story.txt
 * will be an object that looks like so (note the comma! periods should
 * be handled in the same way).
 *
 * Input: "Louis[n] went[v] to the store[n], and it was fun[a]."
 * Output: [
 *  { word: "Louis", pos: "noun" },
 *  { word: "went", pos: "verb", },
 *  { word: "to", },
 *  { word: "the", },
 *  { word: "store", pos: "noun" }
 *  { word: "," }
 *  ....
 *
 * There are multiple ways to do this, but you may want to use regular expressions.
 * Please go through this lesson: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/
 */
function parseStory(rawStory) {
  // Your code here.
  const regex = /[a-zA-Z]+(\[[a-zA-Z]+\])?|\S+/g;
  const matches = rawStory.match(regex);

  console.log(matches);
  // console.log(rawStory)
  const words = matches.map((match) => {
    const word = match.replace(/\[.*?\]/, ""); // Remove any part of speech tags from the word
    const posMatch = match.match(/\[(v|a|n)\]/); // Find any part of speech tag in the word
    let pos = posMatch ? posMatch[1] : undefined; // Extract the part of speech (if any) from the tag
    if (pos) { // Only include the pos key if it is defined
      // Map the pos abbreviation to the full part of speech name
      if (pos === "v") {
        pos = "verb";
      } else if (pos === "a") {
        pos = "adjective";
      } else if (pos === "n") {
        pos = "noun";
      }
    }
    return { word, ...(pos && { pos }) }; // Use object spread syntax to conditionally include the pos key
  });
  console.log(words);
  return words; // This line is currently wrong :)
}

/**
 * All your other JavaScript code goes here, inside the function. Don't worry about
 * the `then` and `async` syntax for now.
 *
 * NOTE: You should not be writing any code in the global namespace EXCEPT
 * declaring functions. All code should either:
 * 1. Be in a function.
 * 2. Be in .then() below.
 *
 * You'll want to use the results of parseStory() to display the story on the page.
 */
getRawStory()
  .then(parseStory)
  .then((processedStory) => {
    console.log(processedStory);
  });
