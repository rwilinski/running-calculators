import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useMemo } from 'react';

import { calculatePace } from '../utils/calculate.util';
import { displayDistance, displayTime } from './../utils/display.util';

type DistanceTableProps = {
  time: number;
  distance: number;
};

export const DistanceTable: React.FC<DistanceTableProps> = ({
  time,
  distance,
}) => {
  const pace = useMemo(() => calculatePace(time, distance), [time, distance]);

  const rows = useMemo(() => {
    const distanceFloor = Math.floor(distance / 1000);
    const rows = Array(distanceFloor)
      .fill(null)
      .map((x, i) => (i + 1) * 1000);

    if (distance > distanceFloor * 1000) {
      return [...rows, distance];
    }

    return rows;
  }, [distance]);

  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell align="right" sx={{ width: '50%' }}>
            Split
          </TableCell>
          <TableCell>Elapsed time</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((km, i) => (
          <TableRow key={km} hover selected={(i + 1) % 5 === 0}>
            <TableCell align="right">
              {displayDistance(km)}
              {i === rows.length - 1 && (
                <Typography variant="caption"> (Finish)</Typography>
              )}
            </TableCell>
            <TableCell>{displayTime(pace * (km / 1000))}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
