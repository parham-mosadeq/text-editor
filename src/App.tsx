import { ChangeEvent, useEffect, useRef, useState } from 'react';
import FroalaEditor from 'react-froala-wysiwyg';
import FroalaJS from 'froala-editor';
import './App.css';

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/js/languages/fa.js';

import { DateBtn } from './plugins/DateBtn';
import { DynamicContent } from './plugins/DynamicFileds';
import { Header } from './plugins/Header';
import { Footer } from './plugins/Footer';
import { Border } from './plugins/Border';
import { PageBreak } from './plugins/PageBreak';
import { VerticalText } from './plugins/VerticalText';

export default function App() {
  const [model, setModel] = useState();
  const [content, setContent] = useState('');
  const [isBorder, setIsBorder] = useState(false);
  const [borderWidth, setBorderWidth] = useState('');
  const [borderStyle, setBorderStyle] = useState('');
  const [borderColor, setBorderColor] = useState('');
  const [pageHeight, setPageHeight] = useState(790);

  const editorRef = useRef();

  const handlePageBreak = () => {
    setPageHeight((prev) => (prev += 790));
  };

  const pageBreak = new PageBreak();
  pageBreak.addPageBreak(pageHeight, handlePageBreak);

  const dy = new DynamicContent({
    editorRef,
    content,
    handleContent,
  });

  const insetBorder = new Border();

  useEffect(() => {
    isBorder
      ? insetBorder.addBorder(borderColor, borderStyle, borderWidth)
      : '';
  }, [borderColor, borderStyle, borderWidth]);

  useEffect(() => {}, [content]);

  function handleContent(event: ChangeEvent<HTMLInputElement>) {
    setContent(event.target.value);
  }

  FroalaJS.DefineIcon('verticalText', { NAME: 'vertical text' });
  FroalaJS.RegisterCommand('verticalText', {
    title: 'verticalText',
    icon: 'vertical Text',
    focus: true,
    undo: true,
    refreshAfterCallback: true,
    callback: () => new VerticalText().addVerticalText(),
  });
  FroalaJS.DefineIcon('pageHeight', { NAME: 'pageHeight' });
  FroalaJS.RegisterCommand('pageHeight', {
    title: 'pageHeight',
    icon: 'Page Height',
    focus: true,
    undo: true,
    refreshAfterCallback: true,
    callback: () => console.log('Page Height'),
  });
  FroalaJS.DefineIcon('Footer', { NAME: 'footer' });
  FroalaJS.RegisterCommand('Footer', {
    title: 'Footer',
    icon: 'footer',
    focus: true,
    undo: true,
    refreshAfterCallback: true,
    callback: () => new Footer().addFooter(),
  });
  FroalaJS.DefineIcon('Header', { NAME: 'header' });
  FroalaJS.RegisterCommand('Header', {
    title: 'Header',
    icon: 'header',
    focus: true,
    undo: true,
    refreshAfterCallback: true,
    callback: () => new Header().addHeader(),
  });
  FroalaJS.DefineIcon('insertDate', { NAME: 'inset persian date' });
  FroalaJS.RegisterCommand('insertDate', {
    title: 'Insert Date',
    icon: 'تاریخ فارسی',
    focus: true,
    undo: true,
    refreshAfterCallback: true,
    callback: () => new DateBtn(editorRef).handleClick(),
  });
  FroalaJS.DefineIcon('insertBorder', { NAME: 'inset border' });
  FroalaJS.RegisterCommand('insertBorder', {
    title: 'Insert Border',
    icon: 'border',
    focus: true,
    undo: true,
    refreshAfterCallback: true,
    callback: () => {
      setIsBorder(true);
    },
  });

  FroalaJS.DefineIcon('DynamicContent', { NAME: 'dynamic content' });
  FroalaJS.RegisterCommand('DynamicContent', {
    title: 'Dynamic Fileds',
    icon: 'DF',
    focus: true,
    undo: true,
    refreshAfterCallback: true,
    callback: () => {
      dy.handleClick();
    },
  });

  return (
    <div className='container'>
      <h1>text editor </h1>
      <div className='editor'>
        <FroalaEditor
          ref={editorRef}
          model={model}
          onModelChange={setModel}
          config={{
            placeholderText: 'بنویسید ...',
            language: 'fa',
            charCounterCount: true,
            toolbarButtons: {
              moreText: {
                buttons: [
                  'bold',
                  'italic',
                  'underline',
                  'strikethrough',
                  'subscript',
                  'superscript',
                  'fontFamily',
                  'fontSize',
                  'textColor',
                  'backgroundColor',
                  'inlineClass',
                  'inlineStyle',
                  'clearFormatting',
                  'DynamicContent',
                  'insertBorder',
                  'verticalText',
                ],
              },
              moreParagraph: {
                buttons: [
                  'alignRight',
                  'alignCenter',
                  'alignLeft',
                  'formatOL',
                  'formatUL',
                  'outdent',
                  'indent',
                  'quote',
                  'paragraphFormat',
                  'paragraphStyle',
                  'lineHeight',
                  'alignJustify',
                  'pageHeight',
                ],
              },
              moreRich: {
                buttons: [
                  'insertLink',
                  'insertImage',
                  'insertVideo',
                  'insertTable',
                  'emoticons',
                  'fontAwesome',
                  'specialCharacters',
                  'embedly',
                  'insertFile',
                  'insertHR',
                ],
              },
              paragraphFormat: {
                N: 'Normal',
                H1: 'Heading 1',
                H2: 'Heading 2',
                H3: 'Heading 3',
                H4: 'Heading 4',
                H5: 'Heading 5',
                H6: 'Heading 6',
                buttonsVisible: 2,
              },
              moreMisc: {
                buttons: [
                  'undo',
                  'redo',
                  'fullscreen',
                  'print',
                  'getPDF',
                  'spellChecker',
                  'selectAll',
                  'html',
                  'help',
                  'insertDate',
                  'Footer',
                  'Header',
                ],
                align: 'right',
                buttonsVisible: 2,
              },
              paragraphFormatSelection: true,
            },
          }}
        />
        {isBorder && (
          <div className='border-modal'>
            <button onClick={() => setIsBorder(false)}>X</button>
            <input
              type='color'
              value={borderColor}
              onChange={(e) => setBorderColor(e.target.value)}
            />
            <input
              type='number'
              placeholder='border width'
              value={borderWidth}
              onChange={(e) => setBorderWidth(e.target.value)}
            />

            <select
              value={borderStyle}
              onChange={(e) => setBorderStyle(e.target.value)}
              name='borderStyles'
              id='borderStyles'
            >
              <option value='solid'>solid</option>
              <option value='dashed'>dashed</option>
              <option value='dotted'>dotted</option>
              <option value='rage'>rage</option>
              <option value='double'>double</option>
              <option value='groove'>groove</option>
              <option value='ridge'>ridge</option>
              <option value='outset'>outset</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
}
