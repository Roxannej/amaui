import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialApkDocumentOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApkDocumentOutlined'
      short_name='ApkDocument'

      {...props}
    >
      <path d="M7 19h10q-.1-1.225-.75-2.25t-1.7-1.625l.95-1.7q.05-.1.025-.225t-.15-.175q-.1-.05-.212-.025-.113.025-.163.125l-.975 1.75q-.5-.2-1-.313-.5-.112-1.025-.112-.525 0-1.025.112-.5.113-1 .313L9 13.125Q8.95 13 8.838 13q-.113 0-.238.05l-.1.375.95 1.7q-1.05.6-1.7 1.625Q7.1 17.775 7 19Zm2.75-1.5q-.2 0-.35-.15-.15-.15-.15-.35 0-.2.15-.35.15-.15.35-.15.2 0 .35.15.15.15.15.35 0 .2-.15.35-.15.15-.35.15Zm4.5 0q-.2 0-.35-.15-.15-.15-.15-.35 0-.2.15-.35.15-.15.35-.15.2 0 .35.15.15.15.15.35 0 .2-.15.35-.15.15-.35.15ZM6 22q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h8l6 6v12q0 .825-.587 1.413Q18.825 22 18 22Zm7-13V4H6v16h12V9ZM6 4v5-5 16V4Z"/>
    </Icon>
  )
});

export default IconMaterialApkDocumentOutlined;