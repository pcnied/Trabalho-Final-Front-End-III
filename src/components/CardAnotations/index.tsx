import { Add } from '@mui/icons-material';
import { Fab, Grid, Paper } from '@mui/material';
import React, { useState } from 'react';

import ColumnAnotation from '../ColumnAnotations';
import ModalAnotations from '../ModalAnotations';

const CardAnotations: React.FC = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Grid container>
				<Grid item xs={12} sm={12}>
					<Paper
						square
						sx={{
							height: 'min-content',
							paddingY: 3,
							marginBottom: 4,
							margin: 3,
							borderRadius: '10px',
						}}
					>
						<Grid
							container
							justifyContent={'center'}
							rowSpacing={5}
						>
							<ColumnAnotation />
						</Grid>
					</Paper>
				</Grid>
			</Grid>
			<Fab
				variant="extended"
				sx={{ position: 'fixed', bottom: '30px', right: '30px' }}
				onClick={() => setOpen(true)}
			>
				<Add />
				Adicionar Anotação
			</Fab>
			<ModalAnotations context={'create'} open={open} setOpen={setOpen} />
		</>
	);
};

export default CardAnotations;
