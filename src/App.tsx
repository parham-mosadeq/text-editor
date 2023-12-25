import FroalaEditor from 'react-froala-wysiwyg';
import FroalaJS from 'froala-editor';

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/js/languages/fa.js';
import './App.css';

import { useEffect, useRef, useState } from 'react';
import { DateBtn } from './plugins/DateBtn';
import { DynamicFields } from './plugins/DynamicFileds';

export default function App() {
  const [model, setModel] = useState();
  const [showModal, setShowModal] = useState(false);
  const [dynamicValue, setDynamicValue] = useState('');

  const editorRef = useRef();

  useEffect(() => {}, [dynamicValue]);
  FroalaJS.DefineIcon('insertDate', { NAME: 'calendar' });
  FroalaJS.RegisterCommand('insertDate', {
    title: 'Insert Date',
    icon: 'تاریخ فارسی',
    focus: true,
    undo: true,
    refreshAfterCallback: true,
    callback: () => new DateBtn(editorRef).handleClick(),
  });

  FroalaJS.DefineIcon('dynamicFields', { NAME: 'fields' });
  FroalaJS.RegisterCommand('dynamicFields', {
    title: 'Dynamic Fileds',
    icon: 'DF',
    focus: true,
    undo: true,
    refreshAfterCallback: true,
    callback: () => {
      setShowModal(true);
    },
  });

  const handleDynamicVals = () => {
    setShowModal(false);
    new DynamicFields({
      editorRef,
      dynamicValue,
    }).handleClick();
    setDynamicValue('');
  };
  return (
    <div className='container'>
      <div>text editor </div>
      <div className='editor'>
        <FroalaEditor
          ref={editorRef}
          model={model}
          onModelChange={setModel}
          config={{
            placeholderText: 'بنویسید...',
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
                  'dynamicFields',
                ],
              },
              moreParagraph: {
                buttons: [
                  'alignLeft',
                  'alignCenter',
                  'alignRight',
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
                ],
                align: 'right',
                buttonsVisible: 2,
              },
              paragraphFormatSelection: true,
            },
          }}
        />
        {showModal && (
          <div className='dynamic-input_handler'>
            <input
              value={dynamicValue}
              onChange={(e) => setDynamicValue(e.target.value)}
            />
            <button type='submit' onClick={handleDynamicVals}>
              submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
