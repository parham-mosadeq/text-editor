import FroalaEditor from 'react-froala-wysiwyg';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/js/languages/fa.js';
import './App.css';

export default function App() {
  return (
    <div className='container'>
      <div>text editor </div>
      <div className='editor'>
        <FroalaEditor
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
                ],
                align: 'right',
                buttonsVisible: 2,
              },
              paragraphFormatSelection: true,
            },
          }}
        />
      </div>
    </div>
  );
}
