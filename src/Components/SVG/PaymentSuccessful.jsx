import Lottie from 'lottie-react';
import animationData from '../../../public/Successfully Done.json'; // Replace with the actual path to your animation data
import { useState } from 'react';



const PaymentSuccessful = () => {
    const [isAnimationFinished, setIsAnimationFinished] = useState(false);

    const handleAnimationComplete = () => {
        setIsAnimationFinished(true);
    };
    return (
        <Lottie
            animationData={animationData}
            loop={false} // Set loop to true if you want the animation to repeat
            autoplay={true}
            onComplete={handleAnimationComplete}
            style={{
                width: '50%', height: '50%', display: isAnimationFinished ? 'none' : 'block',
                 // Show or hide based on animation completion
            }} // Adjust the width and height as needed
        />
    )
}

export default PaymentSuccessful;
