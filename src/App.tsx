import FroalaEditor from 'react-froala-wysiwyg';
import FroalaJS from 'froala-editor';

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/js/languages/fa.js';
import './App.css';

import { ChangeEvent, useRef, useState } from 'react';
import { DateBtn } from './plugins/DateBtn';
import { DynamicContent } from './plugins/DynamicFileds';
import { Header } from './plugins/Header';
import { Footer } from './plugins/Footer';

export default function App() {
  const [model, setModel] = useState();
  const [content, setContent] = useState('');
  const [border, setBorder] = useState('');
  const [isBorder, setIsBorder] = useState(false);

  function handleContent(event: ChangeEvent<HTMLInputElement>) {
    setContent(event.target.value);
  }

  const editorRef = useRef();
  const dy = new DynamicContent({
    editorRef,
    content,
    handleContent,
  });

  FroalaJS.DefineIcon('Footer', { NAME: 'calendar' });
  FroalaJS.RegisterCommand('Footer', {
    title: 'Footer',
    icon: 'footer',
    focus: true,
    undo: true,
    refreshAfterCallback: true,
    callback: () => new Footer().addFooter(),
  });
  FroalaJS.DefineIcon('Header', { NAME: 'calendar' });
  FroalaJS.RegisterCommand('Header', {
    title: 'Header',
    icon: 'header',
    focus: true,
    undo: true,
    refreshAfterCallback: true,
    callback: () => new Header().addHeader(),
  });
  FroalaJS.DefineIcon('insertDate', { NAME: 'calendar' });
  FroalaJS.RegisterCommand('insertDate', {
    title: 'Insert Date',
    icon: 'تاریخ فارسی',
    focus: true,
    undo: true,
    refreshAfterCallback: true,
    callback: () => new DateBtn(editorRef).handleClick(),
  });
  FroalaJS.DefineIcon('insertBorder', { NAME: 'calendar' });
  FroalaJS.RegisterCommand('insertBorder', {
    title: 'Insert Border',
    icon: 'border',
    focus: true,
    undo: true,
    refreshAfterCallback: true,
    callback: () => {
      setIsBorder(!isBorder);
    },
  });

  FroalaJS.DefineIcon('DynamicContent', { NAME: 'fields' });
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
            placeholderText: 'ب نویسید...',
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
      </div>
      <div>
        <h1>preview</h1>
        {isBorder && (
          <input value={border} onChange={(e) => setBorder(e.target.value)} />
        )}
        <div
          style={{
            border,
            padding: '5px ',
          }}
          dir='rtl'
          className='preview'
          dangerouslySetInnerHTML={{ __html: model }}
        ></div>
      </div>
    </div>
  );
}
