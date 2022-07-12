import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPrintOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintOutlinedW100'
      short_name='Print'

      {...props}
    >
      <path d="M16 8.8V5.8H8V8.8H7.3V5.1H16.7V8.8ZM4.75 9.5Q4.75 9.5 5.037 9.5Q5.325 9.5 5.75 9.5H18.25Q18.675 9.5 18.962 9.5Q19.25 9.5 19.25 9.5H16.7H7.3ZM17.5 12Q17.925 12 18.212 11.712Q18.5 11.425 18.5 11Q18.5 10.575 18.212 10.287Q17.925 10 17.5 10Q17.075 10 16.788 10.287Q16.5 10.575 16.5 11Q16.5 11.425 16.788 11.712Q17.075 12 17.5 12ZM16 19V14.3H8V19ZM16.7 19.7H7.3V15.7H4.05V10.5Q4.05 9.775 4.537 9.287Q5.025 8.8 5.75 8.8H18.25Q18.975 8.8 19.463 9.287Q19.95 9.775 19.95 10.5V15.7H16.7ZM19.25 15V10.5Q19.25 10.075 18.962 9.787Q18.675 9.5 18.25 9.5H5.75Q5.325 9.5 5.037 9.787Q4.75 10.075 4.75 10.5V15H7.3V13.6H16.7V15Z"/>
    </Icon>
  )
});

export default IconMaterialPrintOutlinedW100;
