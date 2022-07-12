import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShuffleOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShuffleOutlinedW700'
      short_name='Shuffle'

      {...props}
    >
      <path d="M8.975 10.85 3.55 5.4 5.475 3.475 10.925 8.9ZM13.7 20.375V17.625H15.75L13.225 15.075L15.175 13.125L17.7 15.625V13.625H20.45V20.375ZM5.475 20.525 3.55 18.6 15.75 6.375H13.7V3.625H20.45V10.375H17.7V8.325Z"/>
    </Icon>
  )
});

export default IconMaterialShuffleOutlinedW700;