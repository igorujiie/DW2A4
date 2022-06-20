import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assests/bug.svg';
import ideaImageUrl from '../../assests/idea.svg';
import thoughtImageUrl from '../../assests/thought.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./steps/FeedbackContentStep";

export const feedbackTypes ={
    BUG:{
        title: 'Problema',
        image:{
            source:bugImageUrl,
            alt:'Imagem de um inseto'
        } 
    },
    IDEA:{
        title: 'Ideia',
        image:{
            source:ideaImageUrl,
            alt:'Imagem de uma lampada'
        }
    },
    OTHER:{
        title: 'Outro',
        image:{
            source:thoughtImageUrl,
            alt:'Imagem de um balao de pensamento'
        }

    },
};

export type FeedbackType = keyof typeof feedbackTypes;



export function WidegtForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null> (null)
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
           

            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanched={setFeedbackType} />
            ) : (
                <FeedbackContentStep feedbackType={feedbackType}/>
            )

            }
          

            <footer className="text-xs text-neutral-400">
                Feito com ♥ pelo <a className="underline underline-offset-2" href="https://github.com/igorujiie/DW2A4/tree/main/Atividades">Igor</a>
            </footer>
        </div>
    );
}