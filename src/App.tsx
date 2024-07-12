import { useState } from 'react'
import './App.css'




function App() {
  const [showPdf, setShowPdf] = useState(false);
  const [showDocument, setShowDocument] = useState(false);

  let pdfLink = 'https://s29.q4cdn.com/175625835/files/doc_downloads/test.pdf';
  let docLink = 'http://remote.url.tld/path/to/document.doc';
  // let documentLink = `https://view.officeapps.live.com/op/embed.aspx?src=${docLink}`
  let tempDocLink = `https://docs.google.com/gview?url=${docLink}&embedded=true`

  const pdfHandler = () => {
    setShowPdf(!showPdf);
  }

  const documentHandler = () => {
    setShowDocument(!showDocument);
  }
  return (
    <div className="mainContainer">
      <h1>Pdf and Document view</h1>
      <div>
        {showPdf ?
          <iframe src={pdfLink} width='100%' height='500px' />
          : null}
        {showDocument ?
          <iframe src={tempDocLink} width='100%' height='500px' />
          : null}
        <button type='button' className='btnLogic' onClick={pdfHandler}>Pdf View</button>
        <button type='button' onClick={documentHandler}>Document View</button>
      </div>
    </div>
  )
}

export default App