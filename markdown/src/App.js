import {useState} from 'react';
import ReactMarkdown from 'react-markdown';
function App() {
  const [markdown, setMarkdown] = useState('## Markdown Preview')
  return (
    <main>

      <section  className='markdown'>
        <textarea 
          className='input'
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        >

        </textarea>
        <article className='result'>
          <ReactMarkdown>
            {markdown}
          </ReactMarkdown>
        </article>
      </section>
    </main>
  )
}

export default App


//bootstrap
// eslint-disable-next-line no-lone-blocks
{/* <div className='bg-image' 
        style={{backgroundImage: `url(${heroImg})`,
                height: '100vh', 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>
        <div className='container'>
          <Navbar/>
          <Hero/>
        </div>
    </div> */}