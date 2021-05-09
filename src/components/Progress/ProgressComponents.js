import styled from "styled-components"

export const ProgressWrapper = styled.div`
    /* border: 1px solid blue; */
    width: 114px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ProgressBar = styled.div`
    background-color: var(--clr-prog-abu);
    border-radius: 8px;
    width: 81px;
    height: 8px;
`

export const ProgressIndicator = styled.div`
`

export const Bar = styled.div`
    background-color: ${({ progress }) => (progress === '100%' ? 'var(--clr-bar-hijau)' : 'var(--clr-bar-biru)')};
    width: ${({ progress }) => progress};
    height: 8px;
    border-radius: 8px;
`

export const Percentage = styled.span`
    color: var(--clr-abu);
    font-size: 12px;
    line-height: 22px;
`

export const Complete = styled.img`
    width: 16px;
    margin-top: 3px;
`