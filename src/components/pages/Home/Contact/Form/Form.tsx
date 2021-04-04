import React from 'react'
import { Block } from 'ui/Block'
import { Title } from 'ui/Typography'
import { Input } from 'ui/Input'
import { Button } from 'ui/Button'
import { inject, observer } from 'mobx-react'
import { IHomeModel } from 'models/homeModel/types'
import styled from 'styled-components'
import { lighten } from 'styles/helpers'
import { Element } from 'utils/scroll'

export interface IFormProps {
  HomeModel?: IHomeModel
}

const Form = inject('HomeModel')(
  observer(({ HomeModel }: IFormProps) => {
    return (
      <>
        <Block
          marginRight="s4"
          width="calc(50% - 32px)"
          mediaCommon={{ touch: { marginRight: 0, width: '100%' } }}
          selection={false}
        >
          <Title level={4} color="white" marginBottom="s4">
            Get In Touch
          </Title>
          <Block>
            <Input
              label="Enter your name"
              marginTop="s2"
              tabIndex={1}
              error={HomeModel!.validName}
              value={HomeModel!.name}
              onChange={HomeModel!.setForm('name')}
            />
            <Input
              label="Enter your email"
              marginTop="s2"
              tabIndex={1}
              error={HomeModel!.validEmail}
              value={HomeModel!.email}
              onChange={HomeModel!.setForm('email')}
              type="email"
            />
            <Input
              label="Enter your Message"
              area
              marginTop="s2"
              tabIndex={1}
              rows={16}
              error={HomeModel!.validMessage}
              value={HomeModel!.message}
              onChange={HomeModel!.setForm('message')}
            />

            <Block position="relative">
              <Element
                name={HomeModel!.MESSAGE_BLOCK}
                style={{ position: 'absolute', top: '-60%' }}
              />
              <Button
                marginTop={-8}
                tabIndex={1}
                disable={!HomeModel!.validSending}
                loading={HomeModel!.sendingMessage}
                onClick={() => HomeModel!.sendMessage()}
              >
                Send mail
              </Button>

              {HomeModel!.successSend && (
                <Feedback$>
                  Thank you for your interest in me. I will contact you 😉
                </Feedback$>
              )}
              {HomeModel!.errorSend && (
                <Feedback$>Something went wrong...</Feedback$>
              )}
            </Block>
          </Block>
        </Block>
      </>
    )
  })
)

//#region Styled components
const Feedback$ = styled(Block)`
  padding: 18px;
  margin-top: 32px;
  color: ${(props) => props.theme.Colors.white};
  background: ${(props) => lighten(props.theme.Colors.bgBody, 0.5)};
  border-radius: 4px;
  font-size: 18px;
`
//#endregion

export { Form }
