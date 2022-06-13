
import bugImageUrl from '../../assets/bug.svg';
import ideiaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { Fragment, useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedBackTypeStep";
import { FeedBackContentStep } from "./Steps/FeedbackContentStep";
import { FeedBackSuccessStep } from './Steps/FeedBackSuccessStep';

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEIA: {
        title: 'Ideia',
        image: {
            source: ideiaImageUrl,
            alt: 'Imagem de uma lampada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    },
};

export type FeedBackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedBackType, setFeedBackType] = useState<FeedBackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)


    function handleRestartFeedback() {
        setFeedbackSent(false)
        setFeedBackType(null)
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            {feedbackSent ? (
                <FeedBackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
            ) : (
                <Fragment>
                    {!feedBackType ? (
                        <FeedbackTypeStep onFeedBackTypeChanged={setFeedBackType} />
                    ) : (
                        <FeedBackContentStep
                            feedbackType={feedBackType}
                            onFeedbackRestartRequested={handleRestartFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )}
                </Fragment>
            )}

            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    );
}