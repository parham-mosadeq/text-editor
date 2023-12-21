import FroalaEditor from 'react-froala-wysiwyg';
// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import './App.css';

export default function App() {
  return (
    <div id=''>
      <div>text editor </div>
      <div id='editor'>
        <FroalaEditor
          config={{
            placeholderText: 'بنویسید...',
            language: 'fa',
            charCounterCount: true,
            toolbarButtons: {
              moreText: {
                buttons: ['bold', 'italic', 'underline', 'strikethrough'],
              },
              moreParagraph: {
                buttons: ['alignLeft', 'alignRight', 'alignCenter'],
              },
              moreRich: { buttons: ['insertLink', 'insertHR', 'undo', 'redo'] },
            },
          }}
        />
      </div>
    </div>
  );
}
