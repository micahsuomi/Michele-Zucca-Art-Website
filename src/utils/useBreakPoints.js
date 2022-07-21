import { useMediaQuery } from 'react-responsive'

export const useBreakPoints = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return { isTabletOrMobile: isTabletOrMobile }

}