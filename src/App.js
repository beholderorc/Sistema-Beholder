import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
//import InputLabel from '@mui/material/InputLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import SaveIcon from '@mui/icons-material/Save';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//import FormControl from '@mui/material/FormControl';
//import { fetchStates } from './Api-IBGE';
//import FormularioEstados from './Form';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
      darker: '#053e85',
      contrastText: '#ffc107',
    },
    secondary: {
      main: '#ffc107',
      contrastText: 'bolder',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'primary' && {
              backgroundColor: '#202020',
              color: '#ffc107',
            }),
        }),
      },
    },
  },
});

const App = (props) => {
  const [form, setForm] = React.useState({
    fornecedor: '',
    contato: '',
    estado: '',
    cidade: '',
    email: '',
    // material: false,
    // equipamento: false,
    // maodeobra: false,
  });
  const [caixa, setCaixa] = React.useState([]);

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }
  function checagemBox({ target }) {
    if (target.checked) {
      setCaixa([...caixa, target.value]);
    } else {
      setCaixa(caixa.filter((cai) => cai !== target.value));
    }
  }
  const Obj = { ...form, ...caixa };
  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://bholder-back-b2orecegt-gustavonovaes91.vercel.app/', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(Obj),
    });
    console.log(Obj);
  }

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <ThemeProvider theme={theme}>
          <Grid container direction="column" alignItems="center">
            <TextField
              fullWidth
              type="text"
              id="fornecedor"
              label="Fornecedor"
              variant="standard"
              value={form.fornecedor}
              onChange={handleChange}
            >
              Fornecedor
            </TextField>
            <TextField
              fullWidth
              type="text"
              id="contato"
              label="Contato"
              variant="standard"
              value={form.contato}
              onChange={handleChange}
            >
              Contato
            </TextField>
            <TextField
              fullWidth
              select
              type="text"
              id="estado"
              label="Estado"
              variant="standard"
              value={form.estado}
              onChange={handleChange}
            >
              {' '}
              Estado
            </TextField>

            <TextField
              fullWidth
              type="text"
              id="cidade"
              label="Cidade"
              variant="standard"
              value={form.cidade}
              onChange={handleChange}
            >
              Cidade
            </TextField>
            <TextField
              fullWidth
              type="email"
              id="email"
              label="Email"
              variant="standard"
              value={form.email}
              onChange={handleChange}
            >
              Email
            </TextField>
          </Grid>

          <FormGroup>
            <Grid container sx={{ justifyContent: 'center', pt: '30px' }}>
              <FormLabel sx={{ fontWeight: 'bolder' }}>
                Tipos de Serviços Fornecidos
              </FormLabel>
            </Grid>
            <Grid container direction="row">
              <FormControlLabel
                control={<Checkbox sx={{ color: '#000' }} />}
                label="Material"
                id="material"
                name="material"
                value="material"
                checked={caixa.includes('material')}
                onChange={checagemBox}
              />
              <FormControlLabel
                control={<Checkbox sx={{ color: '#000' }} />}
                label="Equipamento"
                id="equipamento"
                name="equipamento"
                value="equipamento"
                checked={caixa.includes('equipamento')}
                onChange={checagemBox}
              />
              <FormControlLabel
                control={<Checkbox sx={{ color: '#000' }} />}
                label="Mão de Obra"
                name="maodeobra"
                value="maodeobra"
                checked={caixa.includes('maodeobra')}
                id="maodeobra"
                onChange={checagemBox}
              />

              {/* <FormControlLabel control={<Checkbox />} label="Marcar Todos" /> */}
            </Grid>
          </FormGroup>
          <Stack container alignItems="flex-end">
            <Button
              type="submit"
              onClick={props.event}
              variant="contained"
              startIcon={<SaveIcon />}
            >
              Salvar
            </Button>
          </Stack>
        </ThemeProvider>
      </form>
    </Box>
  );
};

export default App;
