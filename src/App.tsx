import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Box,
  Typography,
  createTheme,
  MuiThemeProvider,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";

const useStyles = makeStyles((theme) => ({
  primary: {
    color: "#FFFFFF",
  },
  containerForm: {
    display: "block",
    margin: "0 auto",
    width: "30%",
    background: "#292929",
    height: "calc(100vh - 7rem)",
    padding: "5rem 5rem",
  },
  inputForm: {
    width: "100%",
    margin: "1.5rem 0",
    background: "#303030",
    borderRadius: "5px",
  },
  footerForm: {
    display: "flex",
    flexDirection: "row-reverse",
  },
  headerForm: {
    margin: "2rem 0",
    textAlign: "center",
  },
  title: {
    color: "#FFC933",
    fontWeight: "normal",
    fontFamily: "roboto",
  },
}));

function App() {
  const classes = useStyles();
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFC933",
      },
    },
  });
  const phoneRegExp = /^(\d{2})\D*(\d{5}|\d{4})\D*(\d{4})$/;

  const validationSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().required().positive().integer(),
    tel: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required(),
    msg: yup.string().required(),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      age: "",
      tel: "",
      msg: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <MuiThemeProvider theme={theme}>
      <form
        className={classes.containerForm}
        noValidate
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <Box className={classes.headerForm}>
          <Typography className={classes.title} variant="h2" component="h1">
            Área de contato
          </Typography>
          <Typography
            className={classes.title}
            variant="subtitle1"
            component="h2"
          >
            Formulário de validação utilizando React | Typescript | Yup | Formik
            | Material UI
          </Typography>
        </Box>
        <Box>
          <TextField
            variant="outlined"
            className={classes.inputForm}
            id="name"
            name="name"
            label="Nome Completo"
            autoFocus
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            error={formik.touched.name && Boolean(formik.errors.name)}
          />
        </Box>
        <Box>
          <TextField
            variant="outlined"
            className={classes.inputForm}
            id="email"
            name="email"
            label="E-mail"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            helperText={formik.touched.email && formik.errors.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
          />
        </Box>
        <Box>
          <TextField
            variant="outlined"
            className={classes.inputForm}
            id="age"
            name="age"
            label="Idade"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.age}
            helperText={formik.touched.age && formik.errors.age}
            error={formik.touched.age && Boolean(formik.errors.age)}
          />
        </Box>
        <Box>
          <TextField
            variant="outlined"
            className={classes.inputForm}
            id="tel"
            name="tel"
            label="Número do Whatsapp"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.tel}
            helperText={formik.touched.tel && formik.errors.tel}
            error={formik.touched.tel && Boolean(formik.errors.tel)}
          />
        </Box>
        <Box>
          <TextField
            variant="outlined"
            className={classes.inputForm}
            id="msg"
            name="msg"
            label="Mensagem"
            multiline
            type="text"
            rows={5}
            onChange={formik.handleChange}
            value={formik.values.msg}
            helperText={formik.touched.msg && formik.errors.msg}
            error={formik.touched.msg && Boolean(formik.errors.msg)}
          />
        </Box>

        <Box className={classes.footerForm}>
          <Button variant="contained" color="primary" type="submit">
            Enviar
          </Button>
        </Box>
      </form>
    </MuiThemeProvider>
  );
}

export default App;
