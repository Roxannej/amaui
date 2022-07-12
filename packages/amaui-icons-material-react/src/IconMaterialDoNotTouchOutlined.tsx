import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoNotTouchOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotTouchOutlined'
      short_name='DoNotTouch'

      {...props}
    >
      <path d="M19.775 22.6 18.65 21.475Q18.3 21.725 17.888 21.863Q17.475 22 17 22H10.975Q10.35 22 9.788 21.75Q9.225 21.5 8.8 21.05L2 13.875L3.15 12.775Q3.425 12.525 3.75 12.5Q4.075 12.475 4.4 12.65L7 14.125V9.825L1.4 4.225L2.8 2.8L21.2 21.2ZM11 20H17Q17.05 20 17.075 19.988Q17.1 19.975 17.15 19.975L9 11.825V16H6.875L10.25 19.65Q10.325 19.75 10.513 19.875Q10.7 20 11 20ZM20 17.175 18 15.175V13H15.825L13.825 11H14V3.25Q14 2.725 14.363 2.362Q14.725 2 15.25 2Q15.775 2 16.137 2.362Q16.5 2.725 16.5 3.25V11H17.5V5.25Q17.5 4.725 17.863 4.362Q18.225 4 18.75 4Q19.275 4 19.638 4.362Q20 4.725 20 5.25ZM13 10.175 10.5 7.675V2.25Q10.5 1.725 10.863 1.362Q11.225 1 11.75 1Q12.275 1 12.637 1.362Q13 1.725 13 2.25ZM9.5 6.675 7 4.175Q7.05 3.675 7.4 3.337Q7.75 3 8.25 3Q8.775 3 9.137 3.362Q9.5 3.725 9.5 4.25ZM15.825 13ZM13.075 15.9Q13.075 15.9 13.075 15.9Q13.075 15.9 13.075 15.9Q13.075 15.9 13.075 15.9Q13.075 15.9 13.075 15.9Z"/>
    </Icon>
  )
});

export default IconMaterialDoNotTouchOutlined;
