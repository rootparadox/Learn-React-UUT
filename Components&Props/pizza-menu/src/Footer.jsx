export default function Footer() {
  const hour = new Date().getHours();
  const open = 9;
  const close = 23;
  const isOpen = hour >= open && hour <= close;
  // console.log(isOpen);
  // truthy value => numbers , string.length > 0 , [].length > 0
  // falsy value => null , undefined , [] , {} , "" , 0

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={close} openHour={open} />
      ) : (
        <p>
          We're happy if you visit this page until {open}:00 to {close}:00
        </p>
      )}
    </footer>
  );
  // React.createElement("footer", null, "We're currently open!");
}

function Order({ closeHour, openHour }) {
  // const user = {
  //   username: "Mahdi",
  //   password: "nothing",
  // };
  // const { username, password } = user;
  // console.log(username, password);
  return (
    <div className="order">
      <p>
        We're open {openHour}:00 until {closeHour}:00. you can order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
