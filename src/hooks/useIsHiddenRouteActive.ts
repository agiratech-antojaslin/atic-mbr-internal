import { IMenuItems } from 'atic-common-helpers/helpers/interface.helper'
import { matchPath, useLocation } from 'react-router-dom'

export const useIsHiddenRouteActive = (hiddenArr: IMenuItems[]) => {
  const location = useLocation()
  const hiddenRoute = hiddenArr?.find((route) =>
    matchPath(location.pathname, route.url)
  )
  return hiddenRoute ? hiddenRoute : false
}
