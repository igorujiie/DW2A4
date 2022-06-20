import {FeedbackType, feedbackTypes} from ".."
import { CloseButton } from "../../CloseButton"

interface FeedbackContentStepProps{
    feedbackType: FeedbackType;
}

export function FeedbackContentStep({feedbackType }: FeedbackContentStepProps){
    const feedbackInfo = feedbackTypes[feedbackType]
    return (
        <>
            <header>
                <span className="text-xl leading-6 flex items-center gap-2">
                    <img 
                        src={feedbackInfo.image.source} 
                        alt={feedbackInfo.image.alt} 
                        className = "w-6 h-6" 
                    />
                    {feedbackInfo.title}
                </span>
                    
                <CloseButton />
            </header>


            <div className="flex py-8 gap-2 w-full">
                
            </div>
        </>
    )
}