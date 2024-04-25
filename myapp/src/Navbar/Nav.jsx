import "./Index.css"
function Nav() {
  return (
    <div className='navbar'>
      <h2>Financier</h2>
      

      <ul>
        <li>Home</li>
        <li>Solitions</li>
        <li>Services</li>
        <li>About</li>
        <li>ContactUs</li>
      </ul>
        <p><button className="btn1"><i class="fa-solid fa-phone"></i></button>055-902-24-91</p>
        <button className="mobile"><i class="fa-solid fa-bars"></i></button>
     
    </div>
  )
}

export default Nav