import '../../index.css'


export default function SkinCondition(props) {
  const { setSelectedMonitor } = props


  return (
    <main className='Monitor'>

      <section className='container'>
        <ol className='skinCondition-steps'>
          <li>Using the back of your hand, place it on their forehead.</li>
          <li>Pay attention to temperature, is the person cool or warm?</li>
          <li>Pay attention to the moisture level, is the person dry or sweaty?</li>
        </ol>
      </section>
      <form><input type="text" /> <button className='submit-button' type="submit"></button> </form>
      <button className='back-monitor' onClick={() => setSelectedMonitor(2)}>BACK</button>
      <button className='next-monitor' onClick={() => setSelectedMonitor(4)}>NEXT</button>

    </main>
  );
}


