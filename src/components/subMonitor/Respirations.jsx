import '../../index.css'


export default function Respirations(props) {
  const { setSelectedMonitor } = props

  return (
    <main className='Monitor'>

      <section className='container'>
        <ol className='respirations-steps'>
          <li>Watch the chest for it rising.</li>
          <li>Pay attention to the depth of each breath, is it a full breath? is it shallow?</li>
          <li>Pay attention to the sound of each breath as well. does it sound clear or is there wheezing/gurgaling?</li>
          <li>Start the timer, it will run for 15 seconds.</li>
          <li>Input the number you got in the form below.</li>
        </ol>
      </section>
      <form><input type="text" /> <button className='submit-button' type="submit"></button> </form>
      <button className='back-monitor' onClick={() => setSelectedMonitor(1)}>BACK</button>
      <button className='next-monitor' onClick={() => setSelectedMonitor(3)}>NEXT</button>

    </main>
  );
}


