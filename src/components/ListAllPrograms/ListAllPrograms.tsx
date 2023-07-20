import { RootState, useAppSelector } from '@/app/store';
import { Box, Button, Stack, SxProps, Theme, Typography } from '@mui/material';

const MOCK_PROGRAMS = [{ name: 'Programa para Dilan' }, { name: 'Programa para Cata' }];

const ListAllPrograms = () => {
  const mode = useAppSelector((state: RootState) => state.user.mode);

  return (
    <Stack gap={4}>
      <Stack gap={2}>
        <Button
          variant="outlined"
          sx={{
            maxWidth: { sm: '100%', md: 300 },
          }}
        >
          New Program
        </Button>

        <Button
          variant="outlined"
          color="error"
          sx={{
            maxWidth: { sm: '100%', md: 300 },
          }}
        >
          New Exercise
        </Button>
      </Stack>

      <Stack
        sx={{
          p: 2,
          boxShadow: 3,
          borderRadius: 5,
          background: (theme: Theme) =>
            mode === 'dark' ? theme.palette.background.paper : theme.palette.background.default,
          backdropFilter: 'blur(10px)',
        }}
        gap={2}
      >
        <Typography>All Programs</Typography>
        <Stack direction="row" flexWrap="wrap" gap={2}>
          {MOCK_PROGRAMS.map((program) => (
            <Box
              key={program.name}
              sx={
                {
                  boxShadow: 2,
                  display: 'flex',
                  width: { xs: 100, sm: 200, md: 300 },
                  height: { xs: 100, sm: 200, md: 300 },
                  borderRadius: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  p: 0.65,
                  '& p': {
                    //   fontSize: { xs: 10, sm: 14, md: 16 },
                    textShadow: mode === 'dark' ? '0px 0px 10px #000' : '0px 0px 10px #fff',
                  },
                } as SxProps
              }
            >
              <Typography fontWeight="bold">{program.name}</Typography>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};
export default ListAllPrograms;
