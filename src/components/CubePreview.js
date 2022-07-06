import React, { useCallback, useState } from 'react';

import CubePropType from 'proptypes/CubePropType';
import Username from 'components/Username';

import { Card } from 'reactstrap';

import AspectRatioBox from 'components/AspectRatioBox';

import { getCubeDescription, getCubeId } from 'utils/Util';

const CubePreview = ({ cube }) => {
  console.log(cube);
  const [hover, setHover] = useState(false);
  const handleMouseOver = useCallback((event) => setHover(!event.target.getAttribute('data-sublink')), []);
  const handleMouseOut = useCallback(() => setHover(false), []);
  return (
    <Card
      className={hover ? 'cube-preview-card hover' : 'cube-preview-card'}
      onMouseOver={handleMouseOver}
      onFocus={handleMouseOver}
      onMouseOut={handleMouseOut}
      onBlur={handleMouseOut}
    >
      <AspectRatioBox ratio={626 / 457} className="text-ellipsis">
        <img className="w-100" alt={cube.ImageName} src={cube.ImageUri} />
        <em className="cube-preview-artist">Art by {cube.ImageArtist}</em>
      </AspectRatioBox>
      <div className="w-100 py-1 px-2">
        <a href={`/cube/overview/${encodeURIComponent(getCubeId(cube))}`} className="stretched-link">
          <h5 className="text-muted text-ellipsis my-0" title={cube.Name}>
            {cube.Name}
          </h5>
        </a>
        <div className="text-muted text-ellipsis">{getCubeDescription(cube)}</div>
        <em className="text-muted text-ellipsis">
          Designed by <Username userId={cube.Owner} />
        </em>
      </div>
    </Card>
  );
};

CubePreview.propTypes = {
  cube: CubePropType.isRequired,
};

export default CubePreview;
