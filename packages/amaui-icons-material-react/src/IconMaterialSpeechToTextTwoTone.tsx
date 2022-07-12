import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpeechToTextTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeechToTextTwoTone'
      short_name='SpeechToText'

      {...props}
    >
      <path d="M16.875 10q-.825 0-1.412-.575-.588-.575-.588-1.425V4q0-.85.588-1.438.587-.587 1.412-.587.85 0 1.437.587Q18.9 3.15 18.9 4v4q0 .85-.588 1.425-.587.575-1.437.575ZM5.125 22.9q-1.25 0-2.138-.888-.887-.887-.887-2.137V4.125q0-1.25.887-2.138.888-.887 2.138-.887h7.85v3.025h-7.85v15.75h10.25v-1.6H18.4v1.6q0 1.25-.9 2.137-.9.888-2.125.888Zm1.95-4.625V16.05H14v2.225Zm0-3.35V13.05h4.875v1.875ZM18.4 16.5h-3.025v-3.025q-1.925-.5-3.225-1.987Q10.85 10 10.85 8h2.55q0 1.35 1.038 2.238 1.037.887 2.437.887 1.425 0 2.462-.887Q20.375 9.35 20.375 8h2.55q0 2-1.287 3.488-1.288 1.487-3.238 1.987Z"/>
    </Icon>
  )
});

export default IconMaterialSpeechToTextTwoTone;
