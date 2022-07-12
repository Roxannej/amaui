import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTableBarRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableBarRoundedW700'
      short_name='TableBar'

      {...props}
    >
      <path d="M9.4 17.575 8.575 19.625Q8.4 20.05 8.012 20.312Q7.625 20.575 7.175 20.575Q6.375 20.575 5.938 19.913Q5.5 19.25 5.8 18.525L6.775 16.05Q7.075 15.325 7.713 14.875Q8.35 14.425 9.15 14.425H10.425V11.925Q6.35 11.725 3.788 10.55Q1.225 9.375 1.225 7.7Q1.225 5.85 4.288 4.637Q7.35 3.425 12 3.425Q16.65 3.425 19.713 4.637Q22.775 5.85 22.775 7.7Q22.775 9.375 20.213 10.55Q17.65 11.725 13.575 11.925V14.425H14.85Q15.625 14.425 16.288 14.875Q16.95 15.325 17.225 16.05L18.225 18.525Q18.375 18.9 18.325 19.262Q18.275 19.625 18.075 19.913Q17.875 20.2 17.55 20.387Q17.225 20.575 16.825 20.575Q16.375 20.575 15.988 20.312Q15.6 20.05 15.425 19.625L14.6 17.575ZM12 8.8Q14.075 8.8 15.887 8.5Q17.7 8.2 18.5 7.7Q17.7 7.2 15.887 6.887Q14.075 6.575 12 6.575Q9.925 6.575 8.113 6.887Q6.3 7.2 5.5 7.7Q6.3 8.2 8.113 8.5Q9.925 8.8 12 8.8ZM12 7.7Q12 7.7 12 7.7Q12 7.7 12 7.7Q12 7.7 12 7.7Q12 7.7 12 7.7Q12 7.7 12 7.7Q12 7.7 12 7.7Q12 7.7 12 7.7Q12 7.7 12 7.7Z"/>
    </Icon>
  )
});

export default IconMaterialTableBarRoundedW700;