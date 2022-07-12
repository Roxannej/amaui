import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUnsubscribeOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnsubscribeOutlinedFilled'
      short_name='Unsubscribe'

      {...props}
    >
      <path d="M12 13 20 8V6L12 11L4 6V8ZM19 23Q16.925 23 15.463 21.538Q14 20.075 14 18Q14 15.925 15.463 14.462Q16.925 13 19 13Q21.075 13 22.538 14.462Q24 15.925 24 18Q24 20.075 22.538 21.538Q21.075 23 19 23ZM16 18.5H22V17.5H16ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V11.7Q21.3 11.35 20.538 11.175Q19.775 11 19 11Q17.55 11 16.275 11.55Q15 12.1 14.05 13.05Q13.1 14 12.55 15.275Q12 16.55 12 18Q12 18.525 12.075 19.012Q12.15 19.5 12.3 20Z"/>
    </Icon>
  )
});

export default IconMaterialUnsubscribeOutlinedFilled;
