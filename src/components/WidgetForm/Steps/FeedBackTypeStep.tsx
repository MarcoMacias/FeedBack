import { CloseButton } from "../../CloseButton";

import { Fragment } from "react";
import { FeedBackType, feedbackTypes } from "..";

interface FeedBackTypeStepProps {
    onFeedBackTypeChanged: (type: FeedBackType) => void
}

export function FeedbackTypeStep({ onFeedBackTypeChanged }: FeedBackTypeStepProps) {
    return (
        <Fragment>

            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>

                <CloseButton />
            </header>

            <div className="flex py-8 gap-2 w-full">
                { Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button
                            key={key}
                                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                                onClick={() => onFeedBackTypeChanged(key as FeedBackType)}
                                type="button"
                            >
                            <img src={value.image.source} alt={value.image.alt}/>
                            <span>{value.title}</span>
                        </button>
                    );
                }) }
            </div>
        </Fragment>
    ) 
}