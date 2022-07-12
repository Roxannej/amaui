import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCleaningBucketTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CleaningBucketTwoTone'
      short_name='CleaningBucket'

      {...props}
    >
      <path d="M9.175 23.925q-1.15 0-2-.737-.85-.738-1-1.888L4.35 7.75H19.7L17.875 21.3q-.15 1.15-1.012 1.888-.863.737-1.988.737ZM12 16.6q1.3 0 2.2-.9.9-.9.9-2.175V11.65h-2.525v1.875q0 .25-.162.4-.163.15-.413.15-.225 0-.387-.15-.163-.15-.163-.4V11.65H8.925v1.875q0 1.275.9 2.175.9.9 2.175.9Zm3.75-9.725q-.85 0-1.462-.613-.613-.612-.613-1.487 0-.85.613-1.463.612-.612 1.487-.612.85 0 1.463.612.612.613.612 1.488 0 .85-.612 1.462-.613.613-1.488.613Zm-6.5-.65q-1.25 0-2.162-.913-.913-.912-.913-2.187T7.088.95Q8 .05 9.275.05t2.175.9q.9.9.9 2.2 0 1.25-.9 2.162-.9.913-2.2.913Z"/>
    </Icon>
  )
});

export default IconMaterialCleaningBucketTwoTone;