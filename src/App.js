import React from 'react';
import styles from './styles.module.css'
import TitleSection from './components/TitleSection/TitleSection'
import BioSection from './components/BioSection/BioSection'
import SkillsSection from './components/SkillsSection/SkillsSection'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'

class App extends React.Component {

  render() {

    return (
      <main className='App'>
        <div className={styles.mainWrapper} role="presentation">

          <section role="contentinfo">
            <TitleSection />
          </section>

          <section role="contentinfo">
            <BioSection />
          </section>
          <section role="contentinfo">
            <SkillsSection />
          </section>
          <section role="contentinfo">
            <ProjectsSection />
          </section>
        </div>
      </main>
    );
  }
}

export default App;