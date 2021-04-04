import { useEffect } from 'react'

export function mountHook(mount: () => void, unmount?: () => void) {
  useEffect(() => {
    const asyncCB = async () => {
      if (mount) await mount()
    }
    asyncCB()
    return () => {
      if (unmount) unmount()
    }
  }, [])
}
