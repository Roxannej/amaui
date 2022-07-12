import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHdrWeakRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrWeakRoundedW700'
      short_name='HdrWeak'

      {...props}
    >
      <path d="M4.875 16.65Q2.925 16.65 1.575 15.3Q0.225 13.95 0.225 12Q0.225 10.05 1.575 8.7Q2.925 7.35 4.875 7.35Q6.825 7.35 8.175 8.7Q9.525 10.05 9.525 12Q9.525 13.95 8.175 15.3Q6.825 16.65 4.875 16.65ZM17.3 18.45Q14.6 18.45 12.725 16.562Q10.85 14.675 10.85 12Q10.85 9.3 12.738 7.425Q14.625 5.55 17.3 5.55Q20 5.55 21.888 7.425Q23.775 9.3 23.775 12Q23.775 14.675 21.888 16.562Q20 18.45 17.3 18.45ZM17.3 15.3Q18.675 15.3 19.65 14.337Q20.625 13.375 20.625 12Q20.625 10.625 19.65 9.662Q18.675 8.7 17.3 8.7Q15.925 8.7 14.963 9.662Q14 10.625 14 12Q14 13.375 14.963 14.337Q15.925 15.3 17.3 15.3Z"/>
    </Icon>
  )
});

export default IconMaterialHdrWeakRoundedW700;
