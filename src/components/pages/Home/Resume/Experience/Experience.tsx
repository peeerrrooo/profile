import React from 'react'
import { Block } from 'ui/Block'
import { content } from 'utils/content'
import { Title } from 'ui/Typography'
import { Items } from './Items'

const Experience = () => {
  return (
    <Block
      marginTop={120}
      mediaCommon={{ tablet: { marginTop: 100 }, mobile: { marginTop: 80 } }}
    >
      <Title
        level={2}
        underline
        blur
        fontWeight="bold"
        color="white"
        textTransform="uppercase"
        selection={false}
      >
        {content().menu.resume}
      </Title>

      <Items
        icon="BsBriefcase"
        title="Working Experience"
        list={content().experience.workingExperience}
      />

      <Items
        icon="BiBook"
        title="Educational Qualifications"
        list={content().experience.educationExperience}
      />
    </Block>
  )
}

export { Experience }
