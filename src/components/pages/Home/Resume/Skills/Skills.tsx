import _ from 'lodash'
import React from 'react'
import { Block } from 'ui/Block'
import { info } from 'utils/info'
import { Tag } from './Tag'

const Skills = () => {
  return (
    <>
      <Block horizontal="left" flexWrap marginBottom="s2">
        {_.map(info().skills.main, (skill, index) => {
          return <Tag key={index} title={skill.title} fill href={skill.href} />
        })}
      </Block>

      <Block horizontal="left" flexWrap marginTop="s4">
        {_.map(info().skills.other, (skill, index) => {
          return (
            <Tag
              key={index}
              title={skill.title}
              size="small"
              href={skill.href}
            />
          )
        })}
      </Block>
    </>
  )
}

export { Skills }
