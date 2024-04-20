import {GoBellFill, GoCloud, GoDatabase} from 'react-icons/go'
import Button from "../components/Button";

const ButtonPage = () => {
  const handleClick = () => {
    // Define the behavior you want when the button is clicked
    console.log('Button clicked!');
  };
  
  return (
    <div>
      <div>
        <Button className="mb-5" success rounded onClick={handleClick} >
        <GoBellFill />
          Click me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloud />
          Buy Now
        </Button>
      </div>
      <div>
        <Button outline>
          See deal
        </Button>
      </div>
      <div>
        <Button warning outline>
          <GoDatabase />
          Hide ads
        </Button>
      </div>
      <div>
        <Button primary outline>
          something
        </Button>
      </div>
    </div>
  )
}

export default ButtonPage