import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function App() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Nome" />
      <TextField id="standard-basic" label="Sobrenome" />
      <TextField id="standard-basic" label="Idade" />
      <TextField id="standard-basic" label="CPF" />

      <Button>Salvar</Button>
    </form>
  );
}

export default App;
