import FroalaEditor from 'react-froala-wysiwyg';
import FroalaJS from 'froala-editor';

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/js/languages/fa.js';
import './App.css';

<<<<<<< HEAD
import { ChangeEvent, useRef, useState } from 'react';
=======
import { useEffect, useRef, useState } from 'react';
>>>>>>> c4690b233fb4d855926d186cf6516105b14b7fd1
import { DateBtn } from './plugins/DateBtn';
import { DynamicFields } from './plugins/DynamicFileds';

export default function App() {
  const [model, setModel] = useState();
<<<<<<< HEAD
  const [modalValue, setModalValue] = useState('');

  const editorRef = useRef();

=======
  const [showModal, setShowModal] = useState(false);
  const [dynamicValue, setDynamicValue] = useState('');

  const editorRef = useRef();

  useEffect(() => {}, [dynamicValue]);
>>>>>>> c4690b233fb4d855926d186cf6516105b14b7fd1
  FroalaJS.DefineIcon('insertDate', { NAME: 'calendar' });
  FroalaJS.RegisterCommand('insertDate', {
    title: 'Insert Date',
    icon: 'تاریخ فارسی',
    focus: true,
    undo: true,
    refreshAfterCallback: true,
    callback: () => new DateBtn(editorRef).handleClick(),
  });

<<<<<<< HEAD
  const handleDynamicVals = (event) => {
    console.log(modalValue,'2');
    console.log(event);
      new DynamicFields({
        editorRef,
        modalValue,
      }).handleClick();
      setModalValue('');
  };

  const handleModalVal = (event: ChangeEvent<HTMLInputElement>) => {
    setModalValue(event.target.value);
    console.log(modalValue, '1');
  };
  // console.log(modalValue);

=======
>>>>>>> c4690b233fb4d855926d186cf6516105b14b7fd1
  FroalaJS.DefineIcon('dynamicFields', { NAME: 'fields' });
  FroalaJS.RegisterCommand('dynamicFields', {
    title: 'Dynamic Fileds',
    icon: 'DF',
    focus: true,
    undo: true,
    refreshAfterCallback: true,
    callback: () => {
<<<<<<< HEAD
      new DynamicFields({
        editorRef,
        modalValue,
        onChange: handleDynamicVals,
        handleModalVal,
      }).openModal();
    },
  });

=======
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
>>>>>>> c4690b233fb4d855926d186cf6516105b14b7fd1
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
<<<<<<< HEAD
        {/* {showModal && (
          <div className='dynamic-input_handler'>
            <input
              value={modalValue}
              onChange={(e) => setModalValue(e.target.value)}
=======
        {showModal && (
          <div className='dynamic-input_handler'>
            <input
              value={dynamicValue}
              onChange={(e) => setDynamicValue(e.target.value)}
>>>>>>> c4690b233fb4d855926d186cf6516105b14b7fd1
            />
            <button type='submit' onClick={handleDynamicVals}>
              submit
            </button>
          </div>
<<<<<<< HEAD
        )} */}
=======
        )}
>>>>>>> c4690b233fb4d855926d186cf6516105b14b7fd1
      </div>
    </div>
  );
}
