export default function Register(props) {
  console.log(props);

  const getLocation = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position);
    });
  };
  return (
    <>
      <h1>I am Register</h1>
      <form>
        <div>
          <label>
            Full Name:
            <input type="text" name="name" value={props.user.full_name} />
          </label>
          <label>
            Email:
            <input type="text" name="name" value={props.user.email} />
          </label>
        </div>
        <div>
          <input type="checkbox" id="service" name="service"></input>
          <label for="service">Do you wish to provide services ?</label>
        </div>
        <div>
          <button onClick={getLocation}>Get my current location</button>
        </div>
        <div>
          <label>
            Address
            <input type="text" name="full_address" />
          </label>
          <label>
            City
            <input type="text" name="city" />
          </label>
        </div>
        <div>
          <label>
            Postal code
            <input type="text" name="postal_code" />
          </label>
          <label>
            Country
            <input type="text" name="country" />
          </label>
        </div>
      </form>
      <h2>{props.user.email}</h2>
      <h2>{props.user.full_name}</h2>
    </>
  );
}
