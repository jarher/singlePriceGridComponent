/* eslint-disable react/prop-types */
/* eslint-disable no-prototype-builtins */

// create additional children html tags
export default function CreateTag({ value }) {
  let content;
  if (value.hasOwnProperty("children")) {
    content = value.children.map((child, index) => {
      const { content } = child;
      if (child.type === "span") {
        return <span key={index}>{content}</span>;
      }
      if (child.type === "sub") {
        return <sub key={index}>{content}</sub>;
      }
    });
  } else {
    content = value;
  }

  return <>{content}</>;
}
