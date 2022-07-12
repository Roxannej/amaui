import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChatAddOnTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatAddOnTwoTone'
      short_name='ChatAddOn'

      {...props}
    >
      <path d="M2.5 22.225V6.5Q2.5 5.25 3.375 4.362Q4.25 3.475 5.525 3.475H16.5Q17.75 3.475 18.638 4.362Q19.525 5.25 19.525 6.5V11.175Q19.175 11.05 18.788 11.025Q18.4 11 18 11Q17.6 11 17.225 11.025Q16.85 11.05 16.5 11.175V6.5Q16.5 6.5 16.5 6.5Q16.5 6.5 16.5 6.5H5.525Q5.525 6.5 5.525 6.5Q5.525 6.5 5.525 6.5V15.475H12.2Q12.075 15.825 12.038 16.212Q12 16.6 12 17Q12 17.4 12.038 17.775Q12.075 18.15 12.2 18.5H6.2ZM6.8 10.4V7.775H15.25V10.4ZM6.8 14.2V11.575H12.25V14.2ZM16.5 21.5V18.5H13.5V15.475H16.5V12.475H19.525V15.475H22.525V18.5H19.525V21.5Z"/>
    </Icon>
  )
});

export default IconMaterialChatAddOnTwoTone;
