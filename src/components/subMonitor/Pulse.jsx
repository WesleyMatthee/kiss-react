import '../../index.css'


export default function Pulse(props) {
  const { setSelectedMonitor } = props

  return (
    <main className='Monitor'>

      <section className='container'>
        <ol className='pulse-steps'>
          <li>Place two fingers on the radial artery as shown above, if the casualty is concsious.</li>
          <li>Place two fingers on the carotid artery as shown above, if the casualty is unconcsious.</li>
          <li>Press the Start Timer button to begin a 15 second timer and count their pulse.</li>
          <li>Input the number you got in the form below.</li>
        </ol>
      </section>
      <form><input type="text" /> <button className='submit-button' type="submit"></button> </form>
      <button className='next-monitor' onClick={() => setSelectedMonitor(2)}>NEXT</button>

    </main>
  );
}


