import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialIceSkatingOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='IceSkatingOutlined'
      short_name='IceSkating'

      {...props}
    >
      <path d="M2 22V20H6V18H3V3H12V7.5Q12 8.175 12.413 8.725Q12.825 9.275 13.475 9.45L16.1 10.175Q17.375 10.525 18.188 11.587Q19 12.65 19 14V18H16V20H18Q19.25 20 20.125 19.125Q21 18.25 21 17H23Q23 19.075 21.538 20.538Q20.075 22 18 22ZM5 16H17V14Q17 13.325 16.587 12.812Q16.175 12.3 15.525 12.1L12.9 11.35Q12 11.075 11.325 10.462Q10.65 9.85 10.3 9H8.5Q8.3 9 8.15 8.85Q8 8.7 8 8.5Q8 8.3 8.15 8.15Q8.3 8 8.5 8H10.1Q10.05 7.7 10.038 7.5Q10.025 7.3 10 7H8.5Q8.3 7 8.15 6.85Q8 6.7 8 6.5Q8 6.3 8.15 6.15Q8.3 6 8.5 6H10V5H5ZM8 20H14V18H8ZM5 16Q5 16 5 16Q5 16 5 16Q5 16 5 16Q5 16 5 16Q5 16 5 16Q5 16 5 16Q5 16 5 16Q5 16 5 16Z"/>
    </Icon>
  )
});

export default IconMaterialIceSkatingOutlined;