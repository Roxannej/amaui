import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWifiCallingOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiCallingOutlinedFilled'
      short_name='WifiCalling'

      {...props}
    >
      <path d="M16.5 10.5 11 4.95Q12.25 4 13.663 3.5Q15.075 3 16.5 3Q17.925 3 19.337 3.525Q20.75 4.05 22 5ZM19.95 21Q16.725 21 13.663 19.562Q10.6 18.125 8.238 15.762Q5.875 13.4 4.438 10.337Q3 7.275 3 4.05Q3 3.6 3.3 3.3Q3.6 3 4.05 3H8.1Q8.45 3 8.725 3.225Q9 3.45 9.05 3.8L9.7 7.3Q9.75 7.65 9.688 7.937Q9.625 8.225 9.4 8.45L7 10.9Q8.05 12.7 9.625 14.275Q11.2 15.85 13.1 17L15.45 14.65Q15.675 14.425 16.038 14.312Q16.4 14.2 16.75 14.25L20.2 14.95Q20.55 15.025 20.775 15.287Q21 15.55 21 15.9V19.95Q21 20.4 20.7 20.7Q20.4 21 19.95 21Z"/>
    </Icon>
  )
});

export default IconMaterialWifiCallingOutlinedFilled;
