import './App.css';
import Dictionary from './Dictionary' 
import dictionaryIcon from './icons/book.svg'

function App() {
  return (
    <body className="App">
      <div className = "container">
        <header className="App-header">
          <img src = {dictionaryIcon} style={{width: '50px', height: '50px'}} alt="Dictionary Logo"></img>
          Dictionary
        </header>
        <main>
          <Dictionary defaultKeyword="sunset"/>
        </main>
        <footer className="repository-link">
        
        <p> This app was coded by <a href='https://agitated-wilson-c1607b.netlify.app/' target="_blank" rel="noopener noreferrer">Sarah Gibson</a> and is open-sourced on
         <a href='https://github.com/sarahgibsonnnn/dictionary-app' target="_blank" rel="noopener noreferrer" title="Open GitHub Repository" >
         <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" />
         </a>
        </p>
       </footer>
      </div>

    </body>
  );
}

export default App;
