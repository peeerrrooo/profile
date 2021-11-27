import React, { ComponentType, ReactNode } from 'react'
import { StoryApi } from '@storybook/addons'
import { ICommonProps, IFontProps } from 'styles/helpers'
import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types'

const defaultContent =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A fugiat officia unde! Cum, dolorem eaque eos ipsum nam nulla pariatur ratione sunt suscipit totam? Doloremque eum eveniet iste totam voluptas!'

type TStory = StoryApi<StoryFnReactReturnType>
type IProps = any & ICommonProps & IFontProps

export interface IFontStoriesParams {
  stories: TStory
  Component: ComponentType<IProps>
  crossProps?: object
  content?: ReactNode
}

export const fontStories = ({
  stories,
  Component,
  crossProps,
  content = defaultContent
}: IFontStoriesParams): TStory => {
  return stories
    .add('with font size: spacing & number', () => (
      <>
        <Component fontSize="s4" {...crossProps}>
          {content}
        </Component>{' '}
        <Component fontSize={40} {...crossProps}>
          {content}
        </Component>
      </>
    ))
    .add('with line height', () => (
      <>
        <Component lineHeight={24} {...crossProps}>
          {content}
        </Component>{' '}
        <Component lineHeight={48} {...crossProps}>
          {content}
        </Component>
      </>
    ))
    .add('with letter spacing', () => (
      <>
        <Component letterSpacing={8} {...crossProps}>
          {content}
        </Component>{' '}
        <Component letterSpacing={18} {...crossProps}>
          {content}
        </Component>
      </>
    ))
    .add('medium & normal & bold weight with different font family', () => (
      <>
        <Component fontWeight="medium" {...crossProps}>
          {content}
        </Component>{' '}
        <Component fontWeight="normal" {...crossProps}>
          {content}
        </Component>{' '}
        <Component fontWeight="bold" {...crossProps}>
          {content}
        </Component>
      </>
    ))
    .add('text align', () => (
      <>
        <Component {...crossProps}>{content}</Component>
        <Component textAlign="center" {...crossProps}>
          {content}
        </Component>{' '}
        <Component textAlign="right" {...crossProps}>
          {content}
        </Component>
      </>
    ))
    .add('normal case & uppercase & lowercase', () => (
      <>
        <Component textTransform="default">{content}</Component>{' '}
        <Component textTransform="uppercase">{content}</Component>{' '}
        <Component textTransform="lowercase">{content}</Component>
      </>
    ))
    .add('italic & underline', () => (
      <>
        <Component textItalic>{content}</Component>{' '}
        <Component textUnderline>{content}</Component>
      </>
    ))
}

export interface ICommonStoriesParams {
  stories: TStory
  Component: ComponentType<IProps>
  crossProps?: object
  content?: ReactNode
}

export const commonStories = ({
  stories,
  Component,
  crossProps,
  content = defaultContent
}: ICommonStoriesParams): TStory => {
  return stories.add(
    'with combination common props of margin (spacing & number) & width',
    () => (
      <>
        <Component marginBottom="s4" {...crossProps}>
          {content}
        </Component>
        <Component isNativeMargin={false} {...crossProps}>
          {content}
        </Component>
        <Component marginTop={47} {...crossProps}>
          {content}
        </Component>
        <Component marginTop="s2" width="50%" {...crossProps}>
          {content}
        </Component>
      </>
    )
  )
}
