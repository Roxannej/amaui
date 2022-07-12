import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPrintDisabledRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintDisabledRounded'
      short_name='PrintDisabled'

      {...props}
    >
      <path d="M8 21Q7.175 21 6.588 20.413Q6 19.825 6 19V17H3Q2.575 17 2.288 16.712Q2 16.425 2 16V11Q2 9.725 2.875 8.863Q3.75 8 5 8H5.15L2.075 4.925Q1.775 4.625 1.775 4.225Q1.775 3.825 2.1 3.5Q2.375 3.225 2.8 3.225Q3.225 3.225 3.525 3.5L20.5 20.5Q20.8 20.8 20.8 21.2Q20.8 21.6 20.5 21.9Q20.2 22.2 19.788 22.188Q19.375 22.175 19.075 21.9L17.5 20.35Q17.2 20.65 16.837 20.825Q16.475 21 16 21ZM8 15V19Q8 19 8 19Q8 19 8 19H16Q16 19 16 19Q16 19 16 19V18.85L12.15 15ZM19.85 17 17.85 15H20V11Q20 10.575 19.712 10.287Q19.425 10 19 10H12.85L10.85 8H19Q20.275 8 21.138 8.863Q22 9.725 22 11V16Q22 16.425 21.712 16.712Q21.425 17 21 17ZM16 8V5H8V5.15L6.225 3.375Q6.35 3.2 6.55 3.1Q6.75 3 7 3H17Q17.425 3 17.712 3.287Q18 3.575 18 4V8ZM4 15H6V13H10.15L7.15 10H5Q4.575 10 4.287 10.287Q4 10.575 4 11ZM18 12.5Q18.425 12.5 18.712 12.212Q19 11.925 19 11.5Q19 11.075 18.712 10.787Q18.425 10.5 18 10.5Q17.575 10.5 17.288 10.787Q17 11.075 17 11.5Q17 11.925 17.288 12.212Q17.575 12.5 18 12.5ZM5 10H7.15H6H4Q4 10 4.287 10Q4.575 10 5 10ZM19 10Q19.425 10 19.712 10Q20 10 20 10H12.85Z"/>
    </Icon>
  )
});

export default IconMaterialPrintDisabledRounded;