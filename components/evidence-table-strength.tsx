// import { Star, StarBorder } from '@material-ui/icons'
import { Star, StarBorder } from '@mui/icons-material'
import { SvgIcon } from '@material-ui/core'


export default function EvidenceTableStrength(props: { strength: number }) {
  const defaultRate = 5
  const { strength } = props
  const getRate = (s: number): number => {
    let r = 0
    if (s > defaultRate) {
      r = 5
    } else if (s <= 0) {
      r = 0
    } else {
      r = s 
    }
    return r
  }
  return (
    <>
      {[...Array(getRate(strength))].map((_, i) => <Star sx={{ color: 'orange' }} key={i} />)}
      {[...Array(defaultRate - getRate(strength))].map((_, j) => <StarBorder sx={{ color: 'gray' }} key={j} />)}
    </>
  )
}