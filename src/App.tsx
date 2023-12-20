// Import the `Editor` and `Transforms` helpers from Slate.
import { useCallback, useState } from 'react';
import { Editor, Transforms, Element, createEditor } from 'slate';
import { Editable, Slate, withReact } from 'slate-react';

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
];

const App = () => {
  const [editor] = useState(() => withReact(createEditor()));

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable
        renderElement={renderElement}
        onKeyDown={(event) => {
           if (!event.ctrlKey) {
             return;
           }

           switch (event.key) {
             // When "`" is pressed, keep our existing code block logic.
             case '`': {
               event.preventDefault();
               const [match] = Editor.nodes(editor, {
                 match: (n) => n.type === 'code',
               });
               Transforms.setNodes(
                 editor,
                 { type: match ? 'paragraph' : 'code' },
                 { match: (n) => Editor.isBlock(editor, n) }
               );
               break;
             }

             // When "B" is pressed, bold the text in the selection.
             case 'b': {
               event.preventDefault();
               Editor.addMark(editor, 'bold', true);
               break;
             }
           }
        }}
      />
    </Slate>
  );
};

const Leaf = (props) => {
  return (
    <span
      {...props.attributes}
      style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal' }}
    >
      {props.children}
    </span>
  );
};

const CodeElement = (props) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};

const DefaultElement = (props) => {
  return <p {...props.attributes}>{props.children}</p>;
};

export default App;
