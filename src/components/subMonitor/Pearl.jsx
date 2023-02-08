import '../../index.css'


export default function Pearl(props) {
  const { setSelectedMonitor } = props

  return (
    <main className='Monitor'>

      <section className='container'>
        <ol className='pearl-steps'>
          <li>Cover both of their eyes.</li>
          <li>Using either natural sunlight or a phone light, uncover one of their eyes and shine the light towards the uncovered eye.</li>
          <li>Pay attention to the pupil of the individual, it should shrink when exposed to light</li>
          <li>Repeat the previous steps for the other eye and make note if the pupils were both equally reactive to light</li>
        </ol>
      </section>
      <form><input type="text" /> <button className='submit-button' type="submit"></button> </form>
      <button className='back-monitor' onClick={() => setSelectedMonitor(3)}>BACK</button>
      <button className='next-monitor' onClick={() => setSelectedMonitor(5)}>NEXT</button>

    </main>
  );
}


