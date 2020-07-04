import React, { useRef, useEffect } from 'react'

import ChannelMessage, { Mention } from '../ChannelMessage'
import { Container, InputWrapper, Messages, Input, InputIcon } from './styles'

const ChannelData: React.FC = () => {

    const messagesReference = useRef() as React.MutableRefObject<HTMLDivElement>

    useEffect(() => {
        const div = messagesReference.current

        if(div)
            div.scrollTop = div.scrollHeight
    }, [])

    return (
        <Container>
            <Messages ref={messagesReference}>
                <ChannelMessage
                    author="Luis Paulo M. Degini"
                    date="04/07/2020"
                    content="To logando em 10 minutos."
                />

                <ChannelMessage
                    author="Bruno Cavallini"
                    date="04/07/2020"
                    hasMention
                    content={
                        <>
                            <Mention>@Luis Paulo</Mention> to esperando pra DG.
                        </>
                    }
                />
            </Messages>
            <InputWrapper>
                <Input
                    type="text"
                    placeholder="Conversar em #chat-livre"
                />
                <InputIcon />
            </InputWrapper>
        </Container>
    )
}

export default ChannelData