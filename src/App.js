import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {MenuItem,Select,Radio,FormControl,FormLabel,RadioGroup,Grid,Accordion,Typography,Paper,Box,Link,Checkbox,TextField,Button,FormControlLabel,AccordionSummary,Slider, Divider} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Logo from './assets/images/imagen_reportes.png';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
	color:'#438EB9'
  },
  image: {
    backgroundImage: `url(${Logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[20] : theme.palette.grey[700],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
 
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
	backgroundColor:'#438EB9'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  colorFondo:{
	backgroundColor:'#438EB9'
  }, 
  colorPrimary:{
	color:'#438EB9'
  }, 
  colorLetra:{
	color:'#438EB9'
  }, 
  colorBorder:{
	backgroundBorder:'#438EB9'
  },
  accordion:{
  paddingLeft: '14px',
  paddingBottom: '14px',
  border: '2px #438EB9 solid'
  }

}));


export default function App() {
  const classes = useStyles();
  
  const [patologiaGrado, setPatologiaGrado] = React.useState("patologia_grado_ninguno");
  const [patologiaEnfermedad, setPatologiaEnfermedad] = React.useState("patologia_enfermedad_ninguno");
  const [patologiaValvular, setPatologiaValular] = React.useState("patologia_valvular_ninguno");
  const [feyVI, setFeyVI] = React.useState("ninguno");
  const [edad, setEdad] = React.useState([1, 100]);
  const [sexo, setSexo] = React.useState("femenino");
  const [shockCardiogenico, setShockCardiogenico] = React.useState("si");
  const [icc, setICC] = React.useState("si");
  const [asistolia, setAsistolia] = React.useState("si");
  const [tvFv, setTvFv] = React.useState("si");
  const [paroCardiaco, setParoCardiaco] = React.useState("si");
  const [claseFuncional, setClaseFuncional] = React.useState("I");
  const [cuadroClinico, setCuadroClinico] = React.useState("0");
  const [anginaInestable, setAnginaInestable] = React.useState("0");
  const [graceRiskScore, setGraceRiskScore] = React.useState("0");
  const [NSTEMI, setNSTEMI] = React.useState("0");
  const [tipoAi, setTipoAi] = React.useState("0");
  const [grsAi, setGrsAi] = React.useState("0");
  const [tipoNs, setTipoNs] = React.useState("0");
  const [expanded, setExpanded] = React.useState({
	paciente:true,
	antecedentes:false,
	factoresRiesgos:false,
	clinica:false,
	datosAngio:false,
	lesiones:false,
	procedimiento:false,
	complicacionesSala:false
  });
  const [checkedAntecedente , setCheckedAntecedente] = React.useState({
	EPOC:false,
	IRC:false,
	CRM:false,
	ATC:false,
	IAM:false,
	ACV:false,
	AIT:false,
	FA:false,
	HTP:false,
	MCPH:false
  })
  const [checkedFR , setCheckedFR] = React.useState({
	HTA:false,
	DLP:false,
	DBT:false,
	DBT_IR:false,
	TBQ:false,
	EX_TBQ:false,
	AHF:false,
	OBESIDAD:false
  })
  const [checkedCS , setCheckedCS] = React.useState({
	obito:false,
	edema_agudo_pulmon:false,
	paro_cardiorrespiratorio:false,
	ARM:false,
	arritmia_ventricular:false,
	bloqueo_AV_completo:false,
	taponamiento:false,
	oclusión_del_vaso_target:false,
	stroke:false
  })

  const AzulRadio = withStyles({
	root: {
	  color: '#438EB9',
	  '&$checked': {
		color: '#438EB9',
	  },
	},
	checked: {},
  })((props) => <Radio color="default" {...props} />);

  const CustomColorCheckbox = withStyles({
	root: {
	  color: "#438EB9",
	  "&$checked": {
		color: "#438EB9"
	  }
	},
	checked: {}
  })((props) => <Checkbox color="default" {...props} />);
  
  const handleChangeEdad = (e,data) => {
		
    setEdad(data);
	e.preventDefault()
  };
  const handleChangeSexo = (e) => {
   
	e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation()
	setSexo(e.target.value);
  };
  const handleChangeFeyVi = (e) => {
    	setFeyVI(e.target.value);
  };
  const handleChangePatologiaValular = (e) => {
    setPatologiaValular(e.target.value);
  };
  const handleChangePatologiaEnfermedad = (e) => {
    setPatologiaEnfermedad(e.target.value);
  };
  const handleChangePatologiaGrado = (e) => {
    setPatologiaGrado(e.target.value);
  };
  function valuetext(value) {
	return value;
  }
  const handleChangeAccordion = (panel)=>(event, newExpanded) => {
	
	setExpanded({...expanded,[panel]:newExpanded})
};
const handleChangeAntecedente = (check)=>(event, newValue)=>{
	setCheckedAntecedente({...checkedAntecedente,[check]:newValue})

}
const handleChangeFR = (check)=>(event, newValue)=>{
	setCheckedFR({...checkedFR,[check]:newValue})

}
const handleChangeCS = (check)=>(event, newValue)=>{
	setCheckedCS({...checkedCS,[check]:newValue})

}
	const handleChangeCuadroClinico = (e)=>{
		setCuadroClinico(e.target.value)
	
	}
	const handleChangeParoCardiaco = (e) => {
    	setParoCardiaco(e.target.value);
  };
  const handleChangeShockCardiogenico = (e) => {
	setShockCardiogenico(e.target.value);
};
const handleChangeICC = (e) => {
	setICC(e.target.value);
};
const handleChangeAsistolia = (e) => {
	setAsistolia(e.target.value);
};
const handleChangeTvFv = (e) => {
	setTvFv(e.target.value);
};
const handleChangeClaseFuncional = (e) => {
	setClaseFuncional(e.target.value);
};
const handleChangeAnginaInestable = (e) => {
	setAnginaInestable(e.target.value);
};
const handleChangeGraceRiskScore = (e) => {
	setGraceRiskScore(e.target.value);
};
const handleChangeNSTEMI= (e) => {
	setNSTEMI(e.target.value);
};
  const Paciente = (props) => {
		return ( 
		
		<Accordion  className={classes.accordion} expanded={expanded["paciente"]} onChange={handleChangeAccordion('paciente')}> 
		<AccordionSummary
			expandIcon={<ExpandMoreIcon />}
			aria-controls="pacientebh-content"
			id="pacientebh-header"
		>
	  <Typography className={`${classes.heading} ${classes.colorLetra}`}><strong>Paciente</strong></Typography>
	 
	</AccordionSummary>
	<FormLabel  component="legend" style={{paddingLeft:'20px'}}>Seleccione un rango de edad </FormLabel>
	
	<Grid container spacing={2}>
		<Grid item md={4} >
		<Slider
			className={classes.colorPrimary}
			min={1}
			max={100}
			value={edad}
			onChange={handleChangeEdad}
			valueLabelDisplay="auto"
			aria-labelledby="range-slider"
			getAriaValueText={valuetext}
			valueLabelDisplay="on"
			name="paciente[edad]"
		
      />
		</Grid>
		<Grid item md={8} ></Grid>
	 	<Grid item md={12} >
		 <FormControl component="fieldset">
      <FormLabel component="legend">Sexo</FormLabel>
		<RadioGroup row={true} aria-label="gender" name="paciente[sexo]" onFocus={(event) => event.stopPropagation()} value={sexo} onChange={handleChangeSexo}>
			<FormControlLabel  value="1"  
            onFocus={(event) => event.stopPropagation()} control={<AzulRadio  />} label="Femenino" />
			<FormControlLabel value="0"   onClick={(event) => { event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();}}
            onFocus={(event) => event.stopPropagation()}  control={<AzulRadio />} label="Masculino" />
			<FormControlLabel value="2"  onClick={(event) => { event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();}}
            onFocus={(event) => event.stopPropagation()} control={<AzulRadio />} label="Ambos" />
			
		</RadioGroup>
    </FormControl>
		</Grid> 
		<Grid item md={4} >
	<FormLabel component="legend">Fecha de nacimiento </FormLabel>

			<TextField
				id="date"
				
				type="date"
				defaultValue="2017-05-24"
				name="paciente[fecha_nac]"
				InputLabelProps={{
				shrink: true,
				}}
			/>
		</Grid> 
		<Grid item md={4} >
		<FormLabel component="legend">Fecha de ingreso </FormLabel>

		<TextField
				id="date"
				type="date"
				defaultValue="2017-05-24"
				name="paciente[fecha_creacion]"
			
				InputLabelProps={{
				shrink: true,
				}}
			/>
		</Grid>
		<Grid item md={4} ></Grid>
	</Grid>
	
	  </Accordion>)
  }

  const FactoresRiesgo = (props)=>{
	  return(
		<Accordion className={classes.accordion} expanded={expanded["factoresRiesgos"]} onChange={handleChangeAccordion('factoresRiesgos')}> 
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="factores_de_riesgobh-content"
				id="factores_de_riesgobh-header"
			>
	  		<Typography className={`${classes.heading} ${classes.colorLetra}`}><strong>Factores de riesgo</strong></Typography>
	  
			</AccordionSummary>
			<FormControlLabel
				control={<CustomColorCheckbox name="factorRiesgo[factor_riesgo]"  value="1" checked={checkedFR["HTA"]} onChange={handleChangeFR("HTA")}  />}
				label="HTA"
			/>
			<FormControlLabel
				
				onFocus={(event) => event.stopPropagation()}
				control={<CustomColorCheckbox name="factorRiesgo[factor_riesgo]" value="2" checked={checkedFR["DLP"]} onChange={handleChangeFR("DLP")}  />}
				label="DLP"
			/>
			<FormControlLabel
				
				control={<CustomColorCheckbox name="factorRiesgo[factor_riesgo]" value="3"  checked={checkedFR["DBT"]} onChange={handleChangeFR("DBT")} />}
				label="DBT"
			/>
				<FormControlLabel
				
				control={<CustomColorCheckbox name="factorRiesgo[factor_riesgo]" value="4" checked={checkedFR["DBT_IR"]} onChange={handleChangeFR("DBT_IR")} />}
				label="DBT IR"
			/>
			<FormControlLabel
				
				control={<CustomColorCheckbox name="factorRiesgo[factor_riesgo]" value="5" checked={checkedFR["TBQ"]} onChange={handleChangeFR("TBQ")} />}
				label="TBQ"
			/>
			<FormControlLabel
				
				control={<CustomColorCheckbox name="factorRiesgo[factor_riesgo]" value="6"  checked={checkedFR["Ex_TBQ"]} onChange={handleChangeFR("Ex_TBQ")} />}
				label="Ex TBQ"
			/>
			<FormControlLabel
				
				control={<CustomColorCheckbox name="factorRiesgo[factor_riesgo]" value="6" checked={checkedFR["AHF"]} onChange={handleChangeFR("AHF")}  />}
				label="AHF"
			/>
			<FormControlLabel
				
				control={<CustomColorCheckbox value="7" checked={checkedFR["OBESIDAD"]} onChange={handleChangeFR("OBESIDAD")}  />}
				label="OBESIDAD"
			/>
	  </Accordion>
	  )
  }
  const Antecedentes = (props)=>{
	  
	return(
	  <Accordion className={classes.accordion} expanded={expanded["antecedentes"]} onChange={handleChangeAccordion('antecedentes')}> 
	  	<AccordionSummary
		  expandIcon={<ExpandMoreIcon />}
		  aria-controls="antecedentesbh-content"
		  id="antecedentesbh-header"
	  	>
		<Typography className={`${classes.heading} ${classes.colorLetra}`}><strong>Antecedentes</strong></Typography>
	
		</AccordionSummary>
		<Grid container spacing={2}>
		<Grid item md={4} >
			<FormControlLabel
			control={<CustomColorCheckbox name="antecedente[antecedentes]" checked={checkedAntecedente["EPOC"]} value="1" onChange={handleChangeAntecedente("EPOC")} />}
			label=" Enfermedad Pulmonar Obstructiva Crónica (EPOC)"
			/>
			<FormControlLabel
			control={<CustomColorCheckbox name="antecedente[antecedentes]" checked={checkedAntecedente["IRC"]} value="2" onChange={handleChangeAntecedente("IRC")} />}
			label="Insuficiencia Renal Crónica (IRC)"
			/>
				<FormControlLabel
			control={<CustomColorCheckbox name="antecedente[antecedentes]" checked={checkedAntecedente["CRM"]} value="3" onChange={handleChangeAntecedente("CRM")} />}
			label="Cirugía de Revascularización Miocárdica (CRM)"
			/>
				<FormControlLabel
			control={<CustomColorCheckbox name="antecedente[antecedentes]" checked={checkedAntecedente["ATC"]} value="4" onChange={handleChangeAntecedente("ATC")} />}
			label="Angioplastia Transluminal Coronaria (ATC)"
			/>
				<FormControlLabel
			control={<CustomColorCheckbox name="antecedente[antecedentes]" checked={checkedAntecedente["IAM"]} value="5"  onChange={handleChangeAntecedente("IAM")} />}
			label="nfarto Agudo de Miocardio (IAM)"
			/>
				<FormControlLabel
			control={<CustomColorCheckbox name="antecedente[antecedentes]" checked={checkedAntecedente["ACV"]} value="6" onChange={handleChangeAntecedente("ACV")} />}
			label="Ataque Cerebrovascular (ACV)"
			/>
				<FormControlLabel
			control={<CustomColorCheckbox name="antecedente[antecedentes]" checked={checkedAntecedente["AIT"]} value="7"  onChange={handleChangeAntecedente("AIT")} />}
			label="Ataque isquémico transitorio (AIT)"
			/>
				<FormControlLabel
			control={<CustomColorCheckbox name="antecedente[antecedentes]" checked={checkedAntecedente["FA"]} value="8"  onChange={handleChangeAntecedente("FA")} />}
			label="Fibrilación Auricular (FA)"
			/>
				<FormControlLabel
			control={<CustomColorCheckbox name="antecedente[antecedentes]" checked={checkedAntecedente["HTP"]} value="9" onChange={handleChangeAntecedente("HTP")} />}
			label="Hipertensión Pulmonar (HTP)"
			/>
				<FormControlLabel
			control={<CustomColorCheckbox name="antecedente[antecedentes]" checked={checkedAntecedente["MCPH"]} value="10" onChange={handleChangeAntecedente("MCPH")} />}
			label="Miocardiopatía Hipertrófica (MCPH)"
			/>
		  </Grid>
		  <Grid item md={8} >
		  <Grid container  >
		  <Grid item md={12} >
			<FormLabel component="legend">FEy-VI</FormLabel>

			<Select
				variant="outlined"
				id="demo-simple-select"
				value={feyVI}
				onChange={handleChangeFeyVi}
				name="antecedente[tipoFey]"
			>
				<MenuItem value={"ninguno"}>Ninguno</MenuItem>
				<MenuItem value={"< 35%"}>{`< 35%`}</MenuItem>
				<MenuItem value={"35 a 45%"}>35 a 45%</MenuItem>
				<MenuItem value={"45 a 55%"}>45 a 55%</MenuItem>
				<MenuItem value={"> 55%"}>{`> 55%`}</MenuItem>
			</Select>
			</Grid>
			
			<Grid item md={12} >
			
				<FormLabel style={{paddingTop: '18px',
    color: 'black'}}><strong>Patologia Valular</strong></FormLabel>
				<Divider  variant="middle" className={classes.colorFondo} />
			</Grid>
			<Grid container   style={{paddingTop: '18px'}}>
				<Grid item md={4} >
					
					<FormLabel component="legend">Valvula</FormLabel>

				<Select
				variant="outlined"
				id="demo-simple-select"
				value={patologiaValvular}
				onChange={handleChangePatologiaValular}
				name="antecedente[patologia_valvular]"
				>
				<MenuItem value={"0"}>Ninguno</MenuItem>
				<MenuItem value={"1"}> Aórtica </MenuItem>
				<MenuItem value={"2"}>Mitral</MenuItem>
				<MenuItem value={"3"}>tricuspiedea </MenuItem>
				<MenuItem value={"4"}>Pulmonar </MenuItem>
				
				</Select>
				</Grid>
				<Grid item md={4} >
					
					<FormLabel component="legend">Enfermedad</FormLabel>

				<Select
				variant="outlined"
				id="demo-simple-select"
				value={patologiaEnfermedad}
				onChange={handleChangePatologiaEnfermedad}
				name="antecedente[patologia_enfermedad]"
				>
				<MenuItem value={"0"}>Ninguno</MenuItem>
				<MenuItem value={"1"}> Estenosis </MenuItem>
				<MenuItem value={"2"}>Insuficiencia</MenuItem>
				
				</Select>
				</Grid>
				<Grid item md={4} >
					
					<FormLabel component="legend">Grado</FormLabel>

				<Select
				variant="outlined"
				id="demo-simple-select"
				value={patologiaGrado}
				onChange={handleChangePatologiaGrado}
				name="antecedente[patologia_grado]"
				>
				<MenuItem value={"0"}>Ninguno</MenuItem>
				<MenuItem value={"1"}> Leve </MenuItem>
				<MenuItem value={"2"}>Moderado </MenuItem>
				<MenuItem value={"3"}>Severo </MenuItem>
				
				</Select>
				</Grid>
			</Grid>
		</Grid>
		  </Grid>
		  </Grid>
	</Accordion>
	)
}

 const Clinica = (props)=>{
	 return(
		<Accordion className={classes.accordion} expanded={expanded["clinica"]} onChange={handleChangeAccordion('clinica')}> 
		<AccordionSummary
			expandIcon={<ExpandMoreIcon />}
			aria-controls="clinicabh-content"
			id="clinicabh-header"
		>
	  <Typography className={`${classes.heading} ${classes.colorLetra}`}><strong>Clínica</strong></Typography>
	  
			</AccordionSummary>
			<Grid container >
				<Grid item md={4} >
					<FormLabel component="legend">Cuadro Clínico</FormLabel>

					<Select
						variant="outlined"
						id="demo-simple-select"
						value={cuadroClinico}
						onChange={handleChangeCuadroClinico}
						name="cuadroClinico[tipo]"
					>
						
						<MenuItem value={"0"}> Isquemia silente </MenuItem>
						<MenuItem value={"1"}>Angina crónica estable </MenuItem>
						<MenuItem value={"2"}>SCASEST </MenuItem>
						<MenuItem value={"3"}>IAM </MenuItem>
						<MenuItem value={"4"}>IAM NO Q </MenuItem>
					</Select>
				</Grid>
			<Grid item md={8} >
				
					<FormControl component="fieldset">
						<FormLabel component="legend">Paro Cardiaco</FormLabel>
						<RadioGroup row={true} aria-label="gender" name="cuadroClinico[paroCardio]" onFocus={(event) => event.stopPropagation()} value={paroCardiaco} onChange={handleChangeParoCardiaco}>
							<FormControlLabel  value="1"  onFocus={(event) => event.stopPropagation()} control={<AzulRadio  />} label="Si" />
							<FormControlLabel value="0"  onFocus={(event) => event.stopPropagation()}  control={<AzulRadio />} label="No" />
						</RadioGroup>
						
						<FormLabel component="legend">Shock Cardiogéncio</FormLabel>
					 	<RadioGroup row={true} aria-label="gender" name="cuadroClinico[shockCardio]" onFocus={(event) => event.stopPropagation()} value={shockCardiogenico} onChange={handleChangeShockCardiogenico}>
							<FormControlLabel value="1"  onFocus={(event) => event.stopPropagation()}  control={<AzulRadio  />} label="Si" />
							<FormControlLabel value="0" onFocus={(event) => event.stopPropagation()} control={<AzulRadio />} label="No" />
							
							
						</RadioGroup> 
						<FormLabel component="legend">ICC (insuficiencia cardiaca)</FormLabel>
					 	<RadioGroup row={true} aria-label="gender" name="cuadroClinico[icg]" onFocus={(event) => event.stopPropagation()} value={icc} onChange={handleChangeICC}>
							
							<FormControlLabel value="1"  onFocus={(event) => event.stopPropagation()}  control={<AzulRadio />} label="Si" />
							<FormControlLabel value="0" onFocus={(event) => event.stopPropagation()} control={<AzulRadio  />} label="No" />
						
							
						</RadioGroup> 
						<FormLabel component="legend">Bloqueo AV Grado 2B o 3 Asistolia</FormLabel>
					 	<RadioGroup row={true} aria-label="gender" name="cuadroClinico[arritmiaBloqueoAv]" onFocus={(event) => event.stopPropagation()} value={asistolia} onChange={handleChangeAsistolia}>
							
							<FormControlLabel value="1"  onFocus={(event) => event.stopPropagation()}  control={<AzulRadio />} label="Si" />
							<FormControlLabel value="0" onFocus={(event) => event.stopPropagation()} control={<AzulRadio  />} label="No" />
							
						</RadioGroup>
						<FormLabel component="legend">TV-FV</FormLabel>
					 	<RadioGroup row={true} aria-label="gender" name="cuadroClinico[arritmiaTvFv]" onFocus={(event) => event.stopPropagation()} value={tvFv} onChange={handleChangeTvFv}>
							
							<FormControlLabel value="1"  onFocus={(event) => event.stopPropagation()}  control={<AzulRadio />} label="Si" />
							<FormControlLabel value="0" onFocus={(event) => event.stopPropagation()} control={<AzulRadio  />} label="No" />
						
							
						</RadioGroup>  
					</FormControl>
 				
				 {cuadroClinico === "1" &&
					<FormControl component="fieldset">
					<FormLabel component="legend">Clase Funcional</FormLabel>
					 	<RadioGroup 
						 row={true} 
						 aria-label="gender" 
						 name="cuadroClinico[tipoClaseFunc]" 
						 onFocus={(event) => event.stopPropagation()} 
						 defaultValue={"0"}>
							
							<FormControlLabel value="0"  onFocus={(event) => event.stopPropagation()}  control={<AzulRadio />} label="I" />
							<FormControlLabel value="1" onFocus={(event) => event.stopPropagation()} control={<AzulRadio  />} label="II" />
							<FormControlLabel value="2" onFocus={(event) => event.stopPropagation()} control={<AzulRadio  />} label="III" />
							<FormControlLabel value="3" onFocus={(event) => event.stopPropagation()} control={<AzulRadio  />} label="IV" />
						
							
						</RadioGroup>  
					</FormControl>
 				}
				  {cuadroClinico === "2" &&
					<FormControl component="fieldset">
					
					<FormLabel component="legend">Angina Inestable</FormLabel>

						<Select
							variant="outlined"
							id="demo-simple-select"
							defaultValue={"0"}
							name="clinicaScasest[tipoAi]"
						>
							
							<MenuItem value={"0"}>Ninguna </MenuItem>
							<MenuItem value={"1"}>Angina de Reposo/Acelerada  </MenuItem>
							<MenuItem value={"2"}>Angina de Reciente Comienzo  </MenuItem>
							<MenuItem value={"3"}>Angina Post Infarto  </MenuItem>
							<MenuItem value={"4"}>Angina Post Revascularizacion - POST ATC </MenuItem>
							<MenuItem value={"5"}>Angina Post Revascularizacion - POST CRM </MenuItem>
							<MenuItem value={"6"}>Angina Progresiva </MenuItem>
						</Select>
				
						<FormLabel component="legend">Grace Risk Score</FormLabel>

						<Select
							variant="outlined"
							id="demo-simple-select"
							defaultValue={"0"}
							name="clinicaScasest[grsAi]"
						>
							
							<MenuItem value={"0"}>Ninguna </MenuItem>
							<MenuItem value={"1"}>{`<109 pts`} </MenuItem>
							<MenuItem value={"2"}>109 a 140 pts  </MenuItem>
							<MenuItem value={"3"}>{`>140 pts`}</MenuItem>
						
						</Select>

						<FormLabel component="legend">Tipo NSTEMI</FormLabel>

						<Select
							variant="outlined"
							id="demo-simple-select"
							defaultValue={"0"}
							name="clinicaScasest[tipoNs]"
						>
							
							<MenuItem value={"0"}>Ninguna </MenuItem>
							<MenuItem value={"1"}>Tipo Infra ST </MenuItem>
							<MenuItem value={"2"}>Supra ST Transitorio  </MenuItem>
							<MenuItem value={"3"}>Tipo T  </MenuItem>
							<MenuItem value={"4"}>Indeterminado  </MenuItem>
						</Select>

					
					</FormControl>
						
 				}

				{cuadroClinico === "3" &&
					<FormControl component="fieldset">
					<FormLabel component="legend">localización</FormLabel>
					<RadioGroup row={true} aria-label="gender" name="clinicaStemi[tipo]" onFocus={(event) => event.stopPropagation()} defaultValue={"anterior"}>
						<FormControlLabel  value="0"  onFocus={(event) => event.stopPropagation()} control={<AzulRadio  />} label="Anterior" />
						<FormControlLabel value="1"  onFocus={(event) => event.stopPropagation()}  control={<AzulRadio />} label="No anterior" />
					</RadioGroup>
					
					<FormLabel component="legend">Killip-Kimball clase</FormLabel>
					 <RadioGroup row={true} aria-label="gender" name="clinicaStemi[tipoKk]" onFocus={(event) => event.stopPropagation()} defaultValue={"a"}>
						<FormControlLabel value="0"  onFocus={(event) => event.stopPropagation()}  control={<AzulRadio  />} label="A" />
						<FormControlLabel value="1" onFocus={(event) => event.stopPropagation()} control={<AzulRadio />} label="B" />
						<FormControlLabel value="2" onFocus={(event) => event.stopPropagation()} control={<AzulRadio />} label="C" />
						<FormControlLabel value="3" onFocus={(event) => event.stopPropagation()} control={<AzulRadio />} label="D" />
						
						
					</RadioGroup> 
					<FormLabel component="legend">Tipo ATC</FormLabel>
					 <RadioGroup row={true} aria-label="gender" name="clinicaStemi[tipoAtc]" onFocus={(event) => event.stopPropagation()} defaultValue={"primaria"}>
						
						<FormControlLabel value="0"  onFocus={(event) => event.stopPropagation()}  control={<AzulRadio />} label="Primaria" />
						<FormControlLabel value="1" onFocus={(event) => event.stopPropagation()} control={<AzulRadio  />} label="Rescate" />
						<FormControlLabel value="2" onFocus={(event) => event.stopPropagation()} control={<AzulRadio  />} label="Facilitada" />
					
						
					</RadioGroup> 
					<FormLabel component="legend">Diurna</FormLabel>
					 <RadioGroup row={true} aria-label="gender" name="clinicaStemi[diurna]" onFocus={(event) => event.stopPropagation()} defaultValue={"si"}>
						
						<FormControlLabel value="1"  onFocus={(event) => event.stopPropagation()}  control={<AzulRadio />} label="Si" />
						<FormControlLabel value="0" onFocus={(event) => event.stopPropagation()} control={<AzulRadio  />} label="No" />
						
					</RadioGroup>
					<TextField
					 id="datetime-local"
					 label="Inicio del dolor"
					 type="datetime-local"
					 name="clinicaStemi[tipoTiempoID]"
					 defaultValue=""
					 sx={{ width: 250 }}
					 InputLabelProps={{
					   shrink: true,
					 }}
				   />
				   <TextField
					 id="datetime-local"
					 label="Llegada al Sanatorio"
					 type="datetime-local"
					 name="clinicaStemi[tipoTiempoLlS]"
					 defaultValue=""
					 sx={{ width: 250 }}
					 InputLabelProps={{
					   shrink: true,
					 }}
				   />
				   <TextField
					 id="datetime-local"
					 label="Pase de cuerda"
					 type="datetime-local"
					 name="clinicaStemi[tipoTiempoPC]"
					 defaultValue=""
					 sx={{ width: 250 }}
					 InputLabelProps={{
					   shrink: true,
					 }}
				   />
				</FormControl>
					
				}
			</Grid> 
		</Grid> 
	  </Accordion >
	 )
 }

 const DatosAngiograficos = (props)=>{

	return(
		<Accordion className={classes.accordion} > 
		<AccordionSummary
			expandIcon={<ExpandMoreIcon />}
			aria-controls="datos_angiograficosbh-content"
			id="datos_angiograficosbh-header"
		>
	  <Typography className={`${classes.heading} ${classes.colorLetra}`}><strong>Datos angiográficos</strong></Typography>
	  </AccordionSummary>
	 <Grid container spacing={1}>
		 <Grid item md={12}>
			<FormLabel component="legend">Tipo Procedimiento</FormLabel>

				<Select
					variant="outlined"
					id="demo-simple-select"
					defaultValue={"0"}
					name="angiografico[tipo_procedimiento]"
				>
				<MenuItem value={"0"}>Programado </MenuItem>
				<MenuItem value={"1"}>Urgencia </MenuItem>
				<MenuItem value={"2"}>Emergencia </MenuItem>
				
			</Select>

		</Grid>
			<Grid item md={4}>
			<FormLabel component="legend">Numero de Cine</FormLabel>
				<TextField
					id="num_cine"
					type="number"
					name="angiografico[num_cine]"
				/>
			</Grid>
			<Grid item md={4}>
			<FormLabel component="legend">Numero de Vasos Enfermos</FormLabel>
				<TextField
					id="vasos_enf"
					type="number"
					name="angiografico[vasos_enf]"
				/>
			</Grid>
			<Grid item md={4}>
			<FormLabel component="legend">Vasos tratados </FormLabel>
				<TextField
					id="vasos_tratados"
					type="number"
					name="angiografico[vasos_tratados]"
				/>
			</Grid>
			<Grid item md={12}>
			<FormLabel component="legend">Tronco</FormLabel>
				<RadioGroup row={true} aria-label="gender" name="angiografico[tronco]" onFocus={(event) => event.stopPropagation()} defaultValue={"si"}>
					<FormControlLabel  value="1"  onFocus={(event) => event.stopPropagation()} control={<AzulRadio  />} label="Si" />
					<FormControlLabel value="0"  onFocus={(event) => event.stopPropagation()}  control={<AzulRadio />} label="No" />
				</RadioGroup>
			</Grid>
			<Grid item md={12}>
			<FormLabel component="legend">Syntax</FormLabel>
				<TextField
					id="syntax"
					type="number"
					name="angiografico[syntax]"
				/>
			</Grid>
			<Grid item md={12}>
			<FormLabel component="legend">Dominancia</FormLabel>

				<Select
					variant="outlined"
					id="demo-simple-select"
					defaultValue={"0"}
					name="angiografico[dominancia]"
				>
					<MenuItem value={"0"}>CD - Coronaria Derecha </MenuItem>
					<MenuItem value={"1"}>Circunfleja </MenuItem>
				
				</Select>
			</Grid>
			<Grid item md={12}>
			<FormLabel component="legend">Revascularización</FormLabel>

				<Select
					variant="outlined"
					id="demo-simple-select"
					defaultValue={"0"}
					name="angiografico[revascularizacion]"
				>
					<MenuItem value={"0"}>Completa Procedimiento Unico </MenuItem>
					<MenuItem value={"1"}>Completa Multiple Procedimientos </MenuItem>
					<MenuItem value={"2"}>Incompleta </MenuItem>
				
				</Select>
			</Grid>
			<Grid item md={12}>
			<FormLabel component="legend">Motivo del Procedimiento</FormLabel>

				<Select
					variant="outlined"
					id="demo-simple-select"
					defaultValue={"0"}
					name="angiografico[tipo_motivo]"
				>
					<MenuItem value={"0"}>Angioplastia Primaria </MenuItem>
					<MenuItem value={"1"}>Diferido </MenuItem>
					<MenuItem value={"2"}>Evento </MenuItem>
					
				</Select>
			</Grid>
			<Grid item md={12}>
				<FormLabel component="legend">Revascularización en 30 días</FormLabel>
				<RadioGroup row={true} aria-label="gender" name="angiografico[tiempo_revascularizacion]" onFocus={(event) => event.stopPropagation()} defaultValue={"si"}>
					<FormControlLabel  value="1"  onFocus={(event) => event.stopPropagation()} control={<AzulRadio  />} label="Si" />
					<FormControlLabel value="0"  onFocus={(event) => event.stopPropagation()}  control={<AzulRadio />} label="No" />
				</RadioGroup>
			</Grid>
		</Grid>
			
		
	  </Accordion>
	)
 }

 const Lesiones = (props)=>{
	 return(
		<Accordion className={classes.accordion} > 
		<AccordionSummary
			expandIcon={<ExpandMoreIcon />}
			aria-controls="lesionesbh-content"
			id="lesionesbh-header"
		>
	  <Typography className={`${classes.heading} ${classes.colorLetra}`}><strong>Lesiones</strong></Typography>
	  
			</AccordionSummary>
			<Grid container spacing={1}>
			<Grid item md={12} >
				<FormLabel  style={{paddingTop: '18px',color: 'black'}}><strong>Vaso</strong></FormLabel>
				<Divider  variant="middle" className={classes.colorFondo} />
			</Grid>
			<Grid item md={6}>
					<FormLabel component="legend">Vaso</FormLabel>

					<Select
						variant="outlined"
						id="demo-simple-select"
						defaultValue={"1"}
						name="lesion[arteria]"
					>
					<MenuItem value={"1"}>TCI </MenuItem>
					<MenuItem value={"2"}>Da </MenuItem>
					<MenuItem value={"3"}>Cx </MenuItem>
					<MenuItem value={"4"}>Cd </MenuItem>
					<MenuItem value={"5"}>Dg </MenuItem>
					<MenuItem value={"6"}>R. intermedio  </MenuItem>
					<MenuItem value={"7"}>Pm - Da </MenuItem>
					<MenuItem value={"8"}>Pm - cd </MenuItem>
					<MenuItem value={"9"}>Pm - cx  </MenuItem>
					<MenuItem value={"10"}>Pv - Da  </MenuItem>
					<MenuItem value={"11"}>Pv - cd  </MenuItem>
					<MenuItem value={"12"}>Pv - cx  </MenuItem>
					<MenuItem value={"13"}>Pv - Dg  </MenuItem>
					<MenuItem value={"14"}>PR - Da  </MenuItem>
					<MenuItem value={"15"}>PR - Cd </MenuItem>
					<MenuItem value={"16"}>PR - Cx </MenuItem>
					<MenuItem value={"17"}>PR - Dg  </MenuItem>
					<MenuItem value={"18"}>RAMO  </MenuItem>
					<MenuItem value={"19"}>LATERO </MenuItem>
					<MenuItem value={"20"}>VENTRICULAR </MenuItem>

					</Select>

				</Grid>
				
				<Grid item md={6}>
					<FormLabel component="legend">Seleccionen por localización</FormLabel>

					<Select
						variant="outlined"
						id="demo-simple-select"
						defaultValue={"1"}
						name="lesion[localizacion]"
					>
					<MenuItem value={"1"}>Ostial  </MenuItem>
					<MenuItem value={"2"}>Proximal  </MenuItem>
					<MenuItem value={"3"}>Medio  </MenuItem>
					<MenuItem value={"4"}>Distal  </MenuItem>
					<MenuItem value={"5"}>A. proximal  </MenuItem>
					<MenuItem value={"6"}>A. distal   </MenuItem>
					<MenuItem value={"7"}>Cuerpo</MenuItem>
					<MenuItem value={"8"}>Primera posterolateral</MenuItem>
					<MenuItem value={"9"}>Descendente posterior</MenuItem>
					<MenuItem value={"10"}>Diagonal </MenuItem>
					<MenuItem value={"11"}>PRIMERA MARGINAL </MenuItem>
					<MenuItem value={"12"}>RAMO AURICULOVENTRICULAR </MenuItem>
					<MenuItem value={"13"}>LATERAL ALTA </MenuItem>
					<MenuItem value={"14"}>PRIMERA SEPTAL </MenuItem>
					<MenuItem value={"15"}>SEGUNDO POSTEROLATERAL </MenuItem>
					<MenuItem value={"16"}>SEGUNDA MARGINAL </MenuItem>
					<MenuItem value={"17"}>TERCERA MARGINAL    </MenuItem>
					<MenuItem value={"18"}>SEGUNDA DIAGONAL  </MenuItem>

					</Select>

				</Grid>

		<Grid item md={12} >
			
			<FormLabel style={{paddingTop: '18px',color: 'black'}}><strong>Características de la lesión</strong></FormLabel>
			<Divider  variant="middle" className={classes.colorFondo} />
		</Grid>
		<Grid item md={12}>
			<FormLabel component="legend">Diámetro del vaso</FormLabel>
				<TextField
					id="diam_vaso"
					type="number"
					name="lesion[diam_vaso]"
				/>
			</Grid>
			<Grid item md={12}>
			<FormLabel component="legend">Timi Pre</FormLabel>
				<TextField
					id="timi_pre"
					type="number"
					name="lesion[timi_pre]"
				/>
			</Grid>
			<Grid item md={12}>
			<FormLabel component="legend">Timi Post</FormLabel>
				<TextField
					id="timi_post"
					type="number"
					name="lesion[timi_post]"
				/>
			</Grid>
			<Grid item md={12} >
			
				<FormLabel style={{paddingTop: '18px',color: 'black'}}><strong>Lesión</strong></FormLabel>
				<Divider  variant="middle" className={classes.colorFondo} />
			</Grid>
			<Grid item md={12}>
			<FormLabel component="legend">Porcentaje de Obstrucción PRE</FormLabel>
				<TextField
					id="syntax"
					type="number"
					name="lesion[obstruccion_pre]"
				/>
			</Grid>
			<Grid item md={12}>
			<FormLabel component="legend">Porcentaje de Obstrucción post</FormLabel>
				<TextField
					id="syntax"
					type="number"
					name="lesion[obstruccion_post]"
				/>
			</Grid>
			<Grid item md={12}>
					<FormLabel component="legend">Longitud</FormLabel>

					<Select
						variant="outlined"
						id="demo-simple-select"
						defaultValue={"1"}
						name="lesion[tipo_longitud]"
					>
					<MenuItem value={"0"}>Ninguno  </MenuItem>
					<MenuItem value={"1"}>{`>20 mm`}</MenuItem>
					<MenuItem value={"2"}>{`<20 mm`}  </MenuItem>
					</Select>

				</Grid>
				<Grid item md={12} >
		 <FormControl component="fieldset">
      <FormLabel component="legend">Calcificación severa</FormLabel>
	  <RadioGroup row={true} aria-label="gender" name="lesion[calc_severa]" onFocus={(event) => event.stopPropagation()} defaultValue={"si"}>
						
						<FormControlLabel value="1"  onFocus={(event) => event.stopPropagation()}  control={<AzulRadio />} label="Si" />
						<FormControlLabel value="0" onFocus={(event) => event.stopPropagation()} control={<AzulRadio  />} label="No" />
						
					</RadioGroup>
    </FormControl>
		</Grid> 
		<Grid item md={12} >
		 <FormControl component="fieldset">
      <FormLabel component="legend">Presencia de Trombo</FormLabel>
	  <RadioGroup row={true} aria-label="gender" name="lesion[pres_trombo]" onFocus={(event) => event.stopPropagation()} defaultValue={"si"}>
						
						<FormControlLabel value="1"  onFocus={(event) => event.stopPropagation()}  control={<AzulRadio />} label="Si" />
						<FormControlLabel value="0" onFocus={(event) => event.stopPropagation()} control={<AzulRadio  />} label="No" />
						
					</RadioGroup>
    </FormControl>
		</Grid> 
		<Grid item md={12} >
		 <FormControl component="fieldset">
      <FormLabel component="legend">Reestenosis</FormLabel>
	  <RadioGroup row={true} aria-label="gender" name="lesion[restenosis]" onFocus={(event) => event.stopPropagation()} defaultValue={"si"}>
						
						<FormControlLabel value="1"  onFocus={(event) => event.stopPropagation()}  control={<AzulRadio />} label="Si" />
						<FormControlLabel value="0" onFocus={(event) => event.stopPropagation()} control={<AzulRadio  />} label="No" />
						
					</RadioGroup>
    </FormControl>
		</Grid> 
				<Grid item md={12}>
					<FormLabel component="legend">Angulación</FormLabel>

					<Select
						variant="outlined"
						id="demo-simple-select"
						defaultValue={"1"}
						name="lesion[angulacion]"
					>
					<MenuItem value={"0"}>Ninguno  </MenuItem>
					<MenuItem value={"1"}>40-60 </MenuItem>
					<MenuItem value={"2"}>60-70  </MenuItem>
					<MenuItem value={"3"}>+75  </MenuItem>
					</Select>

				</Grid>
				<Grid item md={12}>
					<FormLabel component="legend">Tipo de oclusión</FormLabel>

					<Select
						variant="outlined"
						id="demo-simple-select"
						defaultValue={"1"}
						name="lesion[tipo_oclusion]"
					>
					<MenuItem value={"0"}>Ninguno  </MenuItem>
					<MenuItem value={"1"}>{`< 3 Meses `}</MenuItem>
					<MenuItem value={"2"}>{`> 3 Meses `}  </MenuItem>
					<MenuItem value={"3"}>J-CTO   </MenuItem>

					</Select>

				</Grid>
				<Grid item md={12}>
					<FormLabel component="legend">Tipo de bifurcación</FormLabel>

					<Select
						variant="outlined"
						id="demo-simple-select"
						defaultValue={"1"}
						name="lesion[tipo_bifurcacion]"
					>
					<MenuItem value={"0"}>Ninguno  </MenuItem>
					<MenuItem value={"1"}>1,1,1 </MenuItem>
					<MenuItem value={"2"}>1,1,0 </MenuItem>
					<MenuItem value={"3"}>1,0,1 </MenuItem>
					<MenuItem value={"4"}>0,1,1 </MenuItem>
					<MenuItem value={"5"}>1,0,0  </MenuItem>
					<MenuItem value={"6"}>0,1,0 </MenuItem>
					<MenuItem value={"7"}>0,0,1 </MenuItem>

					</Select>

				</Grid>

			</Grid>
	  </Accordion>
	 )
 }

 const ComplicacionesEnSala = (props)=>{
	return(
	  <Accordion className={classes.accordion} expanded={expanded["complicacionesSala"]} onChange={handleChangeAccordion('complicacionesSala')}> 
		  <AccordionSummary
			  expandIcon={<ExpandMoreIcon />}
			  aria-controls="factores_de_riesgobh-content"
			  id="factores_de_riesgobh-header"
		  >
			<Typography className={`${classes.heading} ${classes.colorLetra}`}><strong>Complicaciones en Sala</strong></Typography>
	
		  </AccordionSummary>
		  <Grid container spacing={2}>
		<Grid item md={12} >
		  <FormControlLabel
			  control={<CustomColorCheckbox name="procedimiento[complicaciones_sala]"  value="1" checked={checkedCS["obito"]} onChange={handleChangeCS("obito")}  />}
			  label="Óbito"
		  />
		  
		  <FormControlLabel
			  
			  onFocus={(event) => event.stopPropagation()}
			  control={<CustomColorCheckbox name="procedimiento[complicaciones_sala]" value="2" checked={checkedCS["edema_agudo_pulmon"]} onChange={handleChangeCS("edema_agudo_pulmon")}  />}
			  label="Edema agudo de pulmón"
		  />
		  <FormControlLabel
			  
			  control={<CustomColorCheckbox name="procedimiento[complicaciones_sala]" value="3"  checked={checkedCS["paro_cardiorrespiratorio"]} onChange={handleChangeCS("paro_cardiorrespiratorio")} />}
			  label="Paro cardiorrespiratorio"
		  />
			  <FormControlLabel
			  
			  control={<CustomColorCheckbox name="procedimiento[complicaciones_sala]" value="4" checked={checkedCS["ARM"]} onChange={handleChangeCS("ARM")} />}
			  label="ARM"
		  />
		  <FormControlLabel
			  
			  control={<CustomColorCheckbox name="procedimiento[complicaciones_sala]" value="5" checked={checkedCS["arritmia_ventricular"]} onChange={handleChangeCS("arritmia_ventricular")} />}
			  label="Arritmia Ventricular"
		  />
		  <FormControlLabel
			  
			  control={<CustomColorCheckbox name="procedimiento[complicaciones_sala]" value="6"  checked={checkedCS["bloqueo_AV_completo"]} onChange={handleChangeCS("bloqueo_AV_completo")} />}
			  label="Bloqueo AV completo"
		  />
		  <FormControlLabel
			  
			  control={<CustomColorCheckbox name="procedimiento[complicaciones_sala]" value="7" checked={checkedCS["taponamiento"]} onChange={handleChangeCS("taponamiento")}  />}
			  label="Taponamiento"
		  />
		  <FormControlLabel
			  
			  control={<CustomColorCheckbox name="procedimiento[complicaciones_sala]" value="8" checked={checkedCS["oclusión_del_vaso_target"]} onChange={handleChangeCS("oclusión_del_vaso_target")}  />}
			  label="Oclusión del vaso Target"
		  />
		  <FormControlLabel
			  
			  control={<CustomColorCheckbox name="procedimiento[complicaciones_sala]" value="9" checked={checkedCS["stroke"]} onChange={handleChangeCS("stroke")}  />}
			  label="stroke"
		  />
		  </Grid>
		  </Grid>
	</Accordion>
	)
}

const Procedimiento = (props)=>{
	return(
		<Accordion className={classes.accordion}  expanded={expanded["procedimiento"]} onChange={handleChangeAccordion('procedimiento')}> 
		<AccordionSummary
			expandIcon={<ExpandMoreIcon />}
			aria-controls="procedimientobh-content"
			id="procedimientobh-header"
		>
	  <Typography className={`${classes.heading} ${classes.colorLetra}`}><strong>Procedimiento</strong></Typography>
	  
			</AccordionSummary>
		
		<Grid container spacing={1} >
		<Grid item md={12} >
			<FormLabel component="legend">Fecha de procedimiento </FormLabel>

			<TextField
				id="date"
				
				type="datetime-local"
				defaultValue=""
				name="procedimiento[fecha_procedimiento]"
				InputLabelProps={{
				shrink: true,
				}}
			/>
		</Grid> 
		<Grid item md={12}>
					<FormLabel component="legend">Acceso</FormLabel>

					<Select
						variant="outlined"
						id="demo-simple-select"
						defaultValue={"1"}
						name="procedimiento[tipo_acceso]"
					>
					<MenuItem value={"0"}>Radial   </MenuItem>
					<MenuItem value={"1"}>Femoral </MenuItem>
					<MenuItem value={"2"}>Humeral  </MenuItem>
					</Select>
				</Grid>
				<Grid item md={12}>
					<FormLabel component="legend">French</FormLabel>

					<Select
						variant="outlined"
						id="demo-simple-select"
						defaultValue={"1"}
						name="procedimiento[french]"
					>
					<MenuItem value={"0"}>5   </MenuItem>
					<MenuItem value={"1"}>6 </MenuItem>
					<MenuItem value={"2"}>7  </MenuItem>
					<MenuItem value={"3"}>8  </MenuItem>
					</Select>
				</Grid>
				<Grid item md={12}>
				<FormLabel component="legend">Contraste</FormLabel>
					<TextField
						id="num_cine"
						type="number"
						name="procedimiento[contraste]"
					/>
			</Grid>
			<Grid item md={12}>
				<FormLabel component="legend">Kerma</FormLabel>
					<TextField
						id="num_cine"
						type="number"
						name="procedimiento[kerma]"
					/>
			</Grid>
			<Grid item md={12}>
				<FormLabel component="legend">Tiempo Fluroscopia</FormLabel>
					<TextField
						id="num_cine"
						type="number"
						name="procedimiento[tipo_fluroscopia]"
					/>
			</Grid>
		</Grid>
		</Accordion>
	)
}
 const handleSubmit =(e)=> {
	let form={}
	let paciente = {}
	
 }
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={5} className={classes.image} />
      <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
        <div className={classes.paper}>
         
          <Typography component="h1" variant="h5">
           Formulario para sacar reportes
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
			<Paciente />
			<Antecedentes/>
			<FactoresRiesgo/>
			<Clinica />
			<DatosAngiograficos />
			
		
			<Lesiones />
			<Procedimiento />
			<ComplicacionesEnSala />
			
            <Button
		
            type="submit" 
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
             Consultar
            </Button>
          
           
          </form>
        </div>
      </Grid>
    </Grid>
  );
}