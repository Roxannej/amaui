import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStylerOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StylerOutlinedW700Filled'
      short_name='Styler'

      {...props}
    >
      <path d="M6.8 22.575v-5.8H5.025q-1.325 0-2.25-.925T1.85 13.6q0-.95.5-1.763.5-.812 1.575-1.262l6.425-2.7v-.35q-.8-.25-1.362-1.038-.563-.787-.563-1.762 0-1.5 1.038-2.538Q10.5 1.15 12 1.15q1.475 0 2.525 1.05 1.05 1.05 1.05 2.525H12.8q0-.325-.225-.563-.225-.237-.575-.237-.325 0-.562.237-.238.238-.238.563 0 .3.238.562.237.263.562.263.575 0 .975.4t.4.975v.825l6.7 2.825q.85.35 1.463 1.137.612.788.612 1.888 0 1.325-.925 2.25t-2.25.925H17.2v5.8ZM5.025 14H6.8v-.8h10.4v.8h1.775q.2 0 .3-.125.1-.125.1-.275 0-.125-.063-.237-.062-.113-.187-.163L12 10.2l-7.125 3q-.15.075-.2.175-.05.1-.05.225 0 .15.1.275.1.125.3.125Z"/>
    </Icon>
  )
});

export default IconMaterialStylerOutlinedW700Filled;