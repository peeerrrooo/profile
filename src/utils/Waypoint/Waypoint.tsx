import React, { CSSProperties } from 'react'
import { Block } from 'ui/Block'
import { Waypoint as LWaypoint } from 'react-waypoint'

export interface IWaypointProps {
  className?: string
  style?: CSSProperties
  enabled?: boolean
  onEnter?: () => void
  onLeave?: () => void
}
const Waypoint = ({
  enabled = true,
  onEnter,
  onLeave,
  ...props
}: IWaypointProps) => {
  return enabled ? (
    <Block {...props} style={{ ...props.style, position: 'absolute' }}>
      <LWaypoint onEnter={onEnter} onLeave={onLeave} />
    </Block>
  ) : null
}

export { Waypoint }
