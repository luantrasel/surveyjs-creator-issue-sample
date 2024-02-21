import { useState } from 'react'

import { FormEditor } from './FormEditor';
import { DialogModal } from './DialogModal'

function App() {
  const [formCreatorVisible, setFormCreatorVisible] = useState(false)
  
  return (
    <div className="App">
        <button onClick={() => setFormCreatorVisible(!formCreatorVisible)}>
          {formCreatorVisible ? 'Close Form Creator' : 'Show Form Creator'}
          </button>
          {formCreatorVisible && (
            <DialogModal onClose={() => setFormCreatorVisible(false)}>
              <div id="surveyCreatorContainer" style={{ position: 'absolute', height: '100%', width: '100%'}}>
                <FormEditor/>
              </div>
            </DialogModal>
          )}
    </div>
  );
}

export default App;
