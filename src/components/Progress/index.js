import React from 'react'
import { Bar, Complete, Percentage, ProgressBar, ProgressIndicator, ProgressWrapper } from './ProgressComponents'

const Progress = ({ progress }) => {

    const check_icon = process.env.PUBLIC_URL + 'icon/check.svg'

    return (
        <ProgressWrapper>
            <ProgressBar>
                <Bar progress={progress}/>
            </ProgressBar>
            <ProgressIndicator>
                {progress === '100%' ? (<Complete src={check_icon}/>) : (<Percentage>{progress}</Percentage>)}
            </ProgressIndicator>
        </ProgressWrapper>
    )
}

export default Progress
