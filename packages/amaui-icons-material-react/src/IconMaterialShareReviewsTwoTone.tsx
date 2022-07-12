import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShareReviewsTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShareReviewsTwoTone'
      short_name='ShareReviews'

      {...props}
    >
      <path d="M14.25 15q.925 0 1.6-.663.675-.662.675-1.587 0-.925-.675-1.6t-1.6-.675q-.425 0-.8.138-.375.137-.65.412l-1.975-.975q0-.025.013-.038L10.85 10l-.012-.025-.013-.025 2-.975q.275.25.638.388.362.137.787.137.925 0 1.6-.663.675-.662.675-1.587 0-.925-.675-1.6t-1.6-.675q-.9 0-1.55.612-.65.613-.7 1.488v.05L9.85 8.2q-.275-.225-.625-.35-.35-.125-.725-.125-.925 0-1.588.675-.662.675-.662 1.6t.662 1.587q.663.663 1.588.663.375 0 .725-.113.35-.112.625-.337L12 12.875v.05q.05.875.7 1.475.65.6 1.55.6ZM1.4 22.475V4.4q0-1.275.875-2.15t2.15-.875h15.15q1.275 0 2.15.875T22.6 4.4v11.2q0 1.275-.875 2.15t-2.15.875H5.25Z"/>
    </Icon>
  )
});

export default IconMaterialShareReviewsTwoTone;
