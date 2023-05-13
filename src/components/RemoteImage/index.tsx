import React from 'react';

import FastImage, { FastImageProps } from 'react-native-fast-image';
import { createImageProgress } from 'react-native-image-progress';
import { SkypeIndicator } from 'react-native-indicators';

interface IRemoteImageProps extends FastImageProps {
  size?: number;
  showLoader?: boolean;
}

const Image = createImageProgress(FastImage);

const RemoteImage = (props: IRemoteImageProps) => {
  return (
    <Image
      {...props}
      indicator={() => <SkypeIndicator size={props?.size ?? 50} />}>
      {props.showLoader ? <SkypeIndicator size={props?.size ?? 50} /> : null}
    </Image>
  );
};

export default React.memo(RemoteImage);
