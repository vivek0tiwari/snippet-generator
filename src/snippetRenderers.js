export const vSCodeRender = (snippet, trigger, description) => {
  let snippetToBerenderd = "";
  if (snippet && snippet.length) {
    const snippetAfterScapedChars = snippet
      .replace(/\\/g, "\\\\") // replacing scape charactors
      .replace(/"/g, '\\"')
      .split("\n");
    const snippetLength = snippetAfterScapedChars.length;
    snippetToBerenderd = snippetAfterScapedChars.map((line, index) => {
      // adding double quotes for each line
      console.log(index, line);
      return index === snippetLength - 1 ? `"${line}"` : `"${line}",`;
    });
  }
  return `
      "${description}": {
        "prefix": "${trigger}",
        "body": [
          ${snippetToBerenderd ? snippetToBerenderd.join("\n") : ""}
        ],
        "description": "${description}"
      }
    `;
};

export const subLimeRender = (snippet, trigger, description) => {
  return `<snippet>
  <content><![CDATA[
    ${snippet}
  ]]></content>
  <tabTrigger>${trigger}</tabTrigger>
  <description>${description}</description>
  <!-- Optional: Set a scope to limit where the snippet will trigger -->
  <!-- <scope >source.python</scope > -->
</snippet>
    `;
};

export const atomRender = (snippet, trigger, description) => {
  return `
  '${description}':
    'prefix': '${trigger}'
    'body': """
      ${snippet}
    """
`;
};
