import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWbAutoRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbAutoRoundedFilled'
      short_name='WbAuto'

      {...props}
    >
      <path d="M5.65 15Q5.825 15 5.963 14.912Q6.1 14.825 6.15 14.675L6.675 13.2H9.475L10 14.675Q10.05 14.825 10.188 14.912Q10.325 15 10.5 15Q10.8 15 10.963 14.75Q11.125 14.5 11.025 14.225L8.95 8.6Q8.825 8.325 8.6 8.162Q8.375 8 8.075 8Q7.775 8 7.55 8.162Q7.325 8.325 7.2 8.6L5.125 14.225Q5.025 14.5 5.188 14.75Q5.35 15 5.65 15ZM7.025 12.2 8.025 9.3H8.125L9.125 12.2ZM8.075 19Q5.175 19 3.125 16.95Q1.075 14.9 1.075 12Q1.075 9.075 3.125 7.037Q5.175 5 8.075 5Q10.025 5 11.663 5.987Q13.3 6.975 14.15 8.7Q14.1 8.425 14.25 8.212Q14.4 8 14.675 8Q14.9 8 15.062 8.125Q15.225 8.25 15.275 8.45L16.375 13.1H16.425L17.725 8.525Q17.8 8.275 17.988 8.137Q18.175 8 18.425 8Q18.7 8 18.887 8.137Q19.075 8.275 19.125 8.525L20.425 13.1H20.525L21.625 8.45Q21.675 8.25 21.837 8.125Q22 8 22.2 8Q22.475 8 22.65 8.212Q22.825 8.425 22.75 8.7L21.225 14.45Q21.175 14.7 20.975 14.85Q20.775 15 20.5 15Q20.25 15 20.05 14.85Q19.85 14.7 19.775 14.45L18.425 9.75H18.375L17.075 14.45Q17.025 14.7 16.825 14.85Q16.625 15 16.375 15Q16.125 15 15.925 14.85Q15.725 14.7 15.65 14.45L15.075 12.1Q15.075 14.975 13.025 16.988Q10.975 19 8.075 19Z"/>
    </Icon>
  )
});

export default IconMaterialWbAutoRoundedFilled;
