function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === Object
          ? createElement(...child)
          : createTextElement(child)
      ),
    },
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

const Act = {
  createElement,
};

const element = Act.createElement(
  "div",
  { id: "foo" },
  Act.createElement("a", null, "bar"),
  Act.createElement("b")
);
// {
//   type: "h1",
//   props: {
//     title: "foo",
//     children: "Hello",
//   },
// };

const container = document.getElementById("root");

const node = document.createElement(element.type);
node["id"] = element.props.id;

const text = document.createTextNode("");
text["nodeValue"] = element.props.children;

node.appendChild(text);
container.appendChild(node);

console.log(text, node, container);
