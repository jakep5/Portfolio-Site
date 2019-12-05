import React from 'react';
import styles from './styles.module.css'
import TitleSection from './components/TitleSection/TitleSection'

class App extends React.Component {

  render() {

    return (
      <main className='App'>
        <div className={styles.mainWrapper} role="presentation">

          <section role="contentinfo" className="">
            <TitleSection />
          </section>

          <section role="contentinfo">

          </section>
          <section role="contentinfo">

          </section>
        </div>
      </main>
    );
  }
}

export default App;