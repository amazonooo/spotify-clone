'use client'

import * as RadixSlider from '@radix-ui/react-slider'

interface ISlider {
  value?: number
  onChange?: (value: number) => void
}

const Slider: React.FC<ISlider> = ({ value, onChange }) => {
  return (
    <div>Slider</div>
  )
}
 
export default Slider;