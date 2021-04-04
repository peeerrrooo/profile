import React from 'react'
import { Block } from 'ui/Block'
import { info } from 'utils/info'
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
        {info().menu.resume}
      </Title>

      <Items
        icon="BsBriefcase"
        title="Working Experience"
        list={info().experience.workingExperience}
      />

      <Items
        icon="BiBook"
        title="Educational Qualifications"
        list={info().experience.educationExperience}
      />
    </Block>
  )
}

export { Experience }
