import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRequestQuoteOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RequestQuoteOutlinedFilled'
      short_name='RequestQuote'

      {...props}
    >
      <path d="M6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H14L20 8V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM11 19H13V18H14Q14.425 18 14.713 17.712Q15 17.425 15 17V14Q15 13.575 14.713 13.287Q14.425 13 14 13H11V12H15V10H13V9H11V10H10Q9.575 10 9.288 10.287Q9 10.575 9 11V14Q9 14.425 9.288 14.712Q9.575 15 10 15H13V16H9V18H11ZM13.175 8H17.175L13.175 4Z"/>
    </Icon>
  )
});

export default IconMaterialRequestQuoteOutlinedFilled;