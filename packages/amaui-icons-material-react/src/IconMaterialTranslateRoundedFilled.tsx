import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTranslateRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TranslateRoundedFilled'
      short_name='Translate'

      {...props}
    >
      <path d="M13.35 22Q12.75 22 12.488 21.613Q12.225 21.225 12.425 20.65L16.075 10.975Q16.225 10.575 16.638 10.287Q17.05 10 17.5 10Q17.925 10 18.35 10.287Q18.775 10.575 18.925 10.975L22.575 20.65Q22.775 21.225 22.513 21.613Q22.25 22 21.625 22Q21.35 22 21.125 21.825Q20.9 21.65 20.8 21.4L19.95 18.95H15.1L14.225 21.4Q14.125 21.65 13.875 21.825Q13.625 22 13.35 22ZM15.7 17.2H19.3L17.55 12.25H17.45ZM7.15 8.55Q7.55 9.275 8 9.887Q8.45 10.5 9.05 11.15Q10.15 9.95 10.875 8.688Q11.6 7.425 12.1 6H2Q1.575 6 1.288 5.713Q1 5.425 1 5Q1 4.575 1.288 4.287Q1.575 4 2 4H8V3Q8 2.575 8.288 2.287Q8.575 2 9 2Q9.425 2 9.713 2.287Q10 2.575 10 3V4H16Q16.425 4 16.712 4.287Q17 4.575 17 5Q17 5.425 16.712 5.713Q16.425 6 16 6H14.1Q13.575 7.775 12.675 9.45Q11.775 11.125 10.45 12.6L12.85 15.05L12.1 17.1L9 14L4.7 18.3Q4.425 18.575 4 18.575Q3.575 18.575 3.3 18.3Q3.025 18.025 3.025 17.6Q3.025 17.175 3.3 16.9L7.65 12.55Q6.975 11.775 6.4 10.987Q5.825 10.2 5.375 9.325Q5.1 8.8 5.35 8.4Q5.6 8 6.225 8Q6.475 8 6.75 8.162Q7.025 8.325 7.15 8.55Z"/>
    </Icon>
  )
});

export default IconMaterialTranslateRoundedFilled;
