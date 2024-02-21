import { useEffect, useState } from 'react'
import { SurveyCreatorComponent, SurveyCreator } from 'survey-creator-react'

import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";

export const FormEditor = () => {
    const creator = useState(new SurveyCreator({
        showDesignerTab: true,
        showPreviewTab: true,
        showLogicTab: true,
    }))[0]

    useEffect(() => {
        creator.text = JSON.stringify({
            pages: [
                {
                    name: 'page1',
                    elements: [
                        {
                            type: 'text',
                            name: 'my personal field',
                            title: 'Hello world',
                        },
                    ],
                },
            ],
        })
    }, [creator])

    return (
        <SurveyCreatorComponent creator={creator} />
    )
}
